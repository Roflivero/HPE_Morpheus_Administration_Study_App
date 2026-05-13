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
      "Provision, Secure, Patch, Report, Backup",
      "Discover, Migrate, Govern, Archive, Chargeback",
      "Build, Consume, Govern, Automate, Optimize",
      "Build, Operate, Monitor, Bill, Retire"
    ],
    "answer": 2,
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
      "Self-service-katalog och shopping cart-upplevelse",
      "Hybrid cloud-miljöer, konsoliderad publik cloud-åtkomst och snabb provisionering",
      "Månadsfakturor, price sets och budgetuppföljning",
      "Incidenthantering, checks och alert rules"
    ],
    "answer": 1,
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
      "Att sätta policy-prioritet mellan Cloud, Group och Global",
      "Att synka public cloud service plans varje natt",
      "Att skapa och rotera hemligheter i Cypher"
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
      "Policies riktade mot groups, clouds, users eller roles",
      "Golden image build automation som huvudsyfte",
      "Multi-tenancy för isolerade miljöer",
      "Fine-grained RBAC via grupper"
    ],
    "answer": [
      0,
      2,
      3
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
      "Falskt",
      "Sant"
    ],
    "answer": 1,
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
      "2013",
      "2020",
      "2015",
      "2010"
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
      "Tomcat",
      "Check Server",
      "Guacamole",
      "Nginx"
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
      "Guacamole",
      "Tomcat",
      "Nginx",
      "Check Server"
    ],
    "answer": 2,
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
      "Log aggregation för metrics och logs",
      "Transactionell datalagring",
      "Remote console via browser",
      "Message queuing via AMQP"
    ],
    "answer": 3,
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
      "Message queuing mellan application services",
      "SSL termination och cache proxy",
      "Primär transaktionsdatabas för logistisk data"
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
      "5",
      "1",
      "2",
      "3"
    ],
    "answer": 3,
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
      "Container-only SaaS deployment",
      "Windows Server-baserad appliance",
      "Linux-baserad software appliance",
      "macOS-baserad admin appliance"
    ],
    "answer": 2,
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
      "morpheus-ctl reload-config",
      "morpheus-ui apply",
      "systemctl reconfigure morpheus"
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
      "/opt/morpheus/conf/logback.xml",
      "/var/opt/morpheus/config.yml",
      "/etc/morpheus/morpheus-secrets.json",
      "/etc/morpheus/morpheus.rb"
    ],
    "answer": 3,
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
      "/opt/morpheus/conf/logback.xml",
      "/var/log/morpheus/secrets/current",
      "/etc/morpheus/morpheus-secrets.json",
      "/etc/morpheus/morpheus.rb"
    ],
    "answer": 2,
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
      "morpheus-agent",
      "morpheus-cli only",
      "system-config-morpheus",
      "morpheus-ctl"
    ],
    "answer": 3,
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
      "rabbitmq",
      "postgresql",
      "mysql"
    ],
    "answer": [
      0,
      1,
      3
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
      "/var/opt/morpheus/[SERVICE NAME]/logs",
      "/opt/morpheus/logs/current",
      "Administration > Plans & Pricing > Logs"
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
      "/etc/morpheus/morpheus.rb",
      "Administration > Settings > Appliance > Proxy Settings",
      "/var/log/morpheus/morpheus-ui/current",
      "/opt/morpheus/conf/logback.xml"
    ],
    "answer": 3,
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
      "Library > Templates > Proxy",
      "Administration > Settings > Appliance > Proxy Settings",
      "Provisioning > Instances > Proxy",
      "Operations > Costing > Proxy"
    ],
    "answer": 1,
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
      "Service Catalog",
      "Virtual Desktop",
      "Costing Only",
      "Standard"
    ],
    "answer": [
      0,
      1,
      3
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
      "En prissättningsmodell för compute och storage",
      "En tenant-isolering under master tenant",
      "En grupp av monitoring checks för en app"
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
      "En tenant-roll som styr maxbehörigheter",
      "En service plan kopplad till price sets",
      "En logisk RBAC-container för flera clouds",
      "En integration till en cloud-leverantör eller hypervisor"
    ],
    "answer": 3,
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
      "OpenStack",
      "Slack",
      "VMware vCenter",
      "Nutanix"
    ],
    "answer": [
      0,
      2,
      3
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
      "Azure",
      "Infoblox",
      "AWS",
      "Google Cloud"
    ],
    "answer": [
      0,
      2,
      3
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
      "Ett inventory-läge för discovered resources",
      "Ett säkert key/value store för automation",
      "Ett sätt att begränsa plan visibility per group"
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
      "Access Key and Secret Key",
      "Biometric Authentication",
      "Username And Password",
      "Email And Private Key"
    ],
    "answer": [
      0,
      2,
      3
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
      "Roterar alla user passwords och Cypher secrets",
      "Konverterar discovered VMs till managed instances",
      "Startar om appliance services efter backup",
      "Kör intensiva operationer som pricing och AWS guidance recommendations"
    ],
    "answer": 3,
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
      "RabbitMQ DNS",
      "AWS Route 53",
      "Microsoft DNS",
      "BIND"
    ],
    "answer": [
      1,
      2,
      3
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
      "BlueCat",
      "Tomcat IPAM",
      "Infoblox",
      "phpIPAM"
    ],
    "answer": [
      0,
      2,
      3
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
      "Falskt",
      "Sant"
    ],
    "answer": 1,
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
      "Plans och Price Sets",
      "Checks och Incidents",
      "Groups och Clouds"
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
      "Vilka prices som ingår i en price set",
      "Vilka images som synkas från public clouds",
      "Vad en användare får se och göra i Morpheus",
      "Vilka services som körs på appliance"
    ],
    "answer": 2,
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
      "Standardrollen för nya subtenants",
      "Automatisk access till alla clouds",
      "Den högsta permission-nivån i tenant role",
      "Nivån som används för permissions satta till Default"
    ],
    "answer": 3,
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
      "Credential Store",
      "Service Catalog Persona",
      "Tenant Role",
      "Identity Source"
    ],
    "answer": 3,
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
      "OAuth 2.0",
      "RabbitMQ AMQP",
      "SAML 2.0"
    ],
    "answer": [
      0,
      1,
      3
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
      "Vilken currency varje tenant använder",
      "Vilken browser användarna kör",
      "Antal service plans i varje cloud",
      "Teamens ansvar och vilka miljöer de får använda"
    ],
    "answer": 3,
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
      "Library: Catalog Items",
      "Admin: Roles",
      "Plans: Pricing",
      "Monitoring: Alert Rules"
    ],
    "answer": 1,
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
      "En usage record för metered pricing",
      "En tenant role som begränsar user roles",
      "En lista med cloud integrations som synkas nightly"
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
      "Password",
      "Number",
      "Text",
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
      "En monitoring group med flera checks",
      "En price set kopplad till service plans",
      "En samling tasks i ett workflow"
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
      "REST",
      "LDAP",
      "Cypher",
      "Manual",
      "Service Plan"
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
      "Falskt",
      "Sant"
    ],
    "answer": 1,
    "explanation": "Inputs återanvänds i flera Morpheus-konstruktioner, inklusive Blueprints, Instance Types och Catalog Items (kurssidan 75).",
    "sourcePage": 75
  },
  {
    "id": 46,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "mc",
    "difficulty": "hard",
    "question": "Mega Corp vill standardisera val som applikationsnamn och supportnivå i provisioningflöden. Varför är Option Lists användbara?",
    "options": [
      "De ersätter behovet av provisioning workflows",
      "De skapar automatiskt tenant roles för varje subtenant",
      "De standardiserar val som applikationsnamn eller supportnivå för policies och provisioning",
      "De konverterar discovered servers till managed instances"
    ],
    "answer": 2,
    "explanation": "Mega Corp använder kontrollerade val för naming, supportnivåer och provisioningflöden (kurssidan 13).",
    "sourcePage": 13
  },
  {
    "id": 47,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du behöver dölja känslig inmatning i ett formulär. Vilken input-typ passar bäst?",
    "options": [
      "Text",
      "Checkbox",
      "Number",
      "Password"
    ],
    "answer": 3,
    "explanation": "Password-input används för känsliga värden (kurssidan 73).",
    "sourcePage": 73
  },
  {
    "id": 48,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "mc",
    "difficulty": "medium",
    "question": "Ett formulär ska hämta val från ett externt system vid körning. Vad är fördelen med en REST-baserad Option List?",
    "options": [
      "Alla values måste hårdkodas i catalog item",
      "Alternativ kan hämtas dynamiskt från externa system",
      "Option List blir automatiskt en identity source",
      "REST-källan används endast för cost reports"
    ],
    "answer": 1,
    "explanation": "REST-källor gör att values kan hämtas dynamiskt (kurssidan 74).",
    "sourcePage": 74
  },
  {
    "id": 49,
    "module": 6,
    "moduleName": "Policies",
    "type": "mc",
    "difficulty": "easy",
    "question": "En kund vill begränsa vem som får provisionera vad, hur länge resurser lever och hur de namnges. Vad används Policies till?",
    "options": [
      "Att styra och begränsa beteenden som provisioning, naming, expiry och resursanvändning",
      "Att lagra automation secrets krypterat",
      "Att gruppera checks för app monitors",
      "Att synka public cloud plans nightly"
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
      "Max Cores/Memory/Storage",
      "Provision Approval",
      "Currency Conversion Provider"
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
    "question": "Ett provisioningflöde ska kräva godkännande innan resurser skapas. Vilken policytyp används?",
    "options": [
      "Approve Delete Policy",
      "Tag Compliance Policy",
      "Provision Approval Policy",
      "Budget Policy"
    ],
    "answer": 2,
    "explanation": "Provision Approval Policy används för approval-flöden (kurssidan 79).",
    "sourcePage": 79
  },
  {
    "id": 52,
    "module": 6,
    "moduleName": "Policies",
    "type": "mc",
    "difficulty": "hard",
    "question": "En instance matchar både en global policy och en group-policy. Vilken policy gäller?",
    "options": [
      "Båda policies ignoreras tills en admin väljer",
      "Den policy som skapades senast vinner alltid",
      "Global-policyn vinner över Group",
      "Group-policyn vinner över Global"
    ],
    "answer": 3,
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
      "User > Global > Cloud > Role > Group",
      "Role > Cloud > Global > User > Group",
      "Global > User > Role > Group > Cloud"
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
    "question": "Development-system hos Mega Corp ska automatiskt löpa ut efter 20 dagar. Vilken policy passar?",
    "options": [
      "Power Schedule Policy",
      "Budget Policy",
      "Provision Approval Policy",
      "Expire Date Policy"
    ],
    "answer": 3,
    "explanation": "Training scenario anger att utvecklingssystem ska expira efter 20 dagar (kurssidan 13).",
    "sourcePage": 13
  },
  {
    "id": 56,
    "module": 6,
    "moduleName": "Policies",
    "type": "mc",
    "difficulty": "medium",
    "question": "Operations-teamet måste ange cost center på alla instanser. Vilken policytyp stödjer kravet?",
    "options": [
      "Backup Policy",
      "Lifecycle Extension Policy",
      "Tag Compliance Policy",
      "Instance Name Policy"
    ],
    "answer": 2,
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
      "Alert Rule",
      "Hostname eller Instance Name policy",
      "Service Plan",
      "Currency Conversion"
    ],
    "answer": 1,
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
      "Falskt",
      "Sant"
    ],
    "answer": 1,
    "explanation": "Govern-pelaren och policy-modulen beskriver policies mot flera scopes (kurssidan 20).",
    "sourcePage": 20
  },
  {
    "id": 59,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "mc",
    "difficulty": "easy",
    "question": "Du förklarar provisioningterminologi. Vad representerar en Instance?",
    "options": [
      "Teknologin och konfigurationen för provisioning",
      "En VM eller container i en layout",
      "Bas-binaries för compute image",
      "En resurs eller tjänst som provisioneras och hanteras"
    ],
    "answer": 3,
    "explanation": "Instances representerar en resource eller service (kurssidan 85).",
    "sourcePage": 85
  },
  {
    "id": 60,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du konfigurerar en instance type för olika clouds eller versioner. Vad definierar en Layout?",
    "options": [
      "Teknologin och konfigurationen för hur en instance type provisioneras",
      "En tenant-isolerad miljö",
      "Bas-binaries för compute image",
      "En resurs eller tjänst som provisioneras och hanteras"
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
    "question": "Du bygger en layout med en VM eller container. Vad representerar en Node Type?",
    "options": [
      "En public cloud service plan",
      "En VM eller container i layouten",
      "En monitoring check state",
      "En tenant role base permission"
    ],
    "answer": 1,
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
      "En provisioning workflow phase",
      "En RBAC permission group",
      "En VM eller container i layouten",
      "Bas-binaries för compute image"
    ],
    "answer": 3,
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
      "Local uploaded user virtual images",
      "Incident virtual images",
      "System virtual images",
      "Synced user virtual images"
    ],
    "answer": [
      0,
      2,
      3
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
      "Attach cloud-init ISO",
      "Finalize",
      "Create tenant role",
      "Kontrollera att virtual image finns i target cloud",
      "Clone image till target datastore"
    ],
    "answer": [
      0,
      1,
      3,
      4
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
      "För att varje layout måste ha en egen master tenant",
      "För att price sets inte kan kopplas till instance types",
      "För att Development och Production har olika group access/naming-behov men samma grundtyp",
      "För att monitoring groups bara kan kopplas till layouts"
    ],
    "answer": 2,
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
      "VM check för monitoring",
      "Inbyggd currency conversion",
      "System/application logs i appliance"
    ],
    "answer": [
      0,
      1,
      3
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
      "AMQP direkt till RabbitMQ på port 5672",
      "Inbound SSH från appliance på port 22",
      "Outbound HTTPS/WSS på port 443",
      "MySQL direkt till transactional tier på port 3306"
    ],
    "answer": 2,
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
      "Basic",
      "Full",
      "Archive",
      "Off"
    ],
    "answer": [
      0,
      1,
      3
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
      "Falskt",
      "Sant"
    ],
    "answer": 1,
    "explanation": "Kursen säger att konvertering inte konsumerar additional WLE ovanpå discovered servern (kurssidan 101).",
    "sourcePage": 101
  },
  {
    "id": 70,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du vill sluta hantera en VM i Morpheus men behålla den i target cloud. Vilket delete-beteende motsvarar detta?",
    "options": [
      "Att radera både instance och VM permanent",
      "Att skapa en ny usage record för VM:en",
      "Att installera Morpheus agent på VM:en",
      "Att unmanage:a objektet i Morpheus utan att radera VM i target cloud"
    ],
    "answer": 3,
    "explanation": "Deletion kan användas för att ta bort från Morpheus men behålla i target cloud, särskilt för konverterade managed-instanser (kurssidan 102).",
    "sourcePage": 102
  },
  {
    "id": 71,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "mc",
    "difficulty": "easy",
    "question": "En MSP vill isolera kunder i samma Morpheus appliance. Vad ger Tenants?",
    "options": [
      "En samling checks för app monitors",
      "En koppling mellan price sets och plans",
      "Isolerade miljöer i en single appliance",
      "Shared storage för application tier"
    ],
    "answer": 2,
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
      "Falskt",
      "Sant"
    ],
    "answer": 1,
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
    "question": "Vem skapar och kontrollerar subtenants i Morpheus?",
    "options": [
      "Multi-tenant user role",
      "Identity source",
      "Subtenant admin",
      "Master tenant"
    ],
    "answer": 3,
    "explanation": "Master tenant creates and controls all subtenants (kurssidan 106).",
    "sourcePage": 106
  },
  {
    "id": 75,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "mc",
    "difficulty": "medium",
    "question": "En subtenant får en base role. Vad sätter tenant role i praktiken?",
    "options": [
      "Vilket cloud costing-läge som är aktivt",
      "Vilken Service Catalog-tab som visas först",
      "Vilken currency conversion provider som används",
      "Maximala permissions som subtenant users kan använda"
    ],
    "answer": 3,
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
      "I alla subtenants",
      "Endast på cloud detail page",
      "Endast i master tenant",
      "Endast via Billing API"
    ],
    "answer": 2,
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
      "De är identiska i alla avseenden",
      "Multi-tenant roles används bara för monitoring",
      "Single tenant roles används bara för invoices",
      "Single tenant roles skapas/lever i en subtenant; multi-tenant roles skapas i root och kopieras till subtenants"
    ],
    "answer": 3,
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
      "Favicon",
      "Header logo",
      "Appliance name",
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
      "Skapa en alert rule",
      "Integrera cloud direkt i subtenanten",
      "Share cloud integration från master tenant till subtenants",
      "Assign cloud integration i master tenant till en single subtenant"
    ],
    "answer": [
      1,
      2,
      3
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
      "Cypher",
      "Workflows",
      "Invoice line items",
      "Code repositories",
      "Tasks"
    ],
    "answer": [
      0,
      1,
      3,
      4
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
      "När du vill skapa en Cypher mountpoint",
      "När du vill köra monitoring checks i en group",
      "När du vill integrera ett enskilt repo, oavsett GitHub/ADO/GitLab",
      "När du vill importera alla repos från ett GitHub-konto"
    ],
    "answer": 2,
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
      "Endast en tenant role i master tenant",
      "Autentisering via PAT och SSH keys",
      "En service plan med public visibility",
      "Auto Create checks aktiverat i Monitoring settings"
    ],
    "answer": 1,
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
      "PFX format",
      "OpenSSH public key only",
      "DER certificate bundle"
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
      "En engine för invoice line items",
      "En public cloud service plan",
      "En säker krypterad key/value store",
      "En remote console-komponent"
    ],
    "answer": 2,
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
      "Remote",
      "Invoice",
      "Local"
    ],
    "answer": [
      0,
      1,
      3
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
      "Falskt",
      "Sant"
    ],
    "answer": 1,
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
      "Price Phase Task",
      "App Monitor",
      "Provisioning Workflow"
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
      "Alert Rule",
      "Provisioning Workflow",
      "Operational Workflow",
      "Catalog Workflow only"
    ],
    "answer": 1,
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
      "Teardown",
      "Currency conversion",
      "Provision",
      "Post-provision",
      "Pre-provision"
    ],
    "answer": [
      0,
      2,
      3,
      4
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
      "Synkar public cloud prices nightly",
      "Startar workflows enligt boot order",
      "Skapar tenant roles från master tenant"
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
      "Endast på invoices och usage records",
      "Endast på monitoring checks och app monitors",
      "Endast på tenant roles och identity sources"
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
      "Aktiverar cloud costing på public cloud",
      "Skapar alert rules för Rocket app",
      "Skapar Service Catalog Persona"
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
      "Att lagra credentials för cloud integrations",
      "Att definiera default access i user roles",
      "Att gruppera monitoring checks efter severity",
      "Att provisionera komplexa applikationer baserade på Morpheus instances eller IaC"
    ],
    "answer": 3,
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
      "Helm",
      "Terraform",
      "ARM",
      "CloudFormation",
      "Ansible Tower"
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
      "Administration > Health eller Appliance settings",
      "Infrastructure > Networks > Proxies",
      "Provisioning > Apps eller via self-service catalog",
      "Operations > Costing > Usage"
    ],
    "answer": 2,
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
      "Metered pricing från usage records",
      "Cloud inventory för discovered VMs",
      "External identity source integration"
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
      "Att avgöra check state efter recovery",
      "Att synka price plans nightly",
      "Att bestämma tenant role-prioritet"
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
      "Fyra checks: DNS, SMTP, ICMP och TCP",
      "En IaC-only Terraform VPC blueprint",
      "Tre tenants: Development, Operations och Finance"
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
      "Falskt",
      "Sant"
    ],
    "answer": 1,
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
      "För att tenant roles kräver två blueprint-konfigurationer",
      "För att public cloud plans inte kan synkas nightly",
      "För production-liknande testmiljö med mindre instanser och development group-scope",
      "För att Service Catalog Persona inte kan visa production items"
    ],
    "answer": 2,
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
      "Fält kan bara döljas via CSS override",
      "Fält blir alltid read-only i self-service",
      "Fält styrs endast av tenant role Default Access"
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
      "Incidents",
      "Checks",
      "Price sets",
      "App monitors",
      "Monitoring groups"
    ],
    "answer": [
      0,
      1,
      3,
      4
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
      "Morpheus raderar monitoring group",
      "Morpheus raises an incident",
      "Morpheus skapar automatiskt en subtenant",
      "Morpheus stänger av cloud costing"
    ],
    "answer": 1,
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
      "Slack hook",
      "Usage record",
      "Web hook",
      "VictorOps",
      "Email/SMS"
    ],
    "answer": [
      0,
      2,
      3,
      4
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
      "En log retention setting",
      "En incident severity policy",
      "En samling checks för en app"
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
      "En enskild VM Monitoring check",
      "En container för en eller flera checks",
      "En analytics dashboard",
      "En kontakt för alert rules"
    ],
    "answer": 1,
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
      "Warning",
      "Healthy",
      "Resolved",
      "Error",
      "Unknown"
    ],
    "answer": [
      0,
      1,
      3,
      4
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
      "Efter nästa nightly sync",
      "När incidenten manuellt stängs",
      "Direkt efter första lyckade checken",
      "Efter 10 successful check runs"
    ],
    "answer": 3,
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
      "Sync costing",
      "Enable guidance",
      "Clear Activity"
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
      "Nginx reverse proxy, inte agenten",
      "MySQL router, inte appliance",
      "RabbitMQ cluster, inte agenten",
      "Morpheus agent, inte appliance"
    ],
    "answer": 3,
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
      "Library > Blueprints > Catalog Items",
      "Infrastructure > Clouds > Advanced Options"
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
      "MySQL",
      "VM",
      "PHP",
      "DNS",
      "Apache"
    ],
    "answer": [
      0,
      1,
      2,
      4
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
      "Att integrera Git repos för automation",
      "Att skapa catalog items som användare kan provisionera via Service Catalog persona",
      "Att skapa incidenter när checks failar",
      "Att skapa price sets för service plans"
    ],
    "answer": 1,
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
      "Provisioning > Apps > Catalog Items",
      "Monitoring > Alert Rules",
      "Operations > Costing > Invoices",
      "Library > Blueprints > Catalog Items"
    ],
    "answer": 3,
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
      "Plans: Pricing = Full",
      "Monitoring: Logs = Full",
      "Personas: Standard = Full"
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
      "Falskt",
      "Sant"
    ],
    "answer": 1,
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
      "I Monitoring > Logs",
      "I Cypher mountpoint secret/",
      "I CONTENT-fältet",
      "I Price Set Type"
    ],
    "answer": 2,
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
      "Hur usage records räknas om",
      "Hur RabbitMQ cluster elections sker",
      "Hur tenant roles låses",
      "Hur inputs läggs till i catalog items"
    ],
    "answer": 3,
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
      "Standard Persona only",
      "Service Catalog Persona",
      "Master Tenant Persona",
      "Virtual Desktop Persona"
    ],
    "answer": 1,
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
      "Order History",
      "Dashboard",
      "Instances",
      "Budgets",
      "Catalog"
    ],
    "answer": [
      0,
      1,
      2,
      4
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
      "Falskt",
      "Sant"
    ],
    "answer": 1,
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
      "Rocket app blueprint",
      "Custom Ubuntu",
      "Currency conversion provider",
      "LAMP operational workflow"
    ],
    "answer": [
      0,
      1,
      3
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
      "Price sets",
      "Usage records",
      "Monitoring groups",
      "Prices",
      "Service plans"
    ],
    "answer": [
      0,
      1,
      3,
      4
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
      "Library > Blueprints > Catalog Items",
      "Infrastructure > Clouds > Advanced Options",
      "Operations > Costing > Usage"
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
    "question": "Du väljer CPU, minne och storlek vid provisioning. Vad kontrollerar Service Plans?",
    "options": [
      "Vilka checks som ingår i app monitor",
      "Vilken Git branch automation ska använda",
      "Compute-mängd vid provisioning och reconfigure",
      "Vilka tenant roles som kopieras till subtenants"
    ],
    "answer": 2,
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
      "Falskt",
      "Sant"
    ],
    "answer": 1,
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
      "Konvertera dem till private cloud plans",
      "Flytta dem till Price Plans",
      "Radera dem så de återskapas av nightly sync"
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
    "question": "Du sätter pris på compute, memory eller storage. Vad gör Prices?",
    "options": [
      "Kombinerar flera service plans till en tenant role",
      "Styr vilka Groups som får se en cloud integration",
      "Skapar invoice records direkt från public cloud API",
      "Definierar vad som prissätts, belopp, price unit, cost/markup/price och kan läggas i price sets"
    ],
    "answer": 3,
    "explanation": "Prices konfigurerar vad du vill prissätta och hur mycket, inklusive units, costs, markups och currencies (kurssidan 164).",
    "sourcePage": 164
  },
  {
    "id": 133,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du vill koppla flera priser till en plan. Vad gör Price Sets?",
    "options": [
      "Aktiverar guidance recommendations på en cloud",
      "Kombinerar en eller flera prices och kopplas till plans, instance types eller layouts",
      "Definierar CPU och memory vid provisioning",
      "Lagrar varje enskild timmeskostnad i en invoice"
    ],
    "answer": 1,
    "explanation": "Price Sets combine one or more Prices and attach to Plans, Instance Types or Layouts (kurssidan 165).",
    "sourcePage": 165
  },
  {
    "id": 134,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du granskar metered pricing för en resource. Vad är Usage Records?",
    "options": [
      "Lägsta nivåns itinerary item för att tracka kostnader mot resurser",
      "En price adjustment på en service plan",
      "En dashboard för utilization vs cost",
      "En månadsvis sammanställning av invoice line items"
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
    "question": "En resource ändras efter provisioning. Vad händer med usage records?",
    "options": [
      "Budget thresholds återställs till standard",
      "Nya usage records skapas",
      "Alla historiska invoice line items raderas",
      "Cloud costing stängs automatiskt av"
    ],
    "answer": 1,
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
      "Fixer.io",
      "Open Exchange Rates",
      "Guacamole Rates",
      "RabbitMQ FX"
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
    "question": "Du ska konfigurera currency conversion. Var görs det?",
    "options": [
      "Administration > Settings > Appliance > Currency Settings",
      "Operations > Costing > Invoices",
      "Administration > Plans & Pricing > Price Sets",
      "Infrastructure > Clouds > Advanced Options"
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
      "Price phase tasks",
      "Monitoring check states",
      "Price adjustment",
      "Price sets på instance types och layouts"
    ],
    "answer": [
      0,
      2,
      3
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
    "question": "Public cloud costing är enabled. Vad gör cloud costing setting?",
    "options": [
      "Live-syncar cost data från cloud provider och skapar invoice records",
      "Skapar metered prices direkt från service plans",
      "Räknar om tenant roles efter currency",
      "Publicerar cost reports till Service Catalog"
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
      "Administration > Plans & Pricing > Prices",
      "Operations > Reports > Cloud Cost",
      "Operations > Costing > Usage",
      "Operations > Costing > Invoices"
    ],
    "answer": 2,
    "explanation": "Usage records visas under Operations > Costing > Usage och via Billing API (kurssidan 173).",
    "sourcePage": 173
  },
  {
    "id": 141,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du förklarar invoice records. Vilken granularity har de?",
    "options": [
      "Månadsgranularitet och beräknas nightly",
      "Sekundgranularitet och beräknas live",
      "Veckogranularitet och skapas manuellt",
      "Årsgranularitet och skapas vid budget close"
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
    "question": "En usage record varar kortare än en timme och blir invoice line item. Hur hanteras kostnaden?",
    "options": [
      "Kostnaden ignoreras tills usage når en timme",
      "Invoice record markeras som metered only",
      "Kostnaden rundas upp till en timmes kostnad",
      "Line item delas upp i sekundbaserade poster"
    ],
    "answer": 2,
    "explanation": "Line items har en timmes granularity och usage under en timme rundas upp till en timmes kostnad (kurssidan 176).",
    "sourcePage": 176
  },
  {
    "id": 143,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "hard",
    "question": "Du ser actual cost type på en invoice. När används actual cost type?",
    "options": [
      "När costing är disabled på cloud",
      "Endast när price phase task körs",
      "Endast när budget policy finns",
      "När costing är enabled på cloud"
    ],
    "answer": 3,
    "explanation": "Actual cost type används när costing är enabled on cloud (kurssidan 177).",
    "sourcePage": 177
  },
  {
    "id": 144,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "hard",
    "question": "Du behöver tillförlitlig cost data för metered pricing. Vad rekommenderar HPE?",
    "options": [
      "Hämta cost data från usage records via Billing API",
      "Använd Monitoring logs för cost reconstruction",
      "Använd Service Catalog order history",
      "Använd endast invoice UI eftersom det är mer detaljerat"
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
    "question": "Du vill använda färdiga costing reports. Hur många predefined report types nämns?",
    "options": [
      "14",
      "3",
      "10",
      "31"
    ],
    "answer": 3,
    "explanation": "Costing reports-sidan anger 31 predefined report types (kurssidan 179).",
    "sourcePage": 179
  },
  {
    "id": 146,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "Du vill använda färdiga analytics dashboards. Hur många predefined analytics dashboards nämns?",
    "options": [
      "4",
      "14",
      "31",
      "8"
    ],
    "answer": 1,
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
      "60 dagar",
      "90 dagar",
      "365 dagar alltid",
      "30 dagar"
    ],
    "answer": [
      0,
      1,
      3
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
      "Users",
      "Clouds",
      "Groups",
      "Accounts/Tenants",
      "Script templates"
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
      "Obegränsad budgetperiod",
      "Endast en månad åt gången",
      "Endast ett kalenderkvartal"
    ],
    "answer": 0,
    "explanation": "Budgets kan vara single eller multi-year upp till tre år (kurssidan 182).",
    "sourcePage": 182
  }
];
