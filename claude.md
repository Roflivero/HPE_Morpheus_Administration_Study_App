# HPE Morpheus Exam Prep

Projekt för att förbereda inför **HPE Morpheus Enterprise Software Administration** examen.

## Kurskälla

- **Titel**: HPE Morpheus Enterprise Software Administration Student Guide
- **Kurskod**: H45ZD-SG-A01-E
- **Utgivare**: HPE Education Services
- **Omfattning**: 185 sidor, 13 moduler
- **Plattform**: Gilmore Global eVantage (DRM-skyddad webbläsare-reader)
- **URL**: https://evantage.gilmoreglobal.com/reader/books/H45ZD-SG-A01-E/pageid/0

## Mappstruktur

```
MorpheusExam/
├── claude.md                  # Denna fil
├── content/
│   └── kursinnehall.md        # Sammanställning av kursinnehåll per modul
├── screenshots/               # (tom - lokala skärmdumpar kan läggas här vid behov)
└── quiz-app/
    ├── index.html             # Quiz-applikationens entry point
    ├── styles.css             # Styling (HPE-färgschema)
    ├── app.js                 # Quiz-logik
    └── questions.js           # Frågedatabas (149 frågor, 13 moduler)
```

## Kursmoduler (med sidnummer)

| # | Modul | Sida |
|---|-------|------|
| Intro | Course Introduction | 4 |
| Intro | Training Scenario (Mega Corp) | 11 |
| Intro | Hands-On Labs översikt | 14 |
| 1 | HPE Morpheus Enterprise Software Introduction | 18 |
| 2 | Installing, Maintaining, and Configuring an HPE Morpheus Appliance | 29 |
| 3 | Groups and Clouds | 48 |
| 4 | Users and Roles | 60 |
| 5 | Inputs and Option Lists | 72 |
| 6 | Policies | 78 |
| 7 | Provisioning Instances | 83 |
| 8 | Tenancy | 104 |
| 9 | Automation | 121 |
| 10 | Blueprints | 135 |
| 11 | Monitoring | 142 |
| 12 | Self-Service | 152 |
| 13 | Plans, Prices, and Costs | 158 |

## Använda quiz-appen

1. **Öppna**: Dubbelklicka på `quiz-app/index.html` (eller dra in i Chrome/Safari/Firefox).
2. **Konfigurera**:
   - Välj vilka moduler du vill öva på (alla markerade som default).
   - Välj svårighetsgrad (Lätt/Medel/Svår/Alla).
   - Välj antal frågor (10, 20, 40, 60 eller alla).
   - Välj läge: **Övning** (svar visas direkt) eller **Exam** (svar visas på slutet).
   - Välj frågetyper: Multiple choice, Sant/Falskt, Flera svar.
3. **Starta**: Klicka "Starta övning".
4. **Resultat**: Vid avslutning visas score, procent samt fullständig genomgång med rätt svar och förklaringar.
5. **Kör om**: "Kör om" med samma config eller "Ny konfiguration" för att ändra.

## Frågedatabasen

- **Totalt**: 149 frågor (omskrivna mot OCR från den lokala PDF-filen och utökade där täckningen var tunn)
- **Typer**: Multiple choice (single answer), Sant/Falskt, Multi-select
- **Svårighet**: Easy / Medium / Hard
- **Struktur per fråga**: ID, modul, modulnamn, typ, svårighet, fråga, alternativ, rätt svar, förklaring, sourcePage

### Lägga till egna frågor

Öppna `quiz-app/questions.js` och lägg till nya objekt i `QUESTIONS`-arrayen enligt mallen:

```javascript
{
  id: 150,                              // unikt id
  module: 7,                            // 1-13
  moduleName: "Provisioning Instances",
  type: "mc",                           // "mc" | "tf" | "multi"
  difficulty: "medium",                 // "easy" | "medium" | "hard"
  question: "Frågan här?",
  options: ["Alt 1", "Alt 2", "Alt 3", "Alt 4"],
  answer: 1,                            // index för rätt (eller [0,2] för multi)
  explanation: "Förklaring varför. (kurssidan X).",
  sourcePage: X
}
```

## Nyckelinnehåll per modul (sammanfattat)

### Modul 1: HPE Morpheus Introduction
- 5 pelare: **Build, Consume, Govern, Automate, Optimize**
- Bertram Labs startade utvecklingen 2010, Morpheus Data spun ut 2015
- 500,000+ workloads, 100+ certified partners
- **Arkitektur**: NGINX → Tomcat (app tier) + Guacamole (remote console) + RabbitMQ (messaging) + Elasticsearch (search/non-tx db) + MySQL (transactional db)
- 3 deployment scenarios: Single server, Single-site redundant (HA), Multi-site AWS multi-AZ

### Modul 2: Installing & Configuring
- Linux-paket (RPM/DEB), `morpheus-ctl` är primärt verktyg
- Kommandon: `start`, `stop`, `restart`, `reconfigure`, `status`, `tail`, `service-list`
- Konfig: `/etc/morpheus/morpheus.rb` (huvudfil), `/etc/morpheus/morpheus-secrets.json`
- Data: `/var/opt/morpheus/`, Loggar: `/var/log/morpheus/`
- Personas: Standard, Service Catalog, VDI

