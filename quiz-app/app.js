(function () {
  "use strict";

  const STATE = {
    pool: [],
    queue: [],
    currentIndex: 0,
    score: 0,
    answeredCount: 0,
    selected: null,
    mode: "practice",
    history: [], // array of {question, selected, correct}
    finished: false,
  };

  // ---------- DOM helpers ----------
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  const setupSection = $("#setup");
  const quizSection = $("#quiz");
  const resultSection = $("#result");
  const moduleCheckboxes = $("#module-checkboxes");
  const totalQuestionsEl = $("#total-questions");
  const scoreDisplay = $("#score-display");
  const questionContainer = $("#question-container");
  const checkBtn = $("#check-btn");
  const nextBtn = $("#next-btn");
  const finishEarlyBtn = $("#finish-early-btn");
  const explanationEl = $("#explanation");
  const progressFill = $("#progress-fill");
  const progressText = $("#progress-text");

  // ---------- Build module checkboxes ----------
  function buildModuleCheckboxes() {
    const modulesMap = new Map();
    QUESTIONS.forEach((q) => {
      if (!modulesMap.has(q.module)) {
        modulesMap.set(q.module, { name: q.moduleName, count: 0 });
      }
      modulesMap.get(q.module).count += 1;
    });

    const sorted = Array.from(modulesMap.entries()).sort(
      (a, b) => a[0] - b[0]
    );

    moduleCheckboxes.innerHTML = "";
    sorted.forEach(([num, info]) => {
      const wrapper = document.createElement("label");
      wrapper.innerHTML = `<input type="checkbox" value="${num}" checked /> Module ${num} - ${info.name} (${info.count})`;
      moduleCheckboxes.appendChild(wrapper);
    });

    totalQuestionsEl.textContent = QUESTIONS.length;
  }

  // ---------- Shuffle ----------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---------- Get selected config ----------
  function getConfig() {
    const modules = $$("#module-checkboxes input:checked").map((c) =>
      Number(c.value)
    );
    const difficulty = $("#difficulty").value;
    const numStr = $("#num-questions").value;
    const num = Number(numStr);
    const mode = $("#mode").value;
    const types = $$('#setup .checkbox-group input[type="checkbox"]')
      .filter(
        (c) =>
          ["mc", "tf", "multi"].includes(c.value) && c.checked
      )
      .map((c) => c.value);
    return { modules, difficulty, num, mode, types };
  }

  // ---------- Build question queue from config ----------
  function buildQueue(cfg) {
    let pool = QUESTIONS.filter((q) => cfg.modules.includes(q.module));
    if (cfg.difficulty !== "all") {
      pool = pool.filter((q) => q.difficulty === cfg.difficulty);
    }
    if (cfg.types.length > 0) {
      pool = pool.filter((q) => cfg.types.includes(q.type));
    }
    pool = shuffle(pool);
    if (cfg.num > 0) pool = pool.slice(0, cfg.num);
    return pool;
  }

  // ---------- Start quiz ----------
  function startQuiz() {
    const cfg = getConfig();
    if (cfg.modules.length === 0) {
      alert("Select at least one module.");
      return;
    }
    if (cfg.types.length === 0) {
      alert("Select at least one question type.");
      return;
    }
    const queue = buildQueue(cfg);
    if (queue.length === 0) {
      alert("No questions match your criteria.");
      return;
    }
    STATE.pool = queue;
    STATE.queue = queue;
    STATE.currentIndex = 0;
    STATE.score = 0;
    STATE.answeredCount = 0;
    STATE.history = [];
    STATE.mode = cfg.mode;
    STATE.finished = false;
    setupSection.classList.add("hidden");
    resultSection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    updateScoreDisplay();
    renderQuestion();
  }

  // ---------- Render current question ----------
  function renderQuestion() {
    const q = STATE.queue[STATE.currentIndex];
    STATE.selected = null;
    explanationEl.classList.add("hidden");
    explanationEl.innerHTML = "";
    nextBtn.classList.add("hidden");
    checkBtn.classList.remove("hidden");
    checkBtn.disabled = false;
    nextBtn.textContent =
      STATE.currentIndex === STATE.queue.length - 1
        ? "Show results"
        : "Next question";

    const total = STATE.queue.length;
    const cur = STATE.currentIndex + 1;
    progressText.textContent = `Question ${cur} of ${total}`;
    progressFill.style.width = `${((cur - 1) / total) * 100}%`;

    let inputName = `q_${q.id}`;
    let optionsHtml = "";

    if (q.type === "multi") {
      optionsHtml = q.options
        .map(
          (opt, i) => `
        <label class="option" data-index="${i}">
          <input type="checkbox" name="${inputName}" value="${i}" />
          <span>${opt}</span>
        </label>`
        )
        .join("");
    } else {
      // mc and tf both single-choice radio
      optionsHtml = q.options
        .map(
          (opt, i) => `
        <label class="option" data-index="${i}">
          <input type="radio" name="${inputName}" value="${i}" />
          <span>${opt}</span>
        </label>`
        )
        .join("");
    }

    const answerHint =
      q.type === "multi"
        ? `<p class="question-hint">Select exactly ${q.answer.length} options.</p>`
        : "";

    questionContainer.innerHTML = `
      <div>
        <span class="module-tag">Module ${q.module} - ${q.moduleName}</span>
        <span class="difficulty-tag">${labelDifficulty(q.difficulty)} · ${labelType(q)}</span>
      </div>
      <p class="question">${formatQuestion(q)}</p>
      ${answerHint}
      <div class="options">${optionsHtml}</div>
    `;

    // Style selection on click
    $$("#question-container .option").forEach((opt) => {
      opt.addEventListener("click", () => {
        const input = opt.querySelector("input");
        if (q.type === "multi") {
          // Toggle done by native checkbox, just sync class
          setTimeout(() => {
            opt.classList.toggle("selected", input.checked);
          }, 0);
        } else {
          $$("#question-container .option").forEach((o) =>
            o.classList.remove("selected")
          );
          opt.classList.add("selected");
        }
      });
    });
  }

  function labelDifficulty(d) {
    if (d === "easy") return "Easy";
    if (d === "medium") return "Medium";
    return "Hard";
  }

  function labelType(q) {
    if (q.type === "mc") return "Multiple choice";
    if (q.type === "multi") return `Multiple answers · select ${q.answer.length}`;
    return "True/False";
  }

  function formatQuestion(q) {
    if (q.type !== "multi") return q.question;
    return q.question
      .replace(/\s*\(Select all that apply\)\.?$/i, "")
      .replace(/\s*\(Select \d+\.\)\.?$/i, "");
  }

  // ---------- Check answer ----------
  function checkAnswer() {
    const q = STATE.queue[STATE.currentIndex];
    let userAnswer;

    if (q.type === "multi") {
      userAnswer = $$('#question-container input[type="checkbox"]:checked').map(
        (i) => Number(i.value)
      );
      if (userAnswer.length === 0) {
        alert("Select at least one option.");
        return;
      }
      const expectedCount = Array.isArray(q.answer) ? q.answer.length : 1;
      if (userAnswer.length !== expectedCount) {
        alert(`Select exactly ${expectedCount} options.`);
        return;
      }
    } else {
      const radio = $('#question-container input[type="radio"]:checked');
      if (!radio) {
        alert("Select one option.");
        return;
      }
      userAnswer = Number(radio.value);
    }

    const correct = isCorrect(q, userAnswer);
    STATE.answeredCount += 1;
    if (correct) STATE.score += 1;
    STATE.history.push({
      question: q,
      userAnswer,
      correct,
    });

    if (STATE.mode === "practice") {
      revealAnswer(q, userAnswer, correct);
      checkBtn.classList.add("hidden");
      nextBtn.classList.remove("hidden");
    } else {
      // exam mode: go to next without revealing
      goNext();
    }

    updateScoreDisplay();
  }

  function isCorrect(q, userAnswer) {
    if (q.type === "multi") {
      const ans = Array.isArray(q.answer) ? q.answer : [q.answer];
      if (userAnswer.length !== ans.length) return false;
      const sortedA = userAnswer.slice().sort();
      const sortedB = ans.slice().sort();
      return sortedA.every((v, i) => v === sortedB[i]);
    }
    return userAnswer === q.answer;
  }

  function revealAnswer(q, userAnswer, correct) {
    const opts = $$("#question-container .option");
    const correctSet = new Set(
      Array.isArray(q.answer) ? q.answer : [q.answer]
    );
    const userSet = new Set(
      Array.isArray(userAnswer) ? userAnswer : [userAnswer]
    );

    opts.forEach((opt, i) => {
      opt.classList.remove("selected");
      const isCorrectOption = correctSet.has(i);
      const isUserPicked = userSet.has(i);
      opt.style.cursor = "default";
      const input = opt.querySelector("input");
      if (input) input.disabled = true;

      if (isCorrectOption && isUserPicked) {
        opt.classList.add("correct");
      } else if (isCorrectOption && !isUserPicked) {
        opt.classList.add("was-correct");
      } else if (!isCorrectOption && isUserPicked) {
        opt.classList.add("incorrect");
      }
    });

    explanationEl.classList.remove("hidden");
    explanationEl.innerHTML = `
      <strong>${correct ? "✓ Correct!" : "✗ Incorrect"}</strong>
      ${q.explanation}
    `;
  }

  function goNext() {
    if (STATE.currentIndex < STATE.queue.length - 1) {
      STATE.currentIndex += 1;
      renderQuestion();
    } else {
      showResults();
    }
  }

  function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${STATE.score} / ${STATE.answeredCount}`;
  }

  // ---------- Results ----------
  function showResults() {
    STATE.finished = true;
    quizSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    const total = STATE.history.length;
    const correct = STATE.history.filter((h) => h.correct).length;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

    $("#result-score").textContent = correct;
    $("#result-total").textContent = total;
    $("#result-percent").textContent = pct + "%";

    let msg;
    if (pct >= 85)
      msg = "Excellent result. You look well prepared for the exam.";
    else if (pct >= 70) msg = "Good work. Focus on the weaker areas and you are close.";
    else if (pct >= 50) msg = "Good start, but keep practicing the modules where you missed questions.";
    else msg = "More study is needed. Review the material and run more practice rounds.";
    $("#result-message").textContent = msg;

    const reviewEl = $("#review-container");
    reviewEl.innerHTML = "";
    STATE.history.forEach((h, idx) => {
      const q = h.question;
      const correctTxt = formatAnswer(q, q.answer);
      const userTxt = formatAnswer(q, h.userAnswer);
      const item = document.createElement("div");
      item.className = "review-item";
      item.innerHTML = `
        <div>
          <span class="q-num">Question ${idx + 1}</span> ·
          <span class="verdict ${h.correct ? "right" : "wrong"}">${
        h.correct ? "Correct" : "Incorrect"
      }</span>
          · Module ${q.module}
        </div>
        <div><strong>${q.question}</strong></div>
        <div>Your answer: ${userTxt}</div>
        <div>Correct answer: ${correctTxt}</div>
        <div class="small-explain">${q.explanation}</div>
      `;
      reviewEl.appendChild(item);
    });
  }

  function formatAnswer(q, ans) {
    if (Array.isArray(ans)) {
      return ans.map((i) => q.options[i]).join(", ");
    }
    return q.options[ans];
  }

  // ---------- Event bindings ----------
  document.addEventListener("DOMContentLoaded", () => {
    buildModuleCheckboxes();

    $("#start-btn").addEventListener("click", startQuiz);
    checkBtn.addEventListener("click", checkAnswer);
    nextBtn.addEventListener("click", goNext);
    finishEarlyBtn.addEventListener("click", () => {
      if (confirm("Finish early and show results?")) showResults();
    });
    $("#try-again-btn").addEventListener("click", () => {
      // restart with same config
      STATE.currentIndex = 0;
      STATE.score = 0;
      STATE.answeredCount = 0;
      STATE.history = [];
      STATE.queue = shuffle(STATE.pool);
      resultSection.classList.add("hidden");
      quizSection.classList.remove("hidden");
      updateScoreDisplay();
      renderQuestion();
    });
    $("#new-config-btn").addEventListener("click", () => {
      resultSection.classList.add("hidden");
      setupSection.classList.remove("hidden");
      updateScoreDisplay();
    });
    $("#restart-btn").addEventListener("click", () => {
      if (
        STATE.queue.length > 0 &&
        !STATE.finished &&
        !confirm("Abort the current quiz?")
      )
        return;
      quizSection.classList.add("hidden");
      resultSection.classList.add("hidden");
      setupSection.classList.remove("hidden");
      STATE.score = 0;
      STATE.answeredCount = 0;
      STATE.history = [];
      updateScoreDisplay();
    });
    $("#select-all").addEventListener("click", () => {
      $$("#module-checkboxes input").forEach((c) => (c.checked = true));
    });
    $("#select-none").addEventListener("click", () => {
      $$("#module-checkboxes input").forEach((c) => (c.checked = false));
    });
  });
})();
