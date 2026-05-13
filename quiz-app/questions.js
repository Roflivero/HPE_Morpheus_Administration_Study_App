// HPE Morpheus Exam Question Bank - exam-style study questions from MorpheusKursmaterial.pdf OCR
// Source: HPE Morpheus Enterprise Software Administration Student Guide H45ZD-SG-A01-E
// Total questions: 149
const QUESTIONS = [
  {
    "id": 1,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "easy",
    "question": "En arkitekt ska sammanfatta Morpheus värde för ledningen. Vilken uppsättning beskriver plattformens fem pelare?",
    "options": [
      "Build, Consume, Govern, Automate, Optimize",
      "Plan, Deploy, Monitor, Report, Analyze",
      "Create, Store, Secure, Backup, Archive",
      "Discover, Patch, Harden, Audit, Retire"
    ],
    "answer": 0,
    "explanation": "Kursen presenterar Morpheus kring pelarna Build, Consume, Govern, Automate och Optimize (kurssidan 20).",
    "sourcePage": 20
  },
  {
    "id": 2,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "medium",
    "question": "Ett team vill bygga en hybrid cloud-plattform med snabb provisioning och integration mot befintliga verktyg. Vilken pelare beskriver detta bäst?",
    "options": [
      "Hybrid cloud-miljöer, konsoliderad publik cloud-åtkomst och snabb provisionering",
      "Endast kostnadsrapporter och budgets",
      "Incidenter, checks och alert rules",
      "Skapande av användare och roller"
    ],
    "answer": 0,
    "explanation": "Build handlar om att skapa hybrid cloud-miljöer, konsolidera public cloud access, snabb provisionering och integration mot befintliga verktyg (kurssidan 20).",
    "sourcePage": 20
  },
  {
    "id": 3,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "medium",
    "question": "Användare vill beställa resurser själva från en gemensam portal över flera clouds. Vilken Morpheus-pelare adresserar detta?",
    "options": [
      "Att ge användare en single console och self-service provisioning över privata och publika clouds",
      "Att ersätta alla identity sources",
      "Att endast hantera public cloud billing",
      "Att skapa backupfiler av appliance-databaser"
    ],
    "answer": 0,
    "explanation": "Consume omfattar single console, provisioning till nästan alla private/public cloud-teknologier, snabbare deployment och self-service (kurssidan 20).",
    "sourcePage": 20
  },
  {
    "id": 4,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "multi",
    "difficulty": "hard",
    "question": "En organisation vill använda Morpheus för att styra åtkomst, isolera miljöer och införa kontroller. Vilka funktioner hör till Govern-pelaren?",
    "options": [
      "Fine-grained RBAC via grupper",
      "Multi-tenancy för isolerade miljöer",
      "Policies riktade mot groups, clouds, users eller roles",
      "Golden image build automation som huvudsyfte"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Govern beskrivs som kontroll över vem som kan göra vad och var via RBAC, identity integration, multi-tenancy och policies (kurssidan 20).",
    "sourcePage": 20
  },
  {
    "id": 5,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "tf",
    "difficulty": "easy",
    "question": "Morpheus skapades ursprungligen av Bertram Labs för internt bruk innan Morpheus Data blev ett separat företag.",
    "options": [
      "Sant",
      "Falskt"
    ],
    "answer": 0,
    "explanation": "Kursen beskriver Morpheus som born out of necessity och skapat av Bertram Labs DevOps och Business Transformation team (kurssidan 21).",
    "sourcePage": 21
  },
  {
    "id": 6,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "easy",
    "question": "Du granskar Morpheus historik. Vilket år började Bertram Labs bygga den interna plattformen?",
    "options": [
      "2010",
      "2012",
      "2015",
      "2018"
    ],
    "answer": 0,
    "explanation": "Bertram började bygga verktyget 2010 (kurssidan 21).",
    "sourcePage": 21
  },
  {
    "id": 7,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "easy",
    "question": "När blev Morpheus Data ett separat företag från Bertram Labs?",
    "options": [
      "2010",
      "2013",
      "2015",
      "2020"
    ],
    "answer": 2,
    "explanation": "Efter fem års intern användning spun Morpheus Data ut 2015 (kurssidan 21).",
    "sourcePage": 21
  },
  {
    "id": 8,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "medium",
    "question": "En administratör behöver remote console till en provisionerad VM. Vilken application tier-komponent används?",
    "options": [
      "Nginx",
      "Tomcat",
      "Guacamole",
      "RabbitMQ"
    ],
    "answer": 2,
    "explanation": "Guacamole listas som application tier-komponenten som provides remote console (kurssidan 22).",
    "sourcePage": 22
  },
  {
    "id": 9,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du felsöker inkommande HTTPS-trafik till appliance. Vilken komponent sköter SSL termination och proxy/cache framför Tomcat?",
    "options": [
      "Nginx",
      "MySQL",
      "Elasticsearch",
      "Check Server"
    ],
    "answer": 0,
    "explanation": "Nginx beskrivs som SSL termination och cache proxy för Tomcat (kurssidan 22).",
    "sourcePage": 22
  },
  {
    "id": 10,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "medium",
    "question": "I en HA-design behöver du förstå messaging tier. Vilken roll har RabbitMQ?",
    "options": [
      "Message queuing via AMQP",
      "Transactionell datalagring",
      "Remote console",
      "DNS-zonhantering"
    ],
    "answer": 0,
    "explanation": "RabbitMQ är messaging tier och använder AMQP (kurssidan 22).",
    "sourcePage": 22
  },
  {
    "id": 11,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du dimensionerar non-transactional tier. Vilken typ av data hanterar Elasticsearch i Morpheus?",
    "options": [
      "Log aggregation och temporal data som stats, metrics och logs",
      "Primär transaktionsdatabas",
      "SSL reverse proxy",
      "Identity provider"
    ],
    "answer": 0,
    "explanation": "Elasticsearch är non-transactional tier för log aggregation och temporal aggregation data (kurssidan 22).",
    "sourcePage": 22
  },
  {
    "id": 12,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "hard",
    "question": "Du designar RabbitMQ för HA. Vilket minsta antal noder anger kursen för clustered configuration?",
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "answer": 2,
    "explanation": "RabbitMQ kräver minst tre noder för clustered configurations på grund av elections vid failover (kurssidan 22).",
    "sourcePage": 22
  },
  {
    "id": 13,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "mc",
    "difficulty": "easy",
    "question": "Du planerar installationen av Morpheus appliance. Vilken plattformstyp ska du förvänta dig?",
    "options": [
      "Linux-baserad software appliance",
      "Windows Server appliance",
      "FreeBSD appliance",
      "macOS appliance"
    ],
    "answer": 0,
    "explanation": "Kursen beskriver Morpheus som en Linux-baserad software appliance (kurssidan 22).",
    "sourcePage": 22
  },
  {
    "id": 14,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "mc",
    "difficulty": "easy",
    "question": "Efter att ha ändrat Morpheus-konfigurationen behöver du applicera ändringarna. Vilket kommando använder du?",
    "options": [
      "morpheus-ctl reconfigure",
      "morpheus apply",
      "morpheus-ui reload",
      "morpheus-agent sync"
    ],
    "answer": 0,
    "explanation": "Installations- och konfigurationsflödet använder morpheus-ctl reconfigure (kurssidan 33).",
    "sourcePage": 33
  },
  {
    "id": 15,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du ska ändra huvudkonfigurationen för appliance. Vilken fil ska du redigera?",
    "options": [
      "/etc/morpheus/morpheus.rb",
      "/var/log/morpheus/current",
      "/opt/morpheus/conf/application.yml",
      "/etc/morpheus/license.key"
    ],
    "answer": 0,
    "explanation": "Huvudkonfigurationsfilen anges som /etc/morpheus/morpheus.rb (kurssidan 33).",
    "sourcePage": 33
  },
  {
    "id": 16,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du behöver hitta var appliance lagrar genererade secrets och lösenord. Vilken fil används?",
    "options": [
      "/etc/morpheus/morpheus-secrets.json",
      "/var/opt/morpheus/secrets.txt",
      "/opt/morpheus/passwords.yml",
      "/etc/shadow.morpheus"
    ],
    "answer": 0,
    "explanation": "Kursen pekar ut /etc/morpheus/morpheus-secrets.json för secrets (kurssidan 33).",
    "sourcePage": 33
  },
  {
    "id": 17,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "mc",
    "difficulty": "easy",
    "question": "Du ska kontrollera status och starta om Morpheus services från CLI. Vilket verktyg använder du?",
    "options": [
      "morpheus-ctl",
      "system-config-morpheus",
      "morpheus-agent",
      "morpheus-cli only"
    ],
    "answer": 0,
    "explanation": "morpheus-ctl används för servicehantering som start, stop, restart, status och tail (kurssidan 35).",
    "sourcePage": 35
  },
  {
    "id": 18,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du verifierar vilka tjänster som finns i en all-in-one Morpheus appliance. Vilka tjänster ingår?",
    "options": [
      "morpheus-ui",
      "mysql",
      "rabbitmq",
      "postgresql"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "AIO-installationen innehåller bland annat morpheus-ui, mysql, rabbitmq, elasticsearch, check-server, guacd och nginx (kurssidan 35).",
    "sourcePage": 35
  },
  {
    "id": 19,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du felsöker en Morpheus-service och behöver dess loggar. Var letar du först?",
    "options": [
      "/var/log/morpheus/[SERVICE NAME]",
      "/etc/morpheus/logs",
      "/opt/morpheus/ui/logs-only",
      "/var/tmp/morpheus"
    ],
    "answer": 0,
    "explanation": "Service-loggarna ligger under /var/log/morpheus/[SERVICE NAME] (kurssidan 36).",
    "sourcePage": 36
  },
  {
    "id": 20,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "mc",
    "difficulty": "hard",
    "question": "Du behöver höja eller sänka loggnivån för morpheus-ui. Var görs detta enligt kursen?",
    "options": [
      "/opt/morpheus/conf/logback.xml",
      "/etc/morpheus/morpheus.rb",
      "/var/log/morpheus/morpheus-ui/current",
      "Administration > Plans & Pricing"
    ],
    "answer": 0,
    "explanation": "Log levels för morpheus-ui kan justeras i /opt/morpheus/conf/logback.xml (kurssidan 36).",
    "sourcePage": 36
  },
  {
    "id": 21,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "mc",
    "difficulty": "medium",
    "question": "Appliance ska använda en global proxy för externa anslutningar. Var konfigureras den i UI?",
    "options": [
      "Administration > Settings > Appliance > Proxy Settings",
      "Provisioning > Instances > Proxy",
      "Operations > Costing > Proxy",
      "Library > Templates > Proxy"
    ],
    "answer": 0,
    "explanation": "Global proxy konfigureras under Appliance Proxy Settings (kurssidan 41).",
    "sourcePage": 41
  },
  {
    "id": 22,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "multi",
    "difficulty": "medium",
    "question": "En användare ska få rätt UI-vy i Morpheus. Vilka personas finns i plattformen?",
    "options": [
      "Standard",
      "Service Catalog",
      "Virtual Desktop",
      "Costing Only"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kursen anger tre personas: Standard, Service Catalog och Virtual Desktop (kurssidan 46).",
    "sourcePage": 46
  },
  {
    "id": 23,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "mc",
    "difficulty": "easy",
    "question": "Du ska ge ett team åtkomst till rätt clouds och instances. Vad är en Group i Morpheus?",
    "options": [
      "En logisk container och RBAC-scope för clouds och instanser",
      "En billing currency",
      "En agentinstallation",
      "En typ av price set"
    ],
    "answer": 0,
    "explanation": "Groups används som logiska containers och access-scope (kurssidan 48).",
    "sourcePage": 48
  },
  {
    "id": 24,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du lägger till vCenter, AWS eller Azure i Morpheus. Vad representerar objektet Cloud?",
    "options": [
      "En integration till en cloud-leverantör eller hypervisor",
      "Enbart AWS-konto",
      "Ett budgetobjekt",
      "En användarroll"
    ],
    "answer": 0,
    "explanation": "Clouds är integrationer till cloud providers eller hypervisors (kurssidan 52).",
    "sourcePage": 52
  },
  {
    "id": 25,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du ska lägga till en private cloud-integration i Morpheus. Vilka alternativ är exempel på private cloud-typer?",
    "options": [
      "VMware vCenter",
      "Nutanix",
      "OpenStack",
      "Slack"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Private cloud-exempel inkluderar vCenter, Nutanix, OpenStack, Hyper-V med flera (kurssidan 52).",
    "sourcePage": 52
  },
  {
    "id": 26,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du ska lägga till en public cloud-integration i Morpheus. Vilka alternativ är public cloud-typer?",
    "options": [
      "AWS",
      "Azure",
      "Google Cloud",
      "Infoblox"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Public cloud-exempel inkluderar AWS, Azure, GCP, OCI med flera (kurssidan 52).",
    "sourcePage": 52
  },
  {
    "id": 27,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du vill återanvända autentiseringsuppgifter mellan flera integrationsobjekt. Vad är syftet med Credentials?",
    "options": [
      "Centralt hanterade och återanvändbara autentiseringsuppgifter",
      "Att definiera service plan-storlekar",
      "Att lagra invoice line items",
      "Att välja monitoring severity"
    ],
    "answer": 0,
    "explanation": "Credentials används centralt och kan återanvändas mellan integrationer (kurssidan 54).",
    "sourcePage": 54
  },
  {
    "id": 28,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "multi",
    "difficulty": "hard",
    "question": "Du skapar credentials för cloud- och integrationsåtkomst. Vilka credential-typer stöds?",
    "options": [
      "Username And Password",
      "Access Key and Secret Key",
      "Email And Private Key",
      "Biometric Authentication"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kursen listar bland annat Username and Password, Access Key and Secret Key samt Email and Private Key (kurssidan 54).",
    "sourcePage": 54
  },
  {
    "id": 29,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du ser att nightly sync körs kl. 00:00 UTC. Vad används den främst till?",
    "options": [
      "Kör intensiva operationer som pricing och AWS guidance recommendations",
      "Raderar alla gamla instanser",
      "Skapar tenant roles",
      "Startar om appliance"
    ],
    "answer": 0,
    "explanation": "Nightly sync används för intensiva operationer som pricing och AWS Guidance Recommendations (kurssidan 55).",
    "sourcePage": 55
  },
  {
    "id": 30,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du vill att Morpheus ska skapa DNS-poster automatiskt vid provisioning. Vilka DNS-integrationer kan användas?",
    "options": [
      "AWS Route 53",
      "Microsoft DNS",
      "BIND",
      "RabbitMQ DNS"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "DNS-integrations inkluderar Route 53, Microsoft DNS, BIND, Infoblox och PowerDNS (kurssidan 56).",
    "sourcePage": 56
  },
  {
    "id": 31,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du vill att Morpheus ska allokera IP-adresser automatiskt. Vilka IPAM-integrationer kan användas?",
    "options": [
      "phpIPAM",
      "BlueCat",
      "Infoblox",
      "Tomcat IPAM"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "IPAM-integrations inkluderar phpIPAM, BlueCat, Infoblox, Microsoft IPAM och SolarWinds (kurssidan 57).",
    "sourcePage": 57
  },
  {
    "id": 32,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "tf",
    "difficulty": "medium",
    "question": "Discovered resources från cloud inventory kan ge synlighet över resurser som inte skapades av Morpheus.",
    "options": [
      "Sant",
      "Falskt"
    ],
    "answer": 0,
    "explanation": "Cloud inventory gör att existerande resurser kan upptäckas och visas som discovered (kurssidan 100).",
    "sourcePage": 100
  },
  {
    "id": 33,
    "module": 4,
    "moduleName": "Users and Roles",
    "type": "mc",
    "difficulty": "easy",
    "question": "Du förklarar åtkomstmodellen för en ny administratör. Vilka objekt används främst för access control i modulen?",
    "options": [
      "Users och Roles",
      "Budgets och Prices",
      "Checks och Incidents",
      "Plans och Price Sets"
    ],
    "answer": 0,
    "explanation": "Modulen fokuserar på users, roles och RBAC-strategi (kurssidan 60).",
    "sourcePage": 60
  },
  {
    "id": 34,
    "module": 4,
    "moduleName": "Users and Roles",
    "type": "mc",
    "difficulty": "medium",
    "question": "En användare ska få vissa menyer och resurser men inte andra. Vad styr en User Role?",
    "options": [
      "Vad en användare får se och göra i Morpheus",
      "Vilken databas MySQL använder",
      "Vilket pris en plan har",
      "Vilken port agenten använder"
    ],
    "answer": 0,
    "explanation": "User roles avgör behörigheter till funktioner och resurser (kurssidan 63).",
    "sourcePage": 63
  },
  {
    "id": 35,
    "module": 4,
    "moduleName": "Users and Roles",
    "type": "mc",
    "difficulty": "medium",
    "question": "En permission är satt till Default i en roll. Vilken inställning avgör då den faktiska nivån?",
    "options": [
      "Nivån som används för permissions satta till Default",
      "Automatisk adminaccess",
      "Den lägsta möjliga cloud-planen",
      "Standardtenantens valuta"
    ],
    "answer": 0,
    "explanation": "Default Access är basnivån som används när en permission har level Default (kurssidan 65).",
    "sourcePage": 65
  },
  {
    "id": 36,
    "module": 4,
    "moduleName": "Users and Roles",
    "type": "mc",
    "difficulty": "medium",
    "question": "Företaget vill använda Active Directory eller LDAP för inloggning. Vilken Morpheus-funktion används?",
    "options": [
      "Identity Source",
      "Price Set",
      "Monitoring Group",
      "Virtual Image"
    ],
    "answer": 0,
    "explanation": "AD/LDAP hanteras via identity source integration (kurssidan 68).",
    "sourcePage": 68
  },
  {
    "id": 37,
    "module": 4,
    "moduleName": "Users and Roles",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du ska integrera extern autentisering för användare. Vilka identity source-typer stöds?",
    "options": [
      "LDAP/Active Directory",
      "SAML 2.0",
      "OAuth 2.0",
      "RabbitMQ AMQP"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Identity sources inkluderar LDAP/AD, SAML 2.0, OAuth 2.0 och JumpCloud (kurssidan 68).",
    "sourcePage": 68
  },
  {
    "id": 38,
    "module": 4,
    "moduleName": "Users and Roles",
    "type": "tf",
    "difficulty": "medium",
    "question": "Roller kan begränsa åtkomst till bland annat Groups, Instance Types, Blueprints och Workflows.",
    "options": [
      "Sant",
      "Falskt"
    ],
    "answer": 0,
    "explanation": "Kursen beskriver rollbehörigheter som styr åtkomst till flera resurs- och funktionstyper (kurssidan 65).",
    "sourcePage": 65
  },
  {
    "id": 39,
    "module": 4,
    "moduleName": "Users and Roles",
    "type": "mc",
    "difficulty": "hard",
    "question": "Mega Corp vill designa RBAC efter team och miljöer. Vad bör strategin främst baseras på?",
    "options": [
      "Teamens ansvar och vilka miljöer de får använda",
      "Endast antal CPU-kärnor",
      "Endast faktureringsvaluta",
      "Vilken webbläsare användaren har"
    ],
    "answer": 0,
    "explanation": "Mega Corp använder separata team och scopes som utveckling, produktion och finance (kurssidan 13).",
    "sourcePage": 13
  },
  {
    "id": 40,
    "module": 4,
    "moduleName": "Users and Roles",
    "type": "mc",
    "difficulty": "medium",
    "question": "En subtenant-admin ska kunna skapa user roles. Vilken permission krävs?",
    "options": [
      "Admin: Roles",
      "Monitoring: Logs",
      "Plans: Prices",
      "Cypher: Read Only"
    ],
    "answer": 0,
    "explanation": "Subtenant administrators med Admin: Roles kan skapa user roles i subtenanten (kurssidan 110).",
    "sourcePage": 110
  },
  {
    "id": 41,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "mc",
    "difficulty": "easy",
    "question": "Du behöver samla in extra värden i ett provisioning-formulär. Vad är Inputs i Morpheus?",
    "options": [
      "Custom formulärfält som kan samla in data vid provisioning eller workflow-körning",
      "Databasindex i MySQL",
      "Monitoring checks",
      "Automatiska invoices"
    ],
    "answer": 0,
    "explanation": "Inputs används som anpassade formulärfält (kurssidan 72).",
    "sourcePage": 72
  },
  {
    "id": 42,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du bygger ett provisioning-formulär med custom inputs. Vilka input-typer är giltiga exempel?",
    "options": [
      "Text",
      "Number",
      "Password",
      "Price Set"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kursen listar input-typer som Text, Number, Password, Select, Checkbox, Code Editor och Textarea (kurssidan 73).",
    "sourcePage": 73
  },
  {
    "id": 43,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "mc",
    "difficulty": "medium",
    "question": "Ett select-fält ska fyllas med kontrollerade val. Vad är en Option List?",
    "options": [
      "En källa till valbara alternativ för inputs",
      "En loggfil för morpheus-ui",
      "En typ av incident",
      "En cloud costing setting"
    ],
    "answer": 0,
    "explanation": "Option Lists används för att fylla inputs med valbara alternativ (kurssidan 74).",
    "sourcePage": 74
  },
  {
    "id": 44,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du vill fylla ett select-fält dynamiskt med värden. Vilka källor kan en Option List använda?",
    "options": [
      "Manual",
      "REST",
      "LDAP",
      "Cypher"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Option Lists kan bland annat vara Manual, REST, LDAP, Morpheus Object och Cypher-baserade (kurssidan 74).",
    "sourcePage": 74
  },
  {
    "id": 45,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "tf",
    "difficulty": "medium",
    "question": "Inputs kan återanvändas i Blueprints, Instance Types och Catalog Items.",
    "options": [
      "Sant",
      "Falskt"
    ],
    "answer": 0,
    "explanation": "Inputs återanvänds i flera Morpheus-konstruktioner, inklusive Blueprints, Instance Types och Catalog Items (kurssidan 75).",
    "sourcePage": 75
  },
  {
    "id": 46,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "mc",
    "difficulty": "hard",
    "question": "Du behöver dölja känslig inmatning i ett formulär. Vilken input-typ passar bäst?",
    "options": [
      "De standardiserar val som applikationsnamn eller supportnivå för policies och provisioning",
      "De ersätter RabbitMQ",
      "De skapar invoices",
      "De installerar Morpheus agent"
    ],
    "answer": 0,
    "explanation": "Mega Corp använder kontrollerade val för naming, supportnivåer och provisioningflöden (kurssidan 13).",
    "sourcePage": 13
  },
  {
    "id": 47,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "mc",
    "difficulty": "medium",
    "question": "Ett formulär ska hämta val från ett externt system vid körning. Vad är fördelen med en REST-baserad Option List?",
    "options": [
      "Password",
      "Text",
      "Checkbox",
      "Number"
    ],
    "answer": 0,
    "explanation": "Password-input används för känsliga värden (kurssidan 73).",
    "sourcePage": 73
  },
  {
    "id": 48,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "mc",
    "difficulty": "medium",
    "question": "En kund vill begränsa vem som får provisionera vad, hur länge resurser lever och hur de namnges. Vad används Policies till?",
    "options": [
      "Alternativ kan hämtas dynamiskt från externa system",
      "De stänger av alla policies",
      "De ersätter tenant roles",
      "De kräver ingen form av data source"
    ],
    "answer": 0,
    "explanation": "REST-källor gör att values kan hämtas dynamiskt (kurssidan 74).",
    "sourcePage": 74
  },
  {
    "id": 49,
    "module": 6,
    "moduleName": "Policies",
    "type": "mc",
    "difficulty": "easy",
    "question": "Ett provisioningflöde ska kräva godkännande innan resurser skapas. Vilken policytyp används?",
    "options": [
      "Att styra och begränsa beteenden som provisioning, naming, expiry och resursanvändning",
      "Att rendera UI-teman",
      "Att köra AMQP-köer",
      "Att skapa DNS-servrar"
    ],
    "answer": 0,
    "explanation": "Policies lägger kontroller över användare, roller, grupper, clouds och globala scopes (kurssidan 78).",
    "sourcePage": 78
  },
  {
    "id": 50,
    "module": 6,
    "moduleName": "Policies",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du ska begränsa och styra provisioning med policies. Vilka är exempel på policy-typer?",
    "options": [
      "Backup",
      "Expire Date",
      "Provision Approval",
      "Max Cores/Memory/Storage"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Kursen listar många policy-typer, inklusive backup, expiry, approvals och resource limits (kurssidan 79).",
    "sourcePage": 79
  },
  {
    "id": 51,
    "module": 6,
    "moduleName": "Policies",
    "type": "mc",
    "difficulty": "medium",
    "question": "En instance matchar både en global policy och en group-policy. Vilken policy gäller?",
    "options": [
      "Provision Approval Policy",
      "Budget Cost Analysis",
      "VM Check Policy",
      "Identity Source Policy"
    ],
    "answer": 0,
    "explanation": "Provision Approval Policy används för approval-flöden (kurssidan 79).",
    "sourcePage": 79
  },
  {
    "id": 52,
    "module": 6,
    "moduleName": "Policies",
    "type": "mc",
    "difficulty": "hard",
    "question": "Du prioriterar flera policies som matchar samma request. Vilken ordning anger kursmaterialet?",
    "options": [
      "Group-policyn vinner över Global",
      "Global vinner alltid",
      "Båda ignoreras",
      "Senast skapad vinner alltid"
    ],
    "answer": 0,
    "explanation": "Group scope har högre prioritet än Global i policysammanhang (kurssidan 80).",
    "sourcePage": 80
  },
  {
    "id": 53,
    "module": 6,
    "moduleName": "Policies",
    "type": "mc",
    "difficulty": "hard",
    "question": "Vilken ordning anges för policy-prioritet i frågebanken och kursanteckningen?",
    "options": [
      "Cloud > Group > Role > User > Global",
      "Global > User > Role > Group > Cloud",
      "User > Global > Cloud > Role > Group",
      "Role > Cloud > Global > User > Group"
    ],
    "answer": 0,
    "explanation": "Policy-prioriteten anges som Cloud, Group, Role, User och Global (kurssidan 80).",
    "sourcePage": 80
  },
  {
    "id": 54,
    "module": 6,
    "moduleName": "Policies",
    "type": "tf",
    "difficulty": "medium",
    "question": "Hard limits stoppar åtgärden, medan soft limits kan användas för varning eller mjukare kontroll.",
    "options": [
      "Sant",
      "Falskt"
    ],
    "answer": 0,
    "explanation": "Kursen skiljer mellan hårda begränsningar och mjukare kontroller/varningar (kurssidan 79).",
    "sourcePage": 79
  },
  {
    "id": 55,
    "module": 6,
    "moduleName": "Policies",
    "type": "mc",
    "difficulty": "medium",
    "question": "Operations-teamet måste ange cost center på alla instanser. Vilken policytyp stödjer kravet?",
    "options": [
      "Expire Date Policy",
      "Monitoring Check Policy",
      "Cloud Costing Setting",
      "Cypher Lease"
    ],
    "answer": 0,
    "explanation": "Training scenario anger att utvecklingssystem ska expira efter 20 dagar (kurssidan 13).",
    "sourcePage": 13
  },
  {
    "id": 56,
    "module": 6,
    "moduleName": "Policies",
    "type": "mc",
    "difficulty": "medium",
    "question": "Mega Corp vill standardisera instansnamn mellan grupper. Vilken policytyp används?",
    "options": [
      "Tag Compliance Policy",
      "Virtual Image Policy",
      "Guacamole Policy",
      "Price Plan Policy"
    ],
    "answer": 0,
    "explanation": "Operations-teamets instanser måste taggas med cost center och detta matchar tag compliance-kontroller (kurssidan 13).",
    "sourcePage": 13
  },
  {
    "id": 57,
    "module": 6,
    "moduleName": "Policies",
    "type": "mc",
    "difficulty": "medium",
    "question": "Vilken policytyp används för standardiserad namngivning av instanser?",
    "options": [
      "Hostname eller Instance Name policy",
      "Alert Rule",
      "Currency Conversion",
      "Service Plan"
    ],
    "answer": 0,
    "explanation": "Kursens Mega Corp-labb använder naming policies för production och andra grupper (kurssidan 93).",
    "sourcePage": 93
  },
  {
    "id": 58,
    "module": 6,
    "moduleName": "Policies",
    "type": "tf",
    "difficulty": "medium",
    "question": "Policies kan riktas mot flera scopes, exempelvis users, roles, groups, clouds eller globalt.",
    "options": [
      "Sant",
      "Falskt"
    ],
    "answer": 0,
    "explanation": "Govern-pelaren och policy-modulen beskriver policies mot flera scopes (kurssidan 20).",
    "sourcePage": 20
  },
  {
    "id": 59,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "mc",
    "difficulty": "easy",
    "question": "Du konfigurerar en instance type för olika clouds eller versioner. Vad definierar en Layout?",
    "options": [
      "En resurs eller tjänst som provisioneras och hanteras",
      "Endast en DNS-zon",
      "Endast en användarroll",
      "En currency conversion provider"
    ],
    "answer": 0,
    "explanation": "Instances representerar en resource eller service (kurssidan 85).",
    "sourcePage": 85
  },
  {
    "id": 60,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du bygger en layout med en VM eller container. Vad representerar en Node Type?",
    "options": [
      "Teknologin och konfigurationen för hur en instance type provisioneras",
      "Användarens lösenord",
      "En invoice line item",
      "En alert contact"
    ],
    "answer": 0,
    "explanation": "Layouts definierar teknologin och används under instance type-konfiguration (kurssidan 85).",
    "sourcePage": 85
  },
  {
    "id": 61,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du ska välja basimage för provisioning. Vad representerar Virtual Images?",
    "options": [
      "En VM eller container i layouten",
      "En tenant role",
      "En billing API-endpoint",
      "En dashboard"
    ],
    "answer": 0,
    "explanation": "Node Types representerar en VM eller container (kurssidan 85).",
    "sourcePage": 85
  },
  {
    "id": 62,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "mc",
    "difficulty": "medium",
    "question": "Vad representerar Virtual Images?",
    "options": [
      "Bas-binaries för compute image",
      "Monitoring states",
      "RBAC permissions",
      "Currency rates"
    ],
    "answer": 0,
    "explanation": "Virtual Images är pointers till base binaries för compute images (kurssidan 90).",
    "sourcePage": 90
  },
  {
    "id": 63,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du konfigurerar images för provisioning. Vilka virtual image-typer förekommer i Morpheus?",
    "options": [
      "System virtual images",
      "Synced user virtual images",
      "Local uploaded user virtual images",
      "Incident virtual images"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kursen beskriver system images, synced user images och lokalt uppladdade/public cloud images (kurssidan 90).",
    "sourcePage": 90
  },
  {
    "id": 64,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du felsöker ett typiskt VMware-provisioningflöde. Vilka steg ingår i flödet?",
    "options": [
      "Kontrollera att virtual image finns i target cloud",
      "Clone image till target datastore",
      "Attach cloud-init ISO",
      "Finalize"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Provisioning steps inkluderar image availability, clone, resize, cloud-init ISO, guest customization, power/network wait och finalize (kurssidan 92).",
    "sourcePage": 92
  },
  {
    "id": 65,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "mc",
    "difficulty": "medium",
    "question": "Development och Production behöver samma Ubuntu-grund men olika access/naming. Varför passar en instance type med två layouts?",
    "options": [
      "För att Development och Production har olika group access/naming-behov men samma grundtyp",
      "För att RabbitMQ kräver två queues",
      "För att invoices måste ha två valutor",
      "För att monitoring alltid kräver två checks"
    ],
    "answer": 0,
    "explanation": "Labben föreslår en single instance type med två layouts och group access på layouts (kurssidan 93).",
    "sourcePage": 93
  },
  {
    "id": 66,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du överväger att installera Morpheus agent på provisionerade VM:ar. Vilka funktioner får du med agenten?",
    "options": [
      "Guest OS-statistik",
      "System/application logs i appliance",
      "VM check för monitoring",
      "Inbyggd currency conversion"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Agenten ger statistik, guidance, logs, VM checks, command bus, firewall management och brownfield-konvertering (kurssidan 95).",
    "sourcePage": 95
  },
  {
    "id": 67,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du designar agentkommunikation genom brandvägg. Hur ansluter Morpheus agent normalt till appliance?",
    "options": [
      "Outbound HTTPS/WSS på port 443",
      "Inbound SSH från appliance på port 22",
      "AMQP direkt till RabbitMQ på port 5672",
      "MySQL direkt på port 3306"
    ],
    "answer": 0,
    "explanation": "Agenten etablerar en säker outbound WebSocket/HTTPS-anslutning på port 443 (kurssidan 96).",
    "sourcePage": 96
  },
  {
    "id": 68,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du aktiverar inventory på en cloud integration. Vilka inventory-nivåer kan väljas?",
    "options": [
      "Off",
      "Basic",
      "Full",
      "Archive"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Cloud inventory har tre settings: Off, Basic och Full (kurssidan 100).",
    "sourcePage": 100
  },
  {
    "id": 69,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "tf",
    "difficulty": "medium",
    "question": "En discovered VM kan konverteras till managed instance utan extra WLE utöver den WLE som redan används för discovered-servern.",
    "options": [
      "Sant",
      "Falskt"
    ],
    "answer": 0,
    "explanation": "Kursen säger att konvertering inte konsumerar additional WLE ovanpå discovered servern (kurssidan 101).",
    "sourcePage": 101
  },
  {
    "id": 70,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du vill konvertera en discovered VM till managed instance. Vad gäller för WLE enligt kursen?",
    "options": [
      "Att unmanage:a objektet i Morpheus utan att radera VM i target cloud",
      "Att radera både Morpheus och target cloud",
      "Att skapa en invoice",
      "Att aktivera agenten"
    ],
    "answer": 0,
    "explanation": "Deletion kan användas för att ta bort från Morpheus men behålla i target cloud, särskilt för konverterade managed-instanser (kurssidan 102).",
    "sourcePage": 102
  },
  {
    "id": 71,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "mc",
    "difficulty": "easy",
    "question": "Du vill sluta hantera en VM i Morpheus men behålla den i target cloud. Vilket delete-beteende motsvarar detta?",
    "options": [
      "Isolerade miljöer i en single appliance",
      "Endast monitoring checks",
      "Endast service plan sizing",
      "Direkt ersättning för RabbitMQ"
    ],
    "answer": 0,
    "explanation": "Tenants provide isolated environments within a single HPE Morpheus appliance (kurssidan 106).",
    "sourcePage": 106
  },
  {
    "id": 72,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "tf",
    "difficulty": "easy",
    "question": "Det kan bara finnas en master tenant i en Morpheus appliance.",
    "options": [
      "Sant",
      "Falskt"
    ],
    "answer": 0,
    "explanation": "Master tenant skapas automatiskt under installation och endast en master tenant kan finnas (kurssidan 106).",
    "sourcePage": 106
  },
  {
    "id": 73,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "mc",
    "difficulty": "medium",
    "question": "Hur många nivåer subtenancy stöds?",
    "options": [
      "En nivå",
      "Två nivåer",
      "Obegränsat antal",
      "Ingen subtenancy"
    ],
    "answer": 0,
    "explanation": "Kursen säger only one level of subtenancy supported (kurssidan 106).",
    "sourcePage": 106
  },
  {
    "id": 74,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du designar subtenant-hierarkin. Hur många nivåer subtenancy stöds?",
    "options": [
      "Master tenant",
      "Vilken subtenant som helst",
      "Endast varje vanlig user",
      "Endast public cloud provider"
    ],
    "answer": 0,
    "explanation": "Master tenant creates and controls all subtenants (kurssidan 106).",
    "sourcePage": 106
  },
  {
    "id": 75,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "mc",
    "difficulty": "medium",
    "question": "Vem skapar och kontrollerar subtenants i Morpheus?",
    "options": [
      "Maximala permissions som subtenant users kan använda",
      "Endast valuta",
      "Endast VM-storlek",
      "Endast log retention"
    ],
    "answer": 0,
    "explanation": "Tenant role fungerar som base role och sätter maximum permissions (kurssidan 109).",
    "sourcePage": 109
  },
  {
    "id": 76,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "tf",
    "difficulty": "medium",
    "question": "Om en permission är disabled i tenant role blir den inte synlig som valbar permission i user role.",
    "options": [
      "Sant",
      "Falskt"
    ],
    "answer": 0,
    "explanation": "Permissions disabled in tenant role are not visible in user role (kurssidan 109).",
    "sourcePage": 109
  },
  {
    "id": 77,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "mc",
    "difficulty": "medium",
    "question": "Var kan tenant roles skapas?",
    "options": [
      "Endast i master tenant",
      "I alla subtenants",
      "Endast via Billing API",
      "Endast på cloud detail page"
    ],
    "answer": 0,
    "explanation": "Tenant roles can only be created in master tenant (kurssidan 109).",
    "sourcePage": 109
  },
  {
    "id": 78,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du jämför single tenant och multi-tenant user roles. Vilken beskrivning är korrekt?",
    "options": [
      "Single tenant roles skapas/lever i en subtenant; multi-tenant roles skapas i root och kopieras till subtenants",
      "De är identiska i alla avseenden",
      "Single tenant roles används bara för invoices",
      "Multi-tenant roles används bara för monitoring"
    ],
    "answer": 0,
    "explanation": "Kursen skiljer mellan user roles skapade i subtenant och multi-tenant roles skapade i root/master (kurssidan 110).",
    "sourcePage": 110
  },
  {
    "id": 79,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "multi",
    "difficulty": "medium",
    "question": "En subtenant ska få egen branding. Vilka inställningar kan whitelabel-funktionen ändra?",
    "options": [
      "Appliance name",
      "Header logo",
      "Favicon",
      "RabbitMQ queue name"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Whitelabel omfattar appliance name, logos, favicon, CSS, copyright, terms/privacy med mera (kurssidan 116).",
    "sourcePage": 116
  },
  {
    "id": 80,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "multi",
    "difficulty": "hard",
    "question": "En subtenant behöver tillgång till cloud resources. Vilka metoder stöds?",
    "options": [
      "Integrera cloud direkt i subtenanten",
      "Share cloud integration från master tenant till subtenants",
      "Assign cloud integration i master tenant till en single subtenant",
      "Skapa en alert rule"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kursen anger tre sätt: direct integration, shared master cloud och assigned private cloud till en subtenant (kurssidan 118).",
    "sourcePage": 118
  },
  {
    "id": 81,
    "module": 9,
    "moduleName": "Automation",
    "type": "multi",
    "difficulty": "easy",
    "question": "Du designar automation i Morpheus. Vilka byggblock ingår i automation-modulen?",
    "options": [
      "Code repositories",
      "Cypher",
      "Tasks",
      "Workflows"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Automation building blocks omfattar repositories, Cypher, Tasks, Workflows, File Templates, Script Templates och XaaS (kurssidan 122).",
    "sourcePage": 122
  },
  {
    "id": 82,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du integrerar automation-kod från ett enskilt repo. När bör Git integration väljas framför GitHub integration?",
    "options": [
      "När du vill integrera ett enskilt repo, oavsett GitHub/ADO/GitLab",
      "När du vill importera alla GitHub-repon i kontot",
      "När du vill konfigurera currency conversion",
      "När du vill aktivera VM checks"
    ],
    "answer": 0,
    "explanation": "Git integration används för ett single repository och kan peka mot GitHub, ADO, GitLab med flera (kurssidan 123).",
    "sourcePage": 123
  },
  {
    "id": 83,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "medium",
    "question": "Ett privat Git-repo ska användas i Morpheus automation. Vad krävs?",
    "options": [
      "Autentisering via PAT och SSH keys",
      "Endast en tenant role",
      "Ingen autentisering",
      "En monitoring group"
    ],
    "answer": 0,
    "explanation": "Private repo behöver authentication via PAT och SSH keys (kurssidan 123).",
    "sourcePage": 123
  },
  {
    "id": 84,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du importerar SSH keys för Git-integration. Vilket format accepterar Morpheus enligt kursen?",
    "options": [
      "PEM format",
      "PFX only",
      "DOCX",
      "DER only"
    ],
    "answer": 0,
    "explanation": "Kursen anger att Morpheus only accepts PEM format keys (kurssidan 123).",
    "sourcePage": 123
  },
  {
    "id": 85,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "easy",
    "question": "Du behöver lagra hemligheter för automation. Vad är Cypher?",
    "options": [
      "En säker krypterad key/value store",
      "En monitoring dashboard",
      "En public cloud service plan",
      "En Guacamole-session"
    ],
    "answer": 0,
    "explanation": "Cypher beskrivs som secure key/value store där values är encrypted (kurssidan 125).",
    "sourcePage": 125
  },
  {
    "id": 86,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "medium",
    "question": "En script task behöver läsa ett hemligt värde från Cypher. Vilken syntax visar kursen?",
    "options": [
      "<%= cypher.read(\"varname\") %>",
      "${env:cypher.varname}",
      "{{ cypher varname }}",
      "SELECT cypher(varname)"
    ],
    "answer": 0,
    "explanation": "Kursen visar Cypher-värden som Morpheus-variable via cypher.read (kurssidan 125).",
    "sourcePage": 125
  },
  {
    "id": 87,
    "module": 9,
    "moduleName": "Automation",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du skapar en Task och ska välja var den körs. Vilka target options finns?",
    "options": [
      "Resource",
      "Local",
      "Remote",
      "Invoice"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Tasks kan köras mot Resource, Local appliance eller Remote system (kurssidan 126).",
    "sourcePage": 126
  },
  {
    "id": 88,
    "module": 9,
    "moduleName": "Automation",
    "type": "tf",
    "difficulty": "medium",
    "question": "En Task kan köra kod från ett Git-repo eller från kod som lagts direkt i tasken.",
    "options": [
      "Sant",
      "Falskt"
    ],
    "answer": 0,
    "explanation": "Kursen säger att tasks can run code in a git repo or code can be added directly (kurssidan 126).",
    "sourcePage": 126
  },
  {
    "id": 89,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du vill köra ett workflow manuellt, schemalagt eller via service catalog. Vilken workflowtyp använder du?",
    "options": [
      "Operational Workflow",
      "Provisioning Workflow",
      "Tenant Role",
      "Currency Provider"
    ],
    "answer": 0,
    "explanation": "Operational workflows kan köras on demand, via jobs eller som catalog item (kurssidan 128).",
    "sourcePage": 128
  },
  {
    "id": 90,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du vill koppla automation till instance provisioning. Vilken workflowtyp används?",
    "options": [
      "Provisioning Workflow",
      "Operational Workflow",
      "Alert Rule",
      "Invoice Workflow"
    ],
    "answer": 0,
    "explanation": "Provisioning workflows associeras med instances vid provisioning time (kurssidan 128).",
    "sourcePage": 128
  },
  {
    "id": 91,
    "module": 9,
    "moduleName": "Automation",
    "type": "multi",
    "difficulty": "hard",
    "question": "Du kopplar script templates till provisioning-livscykeln. Vilka faser kan användas?",
    "options": [
      "Pre-provision",
      "Provision",
      "Post-provision",
      "Teardown"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Script templates kan köras i faser som Start/Stop Service, Pre-provision, Provision, Post-provision, Deploy, Reconfigure, Teardown med flera (kurssidan 130).",
    "sourcePage": 130
  },
  {
    "id": 92,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du behöver generera konfigurationsfiler med variabler under automation. Vad gör File Templates?",
    "options": [
      "Genererar konfigurationsfiler med variabelstöd för automation",
      "Skapar invoices",
      "Ersätter tenant roles",
      "Startar RabbitMQ elections"
    ],
    "answer": 0,
    "explanation": "File Templates genererar konfigurationsfiler och har full config map variable support (kurssidan 131).",
    "sourcePage": 131
  },
  {
    "id": 93,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "hard",
    "question": "Du placerar inputs på instance type och layout. När visas de för användaren?",
    "options": [
      "På instance types och layouts; operational workflows kan också ha inputs",
      "Endast på tenants",
      "Endast på invoices",
      "Endast på alert rules"
    ],
    "answer": 0,
    "explanation": "Inputs kan sättas på instance types och layouts, och operational workflows kan också använda inputs (kurssidan 132).",
    "sourcePage": 132
  },
  {
    "id": 94,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "medium",
    "question": "I Mega Corp automation-labben ska Morpheus använda kod från repo. Vad görs först?",
    "options": [
      "Lägger till Git repo integration så tasks kan använda kod",
      "Skapar invoices",
      "Aktiverar Service Catalog persona",
      "Tar bort cloud inventory"
    ],
    "answer": 0,
    "explanation": "Mega Corp use case börjar med att integrera Git-repot där automation-koden finns (kurssidan 133).",
    "sourcePage": 133
  },
  {
    "id": 95,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "mc",
    "difficulty": "easy",
    "question": "Du ska provisionera en multi-tier application. Vad används app blueprints till?",
    "options": [
      "Att provisionera komplexa applikationer baserade på Morpheus instances eller IaC",
      "Att enbart visa logs",
      "Att skapa identity sources",
      "Att konfigurera currency rates"
    ],
    "answer": 0,
    "explanation": "Blueprints provisionerar komplexa applications baserade på instances eller Infrastructure as Code (kurssidan 137).",
    "sourcePage": 137
  },
  {
    "id": 96,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du ska skapa en IaC-baserad blueprint. Vilka tekniker stöds av Morpheus blueprints?",
    "options": [
      "Terraform",
      "ARM",
      "CloudFormation",
      "Helm"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "IaC blueprints stöder Terraform, ARM, CloudFormation, Kubernetes och Helm (kurssidan 137).",
    "sourcePage": 137
  },
  {
    "id": 97,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "mc",
    "difficulty": "medium",
    "question": "En användare ska provisionera en app från en blueprint. Var kan detta göras?",
    "options": [
      "Provisioning > Apps eller via self-service catalog",
      "Administration > Health only",
      "Operations > Costing only",
      "Infrastructure > Networks only"
    ],
    "answer": 0,
    "explanation": "Blueprints används för apps via Provisioning > Apps eller self-service catalog (kurssidan 137).",
    "sourcePage": 137
  },
  {
    "id": 98,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du vill bygga en multi-tier app med vanliga Morpheus instance types. Vilken blueprinttyp passar?",
    "options": [
      "Multi-tiered application provisioning från Morpheus instance types",
      "Endast Terraform-kod",
      "Endast log retention",
      "Endast role creation"
    ],
    "answer": 0,
    "explanation": "Morpheus type blueprint bygger multi-tier apps med Morpheus instance types (kurssidan 137).",
    "sourcePage": 137
  },
  {
    "id": 99,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "mc",
    "difficulty": "medium",
    "question": "En databas-tier måste byggas före application-tier. Vad används boot order till?",
    "options": [
      "Att styra byggsekvensen mellan tiers, t.ex. database före application",
      "Att välja currency provider",
      "Att avgöra check severity",
      "Att skapa SSH key pair"
    ],
    "answer": 0,
    "explanation": "Boot order kan styra att exempelvis databas-tier byggs före app-tier (kurssidan 138).",
    "sourcePage": 138
  },
  {
    "id": 100,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "multi",
    "difficulty": "hard",
    "question": "Du skapar en IaC blueprint och behöver ange källan till koden. Vilka källor stöds?",
    "options": [
      "Från integrerat Git-repo",
      "Via Morpheus spec template",
      "Direkt i blueprint-konfigurationen",
      "Via invoice line items"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "IaC blueprint kan använda Git repo, spec template eller direct code beroende på typ (kurssidan 139).",
    "sourcePage": 139
  },
  {
    "id": 101,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "mc",
    "difficulty": "medium",
    "question": "Mega Corp ska provisionera Rocket Parts som blueprint. Vilken arkitektur används?",
    "options": [
      "Två tiers: Custom MySQL database och Apache/PHP application",
      "Enbart en DNS-record",
      "Endast en budget",
      "Endast en alert rule"
    ],
    "answer": 0,
    "explanation": "Mega Corp blueprint är en two-tier application med MySQL database tier och Apache/PHP application tier (kurssidan 140).",
    "sourcePage": 140
  },
  {
    "id": 102,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "tf",
    "difficulty": "medium",
    "question": "En Morpheus blueprint kan ha flera konfigurationer, exempelvis en för production och en för development.",
    "options": [
      "Sant",
      "Falskt"
    ],
    "answer": 0,
    "explanation": "Mega Corp-labben lägger till både production och development configuration i blueprinten (kurssidan 140).",
    "sourcePage": 140
  },
  {
    "id": 103,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "mc",
    "difficulty": "medium",
    "question": "Varför lägger Mega Corp till en development configuration i blueprinten?",
    "options": [
      "För production-liknande testmiljö med mindre instanser och development group-scope",
      "För att ersätta all monitoring",
      "För att stänga av RBAC",
      "För att skapa currency conversions"
    ],
    "answer": 0,
    "explanation": "Development configuration ska ge production-like testing och begränsas till development group med mindre instanser (kurssidan 140).",
    "sourcePage": 140
  },
  {
    "id": 104,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "mc",
    "difficulty": "hard",
    "question": "Du vill styra om blueprint-fält kan ändras av användaren vid provisioning. Vilken inställning används?",
    "options": [
      "Fält kan lämnas open/unlocked, locked eller hidden",
      "Endast appliance currency",
      "Endast tenant role base role",
      "Endast RabbitMQ queue depth"
    ],
    "answer": 0,
    "explanation": "HPE Morpheus type blueprint kan lämna configuration settings open, locked eller hidden från users (kurssidan 137).",
    "sourcePage": 137
  },
  {
    "id": 105,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "multi",
    "difficulty": "easy",
    "question": "Du bygger monitoring för en applikation i Morpheus. Vilka huvuddelar ingår?",
    "options": [
      "Checks",
      "Monitoring groups",
      "App monitors",
      "Incidents"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Monitoring overview tar upp checks, monitoring groups, app monitors, logs, incidents och alert rules (kurssidan 144).",
    "sourcePage": 144
  },
  {
    "id": 106,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "mc",
    "difficulty": "medium",
    "question": "En monitoring check går ned. Vad gör Morpheus automatiskt?",
    "options": [
      "Morpheus raises an incident",
      "Morpheus skapar alltid en tenant",
      "Morpheus tar bort appen",
      "Morpheus byter currency"
    ],
    "answer": 0,
    "explanation": "När en check fails raise:ar Morpheus en incident (kurssidan 144).",
    "sourcePage": 144
  },
  {
    "id": 107,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du konfigurerar alert rules för driftlarm. Vilka kontakt-/notifieringstyper kan användas?",
    "options": [
      "Email/SMS",
      "Web hook",
      "Slack hook",
      "VictorOps"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Alert rule contacts kan vara Email/SMS, Web hook, Slack hook och VictorOps (kurssidan 149).",
    "sourcePage": 149
  },
  {
    "id": 108,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du skapar en monitoring check. Vad är en Check?",
    "options": [
      "En individuell monitoring check",
      "En price set",
      "En role permission",
      "En Git branch"
    ],
    "answer": 0,
    "explanation": "Checks är individual monitoring checks (kurssidan 145).",
    "sourcePage": 145
  },
  {
    "id": 109,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du grupperar flera checks för en tjänst. Vad är en Monitoring Group?",
    "options": [
      "En container för en eller flera checks",
      "En tenant role",
      "En cloud cost invoice",
      "En virtual image"
    ],
    "answer": 0,
    "explanation": "Groups contain one or more checks (kurssidan 145).",
    "sourcePage": 145
  },
  {
    "id": 110,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du granskar status för monitoring checks. Vilka check states kan visas?",
    "options": [
      "Healthy",
      "Error",
      "Warning",
      "Unknown"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Check states är Healthy, Error, Warning och Unknown (kurssidan 145).",
    "sourcePage": 145
  },
  {
    "id": 111,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "mc",
    "difficulty": "hard",
    "question": "En check har återhämtat sig från fel. När går den från Warning tillbaka till Healthy?",
    "options": [
      "Efter 10 successful check runs",
      "Efter exakt 1 minut alltid",
      "Efter appliance restart",
      "Efter att invoice skapas"
    ],
    "answer": 0,
    "explanation": "Warning to Healthy requires 10 successful check runs (kurssidan 145).",
    "sourcePage": 145
  },
  {
    "id": 112,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du vill att varje ny provisionerad instance ska få en VM Monitoring check. Vilken inställning aktiveras?",
    "options": [
      "Auto Create checks",
      "Enable Chargeback",
      "Lock Tenant Role",
      "Price Adjustment"
    ],
    "answer": 0,
    "explanation": "Auto Create checks gör att Morpheus genererar VM Monitoring check för varje provisioned instance (kurssidan 147).",
    "sourcePage": 147
  },
  {
    "id": 113,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du aktiverar syslog forwarding för managed VMs. Vilken komponent skickar loggarna?",
    "options": [
      "Morpheus agent, inte appliance",
      "RabbitMQ direkt",
      "MySQL direkt",
      "Guacamole"
    ],
    "answer": 0,
    "explanation": "Kursen noterar att agenten forward:ar logs vid syslog forwarding, inte appliance (kurssidan 147).",
    "sourcePage": 147
  },
  {
    "id": 114,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du ska konfigurera vem som larmas vid kritiska fel. Var skapas alert rules?",
    "options": [
      "Monitoring > Alert Rules",
      "Administration > Plans & Pricing",
      "Library > Templates",
      "Infrastructure > Clouds only"
    ],
    "answer": 0,
    "explanation": "Alert Rules sätts upp under Monitoring > Alert Rules (kurssidan 149).",
    "sourcePage": 149
  },
  {
    "id": 115,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du sätter upp monitoring för Mega Corps Rocket app. Vilka checks ingår i labbscenariot?",
    "options": [
      "VM",
      "MySQL",
      "PHP",
      "Apache"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Mega Corp monitoring omfattar VM, MySQL, PHP och Apache checks (kurssidan 150).",
    "sourcePage": 150
  },
  {
    "id": 116,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "tf",
    "difficulty": "medium",
    "question": "App monitors visar en aggregering av checks och groups för en specifik app.",
    "options": [
      "Sant",
      "Falskt"
    ],
    "answer": 0,
    "explanation": "App monitors show aggregation of checks/groups for a specific app (kurssidan 145).",
    "sourcePage": 145
  },
  {
    "id": 117,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "mc",
    "difficulty": "easy",
    "question": "Du vill ge användare en förenklad portal för beställningar. Vad är syftet med Self-Service-modulen?",
    "options": [
      "Att skapa catalog items som användare kan provisionera via Service Catalog persona",
      "Att konfigurera RabbitMQ cluster",
      "Att skriva MySQL-backups",
      "Att skapa exchange rates"
    ],
    "answer": 0,
    "explanation": "Modulen handlar om self-service via catalog items och Service Catalog persona (kurssidan 153).",
    "sourcePage": 153
  },
  {
    "id": 118,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du ska skapa ett nytt catalog item. Var görs det i UI?",
    "options": [
      "Library > Blueprints > Catalog Items",
      "Operations > Costing > Usage",
      "Infrastructure > Clouds > Sync",
      "Monitoring > Incidents"
    ],
    "answer": 0,
    "explanation": "Catalog items skapas via Library > Blueprints > Catalog Items (kurssidan 154).",
    "sourcePage": 154
  },
  {
    "id": 119,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "mc",
    "difficulty": "medium",
    "question": "En administratör ska skapa eller ändra catalog items. Vilken rollbehörighet krävs?",
    "options": [
      "Library: Catalog Items = Full",
      "Monitoring: Logs = Read",
      "Plans: Prices = None",
      "Cypher: Lease = Full"
    ],
    "answer": 0,
    "explanation": "Användare behöver Library: Catalog Items permission set to Full (kurssidan 154).",
    "sourcePage": 154
  },
  {
    "id": 120,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "tf",
    "difficulty": "medium",
    "question": "Instance och Blueprint catalog items använder provisioning wizard för att fånga configuration settings.",
    "options": [
      "Sant",
      "Falskt"
    ],
    "answer": 0,
    "explanation": "Kursen säger att Instance and Blueprint catalog items use provisioning wizard to capture configuration settings (kurssidan 154).",
    "sourcePage": 154
  },
  {
    "id": 121,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du vill lägga till extra instruktioner eller beskrivning i ett catalog item. Var läggs supplemental content?",
    "options": [
      "I CONTENT-fältet",
      "Endast i RabbitMQ",
      "Endast i invoice API",
      "Endast i DNS integration"
    ],
    "answer": 0,
    "explanation": "Supplemental content kan inkluderas i CONTENT field (kurssidan 154).",
    "sourcePage": 154
  },
  {
    "id": 122,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du använder Morpheus 6.1 eller senare. Vad förenklar Forms för catalog items?",
    "options": [
      "Hur inputs läggs till i catalog items",
      "Hur RabbitMQ elections fungerar",
      "Hur invoices avrundas",
      "Hur tenant role max permissions räknas"
    ],
    "answer": 0,
    "explanation": "Forms förenklar sättet inputs läggs till i catalog items (kurssidan 154).",
    "sourcePage": 154
  },
  {
    "id": 123,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "mc",
    "difficulty": "easy",
    "question": "En användare ska beställa resurser via self-service. Vilken persona används?",
    "options": [
      "Service Catalog Persona",
      "Virtual Desktop only",
      "Master Tenant Persona",
      "Costing Persona"
    ],
    "answer": 0,
    "explanation": "Self-service users använder Service Catalog Persona (kurssidan 155).",
    "sourcePage": 155
  },
  {
    "id": 124,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "multi",
    "difficulty": "medium",
    "question": "En self-service-användare öppnar Service Catalog-personan. Vilka tabs finns där?",
    "options": [
      "Dashboard",
      "Catalog",
      "Instances",
      "Order History"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Service Catalog persona innehåller Dashboard, Catalog, Instances, Apps, Executions och Order History (kurssidan 155).",
    "sourcePage": 155
  },
  {
    "id": 125,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "tf",
    "difficulty": "medium",
    "question": "Service catalog-vyn är också tillgänglig från standard persona.",
    "options": [
      "Sant",
      "Falskt"
    ],
    "answer": 0,
    "explanation": "Kursen anger att service catalog view also available from within standard persona (kurssidan 155).",
    "sourcePage": 155
  },
  {
    "id": 126,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du bygger self-service för Mega Corp. Vilka catalog items ingår i scenariot?",
    "options": [
      "Custom Ubuntu",
      "Rocket app blueprint",
      "LAMP operational workflow",
      "Currency conversion provider"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Mega Corp bygger catalog items för Custom Ubuntu, Rocket app blueprint och LAMP operational workflow (kurssidan 156).",
    "sourcePage": 156
  },
  {
    "id": 127,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "multi",
    "difficulty": "easy",
    "question": "Du förklarar Morpheus pricing-modellen. Vilka objekt är centrala i modellen?",
    "options": [
      "Service plans",
      "Price sets",
      "Prices",
      "Usage records"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Modulen täcker Service Plans, Price Sets, Prices och Usage Records (kurssidan 159).",
    "sourcePage": 159
  },
  {
    "id": 128,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "Var hittar man Plans & Pricing i UI?",
    "options": [
      "Administration > Plans & Pricing",
      "Monitoring > Alert Rules",
      "Provisioning > Apps",
      "Library > Templates"
    ],
    "answer": 0,
    "explanation": "Service plans och pricing hanteras under Administration > Plans & Pricing (kurssidan 161).",
    "sourcePage": 161
  },
  {
    "id": 129,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du visar en administratör var pricing konfigureras. Var finns Plans & Pricing?",
    "options": [
      "Compute-mängd vid provisioning och reconfigure",
      "Alert severity",
      "Cypher lease TTL",
      "Identity source protocol"
    ],
    "answer": 0,
    "explanation": "Service Plans control amount of compute a resource has during provisioning and reconfigure (kurssidan 161).",
    "sourcePage": 161
  },
  {
    "id": 130,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "tf",
    "difficulty": "medium",
    "question": "Public cloud service plans synkas automatiskt när en public cloud läggs till och uppdateras nightly.",
    "options": [
      "Sant",
      "Falskt"
    ],
    "answer": 0,
    "explanation": "Public cloud service plans are automatically synced and updated nightly (kurssidan 162).",
    "sourcePage": 162
  },
  {
    "id": 131,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "Vad rekommenderar kursen för public cloud service plans som inte ska användas?",
    "options": [
      "Deaktivera dem i stället för att radera dem",
      "Radera alltid synced plans",
      "Konvertera dem till tenant roles",
      "Flytta dem till Monitoring"
    ],
    "answer": 0,
    "explanation": "Kursen säger do not delete synced plans, deactivate instead (kurssidan 162).",
    "sourcePage": 162
  },
  {
    "id": 132,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du ser public cloud plans efter att AWS/Azure lagts till. Vad gäller för dessa plans?",
    "options": [
      "Definierar vad som prissätts, belopp, price unit, cost/markup/price och kan läggas i price sets",
      "Skapar VM checks",
      "Installerar Morpheus agent",
      "Skapar Git PAT"
    ],
    "answer": 0,
    "explanation": "Prices konfigurerar vad du vill prissätta och hur mycket, inklusive units, costs, markups och currencies (kurssidan 164).",
    "sourcePage": 164
  },
  {
    "id": 133,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "Ett public cloud plan ska inte längre användas. Vad rekommenderar kursen?",
    "options": [
      "Kombinerar en eller flera prices och kopplas till plans, instance types eller layouts",
      "Skapar identity sources",
      "Startar guacd",
      "Raderar usage records"
    ],
    "answer": 0,
    "explanation": "Price Sets combine one or more Prices and attach to Plans, Instance Types or Layouts (kurssidan 165).",
    "sourcePage": 165
  },
  {
    "id": 134,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du sätter pris på compute, memory eller storage. Vad gör Prices?",
    "options": [
      "Lägsta nivåns itinerary item för att tracka kostnader mot resurser",
      "En rolltyp",
      "En agentinstallationsmetod",
      "En DNS-provider"
    ],
    "answer": 0,
    "explanation": "Usage records track costs against resources och är lowest level itinerary item (kurssidan 167).",
    "sourcePage": 167
  },
  {
    "id": 135,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "hard",
    "question": "Du vill koppla flera priser till en plan. Vad gör Price Sets?",
    "options": [
      "Nya usage records skapas",
      "Alla invoices raderas",
      "Cloud costing stängs av",
      "Tenant role låses"
    ],
    "answer": 0,
    "explanation": "Changes to resource results in new usage records (kurssidan 167).",
    "sourcePage": 167
  },
  {
    "id": 136,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du behöver valutaomräkning mellan master tenant och subtenant. Vilka providers stöds?",
    "options": [
      "Open Exchange Rates",
      "Fixer.io",
      "RabbitMQ FX",
      "Guacamole Rates"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Kursen anger Open Exchange Rates och Fixer.io som stödda currency conversion providers (kurssidan 170).",
    "sourcePage": 170
  },
  {
    "id": 137,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du granskar metered pricing för en resource. Vad är Usage Records?",
    "options": [
      "Administration > Settings > Appliance > Currency Settings",
      "Monitoring > Logs",
      "Provisioning > Instances",
      "Infrastructure > Groups"
    ],
    "answer": 0,
    "explanation": "Currency Settings finns under Administration > Settings > Appliance (kurssidan 170).",
    "sourcePage": 170
  },
  {
    "id": 138,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "multi",
    "difficulty": "hard",
    "question": "Du behöver justera eller överstyra priset som visas vid provisioning. Vilka mekanismer kan användas?",
    "options": [
      "Price adjustment",
      "Price sets på instance types och layouts",
      "Price phase tasks",
      "Monitoring check states"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kursen anger Price Adjustment, Price Sets på instance types/layouts och Price Phase Tasks (kurssidan 171).",
    "sourcePage": 171
  },
  {
    "id": 139,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "En resource ändras efter provisioning. Vad händer med usage records?",
    "options": [
      "Live-syncar cost data från cloud provider och skapar invoice records",
      "Skapar tenant roles",
      "Installerar SSH keys",
      "Stänger av usage records helt"
    ],
    "answer": 0,
    "explanation": "Public cloud costing använder provider cost API för invoice records (kurssidan 172).",
    "sourcePage": 172
  },
  {
    "id": 140,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "Var hittar man usage records i UI?",
    "options": [
      "Operations > Costing > Usage",
      "Monitoring > Checks",
      "Library > Blueprints",
      "Administration > Health"
    ],
    "answer": 0,
    "explanation": "Usage records visas under Operations > Costing > Usage och via Billing API (kurssidan 173).",
    "sourcePage": 173
  },
  {
    "id": 141,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du ska konfigurera currency conversion. Var görs det?",
    "options": [
      "Månadsgranularitet och beräknas nightly",
      "Sekundgranularitet i realtid",
      "Endast årlig",
      "Endast per boot order"
    ],
    "answer": 0,
    "explanation": "Invoices generated nightly and provide cost data at month granularity (kurssidan 174).",
    "sourcePage": 174
  },
  {
    "id": 142,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "hard",
    "question": "Public cloud costing är enabled. Vad gör cloud costing setting?",
    "options": [
      "Kostnaden rundas upp till en timmes kostnad",
      "De ignoreras helt",
      "De avrundas ned till noll",
      "De blir tenant roles"
    ],
    "answer": 0,
    "explanation": "Line items har en timmes granularity och usage under en timme rundas upp till en timmes kostnad (kurssidan 176).",
    "sourcePage": 176
  },
  {
    "id": 143,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "hard",
    "question": "Du vill se usage records i UI. Var hittar du dem?",
    "options": [
      "När costing är enabled på cloud",
      "När costing inte är enabled",
      "Endast för Service Catalog",
      "Endast för Cypher"
    ],
    "answer": 0,
    "explanation": "Actual cost type används när costing är enabled on cloud (kurssidan 177).",
    "sourcePage": 177
  },
  {
    "id": 144,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "hard",
    "question": "Du förklarar invoice records. Vilken granularity har de?",
    "options": [
      "Hämta cost data från usage records via Billing API",
      "Använd bara invoice UI",
      "Radera usage records nightly",
      "Använd monitoring logs"
    ],
    "answer": 0,
    "explanation": "För metered pricing rekommenderar HPE Billing API/usage records för kostdata (kurssidan 177).",
    "sourcePage": 177
  },
  {
    "id": 145,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "En usage record varar kortare än en timme och blir invoice line item. Hur hanteras kostnaden?",
    "options": [
      "31",
      "14",
      "10",
      "3"
    ],
    "answer": 0,
    "explanation": "Costing reports-sidan anger 31 predefined report types (kurssidan 179).",
    "sourcePage": 179
  },
  {
    "id": 146,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du ser actual cost type på en invoice. När används actual cost type?",
    "options": [
      "14",
      "31",
      "5",
      "100"
    ],
    "answer": 0,
    "explanation": "Analytics-sidan anger 14 predefined analytics dashboards (kurssidan 180).",
    "sourcePage": 180
  },
  {
    "id": 147,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du aktiverar cost guidance och rightsizing. Vilka tidsperioder kan rekommendationerna baseras på?",
    "options": [
      "30 dagar",
      "60 dagar",
      "90 dagar",
      "365 dagar alltid"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Guidance kan ge rekommendationer över 30, 60 eller 90 dagar (kurssidan 181).",
    "sourcePage": 181
  },
  {
    "id": 148,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "multi",
    "difficulty": "medium",
    "question": "Du skapar budgets i Morpheus. Vilka scopes kan en budget kopplas till?",
    "options": [
      "Accounts/Tenants",
      "Clouds",
      "Groups",
      "Users"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Budgets scoped to accounts, tenants, clouds, groups or users (kurssidan 182).",
    "sourcePage": 182
  },
  {
    "id": 149,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du skapar en budget i Morpheus. Hur lång budgetperiod stöds?",
    "options": [
      "Single eller multi-year, upp till tre år",
      "Endast en månad",
      "Obegränsat antal år",
      "Endast en dag"
    ],
    "answer": 0,
    "explanation": "Budgets kan vara single eller multi-year upp till tre år (kurssidan 182).",
    "sourcePage": 182
  }
];