### Modul 3: Groups & Clouds
- **Groups** = logiska containrar + RBAC scope
- **Cloud types**: Private (vCenter, Nutanix, Hyper-V, OpenStack), Public (AWS, Azure, GCP, OCI), Container (K8s, Docker, OpenShift), Bare Metal
- Centraliserade **Credentials** (krypterade)
- **DNS** (Route 53, MS DNS, BIND, Infoblox) och **IPAM** (phpIPAM, Bluecat, Infoblox, MS IPAM, SolarWinds)

### Modul 4: Users & Roles
- **RBAC** med tre roltyper: User Role, Tenant Role, Account Role (legacy)
- Permission levels: Full / Read / None (eller Custom/Provision)
- Identity Sources: LDAP/AD, SAML 2.0, OAuth 2.0, JumpCloud

### Modul 5: Inputs & Option Lists
- Inputs = custom formulärfält (Text, Number, Password, Select, Checkbox, Code Editor, Textarea, Byte Size m.fl.)
- Option List-källor: Manual, REST, LDAP, Morpheus Object, Cypher
- Använd i Blueprints, Instance Types, Catalog Items

### Modul 6: Policies
- Många typer: Backup, Expire Date, Provision Approval, Max Cores/Memory/Storage, Hostname, Lifecycle Extension, Tag Compliance m.fl.
- Scope: User → Role → Group → Cloud → Global
- Hard vs Soft limits

### Modul 7: Provisioning Instances
- **Instance Type** → **Layout** (per cloud/version) → **Node Type** (virtual image + scripts)
- Wizard: Type → Group/Cloud → Plan → Network → Inputs → Config → Workflow → Review
- Lifecycle: Start, Stop, Restart, Resize, Reconfigure, Eject, Delete, Snapshot, Backup

### Modul 8: Tenancy
- Master Tenant + Sub-tenants (isolerade)
- Resurser kan delas: Clouds, Public Catalog Items, Roles, Plans
- **Resource Pools** = tenant-kvot per cloud (vCPU, RAM, storage, networks)

### Modul 9: Automation
- **Tasks**: Shell, PowerShell, Python, Ansible, Chef/Puppet/Salt, HTTP, JS/Groovy/jRuby, Terraform, ARM, CloudFormation, Helm
- **Workflows**: Provisioning (lifecycle-hookade) vs Operational (ad-hoc/schemalagda)
- **Cypher**: secrets-engine (mounts: `secret/`, `password/`, `tfvars/`, `key/`), Vault-integration
- Templating: `<%= cypher.read('secret/path') %>`, `<%= morpheus.instance.name %>`

### Modul 10: Blueprints
- Typer: **Morpheus**, **Terraform**, **CloudFormation**, **ARM**, **Helm**, **Kubernetes**
- Provisionerad blueprint = en **App** (med en eller flera tiers/instances + dependencies)

### Modul 11: Monitoring
- **Checks**: HTTP/HTTPS, TCP, ICMP, DNS, SMTP, Database, Script, Trace Route
- **Check Groups** med minimum healthy threshold
- **Monitoring Apps** = container för Check Groups
- **Incidents** (Critical/Warning/Info) → Open → Acknowledged → Resolved → Closed
- Notifications: Email, SMS, Webhook, ServiceNow, PagerDuty

### Modul 12: Self-Service
- **Service Catalog** med Catalog Items (Instance Type, Blueprint eller Workflow)
- Service Catalog Persona = förenklad UI
- Approvals via Provision Approval Policy
- Featured / Public-Private visibility

### Modul 13: Plans, Prices, & Costs
- **Service Plans** = sizing (vCPU/RAM/disk)
- **Price Sets** kopplas till Plans
- **Price Types**: Fixed, Compute, Memory, Cores, Storage, Software, Platform, Custom
- **Showback** (info) vs **Chargeback** (debitering)
- **Budgets** per Tenant/Group/User/Cloud med thresholds (50/75/90/100%)
- Daily aggregation, månadsvisa invoices

## Studieråd inför provet

1. **Kör appen i Exam-läge** mot alla moduler för en first-baseline.
2. **Identifiera svaga moduler** i resultatgenomgången - fokusera där.
3. **Repetera modulkapitlen** i kursmaterialet för moduler där du fick under 70%.
4. **Kör om i Övningsläge** med svårighet=Svår för att utmana dig själv.
5. **Slå upp obekanta begrepp** i HPE Morpheus officiella dokumentation: https://docs.morpheusdata.com/
6. **Praktisera lab-instruktionerna** om du har tillgång till en Morpheus appliance.

## Anteckning om datakällan

Frågebanken har skrivits om mot den lokala PDF-versionen MorpheusKursmaterial.pdf via OCR, med sourcePage och sidreferens i varje förklaring. Den tidigare Chrome-baserade extraktionen används inte längre som primär källa.

Frågorna är avsedda att ligga nära kursmaterialets formuleringar och modulstruktur. Fortsätt gärna lägga till egna frågor från labbar och praktiska moment efter hand.
