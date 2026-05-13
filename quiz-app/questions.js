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
    "question": "An architect should summarize Morpheus value to management. Which set describes the platform's five pillars?",
    "options": [
      "Provision, Secure, Patch, Report, Backup",
      "Discover, Migrate, Govern, Archive, Chargeback",
      "Build, Consume, Govern, Automate, Optimize",
      "Build, Operate, Monitor, Bill, Retire"
    ],
    "answer": 2,
    "explanation": "The course presents Morpheus around the pillars Build, Consume, Govern, Automate and Optimize (course page 20).",
    "sourcePage": 20
  },
  {
    "id": 2,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "medium",
    "question": "A team wants to build a hybrid cloud platform with fast provisioning and integration with existing tools. Which pillar best describes this?",
    "options": [
      "Self-service catalog and shopping cart experience",
      "Hybrid cloud environments, consolidated public cloud access and fast provisioning",
      "Monthly invoices, price sets and budget tracking",
      "Incident management, checks and alert rules"
    ],
    "answer": 1,
    "explanation": "Build is about creating hybrid cloud environments, consolidating public cloud access, fast provisioning and integration with existing tools (course page 20).",
    "sourcePage": 20
  },
  {
    "id": 3,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "medium",
    "question": "Users want to request resources themselves from a shared portal across multiple clouds. Which Morpheus pillar addresses this?",
    "options": [
      "To give users a single console and self-service provisioning across private and public clouds",
      "To set policy priority between Cloud, Group and Global",
      "Syncing public cloud service plans every night",
      "Creating and rotating secrets in Cypher"
    ],
    "answer": 0,
    "explanation": "Consume includes single console, provisioning to almost all private/public cloud technologies, faster deployment and self-service (course page 20).",
    "sourcePage": 20
  },
  {
    "id": 4,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "multi",
    "difficulty": "hard",
    "question": "An organization wants to use Morpheus to control access, isolate environments and enforce controls. What functions belong to the Govern pillar?",
    "options": [
      "Policies aimed at groups, clouds, users or roles",
      "Golden image build automation as main objective",
      "Multi-tenancy for isolated environments",
      "Fine-grained RBAC via groups"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Govern is described as control over who can do what and where via RBAC, identity integration, multi-tenancy and policies (course page 20).",
    "sourcePage": 20
  },
  {
    "id": 5,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "tf",
    "difficulty": "easy",
    "question": "Morpheus was originally created by Bertram Labs for internal use before Morpheus Data became a separate company.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "explanation": "The course describes Morpheus as born out of necessity and created by Bertram Labs' DevOps and Business Transformation team (course page 21).",
    "sourcePage": 21
  },
  {
    "id": 6,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "easy",
    "question": "You are reviewing Morpheus history. What year did Bertram Labs start building the internal platform?",
    "options": [
      "2010",
      "2012",
      "2015",
      "2018"
    ],
    "answer": 0,
    "explanation": "Bertram started building the tool in 2010 (course page 21).",
    "sourcePage": 21
  },
  {
    "id": 7,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "easy",
    "question": "When did Morpheus Data become a separate company from Bertram Labs?",
    "options": [
      "2013",
      "2020",
      "2015",
      "2010"
    ],
    "answer": 2,
    "explanation": "After five years of internal use, Morpheus Data spun off in 2015 (course page 21).",
    "sourcePage": 21
  },
  {
    "id": 8,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "medium",
    "question": "An administrator needs remote console to a provisioned VM. Which application tier component is used?",
    "options": [
      "Tomcat",
      "Check Server",
      "Guacamole",
      "Nginx"
    ],
    "answer": 2,
    "explanation": "Guacamole is listed as the application tier component that provides remote console (course page 22).",
    "sourcePage": 22
  },
  {
    "id": 9,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "medium",
    "question": "You debug incoming HTTPS traffic to the appliance. Which component handles SSL termination and proxy/cache in front of Tomcat?",
    "options": [
      "Guacamole",
      "Tomcat",
      "Nginx",
      "Check Server"
    ],
    "answer": 2,
    "explanation": "Nginx is described as SSL termination and cache proxy for Tomcat (course page 22).",
    "sourcePage": 22
  },
  {
    "id": 10,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "medium",
    "question": "In an HA design, you need to understand the messaging tier. What is the role of RabbitMQ?",
    "options": [
      "Log aggregation for metrics and logs",
      "Transactional data storage",
      "Remote console via browser",
      "Message queuing via AMQP"
    ],
    "answer": 3,
    "explanation": "RabbitMQ is the messaging tier and uses AMQP (course page 22).",
    "sourcePage": 22
  },
  {
    "id": 11,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "medium",
    "question": "You dimension the non-transactional tier. What kind of data does Elasticsearch handle in Morpheus?",
    "options": [
      "Log aggregation and temporal data such as stats, metrics and logs",
      "Message queuing between application services",
      "SSL termination and cache proxy",
      "Primary transaction database for logistic data"
    ],
    "answer": 0,
    "explanation": "Elasticsearch is non-transactional tier for log aggregation and temporal aggregation data (course page 22).",
    "sourcePage": 22
  },
  {
    "id": 12,
    "module": 1,
    "moduleName": "HPE Morpheus Introduction",
    "type": "mc",
    "difficulty": "hard",
    "question": "You are designing RabbitMQ for HA. What minimum number of nodes does the course set for clustered configuration?",
    "options": [
      "5",
      "1",
      "2",
      "3"
    ],
    "answer": 3,
    "explanation": "RabbitMQ requires at least three nodes for clustered configurations due to elections during failover (course page 22).",
    "sourcePage": 22
  },
  {
    "id": 13,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "mc",
    "difficulty": "easy",
    "question": "You are planning the installation of the Morpheus appliance. What type of platform should you expect?",
    "options": [
      "Container-only SaaS deployment",
      "Windows Server-based appliance",
      "Linux-based software appliance",
      "macOS-based admin appliance"
    ],
    "answer": 2,
    "explanation": "The course describes Morpheus as a Linux-based software appliance (course page 22).",
    "sourcePage": 22
  },
  {
    "id": 14,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "mc",
    "difficulty": "easy",
    "question": "After changing the Morpheus configuration, you need to apply the changes. What command are you using?",
    "options": [
      "morpheus-ctl reconfigure",
      "morpheus-ctl reload-config",
      "morpheus-ui apply",
      "systemctl reconfigure morpheus"
    ],
    "answer": 0,
    "explanation": "The installation and configuration flow uses morpheus-ctl reconfigure (course page 33).",
    "sourcePage": 33
  },
  {
    "id": 15,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "mc",
    "difficulty": "medium",
    "question": "You should change the main appliance configuration. Which file should you edit?",
    "options": [
      "/opt/morpheus/conf/logback.xml",
      "/var/opt/morpheus/config.yml",
      "/etc/morpheus/morpheus-secrets.json",
      "/etc/morpheus/morpheus.rb"
    ],
    "answer": 3,
    "explanation": "The main configuration file is listed as /etc/morpheus/morpheus.rb (course page 33).",
    "sourcePage": 33
  },
  {
    "id": 16,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "mc",
    "difficulty": "medium",
    "question": "You need to find where the appliance stores generated secrets and passwords. Which file is used?",
    "options": [
      "/opt/morpheus/conf/logback.xml",
      "/var/log/morpheus/secrets/current",
      "/etc/morpheus/morpheus-secrets.json",
      "/etc/morpheus/morpheus.rb"
    ],
    "answer": 2,
    "explanation": "The course points to /etc/morpheus/morpheus-secrets.json for secrets (course page 33).",
    "sourcePage": 33
  },
  {
    "id": 17,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "mc",
    "difficulty": "easy",
    "question": "You should check the status and restart the Morpheus services from the CLI. What tool do you use?",
    "options": [
      "morpheus agent",
      "morpheus-cli only",
      "system-config-morpheus",
      "morpheus-ctl"
    ],
    "answer": 3,
    "explanation": "morpheus-ctl is used for service management such as start, stop, restart, status and tail (course page 35).",
    "sourcePage": 35
  },
  {
    "id": 18,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "multi",
    "difficulty": "medium",
    "question": "You verify which services are available in an all-in-one Morpheus appliance. What services are included?",
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
    "explanation": "The AIO installation includes, among other things, morpheus-ui, mysql, rabbitmq, elasticsearch, check-server, guacd and nginx (course page 35).",
    "sourcePage": 35
  },
  {
    "id": 19,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "mc",
    "difficulty": "medium",
    "question": "You are debugging a Morpheus service and need its logs. Where do you look first?",
    "options": [
      "/var/log/morpheus/[SERVICE NAME]",
      "/var/opt/morpheus/[SERVICE NAME]/logs",
      "/opt/morpheus/logs/current",
      "Administration > Plans & Pricing > Logs"
    ],
    "answer": 0,
    "explanation": "The service logs are located under /var/log/morpheus/[SERVICE NAME] (course page 36).",
    "sourcePage": 36
  },
  {
    "id": 20,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "mc",
    "difficulty": "hard",
    "question": "You need to raise or lower the log level of morpheus-ui. Where is this done according to the course?",
    "options": [
      "/etc/morpheus/morpheus.rb",
      "Administration > Settings > Appliance > Proxy Settings",
      "/var/log/morpheus/morpheus-ui/current",
      "/opt/morpheus/conf/logback.xml"
    ],
    "answer": 3,
    "explanation": "Log levels for morpheus-ui can be adjusted in /opt/morpheus/conf/logback.xml (course page 36).",
    "sourcePage": 36
  },
  {
    "id": 21,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "mc",
    "difficulty": "medium",
    "question": "Appliance must use a global proxy for external connections. Where is it configured in the UI?",
    "options": [
      "Library > Templates > Proxy",
      "Administration > Settings > Appliance > Proxy Settings",
      "Provisioning > Instances > Proxy",
      "Operations > Costing > Proxy"
    ],
    "answer": 1,
    "explanation": "Global proxy is configured under Appliance Proxy Settings (course page 41).",
    "sourcePage": 41
  },
  {
    "id": 22,
    "module": 2,
    "moduleName": "Installing, Maintaining, and Configuring",
    "type": "multi",
    "difficulty": "medium",
    "question": "A user should get the right UI view in Morpheus. Which personas are there in the platform?",
    "options": [
      "Service Catalogue",
      "Virtual Desktop",
      "Costing Only",
      "Standard"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "The course specifies three personas: Standard, Service Catalog and Virtual Desktop (course page 46).",
    "sourcePage": 46
  },
  {
    "id": 23,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "mc",
    "difficulty": "easy",
    "question": "You must give a team access to the right clouds and instances. What is a Group in Morpheus?",
    "options": [
      "A logical container and RBAC scope for clouds and instances",
      "A pricing model for compute and storage",
      "A tenant isolation under the master tenant",
      "A group of monitoring checks for an app"
    ],
    "answer": 0,
    "explanation": "Groups are used as logical containers and access-scope (course page 48).",
    "sourcePage": 48
  },
  {
    "id": 24,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "mc",
    "difficulty": "medium",
    "question": "You add vCenter, AWS or Azure to Morpheus. What does the object Cloud represent?",
    "options": [
      "A tenant role that controls maximum permissions",
      "A service plan linked to price sets",
      "A logical RBAC container for multiple clouds",
      "An integration to a cloud provider or hypervisor"
    ],
    "answer": 3,
    "explanation": "Clouds are integrations to cloud providers or hypervisors (course page 52).",
    "sourcePage": 52
  },
  {
    "id": 25,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "multi",
    "difficulty": "medium",
    "question": "You will add a private cloud integration in Morpheus. Which options are examples of private cloud types?",
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
    "explanation": "Private cloud examples include vCenter, Nutanix, OpenStack, Hyper-V, and more (course page 52).",
    "sourcePage": 52
  },
  {
    "id": 26,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "multi",
    "difficulty": "medium",
    "question": "You are going to add a public cloud integration in Morpheus. What options are public cloud types?",
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
    "explanation": "Public cloud examples include AWS, Azure, GCP, OCI, and more (course page 52).",
    "sourcePage": 52
  },
  {
    "id": 27,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "mc",
    "difficulty": "medium",
    "question": "You want to reuse credentials between multiple integration objects. What is the purpose of Credentials?",
    "options": [
      "Centrally managed and reusable credentials",
      "An inventory mode for discovered resources",
      "A secure key/value store for automation",
      "A way to limit plane visibility per group"
    ],
    "answer": 0,
    "explanation": "Credentials are used centrally and can be reused between integrations (course page 54).",
    "sourcePage": 54
  },
  {
    "id": 28,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "multi",
    "difficulty": "hard",
    "question": "You create credentials for cloud and integration access. What credential types are supported?",
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
    "explanation": "The course lists, among other things, Username and Password, Access Key and Secret Key as well as Email and Private Key (course page 54).",
    "sourcePage": 54
  },
  {
    "id": 29,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "mc",
    "difficulty": "medium",
    "question": "You see that nightly sync runs at 00:00 UTC. What is it mainly used for?",
    "options": [
      "Rotates all user passwords and Cypher secrets",
      "Converts discovered VMs to managed instances",
      "Restarting appliance services after backup",
      "Run intensive operations such as pricing and AWS guidance recommendations"
    ],
    "answer": 3,
    "explanation": "Nightly sync is used for intensive operations such as pricing and AWS Guidance Recommendations (course page 55).",
    "sourcePage": 55
  },
  {
    "id": 30,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "multi",
    "difficulty": "medium",
    "question": "You want Morpheus to create DNS records automatically on provisioning. Which DNS integrations can be used?",
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
    "explanation": "DNS integrations include Route 53, Microsoft DNS, BIND, Infoblox, and PowerDNS (course page 56).",
    "sourcePage": 56
  },
  {
    "id": 31,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "multi",
    "difficulty": "medium",
    "question": "You want Morpheus to allocate IP addresses automatically. Which IPAM integrations can be used?",
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
    "explanation": "IPAM integrations include phpIPAM, BlueCat, Infoblox, Microsoft IPAM, and SolarWinds (course page 57).",
    "sourcePage": 57
  },
  {
    "id": 32,
    "module": 3,
    "moduleName": "Groups and Clouds",
    "type": "tf",
    "difficulty": "medium",
    "question": "Discovered resources from cloud inventory can provide visibility over resources that were not created by Morpheus.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "explanation": "Cloud inventory allows existing resources to be discovered and displayed as discovered (course page 100).",
    "sourcePage": 100
  },
  {
    "id": 33,
    "module": 4,
    "moduleName": "Users and Roles",
    "type": "mc",
    "difficulty": "easy",
    "question": "You explain the access model to a new administrator. Which objects are mainly used for access control in the module?",
    "options": [
      "Users and Roles",
      "Plans and Price Sets",
      "Checks and Incidents",
      "Groups and Clouds"
    ],
    "answer": 0,
    "explanation": "The module focuses on users, roles and RBAC strategy (course page 60).",
    "sourcePage": 60
  },
  {
    "id": 34,
    "module": 4,
    "moduleName": "Users and Roles",
    "type": "mc",
    "difficulty": "medium",
    "question": "A user should get some menus and resources but not others. What governs a User Role?",
    "options": [
      "Which prices are included in a price set",
      "Which images are synced from public clouds",
      "What a user gets to see and do in Morpheus",
      "Which services run on the appliance"
    ],
    "answer": 2,
    "explanation": "User roles determine permissions to functions and resources (course page 63).",
    "sourcePage": 63
  },
  {
    "id": 35,
    "module": 4,
    "moduleName": "Users and Roles",
    "type": "mc",
    "difficulty": "medium",
    "question": "A permission is set to Default in a role. Which setting then determines the actual level?",
    "options": [
      "The default role for new subtenants",
      "Automatic access to all clouds",
      "The highest permission level in the tenant role",
      "Level used for permissions set to Default"
    ],
    "answer": 3,
    "explanation": "Default Access is the base level used when a permission has level Default (course page 65).",
    "sourcePage": 65
  },
  {
    "id": 36,
    "module": 4,
    "moduleName": "Users and Roles",
    "type": "mc",
    "difficulty": "medium",
    "question": "The company wants to use Active Directory or LDAP for login. Which Morpheus function is used?",
    "options": [
      "Credential Store",
      "Service Catalog Persona",
      "Tenant Role",
      "Identity Source"
    ],
    "answer": 3,
    "explanation": "AD/LDAP is managed via identity source integration (course page 68).",
    "sourcePage": 68
  },
  {
    "id": 37,
    "module": 4,
    "moduleName": "Users and Roles",
    "type": "multi",
    "difficulty": "medium",
    "question": "You must integrate external authentication for users. What identity source types are supported?",
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
    "explanation": "Identity sources include LDAP/AD, SAML 2.0, OAuth 2.0, and JumpCloud (course page 68).",
    "sourcePage": 68
  },
  {
    "id": 38,
    "module": 4,
    "moduleName": "Users and Roles",
    "type": "tf",
    "difficulty": "medium",
    "question": "Roles can restrict access to Groups, Instance Types, Blueprints and Workflows, among other things.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "The course describes role permissions that control access to several resource and function types (course page 65).",
    "sourcePage": 65
  },
  {
    "id": 39,
    "module": 4,
    "moduleName": "Users and Roles",
    "type": "mc",
    "difficulty": "hard",
    "question": "Mega Corp wants to design RBAC according to teams and environments. What should the strategy be primarily based on?",
    "options": [
      "Which currency each tenant uses",
      "Which browser the users are running",
      "Number of service plans in each cloud",
      "The teams' responsibilities and which environments they may use"
    ],
    "answer": 3,
    "explanation": "Mega Corp uses separate teams and scopes such as development, production and finance (course page 13).",
    "sourcePage": 13
  },
  {
    "id": 40,
    "module": 4,
    "moduleName": "Users and Roles",
    "type": "mc",
    "difficulty": "medium",
    "question": "A subtenant admin must be able to create user roles. What permission is required?",
    "options": [
      "Library: Catalog Items",
      "Admin: Roles",
      "Plans: Pricing",
      "Monitoring: Alert Rules"
    ],
    "answer": 1,
    "explanation": "Subtenant administrators with Admin: Roles can create user roles in the subtenant (course page 110).",
    "sourcePage": 110
  },
  {
    "id": 41,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "mc",
    "difficulty": "easy",
    "question": "You need to collect extra values in a provisioning form. What are Inputs in Morpheus?",
    "options": [
      "Custom form fields that can collect data during provisioning or workflow execution",
      "A usage record for metered pricing",
      "A tenant role that limits user roles",
      "A list of cloud integrations that sync nightly"
    ],
    "answer": 0,
    "explanation": "Inputs are used as custom form fields (course page 72).",
    "sourcePage": 72
  },
  {
    "id": 42,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "multi",
    "difficulty": "medium",
    "question": "You build a provisioning form with custom inputs. Which input types are valid examples?",
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
    "explanation": "The course lists input types as Text, Number, Password, Select, Checkbox, Code Editor and Textarea (course page 73).",
    "sourcePage": 73
  },
  {
    "id": 43,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "mc",
    "difficulty": "medium",
    "question": "A select field must be filled with checked choices. What is an Option List?",
    "options": [
      "A source of selectable options for inputs",
      "A monitoring group with several checks",
      "A price set linked to service plans",
      "A collection of tasks in a workflow"
    ],
    "answer": 0,
    "explanation": "Option Lists are used to fill inputs with selectable options (course page 74).",
    "sourcePage": 74
  },
  {
    "id": 44,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "multi",
    "difficulty": "medium",
    "question": "You want to populate a select field dynamically with values. What sources can an Option List use?",
    "options": [
      "RESIDUAL",
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
    "explanation": "Option Lists can be, among other things, Manual, REST, LDAP, Morpheus Object and Cypher-based (course page 74).",
    "sourcePage": 74
  },
  {
    "id": 45,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "tf",
    "difficulty": "medium",
    "question": "Inputs can be reused in Blueprints, Instance Types and Catalog Items.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "explanation": "Inputs are reused in several Morpheus constructs, including Blueprints, Instance Types, and Catalog Items (course page 75).",
    "sourcePage": 75
  },
  {
    "id": 46,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "mc",
    "difficulty": "hard",
    "question": "Mega Corp wants to standardize choices like application name and support level in provisioning flows. Why are Option Lists useful?",
    "options": [
      "They replace the need for provisioning workflows",
      "They automatically create tenant roles for each subtenant",
      "They standardize choices such as application name or support level for policies and provisioning",
      "They convert discovered servers to managed instances"
    ],
    "answer": 2,
    "explanation": "Mega Corp uses controlled choices for naming, support levels and provisioning flows (course page 13).",
    "sourcePage": 13
  },
  {
    "id": 47,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "mc",
    "difficulty": "medium",
    "question": "You need to hide sensitive input in a form. Which input type is best suited?",
    "options": [
      "Text",
      "Checkbox",
      "Number",
      "Password"
    ],
    "answer": 3,
    "explanation": "Password input is used for sensitive values (course page 73).",
    "sourcePage": 73
  },
  {
    "id": 48,
    "module": 5,
    "moduleName": "Inputs and Option Lists",
    "type": "mc",
    "difficulty": "medium",
    "question": "A form should retrieve selections from an external system at runtime. What is the advantage of a REST-based Option List?",
    "options": [
      "All values must be hard-coded in the catalog item",
      "Options can be dynamically retrieved from external systems",
      "Option List automatically becomes an identity source",
      "The REST source is only used for cost reports"
    ],
    "answer": 1,
    "explanation": "REST sources allow values to be retrieved dynamically (course page 74).",
    "sourcePage": 74
  },
  {
    "id": 49,
    "module": 6,
    "moduleName": "Policies",
    "type": "mc",
    "difficulty": "easy",
    "question": "A customer wants to limit who can provision what, how long resources live and how they are named. What are Policies used for?",
    "options": [
      "To control and limit behaviors such as provisioning, naming, expiry and resource usage",
      "To store automation secrets encrypted",
      "To group checks for app monitors",
      "To sync public cloud plans nightly"
    ],
    "answer": 0,
    "explanation": "Policies place controls over users, roles, groups, clouds and global scopes (course page 78).",
    "sourcePage": 78
  },
  {
    "id": 50,
    "module": 6,
    "moduleName": "Policies",
    "type": "multi",
    "difficulty": "medium",
    "question": "You must limit and control provisioning with policies. What are examples of policy types?",
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
    "explanation": "The course lists many policy types, including backup, expiry, approvals and resource limits (course page 79).",
    "sourcePage": 79
  },
  {
    "id": 51,
    "module": 6,
    "moduleName": "Policies",
    "type": "mc",
    "difficulty": "medium",
    "question": "A provisioning flow must require approval before resources are created. What policy type is used?",
    "options": [
      "Approve Delete Policy",
      "Tag Compliance Policy",
      "Provision Approval Policy",
      "Budget Policy"
    ],
    "answer": 2,
    "explanation": "Provision Approval Policy is used for approval flows (course page 79).",
    "sourcePage": 79
  },
  {
    "id": 52,
    "module": 6,
    "moduleName": "Policies",
    "type": "mc",
    "difficulty": "hard",
    "question": "An instance matches both a global policy and a group policy. What policy applies?",
    "options": [
      "Both policies are ignored until an admin chooses",
      "The policy created last always wins",
      "Global policy wins over Group",
      "Group policy wins over Global"
    ],
    "answer": 3,
    "explanation": "Group scope has higher priority than Global in policy context (course page 80).",
    "sourcePage": 80
  },
  {
    "id": 53,
    "module": 6,
    "moduleName": "Policies",
    "type": "mc",
    "difficulty": "hard",
    "question": "What is the order of policy priority in the question bank and course notes?",
    "options": [
      "Cloud > Group > Role > User > Global",
      "User > Global > Cloud > Role > Group",
      "Role > Cloud > Global > User > Group",
      "Global > User > Role > Group > Cloud"
    ],
    "answer": 0,
    "explanation": "The policy priority is specified as Cloud, Group, Role, User, and Global (course page 80).",
    "sourcePage": 80
  },
  {
    "id": 54,
    "module": 6,
    "moduleName": "Policies",
    "type": "tf",
    "difficulty": "medium",
    "question": "Hard limits stop the action, while soft limits can be used for warning or softer control.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "The course distinguishes between hard restrictions and softer checks/warnings (course page 79).",
    "sourcePage": 79
  },
  {
    "id": 55,
    "module": 6,
    "moduleName": "Policies",
    "type": "mc",
    "difficulty": "medium",
    "question": "Development systems at Mega Corp shall automatically expire after 20 days. Which policy fits?",
    "options": [
      "Power Schedule Policy",
      "Budget Policy",
      "Provision Approval Policy",
      "Expire Date Policy"
    ],
    "answer": 3,
    "explanation": "Training scenario specifies that the development system should expire after 20 days (course page 13).",
    "sourcePage": 13
  },
  {
    "id": 56,
    "module": 6,
    "moduleName": "Policies",
    "type": "mc",
    "difficulty": "medium",
    "question": "The Operations team must specify cost centers on all instances. What policy type supports the requirement?",
    "options": [
      "Backup Policy",
      "Lifecycle Extension Policy",
      "Tag Compliance Policy",
      "Instance Name Policy"
    ],
    "answer": 2,
    "explanation": "Operations team instances must be tagged with cost centers and this matches tag compliance checks (course page 13).",
    "sourcePage": 13
  },
  {
    "id": 57,
    "module": 6,
    "moduleName": "Policies",
    "type": "mc",
    "difficulty": "medium",
    "question": "What policy type is used for standardized instance naming?",
    "options": [
      "Alert Rule",
      "Hostname or Instance Name policy",
      "Service Plan",
      "Currency Conversion"
    ],
    "answer": 1,
    "explanation": "The course's Mega Corp lab uses naming policies for production and other groups (course page 93).",
    "sourcePage": 93
  },
  {
    "id": 58,
    "module": 6,
    "moduleName": "Policies",
    "type": "tf",
    "difficulty": "medium",
    "question": "Policies can be directed at several scopes, for example users, roles, groups, clouds or globally.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "explanation": "The Govern pillar and the policy module describe policies against multiple scopes (course page 20).",
    "sourcePage": 20
  },
  {
    "id": 59,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "mc",
    "difficulty": "easy",
    "question": "You explain provisioning terminology. What does an Instance represent?",
    "options": [
      "The technology and configuration for provisioning",
      "A VM or container in a layout",
      "Base binaries for compute image",
      "A resource or service that is provisioned and managed"
    ],
    "answer": 3,
    "explanation": "Instances represent a resource or service (course page 85).",
    "sourcePage": 85
  },
  {
    "id": 60,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "mc",
    "difficulty": "medium",
    "question": "You configure an instance type for different clouds or versions. What defines a Layout?",
    "options": [
      "The technology and configuration of how an instance type is provisioned",
      "A tenant-isolated environment",
      "Base binaries for compute image",
      "A resource or service that is provisioned and managed"
    ],
    "answer": 0,
    "explanation": "Layouts define the technology and are used during instance type configuration (course page 85).",
    "sourcePage": 85
  },
  {
    "id": 61,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "mc",
    "difficulty": "medium",
    "question": "You build a layout with a VM or container. What does a Node Type represent?",
    "options": [
      "A public cloud service plan",
      "A VM or container in the layout",
      "A monitoring check state",
      "A tenant role base permission"
    ],
    "answer": 1,
    "explanation": "Node Types represent a VM or container (course page 85).",
    "sourcePage": 85
  },
  {
    "id": 62,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "mc",
    "difficulty": "medium",
    "question": "What do Virtual Images represent?",
    "options": [
      "A provisioning workflow phase",
      "An RBAC permission group",
      "A VM or container in the layout",
      "Base binaries for compute image"
    ],
    "answer": 3,
    "explanation": "Virtual Images are pointers to base binaries for compute images (course page 90).",
    "sourcePage": 90
  },
  {
    "id": 63,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "multi",
    "difficulty": "medium",
    "question": "You configure images for provisioning. What virtual image types exist in Morpheus?",
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
    "explanation": "The course describes system images, synced user images and locally uploaded/public cloud images (course page 90).",
    "sourcePage": 90
  },
  {
    "id": 64,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "multi",
    "difficulty": "medium",
    "question": "You are debugging a typical VMware provisioning flow. What steps are included in the flow?",
    "options": [
      "Attach cloud-init ISO",
      "Finalize",
      "Create tenant role",
      "Check that the virtual image exists in the target cloud",
      "Clone image to target datastore"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Provisioning steps include image availability, clone, resize, cloud-init ISO, guest customization, power/network wait and finalize (course page 92).",
    "sourcePage": 92
  },
  {
    "id": 65,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "mc",
    "difficulty": "medium",
    "question": "Development and Production need the same Ubuntu foundation but different access/naming. Why does an instance type fit with two layouts?",
    "options": [
      "Because each layout must have its own master tenant",
      "Because price sets cannot be linked to instance types",
      "Because Development and Production have different group access/naming needs but the same basic type",
      "Because monitoring groups can only be linked to layouts"
    ],
    "answer": 2,
    "explanation": "The lab proposes a single instance type with two layouts and group access to layouts (course page 93).",
    "sourcePage": 93
  },
  {
    "id": 66,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "multi",
    "difficulty": "medium",
    "question": "You are considering installing the Morpheus agent on provisioned VMs. What features do you get with the agent?",
    "options": [
      "Guest OS statistics",
      "VM check for monitoring",
      "Built-in currency conversion",
      "System/application logs in appliance"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "The agent provides statistics, guidance, logs, VM checks, command bus, firewall management and brownfield conversion (course page 95).",
    "sourcePage": 95
  },
  {
    "id": 67,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "mc",
    "difficulty": "medium",
    "question": "You design agent communication through firewall. How does the Morpheus agent normally connect to the appliance?",
    "options": [
      "AMQP directly to RabbitMQ on port 5672",
      "Inbound SSH from appliance on port 22",
      "Outbound HTTPS/WSS on port 443",
      "MySQL directly to transactional tier on port 3306"
    ],
    "answer": 2,
    "explanation": "The agent establishes a secure outbound WebSocket/HTTPS connection on port 443 (course page 96).",
    "sourcePage": 96
  },
  {
    "id": 68,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "multi",
    "difficulty": "medium",
    "question": "You activate inventory on a cloud integration. Which inventory levels can be selected?",
    "options": [
      "Basic",
      "Full",
      "Archives",
      "Off"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Cloud inventory has three settings: Off, Basic and Full (course page 100).",
    "sourcePage": 100
  },
  {
    "id": 69,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "tf",
    "difficulty": "medium",
    "question": "A discovered VM can be converted to managed instance without additional WLE in addition to the WLE already used for the discovered server.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "explanation": "The course says that conversion does not consume additional WLE on top of the discovered server (course page 101).",
    "sourcePage": 101
  },
  {
    "id": 70,
    "module": 7,
    "moduleName": "Provisioning Instances",
    "type": "mc",
    "difficulty": "medium",
    "question": "You want to stop managing a VM in Morpheus but keep it in the target cloud. What delete behavior corresponds to this?",
    "options": [
      "To delete both instance and VM permanently",
      "To create a new usage record for the WC",
      "To install the Morpheus agent on the VM",
      "To unmanage the object in Morpheus without deleting the VM in the target cloud"
    ],
    "answer": 3,
    "explanation": "Deletion can be used to remove from Morpheus but keep in the target cloud, especially for converted managed instances (course page 102).",
    "sourcePage": 102
  },
  {
    "id": 71,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "mc",
    "difficulty": "easy",
    "question": "An MSP wants to isolate customers in the same Morpheus appliance. What gives Tenants?",
    "options": [
      "A collection of checks for app monitors",
      "A connection between price sets and plans",
      "Isolated environments in a single appliance",
      "Shared storage for the application tier"
    ],
    "answer": 2,
    "explanation": "Tenants provide isolated environments within a single HPE Morpheus appliance (course page 106).",
    "sourcePage": 106
  },
  {
    "id": 72,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "tf",
    "difficulty": "easy",
    "question": "There can only be one master tenant in a Morpheus appliance.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "explanation": "Master tenant is created automatically during installation and only one master tenant can exist (course page 106).",
    "sourcePage": 106
  },
  {
    "id": 73,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "mc",
    "difficulty": "medium",
    "question": "How many levels of subtenancy are supported?",
    "options": [
      "A level",
      "Two levels",
      "Unlimited number",
      "No subtenancy"
    ],
    "answer": 0,
    "explanation": "The course says only one level of subtenancy supported (course page 106).",
    "sourcePage": 106
  },
  {
    "id": 74,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "mc",
    "difficulty": "medium",
    "question": "Who creates and controls subtenants in Morpheus?",
    "options": [
      "Multi-tenant user role",
      "Identity source",
      "Subtenant admin",
      "Master tenant"
    ],
    "answer": 3,
    "explanation": "Master tenant creates and controls all subtenants (course page 106).",
    "sourcePage": 106
  },
  {
    "id": 75,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "mc",
    "difficulty": "medium",
    "question": "A subtenant gets a base role. What does the tenant role put into practice?",
    "options": [
      "Which cloud costing mode is active",
      "Which Service Catalog tab appears first",
      "Which currency conversion provider is used",
      "Maximum permissions that subtenant users can use"
    ],
    "answer": 3,
    "explanation": "Tenant role functions as base role and sets maximum permissions (course page 109).",
    "sourcePage": 109
  },
  {
    "id": 76,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "tf",
    "difficulty": "medium",
    "question": "If a permission is disabled in the tenant role, it will not be visible as a selectable permission in the user role.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Permissions disabled in tenant role are not visible in user role (course page 109).",
    "sourcePage": 109
  },
  {
    "id": 77,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "mc",
    "difficulty": "medium",
    "question": "Where can tenant roles be created?",
    "options": [
      "In all subtenants",
      "Only on the cloud detail page",
      "Only in master tenancy",
      "Only via Billing API"
    ],
    "answer": 2,
    "explanation": "Tenant roles can only be created in master tenant (course page 109).",
    "sourcePage": 109
  },
  {
    "id": 78,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "mc",
    "difficulty": "medium",
    "question": "You compare single tenant and multi-tenant user roles. Which description is correct?",
    "options": [
      "They are identical in every respect",
      "Multi-tenant roles are only used for monitoring",
      "Single tenant roles are only used for invoices",
      "Single tenant roles are created/live in a subtenant; multi-tenant roles are created in root and copied to subtenants"
    ],
    "answer": 3,
    "explanation": "The course distinguishes between user roles created in subtenant and multi-tenant roles created in root/master (course page 110).",
    "sourcePage": 110
  },
  {
    "id": 79,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "multi",
    "difficulty": "medium",
    "question": "A subtenant must get its own branding. What settings can the whitelabel feature change?",
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
    "explanation": "Whitelabel includes appliance name, logos, favicon, CSS, copyright, terms/privacy and more (course page 116).",
    "sourcePage": 116
  },
  {
    "id": 80,
    "module": 8,
    "moduleName": "Tenancy",
    "type": "multi",
    "difficulty": "hard",
    "question": "A subtenant needs access to cloud resources. What methods are supported?",
    "options": [
      "Create an alert rule",
      "Integrate the cloud directly into the subtenant",
      "Share cloud integration from master tenant to subtenants",
      "Assign cloud integration in the master tenant to a single subtenant"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": "The course specifies three ways: direct integration, shared master cloud and assigned private cloud to a subtenant (course page 118).",
    "sourcePage": 118
  },
  {
    "id": 81,
    "module": 9,
    "moduleName": "Automation",
    "type": "multi",
    "difficulty": "easy",
    "question": "You design automation in Morpheus. Which building blocks are included in the automation module?",
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
    "explanation": "Automation building blocks include repositories, Cypher, Tasks, Workflows, File Templates, Script Templates and XaaS (course page 122).",
    "sourcePage": 122
  },
  {
    "id": 82,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "medium",
    "question": "You integrate automation code from a single repo. When should Git integration be chosen over GitHub integration?",
    "options": [
      "When you want to create a Cypher mountpoint",
      "When you want to run monitoring checks in a group",
      "When you want to integrate a single repo, regardless of GitHub/ADO/GitLab",
      "When you want to import all repos from a GitHub account"
    ],
    "answer": 2,
    "explanation": "Git integration is used for a single repository and can point to GitHub, ADO, GitLab and more (course page 123).",
    "sourcePage": 123
  },
  {
    "id": 83,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "medium",
    "question": "A private Git repo should be used in Morpheus automation. What is required?",
    "options": [
      "Only one tenant role in the master tenant",
      "Authentication via PAT and SSH keys",
      "A service plan with public visibility",
      "Auto Create checks activated in Monitoring settings"
    ],
    "answer": 1,
    "explanation": "Private repo needs authentication via PAT and SSH keys (course page 123).",
    "sourcePage": 123
  },
  {
    "id": 84,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "medium",
    "question": "You import SSH keys for Git integration. What format does Morpheus accept according to the course?",
    "options": [
      "PEM format",
      "PFX format",
      "OpenSSH public key only",
      "DER certificate bundle"
    ],
    "answer": 0,
    "explanation": "The course states that Morpheus only accepts PEM format keys (course page 123).",
    "sourcePage": 123
  },
  {
    "id": 85,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "easy",
    "question": "You need to store secrets for automation. What is Cypher?",
    "options": [
      "An engine for invoice line items",
      "A public cloud service plan",
      "A secure encrypted key/value store",
      "A remote console component"
    ],
    "answer": 2,
    "explanation": "Cypher is described as a secure key/value store where values are encrypted (course page 125).",
    "sourcePage": 125
  },
  {
    "id": 86,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "medium",
    "question": "A script task needs to read a secret value from Cypher. What syntax does the course show?",
    "options": [
      "<%= cypher.read(\"varname\") %>",
      "${env:cypher.varname}",
      "{{ cypher varname }}",
      "SELECT cypher(varname)"
    ],
    "answer": 0,
    "explanation": "The course displays Cypher values as Morpheus variable via cypher.read (course page 125).",
    "sourcePage": 125
  },
  {
    "id": 87,
    "module": 9,
    "moduleName": "Automation",
    "type": "multi",
    "difficulty": "medium",
    "question": "You create a Task and must choose where it runs. What target options are there?",
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
    "explanation": "Tasks can be run against Resource, Local appliance or Remote system (course page 126).",
    "sourcePage": 126
  },
  {
    "id": 88,
    "module": 9,
    "moduleName": "Automation",
    "type": "tf",
    "difficulty": "medium",
    "question": "A Task can run code from a Git repo or from code placed directly in the task.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "explanation": "The course says that tasks can run code in a git repo or code can be added directly (course page 126).",
    "sourcePage": 126
  },
  {
    "id": 89,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "medium",
    "question": "You want to run a workflow manually, scheduled or via service catalog. Which workflow type do you use?",
    "options": [
      "Operational Workflow",
      "Price Phase Task",
      "App Monitor",
      "Provisioning Workflow"
    ],
    "answer": 0,
    "explanation": "Operational workflows can be run on demand, via jobs or as a catalog item (course page 128).",
    "sourcePage": 128
  },
  {
    "id": 90,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "medium",
    "question": "You want to connect automation to instance provisioning. Which workflow type is used?",
    "options": [
      "Alert Rule",
      "Provisioning Workflow",
      "Operational Workflow",
      "Catalog Workflow only"
    ],
    "answer": 1,
    "explanation": "Provisioning workflows are associated with instances at provisioning time (course page 128).",
    "sourcePage": 128
  },
  {
    "id": 91,
    "module": 9,
    "moduleName": "Automation",
    "type": "multi",
    "difficulty": "hard",
    "question": "You connect script templates to the provisioning life cycle. Which phases can be used?",
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
    "explanation": "Script templates can be run in phases such as Start/Stop Service, Pre-provision, Provision, Post-provision, Deploy, Reconfigure, Teardown and more (course page 130).",
    "sourcePage": 130
  },
  {
    "id": 92,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "medium",
    "question": "You need to generate configuration files with variables during automation. What do File Templates do?",
    "options": [
      "Generates configuration files with variable support for automation",
      "Syncs public cloud prices nightly",
      "Starts workflows according to boot order",
      "Creates tenant roles from master tenant"
    ],
    "answer": 0,
    "explanation": "File Templates generate configuration files and have full config map variable support (course page 131).",
    "sourcePage": 131
  },
  {
    "id": 93,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "hard",
    "question": "You place inputs on instance type and layout. When are they displayed to the user?",
    "options": [
      "On instance types and layouts; operational workflows can also have inputs",
      "Only on invoices and usage records",
      "Only on monitoring checks and app monitors",
      "Only on tenant roles and identity sources"
    ],
    "answer": 0,
    "explanation": "Inputs can be set on instance types and layouts, and operational workflows can also use inputs (course page 132).",
    "sourcePage": 132
  },
  {
    "id": 94,
    "module": 9,
    "moduleName": "Automation",
    "type": "mc",
    "difficulty": "medium",
    "question": "In the Mega Corp automation lab, Morpheus will use code from the repo. What is done first?",
    "options": [
      "Adds Git repo integration so tasks can use code",
      "Enables cloud costing on the public cloud",
      "Creates alert rules for Rocket app",
      "Creates Service Catalog Persona"
    ],
    "answer": 0,
    "explanation": "The Mega Corp use case starts by integrating the Git repo where the automation code resides (course page 133).",
    "sourcePage": 133
  },
  {
    "id": 95,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "mc",
    "difficulty": "easy",
    "question": "You must provision a multi-tier application. What are app blueprints used for?",
    "options": [
      "To store credentials for cloud integrations",
      "To define default access in user roles",
      "To group monitoring checks by severity",
      "To provision complex applications based on Morpheus instances or IaC"
    ],
    "answer": 3,
    "explanation": "Blueprints provision complex applications based on instances or Infrastructure as Code (course page 137).",
    "sourcePage": 137
  },
  {
    "id": 96,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "multi",
    "difficulty": "medium",
    "question": "You will create an IaC-based blueprint. What technologies are supported by Morpheus blueprints?",
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
    "explanation": "IaC blueprints support Terraform, ARM, CloudFormation, Kubernetes and Helm (course page 137).",
    "sourcePage": 137
  },
  {
    "id": 97,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "mc",
    "difficulty": "medium",
    "question": "A user should provision an app from a blueprint. Where can this be done?",
    "options": [
      "Administration > Health or Appliance settings",
      "Infrastructure > Networks > Proxies",
      "Provisioning > Apps or via self-service catalog",
      "Operations > Costing > Usage"
    ],
    "answer": 2,
    "explanation": "Blueprints are used for apps via Provisioning > Apps or self-service catalog (course page 137).",
    "sourcePage": 137
  },
  {
    "id": 98,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "mc",
    "difficulty": "medium",
    "question": "You want to build a multi-tier app with common Morpheus instance types. Which blueprint type is suitable?",
    "options": [
      "Multi-tiered application provisioning from Morpheus instance types",
      "Metered pricing from usage records",
      "Cloud inventory for discovered VMs",
      "External identity source integration"
    ],
    "answer": 0,
    "explanation": "The Morpheus type blueprint builds multi-tier apps with Morpheus instance types (course page 137).",
    "sourcePage": 137
  },
  {
    "id": 99,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "mc",
    "difficulty": "medium",
    "question": "A database tier must be built before the application tier. What is boot order used for?",
    "options": [
      "To control the build sequence between tiers, e.g. database before application",
      "To determine check state after recovery",
      "To sync price plans nightly",
      "To determine tenant role priority"
    ],
    "answer": 0,
    "explanation": "Boot order can control that, for example, the database tier is built before the app tier (course page 138).",
    "sourcePage": 138
  },
  {
    "id": 100,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "multi",
    "difficulty": "hard",
    "question": "You create an IaC blueprint and need to specify the source of the code. What sources are supported?",
    "options": [
      "From integrated Git repo",
      "Via the Morpheus spec template",
      "Directly in the blueprint configuration",
      "Via invoice line items"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "IaC blueprint can use Git repo, spec template or direct code depending on the type (course page 139).",
    "sourcePage": 139
  },
  {
    "id": 101,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "mc",
    "difficulty": "medium",
    "question": "Mega Corp will provision Rocket Parts as a blueprint. What architecture is used?",
    "options": [
      "Two tiers: Custom MySQL database and Apache/PHP application",
      "Four checks: DNS, SMTP, ICMP and TCP",
      "An IaC-only Terraform VPC blueprint",
      "Three tenants: Development, Operations and Finance"
    ],
    "answer": 0,
    "explanation": "The Mega Corp blueprint is a two-tier application with MySQL database tier and Apache/PHP application tier (course page 140).",
    "sourcePage": 140
  },
  {
    "id": 102,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "tf",
    "difficulty": "medium",
    "question": "A Morpheus blueprint can have several configurations, for example one for production and one for development.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "explanation": "The Mega Corp lab adds both production and development configuration to the blueprint (course page 140).",
    "sourcePage": 140
  },
  {
    "id": 103,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "mc",
    "difficulty": "medium",
    "question": "Why does Mega Corp add a development configuration to the blueprint?",
    "options": [
      "Because tenant roles require two blueprint configurations",
      "Because public cloud plans cannot be synced nightly",
      "For production-like test environment with smaller instances and development group-scope",
      "Because Service Catalog Persona cannot display production items"
    ],
    "answer": 2,
    "explanation": "Development configuration should provide production-like testing and be limited to development groups with smaller instances (course page 140).",
    "sourcePage": 140
  },
  {
    "id": 104,
    "module": 10,
    "moduleName": "Blueprints",
    "type": "mc",
    "difficulty": "hard",
    "question": "You want to control whether blueprint fields can be changed by the user during provisioning. Which setting is used?",
    "options": [
      "Fields can be left open/unlocked, locked or hidden",
      "Fields can only be hidden via CSS override",
      "Fields always become read-only in self-service",
      "Fields are controlled only by tenant role Default Access"
    ],
    "answer": 0,
    "explanation": "HPE Morpheus type blueprint can leave configuration settings open, locked or hidden from users (course page 137).",
    "sourcePage": 137
  },
  {
    "id": 105,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "multi",
    "difficulty": "easy",
    "question": "You build monitoring for an application in Morpheus. What main parts are included?",
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
    "explanation": "Monitoring overview addresses checks, monitoring groups, app monitors, logs, incidents and alert rules (course page 144).",
    "sourcePage": 144
  },
  {
    "id": 106,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "mc",
    "difficulty": "medium",
    "question": "A monitoring check goes down. What does Morpheus do automatically?",
    "options": [
      "Morpheus deletes the monitoring group",
      "Morpheus raises an incident",
      "Morpheus automatically creates a subtenant",
      "Morpheus turns off cloud costing"
    ],
    "answer": 1,
    "explanation": "When a check fails, Morpheus raises an incident (course page 144).",
    "sourcePage": 144
  },
  {
    "id": 107,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "multi",
    "difficulty": "medium",
    "question": "You configure alert rules for operational alarms. What contact/notification types can be used?",
    "options": [
      "Slack hook",
      "Usage record",
      "Web hook",
      "Victor Oops",
      "Email/SMS"
    ],
    "answer": [
      0,
      2,
      3,
      4
    ],
    "explanation": "Alert rule contacts can be Email/SMS, Web hook, Slack hook and VictorOps (course page 149).",
    "sourcePage": 149
  },
  {
    "id": 108,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "mc",
    "difficulty": "medium",
    "question": "You create a monitoring check. What is a Check?",
    "options": [
      "An individual monitoring check",
      "A log retention setting",
      "An incident severity policy",
      "A collection of checks for an app"
    ],
    "answer": 0,
    "explanation": "Checks are individual monitoring checks (course page 145).",
    "sourcePage": 145
  },
  {
    "id": 109,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "mc",
    "difficulty": "medium",
    "question": "You group several checks for one service. What is a Monitoring Group?",
    "options": [
      "A single VM Monitoring check",
      "A container for one or more checks",
      "An analytics dashboard",
      "A contact for alert rules"
    ],
    "answer": 1,
    "explanation": "Groups contain one or more checks (course page 145).",
    "sourcePage": 145
  },
  {
    "id": 110,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "multi",
    "difficulty": "medium",
    "question": "You review the status of monitoring checks. Which check states can be displayed?",
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
    "explanation": "Check states are Healthy, Error, Warning and Unknown (course page 145).",
    "sourcePage": 145
  },
  {
    "id": 111,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "mc",
    "difficulty": "hard",
    "question": "A check has recovered from errors. When does it go from Warning back to Healthy?",
    "options": [
      "After the next nightly sync",
      "When the incident is manually closed",
      "Directly after the first successful check",
      "After 10 successful check runs"
    ],
    "answer": 3,
    "explanation": "Warning to Healthy requires 10 successful check runs (course page 145).",
    "sourcePage": 145
  },
  {
    "id": 112,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "mc",
    "difficulty": "medium",
    "question": "You want each new provisioned instance to receive a VM Monitoring check. Which setting is activated?",
    "options": [
      "Auto Create checks",
      "Sync costing",
      "Enable guidance",
      "Clear Activity"
    ],
    "answer": 0,
    "explanation": "Auto Create checks cause Morpheus to generate a VM Monitoring check for each provisioned instance (course page 147).",
    "sourcePage": 147
  },
  {
    "id": 113,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "mc",
    "difficulty": "medium",
    "question": "You enable syslog forwarding for managed VMs. Which component sends the logs?",
    "options": [
      "Nginx reverse proxy, not the agent",
      "MySQL router, not appliance",
      "RabbitMQ cluster, not the agent",
      "Morpheus agent, not appliance"
    ],
    "answer": 3,
    "explanation": "The course notes that the agent forwards logs at syslog forwarding, not the appliance (course page 147).",
    "sourcePage": 147
  },
  {
    "id": 114,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "mc",
    "difficulty": "medium",
    "question": "You must configure who is alerted in case of critical errors. Where are alert rules created?",
    "options": [
      "Monitoring > Alert Rules",
      "Administration > Plans & Pricing",
      "Library > Blueprints > Catalog Items",
      "Infrastructure > Clouds > Advanced Options"
    ],
    "answer": 0,
    "explanation": "Alert Rules are set up under Monitoring > Alert Rules (course page 149).",
    "sourcePage": 149
  },
  {
    "id": 115,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "multi",
    "difficulty": "medium",
    "question": "You set up monitoring for the Mega Corps Rocket app. What checks are included in the lab scenario?",
    "options": [
      "MySQL",
      "WC",
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
    "explanation": "Mega Corp monitoring includes VM, MySQL, PHP and Apache checks (course page 150).",
    "sourcePage": 150
  },
  {
    "id": 116,
    "module": 11,
    "moduleName": "Monitoring",
    "type": "tf",
    "difficulty": "medium",
    "question": "App monitors show an aggregation of checks and groups for a specific app.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "App monitors show aggregation of checks/groups for a specific app (course page 145).",
    "sourcePage": 145
  },
  {
    "id": 117,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "mc",
    "difficulty": "easy",
    "question": "You want to provide users with a simplified ordering portal. What is the purpose of the Self-Service module?",
    "options": [
      "Integrating Git repos for automation",
      "To create catalog items that users can provision via the Service Catalog persona",
      "To create incidents when checks fail",
      "To create price sets for service plans"
    ],
    "answer": 1,
    "explanation": "The module is about self-service via catalog items and Service Catalog persona (course page 153).",
    "sourcePage": 153
  },
  {
    "id": 118,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "mc",
    "difficulty": "medium",
    "question": "You must create a new catalog item. Where is it done in UI?",
    "options": [
      "Provisioning > Apps > Catalog Items",
      "Monitoring > Alert Rules",
      "Operations > Costing > Invoices",
      "Library > Blueprints > Catalog Items"
    ],
    "answer": 3,
    "explanation": "Catalog items are created via Library > Blueprints > Catalog Items (course page 154).",
    "sourcePage": 154
  },
  {
    "id": 119,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "mc",
    "difficulty": "medium",
    "question": "An administrator must create or change catalog items. What role authorization is required?",
    "options": [
      "Library: Catalog Items = Full",
      "Plans: Pricing = Full",
      "Monitoring: Logs = Full",
      "Personas: Default = Full"
    ],
    "answer": 0,
    "explanation": "Users need Library: Catalog Items permission set to Full (course page 154).",
    "sourcePage": 154
  },
  {
    "id": 120,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "tf",
    "difficulty": "medium",
    "question": "Instance and Blueprint catalog items use the provisioning wizard to capture configuration settings.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "explanation": "The course says that Instance and Blueprint catalog items use provisioning wizard to capture configuration settings (course page 154).",
    "sourcePage": 154
  },
  {
    "id": 121,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "mc",
    "difficulty": "medium",
    "question": "You want to add extra instructions or description to a catalog item. Where is supplemental content placed?",
    "options": [
      "In Monitoring > Logs",
      "In Cypher mountpoint secret/",
      "In the CONTENT field",
      "In Price Set Type"
    ],
    "answer": 2,
    "explanation": "Supplemental content can be included in the CONTENT field (course page 154).",
    "sourcePage": 154
  },
  {
    "id": 122,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "mc",
    "difficulty": "medium",
    "question": "You are using Morpheus 6.1 or later. What does Forms simplify for catalog items?",
    "options": [
      "How usage records are recalculated",
      "How RabbitMQ cluster elections happen",
      "How tenant roles are locked",
      "How inputs are added to catalog items"
    ],
    "answer": 3,
    "explanation": "Forms simplify the way inputs are added to catalog items (course page 154).",
    "sourcePage": 154
  },
  {
    "id": 123,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "mc",
    "difficulty": "easy",
    "question": "A user must request resources via self-service. Which persona is used?",
    "options": [
      "Standard Persona only",
      "Service Catalog Persona",
      "Master Tenant Persona",
      "Virtual Desktop Persona"
    ],
    "answer": 1,
    "explanation": "Self-service users use the Service Catalog Persona (course page 155).",
    "sourcePage": 155
  },
  {
    "id": 124,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "multi",
    "difficulty": "medium",
    "question": "A self-service user opens the Service Catalog persona. What tabs are there?",
    "options": [
      "Order History",
      "Dashboard",
      "Instances",
      "Budgets",
      "Catalogue"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "The Service Catalog persona contains Dashboard, Catalog, Instances, Apps, Executions and Order History (course page 155).",
    "sourcePage": 155
  },
  {
    "id": 125,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "tf",
    "difficulty": "medium",
    "question": "The service catalog view is also available from the default persona.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "explanation": "The course states that service catalog view also available from within standard persona (course page 155).",
    "sourcePage": 155
  },
  {
    "id": 126,
    "module": 12,
    "moduleName": "Self-Service",
    "type": "multi",
    "difficulty": "medium",
    "question": "You build self-service for Mega Corp. Which catalog items are included in the scenario?",
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
    "explanation": "Mega Corp builds catalog items for Custom Ubuntu, Rocket app blueprint and LAMP operational workflow (course page 156).",
    "sourcePage": 156
  },
  {
    "id": 127,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "multi",
    "difficulty": "easy",
    "question": "You explain the Morpheus pricing model. Which objects are central to the model?",
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
    "explanation": "The module covers Service Plans, Price Sets, Prices and Usage Records (course page 159).",
    "sourcePage": 159
  },
  {
    "id": 128,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "Where to find Plans & Pricing in UI?",
    "options": [
      "Administration > Plans & Pricing",
      "Library > Blueprints > Catalog Items",
      "Infrastructure > Clouds > Advanced Options",
      "Operations > Costing > Usage"
    ],
    "answer": 0,
    "explanation": "Service plans and pricing are managed under Administration > Plans & Pricing (course page 161).",
    "sourcePage": 161
  },
  {
    "id": 129,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "You choose the CPU, memory and size during provisioning. What do Service Plans control?",
    "options": [
      "What checks are included in app monitor",
      "Which Git branch automation to use",
      "Compute amount when provisioning and reconfigure",
      "Which tenant roles are copied to subtenants"
    ],
    "answer": 2,
    "explanation": "Service Plans control amount of compute a resource has during provisioning and reconfigure (course page 161).",
    "sourcePage": 161
  },
  {
    "id": 130,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "tf",
    "difficulty": "medium",
    "question": "Public cloud service plans are automatically synced when a public cloud is added and updated nightly.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "explanation": "Public cloud service plans are automatically synced and updated nightly (course page 162).",
    "sourcePage": 162
  },
  {
    "id": 131,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "What does the course recommend for public cloud service plans not to use?",
    "options": [
      "Disable them instead of deleting them",
      "Convert them to private cloud plans",
      "Move them to Price Plans",
      "Delete them so they are recreated by nightly sync"
    ],
    "answer": 0,
    "explanation": "The course says do not delete synced plans, deactivate instead (course page 162).",
    "sourcePage": 162
  },
  {
    "id": 132,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "You price compute, memory or storage. What do Prices define?",
    "options": [
      "Combines several service plans into one tenant role",
      "Control which Groups get to see a cloud integration",
      "Creates invoice records directly from the public cloud API",
      "Defines what is priced, amount, price unit, cost/markup/price and can be added to price sets"
    ],
    "answer": 3,
    "explanation": "Prices configures what you want to price and how much, including units, costs, markups and currencies (course page 164).",
    "sourcePage": 164
  },
  {
    "id": 133,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "You want to connect several prices to a plan. What do Price Sets do?",
    "options": [
      "Activates guidance recommendations on a cloud",
      "Combines one or more prices and is linked to plans, instance types or layouts",
      "Defines CPU and memory during provisioning",
      "Stores each individual hourly cost in an invoice"
    ],
    "answer": 1,
    "explanation": "Price Sets combine one or more Prices and attach to Plans, Instance Types or Layouts (course page 165).",
    "sourcePage": 165
  },
  {
    "id": 134,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "You are reviewing metered pricing for a resource. What are Usage Records?",
    "options": [
      "Lowest level itinerary item to track costs against resources",
      "A price adjustment on a service plan",
      "A dashboard for utilization vs cost",
      "A monthly compilation of invoice line items"
    ],
    "answer": 0,
    "explanation": "Usage records track costs against resources and are the lowest level itinerary item (course page 167).",
    "sourcePage": 167
  },
  {
    "id": 135,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "hard",
    "question": "A resource is changed after provisioning. What happens to usage records?",
    "options": [
      "Budget thresholds are reset to default",
      "New usage records are created",
      "All historical invoice line items are deleted",
      "Cloud costing is automatically turned off"
    ],
    "answer": 1,
    "explanation": "Changes to resource results in new usage records (course page 167).",
    "sourcePage": 167
  },
  {
    "id": 136,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "multi",
    "difficulty": "medium",
    "question": "You need currency conversion between master tenant and subtenant. Which providers are supported?",
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
    "explanation": "The course lists Open Exchange Rates and Fixer.io as supported currency conversion providers (course page 170).",
    "sourcePage": 170
  },
  {
    "id": 137,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "You must configure currency conversion. Where is it done?",
    "options": [
      "Administration > Settings > Appliance > Currency Settings",
      "Operations > Costing > Invoices",
      "Administration > Plans & Pricing > Price Sets",
      "Infrastructure > Clouds > Advanced Options"
    ],
    "answer": 0,
    "explanation": "Currency Settings can be found under Administration > Settings > Appliance (course page 170).",
    "sourcePage": 170
  },
  {
    "id": 138,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "multi",
    "difficulty": "hard",
    "question": "You need to adjust or override the price displayed during provisioning. What mechanisms can be used?",
    "options": [
      "Price phase tasks",
      "Monitoring check states",
      "Price adjustment",
      "Price sets on instance types and layouts"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "The course specifies Price Adjustment, Price Sets on instance types/layouts and Price Phase Tasks (course page 171).",
    "sourcePage": 171
  },
  {
    "id": 139,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "Public cloud costing is enabled. What does the cloud costing setting do?",
    "options": [
      "Live-syncs cost data from the cloud provider and creates invoice records",
      "Creates metered prices directly from service plans",
      "Recalculates tenant roles by currency",
      "Publishes cost reports to the Service Catalog"
    ],
    "answer": 0,
    "explanation": "Public cloud costing uses the provider cost API for invoice records (course page 172).",
    "sourcePage": 172
  },
  {
    "id": 140,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "Where do you find usage records in the UI?",
    "options": [
      "Administration > Plans & Pricing > Prices",
      "Operations > Reports > Cloud Cost",
      "Operations > Costing > Usage",
      "Operations > Costing > Invoices"
    ],
    "answer": 2,
    "explanation": "Usage records are displayed under Operations > Costing > Usage and via the Billing API (course page 173).",
    "sourcePage": 173
  },
  {
    "id": 141,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "You explain invoice records. What granularity do they have?",
    "options": [
      "Monthly granularity and calculated nightly",
      "Second granularity and calculated live",
      "Weekly granularity and created manually",
      "Annual granularity and is created at budget close"
    ],
    "answer": 0,
    "explanation": "Invoices generated nightly and provide cost data at month granularity (course page 174).",
    "sourcePage": 174
  },
  {
    "id": 142,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "hard",
    "question": "A usage record lasts less than an hour and becomes an invoice line item. How is the cost handled?",
    "options": [
      "The cost is ignored until usage reaches one hour",
      "Invoice record is marked as metered only",
      "The cost is rounded up to an hourly cost",
      "Line items are split into second-based items"
    ],
    "answer": 2,
    "explanation": "Line items have a granularity of one hour and usage during one hour is rounded up to one hour's cost (course page 176).",
    "sourcePage": 176
  },
  {
    "id": 143,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "hard",
    "question": "You see the actual cost type on an invoice. When is actual cost type used?",
    "options": [
      "When costing is disabled on the cloud",
      "Only when the price phase task is running",
      "Only when budget policy exists",
      "When costing is enabled on the cloud"
    ],
    "answer": 3,
    "explanation": "Actual cost type is used when costing is enabled on cloud (course page 177).",
    "sourcePage": 177
  },
  {
    "id": 144,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "hard",
    "question": "You need reliable cost data for metered pricing. What does HPE recommend?",
    "options": [
      "Get cost data from usage records via the Billing API",
      "Use Monitoring logs for cost reconstruction",
      "Use Service Catalog order history",
      "Only use the invoice UI as it is more detailed"
    ],
    "answer": 0,
    "explanation": "For metered pricing, HPE recommends Billing API/usage records for cost data (course page 177).",
    "sourcePage": 177
  },
  {
    "id": 145,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "You want to use ready-made costing reports. How many predefined report types are mentioned?",
    "options": [
      "14",
      "3",
      "10",
      "31"
    ],
    "answer": 3,
    "explanation": "The Costing reports page lists 31 predefined report types (course page 179).",
    "sourcePage": 179
  },
  {
    "id": 146,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "You want to use ready-made analytics dashboards. How many predefined analytics dashboards are mentioned?",
    "options": [
      "4",
      "14",
      "31",
      "8"
    ],
    "answer": 1,
    "explanation": "The Analytics page lists 14 predefined analytics dashboards (course page 180).",
    "sourcePage": 180
  },
  {
    "id": 147,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "multi",
    "difficulty": "medium",
    "question": "You activate cost guidance and rightsizing. What time periods can the recommendations be based on?",
    "options": [
      "60 days",
      "90 days",
      "365 days always",
      "30 days"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Guidance can provide recommendations over 30, 60 or 90 days (course page 181).",
    "sourcePage": 181
  },
  {
    "id": 148,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "multi",
    "difficulty": "medium",
    "question": "You create budgets in Morpheus. Which scopes can a budget be linked to?",
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
    "explanation": "Budgets scoped to accounts, tenants, clouds, groups or users (course page 182).",
    "sourcePage": 182
  },
  {
    "id": 149,
    "module": 13,
    "moduleName": "Plans, Prices, and Costs",
    "type": "mc",
    "difficulty": "medium",
    "question": "You create a budget in Morpheus. How long is the budget period supported?",
    "options": [
      "Single or multi-year, up to three years",
      "Unlimited budget period",
      "Only one month at a time",
      "One calendar quarter only"
    ],
    "answer": 0,
    "explanation": "Budgets can be single or multi-year up to three years (course page 182).",
    "sourcePage": 182
  }
];
