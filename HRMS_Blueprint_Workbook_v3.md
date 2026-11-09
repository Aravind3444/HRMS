|**HRMS Blueprint Workbook v3.0**|||||||
| - | :- | :- | :- | :- | :- | :- |
|Companion to the 'HRMS Product Blueprint v3.0 - Single Source of Truth' document. Generated 27 Oct 2026 from both uploaded packs.|||||||
||||||||
|How to use in Google Sheets: Drive > New > File upload > open with Google Sheets. Every tab has a header row and filters.|||||||
||||||||
|**Legend**|||||||
|Status: Confirmed | Merged | Resolved CF-xx | New (gap-fill, also an assumption) | Gated (feature-flagged until owner approval)|||||||
|Priority: P0 = Phase 1-3 must-have; P1 = Phase 4-6; P2 = Phase 7-8|||||||
|Permissions: C Create, R Read, U Update, D Delete, A Approve, X No access. Scope rules (SELF/TEAM/...) in blueprint s3.2; row-level scope still applies to every R.|||||||
|Source codes: Pack A = Documents.zip (legacy FINAL BASELINE); Pack B = HRMS\_Complete\_Updated\_Documentation\_v2.0.zip; numbers refer to file prefixes (e.g. Pack B 15 = Payroll & India Statutory spec)|||||||
|Estimates: story points S=3, M=5, L=8, XL=13. FE/BE days derived (assumption A-05). Sprint plan assumes 70 SP/sprint with ramp-up (A-04, A-38).|||||||
||||||||
|**Tabs**|||||||
|SUMMARY|||||||
|01-Req-Register|||||||
|02-Duplicates|||||||
|03-Conflicts|||||||
|04-Missing|||||||
|05-Open-Questions|||||||
|S01-Modules|||||||
|S02-Features|||||||
|S03-User-Stories|||||||
|S04-Frontend-Tasks|||||||
|S05-Backend-Tasks|||||||
|S06-Database-Tasks|||||||
|S07-API-Inventory|||||||
|S08-Roles|||||||
|S09-Permissions|||||||
|S10-Reports|||||||
|S11-Notifications|||||||
|S12-Integrations|||||||
|S13-Sprint-Plan|||||||
|DB-Tables|||||||
|RISK|||||||
|ASSUME|||||||
|DEPEND|||||||



|||||
| - | - | - | - |
|||||
|||||
|||||
|||||
|||||
|||||
|||||
|||||
|||||
|||||
|||||
|||||
|Counts (live formulas)||||
|Consolidated requirement register||||
|Duplicate requirements and canonical IDs||||
|Contradictions and rulings||||
|Gap-fill requirements added||||
|Open questions with owners and defaults||||
|Sheet 1 Module list||||
|Sheet 2 Features||||
|Sheet 3 User stories||||
|Sheet 4 Frontend tasks||||
|Sheet 5 Backend tasks||||
|Sheet 6 Database tasks||||
|Sheet 7 API inventory||||
|Sheet 8 Roles matrix||||
|Sheet 9 Permission matrix (full RBAC)||||
|Sheet 10 Reports||||
|Sheet 11 Notifications||||
|Sheet 12 Integrations||||
|Sheet 13 Sprint planning||||
|Data dictionary (tables)||||
|Risk register||||
|Assumption register||||
|Dependencies||||


||||||||
| - | - | - | - | - | - | - |
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||
||||||||

|**HRMS Blueprint - Summary (live counts)**|||||
| - | - | - | - | :- |
||||||
|Modules|31||**Phase**|**Story points**|
|Features|287||1|270|
|Features P0|113||2|211|
|Features P1|121||3|182|
|Features P2|53||4|188|
|Requirements in register|340||5|141|
|New (gap-fill) requirements|102||6|241|
|Resolved by conflict ruling|30||7|79|
|Gated requirements|16||8|255|
|Duplicates merged|22||||
|Conflicts ruled|42||||
|Conflicts needing PO confirmation|3||||
|Open questions|48||||
|User stories|287||||
|Frontend tasks|260||||
|Frontend effort (days)|842||||
|Backend tasks|601||||
|Backend effort (days)|1184\.5||||
|Database tasks|197||||
|Tables in data dictionary|191||||
|API endpoints|549||||
|Distinct permission keys (features)|238||||
|Reports|64||||
|Notification events|95||||
|Integrations|33||||
|Total story points|1567||||
|Planned sprints|29||||
|Planned end date|24-Dec-2027||||
|Risks|28||||
|Assumptions|140||||


|||
| - | :- |
|||
|**Features**||
|51||
|41||
|32||
|30||
|28||
|50||
|14||
|41||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||

|**Requirement Consolidation Register**|||
| - | :- | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*|||
||||
|**Requirement ID**|**Module**||
|GLOB-001|Global||
|GLOB-002|Global||
|GLOB-003|Global||
|GLOB-004|Global||
|GLOB-005|Global||
|GLOB-006|Global||
|GLOB-007|Global||
|GLOB-008|Global||
|GLOB-011|Global||
|GLOB-015|Global||
|GLOB-020|Global||
|GLOB-021|Global||
|GLOB-023|Global||
|GLOB-024|Global||
|GLOB-025|Global||
|GLOB-026|Global||
|GLOB-027|Global||
|GLOB-028|Global||
|GLOB-029|Global||
|GLOB-030|Global||
|TEN-001|M01 Tenant & Subscription Management||
|TEN-002|M01 Tenant & Subscription Management||
|TEN-003|M01 Tenant & Subscription Management||
|TEN-004|M01 Tenant & Subscription Management||
|TEN-005|M01 Tenant & Subscription Management||
|TEN-006|M01 Tenant & Subscription Management||
|TEN-007|M01 Tenant & Subscription Management||
|TEN-008|M01 Tenant & Subscription Management||
|TEN-009|M01 Tenant & Subscription Management||
|TEN-010|M01 Tenant & Subscription Management||
|TEN-011|M01 Tenant & Subscription Management||
|TEN-012|M01 Tenant & Subscription Management||
|TEN-013|M01 Tenant & Subscription Management||



|TEN-014|M01 Tenant & Subscription Management|
| - | - |
|TEN-015|M01 Tenant & Subscription Management|
|TEN-016|M01 Tenant & Subscription Management|
|IAM-001|M02 Identity, Authentication & Access Control|
|IAM-002|M02 Identity, Authentication & Access Control|
|IAM-003|M02 Identity, Authentication & Access Control|
|IAM-004|M02 Identity, Authentication & Access Control|
|IAM-005|M02 Identity, Authentication & Access Control|
|IAM-006|M02 Identity, Authentication & Access Control|
|IAM-007|M02 Identity, Authentication & Access Control|
|IAM-008|M02 Identity, Authentication & Access Control|
|IAM-009|M02 Identity, Authentication & Access Control|
|IAM-010|M02 Identity, Authentication & Access Control|
|IAM-011|M02 Identity, Authentication & Access Control|
|IAM-012|M02 Identity, Authentication & Access Control|
|IAM-013|M02 Identity, Authentication & Access Control|
|IAM-014|M02 Identity, Authentication & Access Control|
|IAM-015|M02 Identity, Authentication & Access Control|
|IAM-016|M02 Identity, Authentication & Access Control|
|IAM-017|M02 Identity, Authentication & Access Control|
|IAM-018|M02 Identity, Authentication & Access Control|
|IAM-019|M02 Identity, Authentication & Access Control|
|IAM-020|M02 Identity, Authentication & Access Control|
|IAM-021|M02 Identity, Authentication & Access Control|
|IAM-022|M02 Identity, Authentication & Access Control|
|IAM-023|M02 Identity, Authentication & Access Control|
|IAM-024|M02 Identity, Authentication & Access Control|
|IAM-025|M02 Identity, Authentication & Access Control|
|IAM-026|M02 Identity, Authentication & Access Control|



|ORG-001|M03 Organization Management|
| - | - |
|ORG-002|M03 Organization Management|
|ORG-003|M03 Organization Management|
|ORG-004|M03 Organization Management|
|ORG-005|M03 Organization Management|
|ORG-006|M03 Organization Management|
|ORG-007|M03 Organization Management|
|ORG-008|M03 Organization Management|
|ORG-009|M03 Organization Management|
|ORG-010|M03 Organization Management|
|ORG-011|M03 Organization Management|
|EMP-001|M04 Employee Management|
|EMP-002|M04 Employee Management|
|EMP-003|M04 Employee Management|
|EMP-004|M04 Employee Management|
|EMP-005|M04 Employee Management|
|EMP-006|M04 Employee Management|
|EMP-007|M04 Employee Management|
|EMP-008|M04 Employee Management|
|EMP-009|M04 Employee Management|
|EMP-010|M04 Employee Management|
|EMP-011|M04 Employee Management|
|EMP-012|M04 Employee Management|
|EMP-013|M04 Employee Management|
|EMP-014|M04 Employee Management|
|EMP-015|M04 Employee Management|
|EMP-016|M04 Employee Management|
|ESS-001|M05 Employee Self-Service|
|ESS-002|M05 Employee Self-Service|
|ESS-003|M05 Employee Self-Service|
|ESS-004|M05 Employee Self-Service|
|ESS-005|M05 Employee Self-Service|
|ESS-006|M05 Employee Self-Service|
|ESS-007|M05 Employee Self-Service|
|DOC-001|M06 Documents Management|
|DOC-002|M06 Documents Management|
|DOC-003|M06 Documents Management|
|DOC-004|M06 Documents Management|
|DOC-005|M06 Documents Management|
|DOC-006|M06 Documents Management|
|DOC-007|M06 Documents Management|
|DOC-008|M06 Documents Management|



|DOC-009|M06 Documents Management|
| - | - |
|DOC-010|M06 Documents Management|
|REC-001|M07 Recruitment (ATS)|
|REC-002|M07 Recruitment (ATS)|
|REC-003|M07 Recruitment (ATS)|
|REC-004|M07 Recruitment (ATS)|
|REC-005|M07 Recruitment (ATS)|
|REC-006|M07 Recruitment (ATS)|
|REC-007|M07 Recruitment (ATS)|
|REC-008|M07 Recruitment (ATS)|
|REC-009|M07 Recruitment (ATS)|
|REC-010|M07 Recruitment (ATS)|
|REC-011|M07 Recruitment (ATS)|
|REC-012|M07 Recruitment (ATS)|
|REC-013|M07 Recruitment (ATS)|
|REC-014|M07 Recruitment (ATS)|
|REC-015|M07 Recruitment (ATS)|
|ONB-001|M08 Onboarding & Pre-joining|
|ONB-002|M08 Onboarding & Pre-joining|
|ONB-003|M08 Onboarding & Pre-joining|
|ONB-004|M08 Onboarding & Pre-joining|
|ONB-005|M08 Onboarding & Pre-joining|
|ONB-006|M08 Onboarding & Pre-joining|
|OFB-001|M09 Offboarding & Exit|
|OFB-002|M09 Offboarding & Exit|
|OFB-003|M09 Offboarding & Exit|
|OFB-004|M09 Offboarding & Exit|
|OFB-005|M09 Offboarding & Exit|
|OFB-006|M09 Offboarding & Exit|
|OFB-007|M09 Offboarding & Exit|
|OFB-008|M09 Offboarding & Exit|
|ATT-001|M10 Attendance & Time|
|ATT-002|M10 Attendance & Time|
|ATT-003|M10 Attendance & Time|
|ATT-004|M10 Attendance & Time|
|ATT-005|M10 Attendance & Time|
|ATT-006|M10 Attendance & Time|
|ATT-007|M10 Attendance & Time|
|ATT-008|M10 Attendance & Time|
|ATT-009|M10 Attendance & Time|
|ATT-010|M10 Attendance & Time|
|ATT-011|M10 Attendance & Time|
|ATT-012|M10 Attendance & Time|
|ATT-013|M10 Attendance & Time|



|ATT-014|M10 Attendance & Time|
| - | - |
|ATT-015|M10 Attendance & Time|
|ATT-016|M10 Attendance & Time|
|ATT-017|M10 Attendance & Time|
|ATT-018|M10 Attendance & Time|
|SFT-001|M11 Shift & Roster|
|SFT-002|M11 Shift & Roster|
|SFT-003|M11 Shift & Roster|
|SFT-004|M11 Shift & Roster|
|SFT-005|M11 Shift & Roster|
|LV-001|M12 Leave Management|
|LV-002|M12 Leave Management|
|LV-003|M12 Leave Management|
|LV-004|M12 Leave Management|
|LV-005|M12 Leave Management|
|LV-006|M12 Leave Management|
|LV-007|M12 Leave Management|
|LV-008|M12 Leave Management|
|LV-009|M12 Leave Management|
|LV-010|M12 Leave Management|
|LV-011|M12 Leave Management|
|LV-012|M12 Leave Management|
|LV-013|M12 Leave Management|
|LV-014|M12 Leave Management|
|LV-015|M12 Leave Management|
|PAY-001|M13 Payroll|
|PAY-002|M13 Payroll|
|PAY-003|M13 Payroll|
|PAY-004|M13 Payroll|
|PAY-005|M13 Payroll|
|PAY-006|M13 Payroll|
|PAY-007|M13 Payroll|
|PAY-008|M13 Payroll|
|PAY-009|M13 Payroll|
|PAY-010|M13 Payroll|
|PAY-011|M13 Payroll|
|PAY-012|M13 Payroll|
|PAY-013|M13 Payroll|
|PAY-014|M13 Payroll|
|PAY-015|M13 Payroll|
|PAY-016|M13 Payroll|
|PAY-017|M13 Payroll|
|PAY-018|M13 Payroll|
|PAY-019|M13 Payroll|
|STA-001|M14 Statutory Compliance & Tax (India)|
|STA-002|M14 Statutory Compliance & Tax (India)|



|STA-003|M14 Statutory Compliance & Tax (India)|
| - | - |
|STA-004|M14 Statutory Compliance & Tax (India)|
|STA-005|M14 Statutory Compliance & Tax (India)|
|STA-006|M14 Statutory Compliance & Tax (India)|
|STA-007|M14 Statutory Compliance & Tax (India)|
|STA-008|M14 Statutory Compliance & Tax (India)|
|STA-009|M14 Statutory Compliance & Tax (India)|
|STA-010|M14 Statutory Compliance & Tax (India)|
|STA-011|M14 Statutory Compliance & Tax (India)|
|PRF-001|M15 Performance Management|
|PRF-002|M15 Performance Management|
|PRF-003|M15 Performance Management|
|PRF-004|M15 Performance Management|
|PRF-005|M15 Performance Management|
|PRF-006|M15 Performance Management|
|PRF-007|M15 Performance Management|
|PRF-008|M15 Performance Management|
|PRF-009|M15 Performance Management|
|PRF-010|M15 Performance Management|
|PRF-011|M15 Performance Management|
|LMS-001|M16 Learning Management|
|LMS-002|M16 Learning Management|
|LMS-003|M16 Learning Management|
|LMS-004|M16 Learning Management|
|LMS-005|M16 Learning Management|
|LMS-006|M16 Learning Management|
|LMS-007|M16 Learning Management|
|AST-001|M17 Asset Management|
|AST-002|M17 Asset Management|
|AST-003|M17 Asset Management|
|AST-004|M17 Asset Management|
|AST-005|M17 Asset Management|
|AST-006|M17 Asset Management|
|HLP-001|M18 Helpdesk|
|HLP-002|M18 Helpdesk|
|HLP-003|M18 Helpdesk|
|HLP-004|M18 Helpdesk|
|HLP-005|M18 Helpdesk|
|HLP-006|M18 Helpdesk|
|EXP-001|M19 Expense Management|
|EXP-002|M19 Expense Management|
|EXP-003|M19 Expense Management|



|EXP-004|M19 Expense Management|
| - | - |
|EXP-005|M19 Expense Management|
|EXP-006|M19 Expense Management|
|TRV-001|M20 Travel Management|
|TRV-002|M20 Travel Management|
|TRV-003|M20 Travel Management|
|TRV-004|M20 Travel Management|
|ENG-001|M21 Announcements, Surveys & Engagement|
|ENG-002|M21 Announcements, Surveys & Engagement|
|ENG-003|M21 Announcements, Surveys & Engagement|
|ENG-004|M21 Announcements, Surveys & Engagement|
|ENG-005|M21 Announcements, Surveys & Engagement|
|RPT-001|M22 Reports & Dashboards|
|RPT-002|M22 Reports & Dashboards|
|RPT-003|M22 Reports & Dashboards|
|RPT-004|M22 Reports & Dashboards|
|RPT-005|M22 Reports & Dashboards|
|RPT-006|M22 Reports & Dashboards|
|RPT-007|M22 Reports & Dashboards|
|AUD-001|M23 Audit & Compliance|
|AUD-002|M23 Audit & Compliance|
|AUD-003|M23 Audit & Compliance|
|AUD-004|M23 Audit & Compliance|
|AUD-005|M23 Audit & Compliance|
|AUD-006|M23 Audit & Compliance|
|AUD-007|M23 Audit & Compliance|
|AUD-008|M23 Audit & Compliance|
|NTF-001|M24 Notification System|
|NTF-002|M24 Notification System|
|NTF-003|M24 Notification System|
|NTF-004|M24 Notification System|
|NTF-005|M24 Notification System|
|NTF-006|M24 Notification System|
|NTF-007|M24 Notification System|
|NTF-008|M24 Notification System|
|WF-001|M25 Workflow Engine|
|WF-002|M25 Workflow Engine|
|WF-003|M25 Workflow Engine|
|WF-004|M25 Workflow Engine|
|WF-005|M25 Workflow Engine|
|WF-006|M25 Workflow Engine|
|WF-007|M25 Workflow Engine|
|WF-008|M25 Workflow Engine|
|INT-001|M26 Integrations & API Platform|
|INT-002|M26 Integrations & API Platform|



|INT-003|M26 Integrations & API Platform|
| - | - |
|INT-004|M26 Integrations & API Platform|
|INT-005|M26 Integrations & API Platform|
|INT-006|M26 Integrations & API Platform|
|MOB-001|M27 Mobile App|
|MOB-002|M27 Mobile App|
|MOB-003|M27 Mobile App|
|MOB-004|M27 Mobile App|
|MOB-005|M27 Mobile App|
|SEC-001|M28 Security & Data Protection|
|SEC-002|M28 Security & Data Protection|
|SEC-003|M28 Security & Data Protection|
|SEC-004|M28 Security & Data Protection|
|SEC-005|M28 Security & Data Protection|
|SEC-006|M28 Security & Data Protection|
|SEC-007|M28 Security & Data Protection|
|IMP-001|M29 Data Import / Export|
|IMP-002|M29 Data Import / Export|
|IMP-003|M29 Data Import / Export|
|FIN-001|M30 Finance Core (optional)|
|FIN-002|M30 Finance Core (optional)|
|FIN-003|M30 Finance Core (optional)|
|FIN-004|M30 Finance Core (optional)|
|AI-001|M31 AI HR Assistant|
|AI-002|M31 AI HR Assistant|
|AI-003|M31 AI HR Assistant|
|NFR-PERF-001|NFR|
|NFR-PERF-002|NFR|
|NFR-PERF-003|NFR|
|NFR-PERF-004|NFR|
|NFR-PERF-005|NFR|
|NFR-PERF-006|NFR|
|NFR-SCL-001|NFR|
|NFR-SCL-002|NFR|
|NFR-AVL-001|NFR|
|NFR-AVL-002|NFR|
|NFR-AVL-003|NFR|
|NFR-SEC-001|NFR|
|NFR-SEC-002|NFR|



|NFR-SEC-003|NFR|
| - | - |
|NFR-SEC-004|NFR|
|NFR-SEC-005|NFR|
|NFR-PRIV-001|NFR|
|NFR-A11Y-001|NFR|
|NFR-UX-001|NFR|
|NFR-UX-002|NFR|
|NFR-I18N-001|NFR|
|NFR-I18N-002|NFR|
|NFR-TZ-001|NFR|
|NFR-MNY-001|NFR|
|NFR-OBS-001|NFR|
|NFR-AUD-001|NFR|
|NFR-DATA-001|NFR|
|NFR-MNT-001|NFR|
|NFR-MNT-002|NFR|
|NFR-MIG-001|NFR|
|NFR-COMP-001|NFR|
|NFR-MOB-001|NFR|
|NFR-SUP-001|NFR|



||
| - |
||
||
|**Requirement**|
|Tenant context derived server-side from session, membership and live tenant status|
|Soft delete only where history matters; never for ledgers, payroll, audit, outbox|
|Consistent response envelope; cursor pagination; sort/filter on lists|
|Audit events for sensitive create/update/delete/approve|
|No plaintext secrets or passwords stored or logged|
|Frontend never trusted for authorization or tenant identity|
|Binaries in S3; metadata in Postgres|
|User and Employee are separate entities|
|Outbox written in the same transaction as business change|
|First customer uses the same SaaS path as every tenant|
|Composite tenant-safe FKs on tenant-scoped relationships|
|Audit includes request\_id, session\_id, source, reason; PII masked|
|Money as NUMERIC with explicit currency; no floats|
|Timestamps UTC timestamptz; business dates as date + timezone|
|Effective-dated records use half-open [from, to)|
|Retryable mutations require Idempotency-Key; same key + different payload = 409|
|Optimistic versioning on approvals, balances, imports, posting|
|Gated features stay disabled until owner approval recorded|
|OpenAPI generated from DTOs and version-controlled|
|Every screen has loading, empty, error, denied, conflict states|
|Visitor creates tenant, default legal entity, owner user, membership and pending subscription in one transaction|
|Signup email verified with single-use token before tenant review|
|SA approves or rejects pending tenants; auto-approve mode configurable|
|Lifecycle transitions with reason, audit and owner notification|
|Seed system roles, leave types, workflows, templates, holiday template on activation; idempotent|
|Seven-step wizard: profile, entity, locations, departments, work policy, leave, invite users; tracks setup status|
|Locale, timezone, week start, branding, security policy (MFA, session timeout, password)|
|Owner requests full export (JSON/CSV/files ZIP); link expires 24 h|
|Platform defines plans, versions, modules, seat price, limits|
|pending to trial (14 d at activation) to active/past\_due/suspended/cancelled/expired|
|Module and limit checks per request from plan entitlements|
|Block new active employees beyond seat limit with upgrade prompt|
|Generate invoices from subscription, record payments, allocate, credit notes; immutable numbering|



|Razorpay/Stripe autopay, retries, past\_due handling, suspension after grace|
| - |
|Trial ending 7/3/1 days, payment due, suspended|
|Per-tenant and global flags for gated features|
|Login with lockout, tenant status check, membership resolution|
|Revoke current session|
|HttpOnly Secure SameSite=Lax cookies; 15 min access, 30 d refresh, rotate, family revoke on reuse; CSRF|
|Email token 30 min single-use; revokes all sessions|
|Authenticated change with current password; breached-password check|
|List and revoke own sessions; admin revoke user sessions|
|Enroll, verify, recovery codes, mandatory for privileged roles, step-up for restricted actions|
|Per-tenant SSO with Google, Microsoft Entra, Okta; enforce-SSO toggle|
|SCIM 2.0 users and groups endpoints|
|Passwordless sign-in and MFA via passkeys|
|Invite email with role; token 72 h single-use; role ownership check|
|Set password, verify, activate membership|
|Activate, suspend, revoke membership; revoke sessions|
|Email globally unique; max memberships per user configurable (default 1)|
|Users with several memberships pick tenant; caches cleared on switch|
|Optional 1:1 link membership to employee within tenant|
|Global platform-owned catalog of permission keys|
|17 read-only templates seeded|
|Create/clone roles from catalog only|
|Grant role to membership with scope type/IDs and optional validity window|
|Grantor cannot grant beyond own permissions; no self-grants; platform roles unassignable|
|SELF, TEAM, TEAM\_TREE, DEPARTMENT, LOCATION, LEGAL\_ENTITY, ORGANIZATION, ASSIGNED|
|Union permissions, broader scope wins, no DENY|
|Public/Internal/Sensitive/Restricted serialisation and reveal|
|Time-limited, approved, audited platform access to a tenant|
|Periodic list of roles, grants, restricted readers for review|



|CRUD legal entities with statutory registrations (PAN, TAN, GSTIN, PF, ESI, PT, LWF)|
| - |
|Encrypted registration numbers per entity and state|
|Address, state, timezone, geofence radius|
|Optional grouping of locations|
|Hierarchical departments with head|
|Job titles|
|Grade ladder with optional pay range|
|Cost centers with owner; split allocation on assignment|
|Full-time, part-time, contract, intern, consultant|
|Interactive chart from current assignments|
|Block deactivation when active employees reference master; require reassignment|
|Create with mandatory fields; prehire status; number series|
|Tabs: personal, contact, job, documents, attendance, leave, payroll, performance, audit|
|Server-side filters, sort, cursor pagination, saved views|
|Entity, location, dept, designation, grade, manager, cost center with history|
|Confirm, transfer, promote, redesignate, long leave, suspend, rehire with reason|
|Nightly job applies future assignments and status changes|
|Reject cyclic reporting lines|
|prehire/active/on\_probation/on\_notice/long\_leave/inactive/terminated transitions|
|Sub-records on profile|
|Encrypted account, IFSC, primary flag, change approval|
|PAN, Aadhaar reference (last4), UAN, ESIC IP, passport|
|Probation end date, confirmation task 15 days before|
|Public fields, search, hide personal mobile|
|Export with scope and field-class rules|
|Archive records needed for history|
|Opt-in celebrations|
|View own profile; edit allowed fields|
|Approval for restricted fields (name, bank, PAN)|
|All request types with status timeline|
|Punch widget, balances, tasks, announcements, holidays|
|Manager sees direct reports, presence today, pending items|
|Employee acknowledges privacy notice at first login|
|Employee downloads own data (DPDP access)|
|Create file row, presign S3 PUT, complete upload|
|ClamAV scan; quarantined/active/infected|
|Authorise parent record then 5-min signed URL; audit restricted|
|Mandatory, expiry, visibility, retention per type|
|Attach, verify, reject, version employee documents|
|Reminders 30/15/7/0 days; flags|
|Publish versioned policies to audiences; track acknowledgement|
|Merge-field templates; generate PDF letters (offer, appointment, confirmation, increment, relieving, experience)|



|Send letters for e-sign (Leegality/DocuSign)|
| - |
|Folders, access by audience|
|Raise requisition with headcount, budget, justification; approval workflow|
|Job from approved requisition; description, skills, publish to careers page|
|Public branded careers page; apply form with consent|
|Push jobs to LinkedIn, Naukri, Indeed via integration|
|Employees refer candidates; referral status and bonus eligibility|
|Profiles, resumes, tags, dedupe on email/mobile, merge|
|Stage templates per job; drag-drop stage moves with reason|
|Extract fields from PDF/DOCX resumes|
|Consent capture; anonymise after retention|
|Schedule rounds, panel, calendar invites, reschedule|
|Structured scorecard; interviewer sees others' feedback only after submitting|
|Draft offer from grade band; approval if out of band; letter; send|
|Accept/decline offer via tokenised link|
|Accepted offer creates prehire employee and onboarding case|
|Funnel, time-to-hire, source effectiveness|
|Task templates by entity/department/type/location with offsets|
|Case per joiner; tasks to HR/IT/manager/finance/employee; progress|
|Token portal for personal data, bank, PAN, education, documents, Form 11|
|HR verifies or rejects submitted documents|
|Joined activates employee and invite; no-show closes case|
|Assign buddy; induction schedule; 30/60/90-day check-ins|
|Employee resigns with reason and proposed last day; withdrawal|
|Manager/HR accept, adjust last day, waive or recover notice|
|HR initiates termination with category and document|
|Department clearances (IT, assets, finance, admin, manager)|
|Questionnaire; HR-only visibility|
|Job revokes sessions/login at last-day end|
|Generate after F&F|
|Restricted flag with reason|
|CHECK\_IN, BREAK\_START, BREAK\_END, CHECK\_OUT with transition rules and idempotency|
|Geofence check, accuracy, block/flag per policy|
|Photo captured with punch; 90-day retention|
|Web punch only from allowed IP ranges|
|Register devices; pull/push sync; map device user IDs; exceptions queue|
|Shared tablet with PIN/QR|
|Queue with device time and idempotency; drift flag|
|Upsert + FOR UPDATE per employee/day; minutes, status from versioned policy|
|Work date from shift timezone; overnight attaches to start date|
|Grace, late mark, half/full day, rounding, capture modes, geofence action|
|Mark absent/missing punch, auto-checkout per policy|
|My attendance calendar; team; org muster|
|Request corrected punches within window/limits; approval; correction punches|



|Mark days without punches on approval|
| - |
|OT minutes beyond threshold; approval; to payroll or comp-off|
|Lock per entity per period; unlock with reason|
|Daily/weekly hours by project for contractors|
|Muster roll, monthly register, late/early, absenteeism, OT, geo map|
|Start/end, breaks, thresholds, overnight, punch window|
|Fixed, alternate Saturdays, rotational|
|Grid roster per employee per date; bulk assign; publish|
|Peer swap with both + manager approval; rest-gap rule|
|Coverage by location/hour|
|Paid/unpaid, balance-tracked, unit, colour|
|Eligibility, accrual, caps, carry-forward, encashment, sandwich, notice, docs, half-day|
|Per entity + location; mandatory and restricted holidays|
|Append-only ledger; locked balance projection|
|Dates, half-day, reason, attachment; reserve on submit|
|Convert or release reservation; attendance sync|
|Cancel pending (release) or approved (approval + reversal)|
|HR applies for an employee|
|Monthly/quarterly/annual accrual with pro-rata|
|Carry-forward, lapse, encashment entries; idempotent|
|Credit from OT/holiday work; expiry|
|Exclude holidays/weekly-offs unless sandwich rule|
|Calendar of team leaves and holidays|
|Balance register, availed, liability, LOP for payroll|
|Import balances at go-live as opening ledger entries|
|Category, method, proration, taxable/PF/ESI flags, rounding, GL mapping|
|Sandboxed expression language with versioning and tests|
|CTC templates by grade/entity|
|Effective-dated CTC; revisions create arrears|
|Annual increments via import with approval|
|Frequency, cut-off, pay date per entity|
|Variable pay, one-time earnings/deductions, LOP review|
|Snapshot inputs; chunked calculation; line explanations|
|Compare to previous month; flag >20% changes|
|Submit, approve (not by calculator), lock immutable|
|Bank templates; payment status from confirmation|
|Password-protected PDF from locked snapshot; publish; YTD|
|Bonus, arrears, corrections, F&F runs|
|Principal, EMI, interest, schedule, foreclosure|
|Itemised F&F with sources and approvals|
|Versioned export templates; idempotent import of provider results; reconciliation|
|Payroll and reimbursement journals to Tally XML, Zoho Books, CSV|
|Register, salary sheet, bank advice, CTC, arrears, loans|
|Compare native output with trusted payroll for N periods|
|Versioned rules with source, effective dates, approver, hash|
|Wage base, ceilings, opt-out, contributions, ECR file|



|Eligibility per contribution period, contributions, file|
| - |
|State slabs from work location; monthly deduction; challan data|
|State LWF contributions|
|Regime choice, investment declarations by section, HRA, previous employer|
|Upload proofs; payroll verifies; variance applied|
|Projected annual income, monthly TDS, higher rate without PAN|
|Quarterly 24Q data; Form 16 Part B generation and publish|
|Eligibility and computation registers|
|Due dates for PF, ESI, PT, TDS with reminders|
|Cycle config: eligibility snapshot, phases, scale, weightage|
|SMART goals with weightage 100%, cascading, progress|
|KPIs by designation/department|
|Notes, agreed actions|
|Forms, ratings, comments, submit|
|Request feedback; anonymity threshold|
|Adjust ratings with reason; distribution view; 9-box|
|Release ratings; employee acknowledges or disagrees|
|Recommendations handed to compensation after HR approval|
|Performance improvement plans with check-ins and outcome|
|Close locks; HR reopen with reason|
|Courses: video, doc, SCORM, classroom, external|
|Assign manually or by rule (new joiner, department)|
|My learning, progress, completion|
|Question bank, pass mark, attempts|
|Classroom sessions, capacity, attendance|
|Record certificates; reminders 60/30/7|
|Request external training; approval; budget tracking|
|Categories, models, attributes|
|Items with tag, serial, purchase, warranty, depreciation fields|
|Employee requests asset; approval|
|Allocate with condition/photos; employee acknowledges|
|Return inspection; damage recovery; status changes|
|Register, by employee, unreturned on exit, warranty expiry|
|Categories, groups, SLA per priority, business hours, confidentiality|
|Employee raises; status; attachments; reopen|
|Queue, assign, internal notes, canned responses|
|Pause on awaiting employee; escalate on breach|
|Articles suggested while typing|
|Satisfaction rating; volume, SLA %, backlog|
|Limits by category x grade x location; receipt thresholds; per-diem; mileage|
|Lines, receipts, currency, duplicate detection|
|Manager approve; finance audit; line-level decisions|



|Request, approve, pay, settle against claims|
| - |
|Via payroll component or bank file; idempotent paid status|
|By status, category, policy violations, outstanding advances|
|Class, hotel caps, advance booking by grade|
|Trip with legs, stay, estimate, advance|
|Upload confirmations and tickets|
|Expenses linked to trip; advance auto-settled|
|Targeted, scheduled, pinned; mandatory read receipts|
|Quick single-question polls|
|Question types; anonymity modes; threshold results|
|Peer kudos tied to values; optional points|
|Likes, comments, report, hide|
|Employee, manager, HR, payroll, owner home dashboards|
|Catalog of 64 reports with filters and saved views|
|CSV/XLSX/PDF exports, background, expiring links, audited|
|Email link on schedule|
|Point-in-time headcount, joiners/leavers, attrition %|
|Pick fields, filters, grouping within scope|
|Nightly CDC to analytics store; dashboards|
|Append-only events in business transaction with masked diffs|
|Filter by actor, entity, action, date; scope applies|
|Export evidence packs|
|Log reveals and restricted downloads|
|Per-class retention jobs; legal hold overrides purge|
|Access, correction, erasure, grievance with due dates|
|Per-user login events and devices|
|Confidential case register for ICC|
|Same-transaction outbox; lease, backoff, DLQ, replay|
|Bell, read/unread, deep links|
|Resend primary, SES fallback; bounces|
|System + tenant overrides; security-critical locked; sanitised|
|Mute non-mandatory categories; quiet hours|
|DLT-approved templates via MSG91/Gupshup|
|FCM/APNs for mobile|
|Pending approvals and team-on-leave digests|
|Steps, approver types, modes, conditions; publish versions|
|Instances pin version; resolve approvers; tasks; callbacks|
|Unified inbox with filters, bulk approve, reason|
|Escalate when approver is requester; fallback for vacant manager|
|Per-step SLA; reminders; escalate/auto-action|
|Delegate approvals for date range|
|Signed single-use links re-checking permissions|
|Drag-drop builder UI over WF-001|
|Event subscriptions, HMAC signing, retries, auto-disable|
|Scoped, expiring, hashed keys; rate limits|



|Google/Microsoft calendar for interviews and leave|
| - |
|Tally, Zoho Books, QuickBooks exports/push|
|Notifications and approvals in chat|
|Status, last sync, failure alerts|
|OAuth PKCE, secure storage, biometric unlock, remote logout|
|Home, punch, leave, payslips, directory, announcements|
|Approval inbox with push|
|Receipt camera, OCR, draft claims|
|Root/jailbreak and mock-location detection; no unencrypted caching|
|Server-derived context; composite FKs; RLS; 404 masking; automated suite on every PR|
|Envelope encryption per tenant data key; HMAC index|
|Per-IP/user/tenant limits; WAF rules|
|Helmet, CSP nonces, CSRF double-submit|
|Secrets Manager, KMS, rotation|
|SAST, dependency, container, secret scans|
|Annual third-party test before first enterprise go-live|
|Upload, scan, stage, validate, preview, commit, results|
|Employees + assignments + contacts + bank|
|Leave balances, punches, holidays, compensation, assets, YTD payroll|
|Books per entity; chart of accounts tree|
|Open/closing/closed; checklist; reopen with approval|
|Draft, submit, approve, post, reverse; balanced|
|Trial balance, GL, P&L, balance sheet|
|Answers from caller-accessible policies with citations|
|Summaries for recruiters|
|Draft review comments from goals/check-ins|
|CRUD/list p95 < 500 ms|
|Punch p95 < 300 ms|
|Leave approve p95 < 700 ms|
|Reports p95 < 2 s|
|Payroll 500 employees <= 5 min|
|Web LCP < 2.5 s|
|Design load 500 tenants / 100k employees|
|25k employees per tenant|
|Availability >= 99.5%|
|RPO 15 min / RTO 4 h|
|Graceful degradation|
|TLS 1.2+, HSTS|
|Encryption at rest + field level|



|Zero cross-tenant reads|
| - |
|OWASP ASVS L2|
|No open critical/high at release|
|DPDP Act 2023 controls|
|WCAG 2.2 AA|
|Responsive from 360 px|
|Standard UI states|
|Externalised strings|
|Locale formats|
|UTC storage|
|Decimal money|
|Logs, traces, metrics, Sentry|
|100% sensitive audit coverage|
|Configurable retention|
|Coverage >= 80% domain|
|Contract tests|
|Expand/contract migrations|
|Browser support|
|Crash-free >= 99.5%|
|Correlation IDs|



||||
| - | - | - |
||||
||||
|**Feature name**|**Source Document**|**Priority**|
|Global rule|Pack A PRD GLOPack B 001; Pack B 06|P0|
|Global rule|Pack A PRD GLOPack B 002; Pack B 06|P0|
|Global rule|Pack A PRD GLOPack B 003; Pack B 03|P0|
|Global rule|Pack A PRD GLOPack B 004|P0|
|Global rule|Pack A PRD GLOPack B 005; Pack B 09|P0|
|Global rule|Pack A PRD GLOPack B 006; Pack B 01|P0|
|Global rule|Pack A PRD GLOPack B 007|P0|
|Global rule|Pack A PRD GLOPack B 008; Pack B 06|P0|
|Global rule|Pack A PRD GLOPack B 011; Pack B 03|P0|
|Global rule|Pack A PRD GLOPack B 015|P0|
|Global rule|Pack A PRD GLOPack B 020; Pack B 06|P0|
|Global rule|Pack A PRD GLOPack B 021|P0|
|Global rule|Pack B 01 s6; Pack B 14|P0|
|Global rule|Pack B 01 s6|P0|
|Global rule|Pack B 01 s7|P0|
|Global rule|Pack B 01 s7; Pack B 17|P0|
|Global rule|Pack B 03 s4|P0|
|Global rule|Pack B 04; Pack B 05|P0|
|Global rule|Pack A TECH 5; Pack B 03|P0|
|Global rule|Pack A ARCH 18; Pack B 18|P0|
|Self-signup|Pack A PRD:AUTH-SIGNUP-001; Pack B 01|P0|
|Email verification at signup|Pack A PRD:AUTH-SIGNUP-002|P0|
|Platform tenant review & approval|Pack A PRD:AUTH-SIGNUP-003, ORG-LIFE-001|P0|
|Suspend / reactivate / cancel / archive tenant|Pack A PRD:ORG-LIFE-002; Pack B 11|P0|
|Default seeding on activation|Pack A ARCH:4.2|P0|
|Setup wizard|Pack A PRD:ORG-SET-003|P0|
|Tenant settings|Pack A PRD:ORG-SET-001,ORG-SET-002|P0|
|Tenant data export on exit|Gap-fill (industry practice)|P1|
|Plans and plan versions|Pack A DB:plans; Pack B 16|P0|
|Subscription lifecycle|Pack A ERD:subscriptions; Pack B 11|P0|
|Entitlement enforcement|Pack A ARCH:16; Pack B 16|P0|
|Seat limit enforcement|Pack A PRD:ORG-BILL-002|P1|
|Invoices and payments (manual-first)|Pack B 01 R3; Pack B 14|P2|



|Payment gateway & dunning|Pack A PRD:ORG-BILL-003|P2|
| - | - | - |
|Trial and billing notifications|Pack A PRD:M01 notifications|P0|
|Platform feature flags|Pack B 10 feature flags|P0|
|Email/password login|Pack A PRD:AUTH-LOGIN-001|P0|
|Logout|Pack A PRD:AUTH-LOGIN-002|P0|
|Cookie sessions with rotation|Pack A PRD:AUTH-SESS-001; Pack B 09|P0|
|Password reset|Pack A PRD:AUTH-PASS-002|P0|
|Change password|Gap-fill (industry practice)|P0|
|Session management|Pack A PRD:AUTH-SESS-002|P0|
|MFA (TOTP + recovery codes)|Pack A PRD:AUTH-MFPack A 001; Pack B 04|P0|
|SSO (SAML/OIDC)|Pack A PRD:INT-SSO-001|P1|
|SCIM provisioning|Gap-fill (industry practice)|P2|
|Passkeys (WebAuthn)|Gap-fill (industry practice)|P2|
|Invite user|Pack A PRD:AUTH-USER-001; Pack B 02|P0|
|Accept invitation|Pack B 11 invitation|P0|
|Membership lifecycle|Pack A PRD:AUTH-USER-002; Pack B 02|P0|
|Global identity, membership cap|Pack A PRD:AUTH-USER-004/005; Pack B 06|P0|
|Tenant switcher|Pack B 18|P1|
|Link user to employee|Pack A PRD:AUTH-USER-003|P0|
|Permission catalog|Pack A PRD:RBAC-PERM-001|P0|
|System role templates|Pack A PRD:RBAC-ROLE-001|P0|
|Custom roles|Pack A PRD:RBAC-ROLE-002/003|P0|
|Role grants with scope and validity|Pack A PRD:RBAC-USER-001; Pack B 03 RoleGrant|P0|
|Permission ceiling & no self-elevation|Pack A PRD:RBAC-SPack A 001,RBAC-OWN-001; Pack B 09|P0|
|Scope resolver|Pack A PRD:RBAC-SCOPE-001; Pack B 09|P0|
|Multi-role union|Pack A PRD:RBAC-MULTI-001|P0|
|Field-level classification|Pack A PRD:EMP data classification; Pack B 09|P0|
|Break-glass access|Pack A PRD:AUD-BG-001; Pack B 09|P1|
|Access review report|Gap-fill (industry practice)|P1|



|Legal entities|Pack B 06 legal\_entities|P0|
| - | - | - |
|Statutory registrations|Gap-fill (industry practice)|P1|
|Locations with geofence|Pack A PRD:ORG-LOC-001|P0|
|Branches|Gap-fill (industry practice)|P1|
|Departments tree|Pack A PRD:ORG-DEPT-001|P0|
|Designations|Pack A PRD:ORG-DESG-001|P0|
|Grades/bands|Gap-fill (industry practice)|P0|
|Cost centers|Gap-fill (industry practice)|P1|
|Employment types|Pack A PRD:ORG-ETYPE-001|P0|
|Org chart|Gap-fill (industry practice)|P0|
|Master deactivation guard|Pack A PRD:ORG-DEPT-001 AC|P0|
|Create employee|Pack A PRD:EMP-CORE-001; Pack B 08|P0|
|Employee profile view/edit|Pack A PRD:EMP-CORE-002; Pack B 18|P0|
|Employee list & search|Pack A PRD:EMP-DIR-001; Pack B 18|P0|
|Effective-dated assignments|Pack A PRD:EMP-JOPack B 001; Pack B 08|P0|
|Lifecycle events|Pack B 02 EmploymentEvent|P0|
|Future-dated changes job|Gap-fill (industry practice)|P0|
|Manager cycle prevention|Gap-fill (industry practice)|P0|
|Status machine|Pack A ERD:employees; Pack B 11|P0|
|Personal, family, education, experience|Pack A PRD:EMP-ADDR-001,EMP-EMER-001|P0|
|Bank accounts (restricted)|Pack A PRD:EMP-BANK-001|P0|
|Statutory IDs (restricted)|Gap-fill (industry practice)|P0|
|Probation tracking|Gap-fill (industry practice)|P1|
|Employee directory|Pack A PRD:EMP-DIR-001|P0|
|Employee export|Pack A PRD:EMP-CORE-006|P0|
|Archive/soft-delete employee|Pack A PRD:EMP-CORE-003|P0|
|Work anniversaries & birthdays feed|Gap-fill (industry practice)|P2|
|My profile|Pack A PRD:ESS-PROF-001/002|P0|
|Profile change requests|Pack A PRD:ESS-PROF-003|P0|
|My requests hub|Pack A PRD:ESS-REQ-001|P0|
|Home dashboard (employee)|Pack A PRD:RPT-DASH-001|P0|
|My team view|Pack A ROAD:Phase 5|P0|
|Privacy notice acknowledgement|Gap-fill (industry practice)|P0|
|My data download|Gap-fill (industry practice)|P1|
|Upload intent & presigned PUT|Pack A PRD:DOC-FILE-001; Pack B 17|P0|
|Malware scan before availability|Pack B 02; Pack B 12 FILE-001|P0|
|Signed download|Pack A PRD:DOC-FILE-001 AC|P0|
|Document types config|Gap-fill (industry practice)|P0|
|Employee documents|Pack A PRD:DOC-EMP-001|P0|
|Expiry tracking|Pack A PRD:DOC-EMP-002|P0|
|Company policies & acknowledgement|Pack A PRD:DOC-POL-001|P1|
|Letter templates & generation|Pack A PRD:DOC-TMPL-001|P1|



|E-sign integration|Gap-fill (industry practice)|P2|
| - | - | - |
|Company document library|Gap-fill (industry practice)|P1|
|Manpower requisition|Pack B 02 Recruitment MVP|P1|
|Job creation & posting|Pack A PRD:REC-JOPack B 001|P1|
|Careers page & apply|Gap-fill (industry practice)|P1|
|Job board distribution|Pack A PRD:INT; NEW|P2|
|Employee referrals|Gap-fill (industry practice)|P1|
|Candidate database|Pack A PRD:REC-CAN-001|P1|
|Configurable pipeline|Pack A PRD:REC-CAN-002|P1|
|Resume parsing|Gap-fill (industry practice)|P2|
|Candidate consent & retention|Pack B 05 DEC-019|P1|
|Interview scheduling|Pack A PRD:REC-INT-001|P1|
|Scorecards & blind feedback|Pack A PRD:REC-INT-002; Pack B 02|P1|
|Offer management|Pack A PRD:REC-OFF-001|P1|
|Candidate offer portal|Gap-fill (industry practice)|P1|
|Convert to employee|Pack A PRD:REC-OFF-002|P1|
|Recruitment analytics|Gap-fill (industry practice)|P1|
|Onboarding templates|Pack A PRD:ONPack B TMPL-001|P1|
|Onboarding case & tasks|Pack A PRD:ONPack B TASK-001,ONPack B PROG-001|P1|
|Pre-joining portal|Gap-fill (industry practice)|P1|
|Document verification|Gap-fill (industry practice)|P1|
|Mark joined / no-show|Gap-fill (industry practice)|P1|
|Buddy & induction|Gap-fill (industry practice)|P2|
|Resignation submission|Pack A PRD:EMP exit; NEW|P1|
|Resignation acceptance & notice|Gap-fill (industry practice)|P1|
|Termination & retirement|Gap-fill (industry practice)|P1|
|Clearance checklist|Gap-fill (industry practice)|P1|
|Exit interview|Gap-fill (industry practice)|P1|
|Access revocation at last day|Pack B 12 HR-002|P1|
|Relieving & experience letters|Gap-fill (industry practice)|P1|
|Rehire eligibility|Gap-fill (industry practice)|P2|
|Web punch (4 events)|Pack A PRD:ATT-PUNCH-001..004; Pack B 17|P0|
|Mobile GPS punch|Gap-fill (industry practice)|P1|
|Selfie punch|Gap-fill (industry practice)|P2|
|IP restriction|Gap-fill (industry practice)|P1|
|Biometric device integration|Pack A PRD:ATT-POL-003|P1|
|Kiosk punch|Gap-fill (industry practice)|P2|
|Offline mobile punch sync|Gap-fill (industry practice)|P1|
|Attendance day computation|Pack A PRD:ATT-DAY-001/002; Pack B 14|P0|
|Timezone & overnight work date|Pack A PRD:ATT-DAY-003; Pack B 12 ATT-001|P0|
|Attendance policies (versioned)|Pack A PRD:ATT-POL-001; Pack B 14|P0|
|Nightly finaliser|Gap-fill (industry practice)|P0|
|Attendance views|Pack A PRD:ATT-DAY-004|P0|
|Regularization|Pack A PRD:ATT-REG-001/002|P0|



|On-duty / WFH requests|Gap-fill (industry practice)|P0|
| - | - | - |
|Overtime capture & approval|Gap-fill (industry practice)|P1|
|Attendance period lock|Pack B 11 attendance locked|P0|
|Contractor timesheets|Gap-fill (industry practice)|P2|
|Attendance reports|Pack A PRD:RPT-ATT-001|P0|
|Shift templates|Pack A PRD:ATT-POL-002|P0|
|Weekly-off patterns|Gap-fill (industry practice)|P0|
|Roster planning & publish|Pack A PRD:WFM-SFT-001|P1|
|Shift swap requests|Gap-fill (industry practice)|P2|
|Roster coverage report|Gap-fill (industry practice)|P2|
|Leave types|Pack A PRD:LV-TYPE-001|P0|
|Leave policies (versioned)|Pack B 02 Leave; Pack B 14|P0|
|Holiday calendars|Pack A PRD:LV-HOL-001; Pack B 14|P0|
|Leave ledger & balances|Pack A PRD:LV-BAL-001/003; Pack B 14|P0|
|Apply leave|Pack A PRD:LV-REQ-001|P0|
|Approve / reject leave|Pack A PRD:LV-REQ-003|P0|
|Cancel leave|Pack A PRD:LV-REQ-002|P0|
|Leave on behalf|Gap-fill (industry practice)|P1|
|Accrual job|Pack A PRD:LV-BAL-002|P1|
|Year-end processing|Gap-fill (industry practice)|P1|
|Comp-off|Gap-fill (industry practice)|P1|
|Sandwich & holiday exclusion|Pack A PRD:LV-HOL-002|P0|
|Team leave calendar|Gap-fill (industry practice)|P0|
|Leave reports|Pack A PRD:RPT-LV-001|P0|
|Opening balance import|Gap-fill (industry practice)|P0|
|Salary components|Pack A PRD:PAY-STR-001; Pack B 15|P1|
|Formula DSL engine|Pack B 15 restricted DSL|P1|
|Salary structures|Pack A PRD:PAY-STR-001|P1|
|Employee compensation & revisions|Pack A PRD:PAY-STR-002; Pack B 15|P1|
|Bulk revision upload|Gap-fill (industry practice)|P1|
|Payroll calendars & periods|Pack B 15|P1|
|Payroll inputs|Pack A PRD:PAY-RUN-002|P1|
|Run payroll (calculate)|Pack A PRD:PAY-RUN-001/002; Pack B 15|P1|
|Variance review|Gap-fill (industry practice)|P1|
|Maker-checker approval & lock|Pack A PRD:PAY-RUN-003; Pack B 15|P1|
|Bank payment file & confirmation|Pack B 15|P1|
|Payslips|Pack A PRD:PAY-SLIP-001/002|P1|
|Off-cycle runs|Pack A PRD:PAY-RUN-003 AC|P1|
|Loans & advances|Gap-fill (industry practice)|P1|
|Full & final settlement|Pack B 15 F&F|P1|
|Payroll exchange (export/import)|Pack B 01 R2; Pack B 15 s7|P1|
|GL journal export|Gap-fill (industry practice)|P1|
|Payroll reports|Pack A PRD:RPT|P1|
|Parallel run & go-live gate|Pack B 15 s8|P1|
|Statutory rule sets|Pack B 15 s5|P1|
|PF (EPF/EPS/EDLI)|Pack B 15|P1|



|ESI|Pack B 15|P1|
| - | - | - |
|Professional Tax|Pack B 15|P1|
|Labour Welfare Fund|Pack B 15|P2|
|Tax regime & declarations|Pack B 15|P1|
|Proof submission & verification|Pack B 15|P1|
|TDS computation|Pack B 15|P1|
|Form 16 & 24Q|Pack B 15|P1|
|Gratuity & bonus registers|Pack B 15|P2|
|Compliance calendar|Gap-fill (industry practice)|P1|
|Review cycles|Pack A PRD:PERF-CYC-001; Pack B 02|P1|
|Goals / OKRs|Pack A PRD:PERF-GOAL-001|P1|
|KPI library|Gap-fill (industry practice)|P1|
|Continuous check-ins & 1:1s|Gap-fill (industry practice)|P1|
|Self & manager reviews|Pack A PRD:PERF-REV-001|P1|
|360 / peer feedback|Pack B 02; NEW|P1|
|Calibration|Pack A PRD:PERF-REV-002|P1|
|Release & acknowledgement|Gap-fill (industry practice)|P1|
|Increment & promotion recommendations|Pack B 02 no comp linkage|P2|
|PIP|Gap-fill (industry practice)|P2|
|Cycle lock & reopen|Pack B 02|P1|
|Course catalog|Pack A PRD:LND-CRS-001; Pack B 02|P2|
|Assignments & auto-assign rules|Pack A PRD:LND-ENR-001|P2|
|Learner experience|Pack B 02|P2|
|Assessments|Gap-fill (industry practice)|P2|
|Training calendar & sessions|Gap-fill (industry practice)|P2|
|Certifications with expiry|Gap-fill (industry practice)|P2|
|Training requests & budget|Gap-fill (industry practice)|P2|
|Asset categories & catalog|Pack A PRD:AST-CAT-001|P1|
|Inventory|Pack A PRD:AST-ASN-002|P1|
|Asset requests|Gap-fill (industry practice)|P1|
|Allocation & acknowledgement|Pack A PRD:AST-ASN-001|P1|
|Return, transfer, repair, retire|Pack A PRD:AST-ASN-002|P1|
|Asset reports|Gap-fill (industry practice)|P1|
|Ticket categories & SLA|Pack A PRD:HLP-TKT-002|P2|
|Raise & track tickets|Pack A PRD:HLP-TKT-001|P2|
|Agent workspace|Gap-fill (industry practice)|P2|
|SLA timers & escalation|Gap-fill (industry practice)|P2|
|Knowledge base|Gap-fill (industry practice)|P2|
|CSAT & helpdesk reports|Gap-fill (industry practice)|P2|
|Expense policies|Gap-fill (industry practice)|P1|
|Submit claim with receipts|Pack A PRD:EXP-CLM-001|P1|
|Approve / audit claims|Pack A PRD:EXP-CLM-002|P1|



|Advances|Gap-fill (industry practice)|P1|
| - | - | - |
|Reimbursement payout|Pack A PRD:EXP-CLM-003|P1|
|Expense reports|Gap-fill (industry practice)|P1|
|Travel policies|Gap-fill (industry practice)|P2|
|Travel request|Gap-fill (industry practice)|P2|
|Travel desk bookings|Gap-fill (industry practice)|P2|
|Trip settlement|Gap-fill (industry practice)|P2|
|Announcements|Gap-fill (industry practice)|P1|
|Polls|Gap-fill (industry practice)|P2|
|Surveys & eNPS|Pack A PRD:ENG-SRV-001; Pack B 02|P1|
|Recognition & badges|Pack A PRD:ENG-REC-001|P2|
|Social feed moderation|Gap-fill (industry practice)|P2|
|Role dashboards|Pack A PRD:RPT-DASH-001|P0|
|Standard report library|Pack A PRD:RPT-HR-001..; Pack B 02|P0|
|Export jobs|Pack A PRD:RPT-EXP-001; Pack B 11|P0|
|Scheduled reports|Gap-fill (industry practice)|P1|
|Headcount & attrition analytics|Pack A PRD:RPT-HR-001|P0|
|Custom report builder|Pack A PRD:RPT-ADV-001|P2|
|Analytics warehouse|Pack A PRD:RPT-ANL-001|P2|
|Audit event writer|Pack A PRD:AUD-LOG-001; Pack B 03|P0|
|Audit search|Pack A PRD:AUD-LOG-002|P0|
|Audit export|Pack A PRD:AUD-LOG-003|P1|
|Restricted data access log|Gap-fill (industry practice)|P0|
|Retention & legal hold|Pack A PRD:AUD-RET-001; Pack B 06|P1|
|DPDP data-principal requests|Gap-fill (industry practice)|P1|
|Login history|Gap-fill (industry practice)|P0|
|POSH case log (restricted)|Gap-fill (industry practice)|P2|
|Transactional outbox|Pack A PRD:NTF-OUTBOX-001/002; Pack B 11|P0|
|In-app notification center|Pack A PRD:NTF-INAPP-001|P0|
|Email delivery|Pack A PRD:NTF-EMAIL-001|P0|
|Templates|Pack A PRD:NTF-TMPL-001|P0|
|User preferences & quiet hours|Pack A PRD:NTF-PREF-001|P1|
|SMS & WhatsApp|Pack A PRD:NTF-PUSH-001|P2|
|Push notifications|Pack A PRD:NTF-PUSH-001|P1|
|Daily digests|Gap-fill (industry practice)|P1|
|Workflow definitions & versions|Pack A PRD:WF-DEF-001/002; Pack B 02|P0|
|Approval runtime|Pack A PRD:WF-RUN-001; Pack B 11|P0|
|Approval inbox|Pack B 18 approvals|P0|
|Self-approval prevention & fallback|Pack A ARCH:6.3; Pack B 12 WF-001|P0|
|SLA, reminders, escalation|Pack A PRD:WF-RUN-002|P1|
|Delegation|Pack B 02 Delegation|P1|
|Email/mobile action links|Gap-fill (industry practice)|P1|
|Visual workflow builder|Pack A PRD:WF-DEF-001|P2|
|Outbound webhooks|Pack A PRD:INT-WEPack B 001|P1|
|Public API keys|Gap-fill (industry practice)|P1|



|Calendar integration|Pack A PRD:INT-CAL-001|P1|
| - | - | - |
|Accounting connectors|Gap-fill (industry practice)|P1|
|Slack / Teams|Gap-fill (industry practice)|P2|
|Integration health|Gap-fill (industry practice)|P1|
|Mobile auth & device binding|Gap-fill (industry practice)|P1|
|Mobile ESS|Pack A PRD:mobile P2; NEW|P1|
|Mobile manager approvals|Gap-fill (industry practice)|P1|
|Mobile expense capture|Gap-fill (industry practice)|P2|
|Mobile security controls|Gap-fill (industry practice)|P1|
|Tenant context & isolation suite|Pack A ARCH:21; Pack B 12 SEC-TEN-001/002|P0|
|Field encryption & blind index|Pack A TECH:security checklist; Pack B 09|P0|
|Rate limiting & WAF|Pack A TECH:security checklist|P0|
|Security headers, CSP, CSRF|Pack A TECH:security checklist|P0|
|Secrets & key management|Pack B 10|P0|
|Security scanning in CI|Pack B 10 CI|P0|
|Penetration test & remediation|Pack B 04|P1|
|Import framework|Pack B 02 Import; Pack B 11|P0|
|Employee import|Pack A PRD:EMP-CORE-005; Pack B 12 IMP-002|P0|
|Other imports|Gap-fill (industry practice)|P1|
|Accounting books & COA|Pack B 16|P2|
|Fiscal periods & close|Pack B 16|P2|
|Journals with maker-checker|Pack B 16|P2|
|Financial reports|Pack B 16|P2|
|Policy Q&A assistant|Pack A PRD:AI-CHAT-001|P2|
|Resume summarisation|Pack A PRD:AI-SUM-001|P2|
|Review writing assistance|Gap-fill (industry practice)|P2|
|NFR-PERF-001|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-PERF-002|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-PERF-003|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-PERF-004|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-PERF-005|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-PERF-006|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-SCL-001|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-SCL-002|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-AVL-001|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-AVL-002|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-AVL-003|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-SEC-001|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-SEC-002|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|



|NFR-SEC-003|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
| - | - | - |
|NFR-SEC-004|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-SEC-005|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-PRIV-001|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-A11Y-001|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-UX-001|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-UX-002|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-I18N-001|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-I18N-002|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-TZ-001|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-MNY-001|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-OBS-001|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-AUD-001|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-DATA-001|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-MNT-001|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-MNT-002|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-MIG-001|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-COMP-001|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-MOB-001|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|
|NFR-SUP-001|Pack A PRD s7 / Pack B 04, 09 (see blueprint s5)|P0|



|||
| - | - |
|||
|||
|**Status**|**Phase**|
|Merged|1|
|Merged|1|
|Resolved CF-14/15|1|
|Confirmed|1|
|Merged|1|
|Merged|1|
|Confirmed|1|
|Merged|1|
|Merged|1|
|Confirmed|1|
|Merged|1|
|Resolved CF-29|1|
|Confirmed|1|
|Confirmed|1|
|Confirmed|1|
|Confirmed|1|
|Confirmed|1|
|Confirmed|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Confirmed|1|
|Merged|1|
|Resolved CF-17|1|
|Confirmed|1|
|Merged|1|
|Merged|1|
|New|8|
|Merged|1|
|Resolved CF-38|1|
|Merged|1|
|Confirmed|8|
|Gated|8|



|Gated|8|
| - | -: |
|Confirmed|1|
|Confirmed|1|
|Merged|1|
|Confirmed|1|
|Resolved CF-10|1|
|Confirmed|1|
|New|1|
|Confirmed|1|
|Resolved CF-36|1|
|Confirmed|8|
|New|8|
|New|8|
|Merged|1|
|Confirmed|1|
|Resolved CF-02|1|
|Resolved CF-02|1|
|Confirmed|7|
|Confirmed|2|
|Confirmed|1|
|Confirmed|1|
|Merged|1|
|Resolved CF-32|1|
|Merged|1|
|Resolved CF-32|1|
|Confirmed|1|
|Merged|2|
|Confirmed|6|
|New|6|



|Resolved CF-01|1|
| - | -: |
|New|4|
|Merged|1|
|New|2|
|Resolved CF-41|1|
|Resolved CF-20|1|
|New|2|
|New|4|
|Confirmed|1|
|New|2|
|Confirmed|1|
|Merged|2|
|Merged|2|
|Merged|2|
|Resolved CF-21|2|
|Merged|2|
|New|2|
|New|2|
|Resolved CF-18|2|
|Merged|2|
|Merged|2|
|New|2|
|New|2|
|Confirmed|2|
|Merged|2|
|Confirmed|2|
|New|6|
|Merged|2|
|Merged|2|
|Confirmed|2|
|Merged|2|
|Confirmed|3|
|New|2|
|New|6|
|Merged|2|
|Resolved CF-27|2|
|Merged|2|
|New|2|
|Merged|2|
|Merged|2|
|Confirmed|2|
|Confirmed|5|



|New|8|
| - | -: |
|New|6|
|Merged|5|
|Merged|5|
|New|5|
|New|8|
|New|5|
|Merged|5|
|Merged|5|
|New|8|
|Gated|5|
|Merged|5|
|Merged|5|
|Merged|5|
|New|5|
|Merged|5|
|New|6|
|Merged|5|
|Merged|5|
|New|5|
|New|5|
|New|5|
|New|6|
|New|5|
|New|5|
|New|5|
|New|5|
|New|5|
|Confirmed|5|
|New|5|
|New|5|
|Resolved CF-23/24|3|
|New|7|
|New|7|
|New|3|
|Confirmed|6|
|New|8|
|New|7|
|Resolved CF-25|3|
|Merged|3|
|Resolved CF-25|3|
|New|3|
|Merged|3|
|Merged|3|



|New|3|
| - | -: |
|New|3|
|Merged|3|
|New|8|
|Merged|3|
|Merged|3|
|New|3|
|Merged|3|
|New|3|
|New|6|
|Confirmed|3|
|Resolved CF-22|3|
|Resolved CF-26|3|
|Resolved CF-22|3|
|Merged|3|
|Merged|3|
|Merged|3|
|New|3|
|Merged|3|
|New|3|
|New|3|
|Merged|3|
|New|3|
|Merged|3|
|New|3|
|Merged|4|
|Confirmed|4|
|Merged|4|
|Merged|4|
|New|6|
|Confirmed|4|
|Merged|4|
|Resolved CF-07|4|
|New|4|
|Merged|4|
|Confirmed|4|
|Merged|4|
|Merged|4|
|New|6|
|Confirmed|5|
|Resolved CF-07|4|
|New|4|
|Merged|4|
|Gated|4|
|Gated|4|
|Gated|4|



|Gated|4|
| - | -: |
|Gated|4|
|Gated|4|
|Confirmed|4|
|Confirmed|4|
|Gated|4|
|Gated|4|
|Gated|4|
|New|4|
|Merged|6|
|Merged|6|
|New|6|
|New|6|
|Merged|6|
|New|6|
|Merged|6|
|New|6|
|Confirmed|6|
|New|6|
|Confirmed|6|
|Merged|8|
|Merged|8|
|Confirmed|8|
|New|8|
|New|8|
|New|8|
|New|8|
|Confirmed|6|
|Merged|6|
|New|6|
|Merged|6|
|Merged|6|
|New|6|
|Merged|8|
|Merged|8|
|New|8|
|New|8|
|New|8|
|New|8|
|New|6|
|Merged|6|
|Merged|6|



|New|6|
| - | -: |
|Merged|6|
|New|6|
|New|8|
|New|8|
|New|8|
|New|8|
|New|6|
|New|6|
|Merged|6|
|Confirmed|6|
|New|6|
|Merged|2|
|Merged|2|
|Merged|2|
|New|6|
|Merged|2|
|Confirmed|8|
|Confirmed|8|
|Resolved CF-29|1|
|Merged|2|
|Confirmed|6|
|New|2|
|Resolved CF-33|7|
|New|7|
|New|1|
|New|8|
|Merged|1|
|Confirmed|1|
|Resolved CF-13|1|
|Confirmed|1|
|Confirmed|6|
|Confirmed|7|
|Confirmed|7|
|New|6|
|Resolved CF-30|1|
|Merged|1|
|Merged|1|
|Resolved CF-31|1|
|Confirmed|6|
|Confirmed|6|
|New|6|
|Confirmed|6|
|Confirmed|6|
|New|8|



|Confirmed|5|
| - | -: |
|New|6|
|New|8|
|New|6|
|New|7|
|New|7|
|New|7|
|New|7|
|New|7|
|Merged|1|
|Merged|2|
|Confirmed|1|
|Confirmed|1|
|Confirmed|1|
|Confirmed|1|
|Confirmed|7|
|Resolved CF-37|2|
|Merged|2|
|New|4|
|Gated|8|
|Gated|8|
|Gated|8|
|Gated|8|
|Confirmed|8|
|Confirmed|8|
|New|8|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|



|Merged|1|
| - | -: |
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|
|Merged|1|


|**Duplicate Requirements**|||
| - | :- | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*|||
||||
|**Canonical ID**|**Requirement**||
|GLOB-001|Tenant context derived server-side only||
|GLOB-020|Composite tenant-safe foreign keys||
|NTF-001|Outbox in same transaction||
|DOC-003|Private storage, signed short-lived URLs||
|AUD-001|Append-only audit with correlation and reason||
|IAM-003|Refresh rotation; reuse revokes family||
|WF-004|Requester cannot approve own request||
|IAM-011/012|Invitation hashed, single-use, expiring||
|IAM-021|No self-elevation to platform role||
|EMP-004|Effective-dated, append-only job history||
|ATT-001|Punch idempotency key||
|RPT-003|Exports use read scope; separate permission||
|TEN-010|Subscription is commercial source of truth||
|NFR-A11Y-001|Accessibility baseline||
|IMP-001|Import preview/commit, idempotent||
|SEC-001|Cross-tenant tests mandatory||
|TEN-003|Platform approval of tenant||
|NFR-PERF-001|Performance baselines||
|PAY-010|Locked payroll immutable; corrections by adjustment||
|DOC-002|Upload scanning and quarantine||
|AUD-005|Retention and legal hold||
|IAM-014|Login email globally unique||



|||
| - | - |
|||
|||
|**Pack A occurrences**|**Pack B occurrences**|
|A-PRD GLOB-001; A-ARCH 6.3; A-TECH 5|B-01 s6; B-06 s3 r4; B-14 s7; B-17 description|
|A-ERD conventions; A-DB s2|B-06 s3 r2; B-08 s1; B-13 SQL|
|A-PRD NTF-OUTBOX-001/002|B-03 s8; B-11 s6; B-12 OUTBOX-001|
|A-PRD DOC-FILE-001; A-ARCH 13|B-01 s6; B-09 s3; B-12 FILE-001/002|
|A-PRD AUD-LOG-001|B-03 AuditEvent; B-12 AUD-001|
|A-PRD AUTH-SESS-001|B-09 threat model; B-12 AUTH-002|
|A-ARCH 6.3; A-PRD ATT-REG-002, LV-REQ-003|B-02 workflow; B-12 WF-001|
|A-PRD AUTH-USER-001|B-11 invitation; B-12 AUTH-001|
|A-PRD RBAC-SA-001, GLOB-012|B-12 SEC-RBAC-001; B-09|
|A-PRD EMP-JOB-001|B-08 employment\_assignments; B-12 HR-001|
|A-PRD ATT-PUNCH-001|B-14 punches; B-17 POST punches|
|A-PRD RPT-EXP-001|B-11 s5; B-12 RPT-001|
|A-PRD ORG-BILL-001|B-06 s1|
|A-PRD NFR-A11Y-001|B-18 WCAG 2.2 AA; B-12 A11Y-001|
|A-PRD EMP-CORE-005 (P1)|B-02 Import; B-11 s4; B-12 IMP-001..003|
|A-ARCH 20; A-TECH 7|B-04; B-06 s3 r8; B-12 SEC-TEN-001/002|
|A-PRD AUTH-SIGNUP-003, ORG-LIFE-002|B-11 tenant state machine|
|A-TECH 5; A-ERD 11; A-PRD NFR-PERF-001|B-09 s6 (proposed)|
|A-PRD PAY-RUN-003|B-15 s3|
|A-PRD NFR-FILE-001|B-02 documents; B-04; B-12 FILE-001|
|A-PRD AUD-RET-001|B-06 s8; B-14 s7|
|A-PRD AUTH-USER-005, GLOB-016|B-13 users.email\_normalized UNIQUE|



||
| - |
||
||
|**Resolution**|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|
|Merged into canonical ID|


|**Contradicting Requirements and Rulings**||||
| - | :- | :- | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*||||
|||||
|**Conflict ID**|**Topic**|**Pack A says**||
|CF-01|Tenant shape|One org = one tenant||
|CF-02|User tenancy|One user -> one org||
|CF-03|Column naming|organization\_id||
|CF-04|Platform admin|is\_platform + NULL org||
|CF-05|Release structure|Phases 0-12, MVP/P1/P2||
|CF-06|Attendance/leave timing|Core MVP||
|CF-07|Payroll|Native payroll P1||
|CF-08|Finance/GL|Not in scope||
|CF-09|Recruitment order|P1 after hardening||
|CF-10|Auth transport|HttpOnly cookies||
|CF-11|Hosting|Vercel + Render||
|CF-12|ORM|Prisma||
|CF-13|Email|Resend||
|CF-14|Pagination|page/pageSize 20/100||
|CF-15|Error format|success/error envelope||
|CF-16|Cross-tenant response|403||
|CF-17|Tenant statuses|5 upper-case||
|CF-18|Employee statuses|4||
|CF-19|Employee number scope|Per org||
|CF-20|Designation vs position|designations||
|CF-21|Job history|employee\_job\_history||
|CF-22|Leave balance|reserved column||
|CF-23|Punch names|BREAK\_OUT/BREAK\_IN||
|CF-24|Punch idempotency scope|(employee, key)||
|CF-25|Attendance policy|Mutable||
|CF-26|Holidays|Normalised rows||
|CF-27|File scanning|Phase 7||
|CF-28|Document model|files + employee\_documents||
|CF-29|Audit diff|Old/new JSON redacted||
|CF-30|Approvals|Fixed MVP; builder P1||
|CF-31|Self-approval|Forbidden||
|CF-32|Manager scope|Direct reports||
|CF-33|Retention|Fixed durations||
|CF-34|Performance/SLO|Latency locked||
|CF-35|Accessibility|Basic||
|CF-36|MFA|P1||
|CF-37|Bulk import|P1||
|CF-38|Billing|Schema MVP||
|CF-39|Default country|None||
|CF-40|Frontend framework|Vite SPA||
|CF-41|Department uniqueness|Name||
|CF-42|Auditor scope|ORG only||



||
| - |
||
||
|**Pack B says**|
|Tenant -> many legal entities|
|Global users + memberships|
|tenant\_id|
|Separate platform role|
|R0-R3|
|R1 gated|
|Exchange only R2|
|R2 finance core|
|R1 bounded MVP|
|Bearer JWT in OpenAPI|
|Open (DEC-024)|
|Choose after PoC|
|Open|
|Cursor|
|Problem + correlationId/retryable|
|404 when hidden|
|4 lower-case|
|4 different|
|Open|
|positions|
|assignments + events|
|Ledger|
|break\_start/break\_end|
|(tenant, key)|
|Versioned|
|JSON per calendar|
|Before availability R1|
|documents + versions|
|Minimise|
|Engine R0|
|Per policy|
|Direct/indirect|
|Legal decides|
|SLOs open|
|WCAG 2.2 AA|
|Privileged MFA at go-live|
|R0 framework|
|R3 invoices|
|IN / Asia/Kolkata|
|Vite SPA (prompt suggests Next.js)|
|Code|
|Scoped|



|||
| - | - |
|||
|||
|**Ruling**|**Needs PO confirmation**|
|Tenant -> Legal Entity -> Location; default entity at signup|No|
|Global users + memberships; cap = 1 (config)|No|
|tenant\_id|No|
|is\_platform + platform\_role\_grants; no memberships|No|
|Phases 1-8 mapped to both|No|
|Build Phase 3; flags off until signed policy|No|
|4a exchange + structures; 4b native after sign-off|Yes|
|Optional Phase 8; GL export default|Yes|
|Phase 5; parallel squad possible|No|
|Cookies web; bearer+PKCE mobile|No|
|AWS ap-south-1|Yes|
|Prisma + raw SQL migrations|No|
|Resend + SES fallback|No|
|Cursor; limit 20/100|No|
|Envelope with both|No|
|404|No|
|pending\_review/active/suspended/cancelled/archived|No|
|7-state union|No|
|Per tenant|No|
|Both; positions in Phase 8|No|
|assignments + events|No|
|Ledger SoT + locked projection|No|
|BREAK\_START/BREAK\_END|No|
|(tenant, employee, key)|No|
|Versioned + pinned per day|No|
|Normalised rows|No|
|Before availability from Phase 2|No|
|files + documents + versions|No|
|Field diff with class masking|No|
|Engine Phase 1; visual builder Phase 6|No|
|Always forbidden|No|
|TEAM + TEAM\_TREE|No|
|Defaults, overridable, sign-off|No|
|Adopt both as targets|No|
|WCAG 2.2 AA|No|
|Mandatory privileged at first prod|No|
|Phase 2|No|
|Schema Phase 1; invoices Phase 8|No|
|Captured at signup; India pre-selected|No|
|Vite SPA + Zustand|No|
|Code unique; name unique among active siblings|No|
|Grantable scope; separate export|No|


|**Missing Requirements (gap-fill)**|||
| - | :- | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*|||
||||
|**Requirement ID**|**Module**||
|TEN-008|Tenant & Subscription Management||
|IAM-005|Identity, Authentication & Access Control||
|IAM-009|Identity, Authentication & Access Control||
|IAM-010|Identity, Authentication & Access Control||
|IAM-026|Identity, Authentication & Access Control||
|ORG-002|Organization Management||
|ORG-004|Organization Management||
|ORG-007|Organization Management||
|ORG-008|Organization Management||
|ORG-010|Organization Management||
|EMP-006|Employee Management||
|EMP-007|Employee Management||
|EMP-011|Employee Management||
|EMP-012|Employee Management||
|EMP-016|Employee Management||
|ESS-006|Employee Self-Service||
|ESS-007|Employee Self-Service||
|DOC-004|Documents Management||
|DOC-009|Documents Management||
|DOC-010|Documents Management||
|REC-003|Recruitment (ATS)||
|REC-004|Recruitment (ATS)||
|REC-005|Recruitment (ATS)||
|REC-008|Recruitment (ATS)||
|REC-013|Recruitment (ATS)||
|REC-015|Recruitment (ATS)||



|ONB-003|Onboarding & Pre-joining|
| - | - |
|ONB-004|Onboarding & Pre-joining|
|ONB-005|Onboarding & Pre-joining|
|ONB-006|Onboarding & Pre-joining|
|OFB-001|Offboarding & Exit|
|OFB-002|Offboarding & Exit|
|OFB-003|Offboarding & Exit|
|OFB-004|Offboarding & Exit|
|OFB-005|Offboarding & Exit|
|OFB-007|Offboarding & Exit|
|OFB-008|Offboarding & Exit|
|ATT-002|Attendance & Time|
|ATT-003|Attendance & Time|
|ATT-004|Attendance & Time|
|ATT-006|Attendance & Time|
|ATT-007|Attendance & Time|
|ATT-011|Attendance & Time|
|ATT-014|Attendance & Time|
|ATT-015|Attendance & Time|
|ATT-017|Attendance & Time|
|SFT-002|Shift & Roster|
|SFT-004|Shift & Roster|
|SFT-005|Shift & Roster|
|LV-008|Leave Management|
|LV-010|Leave Management|
|LV-011|Leave Management|
|LV-013|Leave Management|
|LV-015|Leave Management|
|PAY-005|Payroll|



|PAY-009|Payroll|
| - | - |
|PAY-014|Payroll|
|PAY-017|Payroll|
|STA-011|Statutory Compliance & Tax (India)|
|PRF-003|Performance Management|
|PRF-004|Performance Management|
|PRF-006|Performance Management|
|PRF-008|Performance Management|
|PRF-010|Performance Management|
|LMS-004|Learning Management|
|LMS-005|Learning Management|
|LMS-006|Learning Management|
|LMS-007|Learning Management|
|AST-003|Asset Management|
|AST-006|Asset Management|
|HLP-003|Helpdesk|
|HLP-004|Helpdesk|
|HLP-005|Helpdesk|
|HLP-006|Helpdesk|
|EXP-001|Expense Management|
|EXP-004|Expense Management|
|EXP-006|Expense Management|
|TRV-001|Travel Management|
|TRV-002|Travel Management|
|TRV-003|Travel Management|
|TRV-004|Travel Management|
|ENG-001|Announcements, Surveys & Engagement|
|ENG-002|Announcements, Surveys & Engagement|
|ENG-005|Announcements, Surveys & Engagement|



|RPT-004|Reports & Dashboards|
| - | - |
|AUD-004|Audit & Compliance|
|AUD-006|Audit & Compliance|
|AUD-007|Audit & Compliance|
|AUD-008|Audit & Compliance|
|NTF-008|Notification System|
|WF-007|Workflow Engine|
|INT-002|Integrations & API Platform|
|INT-004|Integrations & API Platform|
|INT-005|Integrations & API Platform|
|INT-006|Integrations & API Platform|
|MOB-001|Mobile App|
|MOB-002|Mobile App|
|MOB-003|Mobile App|
|MOB-004|Mobile App|
|MOB-005|Mobile App|
|IMP-003|Data Import / Export|
|AI-003|AI HR Assistant|



||||
| - | - | - |
||||
||||
|**Requirement**|**Priority**|**Phase**|
|Tenant data export on exit: Owner requests full export (JSON/CSV/files ZIP); link expires 24 h|P1|8|
|Change password: Authenticated change with current password; breached-password check|P0|1|
|SCIM provisioning: SCIM 2.0 users and groups endpoints|P2|8|
|Passkeys (WebAuthn): Passwordless sign-in and MFA via passkeys|P2|8|
|Access review report: Periodic list of roles, grants, restricted readers for review|P1|6|
|Statutory registrations: Encrypted registration numbers per entity and state|P1|4|
|Branches: Optional grouping of locations|P1|2|
|Grades/bands: Grade ladder with optional pay range|P0|2|
|Cost centers: Cost centers with owner; split allocation on assignment|P1|4|
|Org chart: Interactive chart from current assignments|P0|2|
|Future-dated changes job: Nightly job applies future assignments and status changes|P0|2|
|Manager cycle prevention: Reject cyclic reporting lines|P0|2|
|Statutory IDs (restricted): PAN, Aadhaar reference (last4), UAN, ESIC IP, passport|P0|2|
|Probation tracking: Probation end date, confirmation task 15 days before|P1|2|
|Work anniversaries & birthdays feed: Opt-in celebrations|P2|6|
|Privacy notice acknowledgement: Employee acknowledges privacy notice at first login|P0|2|
|My data download: Employee downloads own data (DPDP access)|P1|6|
|Document types config: Mandatory, expiry, visibility, retention per type|P0|2|
|E-sign integration: Send letters for e-sign (Leegality/DocuSign)|P2|8|
|Company document library: Folders, access by audience|P1|6|
|Careers page & apply: Public branded careers page; apply form with consent|P1|5|
|Job board distribution: Push jobs to LinkedIn, Naukri, Indeed via integration|P2|8|
|Employee referrals: Employees refer candidates; referral status and bonus eligibility|P1|5|
|Resume parsing: Extract fields from PDF/DOCX resumes|P2|8|
|Candidate offer portal: Accept/decline offer via tokenised link|P1|5|
|Recruitment analytics: Funnel, time-to-hire, source effectiveness|P1|6|



|Pre-joining portal: Token portal for personal data, bank, PAN, education, documents, Form 11|P1|5|
| - | - | -: |
|Document verification: HR verifies or rejects submitted documents|P1|5|
|Mark joined / no-show: Joined activates employee and invite; no-show closes case|P1|5|
|Buddy & induction: Assign buddy; induction schedule; 30/60/90-day check-ins|P2|6|
|Resignation submission: Employee resigns with reason and proposed last day; withdrawal|P1|5|
|Resignation acceptance & notice: Manager/HR accept, adjust last day, waive or recover notice|P1|5|
|Termination & retirement: HR initiates termination with category and document|P1|5|
|Clearance checklist: Department clearances (IT, assets, finance, admin, manager)|P1|5|
|Exit interview: Questionnaire; HR-only visibility|P1|5|
|Relieving & experience letters: Generate after F&F|P1|5|
|Rehire eligibility: Restricted flag with reason|P2|5|
|Mobile GPS punch: Geofence check, accuracy, block/flag per policy|P1|7|
|Selfie punch: Photo captured with punch; 90-day retention|P2|7|
|IP restriction: Web punch only from allowed IP ranges|P1|3|
|Kiosk punch: Shared tablet with PIN/QR|P2|8|
|Offline mobile punch sync: Queue with device time and idempotency; drift flag|P1|7|
|Nightly finaliser: Mark absent/missing punch, auto-checkout per policy|P0|3|
|On-duty / WFH requests: Mark days without punches on approval|P0|3|
|Overtime capture & approval: OT minutes beyond threshold; approval; to payroll or comp-off|P1|3|
|Contractor timesheets: Daily/weekly hours by project for contractors|P2|8|
|Weekly-off patterns: Fixed, alternate Saturdays, rotational|P0|3|
|Shift swap requests: Peer swap with both + manager approval; rest-gap rule|P2|3|
|Roster coverage report: Coverage by location/hour|P2|6|
|Leave on behalf: HR applies for an employee|P1|3|
|Year-end processing: Carry-forward, lapse, encashment entries; idempotent|P1|3|
|Comp-off: Credit from OT/holiday work; expiry|P1|3|
|Team leave calendar: Calendar of team leaves and holidays|P0|3|
|Opening balance import: Import balances at go-live as opening ledger entries|P0|3|
|Bulk revision upload: Annual increments via import with approval|P1|6|



|Variance review: Compare to previous month; flag >20% changes|P1|4|
| - | - | -: |
|Loans & advances: Principal, EMI, interest, schedule, foreclosure|P1|6|
|GL journal export: Payroll and reimbursement journals to Tally XML, Zoho Books, CSV|P1|4|
|Compliance calendar: Due dates for PF, ESI, PT, TDS with reminders|P1|4|
|KPI library: KPIs by designation/department|P1|6|
|Continuous check-ins & 1:1s: Notes, agreed actions|P1|6|
|360 / peer feedback: Request feedback; anonymity threshold|P1|6|
|Release & acknowledgement: Release ratings; employee acknowledges or disagrees|P1|6|
|PIP: Performance improvement plans with check-ins and outcome|P2|6|
|Assessments: Question bank, pass mark, attempts|P2|8|
|Training calendar & sessions: Classroom sessions, capacity, attendance|P2|8|
|Certifications with expiry: Record certificates; reminders 60/30/7|P2|8|
|Training requests & budget: Request external training; approval; budget tracking|P2|8|
|Asset requests: Employee requests asset; approval|P1|6|
|Asset reports: Register, by employee, unreturned on exit, warranty expiry|P1|6|
|Agent workspace: Queue, assign, internal notes, canned responses|P2|8|
|SLA timers & escalation: Pause on awaiting employee; escalate on breach|P2|8|
|Knowledge base: Articles suggested while typing|P2|8|
|CSAT & helpdesk reports: Satisfaction rating; volume, SLA %, backlog|P2|8|
|Expense policies: Limits by category x grade x location; receipt thresholds; per-diem; mileage|P1|6|
|Advances: Request, approve, pay, settle against claims|P1|6|
|Expense reports: By status, category, policy violations, outstanding advances|P1|6|
|Travel policies: Class, hotel caps, advance booking by grade|P2|8|
|Travel request: Trip with legs, stay, estimate, advance|P2|8|
|Travel desk bookings: Upload confirmations and tickets|P2|8|
|Trip settlement: Expenses linked to trip; advance auto-settled|P2|8|
|Announcements: Targeted, scheduled, pinned; mandatory read receipts|P1|6|
|Polls: Quick single-question polls|P2|6|
|Social feed moderation: Likes, comments, report, hide|P2|6|



|Scheduled reports: Email link on schedule|P1|6|
| - | - | -: |
|Restricted data access log: Log reveals and restricted downloads|P0|2|
|DPDP data-principal requests: Access, correction, erasure, grievance with due dates|P1|7|
|Login history: Per-user login events and devices|P0|1|
|POSH case log (restricted): Confidential case register for ICC|P2|8|
|Daily digests: Pending approvals and team-on-leave digests|P1|6|
|Email/mobile action links: Signed single-use links re-checking permissions|P1|6|
|Public API keys: Scoped, expiring, hashed keys; rate limits|P1|8|
|Accounting connectors: Tally, Zoho Books, QuickBooks exports/push|P1|6|
|Slack / Teams: Notifications and approvals in chat|P2|8|
|Integration health: Status, last sync, failure alerts|P1|6|
|Mobile auth & device binding: OAuth PKCE, secure storage, biometric unlock, remote logout|P1|7|
|Mobile ESS: Home, punch, leave, payslips, directory, announcements|P1|7|
|Mobile manager approvals: Approval inbox with push|P1|7|
|Mobile expense capture: Receipt camera, OCR, draft claims|P2|7|
|Mobile security controls: Root/jailbreak and mock-location detection; no unencrypted caching|P1|7|
|Other imports: Leave balances, punches, holidays, compensation, assets, YTD payroll|P1|4|
|Review writing assistance: Draft review comments from goals/check-ins|P2|8|



||
| - |
||
||
|**Rationale**|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|



|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
| - |
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|



|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
| - |
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|



|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
| - |
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|
|Not in either pack; standard in Keka/Darwinbox/Zoho People/greytHR class products (logged as assumption)|


|**Open Questions**|||
| - | :- | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*|||
||||
|**ID**|**Question**||
|OQ-01|Meeting notes, WhatsApp threads, wireframes and feature sheets were listed but not uploaded. Do any exist that change scope?||
|OQ-02|Confirm AWS Mumbai hosting vs Render Singapore (CF-11)||
|OQ-03|Confirm payroll split: exchange first (4a), native India payroll second (4b) (CF-07)||
|OQ-04|Is a built-in general ledger needed, or is Tally/Zoho Books/ERP export enough (CF-08)?||
|OQ-05|Year-one target: tenants, employees per tenant, peak concurrency||
|OQ-06|Pricing model: per employee per month, module bundles, or both?||
|OQ-07|Which states' PT and LWF rules ship first?||
|OQ-08|Is the first customer known, and which modules must it go live with?||
|OQ-09|Contractors: employee type 'contractor' or separate vendor-worker record?||
|OQ-10|Which biometric vendors first (eSSL, ZKTeco, Matrix)?||
|OQ-11|Product brand name and domain||
|OQ-12|Confirm success metric targets (Section 2.4)||
|OQ-13|Do we store full Aadhaar numbers for any purpose?||
|OQ-14|Which state Shops & Establishments register formats are required?||
|OQ-15|Minimum mobile OS versions||
|OQ-16|Employee number uniqueness: tenant vs legal entity (DEC-023)||
|OQ-17|Mandatory employee fields at creation (DEC-023)||
|OQ-18|Self-edit fields allowed for employees per tenant default||
|OQ-19|Attendance rules: grace, rounding, half-day thresholds, late-mark penalties (DEC-014)||
|OQ-20|Leave rules: accrual, carry-forward, encashment, sandwich, negative balance (DEC-014b)||
|OQ-21|Statutory leave templates (maternity, paternity, bereavement) per state||
|OQ-22|Payslip PDF password policy||
|OQ-23|Bank formats required at launch||
|OQ-24|Gratuity computation and payment trigger rules||
|OQ-25|Payroll go-live parallel run: number of periods and tolerance||
|OQ-26|Candidate data retention period (DEC-019)||
|OQ-27|Offer letter templates and approval matrix||
|OQ-28|Performance rating scale and visibility (DEC-020)||
|OQ-29|Peer feedback anonymity threshold (DEC-022)||
|OQ-30|Survey minimum group size||
|OQ-31|Learning evidence and certification renewal rules (DEC-021)||
|OQ-32|Expense policy defaults by grade and city tier||
|OQ-33|Reimbursement route: payroll vs direct bank by default||
|OQ-34|Data retention schedule sign-off (DEC-015)||
|OQ-35|SLO, RPO, RTO approval (DEC-016)||
|OQ-36|Support model: hours, channels, response targets||
|OQ-37|Invoice numbering, GST on SaaS invoices, credit/refund policy (DEC-018)||
|OQ-38|Grace period before suspension for past\_due||
|OQ-39|Will tenants need multiple currencies per entity?||
|OQ-40|US/GCC market timing (affects statutory abstraction)||



|OQ-41|Hindi or regional language UI priority|
| - | - |
|OQ-42|Mobile: React Native acceptable vs native apps?|
|OQ-43|Is selfie punch acceptable to customers given biometric-data sensitivity?|
|OQ-44|POSH case management in scope for HRMS or external?|
|OQ-45|AI assistant: approved LLM provider and data processing terms|
|OQ-46|Background verification vendor integration needed?|
|OQ-47|Who are the named approvers for GATE-01..07?|
|OQ-48|Team size and budget for delivery (drives sprint plan)|



|||
| - | - |
|||
|||
|**Owner**|**Default applied meanwhile**|
|Product Owner|Proceed on uploaded packs only|
|Product Owner + Engineering|AWS ap-south-1|
|Product Owner|Split as proposed|
|Product Owner + Finance|Export only; FIN core deferred|
|Product Owner|500 tenants / 100k employees|
|Product Owner|PEPM with module bundles|
|Payroll SME|Maharashtra, Karnataka, Tamil Nadu, Telangana, West Bengal, Gujarat|
|Product Owner|Core HR + attendance + leave|
|HR SME|Employee type 'contractor'|
|Product Owner|eSSL + ZKTeco|
|Founder|'HRMS' working name|
|Product Owner|Proposed targets|
|Privacy/Legal|No; last 4 + reference token|
|HR/Compliance|Generic muster + overtime register|
|Engineering|Android 10, iOS 16|
|HR Owner|Tenant-wide|
|HR Owner|As in M04 validation|
|HR Owner|As in M05 rules|
|HR + Compliance|Policies drafted, flag off|
|HR + Compliance|Templates drafted, flag off|
|HR + Legal|Central rules only, flag off|
|Payroll SME|PAN first 5 + DOB DDMM|
|Payroll SME|HDFC, ICICI, SBI, Axis + generic CSV|
|Payroll SME + Legal|Register only; payout via F&F manual item|
|Payroll SME|2 periods, zero unexplained variance|
|Privacy/Legal|12 months after last activity|
|HR Owner|Band-based; out-of-band needs OA|
|HR Owner|5-point, released after calibration|
|HR + Privacy|3 responses|
|HR + Privacy|5 responses|
|HR/Compliance|Evidence = completion record only|
|Finance|Tenant-configured, no defaults|
|Finance|Payroll|
|Privacy/Legal|Section 8.6 defaults|
|Engineering/Ops|99\.5%, 15 min, 4 h|
|Product Owner|Business hours IST, email + chat|
|Finance/Tax|Manual invoices; GST 18% by finance|
|Product Owner|15 days|
|Product Owner|One currency per entity|
|Founder|India only for 12 months|



|Product Owner|English only until Phase 8|
| - | - |
|Engineering|React Native (Expo)|
|Privacy/Legal|Optional per tenant, 90-day retention|
|Compliance|Restricted log only (Phase 8)|
|Founder + Legal|Deferred to Phase 8|
|HR Owner|Out of scope|
|Founder|Founder holds all until hires|
|Founder|2 squads (8 engineers) assumed|



|||
| - | - |
|||
|||
|**Blocks phase**|**Status**|
|1|Open|
|1|Open|
|4|Open|
|8|Open|
|1|Open|
|1|Open|
|4|Open|
|1|Open|
|2|Open|
|6|Open|
|1|Open|
|1|Open|
|2|Open|
|3|Open|
|7|Open|
|2|Open|
|2|Open|
|2|Open|
|3|Open|
|3|Open|
|3|Open|
|4|Open|
|4|Open|
|4|Open|
|4|Open|
|5|Open|
|5|Open|
|6|Open|
|6|Open|
|6|Open|
|8|Open|
|6|Open|
|6|Open|
|7|Open|
|7|Open|
|7|Open|
|8|Open|
|8|Open|
|4|Open|
|8|Open|



|8|Open|
| -: | - |
|7|Open|
|7|Open|
|8|Open|
|8|Open|
|8|Open|
|1|Open|
|1|Open|


|**Sheet 1 - Module List**|||
| - | :- | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*|||
||||
|**Module ID**|**Module Name**||
|M01|Tenant & Subscription Management||
|M02|Identity, Authentication & Access Control||
|M03|Organization Management||
|M04|Employee Management||
|M05|Employee Self-Service||
|M06|Documents Management||
|M07|Recruitment (ATS)||
|M08|Onboarding & Pre-joining||
|M09|Offboarding & Exit||
|M10|Attendance & Time||
|M11|Shift & Roster||
|M12|Leave Management||
|M13|Payroll||
|M14|Statutory Compliance & Tax (India)||
|M15|Performance Management||
|M16|Learning Management||
|M17|Asset Management||
|M18|Helpdesk||
|M19|Expense Management||
|M20|Travel Management||
|M21|Announcements, Surveys & Engagement||
|M22|Reports & Dashboards||
|M23|Audit & Compliance||
|M24|Notification System||
|M25|Workflow Engine||
|M26|Integrations & API Platform||
|M27|Mobile App||
|M28|Security & Data Protection||
|M29|Data Import / Export||
|M30|Finance Core (optional)||
|M31|AI HR Assistant||



||||
| - | - | - |
||||
||||
|**Description**|**Status**|**Priority**|
|Self-signup, tenant lifecycle, setup wizard, plans, subscriptions, entitlements, billing|Approved for build|P0|
|Login, sessions, MFA, SSO, memberships, invitations, roles, grants, scopes, break-glass|Approved for build|P0|
|Legal entities, locations, branches, departments, designations, grades, cost centers|Approved for build|P0|
|Employee master, assignments, lifecycle events, restricted data, directory|Approved for build|P0|
|Self-service profile, requests hub, dashboards, team view, privacy|Approved for build|P0|
|Private files, scanning, employee documents, expiry, policies, letters, e-sign|Approved for build|P0|
|Requisitions, jobs, careers page, candidates, pipeline, interviews, offers|Approved for build|P1|
|Templates, onboarding cases, pre-joining portal, verification, joining|Approved for build|P1|
|Resignation, termination, clearances, exit interview, access revocation|Approved for build|P1|
|Punch capture (web/mobile/biometric), daily computation, regularization, OT, locks|Approved for build|P0|
|Shift templates, weekly offs, rosters, swaps|Approved for build|P0|
|Leave types, versioned policies, holidays, ledger, requests, accrual, year-end|Approved for build|P0|
|Components, structures, compensation, runs, payslips, loans, F&F, exchange|Approved for build|P1|
|Statutory rule sets, PF, ESI, PT, LWF, TDS, declarations, Form 16/24Q|Approved for build|P1|
|Cycles, goals, KPIs, check-ins, reviews, 360, calibration, PIP|Approved for build|P1|
|Courses, assignments, assessments, sessions, certifications|Approved for build|P2|
|Asset catalog, inventory, requests, allocation, return|Approved for build|P1|
|Tickets, categories, SLA, agent workspace, knowledge base|Approved for build|P2|
|Expense policies, claims, approvals, advances, reimbursement|Approved for build|P1|
|Travel policies, requests, bookings, settlement|Approved for build|P2|
|Announcements, polls, surveys, recognition, moderation|Approved for build|P1|
|Dashboards, report library, exports, scheduled reports, builder|Approved for build|P0|
|Audit trail, access logs, retention, legal hold, DPDP requests|Approved for build|P0|
|Outbox, in-app, email, SMS, push, templates, preferences|Approved for build|P0|
|Workflow definitions, runtime, inbox, delegation, SLA|Approved for build|P0|
|Webhooks, API keys, calendar, accounting, chat connectors|Approved for build|P1|
|Mobile ESS, manager approvals, punch, expenses|Approved for build|P1|
|Isolation suite, encryption, rate limits, headers, secrets, scanning|Approved for build|P0|
|Import framework and templates|Approved for build|P0|
|Books, COA, periods, journals, financial reports (optional)|Gated / Optional|P2|
|Policy Q&A, resume summaries, review assistance|Approved for build|P2|



|||||
| - | - | - | - |
|||||
|||||
|**Phase**|**Prefix**|**Feature count**|**Story points**|
|1|TEN|16|92|
|1|IAM|26|132|
|1|ORG|11|41|
|2|EMP|16|80|
|2|ESS|7|33|
|2|DOC|10|45|
|5|REC|15|81|
|5|ONB|6|30|
|5|OFB|8|30|
|3|ATT|18|113|
|3|SFT|5|24|
|3|LV|15|81|
|4|PAY|19|121|
|4|STA|11|71|
|6|PRF|11|63|
|8|LMS|7|36|
|6|AST|6|24|
|8|HLP|6|31|
|6|EXP|6|31|
|8|TRV|4|14|
|6|ENG|5|24|
|2|RPT|7|50|
|1|AUD|8|37|
|1|NTF|8|39|
|1|WF|8|60|
|6|INT|6|28|
|7|MOB|5|36|
|1|SEC|7|42|
|2|IMP|3|26|
|8|FIN|4|34|
|8|AI|3|18|


|**Sheet 2 - Features**|||
| - | - | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*|||
||||
|**Feature ID**|**Module**|**Feature Name**|
|TEN-001|M01 Tenant & Subscription Management|Self-signup|
|TEN-002|M01 Tenant & Subscription Management|Email verification at signup|
|TEN-003|M01 Tenant & Subscription Management|Platform tenant review & approval|
|TEN-004|M01 Tenant & Subscription Management|Suspend / reactivate / cancel / archive tenant|
|TEN-005|M01 Tenant & Subscription Management|Default seeding on activation|
|TEN-006|M01 Tenant & Subscription Management|Setup wizard|
|TEN-007|M01 Tenant & Subscription Management|Tenant settings|
|TEN-008|M01 Tenant & Subscription Management|Tenant data export on exit|
|TEN-009|M01 Tenant & Subscription Management|Plans and plan versions|
|TEN-010|M01 Tenant & Subscription Management|Subscription lifecycle|
|TEN-011|M01 Tenant & Subscription Management|Entitlement enforcement|
|TEN-012|M01 Tenant & Subscription Management|Seat limit enforcement|
|TEN-013|M01 Tenant & Subscription Management|Invoices and payments (manual-first)|
|TEN-014|M01 Tenant & Subscription Management|Payment gateway & dunning|
|TEN-015|M01 Tenant & Subscription Management|Trial and billing notifications|
|TEN-016|M01 Tenant & Subscription Management|Platform feature flags|
|IAM-001|M02 Identity, Authentication & Access Control|Email/password login|
|IAM-002|M02 Identity, Authentication & Access Control|Logout|
|IAM-003|M02 Identity, Authentication & Access Control|Cookie sessions with rotation|
|IAM-004|M02 Identity, Authentication & Access Control|Password reset|
|IAM-005|M02 Identity, Authentication & Access Control|Change password|
|IAM-006|M02 Identity, Authentication & Access Control|Session management|
|IAM-007|M02 Identity, Authentication & Access Control|MFA (TOTP + recovery codes)|
|IAM-008|M02 Identity, Authentication & Access Control|SSO (SAML/OIDC)|
|IAM-009|M02 Identity, Authentication & Access Control|SCIM provisioning|
|IAM-010|M02 Identity, Authentication & Access Control|Passkeys (WebAuthn)|



|IAM-011|M02 Identity, Authentication & Access Control|Invite user|
| - | - | - |
|IAM-012|M02 Identity, Authentication & Access Control|Accept invitation|
|IAM-013|M02 Identity, Authentication & Access Control|Membership lifecycle|
|IAM-014|M02 Identity, Authentication & Access Control|Global identity, membership cap|
|IAM-015|M02 Identity, Authentication & Access Control|Tenant switcher|
|IAM-016|M02 Identity, Authentication & Access Control|Link user to employee|
|IAM-017|M02 Identity, Authentication & Access Control|Permission catalog|
|IAM-018|M02 Identity, Authentication & Access Control|System role templates|
|IAM-019|M02 Identity, Authentication & Access Control|Custom roles|
|IAM-020|M02 Identity, Authentication & Access Control|Role grants with scope and validity|
|IAM-021|M02 Identity, Authentication & Access Control|Permission ceiling & no self-elevation|
|IAM-022|M02 Identity, Authentication & Access Control|Scope resolver|
|IAM-023|M02 Identity, Authentication & Access Control|Multi-role union|
|IAM-024|M02 Identity, Authentication & Access Control|Field-level classification|
|IAM-025|M02 Identity, Authentication & Access Control|Break-glass access|
|IAM-026|M02 Identity, Authentication & Access Control|Access review report|
|ORG-001|M03 Organization Management|Legal entities|
|ORG-002|M03 Organization Management|Statutory registrations|
|ORG-003|M03 Organization Management|Locations with geofence|
|ORG-004|M03 Organization Management|Branches|
|ORG-005|M03 Organization Management|Departments tree|
|ORG-006|M03 Organization Management|Designations|
|ORG-007|M03 Organization Management|Grades/bands|
|ORG-008|M03 Organization Management|Cost centers|
|ORG-009|M03 Organization Management|Employment types|
|ORG-010|M03 Organization Management|Org chart|
|ORG-011|M03 Organization Management|Master deactivation guard|
|EMP-001|M04 Employee Management|Create employee|



|EMP-002|M04 Employee Management|Employee profile view/edit|
| - | - | - |
|EMP-003|M04 Employee Management|Employee list & search|
|EMP-004|M04 Employee Management|Effective-dated assignments|
|EMP-005|M04 Employee Management|Lifecycle events|
|EMP-006|M04 Employee Management|Future-dated changes job|
|EMP-007|M04 Employee Management|Manager cycle prevention|
|EMP-008|M04 Employee Management|Status machine|
|EMP-009|M04 Employee Management|Personal, family, education, experience|
|EMP-010|M04 Employee Management|Bank accounts (restricted)|
|EMP-011|M04 Employee Management|Statutory IDs (restricted)|
|EMP-012|M04 Employee Management|Probation tracking|
|EMP-013|M04 Employee Management|Employee directory|
|EMP-014|M04 Employee Management|Employee export|
|EMP-015|M04 Employee Management|Archive/soft-delete employee|
|EMP-016|M04 Employee Management|Work anniversaries & birthdays feed|
|ESS-001|M05 Employee Self-Service|My profile|
|ESS-002|M05 Employee Self-Service|Profile change requests|
|ESS-003|M05 Employee Self-Service|My requests hub|
|ESS-004|M05 Employee Self-Service|Home dashboard (employee)|
|ESS-005|M05 Employee Self-Service|My team view|
|ESS-006|M05 Employee Self-Service|Privacy notice acknowledgement|
|ESS-007|M05 Employee Self-Service|My data download|
|DOC-001|M06 Documents Management|Upload intent & presigned PUT|
|DOC-002|M06 Documents Management|Malware scan before availability|
|DOC-003|M06 Documents Management|Signed download|
|DOC-004|M06 Documents Management|Document types config|
|DOC-005|M06 Documents Management|Employee documents|
|DOC-006|M06 Documents Management|Expiry tracking|
|DOC-007|M06 Documents Management|Company policies & acknowledgement|
|DOC-008|M06 Documents Management|Letter templates & generation|
|DOC-009|M06 Documents Management|E-sign integration|
|DOC-010|M06 Documents Management|Company document library|
|REC-001|M07 Recruitment (ATS)|Manpower requisition|
|REC-002|M07 Recruitment (ATS)|Job creation & posting|
|REC-003|M07 Recruitment (ATS)|Careers page & apply|
|REC-004|M07 Recruitment (ATS)|Job board distribution|
|REC-005|M07 Recruitment (ATS)|Employee referrals|
|REC-006|M07 Recruitment (ATS)|Candidate database|
|REC-007|M07 Recruitment (ATS)|Configurable pipeline|
|REC-008|M07 Recruitment (ATS)|Resume parsing|
|REC-009|M07 Recruitment (ATS)|Candidate consent & retention|
|REC-010|M07 Recruitment (ATS)|Interview scheduling|



|REC-011|M07 Recruitment (ATS)|Scorecards & blind feedback|
| - | - | - |
|REC-012|M07 Recruitment (ATS)|Offer management|
|REC-013|M07 Recruitment (ATS)|Candidate offer portal|
|REC-014|M07 Recruitment (ATS)|Convert to employee|
|REC-015|M07 Recruitment (ATS)|Recruitment analytics|
|ONB-001|M08 Onboarding & Pre-joining|Onboarding templates|
|ONB-002|M08 Onboarding & Pre-joining|Onboarding case & tasks|
|ONB-003|M08 Onboarding & Pre-joining|Pre-joining portal|
|ONB-004|M08 Onboarding & Pre-joining|Document verification|
|ONB-005|M08 Onboarding & Pre-joining|Mark joined / no-show|
|ONB-006|M08 Onboarding & Pre-joining|Buddy & induction|
|OFB-001|M09 Offboarding & Exit|Resignation submission|
|OFB-002|M09 Offboarding & Exit|Resignation acceptance & notice|
|OFB-003|M09 Offboarding & Exit|Termination & retirement|
|OFB-004|M09 Offboarding & Exit|Clearance checklist|
|OFB-005|M09 Offboarding & Exit|Exit interview|
|OFB-006|M09 Offboarding & Exit|Access revocation at last day|
|OFB-007|M09 Offboarding & Exit|Relieving & experience letters|
|OFB-008|M09 Offboarding & Exit|Rehire eligibility|
|ATT-001|M10 Attendance & Time|Web punch (4 events)|
|ATT-002|M10 Attendance & Time|Mobile GPS punch|
|ATT-003|M10 Attendance & Time|Selfie punch|
|ATT-004|M10 Attendance & Time|IP restriction|
|ATT-005|M10 Attendance & Time|Biometric device integration|
|ATT-006|M10 Attendance & Time|Kiosk punch|
|ATT-007|M10 Attendance & Time|Offline mobile punch sync|
|ATT-008|M10 Attendance & Time|Attendance day computation|
|ATT-009|M10 Attendance & Time|Timezone & overnight work date|
|ATT-010|M10 Attendance & Time|Attendance policies (versioned)|
|ATT-011|M10 Attendance & Time|Nightly finaliser|
|ATT-012|M10 Attendance & Time|Attendance views|
|ATT-013|M10 Attendance & Time|Regularization|
|ATT-014|M10 Attendance & Time|On-duty / WFH requests|
|ATT-015|M10 Attendance & Time|Overtime capture & approval|
|ATT-016|M10 Attendance & Time|Attendance period lock|
|ATT-017|M10 Attendance & Time|Contractor timesheets|
|ATT-018|M10 Attendance & Time|Attendance reports|
|SFT-001|M11 Shift & Roster|Shift templates|
|SFT-002|M11 Shift & Roster|Weekly-off patterns|



|SFT-003|M11 Shift & Roster|Roster planning & publish|
| - | - | - |
|SFT-004|M11 Shift & Roster|Shift swap requests|
|SFT-005|M11 Shift & Roster|Roster coverage report|
|LV-001|M12 Leave Management|Leave types|
|LV-002|M12 Leave Management|Leave policies (versioned)|
|LV-003|M12 Leave Management|Holiday calendars|
|LV-004|M12 Leave Management|Leave ledger & balances|
|LV-005|M12 Leave Management|Apply leave|
|LV-006|M12 Leave Management|Approve / reject leave|
|LV-007|M12 Leave Management|Cancel leave|
|LV-008|M12 Leave Management|Leave on behalf|
|LV-009|M12 Leave Management|Accrual job|
|LV-010|M12 Leave Management|Year-end processing|
|LV-011|M12 Leave Management|Comp-off|
|LV-012|M12 Leave Management|Sandwich & holiday exclusion|
|LV-013|M12 Leave Management|Team leave calendar|
|LV-014|M12 Leave Management|Leave reports|
|LV-015|M12 Leave Management|Opening balance import|
|PAY-001|M13 Payroll|Salary components|
|PAY-002|M13 Payroll|Formula DSL engine|
|PAY-003|M13 Payroll|Salary structures|
|PAY-004|M13 Payroll|Employee compensation & revisions|
|PAY-005|M13 Payroll|Bulk revision upload|
|PAY-006|M13 Payroll|Payroll calendars & periods|
|PAY-007|M13 Payroll|Payroll inputs|
|PAY-008|M13 Payroll|Run payroll (calculate)|
|PAY-009|M13 Payroll|Variance review|
|PAY-010|M13 Payroll|Maker-checker approval & lock|
|PAY-011|M13 Payroll|Bank payment file & confirmation|
|PAY-012|M13 Payroll|Payslips|
|PAY-013|M13 Payroll|Off-cycle runs|
|PAY-014|M13 Payroll|Loans & advances|
|PAY-015|M13 Payroll|Full & final settlement|
|PAY-016|M13 Payroll|Payroll exchange (export/import)|
|PAY-017|M13 Payroll|GL journal export|
|PAY-018|M13 Payroll|Payroll reports|
|PAY-019|M13 Payroll|Parallel run & go-live gate|
|STA-001|M14 Statutory Compliance & Tax (India)|Statutory rule sets|
|STA-002|M14 Statutory Compliance & Tax (India)|PF (EPF/EPS/EDLI)|
|STA-003|M14 Statutory Compliance & Tax (India)|ESI|
|STA-004|M14 Statutory Compliance & Tax (India)|Professional Tax|
|STA-005|M14 Statutory Compliance & Tax (India)|Labour Welfare Fund|



|STA-006|M14 Statutory Compliance & Tax (India)|Tax regime & declarations|
| - | - | - |
|STA-007|M14 Statutory Compliance & Tax (India)|Proof submission & verification|
|STA-008|M14 Statutory Compliance & Tax (India)|TDS computation|
|STA-009|M14 Statutory Compliance & Tax (India)|Form 16 & 24Q|
|STA-010|M14 Statutory Compliance & Tax (India)|Gratuity & bonus registers|
|STA-011|M14 Statutory Compliance & Tax (India)|Compliance calendar|
|PRF-001|M15 Performance Management|Review cycles|
|PRF-002|M15 Performance Management|Goals / OKRs|
|PRF-003|M15 Performance Management|KPI library|
|PRF-004|M15 Performance Management|Continuous check-ins & 1:1s|
|PRF-005|M15 Performance Management|Self & manager reviews|
|PRF-006|M15 Performance Management|360 / peer feedback|
|PRF-007|M15 Performance Management|Calibration|
|PRF-008|M15 Performance Management|Release & acknowledgement|
|PRF-009|M15 Performance Management|Increment & promotion recommendations|
|PRF-010|M15 Performance Management|PIP|
|PRF-011|M15 Performance Management|Cycle lock & reopen|
|LMS-001|M16 Learning Management|Course catalog|
|LMS-002|M16 Learning Management|Assignments & auto-assign rules|
|LMS-003|M16 Learning Management|Learner experience|
|LMS-004|M16 Learning Management|Assessments|
|LMS-005|M16 Learning Management|Training calendar & sessions|
|LMS-006|M16 Learning Management|Certifications with expiry|
|LMS-007|M16 Learning Management|Training requests & budget|
|AST-001|M17 Asset Management|Asset categories & catalog|
|AST-002|M17 Asset Management|Inventory|
|AST-003|M17 Asset Management|Asset requests|
|AST-004|M17 Asset Management|Allocation & acknowledgement|
|AST-005|M17 Asset Management|Return, transfer, repair, retire|
|AST-006|M17 Asset Management|Asset reports|
|HLP-001|M18 Helpdesk|Ticket categories & SLA|
|HLP-002|M18 Helpdesk|Raise & track tickets|
|HLP-003|M18 Helpdesk|Agent workspace|
|HLP-004|M18 Helpdesk|SLA timers & escalation|
|HLP-005|M18 Helpdesk|Knowledge base|
|HLP-006|M18 Helpdesk|CSAT & helpdesk reports|
|EXP-001|M19 Expense Management|Expense policies|
|EXP-002|M19 Expense Management|Submit claim with receipts|
|EXP-003|M19 Expense Management|Approve / audit claims|
|EXP-004|M19 Expense Management|Advances|
|EXP-005|M19 Expense Management|Reimbursement payout|
|EXP-006|M19 Expense Management|Expense reports|
|TRV-001|M20 Travel Management|Travel policies|
|TRV-002|M20 Travel Management|Travel request|
|TRV-003|M20 Travel Management|Travel desk bookings|



|TRV-004|M20 Travel Management|Trip settlement|
| - | - | - |
|ENG-001|M21 Announcements, Surveys & Engagement|Announcements|
|ENG-002|M21 Announcements, Surveys & Engagement|Polls|
|ENG-003|M21 Announcements, Surveys & Engagement|Surveys & eNPS|
|ENG-004|M21 Announcements, Surveys & Engagement|Recognition & badges|
|ENG-005|M21 Announcements, Surveys & Engagement|Social feed moderation|
|RPT-001|M22 Reports & Dashboards|Role dashboards|
|RPT-002|M22 Reports & Dashboards|Standard report library|
|RPT-003|M22 Reports & Dashboards|Export jobs|
|RPT-004|M22 Reports & Dashboards|Scheduled reports|
|RPT-005|M22 Reports & Dashboards|Headcount & attrition analytics|
|RPT-006|M22 Reports & Dashboards|Custom report builder|
|RPT-007|M22 Reports & Dashboards|Analytics warehouse|
|AUD-001|M23 Audit & Compliance|Audit event writer|
|AUD-002|M23 Audit & Compliance|Audit search|
|AUD-003|M23 Audit & Compliance|Audit export|
|AUD-004|M23 Audit & Compliance|Restricted data access log|
|AUD-005|M23 Audit & Compliance|Retention & legal hold|
|AUD-006|M23 Audit & Compliance|DPDP data-principal requests|
|AUD-007|M23 Audit & Compliance|Login history|
|AUD-008|M23 Audit & Compliance|POSH case log (restricted)|
|NTF-001|M24 Notification System|Transactional outbox|
|NTF-002|M24 Notification System|In-app notification center|
|NTF-003|M24 Notification System|Email delivery|
|NTF-004|M24 Notification System|Templates|
|NTF-005|M24 Notification System|User preferences & quiet hours|
|NTF-006|M24 Notification System|SMS & WhatsApp|
|NTF-007|M24 Notification System|Push notifications|
|NTF-008|M24 Notification System|Daily digests|
|WF-001|M25 Workflow Engine|Workflow definitions & versions|
|WF-002|M25 Workflow Engine|Approval runtime|
|WF-003|M25 Workflow Engine|Approval inbox|
|WF-004|M25 Workflow Engine|Self-approval prevention & fallback|
|WF-005|M25 Workflow Engine|SLA, reminders, escalation|
|WF-006|M25 Workflow Engine|Delegation|
|WF-007|M25 Workflow Engine|Email/mobile action links|
|WF-008|M25 Workflow Engine|Visual workflow builder|
|INT-001|M26 Integrations & API Platform|Outbound webhooks|
|INT-002|M26 Integrations & API Platform|Public API keys|
|INT-003|M26 Integrations & API Platform|Calendar integration|
|INT-004|M26 Integrations & API Platform|Accounting connectors|
|INT-005|M26 Integrations & API Platform|Slack / Teams|
|INT-006|M26 Integrations & API Platform|Integration health|
|MOB-001|M27 Mobile App|Mobile auth & device binding|
|MOB-002|M27 Mobile App|Mobile ESS|
|MOB-003|M27 Mobile App|Mobile manager approvals|



|MOB-004|M27 Mobile App|Mobile expense capture|
| - | - | - |
|MOB-005|M27 Mobile App|Mobile security controls|
|SEC-001|M28 Security & Data Protection|Tenant context & isolation suite|
|SEC-002|M28 Security & Data Protection|Field encryption & blind index|
|SEC-003|M28 Security & Data Protection|Rate limiting & WAF|
|SEC-004|M28 Security & Data Protection|Security headers, CSP, CSRF|
|SEC-005|M28 Security & Data Protection|Secrets & key management|
|SEC-006|M28 Security & Data Protection|Security scanning in CI|
|SEC-007|M28 Security & Data Protection|Penetration test & remediation|
|IMP-001|M29 Data Import / Export|Import framework|
|IMP-002|M29 Data Import / Export|Employee import|
|IMP-003|M29 Data Import / Export|Other imports|
|FIN-001|M30 Finance Core (optional)|Accounting books & COA|
|FIN-002|M30 Finance Core (optional)|Fiscal periods & close|
|FIN-003|M30 Finance Core (optional)|Journals with maker-checker|
|FIN-004|M30 Finance Core (optional)|Financial reports|
|AI-001|M31 AI HR Assistant|Policy Q&A assistant|
|AI-002|M31 AI HR Assistant|Resume summarisation|
|AI-003|M31 AI HR Assistant|Review writing assistance|



||||
| - | - | - |
||||
||||
|**Description**|**Priority**|**Phase**|
|Visitor creates tenant, default legal entity, owner user, membership and pending subscription in one transaction|P0|1|
|Signup email verified with single-use token before tenant review|P0|1|
|SA approves or rejects pending tenants; auto-approve mode configurable|P0|1|
|Lifecycle transitions with reason, audit and owner notification|P0|1|
|Seed system roles, leave types, workflows, templates, holiday template on activation; idempotent|P0|1|
|Seven-step wizard: profile, entity, locations, departments, work policy, leave, invite users; tracks setup status|P0|1|
|Locale, timezone, week start, branding, security policy (MFA, session timeout, password)|P0|1|
|Owner requests full export (JSON/CSV/files ZIP); link expires 24 h|P1|8|
|Platform defines plans, versions, modules, seat price, limits|P0|1|
|pending to trial (14 d at activation) to active/past\_due/suspended/cancelled/expired|P0|1|
|Module and limit checks per request from plan entitlements|P0|1|
|Block new active employees beyond seat limit with upgrade prompt|P1|8|
|Generate invoices from subscription, record payments, allocate, credit notes; immutable numbering|P2|8|
|Razorpay/Stripe autopay, retries, past\_due handling, suspension after grace|P2|8|
|Trial ending 7/3/1 days, payment due, suspended|P0|1|
|Per-tenant and global flags for gated features|P0|1|
|Login with lockout, tenant status check, membership resolution|P0|1|
|Revoke current session|P0|1|
|HttpOnly Secure SameSite=Lax cookies; 15 min access, 30 d refresh, rotate, family revoke on reuse; CSRF|P0|1|
|Email token 30 min single-use; revokes all sessions|P0|1|
|Authenticated change with current password; breached-password check|P0|1|
|List and revoke own sessions; admin revoke user sessions|P0|1|
|Enroll, verify, recovery codes, mandatory for privileged roles, step-up for restricted actions|P0|1|
|Per-tenant SSO with Google, Microsoft Entra, Okta; enforce-SSO toggle|P1|8|
|SCIM 2.0 users and groups endpoints|P2|8|
|Passwordless sign-in and MFA via passkeys|P2|8|



|Invite email with role; token 72 h single-use; role ownership check|P0|1|
| - | - | -: |
|Set password, verify, activate membership|P0|1|
|Activate, suspend, revoke membership; revoke sessions|P0|1|
|Email globally unique; max memberships per user configurable (default 1)|P0|1|
|Users with several memberships pick tenant; caches cleared on switch|P1|7|
|Optional 1:1 link membership to employee within tenant|P0|2|
|Global platform-owned catalog of permission keys|P0|1|
|17 read-only templates seeded|P0|1|
|Create/clone roles from catalog only|P0|1|
|Grant role to membership with scope type/IDs and optional validity window|P0|1|
|Grantor cannot grant beyond own permissions; no self-grants; platform roles unassignable|P0|1|
|SELF, TEAM, TEAM\_TREE, DEPARTMENT, LOCATION, LEGAL\_ENTITY, ORGANIZATION, ASSIGNED|P0|1|
|Union permissions, broader scope wins, no DENY|P0|1|
|Public/Internal/Sensitive/Restricted serialisation and reveal|P0|2|
|Time-limited, approved, audited platform access to a tenant|P1|6|
|Periodic list of roles, grants, restricted readers for review|P1|6|
|CRUD legal entities with statutory registrations (PAN, TAN, GSTIN, PF, ESI, PT, LWF)|P0|1|
|Encrypted registration numbers per entity and state|P1|4|
|Address, state, timezone, geofence radius|P0|1|
|Optional grouping of locations|P1|2|
|Hierarchical departments with head|P0|1|
|Job titles|P0|1|
|Grade ladder with optional pay range|P0|2|
|Cost centers with owner; split allocation on assignment|P1|4|
|Full-time, part-time, contract, intern, consultant|P0|1|
|Interactive chart from current assignments|P0|2|
|Block deactivation when active employees reference master; require reassignment|P0|1|
|Create with mandatory fields; prehire status; number series|P0|2|



|Tabs: personal, contact, job, documents, attendance, leave, payroll, performance, audit|P0|2|
| - | - | -: |
|Server-side filters, sort, cursor pagination, saved views|P0|2|
|Entity, location, dept, designation, grade, manager, cost center with history|P0|2|
|Confirm, transfer, promote, redesignate, long leave, suspend, rehire with reason|P0|2|
|Nightly job applies future assignments and status changes|P0|2|
|Reject cyclic reporting lines|P0|2|
|prehire/active/on\_probation/on\_notice/long\_leave/inactive/terminated transitions|P0|2|
|Sub-records on profile|P0|2|
|Encrypted account, IFSC, primary flag, change approval|P0|2|
|PAN, Aadhaar reference (last4), UAN, ESIC IP, passport|P0|2|
|Probation end date, confirmation task 15 days before|P1|2|
|Public fields, search, hide personal mobile|P0|2|
|Export with scope and field-class rules|P0|2|
|Archive records needed for history|P0|2|
|Opt-in celebrations|P2|6|
|View own profile; edit allowed fields|P0|2|
|Approval for restricted fields (name, bank, PAN)|P0|2|
|All request types with status timeline|P0|2|
|Punch widget, balances, tasks, announcements, holidays|P0|2|
|Manager sees direct reports, presence today, pending items|P0|3|
|Employee acknowledges privacy notice at first login|P0|2|
|Employee downloads own data (DPDP access)|P1|6|
|Create file row, presign S3 PUT, complete upload|P0|2|
|ClamAV scan; quarantined/active/infected|P0|2|
|Authorise parent record then 5-min signed URL; audit restricted|P0|2|
|Mandatory, expiry, visibility, retention per type|P0|2|
|Attach, verify, reject, version employee documents|P0|2|
|Reminders 30/15/7/0 days; flags|P0|2|
|Publish versioned policies to audiences; track acknowledgement|P1|2|
|Merge-field templates; generate PDF letters (offer, appointment, confirmation, increment, relieving, experience)|P1|5|
|Send letters for e-sign (Leegality/DocuSign)|P2|8|
|Folders, access by audience|P1|6|
|Raise requisition with headcount, budget, justification; approval workflow|P1|5|
|Job from approved requisition; description, skills, publish to careers page|P1|5|
|Public branded careers page; apply form with consent|P1|5|
|Push jobs to LinkedIn, Naukri, Indeed via integration|P2|8|
|Employees refer candidates; referral status and bonus eligibility|P1|5|
|Profiles, resumes, tags, dedupe on email/mobile, merge|P1|5|
|Stage templates per job; drag-drop stage moves with reason|P1|5|
|Extract fields from PDF/DOCX resumes|P2|8|
|Consent capture; anonymise after retention|P1|5|
|Schedule rounds, panel, calendar invites, reschedule|P1|5|



|Structured scorecard; interviewer sees others' feedback only after submitting|P1|5|
| - | - | -: |
|Draft offer from grade band; approval if out of band; letter; send|P1|5|
|Accept/decline offer via tokenised link|P1|5|
|Accepted offer creates prehire employee and onboarding case|P1|5|
|Funnel, time-to-hire, source effectiveness|P1|6|
|Task templates by entity/department/type/location with offsets|P1|5|
|Case per joiner; tasks to HR/IT/manager/finance/employee; progress|P1|5|
|Token portal for personal data, bank, PAN, education, documents, Form 11|P1|5|
|HR verifies or rejects submitted documents|P1|5|
|Joined activates employee and invite; no-show closes case|P1|5|
|Assign buddy; induction schedule; 30/60/90-day check-ins|P2|6|
|Employee resigns with reason and proposed last day; withdrawal|P1|5|
|Manager/HR accept, adjust last day, waive or recover notice|P1|5|
|HR initiates termination with category and document|P1|5|
|Department clearances (IT, assets, finance, admin, manager)|P1|5|
|Questionnaire; HR-only visibility|P1|5|
|Job revokes sessions/login at last-day end|P1|5|
|Generate after F&F|P1|5|
|Restricted flag with reason|P2|5|
|CHECK\_IN, BREAK\_START, BREAK\_END, CHECK\_OUT with transition rules and idempotency|P0|3|
|Geofence check, accuracy, block/flag per policy|P1|7|
|Photo captured with punch; 90-day retention|P2|7|
|Web punch only from allowed IP ranges|P1|3|
|Register devices; pull/push sync; map device user IDs; exceptions queue|P1|6|
|Shared tablet with PIN/QR|P2|8|
|Queue with device time and idempotency; drift flag|P1|7|
|Upsert + FOR UPDATE per employee/day; minutes, status from versioned policy|P0|3|
|Work date from shift timezone; overnight attaches to start date|P0|3|
|Grace, late mark, half/full day, rounding, capture modes, geofence action|P0|3|
|Mark absent/missing punch, auto-checkout per policy|P0|3|
|My attendance calendar; team; org muster|P0|3|
|Request corrected punches within window/limits; approval; correction punches|P0|3|
|Mark days without punches on approval|P0|3|
|OT minutes beyond threshold; approval; to payroll or comp-off|P1|3|
|Lock per entity per period; unlock with reason|P0|3|
|Daily/weekly hours by project for contractors|P2|8|
|Muster roll, monthly register, late/early, absenteeism, OT, geo map|P0|3|
|Start/end, breaks, thresholds, overnight, punch window|P0|3|
|Fixed, alternate Saturdays, rotational|P0|3|



|Grid roster per employee per date; bulk assign; publish|P1|3|
| - | - | -: |
|Peer swap with both + manager approval; rest-gap rule|P2|3|
|Coverage by location/hour|P2|6|
|Paid/unpaid, balance-tracked, unit, colour|P0|3|
|Eligibility, accrual, caps, carry-forward, encashment, sandwich, notice, docs, half-day|P0|3|
|Per entity + location; mandatory and restricted holidays|P0|3|
|Append-only ledger; locked balance projection|P0|3|
|Dates, half-day, reason, attachment; reserve on submit|P0|3|
|Convert or release reservation; attendance sync|P0|3|
|Cancel pending (release) or approved (approval + reversal)|P0|3|
|HR applies for an employee|P1|3|
|Monthly/quarterly/annual accrual with pro-rata|P1|3|
|Carry-forward, lapse, encashment entries; idempotent|P1|3|
|Credit from OT/holiday work; expiry|P1|3|
|Exclude holidays/weekly-offs unless sandwich rule|P0|3|
|Calendar of team leaves and holidays|P0|3|
|Balance register, availed, liability, LOP for payroll|P0|3|
|Import balances at go-live as opening ledger entries|P0|3|
|Category, method, proration, taxable/PF/ESI flags, rounding, GL mapping|P1|4|
|Sandboxed expression language with versioning and tests|P1|4|
|CTC templates by grade/entity|P1|4|
|Effective-dated CTC; revisions create arrears|P1|4|
|Annual increments via import with approval|P1|6|
|Frequency, cut-off, pay date per entity|P1|4|
|Variable pay, one-time earnings/deductions, LOP review|P1|4|
|Snapshot inputs; chunked calculation; line explanations|P1|4|
|Compare to previous month; flag >20% changes|P1|4|
|Submit, approve (not by calculator), lock immutable|P1|4|
|Bank templates; payment status from confirmation|P1|4|
|Password-protected PDF from locked snapshot; publish; YTD|P1|4|
|Bonus, arrears, corrections, F&F runs|P1|4|
|Principal, EMI, interest, schedule, foreclosure|P1|6|
|Itemised F&F with sources and approvals|P1|5|
|Versioned export templates; idempotent import of provider results; reconciliation|P1|4|
|Payroll and reimbursement journals to Tally XML, Zoho Books, CSV|P1|4|
|Register, salary sheet, bank advice, CTC, arrears, loans|P1|4|
|Compare native output with trusted payroll for N periods|P1|4|
|Versioned rules with source, effective dates, approver, hash|P1|4|
|Wage base, ceilings, opt-out, contributions, ECR file|P1|4|
|Eligibility per contribution period, contributions, file|P1|4|
|State slabs from work location; monthly deduction; challan data|P1|4|
|State LWF contributions|P2|4|



|Regime choice, investment declarations by section, HRA, previous employer|P1|4|
| - | - | -: |
|Upload proofs; payroll verifies; variance applied|P1|4|
|Projected annual income, monthly TDS, higher rate without PAN|P1|4|
|Quarterly 24Q data; Form 16 Part B generation and publish|P1|4|
|Eligibility and computation registers|P2|4|
|Due dates for PF, ESI, PT, TDS with reminders|P1|4|
|Cycle config: eligibility snapshot, phases, scale, weightage|P1|6|
|SMART goals with weightage 100%, cascading, progress|P1|6|
|KPIs by designation/department|P1|6|
|Notes, agreed actions|P1|6|
|Forms, ratings, comments, submit|P1|6|
|Request feedback; anonymity threshold|P1|6|
|Adjust ratings with reason; distribution view; 9-box|P1|6|
|Release ratings; employee acknowledges or disagrees|P1|6|
|Recommendations handed to compensation after HR approval|P2|6|
|Performance improvement plans with check-ins and outcome|P2|6|
|Close locks; HR reopen with reason|P1|6|
|Courses: video, doc, SCORM, classroom, external|P2|8|
|Assign manually or by rule (new joiner, department)|P2|8|
|My learning, progress, completion|P2|8|
|Question bank, pass mark, attempts|P2|8|
|Classroom sessions, capacity, attendance|P2|8|
|Record certificates; reminders 60/30/7|P2|8|
|Request external training; approval; budget tracking|P2|8|
|Categories, models, attributes|P1|6|
|Items with tag, serial, purchase, warranty, depreciation fields|P1|6|
|Employee requests asset; approval|P1|6|
|Allocate with condition/photos; employee acknowledges|P1|6|
|Return inspection; damage recovery; status changes|P1|6|
|Register, by employee, unreturned on exit, warranty expiry|P1|6|
|Categories, groups, SLA per priority, business hours, confidentiality|P2|8|
|Employee raises; status; attachments; reopen|P2|8|
|Queue, assign, internal notes, canned responses|P2|8|
|Pause on awaiting employee; escalate on breach|P2|8|
|Articles suggested while typing|P2|8|
|Satisfaction rating; volume, SLA %, backlog|P2|8|
|Limits by category x grade x location; receipt thresholds; per-diem; mileage|P1|6|
|Lines, receipts, currency, duplicate detection|P1|6|
|Manager approve; finance audit; line-level decisions|P1|6|
|Request, approve, pay, settle against claims|P1|6|
|Via payroll component or bank file; idempotent paid status|P1|6|
|By status, category, policy violations, outstanding advances|P1|6|
|Class, hotel caps, advance booking by grade|P2|8|
|Trip with legs, stay, estimate, advance|P2|8|
|Upload confirmations and tickets|P2|8|



|Expenses linked to trip; advance auto-settled|P2|8|
| - | - | -: |
|Targeted, scheduled, pinned; mandatory read receipts|P1|6|
|Quick single-question polls|P2|6|
|Question types; anonymity modes; threshold results|P1|6|
|Peer kudos tied to values; optional points|P2|6|
|Likes, comments, report, hide|P2|6|
|Employee, manager, HR, payroll, owner home dashboards|P0|2|
|Catalog of 64 reports with filters and saved views|P0|2|
|CSV/XLSX/PDF exports, background, expiring links, audited|P0|2|
|Email link on schedule|P1|6|
|Point-in-time headcount, joiners/leavers, attrition %|P0|2|
|Pick fields, filters, grouping within scope|P2|8|
|Nightly CDC to analytics store; dashboards|P2|8|
|Append-only events in business transaction with masked diffs|P0|1|
|Filter by actor, entity, action, date; scope applies|P0|2|
|Export evidence packs|P1|6|
|Log reveals and restricted downloads|P0|2|
|Per-class retention jobs; legal hold overrides purge|P1|7|
|Access, correction, erasure, grievance with due dates|P1|7|
|Per-user login events and devices|P0|1|
|Confidential case register for ICC|P2|8|
|Same-transaction outbox; lease, backoff, DLQ, replay|P0|1|
|Bell, read/unread, deep links|P0|1|
|Resend primary, SES fallback; bounces|P0|1|
|System + tenant overrides; security-critical locked; sanitised|P0|1|
|Mute non-mandatory categories; quiet hours|P1|6|
|DLT-approved templates via MSG91/Gupshup|P2|7|
|FCM/APNs for mobile|P1|7|
|Pending approvals and team-on-leave digests|P1|6|
|Steps, approver types, modes, conditions; publish versions|P0|1|
|Instances pin version; resolve approvers; tasks; callbacks|P0|1|
|Unified inbox with filters, bulk approve, reason|P0|1|
|Escalate when approver is requester; fallback for vacant manager|P0|1|
|Per-step SLA; reminders; escalate/auto-action|P1|6|
|Delegate approvals for date range|P1|6|
|Signed single-use links re-checking permissions|P1|6|
|Drag-drop builder UI over WF-001|P2|6|
|Event subscriptions, HMAC signing, retries, auto-disable|P1|6|
|Scoped, expiring, hashed keys; rate limits|P1|8|
|Google/Microsoft calendar for interviews and leave|P1|5|
|Tally, Zoho Books, QuickBooks exports/push|P1|6|
|Notifications and approvals in chat|P2|8|
|Status, last sync, failure alerts|P1|6|
|OAuth PKCE, secure storage, biometric unlock, remote logout|P1|7|
|Home, punch, leave, payslips, directory, announcements|P1|7|
|Approval inbox with push|P1|7|



|Receipt camera, OCR, draft claims|P2|7|
| - | - | -: |
|Root/jailbreak and mock-location detection; no unencrypted caching|P1|7|
|Server-derived context; composite FKs; RLS; 404 masking; automated suite on every PR|P0|1|
|Envelope encryption per tenant data key; HMAC index|P0|2|
|Per-IP/user/tenant limits; WAF rules|P0|1|
|Helmet, CSP nonces, CSRF double-submit|P0|1|
|Secrets Manager, KMS, rotation|P0|1|
|SAST, dependency, container, secret scans|P0|1|
|Annual third-party test before first enterprise go-live|P1|7|
|Upload, scan, stage, validate, preview, commit, results|P0|2|
|Employees + assignments + contacts + bank|P0|2|
|Leave balances, punches, holidays, compensation, assets, YTD payroll|P1|4|
|Books per entity; chart of accounts tree|P2|8|
|Open/closing/closed; checklist; reopen with approval|P2|8|
|Draft, submit, approve, post, reverse; balanced|P2|8|
|Trial balance, GL, P&L, balance sheet|P2|8|
|Answers from caller-accessible policies with citations|P2|8|
|Summaries for recruiters|P2|8|
|Draft review comments from goals/check-ins|P2|8|



|||||
| - | - | - | - |
|||||
|||||
|**Size**|**Story Points**|**Epic**|**Status**|
|L|8|Tenant & Subscription Management - Tenant signup & lifecycle|Merged|
|S|3|Tenant & Subscription Management - Tenant signup & lifecycle|Confirmed|
|M|5|Tenant & Subscription Management - Tenant signup & lifecycle|Merged|
|M|5|Tenant & Subscription Management - Tenant signup & lifecycle|Resolved CF-17|
|M|5|Tenant & Subscription Management - Tenant signup & lifecycle|Confirmed|
|L|8|Tenant & Subscription Management - Tenant signup & lifecycle|Merged|
|M|5|Tenant & Subscription Management - Tenant signup & lifecycle|Merged|
|L|8|Tenant & Subscription Management - Tenant signup & lifecycle (Phase 8)|New|
|M|5|Tenant & Subscription Management - Subscription & billing|Merged|
|M|5|Tenant & Subscription Management - Subscription & billing|Resolved CF-38|
|M|5|Tenant & Subscription Management - Subscription & billing|Merged|
|S|3|Tenant & Subscription Management - Subscription & billing (Phase 8)|Confirmed|
|XL|13|Tenant & Subscription Management - Subscription & billing (Phase 8)|Gated|
|L|8|Tenant & Subscription Management - Subscription & billing (Phase 8)|Gated|
|S|3|Tenant & Subscription Management - Subscription & billing|Confirmed|
|S|3|Tenant & Subscription Management - Subscription & billing|Confirmed|
|M|5|Identity, Authentication & Access Control - Authentication|Merged|
|S|3|Identity, Authentication & Access Control - Authentication|Confirmed|
|L|8|Identity, Authentication & Access Control - Authentication|Resolved CF-10|
|S|3|Identity, Authentication & Access Control - Authentication|Confirmed|
|S|3|Identity, Authentication & Access Control - Authentication|New|
|S|3|Identity, Authentication & Access Control - Authentication|Confirmed|
|L|8|Identity, Authentication & Access Control - Authentication|Resolved CF-36|
|XL|13|Identity, Authentication & Access Control - Authentication (Phase 8)|Confirmed|
|L|8|Identity, Authentication & Access Control - Authentication (Phase 8)|New|
|M|5|Identity, Authentication & Access Control - Authentication (Phase 8)|New|



|M|5|Identity, Authentication & Access Control - Users, memberships & invitations|Merged|
| - | -: | - | - |
|S|3|Identity, Authentication & Access Control - Users, memberships & invitations|Confirmed|
|S|3|Identity, Authentication & Access Control - Users, memberships & invitations|Resolved CF-02|
|S|3|Identity, Authentication & Access Control - Users, memberships & invitations|Resolved CF-02|
|S|3|Identity, Authentication & Access Control - Users, memberships & invitations (Phase 7)|Confirmed|
|S|3|Identity, Authentication & Access Control - Users, memberships & invitations (Phase 2)|Confirmed|
|M|5|Identity, Authentication & Access Control - Roles & permissions|Confirmed|
|S|3|Identity, Authentication & Access Control - Roles & permissions|Confirmed|
|M|5|Identity, Authentication & Access Control - Roles & permissions|Merged|
|L|8|Identity, Authentication & Access Control - Roles & permissions|Resolved CF-32|
|M|5|Identity, Authentication & Access Control - Roles & permissions|Merged|
|L|8|Identity, Authentication & Access Control - Roles & permissions|Resolved CF-32|
|S|3|Identity, Authentication & Access Control - Roles & permissions|Confirmed|
|L|8|Identity, Authentication & Access Control - Roles & permissions (Phase 2)|Merged|
|M|5|Identity, Authentication & Access Control - Roles & permissions (Phase 6)|Confirmed|
|S|3|Identity, Authentication & Access Control - Roles & permissions (Phase 6)|New|
|M|5|Organization Management - Legal & structure|Resolved CF-01|
|S|3|Organization Management - Legal & structure (Phase 4)|New|
|M|5|Organization Management - Legal & structure|Merged|
|S|3|Organization Management - Legal & structure (Phase 2)|New|
|M|5|Organization Management - Legal & structure|Resolved CF-41|
|S|3|Organization Management - Legal & structure|Resolved CF-20|
|S|3|Organization Management - Legal & structure (Phase 2)|New|
|S|3|Organization Management - Legal & structure (Phase 4)|New|
|S|3|Organization Management - Legal & structure|Confirmed|
|M|5|Organization Management - Legal & structure (Phase 2)|New|
|S|3|Organization Management - Legal & structure|Confirmed|
|L|8|Employee Management - Employee master|Merged|



|L|8|Employee Management - Employee master|Merged|
| - | -: | - | - |
|M|5|Employee Management - Employee master|Merged|
|L|8|Employee Management - Employee master|Resolved CF-21|
|L|8|Employee Management - Employee master|Merged|
|S|3|Employee Management - Employee master|New|
|S|3|Employee Management - Employee master|New|
|M|5|Employee Management - Employee master|Resolved CF-18|
|M|5|Employee Management - Employee master|Merged|
|M|5|Employee Management - Employee master|Merged|
|M|5|Employee Management - Employee master|New|
|S|3|Employee Management - Employee master|New|
|M|5|Employee Management - Employee master|Confirmed|
|S|3|Employee Management - Employee master|Merged|
|S|3|Employee Management - Employee master|Confirmed|
|S|3|Employee Management - Employee master (Phase 6)|New|
|M|5|Employee Self-Service|Merged|
|M|5|Employee Self-Service|Merged|
|M|5|Employee Self-Service|Confirmed|
|M|5|Employee Self-Service|Merged|
|M|5|Employee Self-Service (Phase 3)|Confirmed|
|S|3|Employee Self-Service|New|
|M|5|Employee Self-Service (Phase 6)|New|
|M|5|Documents Management|Merged|
|M|5|Documents Management|Resolved CF-27|
|S|3|Documents Management|Merged|
|S|3|Documents Management|New|
|M|5|Documents Management|Merged|
|S|3|Documents Management|Merged|
|M|5|Documents Management|Confirmed|
|L|8|Documents Management (Phase 5)|Confirmed|
|M|5|Documents Management (Phase 8)|New|
|S|3|Documents Management (Phase 6)|New|
|M|5|Recruitment (ATS) - Requisitions & jobs|Merged|
|M|5|Recruitment (ATS) - Requisitions & jobs|Merged|
|M|5|Recruitment (ATS) - Requisitions & jobs|New|
|L|8|Recruitment (ATS) - Requisitions & jobs (Phase 8)|New|
|S|3|Recruitment (ATS) - Requisitions & jobs|New|
|M|5|Recruitment (ATS) - Candidates & pipeline|Merged|
|L|8|Recruitment (ATS) - Candidates & pipeline|Merged|
|M|5|Recruitment (ATS) - Candidates & pipeline (Phase 8)|New|
|S|3|Recruitment (ATS) - Candidates & pipeline|Gated|
|L|8|Recruitment (ATS) - Interviews & offers|Merged|



|M|5|Recruitment (ATS) - Interviews & offers|Merged|
| - | -: | - | - |
|L|8|Recruitment (ATS) - Interviews & offers|Merged|
|S|3|Recruitment (ATS) - Interviews & offers|New|
|M|5|Recruitment (ATS) - Interviews & offers|Merged|
|M|5|Recruitment (ATS) - Interviews & offers (Phase 6)|New|
|M|5|Onboarding & Pre-joining|Merged|
|L|8|Onboarding & Pre-joining|Merged|
|L|8|Onboarding & Pre-joining|New|
|S|3|Onboarding & Pre-joining|New|
|S|3|Onboarding & Pre-joining|New|
|S|3|Onboarding & Pre-joining (Phase 6)|New|
|M|5|Offboarding & Exit|New|
|M|5|Offboarding & Exit|New|
|S|3|Offboarding & Exit|New|
|M|5|Offboarding & Exit|New|
|S|3|Offboarding & Exit|New|
|S|3|Offboarding & Exit|Confirmed|
|S|3|Offboarding & Exit|New|
|S|3|Offboarding & Exit|New|
|L|8|Attendance & Time - Punch capture|Resolved CF-23/24|
|M|5|Attendance & Time - Punch capture (Phase 7)|New|
|M|5|Attendance & Time - Punch capture (Phase 7)|New|
|S|3|Attendance & Time - Punch capture|New|
|XL|13|Attendance & Time - Punch capture (Phase 6)|Confirmed|
|M|5|Attendance & Time - Punch capture (Phase 8)|New|
|M|5|Attendance & Time - Punch capture (Phase 7)|New|
|XL|13|Attendance & Time - Daily computation|Resolved CF-25|
|M|5|Attendance & Time - Daily computation|Merged|
|L|8|Attendance & Time - Daily computation|Resolved CF-25|
|M|5|Attendance & Time - Daily computation|New|
|M|5|Attendance & Time - Daily computation|Merged|
|L|8|Attendance & Time - Corrections & locks|Merged|
|M|5|Attendance & Time - Corrections & locks|New|
|M|5|Attendance & Time - Corrections & locks|New|
|M|5|Attendance & Time - Corrections & locks|Merged|
|M|5|Attendance & Time - Corrections & locks (Phase 8)|New|
|M|5|Attendance & Time - Corrections & locks|Merged|
|M|5|Shift & Roster|Merged|
|S|3|Shift & Roster|New|



|L|8|Shift & Roster|Merged|
| - | -: | - | - |
|M|5|Shift & Roster|New|
|S|3|Shift & Roster (Phase 6)|New|
|S|3|Leave Management - Configuration|Confirmed|
|XL|13|Leave Management - Configuration|Resolved CF-22|
|M|5|Leave Management - Configuration|Resolved CF-26|
|L|8|Leave Management - Balances & requests|Resolved CF-22|
|L|8|Leave Management - Balances & requests|Merged|
|M|5|Leave Management - Balances & requests|Merged|
|M|5|Leave Management - Balances & requests|Merged|
|S|3|Leave Management - Balances & requests|New|
|M|5|Leave Management - Balances & requests|Merged|
|M|5|Leave Management - Balances & requests|New|
|M|5|Leave Management - Balances & requests|New|
|S|3|Leave Management - Balances & requests|Merged|
|M|5|Leave Management - Balances & requests|New|
|M|5|Leave Management - Balances & requests|Merged|
|S|3|Leave Management - Balances & requests|New|
|L|8|Payroll - Structures & compensation|Merged|
|XL|13|Payroll - Structures & compensation|Confirmed|
|M|5|Payroll - Structures & compensation|Merged|
|L|8|Payroll - Structures & compensation|Merged|
|M|5|Payroll - Structures & compensation (Phase 6)|New|
|S|3|Payroll - Payroll processing|Confirmed|
|M|5|Payroll - Payroll processing|Merged|
|XL|13|Payroll - Payroll processing|Resolved CF-07|
|M|5|Payroll - Payroll processing|New|
|M|5|Payroll - Payroll processing|Merged|
|M|5|Payroll - Payroll processing|Confirmed|
|M|5|Payroll - Payroll processing|Merged|
|M|5|Payroll - Payroll processing|Merged|
|M|5|Payroll - Payroll processing (Phase 6)|New|
|L|8|Payroll - Payroll processing (Phase 5)|Confirmed|
|L|8|Payroll - Payroll processing|Resolved CF-07|
|M|5|Payroll - Payroll processing|New|
|M|5|Payroll - Payroll processing|Merged|
|M|5|Payroll - Payroll processing|Gated|
|L|8|Statutory Compliance & Tax (India)|Gated|
|L|8|Statutory Compliance & Tax (India)|Gated|
|M|5|Statutory Compliance & Tax (India)|Gated|
|M|5|Statutory Compliance & Tax (India)|Gated|
|S|3|Statutory Compliance & Tax (India)|Gated|



|L|8|Statutory Compliance & Tax (India)|Confirmed|
| - | -: | - | - |
|M|5|Statutory Compliance & Tax (India)|Confirmed|
|XL|13|Statutory Compliance & Tax (India)|Gated|
|L|8|Statutory Compliance & Tax (India)|Gated|
|M|5|Statutory Compliance & Tax (India)|Gated|
|S|3|Statutory Compliance & Tax (India)|New|
|L|8|Performance Management|Merged|
|L|8|Performance Management|Merged|
|M|5|Performance Management|New|
|M|5|Performance Management|New|
|L|8|Performance Management|Merged|
|M|5|Performance Management|New|
|L|8|Performance Management|Merged|
|S|3|Performance Management|New|
|M|5|Performance Management|Confirmed|
|M|5|Performance Management|New|
|S|3|Performance Management|Confirmed|
|L|8|Learning Management|Merged|
|M|5|Learning Management|Merged|
|M|5|Learning Management|Confirmed|
|M|5|Learning Management|New|
|M|5|Learning Management|New|
|M|5|Learning Management|New|
|S|3|Learning Management|New|
|S|3|Asset Management|Confirmed|
|M|5|Asset Management|Merged|
|S|3|Asset Management|New|
|M|5|Asset Management|Merged|
|M|5|Asset Management|Merged|
|S|3|Asset Management|New|
|M|5|Helpdesk|Merged|
|M|5|Helpdesk|Merged|
|L|8|Helpdesk|New|
|M|5|Helpdesk|New|
|M|5|Helpdesk|New|
|S|3|Helpdesk|New|
|M|5|Expense Management|New|
|L|8|Expense Management|Merged|
|M|5|Expense Management|Merged|
|M|5|Expense Management|New|
|M|5|Expense Management|Merged|
|S|3|Expense Management|New|
|S|3|Travel Management|New|
|M|5|Travel Management|New|
|S|3|Travel Management|New|



|S|3|Travel Management|New|
| - | -: | - | - |
|M|5|Announcements, Surveys & Engagement|New|
|S|3|Announcements, Surveys & Engagement|New|
|L|8|Announcements, Surveys & Engagement|Merged|
|M|5|Announcements, Surveys & Engagement|Confirmed|
|S|3|Announcements, Surveys & Engagement|New|
|L|8|Reports & Dashboards|Merged|
|L|8|Reports & Dashboards|Merged|
|M|5|Reports & Dashboards|Merged|
|S|3|Reports & Dashboards (Phase 6)|New|
|M|5|Reports & Dashboards|Merged|
|XL|13|Reports & Dashboards (Phase 8)|Confirmed|
|L|8|Reports & Dashboards (Phase 8)|Confirmed|
|L|8|Audit & Compliance|Resolved CF-29|
|M|5|Audit & Compliance (Phase 2)|Merged|
|S|3|Audit & Compliance (Phase 6)|Confirmed|
|S|3|Audit & Compliance (Phase 2)|New|
|M|5|Audit & Compliance (Phase 7)|Resolved CF-33|
|M|5|Audit & Compliance (Phase 7)|New|
|S|3|Audit & Compliance|New|
|M|5|Audit & Compliance (Phase 8)|New|
|L|8|Notification System|Merged|
|M|5|Notification System|Confirmed|
|M|5|Notification System|Resolved CF-13|
|M|5|Notification System|Confirmed|
|S|3|Notification System (Phase 6)|Confirmed|
|M|5|Notification System (Phase 7)|Confirmed|
|M|5|Notification System (Phase 7)|Confirmed|
|S|3|Notification System (Phase 6)|New|
|XL|13|Workflow Engine|Resolved CF-30|
|XL|13|Workflow Engine|Merged|
|L|8|Workflow Engine|Merged|
|M|5|Workflow Engine|Resolved CF-31|
|M|5|Workflow Engine (Phase 6)|Confirmed|
|S|3|Workflow Engine (Phase 6)|Confirmed|
|M|5|Workflow Engine (Phase 6)|New|
|L|8|Workflow Engine (Phase 6)|Confirmed|
|M|5|Integrations & API Platform|Confirmed|
|M|5|Integrations & API Platform (Phase 8)|New|
|M|5|Integrations & API Platform (Phase 5)|Confirmed|
|M|5|Integrations & API Platform|New|
|M|5|Integrations & API Platform (Phase 8)|New|
|S|3|Integrations & API Platform|New|
|L|8|Mobile App|New|
|XL|13|Mobile App|New|
|M|5|Mobile App|New|



|M|5|Mobile App|New|
| - | -: | - | - |
|M|5|Mobile App|New|
|XL|13|Security & Data Protection|Merged|
|L|8|Security & Data Protection (Phase 2)|Merged|
|M|5|Security & Data Protection|Confirmed|
|S|3|Security & Data Protection|Confirmed|
|M|5|Security & Data Protection|Confirmed|
|S|3|Security & Data Protection|Confirmed|
|M|5|Security & Data Protection (Phase 7)|Confirmed|
|XL|13|Data Import / Export|Resolved CF-37|
|M|5|Data Import / Export|Merged|
|L|8|Data Import / Export (Phase 4)|New|
|L|8|Finance Core (optional)|Gated|
|M|5|Finance Core (optional)|Gated|
|XL|13|Finance Core (optional)|Gated|
|L|8|Finance Core (optional)|Gated|
|L|8|AI HR Assistant|Confirmed|
|M|5|AI HR Assistant|Confirmed|
|M|5|AI HR Assistant|New|



||
| - |
||
||
|**Source**|
|A-PRD:AUTH-SIGNUP-001; B-01|
|A-PRD:AUTH-SIGNUP-002|
|A-PRD:AUTH-SIGNUP-003, ORG-LIFE-001|
|A-PRD:ORG-LIFE-002; B-11|
|A-ARCH:4.2|
|A-PRD:ORG-SET-003|
|A-PRD:ORG-SET-001,ORG-SET-002|
|NEW|
|A-DB:plans; B-16|
|A-ERD:subscriptions; B-11|
|A-ARCH:16; B-16|
|A-PRD:ORG-BILL-002|
|B-01 R3; B-14|
|A-PRD:ORG-BILL-003|
|A-PRD:M01 notifications|
|B-10 feature flags|
|A-PRD:AUTH-LOGIN-001|
|A-PRD:AUTH-LOGIN-002|
|A-PRD:AUTH-SESS-001; B-09|
|A-PRD:AUTH-PASS-002|
|NEW|
|A-PRD:AUTH-SESS-002|
|A-PRD:AUTH-MFA-001; B-04|
|A-PRD:INT-SSO-001|
|NEW|
|NEW|



|A-PRD:AUTH-USER-001; B-02|
| - |
|B-11 invitation|
|A-PRD:AUTH-USER-002; B-02|
|A-PRD:AUTH-USER-004/005; B-06|
|B-18|
|A-PRD:AUTH-USER-003|
|A-PRD:RBAC-PERM-001|
|A-PRD:RBAC-ROLE-001|
|A-PRD:RBAC-ROLE-002/003|
|A-PRD:RBAC-USER-001; B-03 RoleGrant|
|A-PRD:RBAC-SA-001,RBAC-OWN-001; B-09|
|A-PRD:RBAC-SCOPE-001; B-09|
|A-PRD:RBAC-MULTI-001|
|A-PRD:EMP data classification; B-09|
|A-PRD:AUD-BG-001; B-09|
|NEW|
|B-06 legal\_entities|
|NEW|
|A-PRD:ORG-LOC-001|
|NEW|
|A-PRD:ORG-DEPT-001|
|A-PRD:ORG-DESG-001|
|NEW|
|NEW|
|A-PRD:ORG-ETYPE-001|
|NEW|
|A-PRD:ORG-DEPT-001 AC|
|A-PRD:EMP-CORE-001; B-08|



|A-PRD:EMP-CORE-002; B-18|
| - |
|A-PRD:EMP-DIR-001; B-18|
|A-PRD:EMP-JOB-001; B-08|
|B-02 EmploymentEvent|
|NEW|
|NEW|
|A-ERD:employees; B-11|
|A-PRD:EMP-ADDR-001,EMP-EMER-001|
|A-PRD:EMP-BANK-001|
|NEW|
|NEW|
|A-PRD:EMP-DIR-001|
|A-PRD:EMP-CORE-006|
|A-PRD:EMP-CORE-003|
|NEW|
|A-PRD:ESS-PROF-001/002|
|A-PRD:ESS-PROF-003|
|A-PRD:ESS-REQ-001|
|A-PRD:RPT-DASH-001|
|A-ROAD:Phase 5|
|NEW|
|NEW|
|A-PRD:DOC-FILE-001; B-17|
|B-02; B-12 FILE-001|
|A-PRD:DOC-FILE-001 AC|
|NEW|
|A-PRD:DOC-EMP-001|
|A-PRD:DOC-EMP-002|
|A-PRD:DOC-POL-001|
|A-PRD:DOC-TMPL-001|
|NEW|
|NEW|
|B-02 Recruitment MVP|
|A-PRD:REC-JOB-001|
|NEW|
|A-PRD:INT; NEW|
|NEW|
|A-PRD:REC-CAN-001|
|A-PRD:REC-CAN-002|
|NEW|
|B-05 DEC-019|
|A-PRD:REC-INT-001|



|A-PRD:REC-INT-002; B-02|
| - |
|A-PRD:REC-OFF-001|
|NEW|
|A-PRD:REC-OFF-002|
|NEW|
|A-PRD:ONB-TMPL-001|
|A-PRD:ONB-TASK-001,ONB-PROG-001|
|NEW|
|NEW|
|NEW|
|NEW|
|A-PRD:EMP exit; NEW|
|NEW|
|NEW|
|NEW|
|NEW|
|B-12 HR-002|
|NEW|
|NEW|
|A-PRD:ATT-PUNCH-001..004; B-17|
|NEW|
|NEW|
|NEW|
|A-PRD:ATT-POL-003|
|NEW|
|NEW|
|A-PRD:ATT-DAY-001/002; B-14|
|A-PRD:ATT-DAY-003; B-12 ATT-001|
|A-PRD:ATT-POL-001; B-14|
|NEW|
|A-PRD:ATT-DAY-004|
|A-PRD:ATT-REG-001/002|
|NEW|
|NEW|
|B-11 attendance locked|
|NEW|
|A-PRD:RPT-ATT-001|
|A-PRD:ATT-POL-002|
|NEW|



|A-PRD:WFM-SFT-001|
| - |
|NEW|
|NEW|
|A-PRD:LV-TYPE-001|
|B-02 Leave; B-14|
|A-PRD:LV-HOL-001; B-14|
|A-PRD:LV-BAL-001/003; B-14|
|A-PRD:LV-REQ-001|
|A-PRD:LV-REQ-003|
|A-PRD:LV-REQ-002|
|NEW|
|A-PRD:LV-BAL-002|
|NEW|
|NEW|
|A-PRD:LV-HOL-002|
|NEW|
|A-PRD:RPT-LV-001|
|NEW|
|A-PRD:PAY-STR-001; B-15|
|B-15 restricted DSL|
|A-PRD:PAY-STR-001|
|A-PRD:PAY-STR-002; B-15|
|NEW|
|B-15|
|A-PRD:PAY-RUN-002|
|A-PRD:PAY-RUN-001/002; B-15|
|NEW|
|A-PRD:PAY-RUN-003; B-15|
|B-15|
|A-PRD:PAY-SLIP-001/002|
|A-PRD:PAY-RUN-003 AC|
|NEW|
|B-15 F&F|
|B-01 R2; B-15 s7|
|NEW|
|A-PRD:RPT|
|B-15 s8|
|B-15 s5|
|B-15|
|B-15|
|B-15|
|B-15|



|B-15|
| - |
|B-15|
|B-15|
|B-15|
|B-15|
|NEW|
|A-PRD:PERF-CYC-001; B-02|
|A-PRD:PERF-GOAL-001|
|NEW|
|NEW|
|A-PRD:PERF-REV-001|
|B-02; NEW|
|A-PRD:PERF-REV-002|
|NEW|
|B-02 no comp linkage|
|NEW|
|B-02|
|A-PRD:LND-CRS-001; B-02|
|A-PRD:LND-ENR-001|
|B-02|
|NEW|
|NEW|
|NEW|
|NEW|
|A-PRD:AST-CAT-001|
|A-PRD:AST-ASN-002|
|NEW|
|A-PRD:AST-ASN-001|
|A-PRD:AST-ASN-002|
|NEW|
|A-PRD:HLP-TKT-002|
|A-PRD:HLP-TKT-001|
|NEW|
|NEW|
|NEW|
|NEW|
|NEW|
|A-PRD:EXP-CLM-001|
|A-PRD:EXP-CLM-002|
|NEW|
|A-PRD:EXP-CLM-003|
|NEW|
|NEW|
|NEW|
|NEW|



|NEW|
| - |
|NEW|
|NEW|
|A-PRD:ENG-SRV-001; B-02|
|A-PRD:ENG-REC-001|
|NEW|
|A-PRD:RPT-DASH-001|
|A-PRD:RPT-HR-001..; B-02|
|A-PRD:RPT-EXP-001; B-11|
|NEW|
|A-PRD:RPT-HR-001|
|A-PRD:RPT-ADV-001|
|A-PRD:RPT-ANL-001|
|A-PRD:AUD-LOG-001; B-03|
|A-PRD:AUD-LOG-002|
|A-PRD:AUD-LOG-003|
|NEW|
|A-PRD:AUD-RET-001; B-06|
|NEW|
|NEW|
|NEW|
|A-PRD:NTF-OUTBOX-001/002; B-11|
|A-PRD:NTF-INAPP-001|
|A-PRD:NTF-EMAIL-001|
|A-PRD:NTF-TMPL-001|
|A-PRD:NTF-PREF-001|
|A-PRD:NTF-PUSH-001|
|A-PRD:NTF-PUSH-001|
|NEW|
|A-PRD:WF-DEF-001/002; B-02|
|A-PRD:WF-RUN-001; B-11|
|B-18 approvals|
|A-ARCH:6.3; B-12 WF-001|
|A-PRD:WF-RUN-002|
|B-02 Delegation|
|NEW|
|A-PRD:WF-DEF-001|
|A-PRD:INT-WEB-001|
|NEW|
|A-PRD:INT-CAL-001|
|NEW|
|NEW|
|NEW|
|NEW|
|A-PRD:mobile P2; NEW|
|NEW|



|NEW|
| - |
|NEW|
|A-ARCH:21; B-12 SEC-TEN-001/002|
|A-TECH:security checklist; B-09|
|A-TECH:security checklist|
|A-TECH:security checklist|
|B-10|
|B-10 CI|
|B-04|
|B-02 Import; B-11|
|A-PRD:EMP-CORE-005; B-12 IMP-002|
|NEW|
|B-16|
|B-16|
|B-16|
|B-16|
|A-PRD:AI-CHAT-001|
|A-PRD:AI-SUM-001|
|NEW|


|**Sheet 3 - User Stories**|||
| - | :- | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*|||
||||
|**Story ID**|**Module**||
|US-001|Tenant & Subscription Management||
|US-002|Tenant & Subscription Management||
|US-003|Tenant & Subscription Management||
|US-004|Tenant & Subscription Management||
|US-005|Tenant & Subscription Management||
|US-006|Tenant & Subscription Management||
|US-007|Tenant & Subscription Management||
|US-008|Tenant & Subscription Management||
|US-009|Tenant & Subscription Management||
|US-010|Tenant & Subscription Management||
|US-011|Tenant & Subscription Management||
|US-012|Tenant & Subscription Management||
|US-013|Tenant & Subscription Management||
|US-014|Tenant & Subscription Management||
|US-015|Tenant & Subscription Management||
|US-016|Tenant & Subscription Management||
|US-017|Identity, Authentication & Access Control||
|US-018|Identity, Authentication & Access Control||



|US-019|Identity, Authentication & Access Control|
| - | - |
|US-020|Identity, Authentication & Access Control|
|US-021|Identity, Authentication & Access Control|
|US-022|Identity, Authentication & Access Control|
|US-023|Identity, Authentication & Access Control|
|US-024|Identity, Authentication & Access Control|
|US-025|Identity, Authentication & Access Control|
|US-026|Identity, Authentication & Access Control|
|US-027|Identity, Authentication & Access Control|
|US-028|Identity, Authentication & Access Control|
|US-029|Identity, Authentication & Access Control|
|US-030|Identity, Authentication & Access Control|
|US-031|Identity, Authentication & Access Control|
|US-032|Identity, Authentication & Access Control|
|US-033|Identity, Authentication & Access Control|
|US-034|Identity, Authentication & Access Control|
|US-035|Identity, Authentication & Access Control|
|US-036|Identity, Authentication & Access Control|
|US-037|Identity, Authentication & Access Control|
|US-038|Identity, Authentication & Access Control|
|US-039|Identity, Authentication & Access Control|
|US-040|Identity, Authentication & Access Control|



|US-041|Identity, Authentication & Access Control|
| - | - |
|US-042|Identity, Authentication & Access Control|
|US-043|Organization Management|
|US-044|Organization Management|
|US-045|Organization Management|
|US-046|Organization Management|
|US-047|Organization Management|
|US-048|Organization Management|
|US-049|Organization Management|
|US-050|Organization Management|
|US-051|Organization Management|
|US-052|Organization Management|
|US-053|Organization Management|
|US-054|Employee Management|
|US-055|Employee Management|
|US-056|Employee Management|
|US-057|Employee Management|
|US-058|Employee Management|
|US-059|Employee Management|
|US-060|Employee Management|
|US-061|Employee Management|
|US-062|Employee Management|
|US-063|Employee Management|



|US-064|Employee Management|
| - | - |
|US-065|Employee Management|
|US-066|Employee Management|
|US-067|Employee Management|
|US-068|Employee Management|
|US-069|Employee Management|
|US-070|Employee Self-Service|
|US-071|Employee Self-Service|
|US-072|Employee Self-Service|
|US-073|Employee Self-Service|
|US-074|Employee Self-Service|
|US-075|Employee Self-Service|
|US-076|Employee Self-Service|
|US-077|Documents Management|
|US-078|Documents Management|
|US-079|Documents Management|
|US-080|Documents Management|
|US-081|Documents Management|
|US-082|Documents Management|
|US-083|Documents Management|
|US-084|Documents Management|
|US-085|Documents Management|
|US-086|Documents Management|



|US-087|Recruitment (ATS)|
| - | - |
|US-088|Recruitment (ATS)|
|US-089|Recruitment (ATS)|
|US-090|Recruitment (ATS)|
|US-091|Recruitment (ATS)|
|US-092|Recruitment (ATS)|
|US-093|Recruitment (ATS)|
|US-094|Recruitment (ATS)|
|US-095|Recruitment (ATS)|
|US-096|Recruitment (ATS)|
|US-097|Recruitment (ATS)|
|US-098|Recruitment (ATS)|
|US-099|Recruitment (ATS)|
|US-100|Recruitment (ATS)|
|US-101|Recruitment (ATS)|
|US-102|Onboarding & Pre-joining|
|US-103|Onboarding & Pre-joining|
|US-104|Onboarding & Pre-joining|
|US-105|Onboarding & Pre-joining|
|US-106|Onboarding & Pre-joining|
|US-107|Onboarding & Pre-joining|
|US-108|Offboarding & Exit|
|US-109|Offboarding & Exit|



|US-110|Offboarding & Exit|
| - | - |
|US-111|Offboarding & Exit|
|US-112|Offboarding & Exit|
|US-113|Offboarding & Exit|
|US-114|Offboarding & Exit|
|US-115|Offboarding & Exit|
|US-116|Attendance & Time|
|US-117|Attendance & Time|
|US-118|Attendance & Time|
|US-119|Attendance & Time|
|US-120|Attendance & Time|
|US-121|Attendance & Time|
|US-122|Attendance & Time|
|US-123|Attendance & Time|
|US-124|Attendance & Time|
|US-125|Attendance & Time|
|US-126|Attendance & Time|
|US-127|Attendance & Time|
|US-128|Attendance & Time|
|US-129|Attendance & Time|
|US-130|Attendance & Time|
|US-131|Attendance & Time|
|US-132|Attendance & Time|
|US-133|Attendance & Time|



|US-134|Shift & Roster|
| - | - |
|US-135|Shift & Roster|
|US-136|Shift & Roster|
|US-137|Shift & Roster|
|US-138|Shift & Roster|
|US-139|Leave Management|
|US-140|Leave Management|
|US-141|Leave Management|
|US-142|Leave Management|
|US-143|Leave Management|
|US-144|Leave Management|
|US-145|Leave Management|
|US-146|Leave Management|
|US-147|Leave Management|
|US-148|Leave Management|
|US-149|Leave Management|
|US-150|Leave Management|
|US-151|Leave Management|
|US-152|Leave Management|
|US-153|Leave Management|
|US-154|Payroll|
|US-155|Payroll|
|US-156|Payroll|
|US-157|Payroll|
|US-158|Payroll|



|US-159|Payroll|
| - | - |
|US-160|Payroll|
|US-161|Payroll|
|US-162|Payroll|
|US-163|Payroll|
|US-164|Payroll|
|US-165|Payroll|
|US-166|Payroll|
|US-167|Payroll|
|US-168|Payroll|
|US-169|Payroll|
|US-170|Payroll|
|US-171|Payroll|
|US-172|Payroll|
|US-173|Statutory Compliance & Tax (India)|
|US-174|Statutory Compliance & Tax (India)|
|US-175|Statutory Compliance & Tax (India)|
|US-176|Statutory Compliance & Tax (India)|
|US-177|Statutory Compliance & Tax (India)|
|US-178|Statutory Compliance & Tax (India)|
|US-179|Statutory Compliance & Tax (India)|
|US-180|Statutory Compliance & Tax (India)|
|US-181|Statutory Compliance & Tax (India)|
|US-182|Statutory Compliance & Tax (India)|



|US-183|Statutory Compliance & Tax (India)|
| - | - |
|US-184|Performance Management|
|US-185|Performance Management|
|US-186|Performance Management|
|US-187|Performance Management|
|US-188|Performance Management|
|US-189|Performance Management|
|US-190|Performance Management|
|US-191|Performance Management|
|US-192|Performance Management|
|US-193|Performance Management|
|US-194|Performance Management|
|US-195|Learning Management|
|US-196|Learning Management|
|US-197|Learning Management|
|US-198|Learning Management|
|US-199|Learning Management|
|US-200|Learning Management|
|US-201|Learning Management|
|US-202|Asset Management|
|US-203|Asset Management|
|US-204|Asset Management|
|US-205|Asset Management|
|US-206|Asset Management|
|US-207|Asset Management|
|US-208|Helpdesk|
|US-209|Helpdesk|



|US-210|Helpdesk|
| - | - |
|US-211|Helpdesk|
|US-212|Helpdesk|
|US-213|Helpdesk|
|US-214|Expense Management|
|US-215|Expense Management|
|US-216|Expense Management|
|US-217|Expense Management|
|US-218|Expense Management|
|US-219|Expense Management|
|US-220|Travel Management|
|US-221|Travel Management|
|US-222|Travel Management|
|US-223|Travel Management|
|US-224|Announcements, Surveys & Engagement|
|US-225|Announcements, Surveys & Engagement|
|US-226|Announcements, Surveys & Engagement|
|US-227|Announcements, Surveys & Engagement|
|US-228|Announcements, Surveys & Engagement|
|US-229|Reports & Dashboards|
|US-230|Reports & Dashboards|
|US-231|Reports & Dashboards|
|US-232|Reports & Dashboards|
|US-233|Reports & Dashboards|
|US-234|Reports & Dashboards|
|US-235|Reports & Dashboards|
|US-236|Audit & Compliance|



|US-237|Audit & Compliance|
| - | - |
|US-238|Audit & Compliance|
|US-239|Audit & Compliance|
|US-240|Audit & Compliance|
|US-241|Audit & Compliance|
|US-242|Audit & Compliance|
|US-243|Audit & Compliance|
|US-244|Notification System|
|US-245|Notification System|
|US-246|Notification System|
|US-247|Notification System|
|US-248|Notification System|
|US-249|Notification System|
|US-250|Notification System|
|US-251|Notification System|
|US-252|Workflow Engine|
|US-253|Workflow Engine|
|US-254|Workflow Engine|
|US-255|Workflow Engine|
|US-256|Workflow Engine|
|US-257|Workflow Engine|
|US-258|Workflow Engine|
|US-259|Workflow Engine|
|US-260|Integrations & API Platform|
|US-261|Integrations & API Platform|
|US-262|Integrations & API Platform|



|US-263|Integrations & API Platform|
| - | - |
|US-264|Integrations & API Platform|
|US-265|Integrations & API Platform|
|US-266|Mobile App|
|US-267|Mobile App|
|US-268|Mobile App|
|US-269|Mobile App|
|US-270|Mobile App|
|US-271|Security & Data Protection|
|US-272|Security & Data Protection|
|US-273|Security & Data Protection|
|US-274|Security & Data Protection|
|US-275|Security & Data Protection|
|US-276|Security & Data Protection|
|US-277|Security & Data Protection|
|US-278|Data Import / Export|
|US-279|Data Import / Export|
|US-280|Data Import / Export|
|US-281|Finance Core (optional)|
|US-282|Finance Core (optional)|
|US-283|Finance Core (optional)|
|US-284|Finance Core (optional)|
|US-285|AI HR Assistant|
|US-286|AI HR Assistant|



|US-287|AI HR Assistant|
| - | - |



||
| - |
||
||
|**User Story**|
|As a prospective customer, I want self-signup (visitor creates tenant, default legal entity, owner user, membership and pending subscription in one transaction) so that I can start a trial without talking to sales.|
|As a tenant owner, I want email verification at signup (signup email verified with single-use token before tenant review) so that I can prove I control the company email.|
|As a platform admin, I want platform tenant review & approval (sA approves or rejects pending tenants; auto-approve mode configurable) so that I can control who uses the platform.|
|As a platform admin, I want suspend / reactivate / cancel / archive tenant (lifecycle transitions with reason, audit and owner notification) so that I can enforce commercial and policy decisions.|
|As a tenant owner, I want default seeding on activation (seed system roles, leave types, workflows, templates, holiday template on activation; idempotent) so that I can start with sensible defaults.|
|As a tenant owner, I want setup wizard (seven-step wizard: profile, entity, locations, departments, work policy, leave, invite users; tracks setup status) so that I can get operational in under an hour.|
|As a tenant owner, I want tenant settings (locale, timezone, week start, branding, security policy (MFA, session timeout, password)) so that I can configure the product to our policies.|
|As a tenant owner, I want tenant data export on exit (owner requests full export (JSON/CSV/files ZIP); link expires 24 h) so that I can take our data when we leave.|
|As a platform admin, I want plans and plan versions (platform defines plans, versions, modules, seat price, limits) so that I can sell different packages.|
|As a tenant owner, I want subscription lifecycle (pending to trial (14 d at activation) to active/past\_due/suspended/cancelled/expired) so that I can know my commercial status.|
|As a platform, I want entitlement enforcement (module and limit checks per request from plan entitlements) so that I can charge for what is used.|
|As a platform, I want seat limit enforcement (block new active employees beyond seat limit with upgrade prompt) so that I can protect revenue.|
|As a platform finance, I want invoices and payments (manual-first) (generate invoices from subscription, record payments, allocate, credit notes; immutable numbering) so that I can bill customers accurately.|
|As a tenant owner, I want payment gateway & dunning (razorpay/Stripe autopay, retries, past\_due handling, suspension after grace) so that I can pay automatically.|
|As a tenant owner, I want trial and billing notifications (trial ending 7/3/1 days, payment due, suspended) so that I can avoid surprise suspension.|
|As a platform admin, I want platform feature flags (per-tenant and global flags for gated features) so that I can release safely.|
|As an user, I want email/password login (login with lockout, tenant status check, membership resolution) so that I can access my workspace securely.|
|As an user, I want logout (revoke current session) so that I can end my session.|



|As an user, I want cookie sessions with rotation (httpOnly Secure SameSite=Lax cookies; 15 min access, 30 d refresh, rotate, family revoke on reuse; CSRF) so that I can stay signed in safely.|
| - |
|As an user, I want password reset (email token 30 min single-use; revokes all sessions) so that I can recover access.|
|As an user, I want change password (authenticated change with current password; breached-password check) so that I can keep my account secure.|
|As an user, I want session management (list and revoke own sessions; admin revoke user sessions) so that I can sign out lost devices.|
|As a privileged user, I want mFA (TOTP + recovery codes) (enroll, verify, recovery codes, mandatory for privileged roles, step-up for restricted actions) so that I can protect payroll and HR data.|
|As a tenant admin, I want sSO (SAML/OIDC) (per-tenant SSO with Google, Microsoft Entra, Okta; enforce-SSO toggle) so that I can use our corporate identity.|
|As a tenant admin, I want sCIM provisioning (sCIM 2.0 users and groups endpoints) so that I can automate joiners/leavers from IdP.|
|As an user, I want passkeys (WebAuthn) (passwordless sign-in and MFA via passkeys) so that I can sign in faster and safer.|
|As a tenant admin, I want invite user (invite email with role; token 72 h single-use; role ownership check) so that I can bring my team in.|
|As an invited user, I want accept invitation (set password, verify, activate membership) so that I can join my company workspace.|
|As a tenant admin, I want membership lifecycle (activate, suspend, revoke membership; revoke sessions) so that I can control who can log in.|
|As a platform, I want global identity, membership cap (email globally unique; max memberships per user configurable (default 1)) so that I can avoid duplicate identities.|
|As a consultant user, I want tenant switcher (users with several memberships pick tenant; caches cleared on switch) so that I can work for several clients.|
|As an HR admin, I want link user to employee (optional 1:1 link membership to employee within tenant) so that I can connect login to HR record.|
|As a platform admin, I want permission catalog (global platform-owned catalog of permission keys) so that I can keep permissions consistent.|
|As a tenant admin, I want system role templates (17 read-only templates seeded) so that I can start with standard roles.|
|As a tenant admin, I want custom roles (create/clone roles from catalog only) so that I can match our org's responsibilities.|
|As a tenant admin, I want role grants with scope and validity (grant role to membership with scope type/IDs and optional validity window) so that I can delegate precisely.|
|As a platform, I want permission ceiling & no self-elevation (grantor cannot grant beyond own permissions; no self-grants; platform roles unassignable) so that I can prevent privilege escalation.|
|As a platform, I want scope resolver (sELF, TEAM, TEAM\_TREE, DEPARTMENT, LOCATION, LEGAL\_ENTITY, ORGANIZATION, ASSIGNED) so that I can show each user exactly their data.|
|As a platform, I want multi-role union (union permissions, broader scope wins, no DENY) so that I can predictable access.|
|As an HR admin, I want field-level classification (public/Internal/Sensitive/Restricted serialisation and reveal) so that I can protect sensitive data by default.|



|As a platform support, I want break-glass access (time-limited, approved, audited platform access to a tenant) so that I can resolve incidents safely.|
| - |
|As a compliance officer, I want access review report (periodic list of roles, grants, restricted readers for review) so that I can prove least privilege.|
|As a tenant admin, I want legal entities (cRUD legal entities with statutory registrations (PAN, TAN, GSTIN, PF, ESI, PT, LWF)) so that I can employ under multiple companies.|
|As a payroll admin, I want statutory registrations (encrypted registration numbers per entity and state) so that I can file statutory returns correctly.|
|As an HR admin, I want locations with geofence (address, state, timezone, geofence radius) so that I can place employees and punches.|
|As an HR admin, I want branches (optional grouping of locations) so that I can report by branch.|
|As an HR admin, I want departments tree (hierarchical departments with head) so that I can mirror our structure.|
|As an HR admin, I want designations (job titles) so that I can standardise titles.|
|As an HR admin, I want grades/bands (grade ladder with optional pay range) so that I can drive policies by grade.|
|As a finance admin, I want cost centers (cost centers with owner; split allocation on assignment) so that I can allocate payroll cost.|
|As an HR admin, I want employment types (full-time, part-time, contract, intern, consultant) so that I can apply policies by type.|
|As an employee, I want org chart (interactive chart from current assignments) so that I can understand who reports to whom.|
|As an HR admin, I want master deactivation guard (block deactivation when active employees reference master; require reassignment) so that I can avoid orphan records.|
|As an HR admin, I want create employee (create with mandatory fields; prehire status; number series) so that I can add a new hire.|
|As an HR admin, I want employee profile view/edit (tabs: personal, contact, job, documents, attendance, leave, payroll, performance, audit) so that I can maintain accurate records.|
|As an HR admin, I want employee list & search (server-side filters, sort, cursor pagination, saved views) so that I can find people fast.|
|As an HR admin, I want effective-dated assignments (entity, location, dept, designation, grade, manager, cost center with history) so that I can keep history of every job change.|
|As an HR admin, I want lifecycle events (confirm, transfer, promote, redesignate, long leave, suspend, rehire with reason) so that I can record lifecycle accurately.|
|As an HR admin, I want future-dated changes job (nightly job applies future assignments and status changes) so that I can schedule changes in advance.|
|As an HR admin, I want manager cycle prevention (reject cyclic reporting lines) so that I can keep hierarchy valid.|
|As an HR admin, I want status machine (prehire/active/on\_probation/on\_notice/long\_leave/inactive/terminated transitions) so that I can reflect real employment state.|
|As an HR admin, I want personal, family, education, experience (sub-records on profile) so that I can hold complete records.|
|As a payroll admin, I want bank accounts (restricted) (encrypted account, IFSC, primary flag, change approval) so that I can pay salaries to the right account.|



|As a payroll admin, I want statutory IDs (restricted) (pAN, Aadhaar reference (last4), UAN, ESIC IP, passport) so that I can run statutory payroll.|
| - |
|As a manager, I want probation tracking (probation end date, confirmation task 15 days before) so that I can confirm employees on time.|
|As an employee, I want employee directory (public fields, search, hide personal mobile) so that I can find colleagues.|
|As an HR admin, I want employee export (export with scope and field-class rules) so that I can share data with stakeholders.|
|As an HR admin, I want archive/soft-delete employee (archive records needed for history) so that I can clean up without losing history.|
|As an employee, I want work anniversaries & birthdays feed (opt-in celebrations) so that I can celebrate colleagues.|
|As an employee, I want my profile (view own profile; edit allowed fields) so that I can keep my details current.|
|As an employee, I want profile change requests (approval for restricted fields (name, bank, PAN)) so that I can update sensitive details safely.|
|As an employee, I want my requests hub (all request types with status timeline) so that I can track everything I asked for.|
|As an employee, I want home dashboard (employee) (punch widget, balances, tasks, announcements, holidays) so that I can see what matters today.|
|As a manager, I want my team view (manager sees direct reports, presence today, pending items) so that I can run my team day to day.|
|As an employee, I want privacy notice acknowledgement (employee acknowledges privacy notice at first login) so that I can know how my data is used.|
|As an employee, I want my data download (employee downloads own data (DPDP access)) so that I can exercise my data rights.|
|As an any user, I want upload intent & presigned PUT (create file row, presign S3 PUT, complete upload) so that I can upload documents securely.|
|As a security, I want malware scan before availability (clamAV scan; quarantined/active/infected) so that I can stop malware spreading.|
|As an any user, I want signed download (authorise parent record then 5-min signed URL; audit restricted) so that I can access files I am allowed to.|
|As an HR admin, I want document types config (mandatory, expiry, visibility, retention per type) so that I can standardise document collection.|
|As an HR admin, I want employee documents (attach, verify, reject, version employee documents) so that I can keep employee papers organised.|
|As an HR admin, I want expiry tracking (reminders 30/15/7/0 days; flags) so that I can never miss a renewal.|
|As an HR admin, I want company policies & acknowledgement (publish versioned policies to audiences; track acknowledgement) so that I can prove employees read policies.|
|As an HR admin, I want letter templates & generation (merge-field templates; generate PDF letters (offer, appointment, confirmation, increment, relieving, experience)) so that I can issue letters in seconds.|
|As an HR admin, I want e-sign integration (send letters for e-sign (Leegality/DocuSign)) so that I can close paperwork remotely.|
|As an employee, I want company document library (folders, access by audience) so that I can find forms and handbooks.|



|As a hiring manager, I want manpower requisition (raise requisition with headcount, budget, justification; approval workflow) so that I can get approval to hire.|
| - |
|As a recruiter, I want job creation & posting (job from approved requisition; description, skills, publish to careers page) so that I can attract applicants.|
|As a candidate, I want careers page & apply (public branded careers page; apply form with consent) so that I can apply easily.|
|As a recruiter, I want job board distribution (push jobs to LinkedIn, Naukri, Indeed via integration) so that I can reach more candidates.|
|As an employee, I want employee referrals (employees refer candidates; referral status and bonus eligibility) so that I can help hire friends.|
|As a recruiter, I want candidate database (profiles, resumes, tags, dedupe on email/mobile, merge) so that I can keep one record per person.|
|As a recruiter, I want configurable pipeline (stage templates per job; drag-drop stage moves with reason) so that I can see where every candidate is.|
|As a recruiter, I want resume parsing (extract fields from PDF/DOCX resumes) so that I can save typing.|
|As a compliance officer, I want candidate consent & retention (consent capture; anonymise after retention) so that I can meet privacy duties.|
|As a recruiter, I want interview scheduling (schedule rounds, panel, calendar invites, reschedule) so that I can coordinate interviews quickly.|
|As an interviewer, I want scorecards & blind feedback (structured scorecard; interviewer sees others' feedback only after submitting) so that I can give unbiased feedback.|
|As a recruiter, I want offer management (draft offer from grade band; approval if out of band; letter; send) so that I can make compliant offers.|
|As a candidate, I want candidate offer portal (accept/decline offer via tokenised link) so that I can respond to my offer online.|
|As an HR admin, I want convert to employee (accepted offer creates prehire employee and onboarding case) so that I can avoid re-keying.|
|As an HR manager, I want recruitment analytics (funnel, time-to-hire, source effectiveness) so that I can improve hiring.|
|As an HR admin, I want onboarding templates (task templates by entity/department/type/location with offsets) so that I can standardise onboarding.|
|As an HR admin, I want onboarding case & tasks (case per joiner; tasks to HR/IT/manager/finance/employee; progress) so that I can make day one smooth.|
|As a new joiner, I want pre-joining portal (token portal for personal data, bank, PAN, education, documents, Form 11) so that I can complete formalities before day one.|
|As an HR admin, I want document verification (hR verifies or rejects submitted documents) so that I can ensure valid documents.|
|As an HR admin, I want mark joined / no-show (joined activates employee and invite; no-show closes case) so that I can start employment on time.|
|As a manager, I want buddy & induction (assign buddy; induction schedule; 30/60/90-day check-ins) so that I can help new joiners settle.|
|As an employee, I want resignation submission (employee resigns with reason and proposed last day; withdrawal) so that I can resign formally.|
|As a manager, I want resignation acceptance & notice (manager/HR accept, adjust last day, waive or recover notice) so that I can plan the handover.|



|As an HR admin, I want termination & retirement (hR initiates termination with category and document) so that I can handle involuntary exits.|
| - |
|As an HR admin, I want clearance checklist (department clearances (IT, assets, finance, admin, manager)) so that I can close all dues.|
|As an HR admin, I want exit interview (questionnaire; HR-only visibility) so that I can learn why people leave.|
|As a security, I want access revocation at last day (job revokes sessions/login at last-day end) so that I can prevent ex-employee access.|
|As an HR admin, I want relieving & experience letters (generate after F&F) so that I can issue letters correctly.|
|As an HR admin, I want rehire eligibility (restricted flag with reason) so that I can decide on rehire quickly.|
|As an employee, I want web punch (4 events) (cHECK\_IN, BREAK\_START, BREAK\_END, CHECK\_OUT with transition rules and idempotency) so that I can record my working time.|
|As a field employee, I want mobile GPS punch (geofence check, accuracy, block/flag per policy) so that I can punch from site.|
|As an HR admin, I want selfie punch (photo captured with punch; 90-day retention) so that I can deter buddy punching.|
|As an HR admin, I want iP restriction (web punch only from allowed IP ranges) so that I can limit web punches to office.|
|As an IT admin, I want biometric device integration (register devices; pull/push sync; map device user IDs; exceptions queue) so that I can use existing biometric machines.|
|As a plant HR, I want kiosk punch (shared tablet with PIN/QR) so that I can punch without personal phones.|
|As a field employee, I want offline mobile punch sync (queue with device time and idempotency; drift flag) so that I can punch without network.|
|As an HR admin, I want attendance day computation (upsert + FOR UPDATE per employee/day; minutes, status from versioned policy) so that I can get accurate daily attendance.|
|As an HR admin, I want timezone & overnight work date (work date from shift timezone; overnight attaches to start date) so that I can correct dates for night shifts.|
|As an HR admin, I want attendance policies (versioned) (grace, late mark, half/full day, rounding, capture modes, geofence action) so that I can apply our rules consistently.|
|As an HR admin, I want nightly finaliser (mark absent/missing punch, auto-checkout per policy) so that I can close each day reliably.|
|As a manager, I want attendance views (my attendance calendar; team; org muster) so that I can see presence at a glance.|
|As an employee, I want regularization (request corrected punches within window/limits; approval; correction punches) so that I can fix missed punches.|
|As an employee, I want on-duty / WFH requests (mark days without punches on approval) so that I can record client visits or WFH.|
|As a manager, I want overtime capture & approval (oT minutes beyond threshold; approval; to payroll or comp-off) so that I can pay or credit extra hours fairly.|
|As an HR admin, I want attendance period lock (lock per entity per period; unlock with reason) so that I can freeze inputs for payroll.|
|As a contractor, I want contractor timesheets (daily/weekly hours by project for contractors) so that I can log billable hours.|
|As an HR admin, I want attendance reports (muster roll, monthly register, late/early, absenteeism, OT, geo map) so that I can analyse attendance.|



|As an HR admin, I want shift templates (start/end, breaks, thresholds, overnight, punch window) so that I can define how we work.|
| - |
|As an HR admin, I want weekly-off patterns (fixed, alternate Saturdays, rotational) so that I can model our work week.|
|As an HR manager, I want roster planning & publish (grid roster per employee per date; bulk assign; publish) so that I can plan shift coverage.|
|As an employee, I want shift swap requests (peer swap with both + manager approval; rest-gap rule) so that I can swap shifts with a colleague.|
|As an HR manager, I want roster coverage report (coverage by location/hour) so that I can spot understaffing.|
|As an HR admin, I want leave types (paid/unpaid, balance-tracked, unit, colour) so that I can define our leave types.|
|As an HR admin, I want leave policies (versioned) (eligibility, accrual, caps, carry-forward, encashment, sandwich, notice, docs, half-day) so that I can apply leave rules exactly.|
|As an HR admin, I want holiday calendars (per entity + location; mandatory and restricted holidays) so that I can publish holidays.|
|As an employee, I want leave ledger & balances (append-only ledger; locked balance projection) so that I can trust my balance.|
|As an employee, I want apply leave (dates, half-day, reason, attachment; reserve on submit) so that I can take time off.|
|As a manager, I want approve / reject leave (convert or release reservation; attendance sync) so that I can decide leave quickly.|
|As an employee, I want cancel leave (cancel pending (release) or approved (approval + reversal)) so that I can change my plans.|
|As an HR admin, I want leave on behalf (hR applies for an employee) so that I can record leave for employees without access.|
|As an HR admin, I want accrual job (monthly/quarterly/annual accrual with pro-rata) so that I can balances grow automatically.|
|As an HR admin, I want year-end processing (carry-forward, lapse, encashment entries; idempotent) so that I can close the leave year.|
|As an employee, I want comp-off (credit from OT/holiday work; expiry) so that I can get time back for extra work.|
|As an HR admin, I want sandwich & holiday exclusion (exclude holidays/weekly-offs unless sandwich rule) so that I can count leave correctly.|
|As a manager, I want team leave calendar (calendar of team leaves and holidays) so that I can plan coverage.|
|As an HR admin, I want leave reports (balance register, availed, liability, LOP for payroll) so that I can manage leave liability.|
|As an HR admin, I want opening balance import (import balances at go-live as opening ledger entries) so that I can migrate from old system.|
|As a payroll admin, I want salary components (category, method, proration, taxable/PF/ESI flags, rounding, GL mapping) so that I can model every pay element.|
|As a payroll admin, I want formula DSL engine (sandboxed expression language with versioning and tests) so that I can configure without code risk.|
|As a payroll admin, I want salary structures (cTC templates by grade/entity) so that I can standardise pay.|
|As a payroll admin, I want employee compensation & revisions (effective-dated CTC; revisions create arrears) so that I can pay the agreed salary.|
|As a payroll admin, I want bulk revision upload (annual increments via import with approval) so that I can apply increments at scale.|



|As a payroll admin, I want payroll calendars & periods (frequency, cut-off, pay date per entity) so that I can run payroll on schedule.|
| - |
|As a payroll admin, I want payroll inputs (variable pay, one-time earnings/deductions, LOP review) so that I can capture monthly changes.|
|As a payroll admin, I want run payroll (calculate) (snapshot inputs; chunked calculation; line explanations) so that I can compute pay accurately.|
|As a payroll admin, I want variance review (compare to previous month; flag >20% changes) so that I can catch mistakes.|
|As a finance admin, I want maker-checker approval & lock (submit, approve (not by calculator), lock immutable) so that I can control payroll release.|
|As a finance admin, I want bank payment file & confirmation (bank templates; payment status from confirmation) so that I can pay employees on time.|
|As an employee, I want payslips (password-protected PDF from locked snapshot; publish; YTD) so that I can see how my pay was computed.|
|As a payroll admin, I want off-cycle runs (bonus, arrears, corrections, F&F runs) so that I can pay outside the monthly cycle.|
|As an employee, I want loans & advances (principal, EMI, interest, schedule, foreclosure) so that I can repay advances via salary.|
|As a payroll admin, I want full & final settlement (itemised F&F with sources and approvals) so that I can settle exits correctly.|
|As a payroll admin, I want payroll exchange (export/import) (versioned export templates; idempotent import of provider results; reconciliation) so that I can use an external payroll processor.|
|As a finance admin, I want gL journal export (payroll and reimbursement journals to Tally XML, Zoho Books, CSV) so that I can post payroll to accounts.|
|As a payroll admin, I want payroll reports (register, salary sheet, bank advice, CTC, arrears, loans) so that I can analyse payroll cost.|
|As a payroll admin, I want parallel run & go-live gate (compare native output with trusted payroll for N periods) so that I can go live without errors.|
|As a compliance officer, I want statutory rule sets (versioned rules with source, effective dates, approver, hash) so that I can keep statutory rules current and provable.|
|As a payroll admin, I want pF (EPF/EPS/EDLI) (wage base, ceilings, opt-out, contributions, ECR file) so that I can deduct and remit PF correctly.|
|As a payroll admin, I want eSI (eligibility per contribution period, contributions, file) so that I can comply with ESI.|
|As a payroll admin, I want professional Tax (state slabs from work location; monthly deduction; challan data) so that I can deduct PT per state.|
|As a payroll admin, I want labour Welfare Fund (state LWF contributions) so that I can comply with LWF.|
|As an employee, I want tax regime & declarations (regime choice, investment declarations by section, HRA, previous employer) so that I can reduce my TDS legally.|
|As a payroll admin, I want proof submission & verification (upload proofs; payroll verifies; variance applied) so that I can finalise TDS correctly.|
|As a payroll admin, I want tDS computation (projected annual income, monthly TDS, higher rate without PAN) so that I can withhold correct tax.|
|As a payroll admin, I want form 16 & 24Q (quarterly 24Q data; Form 16 Part B generation and publish) so that I can issue annual tax certificates.|
|As a compliance officer, I want gratuity & bonus registers (eligibility and computation registers) so that I can meet statutory registers.|



|As a finance admin, I want compliance calendar (due dates for PF, ESI, PT, TDS with reminders) so that I can never miss a due date.|
| - |
|As an HR admin, I want review cycles (cycle config: eligibility snapshot, phases, scale, weightage) so that I can run fair appraisal cycles.|
|As an employee, I want goals / OKRs (sMART goals with weightage 100%, cascading, progress) so that I can align my work.|
|As an HR admin, I want kPI library (kPIs by designation/department) so that I can measure roles consistently.|
|As a manager, I want continuous check-ins & 1:1s (notes, agreed actions) so that I can coach regularly.|
|As an employee, I want self & manager reviews (forms, ratings, comments, submit) so that I can reflect and be evaluated.|
|As an employee, I want 360 / peer feedback (request feedback; anonymity threshold) so that I can get rounded feedback.|
|As an HR manager, I want calibration (adjust ratings with reason; distribution view; 9-box) so that I can ensure fair ratings.|
|As an employee, I want release & acknowledgement (release ratings; employee acknowledges or disagrees) so that I can see and respond to my rating.|
|As a manager, I want increment & promotion recommendations (recommendations handed to compensation after HR approval) so that I can reward performance.|
|As a manager, I want pIP (performance improvement plans with check-ins and outcome) so that I can support under-performers fairly.|
|As an HR admin, I want cycle lock & reopen (close locks; HR reopen with reason) so that I can protect final ratings.|
|As an HR admin, I want course catalog (courses: video, doc, SCORM, classroom, external) so that I can offer learning.|
|As an HR admin, I want assignments & auto-assign rules (assign manually or by rule (new joiner, department)) so that I can ensure mandatory training.|
|As an employee, I want learner experience (my learning, progress, completion) so that I can learn and track progress.|
|As an employee, I want assessments (question bank, pass mark, attempts) so that I can prove understanding.|
|As an HR admin, I want training calendar & sessions (classroom sessions, capacity, attendance) so that I can run instructor-led training.|
|As a compliance officer, I want certifications with expiry (record certificates; reminders 60/30/7) so that I can keep certifications valid.|
|As an employee, I want training requests & budget (request external training; approval; budget tracking) so that I can grow my skills.|
|As an IT admin, I want asset categories & catalog (categories, models, attributes) so that I can organise assets.|
|As an IT admin, I want inventory (items with tag, serial, purchase, warranty, depreciation fields) so that I can know what we own.|
|As an employee, I want asset requests (employee requests asset; approval) so that I can get equipment I need.|
|As an IT admin, I want allocation & acknowledgement (allocate with condition/photos; employee acknowledges) so that I can track custody.|
|As an IT admin, I want return, transfer, repair, retire (return inspection; damage recovery; status changes) so that I can close custody cleanly.|
|As an IT admin, I want asset reports (register, by employee, unreturned on exit, warranty expiry) so that I can stay audit-ready.|
|As an HR admin, I want ticket categories & SLA (categories, groups, SLA per priority, business hours, confidentiality) so that I can route queries to the right team.|
|As an employee, I want raise & track tickets (employee raises; status; attachments; reopen) so that I can get answers to HR questions.|



|As a helpdesk agent, I want agent workspace (queue, assign, internal notes, canned responses) so that I can resolve tickets efficiently.|
| - |
|As an HR head, I want sLA timers & escalation (pause on awaiting employee; escalate on breach) so that I can keep service promises.|
|As an employee, I want knowledge base (articles suggested while typing) so that I can self-serve answers.|
|As an HR head, I want cSAT & helpdesk reports (satisfaction rating; volume, SLA %, backlog) so that I can measure service quality.|
|As a finance admin, I want expense policies (limits by category x grade x location; receipt thresholds; per-diem; mileage) so that I can control spend.|
|As an employee, I want submit claim with receipts (lines, receipts, currency, duplicate detection) so that I can get reimbursed.|
|As a manager, I want approve / audit claims (manager approve; finance audit; line-level decisions) so that I can approve valid spend.|
|As an employee, I want advances (request, approve, pay, settle against claims) so that I can fund upcoming expenses.|
|As a finance admin, I want reimbursement payout (via payroll component or bank file; idempotent paid status) so that I can pay claims accurately.|
|As a finance admin, I want expense reports (by status, category, policy violations, outstanding advances) so that I can control spend.|
|As a finance admin, I want travel policies (class, hotel caps, advance booking by grade) so that I can control travel cost.|
|As an employee, I want travel request (trip with legs, stay, estimate, advance) so that I can get approval to travel.|
|As a travel desk, I want travel desk bookings (upload confirmations and tickets) so that I can share bookings.|
|As an employee, I want trip settlement (expenses linked to trip; advance auto-settled) so that I can close my trip.|
|As an HR admin, I want announcements (targeted, scheduled, pinned; mandatory read receipts) so that I can reach the right employees.|
|As an HR admin, I want polls (quick single-question polls) so that I can gauge opinion quickly.|
|As an HR admin, I want surveys & eNPS (question types; anonymity modes; threshold results) so that I can measure engagement honestly.|
|As an employee, I want recognition & badges (peer kudos tied to values; optional points) so that I can appreciate colleagues.|
|As an HR admin, I want social feed moderation (likes, comments, report, hide) so that I can keep the feed respectful.|
|As an any user, I want role dashboards (employee, manager, HR, payroll, owner home dashboards) so that I can see key metrics on login.|
|As an HR admin, I want standard report library (catalog of 64 reports with filters and saved views) so that I can answer common questions without IT.|
|As an HR admin, I want export jobs (cSV/XLSX/PDF exports, background, expiring links, audited) so that I can share data offline.|
|As an HR manager, I want scheduled reports (email link on schedule) so that I can receive reports routinely.|
|As an HR admin, I want headcount & attrition analytics (point-in-time headcount, joiners/leavers, attrition %) so that I can track workforce trends.|
|As an HR admin, I want custom report builder (pick fields, filters, grouping within scope) so that I can answer new questions.|
|As an owner, I want analytics warehouse (nightly CDC to analytics store; dashboards) so that I can analyse trends at scale.|
|As an auditor, I want audit event writer (append-only events in business transaction with masked diffs) so that I can trust the audit trail.|



|As an auditor, I want audit search (filter by actor, entity, action, date; scope applies) so that I can investigate changes.|
| - |
|As an auditor, I want audit export (export evidence packs) so that I can provide evidence.|
|As a compliance officer, I want restricted data access log (log reveals and restricted downloads) so that I can know who saw sensitive data.|
|As a compliance officer, I want retention & legal hold (per-class retention jobs; legal hold overrides purge) so that I can keep data only as long as needed.|
|As a compliance officer, I want dPDP data-principal requests (access, correction, erasure, grievance with due dates) so that I can meet DPDP obligations.|
|As a tenant admin, I want login history (per-user login events and devices) so that I can spot suspicious access.|
|As a compliance officer, I want pOSH case log (restricted) (confidential case register for ICC) so that I can run internal committee cases.|
|As a platform, I want transactional outbox (same-transaction outbox; lease, backoff, DLQ, replay) so that I can never lose or duplicate notifications.|
|As an any user, I want in-app notification center (bell, read/unread, deep links) so that I can see what needs attention.|
|As a platform, I want email delivery (resend primary, SES fallback; bounces) so that I can deliver emails reliably.|
|As a tenant admin, I want templates (system + tenant overrides; security-critical locked; sanitised) so that I can match our tone.|
|As an employee, I want user preferences & quiet hours (mute non-mandatory categories; quiet hours) so that I can control interruptions.|
|As a tenant admin, I want sMS & WhatsApp (dLT-approved templates via MSG91/Gupshup) so that I can reach staff without email.|
|As an employee, I want push notifications (fCM/APNs for mobile) so that I can get approvals on my phone.|
|As a manager, I want daily digests (pending approvals and team-on-leave digests) so that I can reduce notification noise.|
|As a tenant admin, I want workflow definitions & versions (steps, approver types, modes, conditions; publish versions) so that I can fit approvals to our policy.|
|As a platform, I want approval runtime (instances pin version; resolve approvers; tasks; callbacks) so that I can route every request consistently.|
|As an approver, I want approval inbox (unified inbox with filters, bulk approve, reason) so that I can decide all requests in one place.|
|As a platform, I want self-approval prevention & fallback (escalate when approver is requester; fallback for vacant manager) so that I can prevent conflicts of interest.|
|As an HR admin, I want sLA, reminders, escalation (per-step SLA; reminders; escalate/auto-action) so that I can keep approvals moving.|
|As a manager, I want delegation (delegate approvals for date range) so that I can cover approvals on leave.|
|As a manager, I want email/mobile action links (signed single-use links re-checking permissions) so that I can approve from email.|
|As a tenant admin, I want visual workflow builder (drag-drop builder UI over WF-001) so that I can configure flows without help.|
|As a tenant admin, I want outbound webhooks (event subscriptions, HMAC signing, retries, auto-disable) so that I can connect our systems.|
|As a tenant admin, I want public API keys (scoped, expiring, hashed keys; rate limits) so that I can automate HR tasks.|
|As a recruiter, I want calendar integration (google/Microsoft calendar for interviews and leave) so that I can avoid double booking.|



|As a finance admin, I want accounting connectors (tally, Zoho Books, QuickBooks exports/push) so that I can sync payroll and expense journals.|
| - |
|As a manager, I want slack / Teams (notifications and approvals in chat) so that I can approve where I work.|
|As a tenant admin, I want integration health (status, last sync, failure alerts) so that I can know integrations work.|
|As an employee, I want mobile auth & device binding (oAuth PKCE, secure storage, biometric unlock, remote logout) so that I can use HR on my phone safely.|
|As an employee, I want mobile ESS (home, punch, leave, payslips, directory, announcements) so that I can do HR tasks on the go.|
|As a manager, I want mobile manager approvals (approval inbox with push) so that I can approve in seconds.|
|As an employee, I want mobile expense capture (receipt camera, OCR, draft claims) so that I can claim expenses on the spot.|
|As a security, I want mobile security controls (root/jailbreak and mock-location detection; no unencrypted caching) so that I can prevent punch fraud.|
|As a platform, I want tenant context & isolation suite (server-derived context; composite FKs; RLS; 404 masking; automated suite on every PR) so that I can guarantee tenant isolation.|
|As a platform, I want field encryption & blind index (envelope encryption per tenant data key; HMAC index) so that I can protect restricted data.|
|As a platform, I want rate limiting & WAF (per-IP/user/tenant limits; WAF rules) so that I can resist abuse.|
|As a platform, I want security headers, CSP, CSRF (helmet, CSP nonces, CSRF double-submit) so that I can block common web attacks.|
|As a platform, I want secrets & key management (secrets Manager, KMS, rotation) so that I can keep secrets safe.|
|As a platform, I want security scanning in CI (sAST, dependency, container, secret scans) so that I can catch vulnerabilities early.|
|As a platform, I want penetration test & remediation (annual third-party test before first enterprise go-live) so that I can prove security to customers.|
|As an HR admin, I want import framework (upload, scan, stage, validate, preview, commit, results) so that I can migrate data quickly.|
|As an HR admin, I want employee import (employees + assignments + contacts + bank) so that I can load all employees at go-live.|
|As an HR admin, I want other imports (leave balances, punches, holidays, compensation, assets, YTD payroll) so that I can bring history across.|
|As a finance admin, I want accounting books & COA (books per entity; chart of accounts tree) so that I can keep books in HRMS.|
|As a finance controller, I want fiscal periods & close (open/closing/closed; checklist; reopen with approval) so that I can close books with control.|
|As a finance admin, I want journals with maker-checker (draft, submit, approve, post, reverse; balanced) so that I can record transactions correctly.|
|As a finance controller, I want financial reports (trial balance, GL, P&L, balance sheet) so that I can report financial position.|
|As an employee, I want policy Q&A assistant (answers from caller-accessible policies with citations) so that I can get policy answers instantly.|
|As a recruiter, I want resume summarisation (summaries for recruiters) so that I can screen faster.|



|As a manager, I want review writing assistance (draft review comments from goals/check-ins) so that I can write better reviews.|
| - |



|||
| - | - |
|||
|||
|**Acceptance Criteria**|**Feature ID**|
|Given a new visitor, when signup completes, then tenant, default legal entity, owner, membership and pending subscription exist; partial failure rolls back all|TEN-001|
|Given an unverified owner, when the token is used twice, then the second use fails|TEN-002|
|Given approval mode manual, when tenant is pending\_review, then its users cannot reach product routes until SA approves|TEN-003|
|Given a suspended tenant, when its user calls any API, then 403 TENANT\_SUSPENDED|TEN-004|
|Given activation runs twice, then seeds exist once|TEN-005|
|Given attendance policy missing, when owner completes wizard, then it is rejected naming the step|TEN-006|
|Given idle timeout set to 20 min, then sessions idle 21 min require re-login|TEN-007|
|Given export requested, then a single expiring download link is emailed and the event audited|TEN-008|
|Given a plan version is published, then existing subscriptions keep their version|TEN-009|
|Given activation at T, then trial\_ends\_at = T + 14 days and trial does not burn in pending\_review|TEN-010|
|Given module disabled, when called, then 403 MODULE\_NOT\_ENTITLED|TEN-011|
|Given seats full, when HR creates employee, then 422 SEAT\_LIMIT\_REACHED|TEN-012|
|Given an issued invoice, when plan price changes, then invoice totals stay unchanged|TEN-013|
|Given a duplicate gateway webhook, then one payment is recorded|TEN-014|
|Given trial ends in 3 days, then one reminder is sent that day|TEN-015|
|Given flag off for tenant, then gated endpoints return 403 FEATURE\_DISABLED|TEN-016|
|Given 5 failures in 15 min, then the account locks 15 min and an audit event is written|IAM-001|
|Given logout, then refresh token of that session is unusable|IAM-002|



|Given a rotated refresh token is reused, then the whole family is revoked and audited|IAM-003|
| - | - |
|Given reset completes, then all existing sessions are revoked|IAM-004|
|Given a password in the breached corpus, then it is rejected|IAM-005|
|Given I revoke a device session, then its next call returns 401|IAM-006|
|Given an HR admin without MFA, when logging in after enforcement, then enrollment is required before any route|IAM-007|
|Given enforce-SSO on, then password login is refused except for the break-glass owner|IAM-008|
|Given IdP deactivates a user, then membership is suspended within 1 minute|IAM-009|
|Given a registered passkey, then login succeeds without password|IAM-010|
|Given an invite with another tenant's role, then 403 and audit|IAM-011|
|Given an expired or wrong-recipient token, then acceptance fails|IAM-012|
|Given membership suspended, then sessions revoked immediately|IAM-013|
|Given cap 1, when inviting an email with a membership elsewhere, then 409 EMAIL\_IN\_USE|IAM-014|
|Given a switch, then tenant-scoped client caches are cleared|IAM-015|
|Given an employee already linked, then a second link fails 409|IAM-016|
|Given an OA, when trying to create a permission, then not possible|IAM-017|
|Given a template, when edited, then 403|IAM-018|
|Given a custom role, then only catalog permissions are selectable|IAM-019|
|Given grant expired, then the permission is not effective the next minute|IAM-020|
|Given OA assigns platform role, then 403 and audit|IAM-021|
|Given a manager with TEAM, then only direct reports are returned|IAM-022|
|Given EMP+MGR roles, then user receives the union|IAM-023|
|Given no restricted grant, then bank number is masked|IAM-024|



|Given a break-glass session expired, then further access is denied|IAM-025|
| - | - |
|Given a review run, then report lists all grants with last use|IAM-026|
|Given two entities with same code, then 409|ORG-001|
|Given PAN invalid format, then 422|ORG-002|
|Given radius 3000 m, then 422 (max 2000)|ORG-003|
|Given branch with locations, when deactivated, then blocked|ORG-004|
|Given parent from other tenant, then FK rejects|ORG-005|
|Given duplicate active name, then 409|ORG-006|
|Given pay range min > max, then 422|ORG-007|
|Given splits not totalling 100, then 422|ORG-008|
|Given type in use, when deleted, then deactivated instead|ORG-009|
|Given an employee, then chart shows manager chain and direct reports|ORG-010|
|Given 3 active employees, then deactivation blocked|ORG-011|
|Given duplicate employee number in tenant, then 409|EMP-001|
|Given field class Restricted without grant, then field masked|EMP-002|
|Given 5,000 employees, then list p95 < 500 ms|EMP-003|
|Given overlapping primary assignment, then rejected|EMP-004|
|Given rehire, then new assignment links to prior history|EMP-005|
|Given transfer effective tomorrow, then applied at 00:05 local|EMP-006|
|Given A manages B, when B set as A's manager, then MANAGER\_CYCLE|EMP-007|
|Given terminated, when set active directly, then rejected (rehire only)|EMP-008|
|Given emergency contact without phone, then 422|EMP-009|
|Given IFSC invalid, then 422; given change, then approval required|EMP-010|



|Given PAN duplicate in tenant, then 409|EMP-011|
| - | - |
|Given probation ends in 15 days, then a task is created once|EMP-012|
|Given EMP role, then salary and bank never returned|EMP-013|
|Given no salary grant, then salary columns absent|EMP-014|
|Given archived, then excluded from lists but available in reports|EMP-015|
|Given birthday hidden, then not shown|EMP-016|
|Given PATCH department, then 403 FIELD\_NOT\_EDITABLE|ESS-001|
|Given bank change pending, then payroll uses old account|ESS-002|
|Given 4 request types, then all appear with status|ESS-003|
|Given home loads, then p95 < 800 ms|ESS-004|
|Given TEAM scope, then only direct reports listed|ESS-005|
|Given new notice version, then re-acknowledgement required|ESS-006|
|Given request, then export of own records only|ESS-007|
|Given upload complete, then file status quarantined until scan|DOC-001|
|Given scan pending, when download requested, then 409 FILE\_NOT\_READY|DOC-002|
|Given other tenant's key, then 404|DOC-003|
|Given type mandatory, then missing list shows it|DOC-004|
|Given rejection, then employee notified to re-upload|DOC-005|
|Given expiry in 30 days, then one reminder sent|DOC-006|
|Given v2 published, then re-acknowledgement required|DOC-007|
|Given missing merge value, then generation blocked listing fields|DOC-008|
|Given signed callback, then signed PDF stored as new version|DOC-009|
|Given audience excludes me, then folder hidden|DOC-010|



|Given approved requisition, then job can be opened|REC-001|
| - | - |
|Given unapproved requisition, then job cannot open|REC-002|
|Given apply without consent tick, then rejected|REC-003|
|Given job closed, then postings withdrawn|REC-004|
|Given duplicate referral of same candidate, then first referrer kept|REC-005|
|Given same email, then duplicate warning and merge option|REC-006|
|Given stage move, then actor and reason logged|REC-007|
|Given parse failure, then manual entry offered|REC-008|
|Given retention passed, then candidate anonymised by job|REC-009|
|Given slot in past, then 422|REC-010|
|Given interviewer not assigned, then 404|REC-011|
|Given offer above band max, then approval required before send|REC-012|
|Given accept clicked twice, then one employee created|REC-013|
|Given acceptance, then exactly one prehire employee|REC-014|
|Given filters, then funnel counts match pipeline|REC-015|
|Given no matching template, then default template applied|ONB-001|
|Given last mandatory task done, then case completed|ONB-002|
|Given expired link, then friendly expiry page|ONB-003|
|Given rejection, then re-upload request sent|ONB-004|
|Given missing mandatory doc, then joined blocked unless override reason|ONB-005|
|Given day 30, then check-in task created|ONB-006|
|Given withdrawal before acceptance, then status restored|OFB-001|
|Given acceptance, then status on\_notice and notice shortfall computed|OFB-002|



|Given termination with immediate revocation, then sessions revoked|OFB-003|
| - | - |
|Given IT clearance open, then F&F finalise blocked|OFB-004|
|Given employee responses, then manager cannot view|OFB-005|
|Given last day passed, then login fails next day 00:00|OFB-006|
|Given F&F not paid, then relieving letter blocked (configurable)|OFB-007|
|Given flag no, then rehire shows warning|OFB-008|
|Given CHECK\_IN twice, then 422 INVALID\_PUNCH\_TRANSITION; same idempotency key creates one punch|ATT-001|
|Given 600 m outside 200 m fence with block policy, then rejected|ATT-002|
|Given selfie required, when missing, then punch rejected|ATT-003|
|Given IP outside allowlist, then 403 PUNCH\_IP\_NOT\_ALLOWED|ATT-004|
|Given unmapped device ID, then punch goes to exceptions queue|ATT-005|
|Given wrong PIN 5 times, then kiosk locks the employee 15 min|ATT-006|
|Given offline punch at 09:02 synced 09:40, then punched\_at 09:02 and no duplicate|ATT-007|
|Given three break cycles, then break minutes = sum of cycles|ATT-008|
|Given 01:30 punch for 22:00-06:00 shift, then previous date|ATT-009|
|Given new version published, then only days from effective date use it|ATT-010|
|Given no punches on a working day, then status absent next morning|ATT-011|
|Given TEAM scope, then only direct reports|ATT-012|
|Given approval, then correction punches added and originals kept|ATT-013|
|Given approved WFH, then day status work\_from\_home|ATT-014|
|Given OT above daily cap, then capped and flagged|ATT-015|
|Given locked period, then regularization returns PERIOD\_LOCKED|ATT-016|
|Given week submitted, then manager approval required|ATT-017|
|Given manager export, then TEAM rows only|ATT-018|



|Given end equals start without overnight flag, then 422|SFT-001|
| - | - |
|Given 2nd/4th Saturday off, then those dates are weekly\_off|SFT-002|
|Given overlapping shifts on a date, then publish rejected listing conflicts|SFT-003|
|Given rest gap 8 h with 11 h rule, then rejected|SFT-004|
|Given roster, then coverage heatmap by hour|SFT-005|
|Given duplicate code, then 409|LV-001|
|Given new version effective 1 Apr, then March requests unchanged|LV-002|
|Given restricted holiday quota 2, then third pick rejected|LV-003|
|Given rejected 2-day request, then available +2 exactly|LV-004|
|Given concurrent requests exceeding balance, then exactly one succeeds|LV-005|
|Given approval, then deduction ledger entry and attendance on\_leave|LV-006|
|Given approved past leave cancel, then needs approval|LV-007|
|Given on-behalf request, then actor and subject both audited|LV-008|
|Given job reruns for same month, then no duplicate entries|LV-009|
|Given run twice, then no duplicates|LV-010|
|Given comp-off older than 60 days, then lapsed|LV-011|
|Given Fri+Mon request, sandwich off = 2 days, on = 4|LV-012|
|Given TEAM scope, then only direct reports|LV-013|
|Given liability report, then days x daily rate per employee|LV-014|
|Given import replayed, then no duplicate opening entries|LV-015|
|Given formula referencing unknown component, then 422|PAY-001|
|Given formula with function call outside allowlist, then rejected|PAY-002|
|Given components not summing to CTC, then warning shown|PAY-003|
|Given back-dated revision, then arrears in next open run|PAY-004|
|Given revision rows with invalid structure, then rejected rows reported|PAY-005|



|Given overlapping periods, then 422|PAY-006|
| - | - |
|Given input for employee outside entity, then rejected|PAY-007|
|Given attendance not locked, then calculate blocked|PAY-008|
|Given 25% change, then flagged with reason prompt|PAY-009|
|Given calculator approves, then 403 MAKER\_CHECKER\_VIOLATION|PAY-010|
|Given confirmation imported twice, then idempotent|PAY-011|
|Given run not approved, then payslip not visible|PAY-012|
|Given correction run, then linked to original run|PAY-013|
|Given foreclosure, then remaining installments cancelled|PAY-014|
|Given open clearance, then finalise blocked|PAY-015|
|Given same provider file imported twice, then no duplicates; totals mismatch creates exception|PAY-016|
|Given locked run, then journal debits equal credits|PAY-017|
|Given HR without salary grant, then report denied|PAY-018|
|Given unexplained variance, then native activation blocked|PAY-019|
|Given rule effective 1 Apr, then March locked run unaffected|STA-001|
|Given ECR export, then totals equal register|STA-002|
|Given wage crosses ceiling mid-period, then eligibility continues to period end|STA-003|
|Given missing rule for state, then run blocked STATUTORY\_RULE\_MISSING|STA-004|
|Given LWF half-yearly state, then deducted in configured months|STA-005|
|Given declaration above section limit, then capped with message|STA-006|
|Given proof rejected, then employee notified with reason|STA-007|
|Given no PAN, then higher rate and flag|STA-008|
|Given FY closed, then Form 16 available in ESS|STA-009|
|Given 5-year service, then gratuity eligible in register|STA-010|



|Given due in 3 days, then reminder to PAY/FIN|STA-011|
| - | - |
|Given phase dates out of order, then 422|PRF-001|
|Given weights sum 90, then rejected|PRF-002|
|Given KPI attached, then becomes goal with target|PRF-003|
|Given private note, then employee cannot see it|PRF-004|
|Given mandatory question blank, then submit blocked|PRF-005|
|Given 2 responses and threshold 3, then hidden|PRF-006|
|Given change without reason, then rejected|PRF-007|
|Given deadline passed, then auto-acknowledged flag set|PRF-008|
|Given recommendation approved, then draft revision created (not applied)|PRF-009|
|Given PIP closed, then outcome recorded and locked|PRF-010|
|Given closed cycle edit, then 409 CYCLE\_LOCKED|PRF-011|
|Given SCORM package invalid, then upload rejected|LMS-001|
|Given new joiner matches rule, then assigned within 24 h|LMS-002|
|Given completion, then certificate issued if configured|LMS-003|
|Given last attempt failed, then assignment failed and manager notified|LMS-004|
|Given session full, then waitlist|LMS-005|
|Given expiry in 30 days, then single reminder|LMS-006|
|Given budget exceeded, then extra approval|LMS-007|
|Given duplicate category code, then 409|AST-001|
|Given duplicate tag, then 409|AST-002|
|Given approval, then allocation task created|AST-003|
|Given asset already allocated, then 409 ASSET\_NOT\_AVAILABLE|AST-004|
|Given damaged return with recovery, then F&F/payroll item created after approval|AST-005|
|Given exited employee holds asset, then listed|AST-006|
|Given category confidential, then only case group sees tickets|HLP-001|
|Given resolved for 3 days, then auto-closed|HLP-002|



|Given SLA at 80%, then at-risk badge and alert|HLP-003|
| - | - |
|Given awaiting\_employee, then SLA paused|HLP-004|
|Given matching article, then shown before submit|HLP-005|
|Given ticket closed, then CSAT requested once|HLP-006|
|Given claim over limit, then justification required|EXP-001|
|Given duplicate amount/date/merchant within 30 days, then flagged|EXP-002|
|Given finance approves own claim, then 403|EXP-003|
|Given unsettled advance at exit, then listed in clearance|EXP-004|
|Given confirmation twice, then paid once|EXP-005|
|Given filter by cost center, then totals match|EXP-006|
|Given business class for economy grade, then out-of-policy|TRV-001|
|Given return before departure, then 422|TRV-002|
|Given booking uploaded, then employee notified|TRV-003|
|Given linked claim approved, then balance computed|TRV-004|
|Given audience Mumbai only, then Pune employees do not see it|ENG-001|
|Given poll closed, then voting blocked|ENG-002|
|Given anonymous mode, then no respondent link stored|ENG-003|
|Given monetary reward, then manager approval and payroll item|ENG-004|
|Given reported post, then appears in moderation queue|ENG-005|
|Given widget query, then p95 < 800 ms|RPT-001|
|Given saved view, then reopens with same filters|RPT-002|
|Given export cell starts with '=', then neutralised|RPT-003|
|Given restricted report, then link not attachment|RPT-004|
|Given month filter, then headcount equals active assignments at month end|RPT-005|
|Given field above caller class, then not selectable|RPT-006|
|Given warehouse lag > 24 h, then alert|RPT-007|
|Given app DB role UPDATE on audit\_events, then permission denied|AUD-001|



|Given AUD scoped to entity A, then entity B events hidden|AUD-002|
| - | - |
|Given no audit.export, then 403|AUD-003|
|Given reveal, then access log row with reason|AUD-004|
|Given legal hold on employee, then purge skipped|AUD-005|
|Given erasure blocked by statutory retention, then anonymisation recorded|AUD-006|
|Given failed logins, then shown with IP and time|AUD-007|
|Given non-ICC HR, then case 404|AUD-008|
|Given same event delivered twice, then one email|NTF-001|
|Given mark all read, then unread count 0|NTF-002|
|Given 3 hard bounces, then address unverified|NTF-003|
|Given OA edits password-reset template, then 403|NTF-004|
|Given payroll event, then cannot be muted|NTF-005|
|Given template not DLT-approved, then SMS not sent|NTF-006|
|Given device token revoked, then push skipped|NTF-007|
|Given no pending items, then no digest|NTF-008|
|Given cyclic step, then publish rejected|WF-001|
|Given definition edited, then running instances keep old version|WF-002|
|Given stale decision, then 409 STALE\_TASK|WF-003|
|Given manager's own leave, then routed to next level|WF-004|
|Given SLA breach, then escalated once|WF-005|
|Given delegate is requester, then task not delegated to them|WF-006|
|Given link reused, then rejected|WF-007|
|Given invalid graph, then publish disabled with reasons|WF-008|
|Given private IP URL, then rejected|INT-001|
|Given expired key, then 401|INT-002|
|Given interview rescheduled, then calendar event updated|INT-003|



|Given push failure, then retry and alert|INT-004|
| - | - |
|Given approval in Slack, then same permission checks|INT-005|
|Given 3 consecutive failures, then OA alerted|INT-006|
|Given terminated, then app logged out next call|MOB-001|
|Given offline, then cached views shown read-only|MOB-002|
|Given push tapped, then opens task|MOB-003|
|Given OCR amount, then editable before submit|MOB-004|
|Given mock location, then punch flagged|MOB-005|
|Given tenant A requests tenant B id, then 404 and no side effects|SEC-001|
|Given DB dump, then bank numbers unreadable|SEC-002|
|Given 11 logins/min from one IP, then 429|SEC-003|
|Given POST without CSRF token, then 403|SEC-004|
|Given secret rotated, then app reloads without downtime|SEC-005|
|Given critical CVE, then build fails|SEC-006|
|Given high finding, then release blocked until fixed|SEC-007|
|Given preview, then no writes before commit|IMP-001|
|Given replay, then no duplicate employees|IMP-002|
|Given child row of rejected parent, then dependency error|IMP-003|
|Given control account, then manual posting blocked|FIN-001|
|Given closed period, then posting rejected|FIN-002|
|Given unbalanced journal, then post rejected|FIN-003|
|Given posted lines, then trial balance debits equal credits|FIN-004|
|Given question about colleague salary, then refusal|AI-001|
|Given candidate not accessible, then no summary|AI-002|



|Given suggestion, then manager must edit/accept explicitly|AI-003|
| - | - |



|||
| - | - |
|||
|||
|**Priority**|**Story Points**|
|P0|8|
|P0|3|
|P0|5|
|P0|5|
|P0|5|
|P0|8|
|P0|5|
|P1|8|
|P0|5|
|P0|5|
|P0|5|
|P1|3|
|P2|13|
|P2|8|
|P0|3|
|P0|3|
|P0|5|
|P0|3|



|P0|8|
| - | -: |
|P0|3|
|P0|3|
|P0|3|
|P0|8|
|P1|13|
|P2|8|
|P2|5|
|P0|5|
|P0|3|
|P0|3|
|P0|3|
|P1|3|
|P0|3|
|P0|5|
|P0|3|
|P0|5|
|P0|8|
|P0|5|
|P0|8|
|P0|3|
|P0|8|



|P1|5|
| - | -: |
|P1|3|
|P0|5|
|P1|3|
|P0|5|
|P1|3|
|P0|5|
|P0|3|
|P0|3|
|P1|3|
|P0|3|
|P0|5|
|P0|3|
|P0|8|
|P0|8|
|P0|5|
|P0|8|
|P0|8|
|P0|3|
|P0|3|
|P0|5|
|P0|5|
|P0|5|



|P0|5|
| - | -: |
|P1|3|
|P0|5|
|P0|3|
|P0|3|
|P2|3|
|P0|5|
|P0|5|
|P0|5|
|P0|5|
|P0|5|
|P0|3|
|P1|5|
|P0|5|
|P0|5|
|P0|3|
|P0|3|
|P0|5|
|P0|3|
|P1|5|
|P1|8|
|P2|5|
|P1|3|



|P1|5|
| - | -: |
|P1|5|
|P1|5|
|P2|8|
|P1|3|
|P1|5|
|P1|8|
|P2|5|
|P1|3|
|P1|8|
|P1|5|
|P1|8|
|P1|3|
|P1|5|
|P1|5|
|P1|5|
|P1|8|
|P1|8|
|P1|3|
|P1|3|
|P2|3|
|P1|5|
|P1|5|



|P1|3|
| - | -: |
|P1|5|
|P1|3|
|P1|3|
|P1|3|
|P2|3|
|P0|8|
|P1|5|
|P2|5|
|P1|3|
|P1|13|
|P2|5|
|P1|5|
|P0|13|
|P0|5|
|P0|8|
|P0|5|
|P0|5|
|P0|8|
|P0|5|
|P1|5|
|P0|5|
|P2|5|
|P0|5|



|P0|5|
| - | -: |
|P0|3|
|P1|8|
|P2|5|
|P2|3|
|P0|3|
|P0|13|
|P0|5|
|P0|8|
|P0|8|
|P0|5|
|P0|5|
|P1|3|
|P1|5|
|P1|5|
|P1|5|
|P0|3|
|P0|5|
|P0|5|
|P0|3|
|P1|8|
|P1|13|
|P1|5|
|P1|8|
|P1|5|



|P1|3|
| - | -: |
|P1|5|
|P1|13|
|P1|5|
|P1|5|
|P1|5|
|P1|5|
|P1|5|
|P1|5|
|P1|8|
|P1|8|
|P1|5|
|P1|5|
|P1|5|
|P1|8|
|P1|8|
|P1|5|
|P1|5|
|P2|3|
|P1|8|
|P1|5|
|P1|13|
|P1|8|
|P2|5|



|P1|3|
| - | -: |
|P1|8|
|P1|8|
|P1|5|
|P1|5|
|P1|8|
|P1|5|
|P1|8|
|P1|3|
|P2|5|
|P2|5|
|P1|3|
|P2|8|
|P2|5|
|P2|5|
|P2|5|
|P2|5|
|P2|5|
|P2|3|
|P1|3|
|P1|5|
|P1|3|
|P1|5|
|P1|5|
|P1|3|
|P2|5|
|P2|5|



|P2|8|
| - | -: |
|P2|5|
|P2|5|
|P2|3|
|P1|5|
|P1|8|
|P1|5|
|P1|5|
|P1|5|
|P1|3|
|P2|3|
|P2|5|
|P2|3|
|P2|3|
|P1|5|
|P2|3|
|P1|8|
|P2|5|
|P2|3|
|P0|8|
|P0|8|
|P0|5|
|P1|3|
|P0|5|
|P2|13|
|P2|8|
|P0|8|



|P0|5|
| - | -: |
|P1|3|
|P0|3|
|P1|5|
|P1|5|
|P0|3|
|P2|5|
|P0|8|
|P0|5|
|P0|5|
|P0|5|
|P1|3|
|P2|5|
|P1|5|
|P1|3|
|P0|13|
|P0|13|
|P0|8|
|P0|5|
|P1|5|
|P1|3|
|P1|5|
|P2|8|
|P1|5|
|P1|5|
|P1|5|



|P1|5|
| - | -: |
|P2|5|
|P1|3|
|P1|8|
|P1|13|
|P1|5|
|P2|5|
|P1|5|
|P0|13|
|P0|8|
|P0|5|
|P0|3|
|P0|5|
|P0|3|
|P1|5|
|P0|13|
|P0|5|
|P1|8|
|P2|8|
|P2|5|
|P2|13|
|P2|8|
|P2|8|
|P2|5|



|P2|5|
| - | -: |


|**Sheet 4 - Frontend Tasks**||||
| - | - | :- | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*||||
|||||
|**Task ID**|**Module**|**Screen**||
|FE-001|Tenant & Subscription Management|Signup||
|FE-002|Tenant & Subscription Management|Verify Email||
|FE-003|Tenant & Subscription Management|Platform Tenants||
|FE-004|Tenant & Subscription Management|Platform Tenant Detail||
|FE-005|Tenant & Subscription Management|Setup Wizard||
|FE-006|Tenant & Subscription Management|Tenant Settings||
|FE-007|Tenant & Subscription Management|Data Export||
|FE-008|Tenant & Subscription Management|Platform Plans||
|FE-009|Tenant & Subscription Management|Subscription||
|FE-010|Tenant & Subscription Management|Employee Create||
|FE-011|Tenant & Subscription Management|Platform Billing||
|FE-012|Tenant & Subscription Management|Subscription||
|FE-013|Tenant & Subscription Management|Platform Flags||
|FE-014|Identity, Authentication & Access Control|Login||
|FE-015|Identity, Authentication & Access Control|App Shell||
|FE-016|Identity, Authentication & Access Control|Forgot Password||
|FE-017|Identity, Authentication & Access Control|My Security||
|FE-018|Identity, Authentication & Access Control|My Security||
|FE-019|Identity, Authentication & Access Control|MFA Setup||
|FE-020|Identity, Authentication & Access Control|SSO Settings||
|FE-021|Identity, Authentication & Access Control|SSO Settings||
|FE-022|Identity, Authentication & Access Control|My Security||
|FE-023|Identity, Authentication & Access Control|Users||
|FE-024|Identity, Authentication & Access Control|Accept Invite||
|FE-025|Identity, Authentication & Access Control|Users||
|FE-026|Identity, Authentication & Access Control|Select Tenant||
|FE-027|Identity, Authentication & Access Control|Employee Profile||
|FE-028|Identity, Authentication & Access Control|Roles||
|FE-029|Identity, Authentication & Access Control|Roles||
|FE-030|Identity, Authentication & Access Control|Role Editor||
|FE-031|Identity, Authentication & Access Control|User Detail||
|FE-032|Identity, Authentication & Access Control|Platform Break-glass||
|FE-033|Identity, Authentication & Access Control|Access Review||
|FE-034|Organization Management|Legal Entities||
|FE-035|Organization Management|Legal Entity Detail||
|FE-036|Organization Management|Locations||
|FE-037|Organization Management|Branches||
|FE-038|Organization Management|Departments||
|FE-039|Organization Management|Designations||
|FE-040|Organization Management|Grades||
|FE-041|Organization Management|Cost Centers||
|FE-042|Organization Management|Employment Types||
|FE-043|Organization Management|Org Chart||
|FE-044|Employee Management|Employee Create||
|FE-045|Employee Management|Employee Profile||



|FE-046|Employee Management|Employee List|
| - | - | - |
|FE-047|Employee Management|Employment History|
|FE-048|Employee Management|Employee Actions|
|FE-049|Employee Management|Employee Profile|
|FE-050|Employee Management|Employee Profile|
|FE-051|Employee Management|Employee Profile|
|FE-052|Employee Management|Probation Due|
|FE-053|Employee Management|Directory|
|FE-054|Employee Management|Employee List|
|FE-055|Employee Management|Employee Profile|
|FE-056|Employee Management|Home|
|FE-057|Employee Self-Service|My Profile|
|FE-058|Employee Self-Service|My Profile|
|FE-059|Employee Self-Service|My Requests|
|FE-060|Employee Self-Service|Home|
|FE-061|Employee Self-Service|My Team|
|FE-062|Employee Self-Service|Privacy Notice|
|FE-063|Employee Self-Service|My Privacy|
|FE-064|Documents Management|FileUploadDropzone|
|FE-065|Documents Management|ScanStatus|
|FE-066|Documents Management|Document Types|
|FE-067|Documents Management|Employee Documents|
|FE-068|Documents Management|Expiring Documents|
|FE-069|Documents Management|Policies|
|FE-070|Documents Management|Letter Templates|
|FE-071|Documents Management|Letter Detail|
|FE-072|Documents Management|Document Library|
|FE-073|Recruitment (ATS)|Requisitions|
|FE-074|Recruitment (ATS)|Jobs|
|FE-075|Recruitment (ATS)|Careers Page|
|FE-076|Recruitment (ATS)|Job Detail|
|FE-077|Recruitment (ATS)|Refer a Friend|
|FE-078|Recruitment (ATS)|Candidates|
|FE-079|Recruitment (ATS)|Pipeline Board|
|FE-080|Recruitment (ATS)|Candidate Create|
|FE-081|Recruitment (ATS)|Interviews|
|FE-082|Recruitment (ATS)|Scorecard|
|FE-083|Recruitment (ATS)|Offers|
|FE-084|Recruitment (ATS)|Offer Portal|
|FE-085|Recruitment (ATS)|Recruitment Reports|
|FE-086|Onboarding & Pre-joining|Onboarding Templates|
|FE-087|Onboarding & Pre-joining|Onboarding Board|
|FE-088|Onboarding & Pre-joining|Pre-joining Portal|
|FE-089|Onboarding & Pre-joining|Onboarding Case|
|FE-090|Onboarding & Pre-joining|Onboarding Case|
|FE-091|Onboarding & Pre-joining|Onboarding Case|
|FE-092|Offboarding & Exit|Resign|
|FE-093|Offboarding & Exit|Exit Case|
|FE-094|Offboarding & Exit|Exit Case|
|FE-095|Offboarding & Exit|Exit Case|



|FE-096|Offboarding & Exit|Exit Interview|
| - | - | - |
|FE-097|Offboarding & Exit|Exit Case|
|FE-098|Offboarding & Exit|Exit Case|
|FE-099|Attendance & Time|Punch Widget|
|FE-100|Attendance & Time|Mobile Punch|
|FE-101|Attendance & Time|Mobile Punch|
|FE-102|Attendance & Time|Devices|
|FE-103|Attendance & Time|Kiosk|
|FE-104|Attendance & Time|Mobile Punch|
|FE-105|Attendance & Time|Attendance Policies|
|FE-106|Attendance & Time|Attendance Calendar|
|FE-107|Attendance & Time|Regularize|
|FE-108|Attendance & Time|On Duty Request|
|FE-109|Attendance & Time|Overtime|
|FE-110|Attendance & Time|Attendance Lock|
|FE-111|Attendance & Time|Timesheet|
|FE-112|Attendance & Time|Attendance Reports|
|FE-113|Shift & Roster|Shifts|
|FE-114|Shift & Roster|Weekly Offs|
|FE-115|Shift & Roster|Roster|
|FE-116|Shift & Roster|Shift Swap|
|FE-117|Shift & Roster|Coverage Report|
|FE-118|Leave Management|Leave Types|
|FE-119|Leave Management|Leave Policies|
|FE-120|Leave Management|Holidays|
|FE-121|Leave Management|Leave Balance|
|FE-122|Leave Management|Apply Leave|
|FE-123|Leave Management|Approvals|
|FE-124|Leave Management|My Leave|
|FE-125|Leave Management|Apply Leave|
|FE-126|Leave Management|Year End|
|FE-127|Leave Management|Comp-off|
|FE-128|Leave Management|Team Calendar|
|FE-129|Leave Management|Leave Reports|
|FE-130|Leave Management|Import|
|FE-131|Payroll|Components|
|FE-132|Payroll|Formula Editor|
|FE-133|Payroll|Salary Structures|
|FE-134|Payroll|Compensation|
|FE-135|Payroll|Import|
|FE-136|Payroll|Payroll Calendar|
|FE-137|Payroll|Payroll Inputs|
|FE-138|Payroll|Payroll Run|
|FE-139|Payroll|Payroll Run|
|FE-140|Payroll|Payroll Run|
|FE-141|Payroll|Payroll Payments|
|FE-142|Payroll|My Payslips|
|FE-143|Payroll|Payroll Run|
|FE-144|Payroll|Loans|
|FE-145|Payroll|F&F Settlement|



|FE-146|Payroll|Payroll Exchange|
| - | - | - |
|FE-147|Payroll|Payroll Run|
|FE-148|Payroll|Payroll Reports|
|FE-149|Payroll|Parallel Run|
|FE-150|Statutory Compliance & Tax (India)|Statutory Rules|
|FE-151|Statutory Compliance & Tax (India)|PF|
|FE-152|Statutory Compliance & Tax (India)|ESI|
|FE-153|Statutory Compliance & Tax (India)|Professional Tax|
|FE-154|Statutory Compliance & Tax (India)|LWF|
|FE-155|Statutory Compliance & Tax (India)|My Tax Declarations|
|FE-156|Statutory Compliance & Tax (India)|Proof Verification|
|FE-157|Statutory Compliance & Tax (India)|TDS Sheet|
|FE-158|Statutory Compliance & Tax (India)|Form 16|
|FE-159|Statutory Compliance & Tax (India)|Statutory Registers|
|FE-160|Statutory Compliance & Tax (India)|Compliance Calendar|
|FE-161|Performance Management|Cycles|
|FE-162|Performance Management|Goals|
|FE-163|Performance Management|KPI Library|
|FE-164|Performance Management|1:1s|
|FE-165|Performance Management|Review Form|
|FE-166|Performance Management|Feedback|
|FE-167|Performance Management|Calibration|
|FE-168|Performance Management|Review Result|
|FE-169|Performance Management|Recommendations|
|FE-170|Performance Management|PIP|
|FE-171|Performance Management|Cycle Detail|
|FE-172|Learning Management|Courses|
|FE-173|Learning Management|Assignments|
|FE-174|Learning Management|My Learning|
|FE-175|Learning Management|Assessment|
|FE-176|Learning Management|Training Calendar|
|FE-177|Learning Management|Certifications|
|FE-178|Learning Management|Training Request|
|FE-179|Asset Management|Asset Categories|
|FE-180|Asset Management|Asset Inventory|
|FE-181|Asset Management|Request Asset|
|FE-182|Asset Management|Allocate Asset|
|FE-183|Asset Management|Asset Detail|
|FE-184|Asset Management|Asset Reports|
|FE-185|Helpdesk|Helpdesk Settings|
|FE-186|Helpdesk|My Tickets|
|FE-187|Helpdesk|Agent Queue|
|FE-188|Helpdesk|Knowledge Base|
|FE-189|Helpdesk|Helpdesk Reports|
|FE-190|Expense Management|Expense Policies|
|FE-191|Expense Management|My Expenses|
|FE-192|Expense Management|Approvals|
|FE-193|Expense Management|Advances|
|FE-194|Expense Management|Reimbursements|
|FE-195|Expense Management|Expense Reports|



|FE-196|Travel Management|Travel Policies|
| - | - | - |
|FE-197|Travel Management|Travel Request|
|FE-198|Travel Management|Travel Desk|
|FE-199|Travel Management|Trip Detail|
|FE-200|Announcements, Surveys & Engagement|Announcements|
|FE-201|Announcements, Surveys & Engagement|Polls|
|FE-202|Announcements, Surveys & Engagement|Surveys|
|FE-203|Announcements, Surveys & Engagement|Recognition Wall|
|FE-204|Announcements, Surveys & Engagement|Moderation|
|FE-205|Reports & Dashboards|Home|
|FE-206|Reports & Dashboards|Reports|
|FE-207|Reports & Dashboards|Export Dialog|
|FE-208|Reports & Dashboards|Report Schedules|
|FE-209|Reports & Dashboards|Workforce Analytics|
|FE-210|Reports & Dashboards|Report Builder|
|FE-211|Audit & Compliance|Audit Log|
|FE-212|Audit & Compliance|Audit Log|
|FE-213|Audit & Compliance|Data Access Log|
|FE-214|Audit & Compliance|Retention|
|FE-215|Audit & Compliance|Privacy Requests|
|FE-216|Audit & Compliance|Login History|
|FE-217|Audit & Compliance|POSH Cases|
|FE-218|Notification System|Notification Center|
|FE-219|Notification System|Notification Templates|
|FE-220|Notification System|Notification Preferences|
|FE-221|Notification System|Channels|
|FE-222|Workflow Engine|Workflow Builder|
|FE-223|Workflow Engine|Approvals|
|FE-224|Workflow Engine|Delegations|
|FE-225|Workflow Engine|Workflow Builder|
|FE-226|Integrations & API Platform|Webhooks|
|FE-227|Integrations & API Platform|API Keys|
|FE-228|Integrations & API Platform|Integrations|
|FE-229|Integrations & API Platform|Integrations|
|FE-230|Integrations & API Platform|Integrations|
|FE-231|Integrations & API Platform|Integrations|
|FE-232|Mobile App|Mobile Login|
|FE-233|Mobile App|Mobile Home|
|FE-234|Mobile App|Mobile Approvals|
|FE-235|Mobile App|Mobile Expense|
|FE-236|Data Import / Export|Import Wizard|
|FE-237|Data Import / Export|Import Wizard|
|FE-238|Data Import / Export|Import Wizard|
|FE-239|Finance Core (optional)|Chart of Accounts|
|FE-240|Finance Core (optional)|Periods|
|FE-241|Finance Core (optional)|Journals|
|FE-242|Finance Core (optional)|Financial Reports|
|FE-243|AI HR Assistant|Assistant|
|FE-244|AI HR Assistant|Candidate Profile|
|FE-245|AI HR Assistant|Review Form|



|FE-246|Shared UI|All screens|
| - | - | - |
|FE-247|Shared UI|All screens|
|FE-248|Shared UI|All screens|
|FE-249|Shared UI|All screens|
|FE-250|Shared UI|All screens|
|FE-251|Shared UI|All screens|
|FE-252|Shared UI|All screens|
|FE-253|Shared UI|All screens|
|FE-254|Shared UI|All screens|
|FE-255|Shared UI|All screens|
|FE-256|Shared UI|All screens|
|FE-257|Shared UI|All screens|
|FE-258|Shared UI|All screens|
|FE-259|Shared UI|All screens|
|FE-260|Shared UI|All screens|



||||
| - | - | - |
||||
||||
|**Component**|**Priority**|**Estimate (days)**|
|Multi-step form (Self-signup)|P0|5|
|Status page (Email verification at signup)|P0|1\.5|
|DataTable + review drawer (Platform tenant review & approval)|P0|3|
|Action menu + reason dialog (Suspend / reactivate / cancel / archive tenant)|P0|3|
|Stepper form (Setup wizard)|P0|5|
|Tabbed form (Tenant settings)|P0|3|
|Job status card (Tenant data export on exit)|P1|5|
|DataTable + form (Plans and plan versions)|P0|3|
|Summary card (Subscription lifecycle)|P0|3|
|Inline banner (Seat limit enforcement)|P1|1\.5|
|DataTable + invoice view (Invoices and payments (manual-first))|P2|8|
|Payment method card (Payment gateway & dunning)|P2|5|
|Toggle table (Platform feature flags)|P0|1\.5|
|Form (Email/password login)|P0|3|
|Menu item (Logout)|P0|1\.5|
|Form (Password reset)|P0|1\.5|
|Form (Change password)|P0|1\.5|
|Session list (Session management)|P0|1\.5|
|QR + code form (MFA (TOTP + recovery codes))|P0|5|
|Config form (SSO (SAML/OIDC))|P1|8|
|Token card (SCIM provisioning)|P2|5|
|Device list (Passkeys (WebAuthn))|P2|3|
|Invite dialog (Invite user)|P0|3|
|Form (Accept invitation)|P0|1\.5|
|Row actions (Membership lifecycle)|P0|1\.5|
|List (Tenant switcher)|P1|1\.5|
|Link control (Link user to employee)|P0|1\.5|
|Read-only list (Permission catalog)|P0|3|
|DataTable (System role templates)|P0|1\.5|
|Permission matrix grid (Custom roles)|P0|3|
|Grant table + dialog (Role grants with scope and validity)|P0|5|
|Request form (Break-glass access)|P1|3|
|Report (Access review report)|P1|1\.5|
|DataTable + form (Legal entities)|P0|3|
|Form (Statutory registrations)|P1|1\.5|
|DataTable + map picker (Locations with geofence)|P0|3|
|DataTable (Branches)|P1|1\.5|
|Tree + form (Departments tree)|P0|3|
|DataTable (Designations)|P0|1\.5|
|DataTable (Grades/bands)|P0|1\.5|
|DataTable (Cost centers)|P1|1\.5|
|DataTable (Employment types)|P0|1\.5|
|Tree canvas (Org chart)|P0|3|
|Sectioned form (Create employee)|P0|5|
|Tabbed profile (Employee profile view/edit)|P0|5|



|DataTable + FilterBar (Employee list & search)|P0|3|
| - | - | -: |
|Timeline + form (Effective-dated assignments)|P0|5|
|Action dialogs (Lifecycle events)|P0|5|
|Repeater forms (Personal, family, education, experience)|P0|3|
|Bank card (Bank accounts (restricted))|P0|3|
|Restricted card (Statutory IDs (restricted))|P0|3|
|List (Probation tracking)|P1|1\.5|
|Card grid (Employee directory)|P0|3|
|Export dialog (Employee export)|P0|1\.5|
|Action (Archive/soft-delete employee)|P0|1\.5|
|Widget (Work anniversaries & birthdays feed)|P2|1\.5|
|Tabbed form (My profile)|P0|3|
|Change request dialog (Profile change requests)|P0|3|
|Unified list (My requests hub)|P0|3|
|Widget grid (Home dashboard (employee))|P0|3|
|Card list (My team view)|P0|3|
|Modal (Privacy notice acknowledgement)|P0|1\.5|
|Request card (My data download)|P1|3|
|Dropzone (Upload intent & presigned PUT)|P0|3|
|Badge (Malware scan before availability)|P0|3|
|DataTable (Document types config)|P0|1\.5|
|List + preview (Employee documents)|P0|3|
|Report (Expiry tracking)|P0|1\.5|
|List + reader (Company policies & acknowledgement)|P1|3|
|Editor + preview (Letter templates & generation)|P1|5|
|Send dialog (E-sign integration)|P2|3|
|Folder view (Company document library)|P1|1\.5|
|DataTable + form (Manpower requisition)|P1|3|
|DataTable + editor (Job creation & posting)|P1|3|
|Public pages (Careers page & apply)|P1|3|
|Channel toggles (Job board distribution)|P2|5|
|Form (Employee referrals)|P1|1\.5|
|DataTable + profile (Candidate database)|P1|3|
|Kanban (Configurable pipeline)|P1|5|
|Upload + review (Resume parsing)|P2|3|
|Calendar + form (Interview scheduling)|P1|5|
|Form (Scorecards & blind feedback)|P1|3|
|Form + preview (Offer management)|P1|5|
|Public page (Candidate offer portal)|P1|1\.5|
|Charts (Recruitment analytics)|P1|3|
|Task list editor (Onboarding templates)|P1|3|
|Board + checklist (Onboarding case & tasks)|P1|5|
|Wizard (Pre-joining portal)|P1|5|
|Document checklist (Document verification)|P1|1\.5|
|Action (Mark joined / no-show)|P1|1\.5|
|Schedule tab (Buddy & induction)|P2|1\.5|
|Form (Resignation submission)|P1|3|
|Decision dialog (Resignation acceptance & notice)|P1|3|
|Form (Termination & retirement)|P1|1\.5|
|Checklist (Clearance checklist)|P1|3|



|Form (Exit interview)|P1|1\.5|
| - | - | -: |
|Action (Relieving & experience letters)|P1|1\.5|
|Field (Rehire eligibility)|P2|1\.5|
|Button set (Web punch (4 events))|P0|5|
|Map + button (Mobile GPS punch)|P1|3|
|Camera (Selfie punch)|P2|3|
|DataTable + sync log (Biometric device integration)|P1|8|
|Fullscreen app (Kiosk punch)|P2|3|
|Offline queue (Offline mobile punch sync)|P1|3|
|Versioned form (Attendance policies (versioned))|P0|5|
|Calendar + table (Attendance views)|P0|3|
|Form (Regularization)|P0|5|
|Form (On-duty / WFH requests)|P0|3|
|Approval list (Overtime capture & approval)|P1|3|
|Period list (Attendance period lock)|P0|3|
|Grid (Contractor timesheets)|P2|3|
|Report views (Attendance reports)|P0|3|
|DataTable + form (Shift templates)|P0|3|
|Form (Weekly-off patterns)|P0|1\.5|
|Grid planner (Roster planning & publish)|P1|5|
|Form (Shift swap requests)|P2|3|
|Heatmap (Roster coverage report)|P2|1\.5|
|DataTable (Leave types)|P0|1\.5|
|Versioned rule form (Leave policies (versioned))|P0|8|
|Calendar + table (Holiday calendars)|P0|3|
|Cards + ledger (Leave ledger & balances)|P0|5|
|Form + balance preview (Apply leave)|P0|5|
|Inbox (Approve / reject leave)|P0|3|
|Action (Cancel leave)|P0|3|
|Employee picker (Leave on behalf)|P1|1\.5|
|Wizard (Year-end processing)|P1|3|
|Form (Comp-off)|P1|3|
|Calendar (Team leave calendar)|P0|3|
|Report views (Leave reports)|P0|3|
|Wizard (Opening balance import)|P0|1\.5|
|DataTable + form (Salary components)|P1|5|
|Code editor + test panel (Formula DSL engine)|P1|8|
|Editor (Salary structures)|P1|3|
|Timeline + breakdown (Employee compensation & revisions)|P1|5|
|Wizard (Bulk revision upload)|P1|3|
|Form (Payroll calendars & periods)|P1|1\.5|
|Grid + import (Payroll inputs)|P1|3|
|Run wizard + progress (Run payroll (calculate))|P1|8|
|Variance table (Variance review)|P1|3|
|Approval bar (Maker-checker approval & lock)|P1|3|
|Download + import (Bank payment file & confirmation)|P1|3|
|List + PDF viewer (Payslips)|P1|3|
|Wizard (Off-cycle runs)|P1|3|
|List + schedule (Loans & advances)|P1|3|
|Statement editor (Full & final settlement)|P1|5|



|Template + import + exceptions (Payroll exchange (export/import))|P1|5|
| - | - | -: |
|Export dialog (GL journal export)|P1|3|
|Report views (Payroll reports)|P1|3|
|Comparison report (Parallel run & go-live gate)|P1|3|
|Versioned list (Statutory rule sets)|P1|5|
|Settings + ECR (PF (EPF/EPS/EDLI))|P1|5|
|Settings + file (ESI)|P1|3|
|Settings (Professional Tax)|P1|3|
|Settings (Labour Welfare Fund)|P2|1\.5|
|Sectioned form (Tax regime & declarations)|P1|5|
|Review queue (Proof submission & verification)|P1|3|
|Read-only computation (TDS computation)|P1|8|
|Bulk generate (Form 16 & 24Q)|P1|5|
|Report (Gratuity & bonus registers)|P2|3|
|Calendar (Compliance calendar)|P1|1\.5|
|Wizard (Review cycles)|P1|5|
|Tree + form (Goals / OKRs)|P1|5|
|DataTable (KPI library)|P1|3|
|Timeline (Continuous check-ins & 1:1s)|P1|3|
|Form (Self & manager reviews)|P1|5|
|Request + form (360 / peer feedback)|P1|3|
|Bell curve + grid (Calibration)|P1|5|
|Result view (Release & acknowledgement)|P1|1\.5|
|Grid (Increment & promotion recommendations)|P2|3|
|Plan view (PIP)|P2|3|
|Action (Cycle lock & reopen)|P1|1\.5|
|Catalog grid (Course catalog)|P2|5|
|Rule builder (Assignments & auto-assign rules)|P2|3|
|Course player (Learner experience)|P2|3|
|Quiz player (Assessments)|P2|3|
|Calendar (Training calendar & sessions)|P2|3|
|DataTable (Certifications with expiry)|P2|3|
|Form (Training requests & budget)|P2|1\.5|
|DataTable (Asset categories & catalog)|P1|1\.5|
|DataTable + form (Inventory)|P1|3|
|Form (Asset requests)|P1|1\.5|
|Dialog (Allocation & acknowledgement)|P1|3|
|Actions (Return, transfer, repair, retire)|P1|3|
|Report (Asset reports)|P1|1\.5|
|DataTable (Ticket categories & SLA)|P2|3|
|List + thread (Raise & track tickets)|P2|3|
|Queue + detail (Agent workspace)|P2|5|
|Article editor (Knowledge base)|P2|3|
|Charts (CSAT & helpdesk reports)|P2|1\.5|
|Matrix editor (Expense policies)|P1|3|
|Claim form + lines (Submit claim with receipts)|P1|5|
|Inbox + line review (Approve / audit claims)|P1|3|
|List (Advances)|P1|3|
|Batch view (Reimbursement payout)|P1|3|
|Report (Expense reports)|P1|1\.5|



|Form (Travel policies)|P2|1\.5|
| - | - | -: |
|Itinerary form (Travel request)|P2|3|
|Queue (Travel desk bookings)|P2|1\.5|
|Summary (Trip settlement)|P2|1\.5|
|Composer + feed (Announcements)|P1|3|
|Card (Polls)|P2|1\.5|
|Builder + results (Surveys & eNPS)|P1|5|
|Feed + composer (Recognition & badges)|P2|3|
|Queue (Social feed moderation)|P2|1\.5|
|Widget grid (Role dashboards)|P0|5|
|Catalog + viewer (Standard report library)|P0|5|
|Async job status (Export jobs)|P0|3|
|Form (Scheduled reports)|P1|1\.5|
|Charts (Headcount & attrition analytics)|P0|3|
|Builder UI (Custom report builder)|P2|8|
|DataTable + diff view (Audit search)|P0|3|
|Export (Audit export)|P1|1\.5|
|DataTable (Restricted data access log)|P0|1\.5|
|Policy table (Retention & legal hold)|P1|3|
|Queue (DPDP data-principal requests)|P1|3|
|DataTable (Login history)|P0|1\.5|
|Restricted list (POSH case log (restricted))|P2|3|
|Dropdown + page (In-app notification center)|P0|3|
|Editor + preview (Templates)|P0|3|
|Toggle grid (User preferences & quiet hours)|P1|1\.5|
|Config (SMS & WhatsApp)|P2|3|
|Step editor (visual in Phase 6) (Workflow definitions & versions)|P0|8|
|Inbox + detail drawer (Approval inbox)|P0|5|
|Form (Delegation)|P1|1\.5|
|Canvas (Visual workflow builder)|P2|5|
|DataTable + log (Outbound webhooks)|P1|3|
|Table + reveal-once (Public API keys)|P1|3|
|Connect card (Calendar integration)|P1|3|
|Connect card (Accounting connectors)|P1|3|
|Connect card (Slack / Teams)|P2|3|
|Status list (Integration health)|P1|1\.5|
|Native screens (Mobile auth & device binding)|P1|5|
|Native screens (Mobile ESS)|P1|8|
|Native list (Mobile manager approvals)|P1|3|
|Camera + form (Mobile expense capture)|P2|3|
|Stepper + results grid (Import framework)|P0|8|
|Template download (Employee import)|P0|3|
|Type picker (Other imports)|P1|5|
|Tree (Accounting books & COA)|P2|5|
|List + checklist (Fiscal periods & close)|P2|3|
|Journal editor (Journals with maker-checker)|P2|8|
|Report viewer (Financial reports)|P2|5|
|Chat panel (Policy Q&A assistant)|P2|5|
|Summary card (Resume summarisation)|P2|3|
|Assist button (Review writing assistance)|P2|3|



|AppShell + role-aware navigation|P0|3|
| - | - | -: |
|TenantSwitcher|P0|3|
|PermissionGate (presentation only)|P0|3|
|DataTable (server-side pagination/sort/filter)|P0|3|
|FilterBar + saved views|P0|3|
|FormField / FieldError / FormErrorSummary|P0|3|
|SensitiveValue (masked reveal + audit)|P0|3|
|FileUploadDropzone + ScanStatus|P0|3|
|ApprovalTimeline / AuditTimeline|P0|3|
|EmptyState / ErrorState / LoadingSkeleton / PermissionDenied|P0|3|
|ConfirmDialog / UnsavedChangesDialog|P0|3|
|CurrencyInput / MoneyDisplay (decimal-safe, INR grouping)|P0|3|
|AsyncJobStatus + ExportDownload|P0|3|
|DateRangePicker (timezone aware)|P0|3|
|Design tokens + dark mode + a11y baseline|P0|3|



|||
| - | - |
|||
|||
|**Phase**|**Feature ID**|
|1|TEN-001|
|1|TEN-002|
|1|TEN-003|
|1|TEN-004|
|1|TEN-006|
|1|TEN-007|
|8|TEN-008|
|1|TEN-009|
|1|TEN-010|
|8|TEN-012|
|8|TEN-013|
|8|TEN-014|
|1|TEN-016|
|1|IAM-001|
|1|IAM-002|
|1|IAM-004|
|1|IAM-005|
|1|IAM-006|
|1|IAM-007|
|8|IAM-008|
|8|IAM-009|
|8|IAM-010|
|1|IAM-011|
|1|IAM-012|
|1|IAM-013|
|7|IAM-015|
|2|IAM-016|
|1|IAM-017|
|1|IAM-018|
|1|IAM-019|
|1|IAM-020|
|6|IAM-025|
|6|IAM-026|
|1|ORG-001|
|4|ORG-002|
|1|ORG-003|
|2|ORG-004|
|1|ORG-005|
|1|ORG-006|
|2|ORG-007|
|4|ORG-008|
|1|ORG-009|
|2|ORG-010|
|2|EMP-001|
|2|EMP-002|



|2|EMP-003|
| -: | - |
|2|EMP-004|
|2|EMP-005|
|2|EMP-009|
|2|EMP-010|
|2|EMP-011|
|2|EMP-012|
|2|EMP-013|
|2|EMP-014|
|2|EMP-015|
|6|EMP-016|
|2|ESS-001|
|2|ESS-002|
|2|ESS-003|
|2|ESS-004|
|3|ESS-005|
|2|ESS-006|
|6|ESS-007|
|2|DOC-001|
|2|DOC-002|
|2|DOC-004|
|2|DOC-005|
|2|DOC-006|
|2|DOC-007|
|5|DOC-008|
|8|DOC-009|
|6|DOC-010|
|5|REC-001|
|5|REC-002|
|5|REC-003|
|8|REC-004|
|5|REC-005|
|5|REC-006|
|5|REC-007|
|8|REC-008|
|5|REC-010|
|5|REC-011|
|5|REC-012|
|5|REC-013|
|6|REC-015|
|5|ONB-001|
|5|ONB-002|
|5|ONB-003|
|5|ONB-004|
|5|ONB-005|
|6|ONB-006|
|5|OFB-001|
|5|OFB-002|
|5|OFB-003|
|5|OFB-004|



|5|OFB-005|
| -: | - |
|5|OFB-007|
|5|OFB-008|
|3|ATT-001|
|7|ATT-002|
|7|ATT-003|
|6|ATT-005|
|8|ATT-006|
|7|ATT-007|
|3|ATT-010|
|3|ATT-012|
|3|ATT-013|
|3|ATT-014|
|3|ATT-015|
|3|ATT-016|
|8|ATT-017|
|3|ATT-018|
|3|SFT-001|
|3|SFT-002|
|3|SFT-003|
|3|SFT-004|
|6|SFT-005|
|3|LV-001|
|3|LV-002|
|3|LV-003|
|3|LV-004|
|3|LV-005|
|3|LV-006|
|3|LV-007|
|3|LV-008|
|3|LV-010|
|3|LV-011|
|3|LV-013|
|3|LV-014|
|3|LV-015|
|4|PAY-001|
|4|PAY-002|
|4|PAY-003|
|4|PAY-004|
|6|PAY-005|
|4|PAY-006|
|4|PAY-007|
|4|PAY-008|
|4|PAY-009|
|4|PAY-010|
|4|PAY-011|
|4|PAY-012|
|4|PAY-013|
|6|PAY-014|
|5|PAY-015|



|4|PAY-016|
| -: | - |
|4|PAY-017|
|4|PAY-018|
|4|PAY-019|
|4|STA-001|
|4|STA-002|
|4|STA-003|
|4|STA-004|
|4|STA-005|
|4|STA-006|
|4|STA-007|
|4|STA-008|
|4|STA-009|
|4|STA-010|
|4|STA-011|
|6|PRF-001|
|6|PRF-002|
|6|PRF-003|
|6|PRF-004|
|6|PRF-005|
|6|PRF-006|
|6|PRF-007|
|6|PRF-008|
|6|PRF-009|
|6|PRF-010|
|6|PRF-011|
|8|LMS-001|
|8|LMS-002|
|8|LMS-003|
|8|LMS-004|
|8|LMS-005|
|8|LMS-006|
|8|LMS-007|
|6|AST-001|
|6|AST-002|
|6|AST-003|
|6|AST-004|
|6|AST-005|
|6|AST-006|
|8|HLP-001|
|8|HLP-002|
|8|HLP-003|
|8|HLP-005|
|8|HLP-006|
|6|EXP-001|
|6|EXP-002|
|6|EXP-003|
|6|EXP-004|
|6|EXP-005|
|6|EXP-006|



|8|TRV-001|
| -: | - |
|8|TRV-002|
|8|TRV-003|
|8|TRV-004|
|6|ENG-001|
|6|ENG-002|
|6|ENG-003|
|6|ENG-004|
|6|ENG-005|
|2|RPT-001|
|2|RPT-002|
|2|RPT-003|
|6|RPT-004|
|2|RPT-005|
|8|RPT-006|
|2|AUD-002|
|6|AUD-003|
|2|AUD-004|
|7|AUD-005|
|7|AUD-006|
|1|AUD-007|
|8|AUD-008|
|1|NTF-002|
|1|NTF-004|
|6|NTF-005|
|7|NTF-006|
|1|WF-001|
|1|WF-003|
|6|WF-006|
|6|WF-008|
|6|INT-001|
|8|INT-002|
|5|INT-003|
|6|INT-004|
|8|INT-005|
|6|INT-006|
|7|MOB-001|
|7|MOB-002|
|7|MOB-003|
|7|MOB-004|
|2|IMP-001|
|2|IMP-002|
|4|IMP-003|
|8|FIN-001|
|8|FIN-002|
|8|FIN-003|
|8|FIN-004|
|8|AI-001|
|8|AI-002|
|8|AI-003|



|1|Shared|
| -: | - |
|1|Shared|
|1|Shared|
|1|Shared|
|1|Shared|
|1|Shared|
|1|Shared|
|1|Shared|
|1|Shared|
|1|Shared|
|1|Shared|
|1|Shared|
|1|Shared|
|1|Shared|
|1|Shared|


|**Sheet 5 - Backend Tasks**|||
| - | :- | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*|||
||||
|**Task ID**|**Module**||
|BE-001|Tenant & Subscription Management||
|BE-002|Tenant & Subscription Management||
|BE-003|Tenant & Subscription Management||
|BE-004|Tenant & Subscription Management||
|BE-005|Tenant & Subscription Management||
|BE-006|Tenant & Subscription Management||
|BE-007|Tenant & Subscription Management||
|BE-008|Tenant & Subscription Management||
|BE-009|Tenant & Subscription Management||
|BE-010|Tenant & Subscription Management||
|BE-011|Tenant & Subscription Management||
|BE-012|Tenant & Subscription Management||
|BE-013|Tenant & Subscription Management||
|BE-014|Tenant & Subscription Management||
|BE-015|Tenant & Subscription Management||
|BE-016|Tenant & Subscription Management||
|BE-017|Tenant & Subscription Management||
|BE-018|Tenant & Subscription Management||



|BE-019|Tenant & Subscription Management|
| - | - |
|BE-020|Tenant & Subscription Management|
|BE-021|Tenant & Subscription Management|
|BE-022|Tenant & Subscription Management|
|BE-023|Tenant & Subscription Management|
|BE-024|Tenant & Subscription Management|
|BE-025|Tenant & Subscription Management|
|BE-026|Tenant & Subscription Management|
|BE-027|Tenant & Subscription Management|
|BE-028|Tenant & Subscription Management|
|BE-029|Tenant & Subscription Management|
|BE-030|Tenant & Subscription Management|
|BE-031|Tenant & Subscription Management|
|BE-032|Tenant & Subscription Management|
|BE-033|Tenant & Subscription Management|
|BE-034|Tenant & Subscription Management|
|BE-035|Tenant & Subscription Management|
|BE-036|Identity, Authentication & Access Control|
|BE-037|Identity, Authentication & Access Control|
|BE-038|Identity, Authentication & Access Control|
|BE-039|Identity, Authentication & Access Control|



|BE-040|Identity, Authentication & Access Control|
| - | - |
|BE-041|Identity, Authentication & Access Control|
|BE-042|Identity, Authentication & Access Control|
|BE-043|Identity, Authentication & Access Control|
|BE-044|Identity, Authentication & Access Control|
|BE-045|Identity, Authentication & Access Control|
|BE-046|Identity, Authentication & Access Control|
|BE-047|Identity, Authentication & Access Control|
|BE-048|Identity, Authentication & Access Control|
|BE-049|Identity, Authentication & Access Control|
|BE-050|Identity, Authentication & Access Control|
|BE-051|Identity, Authentication & Access Control|
|BE-052|Identity, Authentication & Access Control|
|BE-053|Identity, Authentication & Access Control|
|BE-054|Identity, Authentication & Access Control|
|BE-055|Identity, Authentication & Access Control|
|BE-056|Identity, Authentication & Access Control|
|BE-057|Identity, Authentication & Access Control|
|BE-058|Identity, Authentication & Access Control|
|BE-059|Identity, Authentication & Access Control|
|BE-060|Identity, Authentication & Access Control|



|BE-061|Identity, Authentication & Access Control|
| - | - |
|BE-062|Identity, Authentication & Access Control|
|BE-063|Identity, Authentication & Access Control|
|BE-064|Identity, Authentication & Access Control|
|BE-065|Identity, Authentication & Access Control|
|BE-066|Identity, Authentication & Access Control|
|BE-067|Identity, Authentication & Access Control|
|BE-068|Identity, Authentication & Access Control|
|BE-069|Identity, Authentication & Access Control|
|BE-070|Identity, Authentication & Access Control|
|BE-071|Identity, Authentication & Access Control|
|BE-072|Identity, Authentication & Access Control|
|BE-073|Identity, Authentication & Access Control|
|BE-074|Identity, Authentication & Access Control|
|BE-075|Identity, Authentication & Access Control|
|BE-076|Identity, Authentication & Access Control|
|BE-077|Identity, Authentication & Access Control|
|BE-078|Identity, Authentication & Access Control|
|BE-079|Identity, Authentication & Access Control|
|BE-080|Identity, Authentication & Access Control|
|BE-081|Identity, Authentication & Access Control|
|BE-082|Identity, Authentication & Access Control|
|BE-083|Identity, Authentication & Access Control|
|BE-084|Identity, Authentication & Access Control|



|BE-085|Identity, Authentication & Access Control|
| - | - |
|BE-086|Identity, Authentication & Access Control|
|BE-087|Identity, Authentication & Access Control|
|BE-088|Organization Management|
|BE-089|Organization Management|
|BE-090|Organization Management|
|BE-091|Organization Management|
|BE-092|Organization Management|
|BE-093|Organization Management|
|BE-094|Organization Management|
|BE-095|Organization Management|
|BE-096|Organization Management|
|BE-097|Organization Management|
|BE-098|Organization Management|
|BE-099|Organization Management|
|BE-100|Organization Management|
|BE-101|Organization Management|
|BE-102|Organization Management|
|BE-103|Organization Management|
|BE-104|Organization Management|
|BE-105|Organization Management|
|BE-106|Organization Management|
|BE-107|Organization Management|
|BE-108|Organization Management|



|BE-109|Organization Management|
| - | - |
|BE-110|Organization Management|
|BE-111|Organization Management|
|BE-112|Organization Management|
|BE-113|Organization Management|
|BE-114|Organization Management|
|BE-115|Organization Management|
|BE-116|Employee Management|
|BE-117|Employee Management|
|BE-118|Employee Management|
|BE-119|Employee Management|
|BE-120|Employee Management|
|BE-121|Employee Management|
|BE-122|Employee Management|
|BE-123|Employee Management|
|BE-124|Employee Management|
|BE-125|Employee Management|
|BE-126|Employee Management|
|BE-127|Employee Management|
|BE-128|Employee Management|
|BE-129|Employee Management|
|BE-130|Employee Management|
|BE-131|Employee Management|



|BE-132|Employee Management|
| - | - |
|BE-133|Employee Management|
|BE-134|Employee Management|
|BE-135|Employee Management|
|BE-136|Employee Management|
|BE-137|Employee Management|
|BE-138|Employee Management|
|BE-139|Employee Management|
|BE-140|Employee Management|
|BE-141|Employee Management|
|BE-142|Employee Self-Service|
|BE-143|Employee Self-Service|
|BE-144|Employee Self-Service|
|BE-145|Employee Self-Service|
|BE-146|Employee Self-Service|
|BE-147|Employee Self-Service|
|BE-148|Employee Self-Service|
|BE-149|Employee Self-Service|
|BE-150|Employee Self-Service|
|BE-151|Employee Self-Service|
|BE-152|Documents Management|
|BE-153|Documents Management|
|BE-154|Documents Management|
|BE-155|Documents Management|



|BE-156|Documents Management|
| - | - |
|BE-157|Documents Management|
|BE-158|Documents Management|
|BE-159|Documents Management|
|BE-160|Documents Management|
|BE-161|Documents Management|
|BE-162|Documents Management|
|BE-163|Documents Management|
|BE-164|Documents Management|
|BE-165|Documents Management|
|BE-166|Documents Management|
|BE-167|Documents Management|
|BE-168|Documents Management|
|BE-169|Documents Management|
|BE-170|Documents Management|
|BE-171|Documents Management|
|BE-172|Documents Management|
|BE-173|Documents Management|
|BE-174|Documents Management|
|BE-175|Recruitment (ATS)|



|BE-176|Recruitment (ATS)|
| - | - |
|BE-177|Recruitment (ATS)|
|BE-178|Recruitment (ATS)|
|BE-179|Recruitment (ATS)|
|BE-180|Recruitment (ATS)|
|BE-181|Recruitment (ATS)|
|BE-182|Recruitment (ATS)|
|BE-183|Recruitment (ATS)|
|BE-184|Recruitment (ATS)|
|BE-185|Recruitment (ATS)|
|BE-186|Recruitment (ATS)|
|BE-187|Recruitment (ATS)|
|BE-188|Recruitment (ATS)|
|BE-189|Recruitment (ATS)|
|BE-190|Recruitment (ATS)|
|BE-191|Recruitment (ATS)|
|BE-192|Recruitment (ATS)|
|BE-193|Recruitment (ATS)|
|BE-194|Recruitment (ATS)|
|BE-195|Recruitment (ATS)|



|BE-196|Recruitment (ATS)|
| - | - |
|BE-197|Recruitment (ATS)|
|BE-198|Recruitment (ATS)|
|BE-199|Recruitment (ATS)|
|BE-200|Recruitment (ATS)|
|BE-201|Recruitment (ATS)|
|BE-202|Recruitment (ATS)|
|BE-203|Recruitment (ATS)|
|BE-204|Recruitment (ATS)|
|BE-205|Recruitment (ATS)|
|BE-206|Recruitment (ATS)|
|BE-207|Recruitment (ATS)|
|BE-208|Recruitment (ATS)|
|BE-209|Recruitment (ATS)|
|BE-210|Recruitment (ATS)|
|BE-211|Recruitment (ATS)|
|BE-212|Onboarding & Pre-joining|
|BE-213|Onboarding & Pre-joining|
|BE-214|Onboarding & Pre-joining|
|BE-215|Onboarding & Pre-joining|
|BE-216|Onboarding & Pre-joining|



|BE-217|Onboarding & Pre-joining|
| - | - |
|BE-218|Onboarding & Pre-joining|
|BE-219|Onboarding & Pre-joining|
|BE-220|Onboarding & Pre-joining|
|BE-221|Onboarding & Pre-joining|
|BE-222|Onboarding & Pre-joining|
|BE-223|Onboarding & Pre-joining|
|BE-224|Onboarding & Pre-joining|
|BE-225|Onboarding & Pre-joining|
|BE-226|Offboarding & Exit|
|BE-227|Offboarding & Exit|
|BE-228|Offboarding & Exit|
|BE-229|Offboarding & Exit|
|BE-230|Offboarding & Exit|
|BE-231|Offboarding & Exit|
|BE-232|Offboarding & Exit|
|BE-233|Offboarding & Exit|
|BE-234|Offboarding & Exit|
|BE-235|Offboarding & Exit|
|BE-236|Offboarding & Exit|
|BE-237|Offboarding & Exit|



|BE-238|Attendance & Time|
| - | - |
|BE-239|Attendance & Time|
|BE-240|Attendance & Time|
|BE-241|Attendance & Time|
|BE-242|Attendance & Time|
|BE-243|Attendance & Time|
|BE-244|Attendance & Time|
|BE-245|Attendance & Time|
|BE-246|Attendance & Time|
|BE-247|Attendance & Time|
|BE-248|Attendance & Time|
|BE-249|Attendance & Time|
|BE-250|Attendance & Time|
|BE-251|Attendance & Time|
|BE-252|Attendance & Time|
|BE-253|Attendance & Time|
|BE-254|Attendance & Time|
|BE-255|Attendance & Time|
|BE-256|Attendance & Time|
|BE-257|Attendance & Time|
|BE-258|Attendance & Time|
|BE-259|Attendance & Time|
|BE-260|Attendance & Time|



|BE-261|Attendance & Time|
| - | - |
|BE-262|Attendance & Time|
|BE-263|Attendance & Time|
|BE-264|Attendance & Time|
|BE-265|Attendance & Time|
|BE-266|Attendance & Time|
|BE-267|Attendance & Time|
|BE-268|Attendance & Time|
|BE-269|Attendance & Time|
|BE-270|Attendance & Time|
|BE-271|Attendance & Time|
|BE-272|Attendance & Time|
|BE-273|Attendance & Time|
|BE-274|Shift & Roster|
|BE-275|Shift & Roster|
|BE-276|Shift & Roster|
|BE-277|Shift & Roster|
|BE-278|Shift & Roster|
|BE-279|Shift & Roster|
|BE-280|Shift & Roster|
|BE-281|Shift & Roster|



|BE-282|Shift & Roster|
| - | - |
|BE-283|Shift & Roster|
|BE-284|Shift & Roster|
|BE-285|Leave Management|
|BE-286|Leave Management|
|BE-287|Leave Management|
|BE-288|Leave Management|
|BE-289|Leave Management|
|BE-290|Leave Management|
|BE-291|Leave Management|
|BE-292|Leave Management|
|BE-293|Leave Management|
|BE-294|Leave Management|
|BE-295|Leave Management|
|BE-296|Leave Management|
|BE-297|Leave Management|
|BE-298|Leave Management|
|BE-299|Leave Management|
|BE-300|Leave Management|
|BE-301|Leave Management|
|BE-302|Leave Management|
|BE-303|Leave Management|
|BE-304|Leave Management|
|BE-305|Leave Management|



|BE-306|Leave Management|
| - | - |
|BE-307|Leave Management|
|BE-308|Leave Management|
|BE-309|Leave Management|
|BE-310|Leave Management|
|BE-311|Leave Management|
|BE-312|Leave Management|
|BE-313|Leave Management|
|BE-314|Payroll|
|BE-315|Payroll|
|BE-316|Payroll|
|BE-317|Payroll|
|BE-318|Payroll|
|BE-319|Payroll|
|BE-320|Payroll|
|BE-321|Payroll|
|BE-322|Payroll|
|BE-323|Payroll|
|BE-324|Payroll|
|BE-325|Payroll|
|BE-326|Payroll|
|BE-327|Payroll|
|BE-328|Payroll|



|BE-329|Payroll|
| - | - |
|BE-330|Payroll|
|BE-331|Payroll|
|BE-332|Payroll|
|BE-333|Payroll|
|BE-334|Payroll|
|BE-335|Payroll|
|BE-336|Payroll|
|BE-337|Payroll|
|BE-338|Payroll|
|BE-339|Payroll|
|BE-340|Payroll|
|BE-341|Payroll|
|BE-342|Payroll|
|BE-343|Payroll|
|BE-344|Payroll|
|BE-345|Payroll|
|BE-346|Payroll|
|BE-347|Payroll|
|BE-348|Payroll|
|BE-349|Payroll|
|BE-350|Payroll|
|BE-351|Payroll|
|BE-352|Payroll|



|BE-353|Payroll|
| - | - |
|BE-354|Payroll|
|BE-355|Payroll|
|BE-356|Payroll|
|BE-357|Payroll|
|BE-358|Statutory Compliance & Tax (India)|
|BE-359|Statutory Compliance & Tax (India)|
|BE-360|Statutory Compliance & Tax (India)|
|BE-361|Statutory Compliance & Tax (India)|
|BE-362|Statutory Compliance & Tax (India)|
|BE-363|Statutory Compliance & Tax (India)|
|BE-364|Statutory Compliance & Tax (India)|
|BE-365|Statutory Compliance & Tax (India)|
|BE-366|Statutory Compliance & Tax (India)|
|BE-367|Statutory Compliance & Tax (India)|
|BE-368|Statutory Compliance & Tax (India)|
|BE-369|Statutory Compliance & Tax (India)|
|BE-370|Statutory Compliance & Tax (India)|
|BE-371|Statutory Compliance & Tax (India)|
|BE-372|Statutory Compliance & Tax (India)|
|BE-373|Statutory Compliance & Tax (India)|
|BE-374|Statutory Compliance & Tax (India)|



|BE-375|Statutory Compliance & Tax (India)|
| - | - |
|BE-376|Statutory Compliance & Tax (India)|
|BE-377|Statutory Compliance & Tax (India)|
|BE-378|Performance Management|
|BE-379|Performance Management|
|BE-380|Performance Management|
|BE-381|Performance Management|
|BE-382|Performance Management|
|BE-383|Performance Management|
|BE-384|Performance Management|
|BE-385|Performance Management|
|BE-386|Performance Management|
|BE-387|Performance Management|
|BE-388|Performance Management|
|BE-389|Performance Management|
|BE-390|Performance Management|
|BE-391|Performance Management|
|BE-392|Performance Management|
|BE-393|Performance Management|
|BE-394|Performance Management|
|BE-395|Performance Management|
|BE-396|Performance Management|
|BE-397|Performance Management|



|BE-398|Performance Management|
| - | - |
|BE-399|Performance Management|
|BE-400|Performance Management|
|BE-401|Performance Management|
|BE-402|Performance Management|
|BE-403|Performance Management|
|BE-404|Performance Management|
|BE-405|Performance Management|
|BE-406|Learning Management|
|BE-407|Learning Management|
|BE-408|Learning Management|
|BE-409|Learning Management|
|BE-410|Learning Management|
|BE-411|Learning Management|
|BE-412|Learning Management|
|BE-413|Learning Management|
|BE-414|Learning Management|
|BE-415|Learning Management|
|BE-416|Learning Management|
|BE-417|Learning Management|
|BE-418|Learning Management|



|BE-419|Learning Management|
| - | - |
|BE-420|Learning Management|
|BE-421|Learning Management|
|BE-422|Asset Management|
|BE-423|Asset Management|
|BE-424|Asset Management|
|BE-425|Asset Management|
|BE-426|Asset Management|
|BE-427|Asset Management|
|BE-428|Asset Management|
|BE-429|Asset Management|
|BE-430|Asset Management|
|BE-431|Asset Management|
|BE-432|Asset Management|
|BE-433|Asset Management|
|BE-434|Asset Management|
|BE-435|Helpdesk|
|BE-436|Helpdesk|
|BE-437|Helpdesk|
|BE-438|Helpdesk|
|BE-439|Helpdesk|
|BE-440|Helpdesk|



|BE-441|Helpdesk|
| - | - |
|BE-442|Helpdesk|
|BE-443|Helpdesk|
|BE-444|Helpdesk|
|BE-445|Helpdesk|
|BE-446|Helpdesk|
|BE-447|Helpdesk|
|BE-448|Helpdesk|
|BE-449|Helpdesk|
|BE-450|Expense Management|
|BE-451|Expense Management|
|BE-452|Expense Management|
|BE-453|Expense Management|
|BE-454|Expense Management|
|BE-455|Expense Management|
|BE-456|Expense Management|
|BE-457|Expense Management|
|BE-458|Expense Management|
|BE-459|Expense Management|
|BE-460|Expense Management|
|BE-461|Expense Management|
|BE-462|Travel Management|



|BE-463|Travel Management|
| - | - |
|BE-464|Travel Management|
|BE-465|Travel Management|
|BE-466|Travel Management|
|BE-467|Travel Management|
|BE-468|Travel Management|
|BE-469|Announcements, Surveys & Engagement|
|BE-470|Announcements, Surveys & Engagement|
|BE-471|Announcements, Surveys & Engagement|
|BE-472|Announcements, Surveys & Engagement|
|BE-473|Announcements, Surveys & Engagement|
|BE-474|Announcements, Surveys & Engagement|
|BE-475|Announcements, Surveys & Engagement|
|BE-476|Announcements, Surveys & Engagement|
|BE-477|Announcements, Surveys & Engagement|
|BE-478|Announcements, Surveys & Engagement|
|BE-479|Announcements, Surveys & Engagement|
|BE-480|Announcements, Surveys & Engagement|
|BE-481|Announcements, Surveys & Engagement|
|BE-482|Announcements, Surveys & Engagement|
|BE-483|Announcements, Surveys & Engagement|
|BE-484|Reports & Dashboards|
|BE-485|Reports & Dashboards|



|BE-486|Reports & Dashboards|
| - | - |
|BE-487|Reports & Dashboards|
|BE-488|Reports & Dashboards|
|BE-489|Reports & Dashboards|
|BE-490|Reports & Dashboards|
|BE-491|Reports & Dashboards|
|BE-492|Reports & Dashboards|
|BE-493|Reports & Dashboards|
|BE-494|Reports & Dashboards|
|BE-495|Reports & Dashboards|
|BE-496|Reports & Dashboards|
|BE-497|Reports & Dashboards|
|BE-498|Audit & Compliance|
|BE-499|Audit & Compliance|
|BE-500|Audit & Compliance|
|BE-501|Audit & Compliance|
|BE-502|Audit & Compliance|
|BE-503|Audit & Compliance|
|BE-504|Audit & Compliance|
|BE-505|Audit & Compliance|
|BE-506|Audit & Compliance|
|BE-507|Audit & Compliance|
|BE-508|Audit & Compliance|
|BE-509|Audit & Compliance|
|BE-510|Audit & Compliance|



|BE-511|Audit & Compliance|
| - | - |
|BE-512|Audit & Compliance|
|BE-513|Notification System|
|BE-514|Notification System|
|BE-515|Notification System|
|BE-516|Notification System|
|BE-517|Notification System|
|BE-518|Notification System|
|BE-519|Notification System|
|BE-520|Notification System|
|BE-521|Notification System|
|BE-522|Notification System|
|BE-523|Notification System|
|BE-524|Notification System|
|BE-525|Workflow Engine|
|BE-526|Workflow Engine|
|BE-527|Workflow Engine|
|BE-528|Workflow Engine|
|BE-529|Workflow Engine|
|BE-530|Workflow Engine|
|BE-531|Workflow Engine|
|BE-532|Workflow Engine|
|BE-533|Workflow Engine|
|BE-534|Workflow Engine|
|BE-535|Workflow Engine|



|BE-536|Workflow Engine|
| - | - |
|BE-537|Workflow Engine|
|BE-538|Workflow Engine|
|BE-539|Workflow Engine|
|BE-540|Workflow Engine|
|BE-541|Integrations & API Platform|
|BE-542|Integrations & API Platform|
|BE-543|Integrations & API Platform|
|BE-544|Integrations & API Platform|
|BE-545|Integrations & API Platform|
|BE-546|Integrations & API Platform|
|BE-547|Integrations & API Platform|
|BE-548|Integrations & API Platform|
|BE-549|Integrations & API Platform|
|BE-550|Integrations & API Platform|
|BE-551|Integrations & API Platform|
|BE-552|Integrations & API Platform|
|BE-553|Integrations & API Platform|
|BE-554|Integrations & API Platform|
|BE-555|Mobile App|
|BE-556|Mobile App|
|BE-557|Mobile App|
|BE-558|Mobile App|



|BE-559|Mobile App|
| - | - |
|BE-560|Mobile App|
|BE-561|Security & Data Protection|
|BE-562|Security & Data Protection|
|BE-563|Security & Data Protection|
|BE-564|Security & Data Protection|
|BE-565|Security & Data Protection|
|BE-566|Security & Data Protection|
|BE-567|Security & Data Protection|
|BE-568|Data Import / Export|
|BE-569|Data Import / Export|
|BE-570|Data Import / Export|
|BE-571|Data Import / Export|
|BE-572|Data Import / Export|
|BE-573|Data Import / Export|
|BE-574|Data Import / Export|
|BE-575|Finance Core (optional)|
|BE-576|Finance Core (optional)|
|BE-577|Finance Core (optional)|
|BE-578|Finance Core (optional)|
|BE-579|Finance Core (optional)|
|BE-580|Finance Core (optional)|
|BE-581|Finance Core (optional)|
|BE-582|Finance Core (optional)|
|BE-583|Finance Core (optional)|
|BE-584|Finance Core (optional)|
|BE-585|Finance Core (optional)|



|BE-586|Finance Core (optional)|
| - | - |
|BE-587|Finance Core (optional)|
|BE-588|Finance Core (optional)|
|BE-589|AI HR Assistant|
|BE-590|AI HR Assistant|
|BE-591|AI HR Assistant|
|BE-592|Platform foundation|
|BE-593|Platform foundation|
|BE-594|Platform foundation|
|BE-595|Platform foundation|
|BE-596|Platform foundation|
|BE-597|Platform foundation|
|BE-598|Platform foundation|
|BE-599|Platform foundation|
|BE-600|Platform foundation|
|BE-601|Platform foundation|



||
| - |
||
||
|**API**|
|POST /signup|
|POST /signup/verify-email|
|POST /signup/verify-email|
|POST /signup/resend-verification|
|GET /platform/tenants|
|POST /platform/tenants/{id}/approve|
|POST /platform/tenants/{id}/reject|
|POST /platform/tenants/{id}/suspend|
|POST /platform/tenants/{id}/reactivate|
|POST /platform/tenants/{id}/cancel|
|POST /platform/tenants/{id}/archive|
|(internal service/job)|
|GET /tenant/setup|
|PUT /tenant/setup/{step}|
|POST /tenant/setup/complete|
|GET /tenant/settings|
|PATCH /tenant/settings|
|POST /tenant/exports|



|GET /tenant/exports/{id}|
| - |
|GET /platform/plans|
|POST /platform/plans|
|POST /platform/plans/{id}/versions|
|GET /subscription|
|POST /platform/tenants/{id}/subscription|
|(internal service/job)|
|(internal service/job)|
|GET /platform/invoices|
|POST /platform/invoices|
|POST /platform/payments|
|POST /platform/payments/{id}/allocations|
|POST /subscription/payment-method|
|POST /webhooks/payments|
|(internal service/job)|
|GET /platform/flags|
|PUT /platform/flags/{key}|
|POST /auth/login|
|POST /auth/logout|
|POST /auth/refresh|
|GET /auth/csrf|



|POST /auth/password/forgot|
| - |
|POST /auth/password/reset|
|POST /me/password|
|GET /me/sessions|
|DELETE /me/sessions/{id}|
|DELETE /users/{id}/sessions|
|POST /me/mfa/totp|
|POST /me/mfa/totp/verify|
|POST /me/mfa/recovery-codes|
|POST /auth/mfa/challenge|
|GET /sso/config|
|PUT /sso/config|
|GET /sso/{tenantSlug}/login|
|POST /sso/acs|
|GET /scim/v2/Users|
|POST /scim/v2/Users|
|PATCH /scim/v2/Users/{id}|
|POST /me/passkeys/register|
|POST /auth/passkey|
|POST /invitations|
|GET /invitations|



|DELETE /invitations/{id}|
| - |
|POST /invitations/{id}/resend|
|GET /invitations/accept/{token}|
|POST /invitations/accept|
|GET /memberships|
|PATCH /memberships/{id}|
|(internal service/job)|
|GET /me/memberships|
|POST /session/tenant|
|PUT /employees/{id}/membership|
|GET /permissions|
|GET /roles|
|POST /roles|
|PATCH /roles/{id}|
|DELETE /roles/{id}|
|POST /roles/{id}/clone|
|GET /role-grants|
|POST /role-grants|
|DELETE /role-grants/{id}|
|(internal service/job)|
|(internal service/job)|
|(internal service/job)|
|POST /employees/{id}/reveal|
|POST /platform/break-glass|



|POST /platform/break-glass/{id}/approve|
| - |
|DELETE /platform/break-glass/{id}|
|GET /reports/access-review|
|GET /legal-entities|
|POST /legal-entities|
|PATCH /legal-entities/{id}|
|PUT /legal-entities/{id}/registrations|
|GET /locations|
|POST /locations|
|PATCH /locations/{id}|
|GET /branches|
|POST /branches|
|PATCH /branches/{id}|
|GET /departments|
|POST /departments|
|PATCH /departments/{id}|
|POST /departments/{id}/deactivate|
|GET /designations|
|POST /designations|
|PATCH /designations/{id}|
|GET /grades|
|POST /grades|
|PATCH /grades/{id}|
|GET /cost-centers|



|POST /cost-centers|
| - |
|PATCH /cost-centers/{id}|
|GET /employment-types|
|POST /employment-types|
|PATCH /employment-types/{id}|
|GET /org-chart|
|(internal service/job)|
|POST /employees|
|GET /employees/{id}|
|PATCH /employees/{id}|
|GET /employees|
|GET /employees/{id}/assignments|
|POST /employees/{id}/assignments|
|POST /employees/{id}/assignments/{aid}/amend|
|POST /employees/{id}/events|
|GET /employees/{id}/events|
|(internal service/job)|
|(internal service/job)|
|(internal service/job)|
|GET /employees/{id}/contacts|
|POST /employees/{id}/contacts|
|PATCH /employees/{id}/contacts/{cid}|
|POST /employees/{id}/education|



|POST /employees/{id}/experience|
| - |
|GET /employees/{id}/bank-accounts|
|POST /employees/{id}/bank-accounts|
|PUT /employees/{id}/statutory-ids|
|GET /employees/probation-due|
|POST /employees/{id}/confirm|
|GET /directory|
|POST /employees/exports|
|POST /employees/{id}/archive|
|GET /celebrations|
|GET /me/profile|
|PATCH /me/profile|
|POST /me/profile-change-requests|
|GET /me/profile-change-requests|
|GET /me/requests|
|GET /me/dashboard|
|GET /team|
|GET /team/today|
|POST /me/privacy-acknowledgements|
|POST /me/data-exports|
|POST /files/upload-intents|
|POST /files/{id}/complete|
|(internal service/job)|
|GET /files/{id}/download-url|



|GET /document-types|
| - |
|POST /document-types|
|PATCH /document-types/{id}|
|GET /employees/{id}/documents|
|POST /employees/{id}/documents|
|POST /documents/{id}/verify|
|POST /documents/{id}/reject|
|GET /documents/expiring|
|GET /policies|
|POST /policies|
|POST /policies/{id}/publish|
|POST /policies/{id}/acknowledge|
|GET /letter-templates|
|POST /letter-templates|
|POST /letters/generate|
|POST /letters/{id}/esign|
|POST /webhooks/esign|
|GET /library|
|POST /library/folders|
|GET /requisitions|



|POST /requisitions|
| - |
|PATCH /requisitions/{id}|
|POST /requisitions/{id}/submit|
|GET /jobs|
|POST /jobs|
|PATCH /jobs/{id}|
|POST /jobs/{id}/publish|
|POST /jobs/{id}/close|
|GET /public/{tenantSlug}/jobs|
|GET /public/{tenantSlug}/jobs/{id}|
|POST /public/{tenantSlug}/jobs/{id}/apply|
|POST /jobs/{id}/distributions|
|POST /referrals|
|GET /me/referrals|
|GET /candidates|
|POST /candidates|
|PATCH /candidates/{id}|
|POST /candidates/{id}/merge|
|GET /jobs/{id}/applications|
|POST /applications/{id}/move|



|POST /candidates/parse|
| - |
|(internal service/job)|
|POST /applications/{id}/interviews|
|PATCH /interviews/{id}|
|POST /interviews/{id}/cancel|
|GET /interviews/{id}/feedback|
|POST /interviews/{id}/feedback|
|POST /applications/{id}/offers|
|PATCH /offers/{id}|
|POST /offers/{id}/submit|
|POST /offers/{id}/send|
|GET /portal/offers/{token}|
|POST /portal/offers/{token}/accept|
|POST /portal/offers/{token}/decline|
|(internal service/job)|
|GET /reports/recruitment/\*|
|GET /onboarding/templates|
|POST /onboarding/templates|
|PATCH /onboarding/templates/{id}|
|GET /onboarding/cases|
|GET /onboarding/cases/{id}|



|PATCH /onboarding/tasks/{id}|
| - |
|GET /portal/prejoin/{token}|
|PUT /portal/prejoin/{token}/sections/{section}|
|POST /portal/prejoin/{token}/submit|
|POST /onboarding/cases/{id}/documents/{docId}/verify|
|POST /onboarding/cases/{id}/joined|
|POST /onboarding/cases/{id}/no-show|
|POST /onboarding/cases/{id}/buddy|
|POST /onboarding/cases/{id}/checkins|
|POST /me/resignation|
|POST /me/resignation/withdraw|
|POST /exits/{id}/accept|
|PATCH /exits/{id}|
|POST /employees/{id}/termination|
|GET /exits/{id}/clearances|
|PATCH /exits/{id}/clearances/{cid}|
|GET /exits/{id}/interview|
|POST /exits/{id}/interview|
|(internal service/job)|
|POST /exits/{id}/letters|
|PATCH /exits/{id}/rehire-eligibility|



|POST /attendance/punches|
| - |
|GET /me/attendance/today|
|POST /attendance/punches|
|POST /attendance/punches|
|(internal service/job)|
|GET /devices|
|POST /devices|
|POST /devices/{id}/sync|
|POST /devices/ingest|
|GET /devices/exceptions|
|POST /kiosk/punches|
|POST /attendance/punches/batch|
|(internal service/job)|
|(internal service/job)|
|GET /attendance/policies|
|POST /attendance/policies|
|POST /attendance/policies/{id}/versions|
|POST /attendance/policies/{id}/versions/{v}/activate|
|(internal service/job)|
|GET /me/attendance|
|GET /attendance/days|
|GET /team/attendance|
|POST /attendance/regularizations|



|GET /attendance/regularizations|
| - |
|POST /attendance/regularizations/{id}/cancel|
|POST /attendance/on-duty-requests|
|GET /attendance/on-duty-requests|
|GET /attendance/overtime|
|POST /attendance/overtime/{id}/decision|
|GET /attendance/periods|
|POST /attendance/periods/{id}/lock|
|POST /attendance/periods/{id}/unlock|
|GET /me/timesheets|
|POST /me/timesheets|
|POST /timesheets/{id}/decision|
|GET /reports/attendance/\*|
|GET /shifts|
|POST /shifts|
|PATCH /shifts/{id}|
|GET /weekly-off-patterns|
|POST /weekly-off-patterns|
|GET /rosters|
|PUT /rosters|
|POST /rosters/publish|



|POST /shift-swaps|
| - |
|POST /shift-swaps/{id}/decision|
|GET /reports/roster-coverage|
|GET /leave/types|
|POST /leave/types|
|PATCH /leave/types/{id}|
|GET /leave/policies|
|POST /leave/policies|
|POST /leave/policies/{id}/versions|
|POST /leave/policies/{id}/versions/{v}/activate|
|GET /holiday-calendars|
|POST /holiday-calendars|
|POST /holiday-calendars/{id}/holidays|
|POST /me/restricted-holidays|
|GET /me/leave/balances|
|GET /leave/balances|
|GET /employees/{id}/leave/ledger|
|POST /leave/requests|
|GET /leave/requests|
|GET /leave/requests/{id}|
|POST /leave/requests/{id}/decision|
|POST /leave/requests/{id}/cancel|
|POST /leave/requests|
|(internal service/job)|



|POST /leave/year-end-runs|
| - |
|GET /leave/year-end-runs/{id}|
|POST /leave/comp-off-requests|
|GET /me/leave/comp-offs|
|(internal service/job)|
|GET /team/leave-calendar|
|GET /reports/leave/\*|
|POST /imports (type=leave\_opening)|
|GET /payroll/components|
|POST /payroll/components|
|PATCH /payroll/components/{id}|
|POST /payroll/formulas/validate|
|GET /payroll/structures|
|POST /payroll/structures|
|PATCH /payroll/structures/{id}|
|GET /employees/{id}/compensation|
|POST /employees/{id}/compensation-revisions|
|POST /imports (type=compensation\_revision)|
|GET /payroll/calendars|
|POST /payroll/calendars|
|GET /payroll/periods|
|GET /payroll/periods/{id}/inputs|
|POST /payroll/periods/{id}/inputs|



|POST /payroll/runs|
| - |
|POST /payroll/runs/{id}/calculate|
|GET /payroll/runs/{id}|
|GET /payroll/runs/{id}/employees|
|GET /payroll/runs/{id}/variance|
|POST /payroll/runs/{id}/submit|
|POST /payroll/runs/{id}/approve|
|POST /payroll/runs/{id}/reject|
|POST /payroll/runs/{id}/lock|
|POST /payroll/runs/{id}/bank-files|
|POST /payroll/runs/{id}/payment-confirmations|
|GET /me/payslips|
|GET /me/payslips/{id}/download-url|
|POST /payroll/runs/{id}/payslips/publish|
|POST /payroll/runs (type=off\_cycle)|
|POST /loans|
|GET /loans|
|POST /loans/{id}/decision|
|POST /loans/{id}/foreclose|
|POST /exits/{id}/fnf|
|PATCH /fnf/{id}|
|POST /fnf/{id}/approve|
|POST /payroll-exchange/exports|
|POST /payroll-exchange/imports|



|GET /payroll-exchange/reconciliation|
| - |
|POST /payroll/runs/{id}/journal-exports|
|GET /reports/payroll/\*|
|POST /payroll/parallel-runs|
|GET /payroll/parallel-runs/{id}|
|GET /statutory/rule-sets|
|POST /statutory/rule-sets|
|POST /statutory/rule-sets/{id}/approve|
|GET /statutory/pf/settings|
|POST /statutory/pf/ecr|
|POST /statutory/esi/returns|
|GET /statutory/pt|
|POST /statutory/pt/challans|
|GET /statutory/lwf|
|GET /me/tax/declarations|
|PUT /me/tax/declarations/{fy}|
|POST /me/tax/regime|
|POST /me/tax/proofs|
|POST /tax/proofs/{id}/decision|
|GET /employees/{id}/tax/computation|
|POST /tax/24q|
|POST /tax/form16/generate|



|GET /me/tax/form16|
| - |
|GET /reports/statutory/\*|
|GET /statutory/calendar|
|GET /performance/cycles|
|POST /performance/cycles|
|PATCH /performance/cycles/{id}|
|POST /performance/cycles/{id}/launch|
|GET /performance/goals|
|POST /performance/goals|
|PATCH /performance/goals/{id}|
|POST /performance/goals/{id}/checkins|
|GET /performance/kpis|
|POST /performance/kpis|
|GET /performance/one-on-ones|
|POST /performance/one-on-ones|
|GET /performance/reviews|
|GET /performance/reviews/{id}|
|PUT /performance/reviews/{id}|
|POST /performance/reviews/{id}/submit|
|POST /performance/feedback-requests|
|POST /performance/feedback/{id}|
|GET /performance/cycles/{id}/calibration|
|POST /performance/calibration-changes|



|POST /performance/cycles/{id}/release|
| - |
|POST /performance/reviews/{id}/acknowledge|
|POST /performance/recommendations|
|POST /performance/recommendations/{id}/decision|
|POST /performance/pips|
|PATCH /performance/pips/{id}|
|POST /performance/cycles/{id}/close|
|POST /performance/cycles/{id}/reopen|
|GET /learning/courses|
|POST /learning/courses|
|PATCH /learning/courses/{id}|
|POST /learning/assignments|
|POST /learning/rules|
|GET /me/learning|
|POST /me/learning/{id}/progress|
|POST /learning/assessments|
|POST /me/learning/assessments/{id}/attempts|
|GET /learning/sessions|
|POST /learning/sessions|
|POST /learning/sessions/{id}/attendance|
|GET /learning/certifications|



|POST /learning/certifications|
| - |
|POST /learning/requests|
|POST /learning/requests/{id}/decision|
|GET /assets/categories|
|POST /assets/categories|
|GET /assets/items|
|POST /assets/items|
|PATCH /assets/items/{id}|
|POST /assets/requests|
|POST /assets/requests/{id}/decision|
|POST /assets/items/{id}/allocate|
|POST /me/assets/{allocationId}/acknowledge|
|POST /assets/allocations/{id}/return|
|POST /assets/items/{id}/transfer|
|POST /assets/items/{id}/status|
|GET /reports/assets/\*|
|GET /helpdesk/categories|
|POST /helpdesk/categories|
|POST /helpdesk/sla-policies|
|POST /helpdesk/tickets|
|GET /me/tickets|
|POST /helpdesk/tickets/{id}/comments|



|POST /helpdesk/tickets/{id}/reopen|
| - |
|GET /helpdesk/tickets|
|PATCH /helpdesk/tickets/{id}|
|POST /helpdesk/tickets/{id}/assign|
|(internal service/job)|
|GET /kb/articles|
|POST /kb/articles|
|POST /helpdesk/tickets/{id}/csat|
|GET /reports/helpdesk/\*|
|GET /expenses/policies|
|POST /expenses/policies|
|POST /expenses/claims|
|PATCH /expenses/claims/{id}|
|POST /expenses/claims/{id}/submit|
|GET /me/expenses|
|POST /expenses/claims/{id}/decision|
|POST /expenses/advances|
|POST /expenses/advances/{id}/decision|
|POST /expenses/payout-batches|
|POST /expenses/payout-batches/{id}/confirm|
|GET /reports/expenses/\*|
|GET /travel/policies|



|POST /travel/policies|
| - |
|POST /travel/requests|
|GET /me/travel|
|POST /travel/requests/{id}/decision|
|POST /travel/requests/{id}/bookings|
|POST /travel/requests/{id}/settle|
|GET /announcements|
|POST /announcements|
|PATCH /announcements/{id}|
|POST /announcements/{id}/read|
|POST /polls|
|POST /polls/{id}/votes|
|POST /surveys|
|PATCH /surveys/{id}|
|POST /surveys/{id}/launch|
|POST /surveys/{id}/responses|
|GET /surveys/{id}/results|
|POST /recognitions|
|GET /recognitions|
|POST /posts/{id}/report|
|POST /posts/{id}/hide|
|GET /dashboards/{role}|
|GET /reports|



|GET /reports/{id}|
| - |
|POST /reports/{id}/views|
|POST /exports|
|GET /exports/{id}|
|GET /exports/{id}/download-url|
|POST /report-schedules|
|GET /report-schedules|
|GET /reports/headcount|
|GET /reports/attrition|
|POST /reports/custom|
|POST /reports/custom/{id}/run|
|(internal service/job)|
|(internal service/job)|
|GET /audit-events|
|GET /audit-events/{id}|
|POST /audit-events/exports|
|GET /data-access-logs|
|GET /retention-policies|
|PUT /retention-policies/{class}|
|POST /legal-holds|
|DELETE /legal-holds/{id}|
|POST /privacy-requests|
|GET /privacy-requests|
|POST /privacy-requests/{id}/decision|
|GET /login-history|



|GET /posh-cases|
| - |
|POST /posh-cases|
|(internal service/job)|
|GET /notifications|
|POST /notifications/read|
|(internal service/job)|
|GET /notification-templates|
|PUT /notification-templates/{key}/{channel}|
|GET /me/notification-preferences|
|PUT /me/notification-preferences|
|PUT /notification-channels/{channel}|
|POST /me/devices|
|DELETE /me/devices/{id}|
|(internal service/job)|
|GET /workflows|
|POST /workflows|
|POST /workflows/{id}/versions|
|POST /workflows/{id}/versions/{v}/publish|
|(internal service/job)|
|GET /approval-tasks|
|GET /approval-tasks/{id}|
|POST /approval-tasks/{id}/decision|
|POST /approval-tasks/bulk-decision|
|(internal service/job)|
|(internal service/job)|



|POST /delegations|
| - |
|GET /me/delegations|
|DELETE /delegations/{id}|
|POST /approval-actions/{token}|
|(internal service/job)|
|GET /webhooks|
|POST /webhooks|
|PATCH /webhooks/{id}|
|GET /webhooks/{id}/deliveries|
|POST /api-keys|
|GET /api-keys|
|DELETE /api-keys/{id}|
|POST /integrations/calendar/connect|
|DELETE /integrations/calendar|
|POST /integrations/accounting/connect|
|POST /integrations/accounting/sync|
|POST /integrations/slack/connect|
|POST /integrations/teams/connect|
|GET /integrations|
|POST /oauth/token|
|POST /oauth/revoke|
|(internal service/job)|
|(internal service/job)|



|(internal service/job)|
| - |
|(internal service/job)|
|(internal service/job)|
|(internal service/job)|
|(internal service/job)|
|(internal service/job)|
|(internal service/job)|
|(internal service/job)|
|(internal service/job)|
|POST /imports|
|GET /imports/{id}|
|GET /imports/{id}/rows|
|POST /imports/{id}/commit|
|GET /imports/{id}/error-file|
|GET /imports/templates/{type}|
|POST /imports|
|GET /finance/accounts|
|POST /finance/accounts|
|GET /finance/periods|
|POST /finance/periods/{id}/close|
|POST /finance/periods/{id}/reopen|
|POST /finance/journals|
|POST /finance/journals/{id}/submit|
|POST /finance/journals/{id}/approve|
|POST /finance/journals/{id}/post|
|POST /finance/journals/{id}/reverse|
|GET /finance/reports/trial-balance|



|GET /finance/reports/general-ledger|
| - |
|GET /finance/reports/profit-loss|
|GET /finance/reports/balance-sheet|
|POST /ai/ask|
|POST /ai/candidates/{id}/summary|
|POST /ai/reviews/{id}/assist|
|Repo scaffold, monorepo, CI pipeline|
|TenantContext middleware|
|PolicyEngine + scope query builder|
|Audit + outbox transactional helper|
|Worker bootstrap + BullMQ queues|
|Error envelope + correlation IDs|
|Idempotency-Key middleware|
|OpenAPI generation + contract tests|
|Cross-tenant isolation test harness|
|Observability baseline|



|||
| - | - |
|||
|||
|**Logic**|**Priority**|
|Self-signup: Visitor creates tenant, default legal entity, owner user, membership and pending subscription in one transaction. Authorise 'tenant.signup' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Self-signup: Visitor creates tenant, default legal entity, owner user, membership and pending subscription in one transaction. Authorise 'tenant.signup' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Email verification at signup: Signup email verified with single-use token before tenant review. Authorise 'tenant.signup' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Email verification at signup: Signup email verified with single-use token before tenant review. Authorise 'tenant.signup' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Platform tenant review & approval: SA approves or rejects pending tenants; auto-approve mode configurable. Authorise 'platform.tenant.approve' + scope; apply row scope and field masking.|P0|
|Platform tenant review & approval: SA approves or rejects pending tenants; auto-approve mode configurable. Authorise 'platform.tenant.approve' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Platform tenant review & approval: SA approves or rejects pending tenants; auto-approve mode configurable. Authorise 'platform.tenant.approve' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Suspend / reactivate / cancel / archive tenant: Lifecycle transitions with reason, audit and owner notification. Authorise 'platform.tenant.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Suspend / reactivate / cancel / archive tenant: Lifecycle transitions with reason, audit and owner notification. Authorise 'platform.tenant.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Suspend / reactivate / cancel / archive tenant: Lifecycle transitions with reason, audit and owner notification. Authorise 'platform.tenant.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Suspend / reactivate / cancel / archive tenant: Lifecycle transitions with reason, audit and owner notification. Authorise 'platform.tenant.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Seed system roles, leave types, workflows, templates, holiday template on activation; idempotent|P0|
|Setup wizard: Seven-step wizard: profile, entity, locations, departments, work policy, leave, invite users; tracks setup status. Authorise 'tenant.setup.manage' + scope; apply row scope and field masking.|P0|
|Setup wizard: Seven-step wizard: profile, entity, locations, departments, work policy, leave, invite users; tracks setup status. Authorise 'tenant.setup.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Setup wizard: Seven-step wizard: profile, entity, locations, departments, work policy, leave, invite users; tracks setup status. Authorise 'tenant.setup.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Tenant settings: Locale, timezone, week start, branding, security policy (MFA, session timeout, password). Authorise 'tenant.settings.manage' + scope; apply row scope and field masking.|P0|
|Tenant settings: Locale, timezone, week start, branding, security policy (MFA, session timeout, password). Authorise 'tenant.settings.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Tenant data export on exit: Owner requests full export (JSON/CSV/files ZIP); link expires 24 h. Authorise 'tenant.export.request' + scope; validate DTO; audit + outbox in the same transaction.|P1|



|Tenant data export on exit: Owner requests full export (JSON/CSV/files ZIP); link expires 24 h. Authorise 'tenant.export.request' + scope; apply row scope and field masking.|P1|
| - | - |
|Plans and plan versions: Platform defines plans, versions, modules, seat price, limits. Authorise 'platform.plan.manage' + scope; apply row scope and field masking.|P0|
|Plans and plan versions: Platform defines plans, versions, modules, seat price, limits. Authorise 'platform.plan.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Plans and plan versions: Platform defines plans, versions, modules, seat price, limits. Authorise 'platform.plan.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Subscription lifecycle: pending to trial (14 d at activation) to active/past\_due/suspended/cancelled/expired. Authorise 'tenant.subscription.read' + scope; apply row scope and field masking.|P0|
|Subscription lifecycle: pending to trial (14 d at activation) to active/past\_due/suspended/cancelled/expired. Authorise 'tenant.subscription.read' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Module and limit checks per request from plan entitlements|P0|
|Block new active employees beyond seat limit with upgrade prompt|P1|
|Invoices and payments (manual-first): Generate invoices from subscription, record payments, allocate, credit notes; immutable numbering. Authorise 'platform.billing.manage' + scope; apply row scope and field masking.|P2|
|Invoices and payments (manual-first): Generate invoices from subscription, record payments, allocate, credit notes; immutable numbering. Authorise 'platform.billing.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Invoices and payments (manual-first): Generate invoices from subscription, record payments, allocate, credit notes; immutable numbering. Authorise 'platform.billing.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Invoices and payments (manual-first): Generate invoices from subscription, record payments, allocate, credit notes; immutable numbering. Authorise 'platform.billing.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Payment gateway & dunning: Razorpay/Stripe autopay, retries, past\_due handling, suspension after grace. Authorise 'tenant.billing.pay' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Payment gateway & dunning: Razorpay/Stripe autopay, retries, past\_due handling, suspension after grace. Authorise 'tenant.billing.pay' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Trial ending 7/3/1 days, payment due, suspended|P0|
|Platform feature flags: Per-tenant and global flags for gated features. Authorise 'platform.flags.manage' + scope; apply row scope and field masking.|P0|
|Platform feature flags: Per-tenant and global flags for gated features. Authorise 'platform.flags.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Email/password login: Login with lockout, tenant status check, membership resolution. Authorise 'auth.login' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Logout: Revoke current session. Authorise 'auth.logout' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Cookie sessions with rotation: HttpOnly Secure SameSite=Lax cookies; 15 min access, 30 d refresh, rotate, family revoke on reuse; CSRF. Authorise '-' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Cookie sessions with rotation: HttpOnly Secure SameSite=Lax cookies; 15 min access, 30 d refresh, rotate, family revoke on reuse; CSRF. Authorise '-' + scope; apply row scope and field masking.|P0|



|Password reset: Email token 30 min single-use; revokes all sessions. Authorise 'auth.password.reset' + scope; validate DTO; audit + outbox in the same transaction.|P0|
| - | - |
|Password reset: Email token 30 min single-use; revokes all sessions. Authorise 'auth.password.reset' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Change password: Authenticated change with current password; breached-password check. Authorise 'auth.password.change' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Session management: List and revoke own sessions; admin revoke user sessions. Authorise 'auth.sessions.manage' + scope; apply row scope and field masking.|P0|
|Session management: List and revoke own sessions; admin revoke user sessions. Authorise 'auth.sessions.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Session management: List and revoke own sessions; admin revoke user sessions. Authorise 'auth.sessions.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|MFA (TOTP + recovery codes): Enroll, verify, recovery codes, mandatory for privileged roles, step-up for restricted actions. Authorise 'auth.mfa.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|MFA (TOTP + recovery codes): Enroll, verify, recovery codes, mandatory for privileged roles, step-up for restricted actions. Authorise 'auth.mfa.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|MFA (TOTP + recovery codes): Enroll, verify, recovery codes, mandatory for privileged roles, step-up for restricted actions. Authorise 'auth.mfa.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|MFA (TOTP + recovery codes): Enroll, verify, recovery codes, mandatory for privileged roles, step-up for restricted actions. Authorise 'auth.mfa.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|SSO (SAML/OIDC): Per-tenant SSO with Google, Microsoft Entra, Okta; enforce-SSO toggle. Authorise 'auth.sso.manage' + scope; apply row scope and field masking.|P1|
|SSO (SAML/OIDC): Per-tenant SSO with Google, Microsoft Entra, Okta; enforce-SSO toggle. Authorise 'auth.sso.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|SSO (SAML/OIDC): Per-tenant SSO with Google, Microsoft Entra, Okta; enforce-SSO toggle. Authorise 'auth.sso.manage' + scope; apply row scope and field masking.|P1|
|SSO (SAML/OIDC): Per-tenant SSO with Google, Microsoft Entra, Okta; enforce-SSO toggle. Authorise 'auth.sso.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|SCIM provisioning: SCIM 2.0 users and groups endpoints. Authorise 'auth.scim.manage' + scope; apply row scope and field masking.|P2|
|SCIM provisioning: SCIM 2.0 users and groups endpoints. Authorise 'auth.scim.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|SCIM provisioning: SCIM 2.0 users and groups endpoints. Authorise 'auth.scim.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Passkeys (WebAuthn): Passwordless sign-in and MFA via passkeys. Authorise 'auth.passkey.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Passkeys (WebAuthn): Passwordless sign-in and MFA via passkeys. Authorise 'auth.passkey.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Invite user: Invite email with role; token 72 h single-use; role ownership check. Authorise 'access.invitation.create' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Invite user: Invite email with role; token 72 h single-use; role ownership check. Authorise 'access.invitation.create' + scope; apply row scope and field masking.|P0|



|Invite user: Invite email with role; token 72 h single-use; role ownership check. Authorise 'access.invitation.create' + scope; validate DTO; audit + outbox in the same transaction.|P0|
| - | - |
|Invite user: Invite email with role; token 72 h single-use; role ownership check. Authorise 'access.invitation.create' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Accept invitation: Set password, verify, activate membership. Authorise 'access.invitation.accept' + scope; apply row scope and field masking.|P0|
|Accept invitation: Set password, verify, activate membership. Authorise 'access.invitation.accept' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Membership lifecycle: Activate, suspend, revoke membership; revoke sessions. Authorise 'access.membership.manage' + scope; apply row scope and field masking.|P0|
|Membership lifecycle: Activate, suspend, revoke membership; revoke sessions. Authorise 'access.membership.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Email globally unique; max memberships per user configurable (default 1)|P0|
|Tenant switcher: Users with several memberships pick tenant; caches cleared on switch. Authorise 'access.tenant.switch' + scope; apply row scope and field masking.|P1|
|Tenant switcher: Users with several memberships pick tenant; caches cleared on switch. Authorise 'access.tenant.switch' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Link user to employee: Optional 1:1 link membership to employee within tenant. Authorise 'access.membership.link' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Permission catalog: Global platform-owned catalog of permission keys. Authorise 'access.catalog.read' + scope; apply row scope and field masking.|P0|
|System role templates: 17 read-only templates seeded. Authorise 'access.role.read' + scope; apply row scope and field masking.|P0|
|Custom roles: Create/clone roles from catalog only. Authorise 'access.role.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Custom roles: Create/clone roles from catalog only. Authorise 'access.role.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Custom roles: Create/clone roles from catalog only. Authorise 'access.role.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Custom roles: Create/clone roles from catalog only. Authorise 'access.role.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Role grants with scope and validity: Grant role to membership with scope type/IDs and optional validity window. Authorise 'access.grant.manage' + scope; apply row scope and field masking.|P0|
|Role grants with scope and validity: Grant role to membership with scope type/IDs and optional validity window. Authorise 'access.grant.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Role grants with scope and validity: Grant role to membership with scope type/IDs and optional validity window. Authorise 'access.grant.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Grantor cannot grant beyond own permissions; no self-grants; platform roles unassignable|P0|
|SELF, TEAM, TEAM\_TREE, DEPARTMENT, LOCATION, LEGAL\_ENTITY, ORGANIZATION, ASSIGNED|P0|
|Union permissions, broader scope wins, no DENY|P0|
|Field-level classification: Public/Internal/Sensitive/Restricted serialisation and reveal. Authorise 'employee.restricted.read' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Break-glass access: Time-limited, approved, audited platform access to a tenant. Authorise 'platform.breakglass.request' + scope; validate DTO; audit + outbox in the same transaction.|P1|



|Break-glass access: Time-limited, approved, audited platform access to a tenant. Authorise 'platform.breakglass.request' + scope; validate DTO; audit + outbox in the same transaction.|P1|
| - | - |
|Break-glass access: Time-limited, approved, audited platform access to a tenant. Authorise 'platform.breakglass.request' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Access review report: Periodic list of roles, grants, restricted readers for review. Authorise 'access.review.read' + scope; apply row scope and field masking.|P1|
|Legal entities: CRUD legal entities with statutory registrations (PAN, TAN, GSTIN, PF, ESI, PT, LWF). Authorise 'org.legal\_entity.manage' + scope; apply row scope and field masking.|P0|
|Legal entities: CRUD legal entities with statutory registrations (PAN, TAN, GSTIN, PF, ESI, PT, LWF). Authorise 'org.legal\_entity.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Legal entities: CRUD legal entities with statutory registrations (PAN, TAN, GSTIN, PF, ESI, PT, LWF). Authorise 'org.legal\_entity.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Statutory registrations: Encrypted registration numbers per entity and state. Authorise 'org.legal\_entity.statutory' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Locations with geofence: Address, state, timezone, geofence radius. Authorise 'org.location.manage' + scope; apply row scope and field masking.|P0|
|Locations with geofence: Address, state, timezone, geofence radius. Authorise 'org.location.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Locations with geofence: Address, state, timezone, geofence radius. Authorise 'org.location.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Branches: Optional grouping of locations. Authorise 'org.branch.manage' + scope; apply row scope and field masking.|P1|
|Branches: Optional grouping of locations. Authorise 'org.branch.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Branches: Optional grouping of locations. Authorise 'org.branch.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Departments tree: Hierarchical departments with head. Authorise 'org.department.manage' + scope; apply row scope and field masking.|P0|
|Departments tree: Hierarchical departments with head. Authorise 'org.department.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Departments tree: Hierarchical departments with head. Authorise 'org.department.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Departments tree: Hierarchical departments with head. Authorise 'org.department.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Designations: Job titles. Authorise 'org.designation.manage' + scope; apply row scope and field masking.|P0|
|Designations: Job titles. Authorise 'org.designation.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Designations: Job titles. Authorise 'org.designation.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Grades/bands: Grade ladder with optional pay range. Authorise 'org.grade.manage' + scope; apply row scope and field masking.|P0|
|Grades/bands: Grade ladder with optional pay range. Authorise 'org.grade.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Grades/bands: Grade ladder with optional pay range. Authorise 'org.grade.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Cost centers: Cost centers with owner; split allocation on assignment. Authorise 'org.cost\_center.manage' + scope; apply row scope and field masking.|P1|



|Cost centers: Cost centers with owner; split allocation on assignment. Authorise 'org.cost\_center.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
| - | - |
|Cost centers: Cost centers with owner; split allocation on assignment. Authorise 'org.cost\_center.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Employment types: Full-time, part-time, contract, intern, consultant. Authorise 'org.employment\_type.manage' + scope; apply row scope and field masking.|P0|
|Employment types: Full-time, part-time, contract, intern, consultant. Authorise 'org.employment\_type.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Employment types: Full-time, part-time, contract, intern, consultant. Authorise 'org.employment\_type.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Org chart: Interactive chart from current assignments. Authorise 'org.chart.read' + scope; apply row scope and field masking.|P0|
|Block deactivation when active employees reference master; require reassignment|P0|
|Create employee: Create with mandatory fields; prehire status; number series. Authorise 'employee.create' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Employee profile view/edit: Tabs: personal, contact, job, documents, attendance, leave, payroll, performance, audit. Authorise 'employee.update' + scope; apply row scope and field masking.|P0|
|Employee profile view/edit: Tabs: personal, contact, job, documents, attendance, leave, payroll, performance, audit. Authorise 'employee.update' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Employee list & search: Server-side filters, sort, cursor pagination, saved views. Authorise 'employee.read' + scope; apply row scope and field masking.|P0|
|Effective-dated assignments: Entity, location, dept, designation, grade, manager, cost center with history. Authorise 'employee.assignment.manage' + scope; apply row scope and field masking.|P0|
|Effective-dated assignments: Entity, location, dept, designation, grade, manager, cost center with history. Authorise 'employee.assignment.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Effective-dated assignments: Entity, location, dept, designation, grade, manager, cost center with history. Authorise 'employee.assignment.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Lifecycle events: Confirm, transfer, promote, redesignate, long leave, suspend, rehire with reason. Authorise 'employee.event.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Lifecycle events: Confirm, transfer, promote, redesignate, long leave, suspend, rehire with reason. Authorise 'employee.event.manage' + scope; apply row scope and field masking.|P0|
|Nightly job applies future assignments and status changes|P0|
|Reject cyclic reporting lines|P0|
|prehire/active/on\_probation/on\_notice/long\_leave/inactive/terminated transitions|P0|
|Personal, family, education, experience: Sub-records on profile. Authorise 'employee.personal.manage' + scope; apply row scope and field masking.|P0|
|Personal, family, education, experience: Sub-records on profile. Authorise 'employee.personal.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Personal, family, education, experience: Sub-records on profile. Authorise 'employee.personal.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Personal, family, education, experience: Sub-records on profile. Authorise 'employee.personal.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|



|Personal, family, education, experience: Sub-records on profile. Authorise 'employee.personal.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
| - | - |
|Bank accounts (restricted): Encrypted account, IFSC, primary flag, change approval. Authorise 'employee.bank.manage' + scope; apply row scope and field masking.|P0|
|Bank accounts (restricted): Encrypted account, IFSC, primary flag, change approval. Authorise 'employee.bank.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Statutory IDs (restricted): PAN, Aadhaar reference (last4), UAN, ESIC IP, passport. Authorise 'employee.statutory.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Probation tracking: Probation end date, confirmation task 15 days before. Authorise 'employee.probation.manage' + scope; apply row scope and field masking.|P1|
|Probation tracking: Probation end date, confirmation task 15 days before. Authorise 'employee.probation.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Employee directory: Public fields, search, hide personal mobile. Authorise 'directory.read' + scope; apply row scope and field masking.|P0|
|Employee export: Export with scope and field-class rules. Authorise 'employee.export' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Archive/soft-delete employee: Archive records needed for history. Authorise 'employee.archive' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Work anniversaries & birthdays feed: Opt-in celebrations. Authorise 'engage.celebrations.read' + scope; apply row scope and field masking.|P2|
|My profile: View own profile; edit allowed fields. Authorise 'me.profile.update' + scope; apply row scope and field masking.|P0|
|My profile: View own profile; edit allowed fields. Authorise 'me.profile.update' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Profile change requests: Approval for restricted fields (name, bank, PAN). Authorise 'me.profile\_change.create' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Profile change requests: Approval for restricted fields (name, bank, PAN). Authorise 'me.profile\_change.create' + scope; apply row scope and field masking.|P0|
|My requests hub: All request types with status timeline. Authorise 'me.requests.read' + scope; apply row scope and field masking.|P0|
|Home dashboard (employee): Punch widget, balances, tasks, announcements, holidays. Authorise 'me.dashboard.read' + scope; apply row scope and field masking.|P0|
|My team view: Manager sees direct reports, presence today, pending items. Authorise 'team.read' + scope; apply row scope and field masking.|P0|
|My team view: Manager sees direct reports, presence today, pending items. Authorise 'team.read' + scope; apply row scope and field masking.|P0|
|Privacy notice acknowledgement: Employee acknowledges privacy notice at first login. Authorise 'me.privacy.ack' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|My data download: Employee downloads own data (DPDP access). Authorise 'me.data.export' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Upload intent & presigned PUT: Create file row, presign S3 PUT, complete upload. Authorise 'files.upload' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Upload intent & presigned PUT: Create file row, presign S3 PUT, complete upload. Authorise 'files.upload' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|ClamAV scan; quarantined/active/infected|P0|
|Signed download: Authorise parent record then 5-min signed URL; audit restricted. Authorise 'files.download' + scope; apply row scope and field masking.|P0|



|Document types config: Mandatory, expiry, visibility, retention per type. Authorise 'document.type.manage' + scope; apply row scope and field masking.|P0|
| - | - |
|Document types config: Mandatory, expiry, visibility, retention per type. Authorise 'document.type.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Document types config: Mandatory, expiry, visibility, retention per type. Authorise 'document.type.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Employee documents: Attach, verify, reject, version employee documents. Authorise 'document.employee.manage' + scope; apply row scope and field masking.|P0|
|Employee documents: Attach, verify, reject, version employee documents. Authorise 'document.employee.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Employee documents: Attach, verify, reject, version employee documents. Authorise 'document.employee.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Employee documents: Attach, verify, reject, version employee documents. Authorise 'document.employee.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Expiry tracking: Reminders 30/15/7/0 days; flags. Authorise 'document.expiry.read' + scope; apply row scope and field masking.|P0|
|Company policies & acknowledgement: Publish versioned policies to audiences; track acknowledgement. Authorise 'document.policy.manage' + scope; apply row scope and field masking.|P1|
|Company policies & acknowledgement: Publish versioned policies to audiences; track acknowledgement. Authorise 'document.policy.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Company policies & acknowledgement: Publish versioned policies to audiences; track acknowledgement. Authorise 'document.policy.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Company policies & acknowledgement: Publish versioned policies to audiences; track acknowledgement. Authorise 'document.policy.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Letter templates & generation: Merge-field templates; generate PDF letters (offer, appointment, confirmation, increment, relieving, experience). Authorise 'document.letter.manage' + scope; apply row scope and field masking.|P1|
|Letter templates & generation: Merge-field templates; generate PDF letters (offer, appointment, confirmation, increment, relieving, experience). Authorise 'document.letter.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Letter templates & generation: Merge-field templates; generate PDF letters (offer, appointment, confirmation, increment, relieving, experience). Authorise 'document.letter.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|E-sign integration: Send letters for e-sign (Leegality/DocuSign). Authorise 'document.esign.send' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|E-sign integration: Send letters for e-sign (Leegality/DocuSign). Authorise 'document.esign.send' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Company document library: Folders, access by audience. Authorise 'document.library.read' + scope; apply row scope and field masking.|P1|
|Company document library: Folders, access by audience. Authorise 'document.library.read' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Manpower requisition: Raise requisition with headcount, budget, justification; approval workflow. Authorise 'recruitment.requisition.manage' + scope; apply row scope and field masking.|P1|



|Manpower requisition: Raise requisition with headcount, budget, justification; approval workflow. Authorise 'recruitment.requisition.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
| - | - |
|Manpower requisition: Raise requisition with headcount, budget, justification; approval workflow. Authorise 'recruitment.requisition.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Manpower requisition: Raise requisition with headcount, budget, justification; approval workflow. Authorise 'recruitment.requisition.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Job creation & posting: Job from approved requisition; description, skills, publish to careers page. Authorise 'recruitment.job.manage' + scope; apply row scope and field masking.|P1|
|Job creation & posting: Job from approved requisition; description, skills, publish to careers page. Authorise 'recruitment.job.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Job creation & posting: Job from approved requisition; description, skills, publish to careers page. Authorise 'recruitment.job.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Job creation & posting: Job from approved requisition; description, skills, publish to careers page. Authorise 'recruitment.job.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Job creation & posting: Job from approved requisition; description, skills, publish to careers page. Authorise 'recruitment.job.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Careers page & apply: Public branded careers page; apply form with consent. Authorise 'careers.apply' + scope; apply row scope and field masking.|P1|
|Careers page & apply: Public branded careers page; apply form with consent. Authorise 'careers.apply' + scope; apply row scope and field masking.|P1|
|Careers page & apply: Public branded careers page; apply form with consent. Authorise 'careers.apply' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Job board distribution: Push jobs to LinkedIn, Naukri, Indeed via integration. Authorise 'recruitment.job.distribute' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Employee referrals: Employees refer candidates; referral status and bonus eligibility. Authorise 'recruitment.referral.create' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Employee referrals: Employees refer candidates; referral status and bonus eligibility. Authorise 'recruitment.referral.create' + scope; apply row scope and field masking.|P1|
|Candidate database: Profiles, resumes, tags, dedupe on email/mobile, merge. Authorise 'recruitment.candidate.manage' + scope; apply row scope and field masking.|P1|
|Candidate database: Profiles, resumes, tags, dedupe on email/mobile, merge. Authorise 'recruitment.candidate.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Candidate database: Profiles, resumes, tags, dedupe on email/mobile, merge. Authorise 'recruitment.candidate.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Candidate database: Profiles, resumes, tags, dedupe on email/mobile, merge. Authorise 'recruitment.candidate.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Configurable pipeline: Stage templates per job; drag-drop stage moves with reason. Authorise 'recruitment.application.move' + scope; apply row scope and field masking.|P1|
|Configurable pipeline: Stage templates per job; drag-drop stage moves with reason. Authorise 'recruitment.application.move' + scope; validate DTO; audit + outbox in the same transaction.|P1|



|Resume parsing: Extract fields from PDF/DOCX resumes. Authorise 'recruitment.candidate.parse' + scope; validate DTO; audit + outbox in the same transaction.|P2|
| - | - |
|Consent capture; anonymise after retention|P1|
|Interview scheduling: Schedule rounds, panel, calendar invites, reschedule. Authorise 'recruitment.interview.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Interview scheduling: Schedule rounds, panel, calendar invites, reschedule. Authorise 'recruitment.interview.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Interview scheduling: Schedule rounds, panel, calendar invites, reschedule. Authorise 'recruitment.interview.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Scorecards & blind feedback: Structured scorecard; interviewer sees others' feedback only after submitting. Authorise 'recruitment.feedback.submit' + scope; apply row scope and field masking.|P1|
|Scorecards & blind feedback: Structured scorecard; interviewer sees others' feedback only after submitting. Authorise 'recruitment.feedback.submit' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Offer management: Draft offer from grade band; approval if out of band; letter; send. Authorise 'recruitment.offer.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Offer management: Draft offer from grade band; approval if out of band; letter; send. Authorise 'recruitment.offer.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Offer management: Draft offer from grade band; approval if out of band; letter; send. Authorise 'recruitment.offer.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Offer management: Draft offer from grade band; approval if out of band; letter; send. Authorise 'recruitment.offer.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Candidate offer portal: Accept/decline offer via tokenised link. Authorise 'offer.respond' + scope; apply row scope and field masking.|P1|
|Candidate offer portal: Accept/decline offer via tokenised link. Authorise 'offer.respond' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Candidate offer portal: Accept/decline offer via tokenised link. Authorise 'offer.respond' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Accepted offer creates prehire employee and onboarding case|P1|
|Recruitment analytics: Funnel, time-to-hire, source effectiveness. Authorise 'reports.recruitment.read' + scope; apply row scope and field masking.|P1|
|Onboarding templates: Task templates by entity/department/type/location with offsets. Authorise 'onboarding.template.manage' + scope; apply row scope and field masking.|P1|
|Onboarding templates: Task templates by entity/department/type/location with offsets. Authorise 'onboarding.template.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Onboarding templates: Task templates by entity/department/type/location with offsets. Authorise 'onboarding.template.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Onboarding case & tasks: Case per joiner; tasks to HR/IT/manager/finance/employee; progress. Authorise 'onboarding.case.manage' + scope; apply row scope and field masking.|P1|
|Onboarding case & tasks: Case per joiner; tasks to HR/IT/manager/finance/employee; progress. Authorise 'onboarding.case.manage' + scope; apply row scope and field masking.|P1|



|Onboarding case & tasks: Case per joiner; tasks to HR/IT/manager/finance/employee; progress. Authorise 'onboarding.case.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
| - | - |
|Pre-joining portal: Token portal for personal data, bank, PAN, education, documents, Form 11. Authorise 'portal.prejoin.submit' + scope; apply row scope and field masking.|P1|
|Pre-joining portal: Token portal for personal data, bank, PAN, education, documents, Form 11. Authorise 'portal.prejoin.submit' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Pre-joining portal: Token portal for personal data, bank, PAN, education, documents, Form 11. Authorise 'portal.prejoin.submit' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Document verification: HR verifies or rejects submitted documents. Authorise 'onboarding.document.verify' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Mark joined / no-show: Joined activates employee and invite; no-show closes case. Authorise 'onboarding.case.join' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Mark joined / no-show: Joined activates employee and invite; no-show closes case. Authorise 'onboarding.case.join' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Buddy & induction: Assign buddy; induction schedule; 30/60/90-day check-ins. Authorise 'onboarding.induction.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Buddy & induction: Assign buddy; induction schedule; 30/60/90-day check-ins. Authorise 'onboarding.induction.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Resignation submission: Employee resigns with reason and proposed last day; withdrawal. Authorise 'exit.resignation.create' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Resignation submission: Employee resigns with reason and proposed last day; withdrawal. Authorise 'exit.resignation.create' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Resignation acceptance & notice: Manager/HR accept, adjust last day, waive or recover notice. Authorise 'exit.resignation.decide' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Resignation acceptance & notice: Manager/HR accept, adjust last day, waive or recover notice. Authorise 'exit.resignation.decide' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Termination & retirement: HR initiates termination with category and document. Authorise 'exit.termination.create' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Clearance checklist: Department clearances (IT, assets, finance, admin, manager). Authorise 'exit.clearance.manage' + scope; apply row scope and field masking.|P1|
|Clearance checklist: Department clearances (IT, assets, finance, admin, manager). Authorise 'exit.clearance.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Exit interview: Questionnaire; HR-only visibility. Authorise 'exit.interview.submit' + scope; apply row scope and field masking.|P1|
|Exit interview: Questionnaire; HR-only visibility. Authorise 'exit.interview.submit' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Job revokes sessions/login at last-day end|P1|
|Relieving & experience letters: Generate after F&F. Authorise 'exit.letter.issue' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Rehire eligibility: Restricted flag with reason. Authorise 'exit.rehire.flag' + scope; validate DTO; audit + outbox in the same transaction.|P2|



|Web punch (4 events): CHECK\_IN, BREAK\_START, BREAK\_END, CHECK\_OUT with transition rules and idempotency. Authorise 'attendance.punch.create' + scope; validate DTO; audit + outbox in the same transaction.|P0|
| - | - |
|Web punch (4 events): CHECK\_IN, BREAK\_START, BREAK\_END, CHECK\_OUT with transition rules and idempotency. Authorise 'attendance.punch.create' + scope; apply row scope and field masking.|P0|
|Mobile GPS punch: Geofence check, accuracy, block/flag per policy. Authorise 'attendance.punch.create' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Selfie punch: Photo captured with punch; 90-day retention. Authorise 'attendance.punch.create' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Web punch only from allowed IP ranges|P1|
|Biometric device integration: Register devices; pull/push sync; map device user IDs; exceptions queue. Authorise 'attendance.device.manage' + scope; apply row scope and field masking.|P1|
|Biometric device integration: Register devices; pull/push sync; map device user IDs; exceptions queue. Authorise 'attendance.device.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Biometric device integration: Register devices; pull/push sync; map device user IDs; exceptions queue. Authorise 'attendance.device.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Biometric device integration: Register devices; pull/push sync; map device user IDs; exceptions queue. Authorise 'attendance.device.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Biometric device integration: Register devices; pull/push sync; map device user IDs; exceptions queue. Authorise 'attendance.device.manage' + scope; apply row scope and field masking.|P1|
|Kiosk punch: Shared tablet with PIN/QR. Authorise 'attendance.punch.kiosk' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Offline mobile punch sync: Queue with device time and idempotency; drift flag. Authorise 'attendance.punch.create' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Upsert + FOR UPDATE per employee/day; minutes, status from versioned policy|P0|
|Work date from shift timezone; overnight attaches to start date|P0|
|Attendance policies (versioned): Grace, late mark, half/full day, rounding, capture modes, geofence action. Authorise 'attendance.policy.manage' + scope; apply row scope and field masking.|P0|
|Attendance policies (versioned): Grace, late mark, half/full day, rounding, capture modes, geofence action. Authorise 'attendance.policy.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Attendance policies (versioned): Grace, late mark, half/full day, rounding, capture modes, geofence action. Authorise 'attendance.policy.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Attendance policies (versioned): Grace, late mark, half/full day, rounding, capture modes, geofence action. Authorise 'attendance.policy.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Mark absent/missing punch, auto-checkout per policy|P0|
|Attendance views: My attendance calendar; team; org muster. Authorise 'attendance.day.read' + scope; apply row scope and field masking.|P0|
|Attendance views: My attendance calendar; team; org muster. Authorise 'attendance.day.read' + scope; apply row scope and field masking.|P0|
|Attendance views: My attendance calendar; team; org muster. Authorise 'attendance.day.read' + scope; apply row scope and field masking.|P0|
|Regularization: Request corrected punches within window/limits; approval; correction punches. Authorise 'attendance.regularization.create' + scope; validate DTO; audit + outbox in the same transaction.|P0|



|Regularization: Request corrected punches within window/limits; approval; correction punches. Authorise 'attendance.regularization.create' + scope; apply row scope and field masking.|P0|
| - | - |
|Regularization: Request corrected punches within window/limits; approval; correction punches. Authorise 'attendance.regularization.create' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|On-duty / WFH requests: Mark days without punches on approval. Authorise 'attendance.onduty.create' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|On-duty / WFH requests: Mark days without punches on approval. Authorise 'attendance.onduty.create' + scope; apply row scope and field masking.|P0|
|Overtime capture & approval: OT minutes beyond threshold; approval; to payroll or comp-off. Authorise 'attendance.overtime.manage' + scope; apply row scope and field masking.|P1|
|Overtime capture & approval: OT minutes beyond threshold; approval; to payroll or comp-off. Authorise 'attendance.overtime.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Attendance period lock: Lock per entity per period; unlock with reason. Authorise 'attendance.period.lock' + scope; apply row scope and field masking.|P0|
|Attendance period lock: Lock per entity per period; unlock with reason. Authorise 'attendance.period.lock' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Attendance period lock: Lock per entity per period; unlock with reason. Authorise 'attendance.period.lock' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Contractor timesheets: Daily/weekly hours by project for contractors. Authorise 'attendance.timesheet.manage' + scope; apply row scope and field masking.|P2|
|Contractor timesheets: Daily/weekly hours by project for contractors. Authorise 'attendance.timesheet.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Contractor timesheets: Daily/weekly hours by project for contractors. Authorise 'attendance.timesheet.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Attendance reports: Muster roll, monthly register, late/early, absenteeism, OT, geo map. Authorise 'reports.attendance.read' + scope; apply row scope and field masking.|P0|
|Shift templates: Start/end, breaks, thresholds, overnight, punch window. Authorise 'shift.template.manage' + scope; apply row scope and field masking.|P0|
|Shift templates: Start/end, breaks, thresholds, overnight, punch window. Authorise 'shift.template.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Shift templates: Start/end, breaks, thresholds, overnight, punch window. Authorise 'shift.template.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Weekly-off patterns: Fixed, alternate Saturdays, rotational. Authorise 'shift.weekoff.manage' + scope; apply row scope and field masking.|P0|
|Weekly-off patterns: Fixed, alternate Saturdays, rotational. Authorise 'shift.weekoff.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Roster planning & publish: Grid roster per employee per date; bulk assign; publish. Authorise 'shift.roster.manage' + scope; apply row scope and field masking.|P1|
|Roster planning & publish: Grid roster per employee per date; bulk assign; publish. Authorise 'shift.roster.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Roster planning & publish: Grid roster per employee per date; bulk assign; publish. Authorise 'shift.roster.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|



|Shift swap requests: Peer swap with both + manager approval; rest-gap rule. Authorise 'shift.swap.create' + scope; validate DTO; audit + outbox in the same transaction.|P2|
| - | - |
|Shift swap requests: Peer swap with both + manager approval; rest-gap rule. Authorise 'shift.swap.create' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Roster coverage report: Coverage by location/hour. Authorise 'reports.roster.read' + scope; apply row scope and field masking.|P2|
|Leave types: Paid/unpaid, balance-tracked, unit, colour. Authorise 'leave.type.manage' + scope; apply row scope and field masking.|P0|
|Leave types: Paid/unpaid, balance-tracked, unit, colour. Authorise 'leave.type.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Leave types: Paid/unpaid, balance-tracked, unit, colour. Authorise 'leave.type.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Leave policies (versioned): Eligibility, accrual, caps, carry-forward, encashment, sandwich, notice, docs, half-day. Authorise 'leave.policy.manage' + scope; apply row scope and field masking.|P0|
|Leave policies (versioned): Eligibility, accrual, caps, carry-forward, encashment, sandwich, notice, docs, half-day. Authorise 'leave.policy.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Leave policies (versioned): Eligibility, accrual, caps, carry-forward, encashment, sandwich, notice, docs, half-day. Authorise 'leave.policy.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Leave policies (versioned): Eligibility, accrual, caps, carry-forward, encashment, sandwich, notice, docs, half-day. Authorise 'leave.policy.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Holiday calendars: Per entity + location; mandatory and restricted holidays. Authorise 'leave.holiday.manage' + scope; apply row scope and field masking.|P0|
|Holiday calendars: Per entity + location; mandatory and restricted holidays. Authorise 'leave.holiday.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Holiday calendars: Per entity + location; mandatory and restricted holidays. Authorise 'leave.holiday.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Holiday calendars: Per entity + location; mandatory and restricted holidays. Authorise 'leave.holiday.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Leave ledger & balances: Append-only ledger; locked balance projection. Authorise 'leave.balance.read' + scope; apply row scope and field masking.|P0|
|Leave ledger & balances: Append-only ledger; locked balance projection. Authorise 'leave.balance.read' + scope; apply row scope and field masking.|P0|
|Leave ledger & balances: Append-only ledger; locked balance projection. Authorise 'leave.balance.read' + scope; apply row scope and field masking.|P0|
|Apply leave: Dates, half-day, reason, attachment; reserve on submit. Authorise 'leave.request.create' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Apply leave: Dates, half-day, reason, attachment; reserve on submit. Authorise 'leave.request.create' + scope; apply row scope and field masking.|P0|
|Apply leave: Dates, half-day, reason, attachment; reserve on submit. Authorise 'leave.request.create' + scope; apply row scope and field masking.|P0|
|Approve / reject leave: Convert or release reservation; attendance sync. Authorise 'leave.request.approve' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Cancel leave: Cancel pending (release) or approved (approval + reversal). Authorise 'leave.request.cancel' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Leave on behalf: HR applies for an employee. Authorise 'leave.request.on\_behalf' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Monthly/quarterly/annual accrual with pro-rata|P1|



|Year-end processing: Carry-forward, lapse, encashment entries; idempotent. Authorise 'leave.yearend.run' + scope; validate DTO; audit + outbox in the same transaction.|P1|
| - | - |
|Year-end processing: Carry-forward, lapse, encashment entries; idempotent. Authorise 'leave.yearend.run' + scope; apply row scope and field masking.|P1|
|Comp-off: Credit from OT/holiday work; expiry. Authorise 'leave.compoff.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Comp-off: Credit from OT/holiday work; expiry. Authorise 'leave.compoff.manage' + scope; apply row scope and field masking.|P1|
|Exclude holidays/weekly-offs unless sandwich rule|P0|
|Team leave calendar: Calendar of team leaves and holidays. Authorise 'leave.calendar.read' + scope; apply row scope and field masking.|P0|
|Leave reports: Balance register, availed, liability, LOP for payroll. Authorise 'reports.leave.read' + scope; apply row scope and field masking.|P0|
|Opening balance import: Import balances at go-live as opening ledger entries. Authorise 'leave.balance.import' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Salary components: Category, method, proration, taxable/PF/ESI flags, rounding, GL mapping. Authorise 'payroll.component.manage' + scope; apply row scope and field masking.|P1|
|Salary components: Category, method, proration, taxable/PF/ESI flags, rounding, GL mapping. Authorise 'payroll.component.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Salary components: Category, method, proration, taxable/PF/ESI flags, rounding, GL mapping. Authorise 'payroll.component.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Formula DSL engine: Sandboxed expression language with versioning and tests. Authorise '-' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Salary structures: CTC templates by grade/entity. Authorise 'payroll.structure.manage' + scope; apply row scope and field masking.|P1|
|Salary structures: CTC templates by grade/entity. Authorise 'payroll.structure.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Salary structures: CTC templates by grade/entity. Authorise 'payroll.structure.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Employee compensation & revisions: Effective-dated CTC; revisions create arrears. Authorise 'payroll.compensation.manage' + scope; apply row scope and field masking.|P1|
|Employee compensation & revisions: Effective-dated CTC; revisions create arrears. Authorise 'payroll.compensation.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Bulk revision upload: Annual increments via import with approval. Authorise 'payroll.compensation.import' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Payroll calendars & periods: Frequency, cut-off, pay date per entity. Authorise 'payroll.calendar.manage' + scope; apply row scope and field masking.|P1|
|Payroll calendars & periods: Frequency, cut-off, pay date per entity. Authorise 'payroll.calendar.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Payroll calendars & periods: Frequency, cut-off, pay date per entity. Authorise 'payroll.calendar.manage' + scope; apply row scope and field masking.|P1|
|Payroll inputs: Variable pay, one-time earnings/deductions, LOP review. Authorise 'payroll.input.manage' + scope; apply row scope and field masking.|P1|
|Payroll inputs: Variable pay, one-time earnings/deductions, LOP review. Authorise 'payroll.input.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|



|Run payroll (calculate): Snapshot inputs; chunked calculation; line explanations. Authorise 'payroll.run.calculate' + scope; validate DTO; audit + outbox in the same transaction.|P1|
| - | - |
|Run payroll (calculate): Snapshot inputs; chunked calculation; line explanations. Authorise 'payroll.run.calculate' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Run payroll (calculate): Snapshot inputs; chunked calculation; line explanations. Authorise 'payroll.run.calculate' + scope; apply row scope and field masking.|P1|
|Run payroll (calculate): Snapshot inputs; chunked calculation; line explanations. Authorise 'payroll.run.calculate' + scope; apply row scope and field masking.|P1|
|Variance review: Compare to previous month; flag >20% changes. Authorise 'payroll.run.review' + scope; apply row scope and field masking.|P1|
|Maker-checker approval & lock: Submit, approve (not by calculator), lock immutable. Authorise 'payroll.run.approve' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Maker-checker approval & lock: Submit, approve (not by calculator), lock immutable. Authorise 'payroll.run.approve' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Maker-checker approval & lock: Submit, approve (not by calculator), lock immutable. Authorise 'payroll.run.approve' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Maker-checker approval & lock: Submit, approve (not by calculator), lock immutable. Authorise 'payroll.run.approve' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Bank payment file & confirmation: Bank templates; payment status from confirmation. Authorise 'payroll.payment.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Bank payment file & confirmation: Bank templates; payment status from confirmation. Authorise 'payroll.payment.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Payslips: Password-protected PDF from locked snapshot; publish; YTD. Authorise 'payroll.payslip.read' + scope; apply row scope and field masking.|P1|
|Payslips: Password-protected PDF from locked snapshot; publish; YTD. Authorise 'payroll.payslip.read' + scope; apply row scope and field masking.|P1|
|Payslips: Password-protected PDF from locked snapshot; publish; YTD. Authorise 'payroll.payslip.read' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Off-cycle runs: Bonus, arrears, corrections, F&F runs. Authorise 'payroll.run.offcycle' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Loans & advances: Principal, EMI, interest, schedule, foreclosure. Authorise 'payroll.loan.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Loans & advances: Principal, EMI, interest, schedule, foreclosure. Authorise 'payroll.loan.manage' + scope; apply row scope and field masking.|P1|
|Loans & advances: Principal, EMI, interest, schedule, foreclosure. Authorise 'payroll.loan.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Loans & advances: Principal, EMI, interest, schedule, foreclosure. Authorise 'payroll.loan.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Full & final settlement: Itemised F&F with sources and approvals. Authorise 'payroll.fnf.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Full & final settlement: Itemised F&F with sources and approvals. Authorise 'payroll.fnf.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Full & final settlement: Itemised F&F with sources and approvals. Authorise 'payroll.fnf.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Payroll exchange (export/import): Versioned export templates; idempotent import of provider results; reconciliation. Authorise 'payroll.exchange.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Payroll exchange (export/import): Versioned export templates; idempotent import of provider results; reconciliation. Authorise 'payroll.exchange.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|



|Payroll exchange (export/import): Versioned export templates; idempotent import of provider results; reconciliation. Authorise 'payroll.exchange.manage' + scope; apply row scope and field masking.|P1|
| - | - |
|GL journal export: Payroll and reimbursement journals to Tally XML, Zoho Books, CSV. Authorise 'payroll.journal.export' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Payroll reports: Register, salary sheet, bank advice, CTC, arrears, loans. Authorise 'reports.payroll.read' + scope; apply row scope and field masking.|P1|
|Parallel run & go-live gate: Compare native output with trusted payroll for N periods. Authorise 'payroll.parallel.run' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Parallel run & go-live gate: Compare native output with trusted payroll for N periods. Authorise 'payroll.parallel.run' + scope; apply row scope and field masking.|P1|
|Statutory rule sets: Versioned rules with source, effective dates, approver, hash. Authorise 'statutory.ruleset.manage' + scope; apply row scope and field masking.|P1|
|Statutory rule sets: Versioned rules with source, effective dates, approver, hash. Authorise 'statutory.ruleset.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Statutory rule sets: Versioned rules with source, effective dates, approver, hash. Authorise 'statutory.ruleset.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|PF (EPF/EPS/EDLI): Wage base, ceilings, opt-out, contributions, ECR file. Authorise 'statutory.pf.manage' + scope; apply row scope and field masking.|P1|
|PF (EPF/EPS/EDLI): Wage base, ceilings, opt-out, contributions, ECR file. Authorise 'statutory.pf.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|ESI: Eligibility per contribution period, contributions, file. Authorise 'statutory.esi.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Professional Tax: State slabs from work location; monthly deduction; challan data. Authorise 'statutory.pt.manage' + scope; apply row scope and field masking.|P1|
|Professional Tax: State slabs from work location; monthly deduction; challan data. Authorise 'statutory.pt.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Labour Welfare Fund: State LWF contributions. Authorise 'statutory.lwf.manage' + scope; apply row scope and field masking.|P2|
|Tax regime & declarations: Regime choice, investment declarations by section, HRA, previous employer. Authorise 'tax.declaration.manage' + scope; apply row scope and field masking.|P1|
|Tax regime & declarations: Regime choice, investment declarations by section, HRA, previous employer. Authorise 'tax.declaration.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Tax regime & declarations: Regime choice, investment declarations by section, HRA, previous employer. Authorise 'tax.declaration.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Proof submission & verification: Upload proofs; payroll verifies; variance applied. Authorise 'tax.proof.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Proof submission & verification: Upload proofs; payroll verifies; variance applied. Authorise 'tax.proof.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|TDS computation: Projected annual income, monthly TDS, higher rate without PAN. Authorise '-' + scope; apply row scope and field masking.|P1|
|Form 16 & 24Q: Quarterly 24Q data; Form 16 Part B generation and publish. Authorise 'tax.form16.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Form 16 & 24Q: Quarterly 24Q data; Form 16 Part B generation and publish. Authorise 'tax.form16.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|



|Form 16 & 24Q: Quarterly 24Q data; Form 16 Part B generation and publish. Authorise 'tax.form16.manage' + scope; apply row scope and field masking.|P1|
| - | - |
|Gratuity & bonus registers: Eligibility and computation registers. Authorise 'statutory.registers.read' + scope; apply row scope and field masking.|P2|
|Compliance calendar: Due dates for PF, ESI, PT, TDS with reminders. Authorise 'statutory.calendar.read' + scope; apply row scope and field masking.|P1|
|Review cycles: Cycle config: eligibility snapshot, phases, scale, weightage. Authorise 'performance.cycle.manage' + scope; apply row scope and field masking.|P1|
|Review cycles: Cycle config: eligibility snapshot, phases, scale, weightage. Authorise 'performance.cycle.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Review cycles: Cycle config: eligibility snapshot, phases, scale, weightage. Authorise 'performance.cycle.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Review cycles: Cycle config: eligibility snapshot, phases, scale, weightage. Authorise 'performance.cycle.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Goals / OKRs: SMART goals with weightage 100%, cascading, progress. Authorise 'performance.goal.manage' + scope; apply row scope and field masking.|P1|
|Goals / OKRs: SMART goals with weightage 100%, cascading, progress. Authorise 'performance.goal.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Goals / OKRs: SMART goals with weightage 100%, cascading, progress. Authorise 'performance.goal.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Goals / OKRs: SMART goals with weightage 100%, cascading, progress. Authorise 'performance.goal.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|KPI library: KPIs by designation/department. Authorise 'performance.kpi.manage' + scope; apply row scope and field masking.|P1|
|KPI library: KPIs by designation/department. Authorise 'performance.kpi.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Continuous check-ins & 1:1s: Notes, agreed actions. Authorise 'performance.checkin.manage' + scope; apply row scope and field masking.|P1|
|Continuous check-ins & 1:1s: Notes, agreed actions. Authorise 'performance.checkin.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Self & manager reviews: Forms, ratings, comments, submit. Authorise 'performance.review.submit' + scope; apply row scope and field masking.|P1|
|Self & manager reviews: Forms, ratings, comments, submit. Authorise 'performance.review.submit' + scope; apply row scope and field masking.|P1|
|Self & manager reviews: Forms, ratings, comments, submit. Authorise 'performance.review.submit' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Self & manager reviews: Forms, ratings, comments, submit. Authorise 'performance.review.submit' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|360 / peer feedback: Request feedback; anonymity threshold. Authorise 'performance.feedback.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|360 / peer feedback: Request feedback; anonymity threshold. Authorise 'performance.feedback.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Calibration: Adjust ratings with reason; distribution view; 9-box. Authorise 'performance.calibration.manage' + scope; apply row scope and field masking.|P1|
|Calibration: Adjust ratings with reason; distribution view; 9-box. Authorise 'performance.calibration.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|



|Release & acknowledgement: Release ratings; employee acknowledges or disagrees. Authorise 'performance.release.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
| - | - |
|Release & acknowledgement: Release ratings; employee acknowledges or disagrees. Authorise 'performance.release.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Increment & promotion recommendations: Recommendations handed to compensation after HR approval. Authorise 'performance.recommendation.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Increment & promotion recommendations: Recommendations handed to compensation after HR approval. Authorise 'performance.recommendation.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|PIP: Performance improvement plans with check-ins and outcome. Authorise 'performance.pip.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|PIP: Performance improvement plans with check-ins and outcome. Authorise 'performance.pip.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Cycle lock & reopen: Close locks; HR reopen with reason. Authorise 'performance.cycle.lock' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Cycle lock & reopen: Close locks; HR reopen with reason. Authorise 'performance.cycle.lock' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Course catalog: Courses: video, doc, SCORM, classroom, external. Authorise 'learning.course.manage' + scope; apply row scope and field masking.|P2|
|Course catalog: Courses: video, doc, SCORM, classroom, external. Authorise 'learning.course.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Course catalog: Courses: video, doc, SCORM, classroom, external. Authorise 'learning.course.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Assignments & auto-assign rules: Assign manually or by rule (new joiner, department). Authorise 'learning.assignment.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Assignments & auto-assign rules: Assign manually or by rule (new joiner, department). Authorise 'learning.assignment.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Learner experience: My learning, progress, completion. Authorise 'learning.my.read' + scope; apply row scope and field masking.|P2|
|Learner experience: My learning, progress, completion. Authorise 'learning.my.read' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Assessments: Question bank, pass mark, attempts. Authorise 'learning.assessment.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Assessments: Question bank, pass mark, attempts. Authorise 'learning.assessment.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Training calendar & sessions: Classroom sessions, capacity, attendance. Authorise 'learning.session.manage' + scope; apply row scope and field masking.|P2|
|Training calendar & sessions: Classroom sessions, capacity, attendance. Authorise 'learning.session.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Training calendar & sessions: Classroom sessions, capacity, attendance. Authorise 'learning.session.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Certifications with expiry: Record certificates; reminders 60/30/7. Authorise 'learning.certification.manage' + scope; apply row scope and field masking.|P2|



|Certifications with expiry: Record certificates; reminders 60/30/7. Authorise 'learning.certification.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
| - | - |
|Training requests & budget: Request external training; approval; budget tracking. Authorise 'learning.request.create' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Training requests & budget: Request external training; approval; budget tracking. Authorise 'learning.request.create' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Asset categories & catalog: Categories, models, attributes. Authorise 'asset.category.manage' + scope; apply row scope and field masking.|P1|
|Asset categories & catalog: Categories, models, attributes. Authorise 'asset.category.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Inventory: Items with tag, serial, purchase, warranty, depreciation fields. Authorise 'asset.item.manage' + scope; apply row scope and field masking.|P1|
|Inventory: Items with tag, serial, purchase, warranty, depreciation fields. Authorise 'asset.item.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Inventory: Items with tag, serial, purchase, warranty, depreciation fields. Authorise 'asset.item.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Asset requests: Employee requests asset; approval. Authorise 'asset.request.create' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Asset requests: Employee requests asset; approval. Authorise 'asset.request.create' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Allocation & acknowledgement: Allocate with condition/photos; employee acknowledges. Authorise 'asset.allocation.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Allocation & acknowledgement: Allocate with condition/photos; employee acknowledges. Authorise 'asset.allocation.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Return, transfer, repair, retire: Return inspection; damage recovery; status changes. Authorise 'asset.allocation.return' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Return, transfer, repair, retire: Return inspection; damage recovery; status changes. Authorise 'asset.allocation.return' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Return, transfer, repair, retire: Return inspection; damage recovery; status changes. Authorise 'asset.allocation.return' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Asset reports: Register, by employee, unreturned on exit, warranty expiry. Authorise 'reports.asset.read' + scope; apply row scope and field masking.|P1|
|Ticket categories & SLA: Categories, groups, SLA per priority, business hours, confidentiality. Authorise 'helpdesk.category.manage' + scope; apply row scope and field masking.|P2|
|Ticket categories & SLA: Categories, groups, SLA per priority, business hours, confidentiality. Authorise 'helpdesk.category.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Ticket categories & SLA: Categories, groups, SLA per priority, business hours, confidentiality. Authorise 'helpdesk.category.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Raise & track tickets: Employee raises; status; attachments; reopen. Authorise 'helpdesk.ticket.create' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Raise & track tickets: Employee raises; status; attachments; reopen. Authorise 'helpdesk.ticket.create' + scope; apply row scope and field masking.|P2|
|Raise & track tickets: Employee raises; status; attachments; reopen. Authorise 'helpdesk.ticket.create' + scope; validate DTO; audit + outbox in the same transaction.|P2|



|Raise & track tickets: Employee raises; status; attachments; reopen. Authorise 'helpdesk.ticket.create' + scope; validate DTO; audit + outbox in the same transaction.|P2|
| - | - |
|Agent workspace: Queue, assign, internal notes, canned responses. Authorise 'helpdesk.ticket.manage' + scope; apply row scope and field masking.|P2|
|Agent workspace: Queue, assign, internal notes, canned responses. Authorise 'helpdesk.ticket.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Agent workspace: Queue, assign, internal notes, canned responses. Authorise 'helpdesk.ticket.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Pause on awaiting employee; escalate on breach|P2|
|Knowledge base: Articles suggested while typing. Authorise 'helpdesk.kb.manage' + scope; apply row scope and field masking.|P2|
|Knowledge base: Articles suggested while typing. Authorise 'helpdesk.kb.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|CSAT & helpdesk reports: Satisfaction rating; volume, SLA %, backlog. Authorise 'reports.helpdesk.read' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|CSAT & helpdesk reports: Satisfaction rating; volume, SLA %, backlog. Authorise 'reports.helpdesk.read' + scope; apply row scope and field masking.|P2|
|Expense policies: Limits by category x grade x location; receipt thresholds; per-diem; mileage. Authorise 'expense.policy.manage' + scope; apply row scope and field masking.|P1|
|Expense policies: Limits by category x grade x location; receipt thresholds; per-diem; mileage. Authorise 'expense.policy.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Submit claim with receipts: Lines, receipts, currency, duplicate detection. Authorise 'expense.claim.create' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Submit claim with receipts: Lines, receipts, currency, duplicate detection. Authorise 'expense.claim.create' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Submit claim with receipts: Lines, receipts, currency, duplicate detection. Authorise 'expense.claim.create' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Submit claim with receipts: Lines, receipts, currency, duplicate detection. Authorise 'expense.claim.create' + scope; apply row scope and field masking.|P1|
|Approve / audit claims: Manager approve; finance audit; line-level decisions. Authorise 'expense.claim.approve' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Advances: Request, approve, pay, settle against claims. Authorise 'expense.advance.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Advances: Request, approve, pay, settle against claims. Authorise 'expense.advance.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Reimbursement payout: Via payroll component or bank file; idempotent paid status. Authorise 'expense.payout.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Reimbursement payout: Via payroll component or bank file; idempotent paid status. Authorise 'expense.payout.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Expense reports: By status, category, policy violations, outstanding advances. Authorise 'reports.expense.read' + scope; apply row scope and field masking.|P1|
|Travel policies: Class, hotel caps, advance booking by grade. Authorise 'travel.policy.manage' + scope; apply row scope and field masking.|P2|



|Travel policies: Class, hotel caps, advance booking by grade. Authorise 'travel.policy.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
| - | - |
|Travel request: Trip with legs, stay, estimate, advance. Authorise 'travel.request.create' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Travel request: Trip with legs, stay, estimate, advance. Authorise 'travel.request.create' + scope; apply row scope and field masking.|P2|
|Travel request: Trip with legs, stay, estimate, advance. Authorise 'travel.request.create' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Travel desk bookings: Upload confirmations and tickets. Authorise 'travel.booking.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Trip settlement: Expenses linked to trip; advance auto-settled. Authorise 'travel.settlement.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Announcements: Targeted, scheduled, pinned; mandatory read receipts. Authorise 'engage.announcement.manage' + scope; apply row scope and field masking.|P1|
|Announcements: Targeted, scheduled, pinned; mandatory read receipts. Authorise 'engage.announcement.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Announcements: Targeted, scheduled, pinned; mandatory read receipts. Authorise 'engage.announcement.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Announcements: Targeted, scheduled, pinned; mandatory read receipts. Authorise 'engage.announcement.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Polls: Quick single-question polls. Authorise 'engage.poll.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Polls: Quick single-question polls. Authorise 'engage.poll.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Surveys & eNPS: Question types; anonymity modes; threshold results. Authorise 'engage.survey.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Surveys & eNPS: Question types; anonymity modes; threshold results. Authorise 'engage.survey.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Surveys & eNPS: Question types; anonymity modes; threshold results. Authorise 'engage.survey.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Surveys & eNPS: Question types; anonymity modes; threshold results. Authorise 'engage.survey.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Surveys & eNPS: Question types; anonymity modes; threshold results. Authorise 'engage.survey.manage' + scope; apply row scope and field masking.|P1|
|Recognition & badges: Peer kudos tied to values; optional points. Authorise 'engage.recognition.create' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Recognition & badges: Peer kudos tied to values; optional points. Authorise 'engage.recognition.create' + scope; apply row scope and field masking.|P2|
|Social feed moderation: Likes, comments, report, hide. Authorise 'engage.moderation.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Social feed moderation: Likes, comments, report, hide. Authorise 'engage.moderation.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Role dashboards: Employee, manager, HR, payroll, owner home dashboards. Authorise 'dashboard.read' + scope; apply row scope and field masking.|P0|
|Standard report library: Catalog of 64 reports with filters and saved views. Authorise 'reports.read' + scope; apply row scope and field masking.|P0|



|Standard report library: Catalog of 64 reports with filters and saved views. Authorise 'reports.read' + scope; apply row scope and field masking.|P0|
| - | - |
|Standard report library: Catalog of 64 reports with filters and saved views. Authorise 'reports.read' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Export jobs: CSV/XLSX/PDF exports, background, expiring links, audited. Authorise 'reports.export' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Export jobs: CSV/XLSX/PDF exports, background, expiring links, audited. Authorise 'reports.export' + scope; apply row scope and field masking.|P0|
|Export jobs: CSV/XLSX/PDF exports, background, expiring links, audited. Authorise 'reports.export' + scope; apply row scope and field masking.|P0|
|Scheduled reports: Email link on schedule. Authorise 'reports.schedule.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Scheduled reports: Email link on schedule. Authorise 'reports.schedule.manage' + scope; apply row scope and field masking.|P1|
|Headcount & attrition analytics: Point-in-time headcount, joiners/leavers, attrition %. Authorise 'reports.headcount.read' + scope; apply row scope and field masking.|P0|
|Headcount & attrition analytics: Point-in-time headcount, joiners/leavers, attrition %. Authorise 'reports.headcount.read' + scope; apply row scope and field masking.|P0|
|Custom report builder: Pick fields, filters, grouping within scope. Authorise 'reports.builder.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Custom report builder: Pick fields, filters, grouping within scope. Authorise 'reports.builder.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Nightly CDC to analytics store; dashboards|P2|
|Append-only events in business transaction with masked diffs|P0|
|Audit search: Filter by actor, entity, action, date; scope applies. Authorise 'audit.read' + scope; apply row scope and field masking.|P0|
|Audit search: Filter by actor, entity, action, date; scope applies. Authorise 'audit.read' + scope; apply row scope and field masking.|P0|
|Audit export: Export evidence packs. Authorise 'audit.export' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Restricted data access log: Log reveals and restricted downloads. Authorise 'audit.access\_log.read' + scope; apply row scope and field masking.|P0|
|Retention & legal hold: Per-class retention jobs; legal hold overrides purge. Authorise 'compliance.retention.manage' + scope; apply row scope and field masking.|P1|
|Retention & legal hold: Per-class retention jobs; legal hold overrides purge. Authorise 'compliance.retention.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Retention & legal hold: Per-class retention jobs; legal hold overrides purge. Authorise 'compliance.retention.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Retention & legal hold: Per-class retention jobs; legal hold overrides purge. Authorise 'compliance.retention.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|DPDP data-principal requests: Access, correction, erasure, grievance with due dates. Authorise 'compliance.privacy\_request.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|DPDP data-principal requests: Access, correction, erasure, grievance with due dates. Authorise 'compliance.privacy\_request.manage' + scope; apply row scope and field masking.|P1|
|DPDP data-principal requests: Access, correction, erasure, grievance with due dates. Authorise 'compliance.privacy\_request.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Login history: Per-user login events and devices. Authorise 'audit.login.read' + scope; apply row scope and field masking.|P0|



|POSH case log (restricted): Confidential case register for ICC. Authorise 'compliance.posh.manage' + scope; apply row scope and field masking.|P2|
| - | - |
|POSH case log (restricted): Confidential case register for ICC. Authorise 'compliance.posh.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Same-transaction outbox; lease, backoff, DLQ, replay|P0|
|In-app notification center: Bell, read/unread, deep links. Authorise 'notification.read' + scope; apply row scope and field masking.|P0|
|In-app notification center: Bell, read/unread, deep links. Authorise 'notification.read' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Resend primary, SES fallback; bounces|P0|
|Templates: System + tenant overrides; security-critical locked; sanitised. Authorise 'notification.template.manage' + scope; apply row scope and field masking.|P0|
|Templates: System + tenant overrides; security-critical locked; sanitised. Authorise 'notification.template.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|User preferences & quiet hours: Mute non-mandatory categories; quiet hours. Authorise 'notification.preference.manage' + scope; apply row scope and field masking.|P1|
|User preferences & quiet hours: Mute non-mandatory categories; quiet hours. Authorise 'notification.preference.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|SMS & WhatsApp: DLT-approved templates via MSG91/Gupshup. Authorise 'notification.channel.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Push notifications: FCM/APNs for mobile. Authorise '-' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Push notifications: FCM/APNs for mobile. Authorise '-' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Pending approvals and team-on-leave digests|P1|
|Workflow definitions & versions: Steps, approver types, modes, conditions; publish versions. Authorise 'workflow.definition.manage' + scope; apply row scope and field masking.|P0|
|Workflow definitions & versions: Steps, approver types, modes, conditions; publish versions. Authorise 'workflow.definition.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Workflow definitions & versions: Steps, approver types, modes, conditions; publish versions. Authorise 'workflow.definition.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Workflow definitions & versions: Steps, approver types, modes, conditions; publish versions. Authorise 'workflow.definition.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Instances pin version; resolve approvers; tasks; callbacks|P0|
|Approval inbox: Unified inbox with filters, bulk approve, reason. Authorise 'workflow.task.decide' + scope; apply row scope and field masking.|P0|
|Approval inbox: Unified inbox with filters, bulk approve, reason. Authorise 'workflow.task.decide' + scope; apply row scope and field masking.|P0|
|Approval inbox: Unified inbox with filters, bulk approve, reason. Authorise 'workflow.task.decide' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Approval inbox: Unified inbox with filters, bulk approve, reason. Authorise 'workflow.task.decide' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Escalate when approver is requester; fallback for vacant manager|P0|
|Per-step SLA; reminders; escalate/auto-action|P1|



|Delegation: Delegate approvals for date range. Authorise 'workflow.delegation.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
| - | - |
|Delegation: Delegate approvals for date range. Authorise 'workflow.delegation.manage' + scope; apply row scope and field masking.|P1|
|Delegation: Delegate approvals for date range. Authorise 'workflow.delegation.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Email/mobile action links: Signed single-use links re-checking permissions. Authorise '-' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Drag-drop builder UI over WF-001|P2|
|Outbound webhooks: Event subscriptions, HMAC signing, retries, auto-disable. Authorise 'integration.webhook.manage' + scope; apply row scope and field masking.|P1|
|Outbound webhooks: Event subscriptions, HMAC signing, retries, auto-disable. Authorise 'integration.webhook.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Outbound webhooks: Event subscriptions, HMAC signing, retries, auto-disable. Authorise 'integration.webhook.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Outbound webhooks: Event subscriptions, HMAC signing, retries, auto-disable. Authorise 'integration.webhook.manage' + scope; apply row scope and field masking.|P1|
|Public API keys: Scoped, expiring, hashed keys; rate limits. Authorise 'integration.apikey.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Public API keys: Scoped, expiring, hashed keys; rate limits. Authorise 'integration.apikey.manage' + scope; apply row scope and field masking.|P1|
|Public API keys: Scoped, expiring, hashed keys; rate limits. Authorise 'integration.apikey.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Calendar integration: Google/Microsoft calendar for interviews and leave. Authorise 'integration.calendar.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Calendar integration: Google/Microsoft calendar for interviews and leave. Authorise 'integration.calendar.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Accounting connectors: Tally, Zoho Books, QuickBooks exports/push. Authorise 'integration.accounting.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Accounting connectors: Tally, Zoho Books, QuickBooks exports/push. Authorise 'integration.accounting.manage' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Slack / Teams: Notifications and approvals in chat. Authorise 'integration.chat.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Slack / Teams: Notifications and approvals in chat. Authorise 'integration.chat.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Integration health: Status, last sync, failure alerts. Authorise 'integration.health.read' + scope; apply row scope and field masking.|P1|
|Mobile auth & device binding: OAuth PKCE, secure storage, biometric unlock, remote logout. Authorise 'auth.mobile.login' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Mobile auth & device binding: OAuth PKCE, secure storage, biometric unlock, remote logout. Authorise 'auth.mobile.login' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Home, punch, leave, payslips, directory, announcements|P1|
|Approval inbox with push|P1|



|Receipt camera, OCR, draft claims|P2|
| - | - |
|Root/jailbreak and mock-location detection; no unencrypted caching|P1|
|Server-derived context; composite FKs; RLS; 404 masking; automated suite on every PR|P0|
|Envelope encryption per tenant data key; HMAC index|P0|
|Per-IP/user/tenant limits; WAF rules|P0|
|Helmet, CSP nonces, CSRF double-submit|P0|
|Secrets Manager, KMS, rotation|P0|
|SAST, dependency, container, secret scans|P0|
|Annual third-party test before first enterprise go-live|P1|
|Import framework: Upload, scan, stage, validate, preview, commit, results. Authorise 'import.batch.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Import framework: Upload, scan, stage, validate, preview, commit, results. Authorise 'import.batch.manage' + scope; apply row scope and field masking.|P0|
|Import framework: Upload, scan, stage, validate, preview, commit, results. Authorise 'import.batch.manage' + scope; apply row scope and field masking.|P0|
|Import framework: Upload, scan, stage, validate, preview, commit, results. Authorise 'import.batch.manage' + scope; validate DTO; audit + outbox in the same transaction.|P0|
|Import framework: Upload, scan, stage, validate, preview, commit, results. Authorise 'import.batch.manage' + scope; apply row scope and field masking.|P0|
|Employee import: Employees + assignments + contacts + bank. Authorise 'import.employee' + scope; apply row scope and field masking.|P0|
|Other imports: Leave balances, punches, holidays, compensation, assets, YTD payroll. Authorise 'import.other' + scope; validate DTO; audit + outbox in the same transaction.|P1|
|Accounting books & COA: Books per entity; chart of accounts tree. Authorise 'finance.coa.manage' + scope; apply row scope and field masking.|P2|
|Accounting books & COA: Books per entity; chart of accounts tree. Authorise 'finance.coa.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Fiscal periods & close: Open/closing/closed; checklist; reopen with approval. Authorise 'finance.period.manage' + scope; apply row scope and field masking.|P2|
|Fiscal periods & close: Open/closing/closed; checklist; reopen with approval. Authorise 'finance.period.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Fiscal periods & close: Open/closing/closed; checklist; reopen with approval. Authorise 'finance.period.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Journals with maker-checker: Draft, submit, approve, post, reverse; balanced. Authorise 'finance.journal.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Journals with maker-checker: Draft, submit, approve, post, reverse; balanced. Authorise 'finance.journal.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Journals with maker-checker: Draft, submit, approve, post, reverse; balanced. Authorise 'finance.journal.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Journals with maker-checker: Draft, submit, approve, post, reverse; balanced. Authorise 'finance.journal.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Journals with maker-checker: Draft, submit, approve, post, reverse; balanced. Authorise 'finance.journal.manage' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Financial reports: Trial balance, GL, P&L, balance sheet. Authorise 'finance.report.read' + scope; apply row scope and field masking.|P2|



|Financial reports: Trial balance, GL, P&L, balance sheet. Authorise 'finance.report.read' + scope; apply row scope and field masking.|P2|
| - | - |
|Financial reports: Trial balance, GL, P&L, balance sheet. Authorise 'finance.report.read' + scope; apply row scope and field masking.|P2|
|Financial reports: Trial balance, GL, P&L, balance sheet. Authorise 'finance.report.read' + scope; apply row scope and field masking.|P2|
|Policy Q&A assistant: Answers from caller-accessible policies with citations. Authorise 'ai.assistant.use' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Resume summarisation: Summaries for recruiters. Authorise 'ai.resume.summarise' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|Review writing assistance: Draft review comments from goals/check-ins. Authorise 'ai.review.assist' + scope; validate DTO; audit + outbox in the same transaction.|P2|
|pnpm/turborepo, lint, typecheck, Jest, Playwright, SAST in GitHub Actions|P0|
|Session -> membership -> tenant status -> entitlements; SET LOCAL app.tenant\_id|P0|
|RBAC + ABAC; shared by lists, details, exports|P0|
|Unit of work writing domain + audit + outbox|P0|
|Queues, DLQ, lease, backoff, metrics|P0|
|Global filter; stable codes; 404 masking|P0|
|Store request hash + response 24 h|P0|
|DTO-derived spec; client generation|P0|
|Two-tenant fixtures; auto-test every route|P0|
|Pino JSON logs, OTel traces, Sentry, health probes|P0|



||||
| - | - | - |
||||
||||
|**Estimate (days)**|**Phase**|**Feature ID**|
|3|1|TEN-001|
|3|1|TEN-001|
|1|1|TEN-002|
|1|1|TEN-002|
|1\.2|1|TEN-003|
|1\.2|1|TEN-003|
|1\.2|1|TEN-003|
|0\.9|1|TEN-004|
|0\.9|1|TEN-004|
|0\.9|1|TEN-004|
|0\.9|1|TEN-004|
|3\.5|1|TEN-005|
|2|1|TEN-006|
|2|1|TEN-006|
|2|1|TEN-006|
|1\.8|1|TEN-007|
|1\.8|1|TEN-007|
|3|8|TEN-008|



|3|8|TEN-008|
| -: | -: | - |
|1\.2|1|TEN-009|
|1\.2|1|TEN-009|
|1\.2|1|TEN-009|
|1\.8|1|TEN-010|
|1\.8|1|TEN-010|
|3\.5|1|TEN-011|
|2|8|TEN-012|
|2\.5|8|TEN-013|
|2\.5|8|TEN-013|
|2\.5|8|TEN-013|
|2\.5|8|TEN-013|
|3|8|TEN-014|
|3|8|TEN-014|
|2|1|TEN-015|
|1|1|TEN-016|
|1|1|TEN-016|
|3\.5|1|IAM-001|
|2|1|IAM-002|
|3|1|IAM-003|
|3|1|IAM-003|



|1|1|IAM-004|
| -: | -: | - |
|1|1|IAM-004|
|2|1|IAM-005|
|0\.7|1|IAM-006|
|0\.7|1|IAM-006|
|0\.7|1|IAM-006|
|1\.5|1|IAM-007|
|1\.5|1|IAM-007|
|1\.5|1|IAM-007|
|1\.5|1|IAM-007|
|2\.5|8|IAM-008|
|2\.5|8|IAM-008|
|2\.5|8|IAM-008|
|2\.5|8|IAM-008|
|2|8|IAM-009|
|2|8|IAM-009|
|2|8|IAM-009|
|1\.8|8|IAM-010|
|1\.8|8|IAM-010|
|0\.9|1|IAM-011|
|0\.9|1|IAM-011|



|0\.9|1|IAM-011|
| -: | -: | - |
|0\.9|1|IAM-011|
|1|1|IAM-012|
|1|1|IAM-012|
|1|1|IAM-013|
|1|1|IAM-013|
|2|1|IAM-014|
|1|7|IAM-015|
|1|7|IAM-015|
|2|2|IAM-016|
|3\.5|1|IAM-017|
|2|1|IAM-018|
|0\.9|1|IAM-019|
|0\.9|1|IAM-019|
|0\.9|1|IAM-019|
|0\.9|1|IAM-019|
|2|1|IAM-020|
|2|1|IAM-020|
|2|1|IAM-020|
|3\.5|1|IAM-021|
|6|1|IAM-022|
|2|1|IAM-023|
|6|2|IAM-024|
|1\.2|6|IAM-025|



|1\.2|6|IAM-025|
| -: | -: | - |
|1\.2|6|IAM-025|
|2|6|IAM-026|
|1\.2|1|ORG-001|
|1\.2|1|ORG-001|
|1\.2|1|ORG-001|
|2|4|ORG-002|
|1\.2|1|ORG-003|
|1\.2|1|ORG-003|
|1\.2|1|ORG-003|
|0\.7|2|ORG-004|
|0\.7|2|ORG-004|
|0\.7|2|ORG-004|
|0\.9|1|ORG-005|
|0\.9|1|ORG-005|
|0\.9|1|ORG-005|
|0\.9|1|ORG-005|
|0\.7|1|ORG-006|
|0\.7|1|ORG-006|
|0\.7|1|ORG-006|
|0\.7|2|ORG-007|
|0\.7|2|ORG-007|
|0\.7|2|ORG-007|
|0\.7|4|ORG-008|



|0\.7|4|ORG-008|
| -: | -: | - |
|0\.7|4|ORG-008|
|0\.7|1|ORG-009|
|0\.7|1|ORG-009|
|0\.7|1|ORG-009|
|3\.5|2|ORG-010|
|2|1|ORG-011|
|6|2|EMP-001|
|3|2|EMP-002|
|3|2|EMP-002|
|3\.5|2|EMP-003|
|2|2|EMP-004|
|2|2|EMP-004|
|2|2|EMP-004|
|3|2|EMP-005|
|3|2|EMP-005|
|2|2|EMP-006|
|2|2|EMP-007|
|3\.5|2|EMP-008|
|0\.7|2|EMP-009|
|0\.7|2|EMP-009|
|0\.7|2|EMP-009|
|0\.7|2|EMP-009|



|0\.7|2|EMP-009|
| -: | -: | - |
|1\.8|2|EMP-010|
|1\.8|2|EMP-010|
|3\.5|2|EMP-011|
|1|2|EMP-012|
|1|2|EMP-012|
|3\.5|2|EMP-013|
|2|2|EMP-014|
|2|2|EMP-015|
|2|6|EMP-016|
|1\.8|2|ESS-001|
|1\.8|2|ESS-001|
|1\.8|2|ESS-002|
|1\.8|2|ESS-002|
|3\.5|2|ESS-003|
|3\.5|2|ESS-004|
|1\.8|3|ESS-005|
|1\.8|3|ESS-005|
|2|2|ESS-006|
|3\.5|6|ESS-007|
|1\.8|2|DOC-001|
|1\.8|2|DOC-001|
|3\.5|2|DOC-002|
|2|2|DOC-003|



|0\.7|2|DOC-004|
| -: | -: | - |
|0\.7|2|DOC-004|
|0\.7|2|DOC-004|
|0\.9|2|DOC-005|
|0\.9|2|DOC-005|
|0\.9|2|DOC-005|
|0\.9|2|DOC-005|
|2|2|DOC-006|
|0\.9|2|DOC-007|
|0\.9|2|DOC-007|
|0\.9|2|DOC-007|
|0\.9|2|DOC-007|
|2|5|DOC-008|
|2|5|DOC-008|
|2|5|DOC-008|
|1\.8|8|DOC-009|
|1\.8|8|DOC-009|
|1|6|DOC-010|
|1|6|DOC-010|
|0\.9|5|REC-001|



|0\.9|5|REC-001|
| -: | -: | - |
|0\.9|5|REC-001|
|0\.9|5|REC-001|
|0\.7|5|REC-002|
|0\.7|5|REC-002|
|0\.7|5|REC-002|
|0\.7|5|REC-002|
|0\.7|5|REC-002|
|1\.2|5|REC-003|
|1\.2|5|REC-003|
|1\.2|5|REC-003|
|6|8|REC-004|
|1|5|REC-005|
|1|5|REC-005|
|0\.9|5|REC-006|
|0\.9|5|REC-006|
|0\.9|5|REC-006|
|0\.9|5|REC-006|
|3|5|REC-007|
|3|5|REC-007|



|3\.5|8|REC-008|
| -: | -: | - |
|2|5|REC-009|
|2|5|REC-010|
|2|5|REC-010|
|2|5|REC-010|
|1\.8|5|REC-011|
|1\.8|5|REC-011|
|1\.5|5|REC-012|
|1\.5|5|REC-012|
|1\.5|5|REC-012|
|1\.5|5|REC-012|
|0\.7|5|REC-013|
|0\.7|5|REC-013|
|0\.7|5|REC-013|
|3\.5|5|REC-014|
|3\.5|6|REC-015|
|1\.2|5|ONB-001|
|1\.2|5|ONB-001|
|1\.2|5|ONB-001|
|2|5|ONB-002|
|2|5|ONB-002|



|2|5|ONB-002|
| -: | -: | - |
|2|5|ONB-003|
|2|5|ONB-003|
|2|5|ONB-003|
|2|5|ONB-004|
|1|5|ONB-005|
|1|5|ONB-005|
|1|6|ONB-006|
|1|6|ONB-006|
|1\.8|5|OFB-001|
|1\.8|5|OFB-001|
|1\.8|5|OFB-002|
|1\.8|5|OFB-002|
|2|5|OFB-003|
|1\.8|5|OFB-004|
|1\.8|5|OFB-004|
|1|5|OFB-005|
|1|5|OFB-005|
|2|5|OFB-006|
|2|5|OFB-007|
|2|5|OFB-008|



|3|3|ATT-001|
| -: | -: | - |
|3|3|ATT-001|
|3\.5|7|ATT-002|
|3\.5|7|ATT-003|
|2|3|ATT-004|
|2|6|ATT-005|
|2|6|ATT-005|
|2|6|ATT-005|
|2|6|ATT-005|
|2|6|ATT-005|
|3\.5|8|ATT-006|
|3\.5|7|ATT-007|
|10|3|ATT-008|
|3\.5|3|ATT-009|
|1\.5|3|ATT-010|
|1\.5|3|ATT-010|
|1\.5|3|ATT-010|
|1\.5|3|ATT-010|
|3\.5|3|ATT-011|
|1\.2|3|ATT-012|
|1\.2|3|ATT-012|
|1\.2|3|ATT-012|
|2|3|ATT-013|



|2|3|ATT-013|
| -: | -: | - |
|2|3|ATT-013|
|1\.8|3|ATT-014|
|1\.8|3|ATT-014|
|1\.8|3|ATT-015|
|1\.8|3|ATT-015|
|1\.2|3|ATT-016|
|1\.2|3|ATT-016|
|1\.2|3|ATT-016|
|1\.2|8|ATT-017|
|1\.2|8|ATT-017|
|1\.2|8|ATT-017|
|3\.5|3|ATT-018|
|1\.2|3|SFT-001|
|1\.2|3|SFT-001|
|1\.2|3|SFT-001|
|1|3|SFT-002|
|1|3|SFT-002|
|2|3|SFT-003|
|2|3|SFT-003|
|2|3|SFT-003|



|1\.8|3|SFT-004|
| -: | -: | - |
|1\.8|3|SFT-004|
|2|6|SFT-005|
|0\.7|3|LV-001|
|0\.7|3|LV-001|
|0\.7|3|LV-001|
|2\.5|3|LV-002|
|2\.5|3|LV-002|
|2\.5|3|LV-002|
|2\.5|3|LV-002|
|0\.9|3|LV-003|
|0\.9|3|LV-003|
|0\.9|3|LV-003|
|0\.9|3|LV-003|
|2|3|LV-004|
|2|3|LV-004|
|2|3|LV-004|
|2|3|LV-005|
|2|3|LV-005|
|2|3|LV-005|
|3\.5|3|LV-006|
|3\.5|3|LV-007|
|2|3|LV-008|
|3\.5|3|LV-009|



|1\.8|3|LV-010|
| -: | -: | - |
|1\.8|3|LV-010|
|1\.8|3|LV-011|
|1\.8|3|LV-011|
|2|3|LV-012|
|3\.5|3|LV-013|
|3\.5|3|LV-014|
|2|3|LV-015|
|2|4|PAY-001|
|2|4|PAY-001|
|2|4|PAY-001|
|10|4|PAY-002|
|1\.2|4|PAY-003|
|1\.2|4|PAY-003|
|1\.2|4|PAY-003|
|3|4|PAY-004|
|3|4|PAY-004|
|3\.5|6|PAY-005|
|0\.7|4|PAY-006|
|0\.7|4|PAY-006|
|0\.7|4|PAY-006|
|1\.8|4|PAY-007|
|1\.8|4|PAY-007|



|2\.5|4|PAY-008|
| -: | -: | - |
|2\.5|4|PAY-008|
|2\.5|4|PAY-008|
|2\.5|4|PAY-008|
|3\.5|4|PAY-009|
|0\.9|4|PAY-010|
|0\.9|4|PAY-010|
|0\.9|4|PAY-010|
|0\.9|4|PAY-010|
|1\.8|4|PAY-011|
|1\.8|4|PAY-011|
|1\.2|4|PAY-012|
|1\.2|4|PAY-012|
|1\.2|4|PAY-012|
|3\.5|4|PAY-013|
|0\.9|6|PAY-014|
|0\.9|6|PAY-014|
|0\.9|6|PAY-014|
|0\.9|6|PAY-014|
|2|5|PAY-015|
|2|5|PAY-015|
|2|5|PAY-015|
|2|4|PAY-016|
|2|4|PAY-016|



|2|4|PAY-016|
| -: | -: | - |
|3\.5|4|PAY-017|
|3\.5|4|PAY-018|
|1\.8|4|PAY-019|
|1\.8|4|PAY-019|
|2|4|STA-001|
|2|4|STA-001|
|2|4|STA-001|
|3|4|STA-002|
|3|4|STA-002|
|3\.5|4|STA-003|
|1\.8|4|STA-004|
|1\.8|4|STA-004|
|2|4|STA-005|
|2|4|STA-006|
|2|4|STA-006|
|2|4|STA-006|
|1\.8|4|STA-007|
|1\.8|4|STA-007|
|10|4|STA-008|
|2|4|STA-009|
|2|4|STA-009|



|2|4|STA-009|
| -: | -: | - |
|3\.5|4|STA-010|
|2|4|STA-011|
|1\.5|6|PRF-001|
|1\.5|6|PRF-001|
|1\.5|6|PRF-001|
|1\.5|6|PRF-001|
|1\.5|6|PRF-002|
|1\.5|6|PRF-002|
|1\.5|6|PRF-002|
|1\.5|6|PRF-002|
|1\.8|6|PRF-003|
|1\.8|6|PRF-003|
|1\.8|6|PRF-004|
|1\.8|6|PRF-004|
|1\.5|6|PRF-005|
|1\.5|6|PRF-005|
|1\.5|6|PRF-005|
|1\.5|6|PRF-005|
|1\.8|6|PRF-006|
|1\.8|6|PRF-006|
|3|6|PRF-007|
|3|6|PRF-007|



|1|6|PRF-008|
| -: | -: | - |
|1|6|PRF-008|
|1\.8|6|PRF-009|
|1\.8|6|PRF-009|
|1\.8|6|PRF-010|
|1\.8|6|PRF-010|
|1|6|PRF-011|
|1|6|PRF-011|
|2|8|LMS-001|
|2|8|LMS-001|
|2|8|LMS-001|
|1\.8|8|LMS-002|
|1\.8|8|LMS-002|
|1\.8|8|LMS-003|
|1\.8|8|LMS-003|
|1\.8|8|LMS-004|
|1\.8|8|LMS-004|
|1\.2|8|LMS-005|
|1\.2|8|LMS-005|
|1\.2|8|LMS-005|
|1\.8|8|LMS-006|



|1\.8|8|LMS-006|
| -: | -: | - |
|1|8|LMS-007|
|1|8|LMS-007|
|1|6|AST-001|
|1|6|AST-001|
|1\.2|6|AST-002|
|1\.2|6|AST-002|
|1\.2|6|AST-002|
|1|6|AST-003|
|1|6|AST-003|
|1\.8|6|AST-004|
|1\.8|6|AST-004|
|1\.2|6|AST-005|
|1\.2|6|AST-005|
|1\.2|6|AST-005|
|2|6|AST-006|
|1\.2|8|HLP-001|
|1\.2|8|HLP-001|
|1\.2|8|HLP-001|
|0\.9|8|HLP-002|
|0\.9|8|HLP-002|
|0\.9|8|HLP-002|



|0\.9|8|HLP-002|
| -: | -: | - |
|2|8|HLP-003|
|2|8|HLP-003|
|2|8|HLP-003|
|3\.5|8|HLP-004|
|1\.8|8|HLP-005|
|1\.8|8|HLP-005|
|1|8|HLP-006|
|1|8|HLP-006|
|1\.8|6|EXP-001|
|1\.8|6|EXP-001|
|1\.5|6|EXP-002|
|1\.5|6|EXP-002|
|1\.5|6|EXP-002|
|1\.5|6|EXP-002|
|3\.5|6|EXP-003|
|1\.8|6|EXP-004|
|1\.8|6|EXP-004|
|1\.8|6|EXP-005|
|1\.8|6|EXP-005|
|2|6|EXP-006|
|1|8|TRV-001|



|1|8|TRV-001|
| -: | -: | - |
|1\.2|8|TRV-002|
|1\.2|8|TRV-002|
|1\.2|8|TRV-002|
|2|8|TRV-003|
|2|8|TRV-004|
|0\.9|6|ENG-001|
|0\.9|6|ENG-001|
|0\.9|6|ENG-001|
|0\.9|6|ENG-001|
|1|6|ENG-002|
|1|6|ENG-002|
|1\.2|6|ENG-003|
|1\.2|6|ENG-003|
|1\.2|6|ENG-003|
|1\.2|6|ENG-003|
|1\.2|6|ENG-003|
|1\.8|6|ENG-004|
|1\.8|6|ENG-004|
|1|6|ENG-005|
|1|6|ENG-005|
|6|2|RPT-001|
|2|2|RPT-002|



|2|2|RPT-002|
| -: | -: | - |
|2|2|RPT-002|
|1\.2|2|RPT-003|
|1\.2|2|RPT-003|
|1\.2|2|RPT-003|
|1|6|RPT-004|
|1|6|RPT-004|
|1\.8|2|RPT-005|
|1\.8|2|RPT-005|
|5|8|RPT-006|
|5|8|RPT-006|
|6|8|RPT-007|
|6|1|AUD-001|
|1\.8|2|AUD-002|
|1\.8|2|AUD-002|
|2|6|AUD-003|
|2|2|AUD-004|
|0\.9|7|AUD-005|
|0\.9|7|AUD-005|
|0\.9|7|AUD-005|
|0\.9|7|AUD-005|
|1\.2|7|AUD-006|
|1\.2|7|AUD-006|
|1\.2|7|AUD-006|
|2|1|AUD-007|



|1\.8|8|AUD-008|
| -: | -: | - |
|1\.8|8|AUD-008|
|6|1|NTF-001|
|1\.8|1|NTF-002|
|1\.8|1|NTF-002|
|3\.5|1|NTF-003|
|1\.8|1|NTF-004|
|1\.8|1|NTF-004|
|1|6|NTF-005|
|1|6|NTF-005|
|3\.5|7|NTF-006|
|1\.8|7|NTF-007|
|1\.8|7|NTF-007|
|2|6|NTF-008|
|2\.5|1|WF-001|
|2\.5|1|WF-001|
|2\.5|1|WF-001|
|2\.5|1|WF-001|
|10|1|WF-002|
|1\.5|1|WF-003|
|1\.5|1|WF-003|
|1\.5|1|WF-003|
|1\.5|1|WF-003|
|3\.5|1|WF-004|
|3\.5|6|WF-005|



|0\.7|6|WF-006|
| -: | -: | - |
|0\.7|6|WF-006|
|0\.7|6|WF-006|
|3\.5|6|WF-007|
|6|6|WF-008|
|0\.9|6|INT-001|
|0\.9|6|INT-001|
|0\.9|6|INT-001|
|0\.9|6|INT-001|
|1\.2|8|INT-002|
|1\.2|8|INT-002|
|1\.2|8|INT-002|
|1\.8|5|INT-003|
|1\.8|5|INT-003|
|1\.8|6|INT-004|
|1\.8|6|INT-004|
|1\.8|8|INT-005|
|1\.8|8|INT-005|
|2|6|INT-006|
|3|7|MOB-001|
|3|7|MOB-001|
|10|7|MOB-002|
|3\.5|7|MOB-003|



|3\.5|7|MOB-004|
| -: | -: | - |
|3\.5|7|MOB-005|
|10|1|SEC-001|
|6|2|SEC-002|
|3\.5|1|SEC-003|
|2|1|SEC-004|
|3\.5|1|SEC-005|
|2|1|SEC-006|
|3\.5|7|SEC-007|
|2|2|IMP-001|
|2|2|IMP-001|
|2|2|IMP-001|
|2|2|IMP-001|
|2|2|IMP-001|
|3\.5|2|IMP-002|
|6|4|IMP-003|
|3|8|FIN-001|
|3|8|FIN-001|
|1\.2|8|FIN-002|
|1\.2|8|FIN-002|
|1\.2|8|FIN-002|
|2|8|FIN-003|
|2|8|FIN-003|
|2|8|FIN-003|
|2|8|FIN-003|
|2|8|FIN-003|
|1\.5|8|FIN-004|



|1\.5|8|FIN-004|
| -: | -: | - |
|1\.5|8|FIN-004|
|1\.5|8|FIN-004|
|6|8|AI-001|
|3\.5|8|AI-002|
|3\.5|8|AI-003|
|5|1|Foundation|
|5|1|Foundation|
|5|1|Foundation|
|5|1|Foundation|
|5|1|Foundation|
|5|1|Foundation|
|5|1|Foundation|
|5|1|Foundation|
|5|1|Foundation|
|5|1|Foundation|


|**Sheet 6 - Database Tasks**|||
| - | :- | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*|||
||||
|**Task ID**|**Table**||
|DB-001|tenants||
|DB-002|tenant\_settings||
|DB-003|feature\_flags||
|DB-004|plans||
|DB-005|plan\_versions||
|DB-006|subscriptions||
|DB-007|entitlements||
|DB-008|invoices||
|DB-009|invoice\_lines||
|DB-010|payments||
|DB-011|payment\_allocations||
|DB-012|tenant\_exports||
|DB-013|users||
|DB-014|memberships||
|DB-015|invitations||
|DB-016|user\_sessions||
|DB-017|mfa\_factors||
|DB-018|password\_reset\_tokens||
|DB-019|email\_verification\_tokens||
|DB-020|login\_attempts||
|DB-021|permissions||
|DB-022|roles||
|DB-023|role\_permissions||
|DB-024|role\_grants||



|DB-025|role\_grant\_scopes|
| - | - |
|DB-026|platform\_role\_grants|
|DB-027|break\_glass\_sessions|
|DB-028|sso\_connections|
|DB-029|api\_keys|
|DB-030|legal\_entities|
|DB-031|statutory\_registrations|
|DB-032|branches|
|DB-033|locations|
|DB-034|departments|
|DB-035|designations|
|DB-036|grades|
|DB-037|cost\_centers|
|DB-038|employment\_types|
|DB-039|employees|
|DB-040|employment\_assignments|
|DB-041|assignment\_cost\_splits|
|DB-042|employee\_events|
|DB-043|employee\_contacts|
|DB-044|employee\_education|
|DB-045|employee\_experience|
|DB-046|employee\_bank\_accounts|
|DB-047|employee\_statutory\_ids|
|DB-048|profile\_change\_requests|



|DB-049|privacy\_acknowledgements|
| - | - |
|DB-050|files|
|DB-051|document\_types|
|DB-052|documents|
|DB-053|document\_versions|
|DB-054|policies|
|DB-055|policy\_acknowledgements|
|DB-056|letter\_templates|
|DB-057|requisitions|
|DB-058|jobs|
|DB-059|pipeline\_templates|
|DB-060|candidates|
|DB-061|applications|
|DB-062|application\_stage\_history|
|DB-063|interviews|
|DB-064|interview\_feedback|
|DB-065|offers|
|DB-066|referrals|
|DB-067|onboarding\_templates|
|DB-068|onboarding\_cases|
|DB-069|onboarding\_tasks|
|DB-070|prejoin\_tokens|
|DB-071|exit\_cases|
|DB-072|clearance\_tasks|
|DB-073|exit\_interviews|
|DB-074|shift\_templates|
|DB-075|weekly\_off\_patterns|



|DB-076|roster\_entries|
| - | - |
|DB-077|shift\_swaps|
|DB-078|attendance\_policies|
|DB-079|attendance\_policy\_versions|
|DB-080|biometric\_devices|
|DB-081|device\_user\_maps|
|DB-082|punches|
|DB-083|attendance\_days|
|DB-084|attendance\_regularizations|
|DB-085|on\_duty\_requests|
|DB-086|overtime\_entries|
|DB-087|attendance\_periods|
|DB-088|timesheets|
|DB-089|leave\_types|
|DB-090|leave\_policies|
|DB-091|leave\_policy\_versions|
|DB-092|holiday\_calendars|
|DB-093|holidays|
|DB-094|leave\_requests|
|DB-095|leave\_ledger\_entries|
|DB-096|leave\_balances|
|DB-097|comp\_off\_credits|
|DB-098|salary\_components|
|DB-099|salary\_structures|



|DB-100|salary\_structure\_components|
| - | - |
|DB-101|employee\_compensations|
|DB-102|compensation\_components|
|DB-103|payroll\_calendars|
|DB-104|payroll\_periods|
|DB-105|payroll\_inputs|
|DB-106|payroll\_runs|
|DB-107|payroll\_run\_employees|
|DB-108|payroll\_line\_items|
|DB-109|payslips|
|DB-110|payroll\_payments|
|DB-111|loans|
|DB-112|loan\_installments|
|DB-113|fnf\_settlements|
|DB-114|fnf\_items|
|DB-115|payroll\_exchange\_batches|
|DB-116|reconciliation\_items|
|DB-117|statutory\_rule\_sets|
|DB-118|statutory\_rule\_parameters|
|DB-119|tax\_regime\_choices|
|DB-120|tax\_declarations|
|DB-121|declaration\_items|
|DB-122|declaration\_proofs|
|DB-123|statutory\_filings|
|DB-124|performance\_cycles|



|DB-125|goals|
| - | - |
|DB-126|kpis|
|DB-127|one\_on\_ones|
|DB-128|reviews|
|DB-129|feedback\_requests|
|DB-130|calibration\_changes|
|DB-131|pips|
|DB-132|courses|
|DB-133|course\_assignments|
|DB-134|training\_sessions|
|DB-135|assessment\_attempts|
|DB-136|certifications|
|DB-137|asset\_categories|
|DB-138|asset\_items|
|DB-139|asset\_allocations|
|DB-140|asset\_requests|
|DB-141|ticket\_categories|
|DB-142|tickets|
|DB-143|ticket\_comments|
|DB-144|kb\_articles|
|DB-145|expense\_policies|
|DB-146|expense\_categories|
|DB-147|expense\_claims|
|DB-148|expense\_lines|
|DB-149|expense\_advances|
|DB-150|payout\_batches|



|DB-151|travel\_requests|
| - | - |
|DB-152|trip\_legs|
|DB-153|travel\_bookings|
|DB-154|announcements|
|DB-155|surveys|
|DB-156|survey\_responses|
|DB-157|recognitions|
|DB-158|report\_definitions|
|DB-159|saved\_views|
|DB-160|scheduled\_reports|
|DB-161|export\_jobs|
|DB-162|audit\_events|
|DB-163|data\_access\_logs|
|DB-164|retention\_policies|
|DB-165|legal\_holds|
|DB-166|privacy\_requests|
|DB-167|posh\_cases|
|DB-168|outbox\_events|
|DB-169|notification\_templates|
|DB-170|notification\_preferences|
|DB-171|notifications|
|DB-172|notification\_deliveries|
|DB-173|device\_tokens|
|DB-174|workflow\_definitions|
|DB-175|workflow\_versions|
|DB-176|approval\_instances|
|DB-177|approval\_tasks|



|DB-178|delegations|
| - | - |
|DB-179|webhooks|
|DB-180|webhook\_deliveries|
|DB-181|integration\_connections|
|DB-182|import\_batches|
|DB-183|import\_rows|
|DB-184|idempotency\_records|
|DB-185|job\_runs|
|DB-186|accounting\_books|
|DB-187|accounts|
|DB-188|fiscal\_periods|
|DB-189|journals|
|DB-190|journal\_lines|
|DB-191|ai\_interactions|
|DB-192|(platform)|
|DB-193|(platform)|
|DB-194|(platform)|
|DB-195|(platform)|
|DB-196|(platform)|
|DB-197|(platform)|



||
| - |
||
||
|**Description**|
|Create tenants (master): Customer boundary and lifecycle status. PK id; FKs -; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create tenant\_settings (configuration): Locale, timezone, week start, setup status, security policy, branding. PK tenant\_id; FKs tenant\_id->tenants; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create feature\_flags (configuration): Global and per-tenant flags. PK id; FKs tenant\_id (nullable); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create plans (master): Commercial plans (platform). PK id; FKs -; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create plan\_versions (master): Versioned plan price, modules, limits. PK id; FKs plan\_id->plans; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create subscriptions (transaction): Tenant commercial state (SoT). PK id; FKs tenant\_id UNIQUE; plan\_version\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create entitlements (configuration): Effective module/limit entitlements per tenant. PK id; FKs tenant\_id; subscription\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create invoices (transaction): SaaS invoices (immutable numbering). PK id; FKs tenant\_id; subscription\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create invoice\_lines (transaction): Invoice lines. PK id; FKs (tenant\_id, invoice\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create payments (transaction): Customer payments. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create payment\_allocations (transaction): Payment-to-invoice allocations. PK id; FKs (tenant\_id, payment\_id); (tenant\_id, invoice\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create tenant\_exports (transaction): Tenant full data export jobs. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create users (master): Global login identity. PK id; FKs -; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create memberships (master): User access to a tenant. PK id; FKs tenant\_id; user\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create invitations (transaction): Hashed single-use invitations with role. PK id; FKs tenant\_id; (tenant\_id, invited\_by\_membership\_id); role\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create user\_sessions (audit): Refresh token families. PK id; FKs user\_id; membership\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create mfa\_factors (master): TOTP secrets (encrypted), passkeys, recovery codes (hashed). PK id; FKs user\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create password\_reset\_tokens (transaction): Hashed reset tokens. PK id; FKs user\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create email\_verification\_tokens (transaction): Hashed verification tokens. PK id; FKs user\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create login\_attempts (audit): Login telemetry for lockout. PK id; FKs user\_id (nullable); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create permissions (master): Global permission catalog. PK id; FKs -; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create roles (master): System templates (tenant\_id NULL) and custom roles. PK id; FKs tenant\_id (nullable); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create role\_permissions (configuration): Role to permission mapping. PK (role\_id, permission\_id); FKs role\_id; permission\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create role\_grants (transaction): Role granted to membership with scope and validity. PK id; FKs (tenant\_id, membership\_id); role\_id; (tenant\_id, granted\_by); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|



|Create role\_grant\_scopes (configuration): Scope targets for a grant (department/location/entity IDs). PK id; FKs (tenant\_id, role\_grant\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
| - |
|Create platform\_role\_grants (transaction): Platform roles for platform users. PK id; FKs user\_id; role\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create break\_glass\_sessions (audit): Emergency platform access to a tenant. PK id; FKs tenant\_id; requested\_by; approved\_by; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create sso\_connections (configuration): SAML/OIDC config per tenant. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create api\_keys (configuration): Hashed scoped API keys. PK id; FKs tenant\_id; created\_by; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create legal\_entities (master): Employer companies with statutory IDs (encrypted). PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create statutory\_registrations (master): Entity registrations per scheme/state. PK id; FKs (tenant\_id, legal\_entity\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create branches (master): Grouping of locations. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create locations (master): Work sites with address, state, timezone, geofence. PK id; FKs (tenant\_id, legal\_entity\_id); (tenant\_id, branch\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create departments (master): Department tree with head. PK id; FKs tenant\_id; (tenant\_id, parent\_department\_id); (tenant\_id, head\_employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create designations (master): Job titles. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create grades (master): Grade/band ladder with optional pay range. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create cost\_centers (master): Cost allocation units. PK id; FKs tenant\_id; (tenant\_id, owner\_employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create employment\_types (master): FT, PT, contract, intern, consultant. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create employees (master): Person employed by tenant. PK id; FKs tenant\_id; (tenant\_id, membership\_id) UNIQUE; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create employment\_assignments (transaction): Effective-dated job assignment. PK id; FKs (tenant\_id, employee\_id); (tenant\_id, legal\_entity\_id); (tenant\_id, location\_id); (tenant\_id, department\_id); (tenant\_id, designation\_id); (tenant\_id, grade\_id); (tenant\_id, employment\_type\_id); (tenant\_id, manager\_employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create assignment\_cost\_splits (transaction): Cost center % per assignment. PK id; FKs (tenant\_id, assignment\_id); (tenant\_id, cost\_center\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create employee\_events (transaction): Lifecycle event log. PK id; FKs (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create employee\_contacts (transaction): Addresses, emergency contacts, family. PK id; FKs (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create employee\_education (transaction): Education history. PK id; FKs (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create employee\_experience (transaction): Previous employment. PK id; FKs (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create employee\_bank\_accounts (transaction): Encrypted bank accounts. PK id; FKs (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create employee\_statutory\_ids (transaction): PAN, Aadhaar ref (last4+token), UAN, ESIC, passport (encrypted). PK id; FKs (tenant\_id, employee\_id) UNIQUE; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create profile\_change\_requests (transaction): Requested changes to restricted fields. PK id; FKs (tenant\_id, employee\_id); approval\_instance\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|



|Create privacy\_acknowledgements (audit): Privacy notice acknowledgements. PK id; FKs (tenant\_id, membership\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
| - |
|Create files (transaction): S3 object metadata and scan status. PK id; FKs tenant\_id; uploaded\_by; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create document\_types (configuration): Type rules: mandatory, expiry, visibility, retention. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create documents (transaction): Business document (polymorphic owner). PK id; FKs tenant\_id; document\_type\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create document\_versions (transaction): Versions pointing to files. PK id; FKs (tenant\_id, document\_id); (tenant\_id, file\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create policies (transaction): Published company policies. PK id; FKs tenant\_id; document\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create policy\_acknowledgements (audit): Who acknowledged which version. PK id; FKs (tenant\_id, policy\_id); (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create letter\_templates (configuration): Merge-field letter templates. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create requisitions (transaction): Manpower requisitions. PK id; FKs tenant\_id; (tenant\_id, department\_id); approval\_instance\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create jobs (transaction): Job openings. PK id; FKs (tenant\_id, requisition\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create pipeline\_templates (configuration): Stage templates. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create candidates (master): Candidate profiles with consent. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create applications (transaction): Candidate x job with stage. PK id; FKs (tenant\_id, candidate\_id); (tenant\_id, job\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create application\_stage\_history (audit): Stage moves with actor and reason. PK id; FKs (tenant\_id, application\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create interviews (transaction): Interview rounds and panel. PK id; FKs (tenant\_id, application\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create interview\_feedback (transaction): Scorecards. PK id; FKs (tenant\_id, interview\_id); (tenant\_id, interviewer\_membership\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create offers (transaction): Offers with CTC and approval. PK id; FKs (tenant\_id, application\_id); approval\_instance\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create referrals (transaction): Employee referrals. PK id; FKs (tenant\_id, referrer\_employee\_id); (tenant\_id, candidate\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create onboarding\_templates (configuration): Task templates. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create onboarding\_cases (transaction): Onboarding per joiner. PK id; FKs (tenant\_id, employee\_id); template\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create onboarding\_tasks (transaction): Tasks with owners and due dates. PK id; FKs (tenant\_id, case\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create prejoin\_tokens (transaction): Hashed portal tokens. PK id; FKs (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create exit\_cases (transaction): Resignation/termination cases. PK id; FKs (tenant\_id, employee\_id); approval\_instance\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create clearance\_tasks (transaction): Department clearances. PK id; FKs (tenant\_id, exit\_case\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create exit\_interviews (transaction): Exit questionnaire responses. PK id; FKs (tenant\_id, exit\_case\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create shift\_templates (configuration): Shift definitions. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create weekly\_off\_patterns (configuration): Work-week patterns. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|



|Create roster\_entries (transaction): Shift per employee per date. PK id; FKs (tenant\_id, employee\_id); (tenant\_id, shift\_template\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
| - |
|Create shift\_swaps (transaction): Swap requests. PK id; FKs tenant\_id; approval\_instance\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create attendance\_policies (configuration): Policy header. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create attendance\_policy\_versions (configuration): Versioned rules (JSON-Schema) with approver. PK id; FKs (tenant\_id, attendance\_policy\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create biometric\_devices (configuration): Registered devices. PK id; FKs (tenant\_id, location\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create device\_user\_maps (configuration): Device user ID to employee. PK id; FKs (tenant\_id, device\_id); (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create punches (transaction): Raw time events (partitioned monthly). PK id; FKs (tenant\_id, employee\_id); (tenant\_id, attendance\_day\_id); device\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create attendance\_days (transaction): Daily summary, status, minutes, pinned policy version. PK id; FKs (tenant\_id, employee\_id); policy\_version\_id; shift\_template\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create attendance\_regularizations (transaction): Correction requests. PK id; FKs (tenant\_id, attendance\_day\_id); approval\_instance\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create on\_duty\_requests (transaction): On-duty/WFH requests. PK id; FKs (tenant\_id, employee\_id); approval\_instance\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create overtime\_entries (transaction): OT minutes and decision. PK id; FKs (tenant\_id, attendance\_day\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create attendance\_periods (transaction): Period lock per entity. PK id; FKs (tenant\_id, legal\_entity\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create timesheets (transaction): Contractor timesheets. PK id; FKs (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create leave\_types (master): Leave types. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create leave\_policies (configuration): Policy header per type. PK id; FKs (tenant\_id, leave\_type\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create leave\_policy\_versions (configuration): Versioned leave rules. PK id; FKs (tenant\_id, leave\_policy\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create holiday\_calendars (configuration): Calendar per entity/location/year. PK id; FKs (tenant\_id, legal\_entity\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create holidays (configuration): Holiday dates (mandatory/restricted). PK id; FKs (tenant\_id, holiday\_calendar\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create leave\_requests (transaction): Applications. PK id; FKs (tenant\_id, employee\_id); (tenant\_id, leave\_type\_id); policy\_version\_id; approval\_instance\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create leave\_ledger\_entries (transaction): Append-only balance movements. PK id; FKs (tenant\_id, employee\_id); (tenant\_id, leave\_type\_id); (tenant\_id, leave\_request\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create leave\_balances (transaction): Locked balance projection. PK id; FKs (tenant\_id, employee\_id); (tenant\_id, leave\_type\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create comp\_off\_credits (transaction): Comp-off credits and expiry. PK id; FKs (tenant\_id, employee\_id); overtime\_entry\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create salary\_components (master): Pay components. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create salary\_structures (configuration): CTC templates. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|



|Create salary\_structure\_components (configuration): Component formula per structure. PK id; FKs (tenant\_id, structure\_id); (tenant\_id, component\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
| - |
|Create employee\_compensations (transaction): Effective-dated CTC. PK id; FKs (tenant\_id, employee\_id); structure\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create compensation\_components (transaction): Per-component amounts. PK id; FKs (tenant\_id, compensation\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create payroll\_calendars (configuration): Frequency, cut-off, pay date per entity. PK id; FKs (tenant\_id, legal\_entity\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create payroll\_periods (transaction): Pay periods. PK id; FKs (tenant\_id, payroll\_calendar\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create payroll\_inputs (transaction): Variable/one-time inputs. PK id; FKs (tenant\_id, payroll\_period\_id); (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create payroll\_runs (transaction): Run header and status (locked immutable). PK id; FKs (tenant\_id, payroll\_period\_id); (tenant\_id, legal\_entity\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create payroll\_run\_employees (transaction): Per-employee result and snapshot. PK id; FKs (tenant\_id, payroll\_run\_id); (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create payroll\_line\_items (transaction): Component lines with inputs and explanation. PK id; FKs (tenant\_id, run\_employee\_id); component\_id; rule\_set\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create payslips (transaction): Published payslip PDFs. PK id; FKs (tenant\_id, run\_employee\_id); file\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create payroll\_payments (transaction): Bank files and confirmations. PK id; FKs (tenant\_id, payroll\_run\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create loans (transaction): Loans and advances. PK id; FKs (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create loan\_installments (transaction): EMI schedule. PK id; FKs (tenant\_id, loan\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create fnf\_settlements (transaction): Full-and-final statement. PK id; FKs (tenant\_id, exit\_case\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create fnf\_items (transaction): F&F items with source. PK id; FKs (tenant\_id, fnf\_settlement\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create payroll\_exchange\_batches (transaction): Export/import batches with mapping version. PK id; FKs (tenant\_id, payroll\_period\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create reconciliation\_items (transaction): Variance items. PK id; FKs (tenant\_id, batch\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create statutory\_rule\_sets (master): Versioned statutory rules (platform-published). PK id; FKs -; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create statutory\_rule\_parameters (master): Rates, caps, slabs per rule version. PK id; FKs rule\_set\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create tax\_regime\_choices (transaction): Regime per employee per FY. PK id; FKs (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create tax\_declarations (transaction): Investment declarations per FY. PK id; FKs (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create declaration\_items (transaction): Section-wise amounts. PK id; FKs (tenant\_id, declaration\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create declaration\_proofs (transaction): Proof documents and decisions. PK id; FKs (tenant\_id, item\_id); document\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create statutory\_filings (transaction): Generated ECR/ESI/PT/24Q/Form 16 files. PK id; FKs (tenant\_id, legal\_entity\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create performance\_cycles (transaction): Cycles and phases. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|



|Create goals (transaction): Goals/OKRs with parent. PK id; FKs (tenant\_id, employee\_id); (tenant\_id, cycle\_id); parent\_goal\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
| - |
|Create kpis (master): KPI library. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create one\_on\_ones (transaction): Check-in notes. PK id; FKs (tenant\_id, employee\_id); (tenant\_id, manager\_employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create reviews (transaction): Self/manager/skip reviews. PK id; FKs (tenant\_id, cycle\_id); (tenant\_id, employee\_id); reviewer; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create feedback\_requests (transaction): Peer/360 requests and responses. PK id; FKs (tenant\_id, cycle\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create calibration\_changes (audit): Rating changes with reason. PK id; FKs (tenant\_id, review\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create pips (transaction): Improvement plans. PK id; FKs (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create courses (master): Course catalog. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create course\_assignments (transaction): Learner assignments and progress. PK id; FKs (tenant\_id, course\_id); (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create training\_sessions (transaction): Classroom sessions and attendance. PK id; FKs (tenant\_id, course\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create assessment\_attempts (transaction): Quiz attempts. PK id; FKs (tenant\_id, assignment\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create certifications (transaction): Certificates with expiry. PK id; FKs (tenant\_id, employee\_id); document\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create asset\_categories (master): Asset categories. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create asset\_items (master): Inventory items. PK id; FKs (tenant\_id, category\_id); (tenant\_id, location\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create asset\_allocations (transaction): Custody records (one open per item). PK id; FKs (tenant\_id, asset\_item\_id); (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create asset\_requests (transaction): Asset requests. PK id; FKs (tenant\_id, employee\_id); approval\_instance\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create ticket\_categories (configuration): Categories, groups, SLA, confidentiality. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create tickets (transaction): Helpdesk tickets with SLA timestamps. PK id; FKs (tenant\_id, category\_id); requester; assignee; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create ticket\_comments (transaction): Thread and internal notes. PK id; FKs (tenant\_id, ticket\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create kb\_articles (master): Knowledge base. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create expense\_policies (configuration): Limits by category/grade/location. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create expense\_categories (master): Expense categories. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create expense\_claims (transaction): Claims. PK id; FKs (tenant\_id, employee\_id); approval\_instance\_id; trip\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create expense\_lines (transaction): Claim lines with receipts. PK id; FKs (tenant\_id, claim\_id); category\_id; document\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create expense\_advances (transaction): Advances and settlement. PK id; FKs (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create payout\_batches (transaction): Reimbursement payouts. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|



|Create travel\_requests (transaction): Trips with policy check. PK id; FKs (tenant\_id, employee\_id); approval\_instance\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
| - |
|Create trip\_legs (transaction): Itinerary legs. PK id; FKs (tenant\_id, travel\_request\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create travel\_bookings (transaction): Booking confirmations. PK id; FKs (tenant\_id, travel\_request\_id); document\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create announcements (transaction): Targeted announcements. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create surveys (transaction): Survey definitions and anonymity mode. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create survey\_responses (transaction): Responses (no respondent FK when anonymous). PK id; FKs (tenant\_id, survey\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create recognitions (transaction): Kudos and badges. PK id; FKs tenant\_id; giver; receiver; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create report\_definitions (configuration): Report catalog and custom reports. PK id; FKs tenant\_id (nullable for system); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create saved\_views (configuration): Saved filters per user. PK id; FKs (tenant\_id, membership\_id); report\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create scheduled\_reports (configuration): Schedules. PK id; FKs (tenant\_id, report\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create export\_jobs (transaction): Export jobs with expiring artifacts. PK id; FKs tenant\_id; requested\_by; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create audit\_events (audit): Append-only audit (partitioned monthly). PK id; FKs tenant\_id (nullable); actor\_user\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create data\_access\_logs (audit): Restricted reveals/downloads. PK id; FKs tenant\_id; actor; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create retention\_policies (configuration): Retention per data class. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create legal\_holds (configuration): Holds overriding purge. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create privacy\_requests (transaction): DPDP requests. PK id; FKs tenant\_id; (tenant\_id, employee\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create posh\_cases (transaction): Confidential ICC cases. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create outbox\_events (audit): Transactional outbox (partitioned). PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create notification\_templates (configuration): Templates per event/channel. PK id; FKs tenant\_id (nullable); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create notification\_preferences (configuration): User channel preferences. PK id; FKs (tenant\_id, membership\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create notifications (transaction): In-app feed. PK id; FKs (tenant\_id, membership\_id); outbox\_event\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create notification\_deliveries (audit): Channel delivery attempts. PK id; FKs tenant\_id; outbox\_event\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create device\_tokens (configuration): Push device tokens. PK id; FKs (tenant\_id, membership\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create workflow\_definitions (configuration): Approval flow definitions. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create workflow\_versions (configuration): Immutable published versions. PK id; FKs (tenant\_id, definition\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create approval\_instances (transaction): Runtime instance pinned to version. PK id; FKs (tenant\_id, workflow\_version\_id); subject\_type/subject\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create approval\_tasks (transaction): Step tasks with assignee and decision. PK id; FKs (tenant\_id, instance\_id); (tenant\_id, assignee\_membership\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|



|Create delegations (configuration): Approval delegations. PK id; FKs (tenant\_id, delegator\_membership\_id); (tenant\_id, delegate\_membership\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
| - |
|Create webhooks (configuration): Webhook subscriptions (secret in Secrets Manager). PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create webhook\_deliveries (audit): Delivery attempts. PK id; FKs (tenant\_id, webhook\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create integration\_connections (configuration): Connector config and health. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create import\_batches (transaction): Import batches with idempotency key. PK id; FKs tenant\_id; created\_by; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create import\_rows (transaction): Staged rows with results. PK id; FKs (tenant\_id, batch\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create idempotency\_records (audit): API idempotency keys and responses. PK id; FKs tenant\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create job\_runs (audit): Scheduled job executions. PK id; FKs tenant\_id (nullable); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create accounting\_books (master): Books per legal entity. PK id; FKs (tenant\_id, legal\_entity\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create accounts (master): Chart of accounts. PK id; FKs (tenant\_id, book\_id); parent\_account\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create fiscal\_periods (configuration): Periods and close state. PK id; FKs (tenant\_id, book\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create journals (transaction): Journal entries (posted immutable). PK id; FKs (tenant\_id, book\_id); (tenant\_id, period\_id); reversal\_of\_id; tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create journal\_lines (transaction): Debit/credit lines. PK id; FKs (tenant\_id, journal\_id); (tenant\_id, account\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Create ai\_interactions (audit): Prompt/answer log with masking. PK id; FKs (tenant\_id, membership\_id); tenant RLS policy and indexes leading tenant\_id; migration + rollback; seed if master.|
|Extensions: pgcrypto, citext, btree\_gist, pg\_trgm, pg\_partman|
|RLS base policies + app roles (app\_rw, app\_migrator, audit\_insert\_only, reporting\_ro)|
|Monthly partition automation for punches, audit\_events, outbox\_events, notification\_deliveries|
|Seed: permission catalog, system roles, plans, statutory rule-set placeholders, notification templates|
|Read replica + reporting views|
|Backup/PITR configuration and restore drill script|



|||
| - | - |
|||
|||
|**Module**|**Phase**|
|M01|1|
|M01|1|
|M01|1|
|M01|1|
|M01|1|
|M01|1|
|M01|1|
|M01|8|
|M01|8|
|M01|8|
|M01|8|
|M01|8|
|M02|1|
|M02|1|
|M02|1|
|M02|1|
|M02|1|
|M02|1|
|M02|1|
|M02|1|
|M02|1|
|M02|1|
|M02|1|
|M02|1|



|M02|1|
| - | -: |
|M02|1|
|M02|6|
|M02|8|
|M26|8|
|M03|1|
|M03|4|
|M03|2|
|M03|1|
|M03|1|
|M03|1|
|M03|2|
|M03|4|
|M03|1|
|M04|2|
|M04|2|
|M04|4|
|M04|2|
|M04|2|
|M04|2|
|M04|2|
|M04|2|
|M04|2|
|M05|2|



|M05|2|
| - | -: |
|M06|2|
|M06|2|
|M06|2|
|M06|2|
|M06|2|
|M06|2|
|M06|5|
|M07|5|
|M07|5|
|M07|5|
|M07|5|
|M07|5|
|M07|5|
|M07|5|
|M07|5|
|M07|5|
|M07|5|
|M08|5|
|M08|5|
|M08|5|
|M08|5|
|M09|5|
|M09|5|
|M09|5|
|M11|3|
|M11|3|



|M11|3|
| - | -: |
|M11|3|
|M10|3|
|M10|3|
|M10|6|
|M10|6|
|M10|3|
|M10|3|
|M10|3|
|M10|3|
|M10|3|
|M10|3|
|M10|8|
|M12|3|
|M12|3|
|M12|3|
|M12|3|
|M12|3|
|M12|3|
|M12|3|
|M12|3|
|M12|3|
|M13|4|
|M13|4|



|M13|4|
| - | -: |
|M13|4|
|M13|4|
|M13|4|
|M13|4|
|M13|4|
|M13|4|
|M13|4|
|M13|4|
|M13|4|
|M13|4|
|M13|6|
|M13|6|
|M13|5|
|M13|5|
|M13|4|
|M13|4|
|M14|4|
|M14|4|
|M14|4|
|M14|4|
|M14|4|
|M14|4|
|M14|4|
|M15|6|



|M15|6|
| - | -: |
|M15|6|
|M15|6|
|M15|6|
|M15|6|
|M15|6|
|M15|6|
|M16|8|
|M16|8|
|M16|8|
|M16|8|
|M16|8|
|M17|6|
|M17|6|
|M17|6|
|M17|6|
|M18|8|
|M18|8|
|M18|8|
|M18|8|
|M19|6|
|M19|6|
|M19|6|
|M19|6|
|M19|6|
|M19|6|



|M20|8|
| - | -: |
|M20|8|
|M20|8|
|M21|6|
|M21|6|
|M21|6|
|M21|6|
|M22|2|
|M22|2|
|M22|6|
|M22|2|
|M23|1|
|M23|2|
|M23|7|
|M23|7|
|M23|7|
|M23|8|
|M24|1|
|M24|1|
|M24|6|
|M24|1|
|M24|1|
|M24|7|
|M25|1|
|M25|1|
|M25|1|
|M25|1|



|M25|6|
| - | -: |
|M26|6|
|M26|6|
|M26|6|
|M29|2|
|M29|2|
|M28|1|
|M28|1|
|M30|8|
|M30|8|
|M30|8|
|M30|8|
|M30|8|
|M31|8|
|M28|1|
|M28|1|
|M28|1|
|M28|1|
|M28|1|
|M28|1|


|**Sheet 7 - API Inventory**|||
| - | - | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*|||
||||
|**API**|**Method**||
|/api/v1/signup|POST||
|/api/v1/signup/verify-email|POST||
|/api/v1/signup/resend-verification|POST||
|/api/v1/platform/tenants|GET||
|/api/v1/platform/tenants/{id}/approve|POST||
|/api/v1/platform/tenants/{id}/reject|POST||
|/api/v1/platform/tenants/{id}/suspend|POST||
|/api/v1/platform/tenants/{id}/reactivate|POST||
|/api/v1/platform/tenants/{id}/cancel|POST||
|/api/v1/platform/tenants/{id}/archive|POST||
|/api/v1/tenant/setup|GET||
|/api/v1/tenant/setup/{step}|PUT||
|/api/v1/tenant/setup/complete|POST||
|/api/v1/tenant/settings|GET||
|/api/v1/tenant/settings|PATCH||
|/api/v1/tenant/exports|POST||
|/api/v1/tenant/exports/{id}|GET||
|/api/v1/platform/plans|GET||
|/api/v1/platform/plans|POST||
|/api/v1/platform/plans/{id}/versions|POST||
|/api/v1/subscription|GET||
|/api/v1/platform/tenants/{id}/subscription|POST||
|/api/v1/platform/invoices|GET||
|/api/v1/platform/invoices|POST||
|/api/v1/platform/payments|POST||
|/api/v1/platform/payments/{id}/allocations|POST||
|/api/v1/subscription/payment-method|POST||
|/api/v1/webhooks/payments|POST||
|/api/v1/platform/flags|GET||
|/api/v1/platform/flags/{key}|PUT||
|/api/v1/auth/login|POST||
|/api/v1/auth/logout|POST||
|/api/v1/auth/refresh|POST||
|/api/v1/auth/csrf|GET||
|/api/v1/auth/password/forgot|POST||
|/api/v1/auth/password/reset|POST||
|/api/v1/me/password|POST||
|/api/v1/me/sessions|GET||
|/api/v1/me/sessions/{id}|DELETE||
|/api/v1/users/{id}/sessions|DELETE||
|/api/v1/me/mfa/totp|POST||
|/api/v1/me/mfa/totp/verify|POST||
|/api/v1/me/mfa/recovery-codes|POST||



|/api/v1/auth/mfa/challenge|POST|
| - | - |
|/api/v1/sso/config|GET|
|/api/v1/sso/config|PUT|
|/api/v1/sso/{tenantSlug}/login|GET|
|/api/v1/sso/acs|POST|
|/api/v1/scim/v2/Users|GET|
|/api/v1/scim/v2/Users|POST|
|/api/v1/scim/v2/Users/{id}|PATCH|
|/api/v1/me/passkeys/register|POST|
|/api/v1/auth/passkey|POST|
|/api/v1/invitations|POST|
|/api/v1/invitations|GET|
|/api/v1/invitations/{id}|DELETE|
|/api/v1/invitations/{id}/resend|POST|
|/api/v1/invitations/accept/{token}|GET|
|/api/v1/invitations/accept|POST|
|/api/v1/memberships|GET|
|/api/v1/memberships/{id}|PATCH|
|/api/v1/me/memberships|GET|
|/api/v1/session/tenant|POST|
|/api/v1/employees/{id}/membership|PUT|
|/api/v1/permissions|GET|
|/api/v1/roles|GET|
|/api/v1/roles|POST|
|/api/v1/roles/{id}|PATCH|
|/api/v1/roles/{id}|DELETE|
|/api/v1/roles/{id}/clone|POST|
|/api/v1/role-grants|GET|
|/api/v1/role-grants|POST|
|/api/v1/role-grants/{id}|DELETE|
|/api/v1/employees/{id}/reveal|POST|
|/api/v1/platform/break-glass|POST|
|/api/v1/platform/break-glass/{id}/approve|POST|
|/api/v1/platform/break-glass/{id}|DELETE|
|/api/v1/reports/access-review|GET|
|/api/v1/legal-entities|GET|
|/api/v1/legal-entities|POST|
|/api/v1/legal-entities/{id}|PATCH|
|/api/v1/legal-entities/{id}/registrations|PUT|
|/api/v1/locations|GET|
|/api/v1/locations|POST|
|/api/v1/locations/{id}|PATCH|
|/api/v1/branches|GET|
|/api/v1/branches|POST|
|/api/v1/branches/{id}|PATCH|
|/api/v1/departments|GET|
|/api/v1/departments|POST|
|/api/v1/departments/{id}|PATCH|
|/api/v1/departments/{id}/deactivate|POST|
|/api/v1/designations|GET|



|/api/v1/designations|POST|
| - | - |
|/api/v1/designations/{id}|PATCH|
|/api/v1/grades|GET|
|/api/v1/grades|POST|
|/api/v1/grades/{id}|PATCH|
|/api/v1/cost-centers|GET|
|/api/v1/cost-centers|POST|
|/api/v1/cost-centers/{id}|PATCH|
|/api/v1/employment-types|GET|
|/api/v1/employment-types|POST|
|/api/v1/employment-types/{id}|PATCH|
|/api/v1/org-chart|GET|
|/api/v1/employees|POST|
|/api/v1/employees/{id}|GET|
|/api/v1/employees/{id}|PATCH|
|/api/v1/employees|GET|
|/api/v1/employees/{id}/assignments|GET|
|/api/v1/employees/{id}/assignments|POST|
|/api/v1/employees/{id}/assignments/{aid}/amend|POST|
|/api/v1/employees/{id}/events|POST|
|/api/v1/employees/{id}/events|GET|
|/api/v1/employees/{id}/contacts|GET|
|/api/v1/employees/{id}/contacts|POST|
|/api/v1/employees/{id}/contacts/{cid}|PATCH|
|/api/v1/employees/{id}/education|POST|
|/api/v1/employees/{id}/experience|POST|
|/api/v1/employees/{id}/bank-accounts|GET|
|/api/v1/employees/{id}/bank-accounts|POST|
|/api/v1/employees/{id}/statutory-ids|PUT|
|/api/v1/employees/probation-due|GET|
|/api/v1/employees/{id}/confirm|POST|
|/api/v1/directory|GET|
|/api/v1/employees/exports|POST|
|/api/v1/employees/{id}/archive|POST|
|/api/v1/celebrations|GET|
|/api/v1/me/profile|GET|
|/api/v1/me/profile|PATCH|
|/api/v1/me/profile-change-requests|POST|
|/api/v1/me/profile-change-requests|GET|
|/api/v1/me/requests|GET|
|/api/v1/me/dashboard|GET|
|/api/v1/team|GET|
|/api/v1/team/today|GET|
|/api/v1/me/privacy-acknowledgements|POST|
|/api/v1/me/data-exports|POST|
|/api/v1/files/upload-intents|POST|
|/api/v1/files/{id}/complete|POST|
|/api/v1/files/{id}/download-url|GET|
|/api/v1/document-types|GET|
|/api/v1/document-types|POST|



|/api/v1/document-types/{id}|PATCH|
| - | - |
|/api/v1/employees/{id}/documents|GET|
|/api/v1/employees/{id}/documents|POST|
|/api/v1/documents/{id}/verify|POST|
|/api/v1/documents/{id}/reject|POST|
|/api/v1/documents/expiring|GET|
|/api/v1/policies|GET|
|/api/v1/policies|POST|
|/api/v1/policies/{id}/publish|POST|
|/api/v1/policies/{id}/acknowledge|POST|
|/api/v1/letter-templates|GET|
|/api/v1/letter-templates|POST|
|/api/v1/letters/generate|POST|
|/api/v1/letters/{id}/esign|POST|
|/api/v1/webhooks/esign|POST|
|/api/v1/library|GET|
|/api/v1/library/folders|POST|
|/api/v1/requisitions|GET|
|/api/v1/requisitions|POST|
|/api/v1/requisitions/{id}|PATCH|
|/api/v1/requisitions/{id}/submit|POST|
|/api/v1/jobs|GET|
|/api/v1/jobs|POST|
|/api/v1/jobs/{id}|PATCH|
|/api/v1/jobs/{id}/publish|POST|
|/api/v1/jobs/{id}/close|POST|
|/api/v1/public/{tenantSlug}/jobs|GET|
|/api/v1/public/{tenantSlug}/jobs/{id}|GET|
|/api/v1/public/{tenantSlug}/jobs/{id}/apply|POST|
|/api/v1/jobs/{id}/distributions|POST|
|/api/v1/referrals|POST|
|/api/v1/me/referrals|GET|
|/api/v1/candidates|GET|
|/api/v1/candidates|POST|
|/api/v1/candidates/{id}|PATCH|
|/api/v1/candidates/{id}/merge|POST|
|/api/v1/jobs/{id}/applications|GET|
|/api/v1/applications/{id}/move|POST|
|/api/v1/candidates/parse|POST|
|/api/v1/applications/{id}/interviews|POST|
|/api/v1/interviews/{id}|PATCH|
|/api/v1/interviews/{id}/cancel|POST|
|/api/v1/interviews/{id}/feedback|GET|
|/api/v1/interviews/{id}/feedback|POST|
|/api/v1/applications/{id}/offers|POST|
|/api/v1/offers/{id}|PATCH|
|/api/v1/offers/{id}/submit|POST|
|/api/v1/offers/{id}/send|POST|
|/api/v1/portal/offers/{token}|GET|
|/api/v1/portal/offers/{token}/accept|POST|



|/api/v1/portal/offers/{token}/decline|POST|
| - | - |
|/api/v1/reports/recruitment/\*|GET|
|/api/v1/onboarding/templates|GET|
|/api/v1/onboarding/templates|POST|
|/api/v1/onboarding/templates/{id}|PATCH|
|/api/v1/onboarding/cases|GET|
|/api/v1/onboarding/cases/{id}|GET|
|/api/v1/onboarding/tasks/{id}|PATCH|
|/api/v1/portal/prejoin/{token}|GET|
|/api/v1/portal/prejoin/{token}/sections/{section}|PUT|
|/api/v1/portal/prejoin/{token}/submit|POST|
|/api/v1/onboarding/cases/{id}/documents/{docId}/verify|POST|
|/api/v1/onboarding/cases/{id}/joined|POST|
|/api/v1/onboarding/cases/{id}/no-show|POST|
|/api/v1/onboarding/cases/{id}/buddy|POST|
|/api/v1/onboarding/cases/{id}/checkins|POST|
|/api/v1/me/resignation|POST|
|/api/v1/me/resignation/withdraw|POST|
|/api/v1/exits/{id}/accept|POST|
|/api/v1/exits/{id}|PATCH|
|/api/v1/employees/{id}/termination|POST|
|/api/v1/exits/{id}/clearances|GET|
|/api/v1/exits/{id}/clearances/{cid}|PATCH|
|/api/v1/exits/{id}/interview|GET|
|/api/v1/exits/{id}/interview|POST|
|/api/v1/exits/{id}/letters|POST|
|/api/v1/exits/{id}/rehire-eligibility|PATCH|
|/api/v1/attendance/punches|POST|
|/api/v1/me/attendance/today|GET|
|/api/v1/devices|GET|
|/api/v1/devices|POST|
|/api/v1/devices/{id}/sync|POST|
|/api/v1/devices/ingest|POST|
|/api/v1/devices/exceptions|GET|
|/api/v1/kiosk/punches|POST|
|/api/v1/attendance/punches/batch|POST|
|/api/v1/attendance/policies|GET|
|/api/v1/attendance/policies|POST|
|/api/v1/attendance/policies/{id}/versions|POST|
|/api/v1/attendance/policies/{id}/versions/{v}/activate|POST|
|/api/v1/me/attendance|GET|
|/api/v1/attendance/days|GET|
|/api/v1/team/attendance|GET|
|/api/v1/attendance/regularizations|POST|
|/api/v1/attendance/regularizations|GET|
|/api/v1/attendance/regularizations/{id}/cancel|POST|
|/api/v1/attendance/on-duty-requests|POST|
|/api/v1/attendance/on-duty-requests|GET|
|/api/v1/attendance/overtime|GET|
|/api/v1/attendance/overtime/{id}/decision|POST|



|/api/v1/attendance/periods|GET|
| - | - |
|/api/v1/attendance/periods/{id}/lock|POST|
|/api/v1/attendance/periods/{id}/unlock|POST|
|/api/v1/me/timesheets|GET|
|/api/v1/me/timesheets|POST|
|/api/v1/timesheets/{id}/decision|POST|
|/api/v1/reports/attendance/\*|GET|
|/api/v1/shifts|GET|
|/api/v1/shifts|POST|
|/api/v1/shifts/{id}|PATCH|
|/api/v1/weekly-off-patterns|GET|
|/api/v1/weekly-off-patterns|POST|
|/api/v1/rosters|GET|
|/api/v1/rosters|PUT|
|/api/v1/rosters/publish|POST|
|/api/v1/shift-swaps|POST|
|/api/v1/shift-swaps/{id}/decision|POST|
|/api/v1/reports/roster-coverage|GET|
|/api/v1/leave/types|GET|
|/api/v1/leave/types|POST|
|/api/v1/leave/types/{id}|PATCH|
|/api/v1/leave/policies|GET|
|/api/v1/leave/policies|POST|
|/api/v1/leave/policies/{id}/versions|POST|
|/api/v1/leave/policies/{id}/versions/{v}/activate|POST|
|/api/v1/holiday-calendars|GET|
|/api/v1/holiday-calendars|POST|
|/api/v1/holiday-calendars/{id}/holidays|POST|
|/api/v1/me/restricted-holidays|POST|
|/api/v1/me/leave/balances|GET|
|/api/v1/leave/balances|GET|
|/api/v1/employees/{id}/leave/ledger|GET|
|/api/v1/leave/requests|POST|
|/api/v1/leave/requests|GET|
|/api/v1/leave/requests/{id}|GET|
|/api/v1/leave/requests/{id}/decision|POST|
|/api/v1/leave/requests/{id}/cancel|POST|
|/api/v1/leave/year-end-runs|POST|
|/api/v1/leave/year-end-runs/{id}|GET|
|/api/v1/leave/comp-off-requests|POST|
|/api/v1/me/leave/comp-offs|GET|
|/api/v1/team/leave-calendar|GET|
|/api/v1/reports/leave/\*|GET|
|/api/v1/imports (type=leave\_opening)|POST|
|/api/v1/payroll/components|GET|
|/api/v1/payroll/components|POST|
|/api/v1/payroll/components/{id}|PATCH|
|/api/v1/payroll/formulas/validate|POST|
|/api/v1/payroll/structures|GET|
|/api/v1/payroll/structures|POST|



|/api/v1/payroll/structures/{id}|PATCH|
| - | - |
|/api/v1/employees/{id}/compensation|GET|
|/api/v1/employees/{id}/compensation-revisions|POST|
|/api/v1/imports (type=compensation\_revision)|POST|
|/api/v1/payroll/calendars|GET|
|/api/v1/payroll/calendars|POST|
|/api/v1/payroll/periods|GET|
|/api/v1/payroll/periods/{id}/inputs|GET|
|/api/v1/payroll/periods/{id}/inputs|POST|
|/api/v1/payroll/runs|POST|
|/api/v1/payroll/runs/{id}/calculate|POST|
|/api/v1/payroll/runs/{id}|GET|
|/api/v1/payroll/runs/{id}/employees|GET|
|/api/v1/payroll/runs/{id}/variance|GET|
|/api/v1/payroll/runs/{id}/submit|POST|
|/api/v1/payroll/runs/{id}/approve|POST|
|/api/v1/payroll/runs/{id}/reject|POST|
|/api/v1/payroll/runs/{id}/lock|POST|
|/api/v1/payroll/runs/{id}/bank-files|POST|
|/api/v1/payroll/runs/{id}/payment-confirmations|POST|
|/api/v1/me/payslips|GET|
|/api/v1/me/payslips/{id}/download-url|GET|
|/api/v1/payroll/runs/{id}/payslips/publish|POST|
|/api/v1/payroll/runs (type=off\_cycle)|POST|
|/api/v1/loans|POST|
|/api/v1/loans|GET|
|/api/v1/loans/{id}/decision|POST|
|/api/v1/loans/{id}/foreclose|POST|
|/api/v1/exits/{id}/fnf|POST|
|/api/v1/fnf/{id}|PATCH|
|/api/v1/fnf/{id}/approve|POST|
|/api/v1/payroll-exchange/exports|POST|
|/api/v1/payroll-exchange/imports|POST|
|/api/v1/payroll-exchange/reconciliation|GET|
|/api/v1/payroll/runs/{id}/journal-exports|POST|
|/api/v1/reports/payroll/\*|GET|
|/api/v1/payroll/parallel-runs|POST|
|/api/v1/payroll/parallel-runs/{id}|GET|
|/api/v1/statutory/rule-sets|GET|
|/api/v1/statutory/rule-sets|POST|
|/api/v1/statutory/rule-sets/{id}/approve|POST|
|/api/v1/statutory/pf/settings|GET|
|/api/v1/statutory/pf/ecr|POST|
|/api/v1/statutory/esi/returns|POST|
|/api/v1/statutory/pt|GET|
|/api/v1/statutory/pt/challans|POST|
|/api/v1/statutory/lwf|GET|
|/api/v1/me/tax/declarations|GET|
|/api/v1/me/tax/declarations/{fy}|PUT|
|/api/v1/me/tax/regime|POST|



|/api/v1/me/tax/proofs|POST|
| - | - |
|/api/v1/tax/proofs/{id}/decision|POST|
|/api/v1/employees/{id}/tax/computation|GET|
|/api/v1/tax/24q|POST|
|/api/v1/tax/form16/generate|POST|
|/api/v1/me/tax/form16|GET|
|/api/v1/reports/statutory/\*|GET|
|/api/v1/statutory/calendar|GET|
|/api/v1/performance/cycles|GET|
|/api/v1/performance/cycles|POST|
|/api/v1/performance/cycles/{id}|PATCH|
|/api/v1/performance/cycles/{id}/launch|POST|
|/api/v1/performance/goals|GET|
|/api/v1/performance/goals|POST|
|/api/v1/performance/goals/{id}|PATCH|
|/api/v1/performance/goals/{id}/checkins|POST|
|/api/v1/performance/kpis|GET|
|/api/v1/performance/kpis|POST|
|/api/v1/performance/one-on-ones|GET|
|/api/v1/performance/one-on-ones|POST|
|/api/v1/performance/reviews|GET|
|/api/v1/performance/reviews/{id}|GET|
|/api/v1/performance/reviews/{id}|PUT|
|/api/v1/performance/reviews/{id}/submit|POST|
|/api/v1/performance/feedback-requests|POST|
|/api/v1/performance/feedback/{id}|POST|
|/api/v1/performance/cycles/{id}/calibration|GET|
|/api/v1/performance/calibration-changes|POST|
|/api/v1/performance/cycles/{id}/release|POST|
|/api/v1/performance/reviews/{id}/acknowledge|POST|
|/api/v1/performance/recommendations|POST|
|/api/v1/performance/recommendations/{id}/decision|POST|
|/api/v1/performance/pips|POST|
|/api/v1/performance/pips/{id}|PATCH|
|/api/v1/performance/cycles/{id}/close|POST|
|/api/v1/performance/cycles/{id}/reopen|POST|
|/api/v1/learning/courses|GET|
|/api/v1/learning/courses|POST|
|/api/v1/learning/courses/{id}|PATCH|
|/api/v1/learning/assignments|POST|
|/api/v1/learning/rules|POST|
|/api/v1/me/learning|GET|
|/api/v1/me/learning/{id}/progress|POST|
|/api/v1/learning/assessments|POST|
|/api/v1/me/learning/assessments/{id}/attempts|POST|
|/api/v1/learning/sessions|GET|
|/api/v1/learning/sessions|POST|
|/api/v1/learning/sessions/{id}/attendance|POST|



|/api/v1/learning/certifications|GET|
| - | - |
|/api/v1/learning/certifications|POST|
|/api/v1/learning/requests|POST|
|/api/v1/learning/requests/{id}/decision|POST|
|/api/v1/assets/categories|GET|
|/api/v1/assets/categories|POST|
|/api/v1/assets/items|GET|
|/api/v1/assets/items|POST|
|/api/v1/assets/items/{id}|PATCH|
|/api/v1/assets/requests|POST|
|/api/v1/assets/requests/{id}/decision|POST|
|/api/v1/assets/items/{id}/allocate|POST|
|/api/v1/me/assets/{allocationId}/acknowledge|POST|
|/api/v1/assets/allocations/{id}/return|POST|
|/api/v1/assets/items/{id}/transfer|POST|
|/api/v1/assets/items/{id}/status|POST|
|/api/v1/reports/assets/\*|GET|
|/api/v1/helpdesk/categories|GET|
|/api/v1/helpdesk/categories|POST|
|/api/v1/helpdesk/sla-policies|POST|
|/api/v1/helpdesk/tickets|POST|
|/api/v1/me/tickets|GET|
|/api/v1/helpdesk/tickets/{id}/comments|POST|
|/api/v1/helpdesk/tickets/{id}/reopen|POST|
|/api/v1/helpdesk/tickets|GET|
|/api/v1/helpdesk/tickets/{id}|PATCH|
|/api/v1/helpdesk/tickets/{id}/assign|POST|
|/api/v1/kb/articles|GET|
|/api/v1/kb/articles|POST|
|/api/v1/helpdesk/tickets/{id}/csat|POST|
|/api/v1/reports/helpdesk/\*|GET|
|/api/v1/expenses/policies|GET|
|/api/v1/expenses/policies|POST|
|/api/v1/expenses/claims|POST|
|/api/v1/expenses/claims/{id}|PATCH|
|/api/v1/expenses/claims/{id}/submit|POST|
|/api/v1/me/expenses|GET|
|/api/v1/expenses/claims/{id}/decision|POST|
|/api/v1/expenses/advances|POST|
|/api/v1/expenses/advances/{id}/decision|POST|
|/api/v1/expenses/payout-batches|POST|
|/api/v1/expenses/payout-batches/{id}/confirm|POST|
|/api/v1/reports/expenses/\*|GET|
|/api/v1/travel/policies|GET|
|/api/v1/travel/policies|POST|
|/api/v1/travel/requests|POST|
|/api/v1/me/travel|GET|
|/api/v1/travel/requests/{id}/decision|POST|
|/api/v1/travel/requests/{id}/bookings|POST|
|/api/v1/travel/requests/{id}/settle|POST|



|/api/v1/announcements|GET|
| - | - |
|/api/v1/announcements|POST|
|/api/v1/announcements/{id}|PATCH|
|/api/v1/announcements/{id}/read|POST|
|/api/v1/polls|POST|
|/api/v1/polls/{id}/votes|POST|
|/api/v1/surveys|POST|
|/api/v1/surveys/{id}|PATCH|
|/api/v1/surveys/{id}/launch|POST|
|/api/v1/surveys/{id}/responses|POST|
|/api/v1/surveys/{id}/results|GET|
|/api/v1/recognitions|POST|
|/api/v1/recognitions|GET|
|/api/v1/posts/{id}/report|POST|
|/api/v1/posts/{id}/hide|POST|
|/api/v1/dashboards/{role}|GET|
|/api/v1/reports|GET|
|/api/v1/reports/{id}|GET|
|/api/v1/reports/{id}/views|POST|
|/api/v1/exports|POST|
|/api/v1/exports/{id}|GET|
|/api/v1/exports/{id}/download-url|GET|
|/api/v1/report-schedules|POST|
|/api/v1/report-schedules|GET|
|/api/v1/reports/headcount|GET|
|/api/v1/reports/attrition|GET|
|/api/v1/reports/custom|POST|
|/api/v1/reports/custom/{id}/run|POST|
|/api/v1/audit-events|GET|
|/api/v1/audit-events/{id}|GET|
|/api/v1/audit-events/exports|POST|
|/api/v1/data-access-logs|GET|
|/api/v1/retention-policies|GET|
|/api/v1/retention-policies/{class}|PUT|
|/api/v1/legal-holds|POST|
|/api/v1/legal-holds/{id}|DELETE|
|/api/v1/privacy-requests|POST|
|/api/v1/privacy-requests|GET|
|/api/v1/privacy-requests/{id}/decision|POST|
|/api/v1/login-history|GET|
|/api/v1/posh-cases|GET|
|/api/v1/posh-cases|POST|
|/api/v1/notifications|GET|
|/api/v1/notifications/read|POST|
|/api/v1/notification-templates|GET|
|/api/v1/notification-templates/{key}/{channel}|PUT|
|/api/v1/me/notification-preferences|GET|



|/api/v1/me/notification-preferences|PUT|
| - | - |
|/api/v1/notification-channels/{channel}|PUT|
|/api/v1/me/devices|POST|
|/api/v1/me/devices/{id}|DELETE|
|/api/v1/workflows|GET|
|/api/v1/workflows|POST|
|/api/v1/workflows/{id}/versions|POST|
|/api/v1/workflows/{id}/versions/{v}/publish|POST|
|/api/v1/approval-tasks|GET|
|/api/v1/approval-tasks/{id}|GET|
|/api/v1/approval-tasks/{id}/decision|POST|
|/api/v1/approval-tasks/bulk-decision|POST|
|/api/v1/delegations|POST|
|/api/v1/me/delegations|GET|
|/api/v1/delegations/{id}|DELETE|
|/api/v1/approval-actions/{token}|POST|
|/api/v1/webhooks|GET|
|/api/v1/webhooks|POST|
|/api/v1/webhooks/{id}|PATCH|
|/api/v1/webhooks/{id}/deliveries|GET|
|/api-keys|POST|
|/api-keys|GET|
|/api-keys/{id}|DELETE|
|/api/v1/integrations/calendar/connect|POST|
|/api/v1/integrations/calendar|DELETE|
|/api/v1/integrations/accounting/connect|POST|
|/api/v1/integrations/accounting/sync|POST|
|/api/v1/integrations/slack/connect|POST|
|/api/v1/integrations/teams/connect|POST|
|/api/v1/integrations|GET|
|/api/v1/oauth/token|POST|
|/api/v1/oauth/revoke|POST|
|/api/v1/imports|POST|
|/api/v1/imports/{id}|GET|
|/api/v1/imports/{id}/rows|GET|
|/api/v1/imports/{id}/commit|POST|
|/api/v1/imports/{id}/error-file|GET|
|/api/v1/imports/templates/{type}|GET|
|/api/v1/finance/accounts|GET|
|/api/v1/finance/accounts|POST|
|/api/v1/finance/periods|GET|
|/api/v1/finance/periods/{id}/close|POST|
|/api/v1/finance/periods/{id}/reopen|POST|
|/api/v1/finance/journals|POST|
|/api/v1/finance/journals/{id}/submit|POST|
|/api/v1/finance/journals/{id}/approve|POST|
|/api/v1/finance/journals/{id}/post|POST|
|/api/v1/finance/journals/{id}/reverse|POST|
|/api/v1/finance/reports/trial-balance|GET|
|/api/v1/finance/reports/general-ledger|GET|



|/api/v1/finance/reports/profit-loss|GET|
| - | - |
|/api/v1/finance/reports/balance-sheet|GET|
|/api/v1/ai/ask|POST|
|/api/v1/ai/candidates/{id}/summary|POST|
|/api/v1/ai/reviews/{id}/assist|POST|
|/api/v1/health/live|GET|
|/api/v1/health/ready|GET|
|/api/v1/session|GET|
|/api/v1/me/permissions|GET|
|/api/v1/jobs/{jobId}|GET|
|/api/v1/me/approvals/count|GET|



||||
| - | - | - |
||||
||||
|**Description**|**Auth Required**|**Permission key**|
|Self-signup|No (public)|tenant.signup|
|Self-signup|No (public)|tenant.signup|
|Email verification at signup|No (public)|tenant.signup|
|Platform tenant review & approval|Yes|platform.tenant.approve|
|Platform tenant review & approval|Yes|platform.tenant.approve|
|Platform tenant review & approval|Yes|platform.tenant.approve|
|Suspend / reactivate / cancel / archive tenant|Yes|platform.tenant.manage|
|Suspend / reactivate / cancel / archive tenant|Yes|platform.tenant.manage|
|Suspend / reactivate / cancel / archive tenant|Yes|platform.tenant.manage|
|Suspend / reactivate / cancel / archive tenant|Yes|platform.tenant.manage|
|Setup wizard|Yes|tenant.setup.manage|
|Setup wizard|Yes|tenant.setup.manage|
|Setup wizard|Yes|tenant.setup.manage|
|Tenant settings|Yes|tenant.settings.manage|
|Tenant settings|Yes|tenant.settings.manage|
|Tenant data export on exit|Yes|tenant.export.request|
|Tenant data export on exit|Yes|tenant.export.request|
|Plans and plan versions|Yes|platform.plan.manage|
|Plans and plan versions|Yes|platform.plan.manage|
|Plans and plan versions|Yes|platform.plan.manage|
|Subscription lifecycle|Yes|tenant.subscription.read|
|Subscription lifecycle|Yes|tenant.subscription.read|
|Invoices and payments (manual-first)|Yes|platform.billing.manage|
|Invoices and payments (manual-first)|Yes|platform.billing.manage|
|Invoices and payments (manual-first)|Yes|platform.billing.manage|
|Invoices and payments (manual-first)|Yes|platform.billing.manage|
|Payment gateway & dunning|Yes|tenant.billing.pay|
|Payment gateway & dunning|Provider signature|tenant.billing.pay|
|Platform feature flags|Yes|platform.flags.manage|
|Platform feature flags|Yes|platform.flags.manage|
|Email/password login|No (public)|auth.login|
|Logout|Yes|auth.logout|
|Cookie sessions with rotation|Yes|-|
|Cookie sessions with rotation|Yes|-|
|Password reset|No (public)|auth.password.reset|
|Password reset|No (public)|auth.password.reset|
|Change password|Yes|auth.password.change|
|Session management|Yes|auth.sessions.manage|
|Session management|Yes|auth.sessions.manage|
|Session management|Yes|auth.sessions.manage|
|MFA (TOTP + recovery codes)|Yes|auth.mfa.manage|
|MFA (TOTP + recovery codes)|Yes|auth.mfa.manage|
|MFA (TOTP + recovery codes)|Yes|auth.mfa.manage|



|MFA (TOTP + recovery codes)|Yes|auth.mfa.manage|
| - | - | - |
|SSO (SAML/OIDC)|No (public)|auth.sso.manage|
|SSO (SAML/OIDC)|No (public)|auth.sso.manage|
|SSO (SAML/OIDC)|No (public)|auth.sso.manage|
|SSO (SAML/OIDC)|No (public)|auth.sso.manage|
|SCIM provisioning|SCIM bearer token|auth.scim.manage|
|SCIM provisioning|SCIM bearer token|auth.scim.manage|
|SCIM provisioning|SCIM bearer token|auth.scim.manage|
|Passkeys (WebAuthn)|Yes|auth.passkey.manage|
|Passkeys (WebAuthn)|Yes|auth.passkey.manage|
|Invite user|Yes|access.invitation.create|
|Invite user|Yes|access.invitation.create|
|Invite user|Yes|access.invitation.create|
|Invite user|Yes|access.invitation.create|
|Accept invitation|Token (signed link)|access.invitation.accept|
|Accept invitation|Token (signed link)|access.invitation.accept|
|Membership lifecycle|Yes|access.membership.manage|
|Membership lifecycle|Yes|access.membership.manage|
|Tenant switcher|Yes|access.tenant.switch|
|Tenant switcher|Yes|access.tenant.switch|
|Link user to employee|Yes|access.membership.link|
|Permission catalog|Yes|access.catalog.read|
|System role templates|Yes|access.role.read|
|Custom roles|Yes|access.role.manage|
|Custom roles|Yes|access.role.manage|
|Custom roles|Yes|access.role.manage|
|Custom roles|Yes|access.role.manage|
|Role grants with scope and validity|Yes|access.grant.manage|
|Role grants with scope and validity|Yes|access.grant.manage|
|Role grants with scope and validity|Yes|access.grant.manage|
|Field-level classification|Yes|employee.restricted.read|
|Break-glass access|Yes|platform.breakglass.request|
|Break-glass access|Yes|platform.breakglass.request|
|Break-glass access|Yes|platform.breakglass.request|
|Access review report|Yes|access.review.read|
|Legal entities|Yes|org.legal\_entity.manage|
|Legal entities|Yes|org.legal\_entity.manage|
|Legal entities|Yes|org.legal\_entity.manage|
|Statutory registrations|Yes|org.legal\_entity.statutory|
|Locations with geofence|Yes|org.location.manage|
|Locations with geofence|Yes|org.location.manage|
|Locations with geofence|Yes|org.location.manage|
|Branches|Yes|org.branch.manage|
|Branches|Yes|org.branch.manage|
|Branches|Yes|org.branch.manage|
|Departments tree|Yes|org.department.manage|
|Departments tree|Yes|org.department.manage|
|Departments tree|Yes|org.department.manage|
|Departments tree|Yes|org.department.manage|
|Designations|Yes|org.designation.manage|



|Designations|Yes|org.designation.manage|
| - | - | - |
|Designations|Yes|org.designation.manage|
|Grades/bands|Yes|org.grade.manage|
|Grades/bands|Yes|org.grade.manage|
|Grades/bands|Yes|org.grade.manage|
|Cost centers|Yes|org.cost\_center.manage|
|Cost centers|Yes|org.cost\_center.manage|
|Cost centers|Yes|org.cost\_center.manage|
|Employment types|Yes|org.employment\_type.manage|
|Employment types|Yes|org.employment\_type.manage|
|Employment types|Yes|org.employment\_type.manage|
|Org chart|Yes|org.chart.read|
|Create employee|Yes|employee.create|
|Employee profile view/edit|Yes|employee.update|
|Employee profile view/edit|Yes|employee.update|
|Employee list & search|Yes|employee.read|
|Effective-dated assignments|Yes|employee.assignment.manage|
|Effective-dated assignments|Yes|employee.assignment.manage|
|Effective-dated assignments|Yes|employee.assignment.manage|
|Lifecycle events|Yes|employee.event.manage|
|Lifecycle events|Yes|employee.event.manage|
|Personal, family, education, experience|Yes|employee.personal.manage|
|Personal, family, education, experience|Yes|employee.personal.manage|
|Personal, family, education, experience|Yes|employee.personal.manage|
|Personal, family, education, experience|Yes|employee.personal.manage|
|Personal, family, education, experience|Yes|employee.personal.manage|
|Bank accounts (restricted)|Yes|employee.bank.manage|
|Bank accounts (restricted)|Yes|employee.bank.manage|
|Statutory IDs (restricted)|Yes|employee.statutory.manage|
|Probation tracking|Yes|employee.probation.manage|
|Probation tracking|Yes|employee.probation.manage|
|Employee directory|Yes|directory.read|
|Employee export|Yes|employee.export|
|Archive/soft-delete employee|Yes|employee.archive|
|Work anniversaries & birthdays feed|Yes|engage.celebrations.read|
|My profile|Yes|me.profile.update|
|My profile|Yes|me.profile.update|
|Profile change requests|Yes|me.profile\_change.create|
|Profile change requests|Yes|me.profile\_change.create|
|My requests hub|Yes|me.requests.read|
|Home dashboard (employee)|Yes|me.dashboard.read|
|My team view|Yes|team.read|
|My team view|Yes|team.read|
|Privacy notice acknowledgement|Yes|me.privacy.ack|
|My data download|Yes|me.data.export|
|Upload intent & presigned PUT|Yes|files.upload|
|Upload intent & presigned PUT|Yes|files.upload|
|Signed download|Yes|files.download|
|Document types config|Yes|document.type.manage|
|Document types config|Yes|document.type.manage|



|Document types config|Yes|document.type.manage|
| - | - | - |
|Employee documents|Yes|document.employee.manage|
|Employee documents|Yes|document.employee.manage|
|Employee documents|Yes|document.employee.manage|
|Employee documents|Yes|document.employee.manage|
|Expiry tracking|Yes|document.expiry.read|
|Company policies & acknowledgement|Yes|document.policy.manage|
|Company policies & acknowledgement|Yes|document.policy.manage|
|Company policies & acknowledgement|Yes|document.policy.manage|
|Company policies & acknowledgement|Yes|document.policy.manage|
|Letter templates & generation|Yes|document.letter.manage|
|Letter templates & generation|Yes|document.letter.manage|
|Letter templates & generation|Yes|document.letter.manage|
|E-sign integration|Yes|document.esign.send|
|E-sign integration|Provider signature|document.esign.send|
|Company document library|Yes|document.library.read|
|Company document library|Yes|document.library.read|
|Manpower requisition|Yes|recruitment.requisition.manage|
|Manpower requisition|Yes|recruitment.requisition.manage|
|Manpower requisition|Yes|recruitment.requisition.manage|
|Manpower requisition|Yes|recruitment.requisition.manage|
|Job creation & posting|Yes|recruitment.job.manage|
|Job creation & posting|Yes|recruitment.job.manage|
|Job creation & posting|Yes|recruitment.job.manage|
|Job creation & posting|Yes|recruitment.job.manage|
|Job creation & posting|Yes|recruitment.job.manage|
|Careers page & apply|No (public)|careers.apply|
|Careers page & apply|No (public)|careers.apply|
|Careers page & apply|No (public)|careers.apply|
|Job board distribution|Yes|recruitment.job.distribute|
|Employee referrals|Yes|recruitment.referral.create|
|Employee referrals|Yes|recruitment.referral.create|
|Candidate database|Yes|recruitment.candidate.manage|
|Candidate database|Yes|recruitment.candidate.manage|
|Candidate database|Yes|recruitment.candidate.manage|
|Candidate database|Yes|recruitment.candidate.manage|
|Configurable pipeline|Yes|recruitment.application.move|
|Configurable pipeline|Yes|recruitment.application.move|
|Resume parsing|Yes|recruitment.candidate.parse|
|Interview scheduling|Yes|recruitment.interview.manage|
|Interview scheduling|Yes|recruitment.interview.manage|
|Interview scheduling|Yes|recruitment.interview.manage|
|Scorecards & blind feedback|Yes|recruitment.feedback.submit|
|Scorecards & blind feedback|Yes|recruitment.feedback.submit|
|Offer management|Yes|recruitment.offer.manage|
|Offer management|Yes|recruitment.offer.manage|
|Offer management|Yes|recruitment.offer.manage|
|Offer management|Yes|recruitment.offer.manage|
|Candidate offer portal|Token (signed link)|offer.respond|
|Candidate offer portal|Token (signed link)|offer.respond|



|Candidate offer portal|Token (signed link)|offer.respond|
| - | - | - |
|Recruitment analytics|Yes|reports.recruitment.read|
|Onboarding templates|Yes|onboarding.template.manage|
|Onboarding templates|Yes|onboarding.template.manage|
|Onboarding templates|Yes|onboarding.template.manage|
|Onboarding case & tasks|Yes|onboarding.case.manage|
|Onboarding case & tasks|Yes|onboarding.case.manage|
|Onboarding case & tasks|Yes|onboarding.case.manage|
|Pre-joining portal|Token (signed link)|portal.prejoin.submit|
|Pre-joining portal|Token (signed link)|portal.prejoin.submit|
|Pre-joining portal|Token (signed link)|portal.prejoin.submit|
|Document verification|Yes|onboarding.document.verify|
|Mark joined / no-show|Yes|onboarding.case.join|
|Mark joined / no-show|Yes|onboarding.case.join|
|Buddy & induction|Yes|onboarding.induction.manage|
|Buddy & induction|Yes|onboarding.induction.manage|
|Resignation submission|Yes|exit.resignation.create|
|Resignation submission|Yes|exit.resignation.create|
|Resignation acceptance & notice|Yes|exit.resignation.decide|
|Resignation acceptance & notice|Yes|exit.resignation.decide|
|Termination & retirement|Yes|exit.termination.create|
|Clearance checklist|Yes|exit.clearance.manage|
|Clearance checklist|Yes|exit.clearance.manage|
|Exit interview|Yes|exit.interview.submit|
|Exit interview|Yes|exit.interview.submit|
|Relieving & experience letters|Yes|exit.letter.issue|
|Rehire eligibility|Yes|exit.rehire.flag|
|Web punch (4 events)|Yes|attendance.punch.create|
|Web punch (4 events)|Yes|attendance.punch.create|
|Biometric device integration|Yes|attendance.device.manage|
|Biometric device integration|Yes|attendance.device.manage|
|Biometric device integration|Yes|attendance.device.manage|
|Biometric device integration|Device key (HMAC)|attendance.device.manage|
|Biometric device integration|Yes|attendance.device.manage|
|Kiosk punch|Yes|attendance.punch.kiosk|
|Offline mobile punch sync|Yes|attendance.punch.create|
|Attendance policies (versioned)|Yes|attendance.policy.manage|
|Attendance policies (versioned)|Yes|attendance.policy.manage|
|Attendance policies (versioned)|Yes|attendance.policy.manage|
|Attendance policies (versioned)|Yes|attendance.policy.manage|
|Attendance views|Yes|attendance.day.read|
|Attendance views|Yes|attendance.day.read|
|Attendance views|Yes|attendance.day.read|
|Regularization|Yes|attendance.regularization.create|
|Regularization|Yes|attendance.regularization.create|
|Regularization|Yes|attendance.regularization.create|
|On-duty / WFH requests|Yes|attendance.onduty.create|
|On-duty / WFH requests|Yes|attendance.onduty.create|
|Overtime capture & approval|Yes|attendance.overtime.manage|
|Overtime capture & approval|Yes|attendance.overtime.manage|



|Attendance period lock|Yes|attendance.period.lock|
| - | - | - |
|Attendance period lock|Yes|attendance.period.lock|
|Attendance period lock|Yes|attendance.period.lock|
|Contractor timesheets|Yes|attendance.timesheet.manage|
|Contractor timesheets|Yes|attendance.timesheet.manage|
|Contractor timesheets|Yes|attendance.timesheet.manage|
|Attendance reports|Yes|reports.attendance.read|
|Shift templates|Yes|shift.template.manage|
|Shift templates|Yes|shift.template.manage|
|Shift templates|Yes|shift.template.manage|
|Weekly-off patterns|Yes|shift.weekoff.manage|
|Weekly-off patterns|Yes|shift.weekoff.manage|
|Roster planning & publish|Yes|shift.roster.manage|
|Roster planning & publish|Yes|shift.roster.manage|
|Roster planning & publish|Yes|shift.roster.manage|
|Shift swap requests|Yes|shift.swap.create|
|Shift swap requests|Yes|shift.swap.create|
|Roster coverage report|Yes|reports.roster.read|
|Leave types|Yes|leave.type.manage|
|Leave types|Yes|leave.type.manage|
|Leave types|Yes|leave.type.manage|
|Leave policies (versioned)|Yes|leave.policy.manage|
|Leave policies (versioned)|Yes|leave.policy.manage|
|Leave policies (versioned)|Yes|leave.policy.manage|
|Leave policies (versioned)|Yes|leave.policy.manage|
|Holiday calendars|Yes|leave.holiday.manage|
|Holiday calendars|Yes|leave.holiday.manage|
|Holiday calendars|Yes|leave.holiday.manage|
|Holiday calendars|Yes|leave.holiday.manage|
|Leave ledger & balances|Yes|leave.balance.read|
|Leave ledger & balances|Yes|leave.balance.read|
|Leave ledger & balances|Yes|leave.balance.read|
|Apply leave|Yes|leave.request.create|
|Apply leave|Yes|leave.request.create|
|Apply leave|Yes|leave.request.create|
|Approve / reject leave|Yes|leave.request.approve|
|Cancel leave|Yes|leave.request.cancel|
|Year-end processing|Yes|leave.yearend.run|
|Year-end processing|Yes|leave.yearend.run|
|Comp-off|Yes|leave.compoff.manage|
|Comp-off|Yes|leave.compoff.manage|
|Team leave calendar|Yes|leave.calendar.read|
|Leave reports|Yes|reports.leave.read|
|Opening balance import|Yes|leave.balance.import|
|Salary components|Yes|payroll.component.manage|
|Salary components|Yes|payroll.component.manage|
|Salary components|Yes|payroll.component.manage|
|Formula DSL engine|Yes|-|
|Salary structures|Yes|payroll.structure.manage|
|Salary structures|Yes|payroll.structure.manage|



|Salary structures|Yes|payroll.structure.manage|
| - | - | - |
|Employee compensation & revisions|Yes|payroll.compensation.manage|
|Employee compensation & revisions|Yes|payroll.compensation.manage|
|Bulk revision upload|Yes|payroll.compensation.import|
|Payroll calendars & periods|Yes|payroll.calendar.manage|
|Payroll calendars & periods|Yes|payroll.calendar.manage|
|Payroll calendars & periods|Yes|payroll.calendar.manage|
|Payroll inputs|Yes|payroll.input.manage|
|Payroll inputs|Yes|payroll.input.manage|
|Run payroll (calculate)|Yes|payroll.run.calculate|
|Run payroll (calculate)|Yes|payroll.run.calculate|
|Run payroll (calculate)|Yes|payroll.run.calculate|
|Run payroll (calculate)|Yes|payroll.run.calculate|
|Variance review|Yes|payroll.run.review|
|Maker-checker approval & lock|Yes|payroll.run.approve|
|Maker-checker approval & lock|Yes|payroll.run.approve|
|Maker-checker approval & lock|Yes|payroll.run.approve|
|Maker-checker approval & lock|Yes|payroll.run.approve|
|Bank payment file & confirmation|Yes|payroll.payment.manage|
|Bank payment file & confirmation|Yes|payroll.payment.manage|
|Payslips|Yes|payroll.payslip.read|
|Payslips|Yes|payroll.payslip.read|
|Payslips|Yes|payroll.payslip.read|
|Off-cycle runs|Yes|payroll.run.offcycle|
|Loans & advances|Yes|payroll.loan.manage|
|Loans & advances|Yes|payroll.loan.manage|
|Loans & advances|Yes|payroll.loan.manage|
|Loans & advances|Yes|payroll.loan.manage|
|Full & final settlement|Yes|payroll.fnf.manage|
|Full & final settlement|Yes|payroll.fnf.manage|
|Full & final settlement|Yes|payroll.fnf.manage|
|Payroll exchange (export/import)|Yes|payroll.exchange.manage|
|Payroll exchange (export/import)|Yes|payroll.exchange.manage|
|Payroll exchange (export/import)|Yes|payroll.exchange.manage|
|GL journal export|Yes|payroll.journal.export|
|Payroll reports|Yes|reports.payroll.read|
|Parallel run & go-live gate|Yes|payroll.parallel.run|
|Parallel run & go-live gate|Yes|payroll.parallel.run|
|Statutory rule sets|Yes|statutory.ruleset.manage|
|Statutory rule sets|Yes|statutory.ruleset.manage|
|Statutory rule sets|Yes|statutory.ruleset.manage|
|PF (EPF/EPS/EDLI)|Yes|statutory.pf.manage|
|PF (EPF/EPS/EDLI)|Yes|statutory.pf.manage|
|ESI|Yes|statutory.esi.manage|
|Professional Tax|Yes|statutory.pt.manage|
|Professional Tax|Yes|statutory.pt.manage|
|Labour Welfare Fund|Yes|statutory.lwf.manage|
|Tax regime & declarations|Yes|tax.declaration.manage|
|Tax regime & declarations|Yes|tax.declaration.manage|
|Tax regime & declarations|Yes|tax.declaration.manage|



|Proof submission & verification|Yes|tax.proof.manage|
| - | - | - |
|Proof submission & verification|Yes|tax.proof.manage|
|TDS computation|Yes|-|
|Form 16 & 24Q|Yes|tax.form16.manage|
|Form 16 & 24Q|Yes|tax.form16.manage|
|Form 16 & 24Q|Yes|tax.form16.manage|
|Gratuity & bonus registers|Yes|statutory.registers.read|
|Compliance calendar|Yes|statutory.calendar.read|
|Review cycles|Yes|performance.cycle.manage|
|Review cycles|Yes|performance.cycle.manage|
|Review cycles|Yes|performance.cycle.manage|
|Review cycles|Yes|performance.cycle.manage|
|Goals / OKRs|Yes|performance.goal.manage|
|Goals / OKRs|Yes|performance.goal.manage|
|Goals / OKRs|Yes|performance.goal.manage|
|Goals / OKRs|Yes|performance.goal.manage|
|KPI library|Yes|performance.kpi.manage|
|KPI library|Yes|performance.kpi.manage|
|Continuous check-ins & 1:1s|Yes|performance.checkin.manage|
|Continuous check-ins & 1:1s|Yes|performance.checkin.manage|
|Self & manager reviews|Yes|performance.review.submit|
|Self & manager reviews|Yes|performance.review.submit|
|Self & manager reviews|Yes|performance.review.submit|
|Self & manager reviews|Yes|performance.review.submit|
|360 / peer feedback|Yes|performance.feedback.manage|
|360 / peer feedback|Yes|performance.feedback.manage|
|Calibration|Yes|performance.calibration.manage|
|Calibration|Yes|performance.calibration.manage|
|Release & acknowledgement|Yes|performance.release.manage|
|Release & acknowledgement|Yes|performance.release.manage|
|Increment & promotion recommendations|Yes|performance.recommendation.manage|
|Increment & promotion recommendations|Yes|performance.recommendation.manage|
|PIP|Yes|performance.pip.manage|
|PIP|Yes|performance.pip.manage|
|Cycle lock & reopen|Yes|performance.cycle.lock|
|Cycle lock & reopen|Yes|performance.cycle.lock|
|Course catalog|Yes|learning.course.manage|
|Course catalog|Yes|learning.course.manage|
|Course catalog|Yes|learning.course.manage|
|Assignments & auto-assign rules|Yes|learning.assignment.manage|
|Assignments & auto-assign rules|Yes|learning.assignment.manage|
|Learner experience|Yes|learning.my.read|
|Learner experience|Yes|learning.my.read|
|Assessments|Yes|learning.assessment.manage|
|Assessments|Yes|learning.assessment.manage|
|Training calendar & sessions|Yes|learning.session.manage|
|Training calendar & sessions|Yes|learning.session.manage|
|Training calendar & sessions|Yes|learning.session.manage|



|Certifications with expiry|Yes|learning.certification.manage|
| - | - | - |
|Certifications with expiry|Yes|learning.certification.manage|
|Training requests & budget|Yes|learning.request.create|
|Training requests & budget|Yes|learning.request.create|
|Asset categories & catalog|Yes|asset.category.manage|
|Asset categories & catalog|Yes|asset.category.manage|
|Inventory|Yes|asset.item.manage|
|Inventory|Yes|asset.item.manage|
|Inventory|Yes|asset.item.manage|
|Asset requests|Yes|asset.request.create|
|Asset requests|Yes|asset.request.create|
|Allocation & acknowledgement|Yes|asset.allocation.manage|
|Allocation & acknowledgement|Yes|asset.allocation.manage|
|Return, transfer, repair, retire|Yes|asset.allocation.return|
|Return, transfer, repair, retire|Yes|asset.allocation.return|
|Return, transfer, repair, retire|Yes|asset.allocation.return|
|Asset reports|Yes|reports.asset.read|
|Ticket categories & SLA|Yes|helpdesk.category.manage|
|Ticket categories & SLA|Yes|helpdesk.category.manage|
|Ticket categories & SLA|Yes|helpdesk.category.manage|
|Raise & track tickets|Yes|helpdesk.ticket.create|
|Raise & track tickets|Yes|helpdesk.ticket.create|
|Raise & track tickets|Yes|helpdesk.ticket.create|
|Raise & track tickets|Yes|helpdesk.ticket.create|
|Agent workspace|Yes|helpdesk.ticket.manage|
|Agent workspace|Yes|helpdesk.ticket.manage|
|Agent workspace|Yes|helpdesk.ticket.manage|
|Knowledge base|Yes|helpdesk.kb.manage|
|Knowledge base|Yes|helpdesk.kb.manage|
|CSAT & helpdesk reports|Yes|reports.helpdesk.read|
|CSAT & helpdesk reports|Yes|reports.helpdesk.read|
|Expense policies|Yes|expense.policy.manage|
|Expense policies|Yes|expense.policy.manage|
|Submit claim with receipts|Yes|expense.claim.create|
|Submit claim with receipts|Yes|expense.claim.create|
|Submit claim with receipts|Yes|expense.claim.create|
|Submit claim with receipts|Yes|expense.claim.create|
|Approve / audit claims|Yes|expense.claim.approve|
|Advances|Yes|expense.advance.manage|
|Advances|Yes|expense.advance.manage|
|Reimbursement payout|Yes|expense.payout.manage|
|Reimbursement payout|Yes|expense.payout.manage|
|Expense reports|Yes|reports.expense.read|
|Travel policies|Yes|travel.policy.manage|
|Travel policies|Yes|travel.policy.manage|
|Travel request|Yes|travel.request.create|
|Travel request|Yes|travel.request.create|
|Travel request|Yes|travel.request.create|
|Travel desk bookings|Yes|travel.booking.manage|
|Trip settlement|Yes|travel.settlement.manage|



|Announcements|Yes|engage.announcement.manage|
| - | - | - |
|Announcements|Yes|engage.announcement.manage|
|Announcements|Yes|engage.announcement.manage|
|Announcements|Yes|engage.announcement.manage|
|Polls|Yes|engage.poll.manage|
|Polls|Yes|engage.poll.manage|
|Surveys & eNPS|Yes|engage.survey.manage|
|Surveys & eNPS|Yes|engage.survey.manage|
|Surveys & eNPS|Yes|engage.survey.manage|
|Surveys & eNPS|Yes|engage.survey.manage|
|Surveys & eNPS|Yes|engage.survey.manage|
|Recognition & badges|Yes|engage.recognition.create|
|Recognition & badges|Yes|engage.recognition.create|
|Social feed moderation|Yes|engage.moderation.manage|
|Social feed moderation|Yes|engage.moderation.manage|
|Role dashboards|Yes|dashboard.read|
|Standard report library|Yes|reports.read|
|Standard report library|Yes|reports.read|
|Standard report library|Yes|reports.read|
|Export jobs|Yes|reports.export|
|Export jobs|Yes|reports.export|
|Export jobs|Yes|reports.export|
|Scheduled reports|Yes|reports.schedule.manage|
|Scheduled reports|Yes|reports.schedule.manage|
|Headcount & attrition analytics|Yes|reports.headcount.read|
|Headcount & attrition analytics|Yes|reports.headcount.read|
|Custom report builder|Yes|reports.builder.manage|
|Custom report builder|Yes|reports.builder.manage|
|Audit search|Yes|audit.read|
|Audit search|Yes|audit.read|
|Audit export|Yes|audit.export|
|Restricted data access log|Yes|audit.access\_log.read|
|Retention & legal hold|Yes|compliance.retention.manage|
|Retention & legal hold|Yes|compliance.retention.manage|
|Retention & legal hold|Yes|compliance.retention.manage|
|Retention & legal hold|Yes|compliance.retention.manage|
|DPDP data-principal requests|Yes|compliance.privacy\_request.manage|
|DPDP data-principal requests|Yes|compliance.privacy\_request.manage|
|DPDP data-principal requests|Yes|compliance.privacy\_request.manage|
|Login history|Yes|audit.login.read|
|POSH case log (restricted)|Yes|compliance.posh.manage|
|POSH case log (restricted)|Yes|compliance.posh.manage|
|In-app notification center|Yes|notification.read|
|In-app notification center|Yes|notification.read|
|Templates|Yes|notification.template.manage|
|Templates|Yes|notification.template.manage|
|User preferences & quiet hours|Yes|notification.preference.manage|



|User preferences & quiet hours|Yes|notification.preference.manage|
| - | - | - |
|SMS & WhatsApp|Yes|notification.channel.manage|
|Push notifications|Yes|-|
|Push notifications|Yes|-|
|Workflow definitions & versions|Yes|workflow.definition.manage|
|Workflow definitions & versions|Yes|workflow.definition.manage|
|Workflow definitions & versions|Yes|workflow.definition.manage|
|Workflow definitions & versions|Yes|workflow.definition.manage|
|Approval inbox|Yes|workflow.task.decide|
|Approval inbox|Yes|workflow.task.decide|
|Approval inbox|Yes|workflow.task.decide|
|Approval inbox|Yes|workflow.task.decide|
|Delegation|Yes|workflow.delegation.manage|
|Delegation|Yes|workflow.delegation.manage|
|Delegation|Yes|workflow.delegation.manage|
|Email/mobile action links|Token (signed link)|-|
|Outbound webhooks|Yes|integration.webhook.manage|
|Outbound webhooks|Yes|integration.webhook.manage|
|Outbound webhooks|Yes|integration.webhook.manage|
|Outbound webhooks|Yes|integration.webhook.manage|
|Public API keys|Yes|integration.apikey.manage|
|Public API keys|Yes|integration.apikey.manage|
|Public API keys|Yes|integration.apikey.manage|
|Calendar integration|Yes|integration.calendar.manage|
|Calendar integration|Yes|integration.calendar.manage|
|Accounting connectors|Yes|integration.accounting.manage|
|Accounting connectors|Yes|integration.accounting.manage|
|Slack / Teams|Yes|integration.chat.manage|
|Slack / Teams|Yes|integration.chat.manage|
|Integration health|Yes|integration.health.read|
|Mobile auth & device binding|No (public)|auth.mobile.login|
|Mobile auth & device binding|Yes|auth.mobile.login|
|Import framework|Yes|import.batch.manage|
|Import framework|Yes|import.batch.manage|
|Import framework|Yes|import.batch.manage|
|Import framework|Yes|import.batch.manage|
|Import framework|Yes|import.batch.manage|
|Employee import|Yes|import.employee|
|Accounting books & COA|Yes|finance.coa.manage|
|Accounting books & COA|Yes|finance.coa.manage|
|Fiscal periods & close|Yes|finance.period.manage|
|Fiscal periods & close|Yes|finance.period.manage|
|Fiscal periods & close|Yes|finance.period.manage|
|Journals with maker-checker|Yes|finance.journal.manage|
|Journals with maker-checker|Yes|finance.journal.manage|
|Journals with maker-checker|Yes|finance.journal.manage|
|Journals with maker-checker|Yes|finance.journal.manage|
|Journals with maker-checker|Yes|finance.journal.manage|
|Financial reports|Yes|finance.report.read|
|Financial reports|Yes|finance.report.read|



|Financial reports|Yes|finance.report.read|
| - | - | - |
|Financial reports|Yes|finance.report.read|
|Policy Q&A assistant|Yes|ai.assistant.use|
|Resume summarisation|Yes|ai.resume.summarise|
|Review writing assistance|Yes|ai.review.assist|
|Liveness probe|No (public)|-|
|Readiness probe|No (public)|-|
|Current user, membership, permissions|Yes|-|
|Effective permissions for UI gating|Yes|-|
|Background job status|Yes|-|
|Pending approvals badge|Yes|-|



|||||
| - | - | - | - |
|||||
|||||
|**Module**|**Feature ID**|**Phase**|**Idempotency-Key**|
|M01|TEN-001|1||
|M01|TEN-001|1||
|M01|TEN-002|1||
|M01|TEN-003|1||
|M01|TEN-003|1|Yes|
|M01|TEN-003|1|Yes|
|M01|TEN-004|1|Yes|
|M01|TEN-004|1|Yes|
|M01|TEN-004|1|Yes|
|M01|TEN-004|1|Yes|
|M01|TEN-006|1||
|M01|TEN-006|1||
|M01|TEN-006|1|Yes|
|M01|TEN-007|1||
|M01|TEN-007|1||
|M01|TEN-008|8|Yes|
|M01|TEN-008|8||
|M01|TEN-009|1||
|M01|TEN-009|1|Yes|
|M01|TEN-009|1|Yes|
|M01|TEN-010|1||
|M01|TEN-010|1|Yes|
|M01|TEN-013|8||
|M01|TEN-013|8|Yes|
|M01|TEN-013|8|Yes|
|M01|TEN-013|8|Yes|
|M01|TEN-014|8|Yes|
|M01|TEN-014|8||
|M01|TEN-016|1||
|M01|TEN-016|1||
|M02|IAM-001|1||
|M02|IAM-002|1|Yes|
|M02|IAM-003|1|Yes|
|M02|IAM-003|1||
|M02|IAM-004|1||
|M02|IAM-004|1||
|M02|IAM-005|1|Yes|
|M02|IAM-006|1||
|M02|IAM-006|1||
|M02|IAM-006|1||
|M02|IAM-007|1|Yes|
|M02|IAM-007|1|Yes|
|M02|IAM-007|1|Yes|



|M02|IAM-007|1|Yes|
| - | - | -: | - |
|M02|IAM-008|8||
|M02|IAM-008|8||
|M02|IAM-008|8||
|M02|IAM-008|8||
|M02|IAM-009|8||
|M02|IAM-009|8||
|M02|IAM-009|8||
|M02|IAM-010|8|Yes|
|M02|IAM-010|8|Yes|
|M02|IAM-011|1|Yes|
|M02|IAM-011|1||
|M02|IAM-011|1||
|M02|IAM-011|1|Yes|
|M02|IAM-012|1||
|M02|IAM-012|1||
|M02|IAM-013|1||
|M02|IAM-013|1||
|M02|IAM-015|7||
|M02|IAM-015|7|Yes|
|M02|IAM-016|2||
|M02|IAM-017|1||
|M02|IAM-018|1||
|M02|IAM-019|1|Yes|
|M02|IAM-019|1||
|M02|IAM-019|1||
|M02|IAM-019|1|Yes|
|M02|IAM-020|1||
|M02|IAM-020|1|Yes|
|M02|IAM-020|1||
|M02|IAM-024|2|Yes|
|M02|IAM-025|6|Yes|
|M02|IAM-025|6|Yes|
|M02|IAM-025|6||
|M02|IAM-026|6||
|M03|ORG-001|1||
|M03|ORG-001|1|Yes|
|M03|ORG-001|1||
|M03|ORG-002|4||
|M03|ORG-003|1||
|M03|ORG-003|1|Yes|
|M03|ORG-003|1||
|M03|ORG-004|2||
|M03|ORG-004|2|Yes|
|M03|ORG-004|2||
|M03|ORG-005|1||
|M03|ORG-005|1|Yes|
|M03|ORG-005|1||
|M03|ORG-005|1|Yes|
|M03|ORG-006|1||


|M03|ORG-006|1|Yes|
| - | - | -: | - |
|M03|ORG-006|1||
|M03|ORG-007|2||
|M03|ORG-007|2|Yes|
|M03|ORG-007|2||
|M03|ORG-008|4||
|M03|ORG-008|4|Yes|
|M03|ORG-008|4||
|M03|ORG-009|1||
|M03|ORG-009|1|Yes|
|M03|ORG-009|1||
|M03|ORG-010|2||
|M04|EMP-001|2|Yes|
|M04|EMP-002|2||
|M04|EMP-002|2||
|M04|EMP-003|2||
|M04|EMP-004|2||
|M04|EMP-004|2|Yes|
|M04|EMP-004|2|Yes|
|M04|EMP-005|2|Yes|
|M04|EMP-005|2||
|M04|EMP-009|2||
|M04|EMP-009|2|Yes|
|M04|EMP-009|2||
|M04|EMP-009|2|Yes|
|M04|EMP-009|2|Yes|
|M04|EMP-010|2||
|M04|EMP-010|2|Yes|
|M04|EMP-011|2||
|M04|EMP-012|2||
|M04|EMP-012|2|Yes|
|M04|EMP-013|2||
|M04|EMP-014|2|Yes|
|M04|EMP-015|2|Yes|
|M04|EMP-016|6||
|M05|ESS-001|2||
|M05|ESS-001|2||
|M05|ESS-002|2|Yes|
|M05|ESS-002|2||
|M05|ESS-003|2||
|M05|ESS-004|2||
|M05|ESS-005|3||
|M05|ESS-005|3||
|M05|ESS-006|2|Yes|
|M05|ESS-007|6|Yes|
|M06|DOC-001|2|Yes|
|M06|DOC-001|2|Yes|
|M06|DOC-003|2||
|M06|DOC-004|2||
|M06|DOC-004|2|Yes|



|M06|DOC-004|2||
| - | - | -: | - |
|M06|DOC-005|2||
|M06|DOC-005|2|Yes|
|M06|DOC-005|2|Yes|
|M06|DOC-005|2|Yes|
|M06|DOC-006|2||
|M06|DOC-007|2||
|M06|DOC-007|2|Yes|
|M06|DOC-007|2|Yes|
|M06|DOC-007|2|Yes|
|M06|DOC-008|5||
|M06|DOC-008|5|Yes|
|M06|DOC-008|5|Yes|
|M06|DOC-009|8|Yes|
|M06|DOC-009|8||
|M06|DOC-010|6||
|M06|DOC-010|6|Yes|
|M07|REC-001|5||
|M07|REC-001|5|Yes|
|M07|REC-001|5||
|M07|REC-001|5|Yes|
|M07|REC-002|5||
|M07|REC-002|5|Yes|
|M07|REC-002|5||
|M07|REC-002|5|Yes|
|M07|REC-002|5|Yes|
|M07|REC-003|5||
|M07|REC-003|5||
|M07|REC-003|5||
|M07|REC-004|8|Yes|
|M07|REC-005|5|Yes|
|M07|REC-005|5||
|M07|REC-006|5||
|M07|REC-006|5|Yes|
|M07|REC-006|5||
|M07|REC-006|5|Yes|
|M07|REC-007|5||
|M07|REC-007|5|Yes|
|M07|REC-008|8|Yes|
|M07|REC-010|5|Yes|
|M07|REC-010|5||
|M07|REC-010|5|Yes|
|M07|REC-011|5||
|M07|REC-011|5|Yes|
|M07|REC-012|5|Yes|
|M07|REC-012|5||
|M07|REC-012|5|Yes|
|M07|REC-012|5|Yes|
|M07|REC-013|5||
|M07|REC-013|5||


|M07|REC-013|5||
| - | - | -: | - |
|M07|REC-015|6||
|M08|ONB-001|5||
|M08|ONB-001|5|Yes|
|M08|ONB-001|5||
|M08|ONB-002|5||
|M08|ONB-002|5||
|M08|ONB-002|5||
|M08|ONB-003|5||
|M08|ONB-003|5||
|M08|ONB-003|5||
|M08|ONB-004|5|Yes|
|M08|ONB-005|5|Yes|
|M08|ONB-005|5|Yes|
|M08|ONB-006|6|Yes|
|M08|ONB-006|6|Yes|
|M09|OFB-001|5|Yes|
|M09|OFB-001|5|Yes|
|M09|OFB-002|5|Yes|
|M09|OFB-002|5||
|M09|OFB-003|5|Yes|
|M09|OFB-004|5||
|M09|OFB-004|5||
|M09|OFB-005|5||
|M09|OFB-005|5|Yes|
|M09|OFB-007|5|Yes|
|M09|OFB-008|5||
|M10|ATT-001|3|Yes|
|M10|ATT-001|3||
|M10|ATT-005|6||
|M10|ATT-005|6|Yes|
|M10|ATT-005|6|Yes|
|M10|ATT-005|6||
|M10|ATT-005|6||
|M10|ATT-006|8|Yes|
|M10|ATT-007|7|Yes|
|M10|ATT-010|3||
|M10|ATT-010|3|Yes|
|M10|ATT-010|3|Yes|
|M10|ATT-010|3|Yes|
|M10|ATT-012|3||
|M10|ATT-012|3||
|M10|ATT-012|3||
|M10|ATT-013|3|Yes|
|M10|ATT-013|3||
|M10|ATT-013|3|Yes|
|M10|ATT-014|3|Yes|
|M10|ATT-014|3||
|M10|ATT-015|3||
|M10|ATT-015|3|Yes|



|M10|ATT-016|3||
| - | - | -: | - |
|M10|ATT-016|3|Yes|
|M10|ATT-016|3|Yes|
|M10|ATT-017|8||
|M10|ATT-017|8|Yes|
|M10|ATT-017|8|Yes|
|M10|ATT-018|3||
|M11|SFT-001|3||
|M11|SFT-001|3|Yes|
|M11|SFT-001|3||
|M11|SFT-002|3||
|M11|SFT-002|3|Yes|
|M11|SFT-003|3||
|M11|SFT-003|3||
|M11|SFT-003|3|Yes|
|M11|SFT-004|3|Yes|
|M11|SFT-004|3|Yes|
|M11|SFT-005|6||
|M12|LV-001|3||
|M12|LV-001|3|Yes|
|M12|LV-001|3||
|M12|LV-002|3||
|M12|LV-002|3|Yes|
|M12|LV-002|3|Yes|
|M12|LV-002|3|Yes|
|M12|LV-003|3||
|M12|LV-003|3|Yes|
|M12|LV-003|3|Yes|
|M12|LV-003|3|Yes|
|M12|LV-004|3||
|M12|LV-004|3||
|M12|LV-004|3||
|M12|LV-005|3|Yes|
|M12|LV-005|3||
|M12|LV-005|3||
|M12|LV-006|3|Yes|
|M12|LV-007|3|Yes|
|M12|LV-010|3|Yes|
|M12|LV-010|3||
|M12|LV-011|3|Yes|
|M12|LV-011|3||
|M12|LV-013|3||
|M12|LV-014|3||
|M12|LV-015|3|Yes|
|M13|PAY-001|4||
|M13|PAY-001|4|Yes|
|M13|PAY-001|4||
|M13|PAY-002|4|Yes|
|M13|PAY-003|4||
|M13|PAY-003|4|Yes|



|M13|PAY-003|4||
| - | - | -: | - |
|M13|PAY-004|4||
|M13|PAY-004|4|Yes|
|M13|PAY-005|6|Yes|
|M13|PAY-006|4||
|M13|PAY-006|4|Yes|
|M13|PAY-006|4||
|M13|PAY-007|4||
|M13|PAY-007|4|Yes|
|M13|PAY-008|4|Yes|
|M13|PAY-008|4|Yes|
|M13|PAY-008|4||
|M13|PAY-008|4||
|M13|PAY-009|4||
|M13|PAY-010|4|Yes|
|M13|PAY-010|4|Yes|
|M13|PAY-010|4|Yes|
|M13|PAY-010|4|Yes|
|M13|PAY-011|4|Yes|
|M13|PAY-011|4|Yes|
|M13|PAY-012|4||
|M13|PAY-012|4||
|M13|PAY-012|4|Yes|
|M13|PAY-013|4|Yes|
|M13|PAY-014|6|Yes|
|M13|PAY-014|6||
|M13|PAY-014|6|Yes|
|M13|PAY-014|6|Yes|
|M13|PAY-015|5|Yes|
|M13|PAY-015|5||
|M13|PAY-015|5|Yes|
|M13|PAY-016|4|Yes|
|M13|PAY-016|4|Yes|
|M13|PAY-016|4||
|M13|PAY-017|4|Yes|
|M13|PAY-018|4||
|M13|PAY-019|4|Yes|
|M13|PAY-019|4||
|M14|STA-001|4||
|M14|STA-001|4|Yes|
|M14|STA-001|4|Yes|
|M14|STA-002|4||
|M14|STA-002|4|Yes|
|M14|STA-003|4|Yes|
|M14|STA-004|4||
|M14|STA-004|4|Yes|
|M14|STA-005|4||
|M14|STA-006|4||
|M14|STA-006|4||
|M14|STA-006|4|Yes|



|M14|STA-007|4|Yes|
| - | - | -: | - |
|M14|STA-007|4|Yes|
|M14|STA-008|4||
|M14|STA-009|4|Yes|
|M14|STA-009|4|Yes|
|M14|STA-009|4||
|M14|STA-010|4||
|M14|STA-011|4||
|M15|PRF-001|6||
|M15|PRF-001|6|Yes|
|M15|PRF-001|6||
|M15|PRF-001|6|Yes|
|M15|PRF-002|6||
|M15|PRF-002|6|Yes|
|M15|PRF-002|6||
|M15|PRF-002|6|Yes|
|M15|PRF-003|6||
|M15|PRF-003|6|Yes|
|M15|PRF-004|6||
|M15|PRF-004|6|Yes|
|M15|PRF-005|6||
|M15|PRF-005|6||
|M15|PRF-005|6||
|M15|PRF-005|6|Yes|
|M15|PRF-006|6|Yes|
|M15|PRF-006|6|Yes|
|M15|PRF-007|6||
|M15|PRF-007|6|Yes|
|M15|PRF-008|6|Yes|
|M15|PRF-008|6|Yes|
|M15|PRF-009|6|Yes|
|M15|PRF-009|6|Yes|
|M15|PRF-010|6|Yes|
|M15|PRF-010|6||
|M15|PRF-011|6|Yes|
|M15|PRF-011|6|Yes|
|M16|LMS-001|8||
|M16|LMS-001|8|Yes|
|M16|LMS-001|8||
|M16|LMS-002|8|Yes|
|M16|LMS-002|8|Yes|
|M16|LMS-003|8||
|M16|LMS-003|8|Yes|
|M16|LMS-004|8|Yes|
|M16|LMS-004|8|Yes|
|M16|LMS-005|8||
|M16|LMS-005|8|Yes|
|M16|LMS-005|8|Yes|



|M16|LMS-006|8||
| - | - | -: | - |
|M16|LMS-006|8|Yes|
|M16|LMS-007|8|Yes|
|M16|LMS-007|8|Yes|
|M17|AST-001|6||
|M17|AST-001|6|Yes|
|M17|AST-002|6||
|M17|AST-002|6|Yes|
|M17|AST-002|6||
|M17|AST-003|6|Yes|
|M17|AST-003|6|Yes|
|M17|AST-004|6|Yes|
|M17|AST-004|6|Yes|
|M17|AST-005|6|Yes|
|M17|AST-005|6|Yes|
|M17|AST-005|6|Yes|
|M17|AST-006|6||
|M18|HLP-001|8||
|M18|HLP-001|8|Yes|
|M18|HLP-001|8|Yes|
|M18|HLP-002|8|Yes|
|M18|HLP-002|8||
|M18|HLP-002|8|Yes|
|M18|HLP-002|8|Yes|
|M18|HLP-003|8||
|M18|HLP-003|8||
|M18|HLP-003|8|Yes|
|M18|HLP-005|8||
|M18|HLP-005|8|Yes|
|M18|HLP-006|8|Yes|
|M18|HLP-006|8||
|M19|EXP-001|6||
|M19|EXP-001|6|Yes|
|M19|EXP-002|6|Yes|
|M19|EXP-002|6||
|M19|EXP-002|6|Yes|
|M19|EXP-002|6||
|M19|EXP-003|6|Yes|
|M19|EXP-004|6|Yes|
|M19|EXP-004|6|Yes|
|M19|EXP-005|6|Yes|
|M19|EXP-005|6|Yes|
|M19|EXP-006|6||
|M20|TRV-001|8||
|M20|TRV-001|8|Yes|
|M20|TRV-002|8|Yes|
|M20|TRV-002|8||
|M20|TRV-002|8|Yes|
|M20|TRV-003|8|Yes|
|M20|TRV-004|8|Yes|



|M21|ENG-001|6||
| - | - | -: | - |
|M21|ENG-001|6|Yes|
|M21|ENG-001|6||
|M21|ENG-001|6|Yes|
|M21|ENG-002|6|Yes|
|M21|ENG-002|6|Yes|
|M21|ENG-003|6|Yes|
|M21|ENG-003|6||
|M21|ENG-003|6|Yes|
|M21|ENG-003|6|Yes|
|M21|ENG-003|6||
|M21|ENG-004|6|Yes|
|M21|ENG-004|6||
|M21|ENG-005|6|Yes|
|M21|ENG-005|6|Yes|
|M22|RPT-001|2||
|M22|RPT-002|2||
|M22|RPT-002|2||
|M22|RPT-002|2|Yes|
|M22|RPT-003|2|Yes|
|M22|RPT-003|2||
|M22|RPT-003|2||
|M22|RPT-004|6|Yes|
|M22|RPT-004|6||
|M22|RPT-005|2||
|M22|RPT-005|2||
|M22|RPT-006|8|Yes|
|M22|RPT-006|8|Yes|
|M23|AUD-002|2||
|M23|AUD-002|2||
|M23|AUD-003|6|Yes|
|M23|AUD-004|2||
|M23|AUD-005|7||
|M23|AUD-005|7||
|M23|AUD-005|7|Yes|
|M23|AUD-005|7||
|M23|AUD-006|7|Yes|
|M23|AUD-006|7||
|M23|AUD-006|7|Yes|
|M23|AUD-007|1||
|M23|AUD-008|8||
|M23|AUD-008|8|Yes|
|M24|NTF-002|1||
|M24|NTF-002|1|Yes|
|M24|NTF-004|1||
|M24|NTF-004|1||
|M24|NTF-005|6||


|M24|NTF-005|6||
| - | - | -: | - |
|M24|NTF-006|7||
|M24|NTF-007|7|Yes|
|M24|NTF-007|7||
|M25|WF-001|1||
|M25|WF-001|1|Yes|
|M25|WF-001|1|Yes|
|M25|WF-001|1|Yes|
|M25|WF-003|1||
|M25|WF-003|1||
|M25|WF-003|1|Yes|
|M25|WF-003|1|Yes|
|M25|WF-006|6|Yes|
|M25|WF-006|6||
|M25|WF-006|6||
|M25|WF-007|6||
|M26|INT-001|6||
|M26|INT-001|6|Yes|
|M26|INT-001|6||
|M26|INT-001|6||
|M26|INT-002|8|Yes|
|M26|INT-002|8||
|M26|INT-002|8||
|M26|INT-003|5|Yes|
|M26|INT-003|5||
|M26|INT-004|6|Yes|
|M26|INT-004|6|Yes|
|M26|INT-005|8|Yes|
|M26|INT-005|8|Yes|
|M26|INT-006|6||
|M27|MOB-001|7||
|M27|MOB-001|7|Yes|
|M29|IMP-001|2|Yes|
|M29|IMP-001|2||
|M29|IMP-001|2||
|M29|IMP-001|2|Yes|
|M29|IMP-001|2||
|M29|IMP-002|2||
|M30|FIN-001|8||
|M30|FIN-001|8|Yes|
|M30|FIN-002|8||
|M30|FIN-002|8|Yes|
|M30|FIN-002|8|Yes|
|M30|FIN-003|8|Yes|
|M30|FIN-003|8|Yes|
|M30|FIN-003|8|Yes|
|M30|FIN-003|8|Yes|
|M30|FIN-003|8|Yes|
|M30|FIN-004|8||
|M30|FIN-004|8||


|M30|FIN-004|8||
| - | - | -: | - |
|M30|FIN-004|8||
|M31|AI-001|8|Yes|
|M31|AI-002|8|Yes|
|M31|AI-003|8|Yes|
|M28|PLATFORM|1||
|M28|PLATFORM|1||
|M28|PLATFORM|1||
|M28|PLATFORM|1||
|M28|PLATFORM|1||
|M28|PLATFORM|1||

|**Sheet 8 - Roles Matrix**|||
| - | :- | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*|||
||||
|**Role**|**Code**||
|Super Admin|SA||
|Platform Support|PSUP||
|Org Owner/Admin|OA||
|HR Admin|HR||
|HR Manager|HM||
|Manager|MGR||
|Team Lead|TL||
|Employee|EMP||
|Contractor|CON||
|Candidate|CAN||
|Recruiter|REC||
|Interviewer|INT||
|Payroll Admin|PAY||
|Finance Admin|FIN||
|Compliance Officer|CMP||
|Auditor|AUD||
|IT/Asset Admin|IT||



||
| - |
||
||
|**Responsibility**|
|Tenant lifecycle approval/suspension, plans, flags, permission catalog; no standing tenant HR/PII access (break-glass only)|
|Platform health, job failures, tenant metadata support; data access only via approved break-glass|
|Tenant settings, legal entities, users, roles and grants, subscription, integrations, audit|
|Employee master and lifecycle, documents, policies, attendance/leave administration, onboarding/offboarding, letters|
|HR operations and escalated approvals for assigned departments/entities|
|Approve team leave/attendance/expense/travel, team views, goals and reviews, hiring requests|
|First-level approvals as configured, team attendance view, goal check-ins|
|Self-service: profile, punches, leave, payslips, tax, expenses, travel, assets, tickets, learning, surveys|
|Punches/timesheets, assigned learning, own documents|
|Apply to jobs, pre-joining forms, offer acceptance via token portal|
|Requisitions, jobs, candidates, pipeline, interviews, offers|
|Assigned interviews and scorecards only|
|Structures, compensation, payroll runs (maker), statutory, payslips, F&F|
|Payroll approval (checker), reimbursements, GL export, optional finance core|
|Statutory registers, retention/legal hold, DPDP requests, policy acknowledgements, POSH log|
|Read-only audit and reports within granted scope; export with separate grant|
|Asset catalog and custody, devices, IT onboarding/offboarding tasks|



||||
| - | - | - |
||||
||||
|**Default scope**|**MFA mandatory**|**Plane**|
|PLATFORM|Yes|Platform|
|PLATFORM (metadata)|Yes|Platform|
|ORGANIZATION|Yes|Tenant|
|ORGANIZATION / LEGAL\_ENTITY|Yes|Tenant|
|DEPARTMENT / LEGAL\_ENTITY|Optional|Tenant|
|TEAM (+TEAM\_TREE if granted)|Optional|Tenant|
|TEAM|Optional|Tenant|
|SELF|Optional|Tenant|
|SELF (limited)|Optional|Tenant|
|SELF (portal token)|Optional|Public portal|
|ASSIGNED / ORGANIZATION|Optional|Tenant|
|ASSIGNED|Optional|Tenant|
|LEGAL\_ENTITY|Yes|Tenant|
|LEGAL\_ENTITY|Yes|Tenant|
|ORGANIZATION|Optional|Tenant|
|Granted (read-only)|Optional|Tenant|
|ORGANIZATION|Optional|Tenant|


|**Sheet 9 - Permission Matrix (C R U D A, X = no access)**||||
| - | - | :- | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*||||
|||||
|**Module**|**Feature**|**Feature ID**||
|Tenant & Subscription Management|Self-signup|TEN-001||
|Tenant & Subscription Management|Email verification at signup|TEN-002||
|Tenant & Subscription Management|Platform tenant review & approval|TEN-003||
|Tenant & Subscription Management|Suspend / reactivate / cancel / archive tenant|TEN-004||
|Tenant & Subscription Management|Default seeding on activation|TEN-005||
|Tenant & Subscription Management|Setup wizard|TEN-006||
|Tenant & Subscription Management|Tenant settings|TEN-007||
|Tenant & Subscription Management|Tenant data export on exit|TEN-008||
|Tenant & Subscription Management|Plans and plan versions|TEN-009||
|Tenant & Subscription Management|Subscription lifecycle|TEN-010||
|Tenant & Subscription Management|Entitlement enforcement|TEN-011||
|Tenant & Subscription Management|Seat limit enforcement|TEN-012||
|Tenant & Subscription Management|Invoices and payments (manual-first)|TEN-013||
|Tenant & Subscription Management|Payment gateway & dunning|TEN-014||
|Tenant & Subscription Management|Trial and billing notifications|TEN-015||
|Tenant & Subscription Management|Platform feature flags|TEN-016||
|Identity, Authentication & Access Control|Email/password login|IAM-001||
|Identity, Authentication & Access Control|Logout|IAM-002||
|Identity, Authentication & Access Control|Cookie sessions with rotation|IAM-003||
|Identity, Authentication & Access Control|Password reset|IAM-004||
|Identity, Authentication & Access Control|Change password|IAM-005||
|Identity, Authentication & Access Control|Session management|IAM-006||
|Identity, Authentication & Access Control|MFA (TOTP + recovery codes)|IAM-007||
|Identity, Authentication & Access Control|SSO (SAML/OIDC)|IAM-008||
|Identity, Authentication & Access Control|SCIM provisioning|IAM-009||
|Identity, Authentication & Access Control|Passkeys (WebAuthn)|IAM-010||



|Identity, Authentication & Access Control|Invite user|IAM-011|
| - | - | - |
|Identity, Authentication & Access Control|Accept invitation|IAM-012|
|Identity, Authentication & Access Control|Membership lifecycle|IAM-013|
|Identity, Authentication & Access Control|Global identity, membership cap|IAM-014|
|Identity, Authentication & Access Control|Tenant switcher|IAM-015|
|Identity, Authentication & Access Control|Link user to employee|IAM-016|
|Identity, Authentication & Access Control|Permission catalog|IAM-017|
|Identity, Authentication & Access Control|System role templates|IAM-018|
|Identity, Authentication & Access Control|Custom roles|IAM-019|
|Identity, Authentication & Access Control|Role grants with scope and validity|IAM-020|
|Identity, Authentication & Access Control|Permission ceiling & no self-elevation|IAM-021|
|Identity, Authentication & Access Control|Scope resolver|IAM-022|
|Identity, Authentication & Access Control|Multi-role union|IAM-023|
|Identity, Authentication & Access Control|Field-level classification|IAM-024|
|Identity, Authentication & Access Control|Break-glass access|IAM-025|
|Identity, Authentication & Access Control|Access review report|IAM-026|
|Organization Management|Legal entities|ORG-001|
|Organization Management|Statutory registrations|ORG-002|
|Organization Management|Locations with geofence|ORG-003|
|Organization Management|Branches|ORG-004|
|Organization Management|Departments tree|ORG-005|
|Organization Management|Designations|ORG-006|
|Organization Management|Grades/bands|ORG-007|
|Organization Management|Cost centers|ORG-008|
|Organization Management|Employment types|ORG-009|
|Organization Management|Org chart|ORG-010|
|Organization Management|Master deactivation guard|ORG-011|
|Employee Management|Create employee|EMP-001|
|Employee Management|Employee profile view/edit|EMP-002|



|Employee Management|Employee list & search|EMP-003|
| - | - | - |
|Employee Management|Effective-dated assignments|EMP-004|
|Employee Management|Lifecycle events|EMP-005|
|Employee Management|Future-dated changes job|EMP-006|
|Employee Management|Manager cycle prevention|EMP-007|
|Employee Management|Status machine|EMP-008|
|Employee Management|Personal, family, education, experience|EMP-009|
|Employee Management|Bank accounts (restricted)|EMP-010|
|Employee Management|Statutory IDs (restricted)|EMP-011|
|Employee Management|Probation tracking|EMP-012|
|Employee Management|Employee directory|EMP-013|
|Employee Management|Employee export|EMP-014|
|Employee Management|Archive/soft-delete employee|EMP-015|
|Employee Management|Work anniversaries & birthdays feed|EMP-016|
|Employee Self-Service|My profile|ESS-001|
|Employee Self-Service|Profile change requests|ESS-002|
|Employee Self-Service|My requests hub|ESS-003|
|Employee Self-Service|Home dashboard (employee)|ESS-004|
|Employee Self-Service|My team view|ESS-005|
|Employee Self-Service|Privacy notice acknowledgement|ESS-006|
|Employee Self-Service|My data download|ESS-007|
|Documents Management|Upload intent & presigned PUT|DOC-001|
|Documents Management|Malware scan before availability|DOC-002|
|Documents Management|Signed download|DOC-003|
|Documents Management|Document types config|DOC-004|
|Documents Management|Employee documents|DOC-005|
|Documents Management|Expiry tracking|DOC-006|
|Documents Management|Company policies & acknowledgement|DOC-007|
|Documents Management|Letter templates & generation|DOC-008|
|Documents Management|E-sign integration|DOC-009|



|Documents Management|Company document library|DOC-010|
| - | - | - |
|Recruitment (ATS)|Manpower requisition|REC-001|
|Recruitment (ATS)|Job creation & posting|REC-002|
|Recruitment (ATS)|Careers page & apply|REC-003|
|Recruitment (ATS)|Job board distribution|REC-004|
|Recruitment (ATS)|Employee referrals|REC-005|
|Recruitment (ATS)|Candidate database|REC-006|
|Recruitment (ATS)|Configurable pipeline|REC-007|
|Recruitment (ATS)|Resume parsing|REC-008|
|Recruitment (ATS)|Candidate consent & retention|REC-009|
|Recruitment (ATS)|Interview scheduling|REC-010|
|Recruitment (ATS)|Scorecards & blind feedback|REC-011|
|Recruitment (ATS)|Offer management|REC-012|
|Recruitment (ATS)|Candidate offer portal|REC-013|
|Recruitment (ATS)|Convert to employee|REC-014|
|Recruitment (ATS)|Recruitment analytics|REC-015|
|Onboarding & Pre-joining|Onboarding templates|ONB-001|
|Onboarding & Pre-joining|Onboarding case & tasks|ONB-002|
|Onboarding & Pre-joining|Pre-joining portal|ONB-003|
|Onboarding & Pre-joining|Document verification|ONB-004|
|Onboarding & Pre-joining|Mark joined / no-show|ONB-005|
|Onboarding & Pre-joining|Buddy & induction|ONB-006|
|Offboarding & Exit|Resignation submission|OFB-001|
|Offboarding & Exit|Resignation acceptance & notice|OFB-002|
|Offboarding & Exit|Termination & retirement|OFB-003|
|Offboarding & Exit|Clearance checklist|OFB-004|
|Offboarding & Exit|Exit interview|OFB-005|
|Offboarding & Exit|Access revocation at last day|OFB-006|
|Offboarding & Exit|Relieving & experience letters|OFB-007|
|Offboarding & Exit|Rehire eligibility|OFB-008|



|Attendance & Time|Web punch (4 events)|ATT-001|
| - | - | - |
|Attendance & Time|Mobile GPS punch|ATT-002|
|Attendance & Time|Selfie punch|ATT-003|
|Attendance & Time|IP restriction|ATT-004|
|Attendance & Time|Biometric device integration|ATT-005|
|Attendance & Time|Kiosk punch|ATT-006|
|Attendance & Time|Offline mobile punch sync|ATT-007|
|Attendance & Time|Attendance day computation|ATT-008|
|Attendance & Time|Timezone & overnight work date|ATT-009|
|Attendance & Time|Attendance policies (versioned)|ATT-010|
|Attendance & Time|Nightly finaliser|ATT-011|
|Attendance & Time|Attendance views|ATT-012|
|Attendance & Time|Regularization|ATT-013|
|Attendance & Time|On-duty / WFH requests|ATT-014|
|Attendance & Time|Overtime capture & approval|ATT-015|
|Attendance & Time|Attendance period lock|ATT-016|
|Attendance & Time|Contractor timesheets|ATT-017|
|Attendance & Time|Attendance reports|ATT-018|
|Shift & Roster|Shift templates|SFT-001|
|Shift & Roster|Weekly-off patterns|SFT-002|
|Shift & Roster|Roster planning & publish|SFT-003|
|Shift & Roster|Shift swap requests|SFT-004|
|Shift & Roster|Roster coverage report|SFT-005|
|Leave Management|Leave types|LV-001|
|Leave Management|Leave policies (versioned)|LV-002|
|Leave Management|Holiday calendars|LV-003|
|Leave Management|Leave ledger & balances|LV-004|
|Leave Management|Apply leave|LV-005|
|Leave Management|Approve / reject leave|LV-006|
|Leave Management|Cancel leave|LV-007|



|Leave Management|Leave on behalf|LV-008|
| - | - | - |
|Leave Management|Accrual job|LV-009|
|Leave Management|Year-end processing|LV-010|
|Leave Management|Comp-off|LV-011|
|Leave Management|Sandwich & holiday exclusion|LV-012|
|Leave Management|Team leave calendar|LV-013|
|Leave Management|Leave reports|LV-014|
|Leave Management|Opening balance import|LV-015|
|Payroll|Salary components|PAY-001|
|Payroll|Formula DSL engine|PAY-002|
|Payroll|Salary structures|PAY-003|
|Payroll|Employee compensation & revisions|PAY-004|
|Payroll|Bulk revision upload|PAY-005|
|Payroll|Payroll calendars & periods|PAY-006|
|Payroll|Payroll inputs|PAY-007|
|Payroll|Run payroll (calculate)|PAY-008|
|Payroll|Variance review|PAY-009|
|Payroll|Maker-checker approval & lock|PAY-010|
|Payroll|Bank payment file & confirmation|PAY-011|
|Payroll|Payslips|PAY-012|
|Payroll|Off-cycle runs|PAY-013|
|Payroll|Loans & advances|PAY-014|
|Payroll|Full & final settlement|PAY-015|
|Payroll|Payroll exchange (export/import)|PAY-016|
|Payroll|GL journal export|PAY-017|
|Payroll|Payroll reports|PAY-018|
|Payroll|Parallel run & go-live gate|PAY-019|
|Statutory Compliance & Tax (India)|Statutory rule sets|STA-001|
|Statutory Compliance & Tax (India)|PF (EPF/EPS/EDLI)|STA-002|
|Statutory Compliance & Tax (India)|ESI|STA-003|



|Statutory Compliance & Tax (India)|Professional Tax|STA-004|
| - | - | - |
|Statutory Compliance & Tax (India)|Labour Welfare Fund|STA-005|
|Statutory Compliance & Tax (India)|Tax regime & declarations|STA-006|
|Statutory Compliance & Tax (India)|Proof submission & verification|STA-007|
|Statutory Compliance & Tax (India)|TDS computation|STA-008|
|Statutory Compliance & Tax (India)|Form 16 & 24Q|STA-009|
|Statutory Compliance & Tax (India)|Gratuity & bonus registers|STA-010|
|Statutory Compliance & Tax (India)|Compliance calendar|STA-011|
|Performance Management|Review cycles|PRF-001|
|Performance Management|Goals / OKRs|PRF-002|
|Performance Management|KPI library|PRF-003|
|Performance Management|Continuous check-ins & 1:1s|PRF-004|
|Performance Management|Self & manager reviews|PRF-005|
|Performance Management|360 / peer feedback|PRF-006|
|Performance Management|Calibration|PRF-007|
|Performance Management|Release & acknowledgement|PRF-008|
|Performance Management|Increment & promotion recommendations|PRF-009|
|Performance Management|PIP|PRF-010|
|Performance Management|Cycle lock & reopen|PRF-011|
|Learning Management|Course catalog|LMS-001|
|Learning Management|Assignments & auto-assign rules|LMS-002|
|Learning Management|Learner experience|LMS-003|
|Learning Management|Assessments|LMS-004|
|Learning Management|Training calendar & sessions|LMS-005|
|Learning Management|Certifications with expiry|LMS-006|
|Learning Management|Training requests & budget|LMS-007|
|Asset Management|Asset categories & catalog|AST-001|
|Asset Management|Inventory|AST-002|
|Asset Management|Asset requests|AST-003|



|Asset Management|Allocation & acknowledgement|AST-004|
| - | - | - |
|Asset Management|Return, transfer, repair, retire|AST-005|
|Asset Management|Asset reports|AST-006|
|Helpdesk|Ticket categories & SLA|HLP-001|
|Helpdesk|Raise & track tickets|HLP-002|
|Helpdesk|Agent workspace|HLP-003|
|Helpdesk|SLA timers & escalation|HLP-004|
|Helpdesk|Knowledge base|HLP-005|
|Helpdesk|CSAT & helpdesk reports|HLP-006|
|Expense Management|Expense policies|EXP-001|
|Expense Management|Submit claim with receipts|EXP-002|
|Expense Management|Approve / audit claims|EXP-003|
|Expense Management|Advances|EXP-004|
|Expense Management|Reimbursement payout|EXP-005|
|Expense Management|Expense reports|EXP-006|
|Travel Management|Travel policies|TRV-001|
|Travel Management|Travel request|TRV-002|
|Travel Management|Travel desk bookings|TRV-003|
|Travel Management|Trip settlement|TRV-004|
|Announcements, Surveys & Engagement|Announcements|ENG-001|
|Announcements, Surveys & Engagement|Polls|ENG-002|
|Announcements, Surveys & Engagement|Surveys & eNPS|ENG-003|
|Announcements, Surveys & Engagement|Recognition & badges|ENG-004|
|Announcements, Surveys & Engagement|Social feed moderation|ENG-005|
|Reports & Dashboards|Role dashboards|RPT-001|
|Reports & Dashboards|Standard report library|RPT-002|
|Reports & Dashboards|Export jobs|RPT-003|
|Reports & Dashboards|Scheduled reports|RPT-004|
|Reports & Dashboards|Headcount & attrition analytics|RPT-005|



|Reports & Dashboards|Custom report builder|RPT-006|
| - | - | - |
|Reports & Dashboards|Analytics warehouse|RPT-007|
|Audit & Compliance|Audit event writer|AUD-001|
|Audit & Compliance|Audit search|AUD-002|
|Audit & Compliance|Audit export|AUD-003|
|Audit & Compliance|Restricted data access log|AUD-004|
|Audit & Compliance|Retention & legal hold|AUD-005|
|Audit & Compliance|DPDP data-principal requests|AUD-006|
|Audit & Compliance|Login history|AUD-007|
|Audit & Compliance|POSH case log (restricted)|AUD-008|
|Notification System|Transactional outbox|NTF-001|
|Notification System|In-app notification center|NTF-002|
|Notification System|Email delivery|NTF-003|
|Notification System|Templates|NTF-004|
|Notification System|User preferences & quiet hours|NTF-005|
|Notification System|SMS & WhatsApp|NTF-006|
|Notification System|Push notifications|NTF-007|
|Notification System|Daily digests|NTF-008|
|Workflow Engine|Workflow definitions & versions|WF-001|
|Workflow Engine|Approval runtime|WF-002|
|Workflow Engine|Approval inbox|WF-003|
|Workflow Engine|Self-approval prevention & fallback|WF-004|
|Workflow Engine|SLA, reminders, escalation|WF-005|
|Workflow Engine|Delegation|WF-006|
|Workflow Engine|Email/mobile action links|WF-007|
|Workflow Engine|Visual workflow builder|WF-008|
|Integrations & API Platform|Outbound webhooks|INT-001|
|Integrations & API Platform|Public API keys|INT-002|
|Integrations & API Platform|Calendar integration|INT-003|
|Integrations & API Platform|Accounting connectors|INT-004|
|Integrations & API Platform|Slack / Teams|INT-005|
|Integrations & API Platform|Integration health|INT-006|
|Mobile App|Mobile auth & device binding|MOB-001|



|Mobile App|Mobile ESS|MOB-002|
| - | - | - |
|Mobile App|Mobile manager approvals|MOB-003|
|Mobile App|Mobile expense capture|MOB-004|
|Mobile App|Mobile security controls|MOB-005|
|Security & Data Protection|Tenant context & isolation suite|SEC-001|
|Security & Data Protection|Field encryption & blind index|SEC-002|
|Security & Data Protection|Rate limiting & WAF|SEC-003|
|Security & Data Protection|Security headers, CSP, CSRF|SEC-004|
|Security & Data Protection|Secrets & key management|SEC-005|
|Security & Data Protection|Security scanning in CI|SEC-006|
|Security & Data Protection|Penetration test & remediation|SEC-007|
|Data Import / Export|Import framework|IMP-001|
|Data Import / Export|Employee import|IMP-002|
|Data Import / Export|Other imports|IMP-003|
|Finance Core (optional)|Accounting books & COA|FIN-001|
|Finance Core (optional)|Fiscal periods & close|FIN-002|
|Finance Core (optional)|Journals with maker-checker|FIN-003|
|Finance Core (optional)|Financial reports|FIN-004|
|AI HR Assistant|Policy Q&A assistant|AI-001|
|AI HR Assistant|Resume summarisation|AI-002|
|AI HR Assistant|Review writing assistance|AI-003|



|||||||
| - | - | - | - | - | - |
|||||||
|||||||
|**Permission key**|**Super Admin**|**Org Owner**|**HR Admin**|**Manager**|**Employee**|
|tenant.signup|R|X|X|X|X|
|tenant.signup|R|X|X|X|X|
|platform.tenant.approve|CRUDA|X|X|X|X|
|platform.tenant.manage|CRUDA|X|X|X|X|
|tenant.seed|X|X|X|X|X|
|tenant.setup.manage|X|CRUD|X|X|X|
|tenant.settings.manage|X|CRUD|X|X|X|
|tenant.export.request|X|CRUD|X|X|X|
|platform.plan.manage|CRUDA|X|X|X|X|
|tenant.subscription.read|CRUD|CRUD|X|X|X|
|-|X|X|X|X|X|
|-|X|X|X|X|X|
|platform.billing.manage|CRUDA|R|X|X|X|
|tenant.billing.pay|CRUDA|RU|X|X|X|
|-|X|X|X|X|X|
|platform.flags.manage|CRUDA|X|X|X|X|
|auth.login|RU|RU|RU|RU|RU|
|auth.logout|RU|RU|RU|RU|RU|
|-|X|X|X|X|X|
|auth.password.reset|R|X|X|X|X|
|auth.password.change|RU|RU|RU|RU|RU|
|auth.sessions.manage|RU|RUD|RU|RU|RU|
|auth.mfa.manage|RU|RU|RU|RU|RU|
|auth.sso.manage|X|CRUD|X|X|X|
|auth.scim.manage|X|CRUD|X|X|X|
|auth.passkey.manage|RU|RU|RU|RU|RU|



|access.invitation.create|X|CRUD|CR|X|X|
| - | - | - | - | - | - |
|access.invitation.accept|R|X|X|X|X|
|access.membership.manage|X|CRUD|CR|X|X|
|-|X|X|X|X|X|
|access.tenant.switch|RU|RU|RU|RU|RU|
|access.membership.link|X|CRUD|CRU|X|X|
|access.catalog.read|CRUDA|R|R|X|X|
|access.role.read|X|CRUD|CR|X|X|
|access.role.manage|X|CRUD|CR|X|X|
|access.grant.manage|X|CRUD|CR|X|X|
|-|X|X|X|X|X|
|-|X|X|X|X|X|
|-|X|X|X|X|X|
|employee.restricted.read|X|X|X|X|X|
|platform.breakglass.request|CRUDA|X|X|X|X|
|access.review.read|X|R|R|X|X|
|org.legal\_entity.manage|X|CRUD|CRU|R|R|
|org.legal\_entity.statutory|X|CRUD|CRUD|R|R|
|org.location.manage|X|CRUD|CRUD|R|R|
|org.branch.manage|X|CRUD|CRUD|R|R|
|org.department.manage|X|CRUD|CRUD|R|R|
|org.designation.manage|X|CRUD|CRUD|R|R|
|org.grade.manage|X|CRUD|CRUD|R|R|
|org.cost\_center.manage|X|CRUD|CRUD|R|R|
|org.employment\_type.manage|X|CRUD|CRUD|R|R|
|org.chart.read|X|R|R|R|R|
|-|X|X|X|X|X|
|employee.create|X|CRUD|CRUD|R|X|
|employee.update|X|CRUD|CRUD|R|R|



|employee.read|X|CRUD|CRUD|R|X|
| - | - | - | - | - | - |
|employee.assignment.manage|X|CRUD|CRUD|R|X|
|employee.event.manage|X|CRUD|CRUD|R|X|
|-|X|X|X|X|X|
|-|X|X|X|X|X|
|-|X|X|X|X|X|
|employee.personal.manage|X|CRUD|CRUD|R|RU|
|employee.bank.manage|X|R|CRU|X|R|
|employee.statutory.manage|X|R|CRU|X|R|
|employee.probation.manage|X|CRUD|CRUD|RA|X|
|directory.read|X|R|R|R|R|
|employee.export|X|CRUD|CRUD|R|X|
|employee.archive|X|CRUD|CRUD|R|X|
|engage.celebrations.read|X|R|R|R|R|
|me.profile.update|X|R|RU|X|RU|
|me.profile\_change.create|X|RA|CRUDA|RA|CRU|
|me.requests.read|X|R|R|R|R|
|me.dashboard.read|X|R|R|R|R|
|team.read|X|R|R|R|R|
|me.privacy.ack|X|R|R|R|R|
|me.data.export|X|R|R|R|R|
|files.upload|X|CRUD|CRUD|CR|CR|
|-|X|X|X|X|X|
|files.download|X|CRUD|CRUD|CR|CR|
|document.type.manage|X|CRUD|CRUD|R|R|
|document.employee.manage|X|CRUD|CRUD|R|CR|
|document.expiry.read|X|X|R|X|X|
|document.policy.manage|X|CRUD|CRUD|R|RU|
|document.letter.manage|X|CRUD|CRUD|R|X|
|document.esign.send|X|CRUD|CRUD|R|X|



|document.library.read|X|CRUD|CRUD|R|R|
| - | - | - | - | - | - |
|recruitment.requisition.manage|X|CRUD|CRUD|CR|X|
|recruitment.job.manage|X|CRUD|CRUD|R|X|
|careers.apply|R|X|X|X|X|
|recruitment.job.distribute|X|CRUD|CRUD|R|X|
|recruitment.referral.create|X|CRUD|CRUD|R|CR|
|recruitment.candidate.manage|X|CRUD|CRUD|R|X|
|recruitment.application.move|X|CRUD|CRUD|RU|X|
|recruitment.candidate.parse|X|CRUD|CRUD|R|X|
|recruitment.candidate.retention|X|X|X|X|X|
|recruitment.interview.manage|X|R|CRUD|RU|X|
|recruitment.feedback.submit|X|R|CRUD|RU|X|
|recruitment.offer.manage|X|CRUD|CRUD|R|X|
|offer.respond|X|X|R|X|X|
|-|X|X|X|X|X|
|reports.recruitment.read|X|R|R|R|X|
|onboarding.template.manage|X|CRUD|CRUD|R|X|
|onboarding.case.manage|X|CRUD|CRUD|RU|RU|
|portal.prejoin.submit|X|X|R|X|X|
|onboarding.document.verify|X|CRUD|CRUD|R|X|
|onboarding.case.join|X|CRUD|CRUD|R|X|
|onboarding.induction.manage|X|CRUD|CRUD|CRU|X|
|exit.resignation.create|X|RA|CRUDA|RA|CRU|
|exit.resignation.decide|X|A|CRUDA|A|R|
|exit.termination.create|X|CRUD|CRUD|R|X|
|exit.clearance.manage|X|CRUD|CRUD|RU|X|
|exit.interview.submit|X|CRUD|CRUD|R|CU|
|-|X|X|X|X|X|
|exit.letter.issue|X|CRUD|CRUD|R|X|
|exit.rehire.flag|X|R|CRU|X|R|



|attendance.punch.create|X|X|R|R|C|
| - | - | - | - | - | - |
|attendance.punch.create|X|X|R|R|C|
|attendance.punch.create|X|X|R|R|C|
|-|X|X|X|X|X|
|attendance.device.manage|X|CRUD|CRU|X|X|
|attendance.punch.kiosk|X|X|R|R|C|
|attendance.punch.create|X|X|R|R|C|
|-|X|X|X|X|X|
|-|X|X|X|X|X|
|attendance.policy.manage|X|CRUD|CRUD|R|X|
|-|X|X|X|X|X|
|attendance.day.read|X|R|RU|R|R|
|attendance.regularization.create|X|RA|CRUDA|RA|CRU|
|attendance.onduty.create|X|RA|CRUDA|RA|CRU|
|attendance.overtime.manage|X|RA|CRUDA|RA|CRU|
|attendance.period.lock|X|CRUD|CRUD|R|X|
|attendance.timesheet.manage|X|RA|CRUDA|RA|CRU|
|reports.attendance.read|X|R|R|R|X|
|shift.template.manage|X|CRUD|CRUD|R|X|
|shift.weekoff.manage|X|CRUD|CRUD|R|X|
|shift.roster.manage|X|CRUD|CRUD|CRU|X|
|shift.swap.create|X|RA|CRUDA|RA|CRU|
|reports.roster.read|X|R|R|R|X|
|leave.type.manage|X|CRUD|CRUD|R|X|
|leave.policy.manage|X|CRUD|CRUD|R|X|
|leave.holiday.manage|X|CRUD|CRUD|R|R|
|leave.balance.read|X|R|RU|R|R|
|leave.request.create|X|RA|CRUDA|RA|CRU|
|leave.request.approve|X|A|A|A|R|
|leave.request.cancel|X|RA|CRUDA|RA|CRU|



|leave.request.on\_behalf|X|CRUD|CRUD|R|X|
| - | - | - | - | - | - |
|-|X|X|X|X|X|
|leave.yearend.run|X|CRUD|CRUD|R|X|
|leave.compoff.manage|X|RA|CRUDA|RA|CRU|
|-|X|X|X|X|X|
|leave.calendar.read|X|R|R|R|R|
|reports.leave.read|X|R|R|R|X|
|leave.balance.import|X|CRUD|CRUD|R|X|
|payroll.component.manage|X|R|R|X|X|
|-|X|X|X|X|X|
|payroll.structure.manage|X|R|R|X|X|
|payroll.compensation.manage|X|R|R|X|X|
|payroll.compensation.import|X|R|R|X|X|
|payroll.calendar.manage|X|R|R|X|X|
|payroll.input.manage|X|R|CR|C|X|
|payroll.run.calculate|X|R|R|X|X|
|payroll.run.review|X|R|R|X|X|
|payroll.run.approve|X|A|X|X|X|
|payroll.payment.manage|X|A|X|X|X|
|payroll.payslip.read|X|R|R|R|R|
|payroll.run.offcycle|X|R|R|X|X|
|payroll.loan.manage|X|RA|CRUDA|RA|CRU|
|payroll.fnf.manage|X|A|X|X|X|
|payroll.exchange.manage|X|R|R|X|X|
|payroll.journal.export|X|A|X|X|X|
|reports.payroll.read|X|R|R|X|X|
|payroll.parallel.run|X|R|R|X|X|
|statutory.ruleset.manage|CRUD|R|X|X|X|
|statutory.pf.manage|X|R|X|X|X|
|statutory.esi.manage|X|R|X|X|X|



|statutory.pt.manage|X|R|X|X|X|
| - | - | - | - | - | - |
|statutory.lwf.manage|X|R|X|X|X|
|tax.declaration.manage|X|RA|CRUDA|RA|CRU|
|tax.proof.manage|X|RA|CRUDA|RA|CRU|
|-|X|X|X|X|X|
|tax.form16.manage|X|R|X|X|R|
|statutory.registers.read|X|R|X|X|X|
|statutory.calendar.read|X|R|X|X|X|
|performance.cycle.manage|X|CRUD|CRUD|R|R|
|performance.goal.manage|X|CRUD|CRUD|CRUA|CRU|
|performance.kpi.manage|X|CRUD|CRUD|CRUA|R|
|performance.checkin.manage|X|CRUD|CRUD|CRUA|CRU|
|performance.review.submit|X|CRUD|CRUD|CRUA|CRU|
|performance.feedback.manage|X|CRUD|CRUD|CRUA|CRU|
|performance.calibration.manage|X|CRUD|CRUD|R|X|
|performance.release.manage|X|CRUD|CRUD|CRUA|CRU|
|performance.recommendation.manage|X|CRUD|CRUD|CRUA|CRU|
|performance.pip.manage|X|CRUD|CRUD|CRUA|R|
|performance.cycle.lock|X|CRUD|CRUD|CRUA|CRU|
|learning.course.manage|X|CRUD|CRUD|CR|RU|
|learning.assignment.manage|X|CRUD|CRUD|CR|RU|
|learning.my.read|X|R|R|R|RU|
|learning.assessment.manage|X|CRUD|CRUD|CR|RU|
|learning.session.manage|X|CRUD|CRUD|CR|RU|
|learning.certification.manage|X|CRUD|CRUD|CR|CRU|
|learning.request.create|X|RA|CRUDA|RA|CRU|
|asset.category.manage|X|CRUD|CRU|RA|RU|
|asset.item.manage|X|CRUD|CRU|RA|RU|
|asset.request.create|X|RA|CRUDA|RA|CRU|



|asset.allocation.manage|X|CRUD|CRU|RA|RU|
| - | - | - | - | - | - |
|asset.allocation.return|X|CRUD|CRU|RA|RU|
|reports.asset.read|X|R|R|R|X|
|helpdesk.category.manage|X|CRUD|CRUD|R|R|
|helpdesk.ticket.create|X|R|CRUD|X|CRU|
|helpdesk.ticket.manage|X|R|CRUD|X|CRU|
|-|X|X|X|X|X|
|helpdesk.kb.manage|X|CRUD|CRUD|R|R|
|reports.helpdesk.read|X|R|R|R|X|
|expense.policy.manage|X|CRUD|CRUD|R|R|
|expense.claim.create|X|RA|R|RA|CRUD|
|expense.claim.approve|X|RA|R|RA|CRUD|
|expense.advance.manage|X|RA|R|RA|CRUD|
|expense.payout.manage|X|RA|R|RA|R|
|reports.expense.read|X|R|R|R|X|
|travel.policy.manage|X|CRUD|CRUD|R|R|
|travel.request.create|X|RA|CRUDA|RA|CRU|
|travel.booking.manage|X|CRUD|CRUD|R|X|
|travel.settlement.manage|X|RA|R|RA|CRUD|
|engage.announcement.manage|X|CRUD|CRUD|R|R|
|engage.poll.manage|X|CRUD|CRUD|R|R|
|engage.survey.manage|X|CRUD|CRUD|R|R|
|engage.recognition.create|X|CRUD|CRUD|R|CR|
|engage.moderation.manage|X|CRUD|CRUD|R|R|
|dashboard.read|X|R|R|R|R|
|reports.read|X|R|R|R|X|
|reports.export|X|R|R|R|X|
|reports.schedule.manage|X|R|R|R|X|
|reports.headcount.read|X|R|R|R|X|



|reports.builder.manage|X|R|R|X|X|
| - | - | - | - | - | - |
|-|X|X|X|X|X|
|-|X|X|X|X|X|
|audit.read|X|R|R|X|X|
|audit.export|X|R|R|X|X|
|audit.access\_log.read|X|X|X|X|X|
|compliance.retention.manage|X|RU|R|X|X|
|compliance.privacy\_request.manage|X|R|R|X|C|
|audit.login.read|X|R|R|X|X|
|compliance.posh.manage|X|X|X|X|X|
|-|X|X|X|X|X|
|notification.read|X|R|R|R|RU|
|-|X|X|X|X|X|
|notification.template.manage|X|CRUD|CRU|X|X|
|notification.preference.manage|X|R|R|R|RU|
|notification.channel.manage|X|CRUD|X|X|X|
|-|X|X|X|X|X|
|-|X|X|X|X|X|
|workflow.definition.manage|X|CRUD|CRU|X|X|
|-|X|X|X|X|X|
|workflow.task.decide|X|A|A|A|R|
|-|X|X|X|X|X|
|-|X|X|X|X|X|
|workflow.delegation.manage|X|R|CRUD|CRUD|R|
|-|X|X|X|X|X|
|workflow.definition.manage|X|CRUD|CRU|X|X|
|integration.webhook.manage|X|CRUD|X|X|X|
|integration.apikey.manage|X|CRUD|X|X|X|
|integration.calendar.manage|X|CRUD|X|X|X|
|integration.accounting.manage|X|CRUD|X|X|X|
|integration.chat.manage|X|CRUD|X|X|X|
|integration.health.read|X|CRUD|X|X|X|
|auth.mobile.login|RU|RU|RU|RU|RU|



|me.mobile|X|R|R|R|CRU|
| - | - | - | - | - | - |
|workflow.task.decide|X|A|A|A|R|
|expense.claim.create|X|RA|R|RA|CRUD|
|-|X|X|X|X|X|
|-|X|X|X|X|X|
|-|X|X|X|X|X|
|-|X|X|X|X|X|
|-|X|X|X|X|X|
|-|X|X|X|X|X|
|-|X|X|X|X|X|
|-|X|X|X|X|X|
|import.batch.manage|X|CRU|CRU|X|X|
|import.employee|X|CRU|CRU|X|X|
|import.other|X|CRU|CRU|X|X|
|finance.coa.manage|X|R|X|X|X|
|finance.period.manage|X|R|X|X|X|
|finance.journal.manage|X|R|X|X|X|
|finance.report.read|X|R|X|X|X|
|ai.assistant.use|X|R|R|R|R|
|ai.resume.summarise|X|CRUD|CRUD|R|X|
|ai.review.assist|X|CRUD|CRUD|CRUA|CRU|



|||||||
| - | - | - | - | - | - |
|||||||
|||||||
|**Recruiter**|**Payroll Admin**|**HR Manager**|**Team Lead**|**Interviewer**|**Finance Admin**|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|RU|RU|RU|RU|RU|RU|
|RU|RU|RU|RU|RU|RU|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|RU|RU|RU|RU|RU|RU|
|RU|RU|RU|RU|RU|RU|
|RU|RU|RU|RU|RU|RU|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|RU|RU|RU|RU|RU|RU|



|X|X|X|X|X|X|
| - | - | - | - | - | - |
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|RU|RU|RU|RU|RU|RU|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|R|R|R|R|X|R|
|R|CRU|R|R|X|R|
|R|R|R|R|X|R|
|R|R|R|R|X|R|
|R|R|R|R|X|R|
|R|R|R|R|X|R|
|R|R|R|R|X|R|
|R|R|R|R|X|CRU|
|R|R|R|R|X|R|
|R|R|R|R|R|R|
|X|X|X|X|X|X|
|X|R|CRU|R|X|X|
|X|R|CRU|R|X|X|



|X|R|CRU|R|X|X|
| - | - | - | - | - | - |
|X|R|CRU|R|X|X|
|X|R|CRU|R|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|R|CRU|R|X|X|
|X|RU|X|X|X|X|
|X|RU|X|X|X|X|
|X|R|CRU|R|X|X|
|R|R|R|R|R|R|
|X|R|CRU|R|X|X|
|X|R|CRU|R|X|X|
|R|R|R|R|R|R|
|X|X|X|X|X|X|
|X|X|RA|RA|X|X|
|X|X|R|R|X|X|
|X|X|R|R|X|X|
|X|X|R|R|X|X|
|X|X|R|R|X|X|
|X|X|R|R|X|X|
|CR|CR|CRU|CR|X|CR|
|X|X|X|X|X|X|
|CR|CR|CRU|CR|X|CR|
|R|R|R|R|X|R|
|X|R|CRU|R|X|X|
|X|X|X|X|X|X|
|X|X|CRU|R|X|X|
|X|R|CRU|R|X|X|
|X|R|CRU|R|X|X|



|X|X|CRU|R|X|X|
| - | - | - | - | - | - |
|CRUD|X|CRU|X|X|X|
|CRUD|X|CRU|X|X|X|
|X|X|X|X|X|X|
|CRUD|X|CRU|X|X|X|
|CRUD|X|CRU|X|X|X|
|CRUD|X|CRU|X|R|X|
|CRUD|X|CRU|X|X|X|
|CRUD|X|CRU|X|X|X|
|X|X|X|X|X|X|
|CRUD|X|X|X|RU|X|
|CRUD|X|X|X|RU|X|
|CRUD|R|CRU|X|X|R|
|R|X|X|X|X|X|
|X|X|X|X|X|X|
|R|R|R|R|X|R|
|X|R|CRU|R|X|X|
|X|R|CRU|R|X|X|
|R|X|X|X|X|X|
|X|R|CRU|R|X|X|
|X|R|CRU|R|X|X|
|X|R|CRU|R|X|X|
|X|X|RA|RA|X|X|
|A|A|A|A|X|A|
|X|R|CRU|R|X|X|
|X|R|CRU|R|X|RU|
|X|R|CRU|R|X|X|
|X|X|X|X|X|X|
|X|R|CRU|R|X|X|
|X|RU|X|X|X|X|



|X|X|R|R|X|X|
| - | - | - | - | - | - |
|X|X|R|R|X|X|
|X|X|R|R|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|R|R|X|X|
|X|X|R|R|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|R|RU|R|X|X|
|X|X|X|X|X|X|
|X|X|R|R|X|X|
|X|X|RA|RA|X|X|
|X|X|RA|RA|X|X|
|X|X|RA|RA|X|X|
|X|RU|RU|R|X|X|
|X|X|RA|RA|X|X|
|R|R|R|R|X|R|
|X|R|RU|R|X|X|
|X|R|RU|R|X|X|
|X|R|RU|R|X|X|
|X|X|RA|RA|X|X|
|R|R|R|R|X|R|
|X|R|RU|R|X|X|
|X|R|RU|R|X|X|
|X|R|RU|R|X|X|
|X|X|R|R|X|X|
|X|X|RA|RA|X|X|
|A|A|A|A|X|A|
|X|X|RA|RA|X|X|



|X|R|RU|R|X|X|
| - | - | - | - | - | - |
|X|X|X|X|X|X|
|X|R|RU|R|X|X|
|X|X|RA|RA|X|X|
|X|X|X|X|X|X|
|X|X|R|R|X|X|
|R|R|R|R|X|R|
|X|R|RU|R|X|X|
|X|CRUD|X|X|X|RA|
|X|X|X|X|X|X|
|X|CRUD|X|X|X|RA|
|X|CRUD|X|X|X|RA|
|X|CRUD|X|X|X|RA|
|X|CRUD|X|X|X|RA|
|X|CRUD|X|X|X|RA|
|X|CRUD|X|X|X|RA|
|X|CRUD|X|X|X|RA|
|X|CRU|X|X|X|RA|
|X|CRU|X|X|X|RA|
|X|CRU|R|R|X|X|
|X|CRUD|X|X|X|RA|
|X|CRUDA|RA|RA|X|X|
|X|CRU|X|X|X|RA|
|X|CRUD|X|X|X|RA|
|X|CRU|X|X|X|CRU|
|X|R|R|X|X|R|
|X|CRUD|X|X|X|RA|
|X|CRUD|X|X|X|R|
|X|CRUD|X|X|X|R|
|X|CRUD|X|X|X|R|



|X|CRUD|X|X|X|R|
| - | - | - | - | - | - |
|X|CRUD|X|X|X|R|
|X|CRUA|RA|RA|X|X|
|X|CRUA|RA|RA|X|X|
|X|R|X|X|X|X|
|X|CRUD|X|X|X|R|
|X|CRUD|X|X|X|R|
|X|CRUD|X|X|X|R|
|X|X|CRU|CRU|X|X|
|X|X|CRU|CRU|X|X|
|X|X|CRU|CRU|X|X|
|X|X|CRU|CRU|X|X|
|X|X|CRU|CRU|X|X|
|X|X|CRU|CRU|X|X|
|X|X|CRU|X|X|X|
|X|X|CRU|CRU|X|X|
|X|R|CRU|CRU|X|X|
|X|X|CRU|CRU|X|X|
|X|X|CRU|CRU|X|X|
|X|X|CRU|R|X|X|
|X|X|CRU|R|X|X|
|X|X|R|R|X|X|
|X|X|CRU|R|X|X|
|X|X|CRU|R|X|X|
|X|X|CRU|R|X|X|
|X|X|RA|RA|X|X|
|X|X|X|X|X|R|
|X|X|X|X|X|R|
|X|X|RA|RA|X|X|



|X|X|X|X|X|R|
| - | - | - | - | - | - |
|X|X|X|X|X|R|
|R|R|R|R|X|R|
|R|R|R|R|X|R|
|X|RU|RU|X|X|RU|
|X|RU|RU|X|X|RU|
|X|X|X|X|X|X|
|X|X|CRU|R|X|X|
|R|R|R|R|X|R|
|R|R|R|R|X|CRUD|
|X|R|X|RA|X|RUA|
|X|R|X|RA|X|RUA|
|X|R|X|RA|X|RUA|
|X|R|X|RA|X|RUA|
|R|R|R|R|X|R|
|R|R|R|R|X|CRUD|
|X|X|RA|RA|X|RA|
|X|R|CRU|R|X|RU|
|X|R|X|RA|X|RUA|
|X|X|CRU|R|X|X|
|X|X|CRU|R|X|X|
|X|X|CRU|R|X|X|
|X|X|CRU|R|X|X|
|X|X|CRU|R|X|X|
|R|R|R|R|X|R|
|R|R|R|R|X|R|
|R|R|R|R|X|R|
|R|R|R|R|X|R|
|R|R|R|R|X|R|



|R|R|R|X|X|R|
| - | - | - | - | - | - |
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|R|R|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|R|R|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|A|A|A|A|X|A|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|R|R|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|CRU|X|X|X|X|X|
|X|X|X|X|X|CRU|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|RU|RU|RU|RU|RU|RU|



|X|X|R|R|X|X|
| - | - | - | - | - | - |
|A|A|A|A|X|A|
|X|R|X|RA|X|RUA|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|CRU|X|X|X|X|
|X|X|X|X|X|CRUDA|
|X|X|X|X|X|CRUDA|
|X|X|X|X|X|CRUDA|
|X|X|X|X|X|CRUDA|
|X|X|R|R|X|X|
|CRUD|X|CRU|X|X|X|
|X|X|CRU|CRU|X|X|



|||||||
| - | - | - | - | - | - |
|||||||
|||||||
|**Compliance Officer**|**Auditor**|**IT/Asset Admin**|**Contractor**|**Candidate**|**Platform Support**|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|R|
|X|X|X|X|X|R|
|X|X|X|X|X|X|
|R|R|X|X|X|X|
|R|R|X|X|X|X|
|R|R|X|X|X|X|
|X|X|X|X|X|R|
|R|R|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|R|
|X|X|X|X|X|R|
|X|X|X|X|X|X|
|X|X|X|X|X|R|
|RU|RU|RU|RU|X|RU|
|RU|RU|RU|RU|X|RU|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|RU|RU|RU|RU|X|RU|
|RU|RU|RU|RU|X|RU|
|RU|RU|RU|RU|X|RU|
|R|R|X|X|X|X|
|R|R|X|X|X|X|
|RU|RU|RU|RU|X|RU|



|R|R|CR|X|X|X|
| - | - | - | - | - | - |
|X|X|X|X|X|X|
|R|R|CR|X|X|X|
|X|X|X|X|X|X|
|RU|RU|RU|RU|X|RU|
|R|R|CR|X|X|X|
|X|R|X|X|X|R|
|R|R|CR|X|X|X|
|R|R|CR|X|X|X|
|R|R|CR|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|R|
|R|R|X|X|X|X|
|R|R|R|R|X|X|
|R|R|R|R|X|X|
|R|R|R|R|X|X|
|R|R|R|R|X|X|
|R|R|R|R|X|X|
|R|R|R|R|X|X|
|R|R|R|R|X|X|
|R|R|R|R|X|X|
|R|R|R|R|X|X|
|R|R|R|R|X|X|
|X|X|X|X|X|X|
|R|R|X|X|X|X|
|R|R|X|X|X|X|



|R|R|X|X|X|X|
| - | - | - | - | - | - |
|R|R|X|X|X|X|
|R|R|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|R|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|R|R|X|X|X|X|
|R|R|R|R|X|X|
|R|R|X|X|X|X|
|R|R|X|X|X|X|
|R|R|R|R|X|X|
|X|R|X|RU|X|X|
|X|R|X|CRU|X|X|
|X|R|X|R|X|X|
|X|R|X|R|X|X|
|X|R|X|R|X|X|
|X|R|X|R|X|X|
|X|R|X|R|X|X|
|R|R|CR|CR|CR|X|
|X|X|X|X|X|X|
|R|R|CR|CR|CR|X|
|R|R|R|R|X|X|
|R|R|X|X|X|X|
|X|X|X|X|X|X|
|R|R|X|R|X|X|
|R|R|X|X|X|X|
|R|R|X|X|X|X|



|R|R|X|R|X|X|
| - | - | - | - | - | - |
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|X|X|X|CR|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|R|X|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|X|X|X|CRU|X|
|X|X|X|X|X|X|
|R|R|R|X|X|X|
|R|R|X|X|X|X|
|R|R|RU|X|X|X|
|X|X|X|X|CRU|X|
|R|R|X|X|X|X|
|R|R|X|X|X|X|
|R|R|X|X|X|X|
|X|R|X|CRU|X|X|
|X|R|A|X|X|X|
|R|R|X|X|X|X|
|R|R|RU|X|X|X|
|R|R|X|X|X|X|
|X|X|X|X|X|X|
|R|R|X|X|X|X|
|X|R|X|X|X|X|



|X|R|X|C|X|X|
| - | - | - | - | - | - |
|X|R|X|C|X|X|
|X|R|X|C|X|X|
|X|X|X|X|X|X|
|X|R|CRU|X|X|X|
|X|R|X|C|X|X|
|X|R|X|C|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|R|X|X|X|X|
|X|X|X|X|X|X|
|X|R|X|R|X|X|
|X|R|X|CRU|X|X|
|X|R|X|CRU|X|X|
|X|R|X|CRU|X|X|
|X|R|X|X|X|X|
|X|R|X|CRU|X|X|
|R|R|R|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|CRU|X|X|
|R|R|R|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|R|X|X|
|X|R|X|CRU|X|X|
|X|R|A|X|X|X|
|X|R|X|CRU|X|X|



|X|R|X|X|X|X|
| - | - | - | - | - | - |
|X|X|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|CRU|X|X|
|X|X|X|X|X|X|
|X|R|X|R|X|X|
|R|R|R|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|X|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|R|X|X|
|X|R|X|X|X|X|
|X|R|X|CRU|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|R|R|X|X|X|X|
|X|R|X|X|X|X|
|R|R|X|X|X|X|
|R|R|X|X|X|X|
|R|R|X|X|X|X|



|R|R|X|X|X|X|
| - | - | - | - | - | - |
|R|R|X|X|X|X|
|X|R|X|CRU|X|X|
|X|R|X|CRU|X|X|
|X|X|X|X|X|X|
|R|R|X|X|X|X|
|R|R|X|X|X|X|
|R|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|R|R|X|RU|X|X|
|R|R|X|RU|X|X|
|X|R|X|RU|X|X|
|R|R|X|RU|X|X|
|R|R|X|RU|X|X|
|R|R|X|RU|X|X|
|X|R|X|CRU|X|X|
|X|R|CRUD|X|X|X|
|X|R|CRUD|X|X|X|
|X|R|CRUA|CRU|X|X|



|X|R|CRUD|X|X|X|
| - | - | - | - | - | - |
|X|R|CRUD|X|X|X|
|R|R|R|X|X|X|
|R|R|CRU|R|X|X|
|R|R|RU|CRU|X|X|
|R|R|RU|CRU|X|X|
|X|X|X|X|X|X|
|R|R|X|R|X|X|
|R|R|R|X|X|X|
|R|R|R|R|X|X|
|X|R|X|CRU|X|X|
|X|R|X|CRU|X|X|
|X|R|X|CRU|X|X|
|X|R|X|CRU|X|X|
|R|R|R|X|X|X|
|R|R|R|R|X|X|
|X|R|X|CRU|X|X|
|R|R|X|X|X|X|
|X|R|X|CRU|X|X|
|R|R|X|R|X|X|
|R|R|X|R|X|X|
|R|R|X|R|X|X|
|R|R|X|R|X|X|
|R|R|X|R|X|X|
|R|R|R|X|X|X|
|R|R|R|X|X|X|
|R|R|R|X|X|X|
|R|R|R|X|X|X|
|R|R|R|X|X|X|



|R|R|R|X|X|X|
| - | - | - | - | - | - |
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|R|R|X|X|X|X|
|R|R|X|X|X|X|
|R|R|X|X|X|X|
|CRU|R|X|X|X|X|
|CRUA|R|X|X|X|X|
|R|R|X|X|X|X|
|CRU|X|X|X|X|X|
|X|X|X|X|X|X|
|X|R|X|R|X|X|
|X|X|X|X|X|X|
|R|R|X|X|X|X|
|X|R|X|R|X|X|
|X|R|CRU|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|R|X|X|X|X|
|X|X|X|X|X|X|
|X|R|A|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|R|X|R|X|X|
|X|X|X|X|X|X|
|X|R|X|X|X|X|
|X|R|CRU|X|X|X|
|X|R|CRU|X|X|X|
|X|R|CRU|X|X|X|
|X|R|CRU|X|X|X|
|X|R|CRU|X|X|X|
|X|R|CRU|X|X|X|
|RU|RU|RU|RU|X|RU|



|X|R|X|R|X|X|
| - | - | - | - | - | - |
|X|R|A|X|X|X|
|X|R|X|CRU|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|X|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|CRU|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|
|X|R|X|R|X|X|
|X|R|X|X|X|X|
|X|R|X|X|X|X|



||
| - |
||
||
|**Notes**|
|Public endpoint|
|Public endpoint|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|Public endpoint|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|



|Row scope per role default; restricted fields need \*.restricted.read|
| - |
|Public endpoint|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|System-enforced (no interactive role)|
|System-enforced (no interactive role)|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|



|Row scope per role default; restricted fields need \*.restricted.read|
| - |
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|System-enforced (no interactive role)|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|



|Row scope per role default; restricted fields need \*.restricted.read|
| - |
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Public endpoint|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|



|Row scope per role default; restricted fields need \*.restricted.read|
| - |
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|



|Row scope per role default; restricted fields need \*.restricted.read|
| - |
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|



|Row scope per role default; restricted fields need \*.restricted.read|
| - |
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|



|Row scope per role default; restricted fields need \*.restricted.read|
| - |
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|



|Row scope per role default; restricted fields need \*.restricted.read|
| - |
|System-enforced (no interactive role)|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|



|Row scope per role default; restricted fields need \*.restricted.read|
| - |
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|System-enforced (no interactive role)|
|System-enforced (no interactive role)|
|System-enforced (no interactive role)|
|System-enforced (no interactive role)|
|System-enforced (no interactive role)|
|System-enforced (no interactive role)|
|System-enforced (no interactive role)|
|System-enforced (no interactive role)|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|
|Row scope per role default; restricted fields need \*.restricted.read|


|**Sheet 10 - Reports**||
| - | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*||
|||
|**Report Name**||
|Headcount (point-in-time)||
|Joiners and leavers||
|Attrition rate||
|Employee master export||
|Probation due||
|Span of control||
|Tenure bands||
|Diversity (opt-in fields)||
|Org chart export||
|Missing mandatory documents||
|Expiring documents||
|Policy acknowledgement status||
|Letters issued||
|Daily muster roll||
|Monthly attendance register||
|Late arrival / early exit||
|Absenteeism||
|Overtime report||
|Regularization summary||
|Geo-punch map||
|Biometric sync log||
|Roster coverage||
|Leave balance register||
|Leave availed||
|Leave liability||
|LOP report for payroll||
|Team leave calendar||
|Payroll register||
|Salary sheet||
|Payroll variance||
|Bank advice||
|CTC by department / cost center||
|Arrears report||
|Loan register||
|F&F statements||
|Payroll exchange reconciliation||
|PF register / ECR summary||
|ESI register||
|Professional Tax register||
|LWF register||
|TDS computation sheet||
|24Q quarterly data||
|Declaration vs proof variance||
|Gratuity and bonus registers||
|Recruitment funnel||



|Time to hire / time to fill|
| - |
|Source effectiveness|
|Offer acceptance rate|
|Interviewer load|
|Onboarding progress|
|Exit reasons and regretted attrition|
|Pending clearances|
|Cycle completion|
|Rating distribution and 9-box|
|Training completion and overdue|
|Certification expiry|
|Asset register and unreturned assets|
|Helpdesk SLA and CSAT|
|Expense by category / policy violations|
|Outstanding advances|
|Travel spend|
|Survey results and eNPS trend|
|Audit activity and restricted access log|
|Access review (roles and grants)|



||||
| - | - | - |
||||
||||
|**Description**|**User**|**Module**|
|Active employees at a date by entity, location, department, grade, type|HR, HM, OA, AUD|M22|
|Hires and exits in a period with reasons|HR, HM, OA|M04|
|Monthly/annualised voluntary and involuntary attrition %|HR, OA|M22|
|Scoped employee list with field-class filtering|HR, AUD|M04|
|Employees with probation ending in N days|HR, MGR|M04|
|Direct reports per manager|HR, OA|M04|
|Headcount by tenure band|HR, OA|M04|
|Gender and other opt-in distributions with small-group suppression|HR, OA|M04|
|Reporting tree as PDF/CSV|HR, OA|M03|
|Employees missing required document types|HR, CMP|M06|
|Documents expiring in N days|HR, CMP|M06|
|Acknowledged vs pending per policy version|HR, CMP|M06|
|Letters generated by type and period|HR|M06|
|Presence status for all employees on a date|HR, MGR|M10|
|Day-wise status per employee per month|HR, PAY, AUD|M10|
|Late marks and early exits by employee|HR, MGR|M10|
|Absent and LOP days by department|HR, OA|M10|
|OT minutes approved/pending by employee|HR, PAY, MGR|M10|
|Requests by status and reason|HR, MGR|M10|
|Mobile punches on map with geofence flags|HR, MGR|M10|
|Device sync status and exceptions|IT, HR|M10|
|Planned staff by location and hour|HM, MGR|M11|
|Balances per employee per type|HR, PAY, AUD|M12|
|Leave taken by type, department, period|HR, MGR|M12|
|Encashable days x daily rate|HR, FIN|M12|
|Unpaid leave and absent days per period|PAY|M12|
|Team availability view|MGR, TL|M12|
|Component-wise payroll per employee per run|PAY, FIN, AUD|M13|
|Gross to net per employee|PAY, FIN|M13|
|Change vs previous month with reasons|PAY, FIN|M13|
|Net pay per bank account for transfer|PAY, FIN|M13|
|Cost to company allocations|FIN, OA|M13|
|Arrears by employee and source period|PAY|M13|
|Outstanding loans and EMIs|PAY, FIN|M13|
|Settlement items per exit|PAY, HR|M13|
|Expected vs provider amounts with exceptions|PAY, FIN|M13|
|PF wages and contributions|PAY, CMP, AUD|M14|
|ESI wages and contributions|PAY, CMP|M14|
|PT by state and slab|PAY, CMP|M14|
|LWF contributions by state|PAY, CMP|M14|
|Projected income, exemptions, TDS per employee|PAY|M14|
|Quarterly TDS return data|PAY, FIN|M14|
|Declared vs verified investments|PAY|M14|
|Statutory registers|PAY, CMP|M14|
|Candidates per stage per job|REC, HR|M07|



|Days from requisition and application to hire|REC, HR, OA|M07|
| - | - | - |
|Hires and conversion by source|REC, HR|M07|
|Offers sent vs accepted|REC, HR|M07|
|Interviews per interviewer and feedback timeliness|REC|M07|
|Task completion per joiner|HR, IT, MGR|M08|
|Exit interview reasons by department|HR, OA|M09|
|Open clearance tasks by owner|HR, IT, FIN|M09|
|Goals and reviews completion %|HR, HM|M15|
|Ratings by department/manager; performance x potential|HR, HM|M15|
|Completion by course and department|HR, CMP|M16|
|Certificates expiring in N days|HR, CMP|M16|
|Assets by status; exited employees holding assets|IT, FIN|M17|
|Volume, SLA %, CSAT by category|HR, HM|M18|
|Spend and violations by department|FIN, MGR|M19|
|Unsettled expense and travel advances|FIN|M19|
|Trips and spend by department/purpose|FIN, HR|M20|
|Threshold-suppressed results by group|HR, OA|M21|
|Who changed or viewed sensitive data|AUD, CMP, OA|M23|
|All grants, scopes, last used|OA, CMP, AUD|M02|



||
| - |
||
||
|**Phase**|
|2|
|2|
|2|
|2|
|2|
|2|
|2|
|6|
|2|
|2|
|2|
|2|
|5|
|3|
|3|
|3|
|3|
|3|
|3|
|7|
|6|
|6|
|3|
|3|
|3|
|3|
|3|
|4|
|4|
|4|
|4|
|4|
|4|
|6|
|5|
|4|
|4|
|4|
|4|
|4|
|4|
|4|
|4|
|4|
|5|



|5|
| -: |
|5|
|5|
|5|
|5|
|5|
|5|
|6|
|6|
|8|
|8|
|6|
|8|
|6|
|6|
|8|
|6|
|2|
|6|


|**Sheet 11 - Notifications**|||
| - | - | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*|||
||||
|**Event**|**Trigger**||
|signup.verify|Visitor completes signup||
|tenant.approved|SA approves tenant||
|tenant.rejected|SA rejects tenant||
|tenant.suspended|Tenant suspended||
|trial.ending|7/3/1 days before trial end||
|invoice.issued|Invoice issued||
|payment.failed|Gateway payment fails||
|tenant.export\_ready|Tenant export completed||
|user.invited|Invitation created||
|auth.password\_reset|Reset requested||
|auth.new\_device|Login from new device||
|auth.locked|Account locked||
|auth.mfa\_changed|MFA enabled/disabled||
|access.role\_changed|Role grant added/removed||
|breakglass.opened|Break-glass approved||
|org.setup\_reminder|Wizard incomplete after 3 days||
|org.department\_head\_assigned|Head assigned||
|employee.joined|Employee marked joined||
|employee.manager\_changed|Manager changed||
|employee.probation\_due|15 days before probation end||
|employee.confirmed|Confirmation done||
|employee.anniversary|Work anniversary||
|profile\_change.submitted|Change request submitted||
|profile\_change.decided|Change request decided||
|approvals.digest|Daily 09:00 local if pending||
|document.requested|HR requests a document||
|document.rejected|Document rejected||
|document.expiring|30/15/7/0 days before expiry||
|policy.published|Policy version published||
|policy.ack\_overdue|Acknowledgement past due||
|requisition.submitted|Requisition submitted||
|application.received|New application||
|interview.scheduled|Interview scheduled/rescheduled||
|interview.feedback\_pending|2 h after slot without feedback||
|offer.sent|Offer sent||
|offer.responded|Candidate accepts/declines||
|prejoin.invite|Offer accepted||
|onboarding.task\_assigned|Task assigned||
|onboarding.task\_overdue|Task overdue||
|onboarding.day\_before|Day before joining||
|resignation.submitted|Employee resigns||
|resignation.accepted|Resignation accepted||
|clearance.assigned|Clearance task created||
|exit.last\_day|Day before last working day||
|attendance.missed\_punch|Next morning after missing punch||



|attendance.late\_mark|Late mark applied|
| - | - |
|regularization.submitted|Request submitted|
|regularization.decided|Request decided|
|overtime.pending|OT needs approval|
|geofence.violation|Punch outside geofence (flag mode)|
|attendance.lock\_reminder|2 days before lock|
|device.sync\_failed|Biometric sync fails|
|roster.published|Roster published/changed|
|shift\_swap.requested|Swap requested|
|leave.applied|Leave submitted|
|leave.decided|Leave approved/rejected|
|leave.cancelled|Leave cancelled|
|leave.team\_tomorrow|Team members on leave tomorrow|
|compoff.expiring|7 days before comp-off expiry|
|payroll.inputs\_due|N days before cut-off|
|payroll.approval\_requested|Run submitted|
|payroll.run\_decided|Run approved/rejected|
|payslip.published|Payslips released|
|payroll.payment\_failed|Bank rejects payment|
|tax.declaration\_window|Window opens/closes|
|tax.proof\_rejected|Proof rejected|
|tax.form16\_available|Form 16 published|
|statutory.due\_date|3 days before statutory due|
|performance.phase\_open|Cycle phase opens|
|performance.due\_soon|3 days before phase end|
|performance.feedback\_requested|Peer feedback requested|
|performance.released|Ratings released|
|learning.assigned|Course assigned|
|learning.overdue|Mandatory course overdue|
|certification.expiring|60/30/7 days before|
|asset.allocated|Asset allocated|
|asset.warranty\_expiring|30 days before|
|ticket.updated|Ticket created/assigned/updated/resolved|
|ticket.sla\_risk|SLA 80% / breached|
|expense.submitted|Claim submitted|
|expense.decided|Claim decided / sent back|
|expense.paid|Reimbursement paid|
|travel.decided|Travel request decided|
|travel.booking\_uploaded|Booking uploaded|
|announcement.published|Announcement published|
|survey.open|Survey launched/reminder|
|recognition.received|Kudos received|
|export.ready|Export job done|
|report.scheduled|Scheduled report delivered|
|privacy\_request.due|5 days before DPDP due date|
|legal\_hold.changed|Hold placed/released|
|workflow.task\_assigned|Approval task created|
|workflow.escalated|SLA breach escalation|
|integration.failing|3 consecutive failures|
|webhook.disabled|Auto-disabled after failures|



||||
| - | - | - |
||||
||||
|**Recipient**|**Channel**|**Module**|
|Owner|Email|M01|
|Owner|Email|M01|
|Owner|Email|M01|
|Owner, OA|Email, In-app|M01|
|Owner|Email, In-app|M01|
|Billing contact|Email|M01|
|Billing contact, Owner|Email|M01|
|Requester|Email|M01|
|Invitee|Email|M02|
|User|Email|M02|
|User|Email|M02|
|User, OA|Email|M02|
|User|Email|M02|
|User, OA|In-app, Email|M02|
|Tenant owner, Security|Email|M02|
|Owner|Email|M03|
|New head|In-app|M03|
|Manager, Team|In-app, Email|M04|
|Old/new manager, Employee|In-app|M04|
|Manager, HR|In-app, Email|M04|
|Employee|In-app, Email|M04|
|Employee, Team|In-app|M04|
|Approver|In-app, Email, Push|M05|
|Employee|In-app, Email|M05|
|Approver|Email|M25|
|Employee|In-app, Email|M06|
|Employee|In-app, Email|M06|
|Employee, HR|In-app, Email|M06|
|Audience|In-app, Email|M06|
|Employee, HR|Email|M06|
|Approver|In-app, Email|M07|
|Recruiter|In-app|M07|
|Candidate, Interviewers|Email (ICS), In-app|M07|
|Interviewer|In-app, Email|M07|
|Candidate|Email|M07|
|Recruiter, Hiring manager|In-app, Email|M07|
|Candidate|Email, SMS|M08|
|Task owner|In-app, Email|M08|
|Task owner, HR|Email|M08|
|Manager, Buddy|Email|M08|
|Manager, HR|In-app, Email, Push|M09|
|Employee|In-app, Email|M09|
|Department owner|In-app, Email|M09|
|Employee, HR, IT|Email|M09|
|Employee|In-app, Push|M10|



|Employee|In-app|M10|
| - | - | - |
|Approver|In-app, Email, Push|M10|
|Employee|In-app, Push|M10|
|Manager|In-app|M10|
|Manager|In-app|M10|
|HR|Email|M10|
|IT, HR|Email|M10|
|Affected employees|In-app, Push|M11|
|Colleague, Manager|In-app, Push|M11|
|Approver|In-app, Email, Push|M12|
|Employee|In-app, Email, Push|M12|
|Approver|In-app|M12|
|Manager|Email digest|M12|
|Employee|In-app|M12|
|HR, Managers|Email|M13|
|Checker (FIN/OA)|In-app, Email|M13|
|Payroll admin|In-app, Email|M13|
|Employee|In-app, Email, Push|M13|
|PAY, FIN, Employee|Email|M13|
|Employee|Email, In-app|M14|
|Employee|In-app, Email|M14|
|Employee|Email, In-app|M14|
|PAY, FIN|Email|M14|
|Participants|Email, In-app|M15|
|Participants|Email|M15|
|Reviewer|In-app, Email|M15|
|Employee|In-app, Email|M15|
|Employee|In-app, Email|M16|
|Employee, Manager|Email|M16|
|Employee, HR|Email|M16|
|Employee|In-app (ack)|M17|
|IT|Email|M17|
|Requester, Agent|In-app, Email|M18|
|Agent, Group lead|In-app, Email|M18|
|Approver|In-app, Email, Push|M19|
|Employee|In-app, Push|M19|
|Employee|In-app, Email|M19|
|Employee|In-app, Email|M20|
|Employee|In-app, Email|M20|
|Audience|In-app (+Email if mandatory)|M21|
|Audience|In-app, Email|M21|
|Employee|In-app, Push|M21|
|Requester|In-app, Email|M22|
|Subscribers|Email (link)|M22|
|CMP|Email|M23|
|CMP, OA|Email|M23|
|Approver|In-app, Email, Push|M25|
|Next approver, HR|In-app, Email|M25|
|OA, IT|Email|M26|
|OA|Email|M26|


|**Sheet 12 - Integrations**||
| - | - |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*||
|||
|**Integration**|**Purpose**|
|AWS S3|Private document and file storage|
|ClamAV (container)|Malware scanning of uploads|
|Resend|Transactional email (primary)|
|AWS SES|Transactional email (fallback)|
|MSG91 / Gupshup|SMS and WhatsApp (DLT templates)|
|Firebase Cloud Messaging / APNs|Mobile push notifications|
|Google Workspace (OIDC/SAML)|SSO and directory|
|Microsoft Entra ID (SAML/OIDC/SCIM)|SSO and provisioning|
|Okta (SAML/SCIM)|SSO and provisioning|
|Google Calendar|Interview and leave events|
|Microsoft 365 Calendar / Teams|Interview events and approvals|
|LinkedIn Jobs|Job posting|
|Naukri|Job posting and applicant import|
|Indeed|Job posting|
|eSSL / ZKTeco / Matrix biometric devices|Punch ingestion (push/pull)|
|Google Maps / geocoding|Geofence setup and punch maps|
|Bank file formats (HDFC, ICICI, SBI, Axis)|Salary and reimbursement payouts|
|External payroll providers (exchange)|Payroll export/import and reconciliation|
|EPFO (ECR file upload)|PF returns|
|ESIC portal (file)|ESI contributions|
|TRACES / Protean TIN (files)|24Q, Form 16|
|Tally Prime (XML)|Payroll and expense journals|
|Zoho Books API|Journals|
|QuickBooks Online API|Journals|
|Razorpay / Stripe|SaaS subscription payments|
|Leegality / DocuSign|E-sign letters|
|Slack|Notifications and approvals|
|Microsoft Teams bot|Notifications and approvals|
|Outbound webhooks (tenant endpoints)|Event push to customer systems|
|Public REST API (API keys)|Customer automation|
|Sentry|Error tracking (PII scrubbed)|
|HIBP Pwned Passwords (k-anonymity)|Breached password check|
|LLM provider (via approved DPA)|Policy Q&A and summaries|



||||
| - | - | - |
||||
||||
|**Direction**|**Phase**|**Module**|
|Outbound/Inbound|1|M06|
|Internal|2|M06|
|Outbound|1|M24|
|Outbound|1|M24|
|Outbound|7|M24|
|Outbound|7|M24|
|Inbound|8|M02|
|Inbound|8|M02|
|Inbound|8|M02|
|Bidirectional|5|M07|
|Bidirectional|5|M07|
|Outbound|8|M07|
|Bidirectional|8|M07|
|Outbound|8|M07|
|Inbound|6|M10|
|Outbound|7|M10|
|Outbound|4|M13|
|Bidirectional|4|M13|
|Outbound (file)|4|M14|
|Outbound (file)|4|M14|
|Outbound (file)|4|M14|
|Outbound|4|M26|
|Outbound|6|M26|
|Outbound|8|M26|
|Bidirectional|8|M01|
|Bidirectional|8|M06|
|Bidirectional|8|M26|
|Bidirectional|8|M26|
|Outbound|6|M26|
|Inbound|8|M26|
|Outbound|1|M28|
|Outbound|1|M02|
|Outbound|8|M31|


|**Sheet 13 - Sprint Planning**|||
| - | - | - |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*|||
||||
|**Epic**|**Module**|**Story Points**|
|Tenant & Subscription Management - Tenant signup & lifecycle|M01|39|
|Tenant & Subscription Management - Subscription & billing|M01|21|
|Identity, Authentication & Access Control - Authentication|M02|33|
|Identity, Authentication & Access Control - Users, memberships & invitations|M02|14|
|Identity, Authentication & Access Control - Roles & permissions|M02|37|
|Organization Management - Legal & structure|M03|24|
|Audit & Compliance|M23|11|
|Notification System|M24|23|
|Workflow Engine|M25|39|
|Security & Data Protection|M28|29|
|Identity, Authentication & Access Control - Users, memberships & invitations (Phase 2)|M02|3|
|Identity, Authentication & Access Control - Roles & permissions (Phase 2)|M02|8|
|Organization Management - Legal & structure (Phase 2)|M03|11|
|Employee Management - Employee master|M04|77|
|Employee Self-Service|M05|23|
|Documents Management|M06|29|
|Reports & Dashboards|M22|26|
|Audit & Compliance (Phase 2)|M23|8|
|Security & Data Protection (Phase 2)|M28|8|
|Data Import / Export|M29|18|
|Employee Self-Service (Phase 3)|M05|5|
|Attendance & Time - Punch capture|M10|11|
|Attendance & Time - Daily computation|M10|36|
|Attendance & Time - Corrections & locks|M10|28|
|Shift & Roster|M11|21|
|Leave Management - Configuration|M12|21|
|Leave Management - Balances & requests|M12|60|
|Organization Management - Legal & structure (Phase 4)|M03|6|
|Payroll - Structures & compensation|M13|34|
|Payroll - Payroll processing|M13|69|
|Statutory Compliance & Tax (India)|M14|71|
|Data Import / Export (Phase 4)|M29|8|
|Documents Management (Phase 5)|M06|8|
|Recruitment (ATS) - Requisitions & jobs|M07|18|
|Recruitment (ATS) - Candidates & pipeline|M07|16|
|Recruitment (ATS) - Interviews & offers|M07|29|
|Onboarding & Pre-joining|M08|27|
|Offboarding & Exit|M09|30|
|Payroll - Payroll processing (Phase 5)|M13|8|
|Integrations & API Platform (Phase 5)|M26|5|
|Identity, Authentication & Access Control - Roles & permissions (Phase 6)|M02|8|
|Employee Management - Employee master (Phase 6)|M04|3|
|Employee Self-Service (Phase 6)|M05|5|



|Documents Management (Phase 6)|M06|3|
| - | - | -: |
|Recruitment (ATS) - Interviews & offers (Phase 6)|M07|5|
|Onboarding & Pre-joining (Phase 6)|M08|3|
|Attendance & Time - Punch capture (Phase 6)|M10|13|
|Shift & Roster (Phase 6)|M11|3|
|Payroll - Structures & compensation (Phase 6)|M13|5|
|Payroll - Payroll processing (Phase 6)|M13|5|
|Performance Management|M15|63|
|Asset Management|M17|24|
|Expense Management|M19|31|
|Announcements, Surveys & Engagement|M21|24|
|Reports & Dashboards (Phase 6)|M22|3|
|Audit & Compliance (Phase 6)|M23|3|
|Notification System (Phase 6)|M24|6|
|Workflow Engine (Phase 6)|M25|21|
|Integrations & API Platform|M26|13|
|Identity, Authentication & Access Control - Users, memberships & invitations (Phase 7)|M02|3|
|Attendance & Time - Punch capture (Phase 7)|M10|15|
|Audit & Compliance (Phase 7)|M23|10|
|Notification System (Phase 7)|M24|10|
|Mobile App|M27|36|
|Security & Data Protection (Phase 7)|M28|5|
|Hardening & release gate (perf, pen-test, DR drill, a11y)|M28|60|
|Tenant & Subscription Management - Tenant signup & lifecycle (Phase 8)|M01|8|
|Tenant & Subscription Management - Subscription & billing (Phase 8)|M01|24|
|Identity, Authentication & Access Control - Authentication (Phase 8)|M02|26|
|Documents Management (Phase 8)|M06|5|
|Recruitment (ATS) - Requisitions & jobs (Phase 8)|M07|8|
|Recruitment (ATS) - Candidates & pipeline (Phase 8)|M07|5|
|Attendance & Time - Punch capture (Phase 8)|M10|5|
|Attendance & Time - Corrections & locks (Phase 8)|M10|5|
|Learning Management|M16|36|
|Helpdesk|M18|31|
|Travel Management|M20|14|
|Reports & Dashboards (Phase 8)|M22|21|
|Audit & Compliance (Phase 8)|M23|5|
|Integrations & API Platform (Phase 8)|M26|10|
|Finance Core (optional)|M30|34|
|AI HR Assistant|M31|18|
|**TOTAL**||**1627**|



||||||||
| - | - | - | - | - | - | - |
||||||||
||||||||
|**Sprint**|**Phase**|**Sprint start**|**Sprint end**|**Start date**|**End date**||
|S1-S2|1|1|2|16-Nov-2026|11-Dec-2026||
|S2|1|2|2|30-Nov-2026|11-Dec-2026||
|S2-S3|1|2|3|30-Nov-2026|25-Dec-2026||
|S3|1|3|3|14-Dec-2026|25-Dec-2026||
|S3-S4|1|3|4|14-Dec-2026|08-Jan-2027||
|S4|1|4|4|28-Dec-2026|08-Jan-2027||
|S4|1|4|4|28-Dec-2026|08-Jan-2027||
|S4-S5|1|4|5|28-Dec-2026|22-Jan-2027||
|S5|1|5|5|11-Jan-2027|22-Jan-2027||
|S5-S6|1|5|6|11-Jan-2027|05-Feb-2027||
|S7|2|7|7|08-Feb-2027|19-Feb-2027||
|S7|2|7|7|08-Feb-2027|19-Feb-2027||
|S7|2|7|7|08-Feb-2027|19-Feb-2027||
|S7-S8|2|7|8|08-Feb-2027|05-Mar-2027||
|S8|2|8|8|22-Feb-2027|05-Mar-2027||
|S8-S9|2|8|9|22-Feb-2027|19-Mar-2027||
|S9|2|9|9|08-Mar-2027|19-Mar-2027||
|S9|2|9|9|08-Mar-2027|19-Mar-2027||
|S9|2|9|9|08-Mar-2027|19-Mar-2027||
|S9-S10|2|9|10|08-Mar-2027|02-Apr-2027||
|S11|3|11|11|05-Apr-2027|16-Apr-2027||
|S11|3|11|11|05-Apr-2027|16-Apr-2027||
|S11|3|11|11|05-Apr-2027|16-Apr-2027||
|S11-S12|3|11|12|05-Apr-2027|30-Apr-2027||
|S12|3|12|12|19-Apr-2027|30-Apr-2027||
|S12|3|12|12|19-Apr-2027|30-Apr-2027||
|S12-S13|3|12|13|19-Apr-2027|14-May-2027||
|S14|4|14|14|17-May-2027|28-May-2027||
|S14|4|14|14|17-May-2027|28-May-2027||
|S14-S15|4|14|15|17-May-2027|11-Jun-2027||
|S15-S16|4|15|16|31-May-2027|25-Jun-2027||
|S16|4|16|16|14-Jun-2027|25-Jun-2027||
|S17|5|17|17|28-Jun-2027|09-Jul-2027||
|S17|5|17|17|28-Jun-2027|09-Jul-2027||
|S17|5|17|17|28-Jun-2027|09-Jul-2027||
|S17-S18|5|17|18|28-Jun-2027|23-Jul-2027||
|S18|5|18|18|12-Jul-2027|23-Jul-2027||
|S18|5|18|18|12-Jul-2027|23-Jul-2027||
|S18|5|18|18|12-Jul-2027|23-Jul-2027||
|S18-S19|5|18|19|12-Jul-2027|06-Aug-2027||
|S20|6|20|20|09-Aug-2027|20-Aug-2027||
|S20|6|20|20|09-Aug-2027|20-Aug-2027||
|S20|6|20|20|09-Aug-2027|20-Aug-2027||


|S20|6|20|20|09-Aug-2027|20-Aug-2027||
| - | -: | -: | -: | -: | -: | - |
|S20|6|20|20|09-Aug-2027|20-Aug-2027||
|S20|6|20|20|09-Aug-2027|20-Aug-2027||
|S20|6|20|20|09-Aug-2027|20-Aug-2027||
|S20|6|20|20|09-Aug-2027|20-Aug-2027||
|S20|6|20|20|09-Aug-2027|20-Aug-2027||
|S20|6|20|20|09-Aug-2027|20-Aug-2027||
|S20-S21|6|20|21|09-Aug-2027|03-Sep-2027||
|S21|6|21|21|23-Aug-2027|03-Sep-2027||
|S21-S22|6|21|22|23-Aug-2027|17-Sep-2027||
|S22|6|22|22|06-Sep-2027|17-Sep-2027||
|S22|6|22|22|06-Sep-2027|17-Sep-2027||
|S22|6|22|22|06-Sep-2027|17-Sep-2027||
|S22|6|22|22|06-Sep-2027|17-Sep-2027||
|S22-S23|6|22|23|06-Sep-2027|01-Oct-2027||
|S23|6|23|23|20-Sep-2027|01-Oct-2027||
|S24|7|24|24|04-Oct-2027|15-Oct-2027||
|S24|7|24|24|04-Oct-2027|15-Oct-2027||
|S24|7|24|24|04-Oct-2027|15-Oct-2027||
|S24|7|24|24|04-Oct-2027|15-Oct-2027||
|S24-S25|7|24|25|04-Oct-2027|29-Oct-2027||
|S25|7|25|25|18-Oct-2027|29-Oct-2027||
|S25|7|25|25|18-Oct-2027|29-Oct-2027||
|S26|8|26|26|01-Nov-2027|12-Nov-2027||
|S26|8|26|26|01-Nov-2027|12-Nov-2027||
|S26|8|26|26|01-Nov-2027|12-Nov-2027||
|S26|8|26|26|01-Nov-2027|12-Nov-2027||
|S26-S27|8|26|27|01-Nov-2027|26-Nov-2027||
|S27|8|27|27|15-Nov-2027|26-Nov-2027||
|S27|8|27|27|15-Nov-2027|26-Nov-2027||
|S27|8|27|27|15-Nov-2027|26-Nov-2027||
|S27|8|27|27|15-Nov-2027|26-Nov-2027||
|S27-S28|8|27|28|15-Nov-2027|10-Dec-2027||
|S28|8|28|28|29-Nov-2027|10-Dec-2027||
|S28|8|28|28|29-Nov-2027|10-Dec-2027||
|S28|8|28|28|29-Nov-2027|10-Dec-2027||
|S28|8|28|28|29-Nov-2027|10-Dec-2027||
|S28-S29|8|28|29|29-Nov-2027|24-Dec-2027||
|S29|8|29|29|13-Dec-2027|24-Dec-2027||
||||**29**||24-Dec-2027||


|**Project start date (input)**|||||
| - | - | - | - | - |
|16-Nov-2026|||||
|**Sprint length (days)**|||||
|14|||||
|*Assumption A-04: 70 SP/sprint at full velocity; ramp 50/50/75%. Edit inputs in yellow.*|||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||
||||||

|As a tenant owner, I want setup wizard (seven-step wizard: profile, entity, locations, departments, work policy, leave, invite users; tracks setup status) so that I can get operational in under an hour.|||||
| - | :- | :- | :- | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*|||||
||||||
|**Table**|**Module**|**Category**|||
|tenants|M01|Master|||
|tenant\_settings|M01|Configuration|||
|feature\_flags|M01|Configuration|||
|plans|M01|Master|||
|plan\_versions|M01|Master|||
|subscriptions|M01|Transaction|||
|entitlements|M01|Configuration|||
|invoices|M01|Transaction|||
|invoice\_lines|M01|Transaction|||
|payments|M01|Transaction|||
|payment\_allocations|M01|Transaction|||
|tenant\_exports|M01|Transaction|||
|users|M02|Master|||
|memberships|M02|Master|||
|invitations|M02|Transaction|||
|user\_sessions|M02|Audit|||
|mfa\_factors|M02|Master|||
|password\_reset\_tokens|M02|Transaction|||
|email\_verification\_tokens|M02|Transaction|||
|login\_attempts|M02|Audit|||
|permissions|M02|Master|||
|roles|M02|Master|||
|role\_permissions|M02|Configuration|||
|role\_grants|M02|Transaction|||
|role\_grant\_scopes|M02|Configuration|||
|platform\_role\_grants|M02|Transaction|||
|break\_glass\_sessions|M02|Audit|||
|sso\_connections|M02|Configuration|||
|api\_keys|M26|Configuration|||
|legal\_entities|M03|Master|||
|statutory\_registrations|M03|Master|||
|branches|M03|Master|||
|locations|M03|Master|||
|departments|M03|Master|||
|designations|M03|Master|||
|grades|M03|Master|||
|cost\_centers|M03|Master|||
|employment\_types|M03|Master|||
|employees|M04|Master|||



|employment\_assignments|M04|Transaction|
| - | - | - |
|assignment\_cost\_splits|M04|Transaction|
|employee\_events|M04|Transaction|
|employee\_contacts|M04|Transaction|
|employee\_education|M04|Transaction|
|employee\_experience|M04|Transaction|
|employee\_bank\_accounts|M04|Transaction|
|employee\_statutory\_ids|M04|Transaction|
|profile\_change\_requests|M05|Transaction|
|privacy\_acknowledgements|M05|Audit|
|files|M06|Transaction|
|document\_types|M06|Configuration|
|documents|M06|Transaction|
|document\_versions|M06|Transaction|
|policies|M06|Transaction|
|policy\_acknowledgements|M06|Audit|
|letter\_templates|M06|Configuration|
|requisitions|M07|Transaction|
|jobs|M07|Transaction|
|pipeline\_templates|M07|Configuration|
|candidates|M07|Master|
|applications|M07|Transaction|
|application\_stage\_history|M07|Audit|
|interviews|M07|Transaction|
|interview\_feedback|M07|Transaction|
|offers|M07|Transaction|
|referrals|M07|Transaction|
|onboarding\_templates|M08|Configuration|
|onboarding\_cases|M08|Transaction|
|onboarding\_tasks|M08|Transaction|
|prejoin\_tokens|M08|Transaction|
|exit\_cases|M09|Transaction|
|clearance\_tasks|M09|Transaction|
|exit\_interviews|M09|Transaction|
|shift\_templates|M11|Configuration|
|weekly\_off\_patterns|M11|Configuration|
|roster\_entries|M11|Transaction|
|shift\_swaps|M11|Transaction|
|attendance\_policies|M10|Configuration|
|attendance\_policy\_versions|M10|Configuration|
|biometric\_devices|M10|Configuration|
|device\_user\_maps|M10|Configuration|
|punches|M10|Transaction|
|attendance\_days|M10|Transaction|



|attendance\_regularizations|M10|Transaction|
| - | - | - |
|on\_duty\_requests|M10|Transaction|
|overtime\_entries|M10|Transaction|
|attendance\_periods|M10|Transaction|
|timesheets|M10|Transaction|
|leave\_types|M12|Master|
|leave\_policies|M12|Configuration|
|leave\_policy\_versions|M12|Configuration|
|holiday\_calendars|M12|Configuration|
|holidays|M12|Configuration|
|leave\_requests|M12|Transaction|
|leave\_ledger\_entries|M12|Transaction|
|leave\_balances|M12|Transaction|
|comp\_off\_credits|M12|Transaction|
|salary\_components|M13|Master|
|salary\_structures|M13|Configuration|
|salary\_structure\_components|M13|Configuration|
|employee\_compensations|M13|Transaction|
|compensation\_components|M13|Transaction|
|payroll\_calendars|M13|Configuration|
|payroll\_periods|M13|Transaction|
|payroll\_inputs|M13|Transaction|
|payroll\_runs|M13|Transaction|
|payroll\_run\_employees|M13|Transaction|
|payroll\_line\_items|M13|Transaction|
|payslips|M13|Transaction|
|payroll\_payments|M13|Transaction|
|loans|M13|Transaction|
|loan\_installments|M13|Transaction|
|fnf\_settlements|M13|Transaction|
|fnf\_items|M13|Transaction|
|payroll\_exchange\_batches|M13|Transaction|
|reconciliation\_items|M13|Transaction|
|statutory\_rule\_sets|M14|Master|
|statutory\_rule\_parameters|M14|Master|
|tax\_regime\_choices|M14|Transaction|
|tax\_declarations|M14|Transaction|
|declaration\_items|M14|Transaction|
|declaration\_proofs|M14|Transaction|
|statutory\_filings|M14|Transaction|
|performance\_cycles|M15|Transaction|
|goals|M15|Transaction|
|kpis|M15|Master|
|one\_on\_ones|M15|Transaction|
|reviews|M15|Transaction|
|feedback\_requests|M15|Transaction|
|calibration\_changes|M15|Audit|



|pips|M15|Transaction|
| - | - | - |
|courses|M16|Master|
|course\_assignments|M16|Transaction|
|training\_sessions|M16|Transaction|
|assessment\_attempts|M16|Transaction|
|certifications|M16|Transaction|
|asset\_categories|M17|Master|
|asset\_items|M17|Master|
|asset\_allocations|M17|Transaction|
|asset\_requests|M17|Transaction|
|ticket\_categories|M18|Configuration|
|tickets|M18|Transaction|
|ticket\_comments|M18|Transaction|
|kb\_articles|M18|Master|
|expense\_policies|M19|Configuration|
|expense\_categories|M19|Master|
|expense\_claims|M19|Transaction|
|expense\_lines|M19|Transaction|
|expense\_advances|M19|Transaction|
|payout\_batches|M19|Transaction|
|travel\_requests|M20|Transaction|
|trip\_legs|M20|Transaction|
|travel\_bookings|M20|Transaction|
|announcements|M21|Transaction|
|surveys|M21|Transaction|
|survey\_responses|M21|Transaction|
|recognitions|M21|Transaction|
|report\_definitions|M22|Configuration|
|saved\_views|M22|Configuration|
|scheduled\_reports|M22|Configuration|
|export\_jobs|M22|Transaction|
|audit\_events|M23|Audit|
|data\_access\_logs|M23|Audit|
|retention\_policies|M23|Configuration|
|legal\_holds|M23|Configuration|
|privacy\_requests|M23|Transaction|
|posh\_cases|M23|Transaction|
|outbox\_events|M24|Audit|
|notification\_templates|M24|Configuration|
|notification\_preferences|M24|Configuration|
|notifications|M24|Transaction|
|notification\_deliveries|M24|Audit|
|device\_tokens|M24|Configuration|
|workflow\_definitions|M25|Configuration|
|workflow\_versions|M25|Configuration|
|approval\_instances|M25|Transaction|
|approval\_tasks|M25|Transaction|
|delegations|M25|Configuration|



|webhooks|M26|Configuration|
| - | - | - |
|webhook\_deliveries|M26|Audit|
|integration\_connections|M26|Configuration|
|import\_batches|M29|Transaction|
|import\_rows|M29|Transaction|
|idempotency\_records|M28|Audit|
|job\_runs|M28|Audit|
|accounting\_books|M30|Master|
|accounts|M30|Master|
|fiscal\_periods|M30|Configuration|
|journals|M30|Transaction|
|journal\_lines|M30|Transaction|
|ai\_interactions|M31|Audit|



|||
| - | - |
|||
|||
|**Purpose**|**Primary Key**|
|Customer boundary and lifecycle status|id|
|Locale, timezone, week start, setup status, security policy, branding|tenant\_id|
|Global and per-tenant flags|id|
|Commercial plans (platform)|id|
|Versioned plan price, modules, limits|id|
|Tenant commercial state (SoT)|id|
|Effective module/limit entitlements per tenant|id|
|SaaS invoices (immutable numbering)|id|
|Invoice lines|id|
|Customer payments|id|
|Payment-to-invoice allocations|id|
|Tenant full data export jobs|id|
|Global login identity|id|
|User access to a tenant|id|
|Hashed single-use invitations with role|id|
|Refresh token families|id|
|TOTP secrets (encrypted), passkeys, recovery codes (hashed)|id|
|Hashed reset tokens|id|
|Hashed verification tokens|id|
|Login telemetry for lockout|id|
|Global permission catalog|id|
|System templates (tenant\_id NULL) and custom roles|id|
|Role to permission mapping|(role\_id, permission\_id)|
|Role granted to membership with scope and validity|id|
|Scope targets for a grant (department/location/entity IDs)|id|
|Platform roles for platform users|id|
|Emergency platform access to a tenant|id|
|SAML/OIDC config per tenant|id|
|Hashed scoped API keys|id|
|Employer companies with statutory IDs (encrypted)|id|
|Entity registrations per scheme/state|id|
|Grouping of locations|id|
|Work sites with address, state, timezone, geofence|id|
|Department tree with head|id|
|Job titles|id|
|Grade/band ladder with optional pay range|id|
|Cost allocation units|id|
|FT, PT, contract, intern, consultant|id|
|Person employed by tenant|id|



|Effective-dated job assignment|id|
| - | - |
|Cost center % per assignment|id|
|Lifecycle event log|id|
|Addresses, emergency contacts, family|id|
|Education history|id|
|Previous employment|id|
|Encrypted bank accounts|id|
|PAN, Aadhaar ref (last4+token), UAN, ESIC, passport (encrypted)|id|
|Requested changes to restricted fields|id|
|Privacy notice acknowledgements|id|
|S3 object metadata and scan status|id|
|Type rules: mandatory, expiry, visibility, retention|id|
|Business document (polymorphic owner)|id|
|Versions pointing to files|id|
|Published company policies|id|
|Who acknowledged which version|id|
|Merge-field letter templates|id|
|Manpower requisitions|id|
|Job openings|id|
|Stage templates|id|
|Candidate profiles with consent|id|
|Candidate x job with stage|id|
|Stage moves with actor and reason|id|
|Interview rounds and panel|id|
|Scorecards|id|
|Offers with CTC and approval|id|
|Employee referrals|id|
|Task templates|id|
|Onboarding per joiner|id|
|Tasks with owners and due dates|id|
|Hashed portal tokens|id|
|Resignation/termination cases|id|
|Department clearances|id|
|Exit questionnaire responses|id|
|Shift definitions|id|
|Work-week patterns|id|
|Shift per employee per date|id|
|Swap requests|id|
|Policy header|id|
|Versioned rules (JSON-Schema) with approver|id|
|Registered devices|id|
|Device user ID to employee|id|
|Raw time events (partitioned monthly)|id|
|Daily summary, status, minutes, pinned policy version|id|



|Correction requests|id|
| - | - |
|On-duty/WFH requests|id|
|OT minutes and decision|id|
|Period lock per entity|id|
|Contractor timesheets|id|
|Leave types|id|
|Policy header per type|id|
|Versioned leave rules|id|
|Calendar per entity/location/year|id|
|Holiday dates (mandatory/restricted)|id|
|Applications|id|
|Append-only balance movements|id|
|Locked balance projection|id|
|Comp-off credits and expiry|id|
|Pay components|id|
|CTC templates|id|
|Component formula per structure|id|
|Effective-dated CTC|id|
|Per-component amounts|id|
|Frequency, cut-off, pay date per entity|id|
|Pay periods|id|
|Variable/one-time inputs|id|
|Run header and status (locked immutable)|id|
|Per-employee result and snapshot|id|
|Component lines with inputs and explanation|id|
|Published payslip PDFs|id|
|Bank files and confirmations|id|
|Loans and advances|id|
|EMI schedule|id|
|Full-and-final statement|id|
|F&F items with source|id|
|Export/import batches with mapping version|id|
|Variance items|id|
|Versioned statutory rules (platform-published)|id|
|Rates, caps, slabs per rule version|id|
|Regime per employee per FY|id|
|Investment declarations per FY|id|
|Section-wise amounts|id|
|Proof documents and decisions|id|
|Generated ECR/ESI/PT/24Q/Form 16 files|id|
|Cycles and phases|id|
|Goals/OKRs with parent|id|
|KPI library|id|
|Check-in notes|id|
|Self/manager/skip reviews|id|
|Peer/360 requests and responses|id|
|Rating changes with reason|id|



|Improvement plans|id|
| - | - |
|Course catalog|id|
|Learner assignments and progress|id|
|Classroom sessions and attendance|id|
|Quiz attempts|id|
|Certificates with expiry|id|
|Asset categories|id|
|Inventory items|id|
|Custody records (one open per item)|id|
|Asset requests|id|
|Categories, groups, SLA, confidentiality|id|
|Helpdesk tickets with SLA timestamps|id|
|Thread and internal notes|id|
|Knowledge base|id|
|Limits by category/grade/location|id|
|Expense categories|id|
|Claims|id|
|Claim lines with receipts|id|
|Advances and settlement|id|
|Reimbursement payouts|id|
|Trips with policy check|id|
|Itinerary legs|id|
|Booking confirmations|id|
|Targeted announcements|id|
|Survey definitions and anonymity mode|id|
|Responses (no respondent FK when anonymous)|id|
|Kudos and badges|id|
|Report catalog and custom reports|id|
|Saved filters per user|id|
|Schedules|id|
|Export jobs with expiring artifacts|id|
|Append-only audit (partitioned monthly)|id|
|Restricted reveals/downloads|id|
|Retention per data class|id|
|Holds overriding purge|id|
|DPDP requests|id|
|Confidential ICC cases|id|
|Transactional outbox (partitioned)|id|
|Templates per event/channel|id|
|User channel preferences|id|
|In-app feed|id|
|Channel delivery attempts|id|
|Push device tokens|id|
|Approval flow definitions|id|
|Immutable published versions|id|
|Runtime instance pinned to version|id|
|Step tasks with assignee and decision|id|
|Approval delegations|id|



|Webhook subscriptions (secret in Secrets Manager)|id|
| - | - |
|Delivery attempts|id|
|Connector config and health|id|
|Import batches with idempotency key|id|
|Staged rows with results|id|
|API idempotency keys and responses|id|
|Scheduled job executions|id|
|Books per legal entity|id|
|Chart of accounts|id|
|Periods and close state|id|
|Journal entries (posted immutable)|id|
|Debit/credit lines|id|
|Prompt/answer log with masking|id|



||
| - |
||
||
|**Foreign Keys**|
|-|
|tenant\_id->tenants|
|tenant\_id (nullable)|
|-|
|plan\_id->plans|
|tenant\_id UNIQUE; plan\_version\_id|
|tenant\_id; subscription\_id|
|tenant\_id; subscription\_id|
|(tenant\_id, invoice\_id)|
|tenant\_id|
|(tenant\_id, payment\_id); (tenant\_id, invoice\_id)|
|tenant\_id|
|-|
|tenant\_id; user\_id|
|tenant\_id; (tenant\_id, invited\_by\_membership\_id); role\_id|
|user\_id; membership\_id|
|user\_id|
|user\_id|
|user\_id|
|user\_id (nullable)|
|-|
|tenant\_id (nullable)|
|role\_id; permission\_id|
|(tenant\_id, membership\_id); role\_id; (tenant\_id, granted\_by)|
|(tenant\_id, role\_grant\_id)|
|user\_id; role\_id|
|tenant\_id; requested\_by; approved\_by|
|tenant\_id|
|tenant\_id; created\_by|
|tenant\_id|
|(tenant\_id, legal\_entity\_id)|
|tenant\_id|
|(tenant\_id, legal\_entity\_id); (tenant\_id, branch\_id)|
|tenant\_id; (tenant\_id, parent\_department\_id); (tenant\_id, head\_employee\_id)|
|tenant\_id|
|tenant\_id|
|tenant\_id; (tenant\_id, owner\_employee\_id)|
|tenant\_id|
|tenant\_id; (tenant\_id, membership\_id) UNIQUE|



|(tenant\_id, employee\_id); (tenant\_id, legal\_entity\_id); (tenant\_id, location\_id); (tenant\_id, department\_id); (tenant\_id, designation\_id); (tenant\_id, grade\_id); (tenant\_id, employment\_type\_id); (tenant\_id, manager\_employee\_id)|
| - |
|(tenant\_id, assignment\_id); (tenant\_id, cost\_center\_id)|
|(tenant\_id, employee\_id)|
|(tenant\_id, employee\_id)|
|(tenant\_id, employee\_id)|
|(tenant\_id, employee\_id)|
|(tenant\_id, employee\_id)|
|(tenant\_id, employee\_id) UNIQUE|
|(tenant\_id, employee\_id); approval\_instance\_id|
|(tenant\_id, membership\_id)|
|tenant\_id; uploaded\_by|
|tenant\_id|
|tenant\_id; document\_type\_id|
|(tenant\_id, document\_id); (tenant\_id, file\_id)|
|tenant\_id; document\_id|
|(tenant\_id, policy\_id); (tenant\_id, employee\_id)|
|tenant\_id|
|tenant\_id; (tenant\_id, department\_id); approval\_instance\_id|
|(tenant\_id, requisition\_id)|
|tenant\_id|
|tenant\_id|
|(tenant\_id, candidate\_id); (tenant\_id, job\_id)|
|(tenant\_id, application\_id)|
|(tenant\_id, application\_id)|
|(tenant\_id, interview\_id); (tenant\_id, interviewer\_membership\_id)|
|(tenant\_id, application\_id); approval\_instance\_id|
|(tenant\_id, referrer\_employee\_id); (tenant\_id, candidate\_id)|
|tenant\_id|
|(tenant\_id, employee\_id); template\_id|
|(tenant\_id, case\_id)|
|(tenant\_id, employee\_id)|
|(tenant\_id, employee\_id); approval\_instance\_id|
|(tenant\_id, exit\_case\_id)|
|(tenant\_id, exit\_case\_id)|
|tenant\_id|
|tenant\_id|
|(tenant\_id, employee\_id); (tenant\_id, shift\_template\_id)|
|tenant\_id; approval\_instance\_id|
|tenant\_id|
|(tenant\_id, attendance\_policy\_id)|
|(tenant\_id, location\_id)|
|(tenant\_id, device\_id); (tenant\_id, employee\_id)|
|(tenant\_id, employee\_id); (tenant\_id, attendance\_day\_id); device\_id|
|(tenant\_id, employee\_id); policy\_version\_id; shift\_template\_id|



|(tenant\_id, attendance\_day\_id); approval\_instance\_id|
| - |
|(tenant\_id, employee\_id); approval\_instance\_id|
|(tenant\_id, attendance\_day\_id)|
|(tenant\_id, legal\_entity\_id)|
|(tenant\_id, employee\_id)|
|tenant\_id|
|(tenant\_id, leave\_type\_id)|
|(tenant\_id, leave\_policy\_id)|
|(tenant\_id, legal\_entity\_id)|
|(tenant\_id, holiday\_calendar\_id)|
|(tenant\_id, employee\_id); (tenant\_id, leave\_type\_id); policy\_version\_id; approval\_instance\_id|
|(tenant\_id, employee\_id); (tenant\_id, leave\_type\_id); (tenant\_id, leave\_request\_id)|
|(tenant\_id, employee\_id); (tenant\_id, leave\_type\_id)|
|(tenant\_id, employee\_id); overtime\_entry\_id|
|tenant\_id|
|tenant\_id|
|(tenant\_id, structure\_id); (tenant\_id, component\_id)|
|(tenant\_id, employee\_id); structure\_id|
|(tenant\_id, compensation\_id)|
|(tenant\_id, legal\_entity\_id)|
|(tenant\_id, payroll\_calendar\_id)|
|(tenant\_id, payroll\_period\_id); (tenant\_id, employee\_id)|
|(tenant\_id, payroll\_period\_id); (tenant\_id, legal\_entity\_id)|
|(tenant\_id, payroll\_run\_id); (tenant\_id, employee\_id)|
|(tenant\_id, run\_employee\_id); component\_id; rule\_set\_id|
|(tenant\_id, run\_employee\_id); file\_id|
|(tenant\_id, payroll\_run\_id)|
|(tenant\_id, employee\_id)|
|(tenant\_id, loan\_id)|
|(tenant\_id, exit\_case\_id)|
|(tenant\_id, fnf\_settlement\_id)|
|(tenant\_id, payroll\_period\_id)|
|(tenant\_id, batch\_id)|
|-|
|rule\_set\_id|
|(tenant\_id, employee\_id)|
|(tenant\_id, employee\_id)|
|(tenant\_id, declaration\_id)|
|(tenant\_id, item\_id); document\_id|
|(tenant\_id, legal\_entity\_id)|
|tenant\_id|
|(tenant\_id, employee\_id); (tenant\_id, cycle\_id); parent\_goal\_id|
|tenant\_id|
|(tenant\_id, employee\_id); (tenant\_id, manager\_employee\_id)|
|(tenant\_id, cycle\_id); (tenant\_id, employee\_id); reviewer|
|(tenant\_id, cycle\_id)|
|(tenant\_id, review\_id)|



|(tenant\_id, employee\_id)|
| - |
|tenant\_id|
|(tenant\_id, course\_id); (tenant\_id, employee\_id)|
|(tenant\_id, course\_id)|
|(tenant\_id, assignment\_id)|
|(tenant\_id, employee\_id); document\_id|
|tenant\_id|
|(tenant\_id, category\_id); (tenant\_id, location\_id)|
|(tenant\_id, asset\_item\_id); (tenant\_id, employee\_id)|
|(tenant\_id, employee\_id); approval\_instance\_id|
|tenant\_id|
|(tenant\_id, category\_id); requester; assignee|
|(tenant\_id, ticket\_id)|
|tenant\_id|
|tenant\_id|
|tenant\_id|
|(tenant\_id, employee\_id); approval\_instance\_id; trip\_id|
|(tenant\_id, claim\_id); category\_id; document\_id|
|(tenant\_id, employee\_id)|
|tenant\_id|
|(tenant\_id, employee\_id); approval\_instance\_id|
|(tenant\_id, travel\_request\_id)|
|(tenant\_id, travel\_request\_id); document\_id|
|tenant\_id|
|tenant\_id|
|(tenant\_id, survey\_id)|
|tenant\_id; giver; receiver|
|tenant\_id (nullable for system)|
|(tenant\_id, membership\_id); report\_id|
|(tenant\_id, report\_id)|
|tenant\_id; requested\_by|
|tenant\_id (nullable); actor\_user\_id|
|tenant\_id; actor|
|tenant\_id|
|tenant\_id|
|tenant\_id; (tenant\_id, employee\_id)|
|tenant\_id|
|tenant\_id|
|tenant\_id (nullable)|
|(tenant\_id, membership\_id)|
|(tenant\_id, membership\_id); outbox\_event\_id|
|tenant\_id; outbox\_event\_id|
|(tenant\_id, membership\_id)|
|tenant\_id|
|(tenant\_id, definition\_id)|
|(tenant\_id, workflow\_version\_id); subject\_type/subject\_id|
|(tenant\_id, instance\_id); (tenant\_id, assignee\_membership\_id)|
|(tenant\_id, delegator\_membership\_id); (tenant\_id, delegate\_membership\_id)|



|tenant\_id|
| - |
|(tenant\_id, webhook\_id)|
|tenant\_id|
|tenant\_id; created\_by|
|(tenant\_id, batch\_id)|
|tenant\_id|
|tenant\_id (nullable)|
|(tenant\_id, legal\_entity\_id)|
|(tenant\_id, book\_id); parent\_account\_id|
|(tenant\_id, book\_id)|
|(tenant\_id, book\_id); (tenant\_id, period\_id); reversal\_of\_id|
|(tenant\_id, journal\_id); (tenant\_id, account\_id)|
|(tenant\_id, membership\_id)|



|||
| - | - |
|||
|||
|**Relationships**|**Data classification**|
|1:N all tenant tables; 1:1 subscriptions, tenant\_settings|Internal|
|1:1 tenants|Internal|
|N:1 tenants|Internal|
|1:N plan\_versions|Internal|
|N:1 plans; 1:N subscriptions|Internal|
|1:1 tenants; 1:N invoices|Internal|
|N:1 subscriptions|Internal|
|1:N invoice\_lines, payment\_allocations|Restricted financial|
|N:1 invoices|Restricted financial|
|1:N payment\_allocations|Restricted financial|
|N:1 payments, invoices|Restricted financial|
|N:1 tenants|Restricted|
|1:N memberships, user\_sessions, mfa\_factors|Sensitive PII|
|N:1 tenants, users; 1:N role\_grants; 0..1 employees|Internal|
|N:1 tenants, roles|Internal|
|N:1 users|Internal|
|N:1 users|Restricted|
|N:1 users|Internal|
|N:1 users|Internal|
|N:1 users|Internal|
|1:N role\_permissions|Public|
|1:N role\_permissions, role\_grants|Internal|
|N:1 roles, permissions|Internal|
|N:1 memberships, roles; 1:N role\_grant\_scopes|Internal|
|N:1 role\_grants|Internal|
|N:1 users, roles|Internal|
|N:1 tenants, users|Internal|
|N:1 tenants|Restricted|
|N:1 tenants|Restricted|
|1:N locations, assignments, payroll\_runs|Restricted (IDs)|
|N:1 legal\_entities|Restricted|
|1:N locations|Internal|
|1:N assignments, devices|Internal|
|self-ref; 1:N assignments|Internal|
|1:N assignments|Public|
|1:N assignments, policies|Internal|
|1:N assignment\_cost\_splits|Internal|
|1:N assignments|Public|
|1:N assignments, events, punches, leave, payroll lines|Sensitive PII|



|N:1 employees and masters|Internal|
| - | - |
|N:1 assignments|Internal|
|N:1 employees|Internal|
|N:1 employees|Sensitive PII|
|N:1 employees|Sensitive PII|
|N:1 employees|Sensitive PII|
|N:1 employees|Restricted financial|
|1:1 employees|Restricted|
|N:1 employees|Sensitive PII|
|N:1 memberships|Internal|
|1:N document\_versions|Per owner|
|1:N documents|Internal|
|1:N document\_versions|Per type|
|N:1 documents|Per type|
|1:N policy\_acknowledgements|Internal|
|N:1 policies|Internal|
|1:N generated letters|Internal|
|1:N jobs|Internal|
|1:N applications|Public when published|
|1:N pipeline\_stages|Internal|
|1:N applications|Sensitive PII|
|1:N interviews, stage history|Sensitive PII|
|N:1 applications|Internal|
|1:N interview\_panelists, interview\_feedback|Sensitive PII|
|N:1 interviews|Sensitive PII|
|1:1 employees on accept|Restricted financial|
|N:1 candidates|Internal|
|1:N template tasks|Internal|
|1:N onboarding\_tasks|Internal|
|N:1 cases|Internal|
|N:1 employees|Internal|
|1:N clearance\_tasks; 1:1 fnf\_settlements|Sensitive|
|N:1 exit\_cases|Internal|
|1:1 exit\_cases|Sensitive|
|1:N roster\_entries|Internal|
|N:1 policies|Internal|
|N:1 employees|Internal|
|N:1 roster\_entries|Internal|
|1:N attendance\_policy\_versions|Internal|
|1:N attendance\_days|Internal|
|1:N punches; device\_user\_maps|Internal|
|N:1 devices|Internal|
|N:1 attendance\_days|Internal (selfie Sensitive)|
|1:N punches|Internal|



|N:1 attendance\_days|Internal|
| - | - |
|N:1 employees|Internal|
|N:1 attendance\_days|Internal|
|1:N payroll\_periods link|Internal|
|1:N timesheet\_lines|Internal|
|1:N policies, requests|Internal|
|1:N leave\_policy\_versions|Internal|
|1:N leave\_requests|Internal|
|1:N holidays|Public|
|N:1 calendars|Public|
|1:N leave\_ledger\_entries|Internal (medical docs Sensitive)|
|N:1 leave\_balances|Internal|
|1:N ledger entries|Internal|
|N:1 employees|Internal|
|1:N structure components, line items|Internal|
|1:N salary\_structure\_components|Restricted financial|
|N:1 structures|Restricted financial|
|1:N compensation\_components|Restricted financial|
|N:1 compensations|Restricted financial|
|1:N payroll\_periods|Internal|
|1:N payroll\_runs|Internal|
|N:1 periods|Restricted financial|
|1:N payroll\_run\_employees|Restricted financial|
|1:N payroll\_line\_items; 1:1 payslips|Restricted financial|
|N:1 run employees|Restricted financial|
|1:1 run employees|Restricted financial|
|N:1 runs|Restricted financial|
|1:N loan\_installments|Restricted financial|
|N:1 loans|Restricted financial|
|1:N fnf\_items|Restricted financial|
|N:1 settlements|Restricted financial|
|1:N reconciliation\_items|Restricted financial|
|N:1 batches|Restricted financial|
|1:N statutory\_rule\_parameters|Public|
|N:1 rule sets|Public|
|N:1 employees|Restricted|
|1:N declaration\_items|Restricted|
|1:N declaration\_proofs|Restricted|
|N:1 items|Restricted|
|N:1 entities|Restricted|
|1:N reviews, goals|Internal|
|self-ref|Internal|
|1:N goals|Internal|
|N:1 employees|Sensitive|
|N:1 cycles|Sensitive|
|N:1 cycles|Sensitive|
|N:1 reviews|Sensitive|



|1:N pip\_checkins|Sensitive|
| - | - |
|1:N assignments, sessions|Internal|
|N:1 courses|Internal|
|1:N attendance|Internal|
|N:1 assignments|Internal|
|N:1 employees|Internal|
|1:N asset\_items|Internal|
|1:N asset\_allocations|Internal|
|N:1 items|Internal|
|N:1 employees|Internal|
|1:N tickets|Internal|
|1:N ticket\_comments|Per category|
|N:1 tickets|Per category|
|-|Public (tenant)|
|N:1 categories|Internal|
|1:N lines|Internal|
|1:N expense\_lines|Restricted financial|
|N:1 claims|Restricted financial|
|N:1 employees|Restricted financial|
|1:N claims|Restricted financial|
|1:N trip\_legs, bookings|Internal|
|N:1 travel\_requests|Internal|
|N:1 travel\_requests|Internal|
|1:N announcement\_reads|Internal|
|1:N survey\_responses|Internal|
|N:1 surveys|Sensitive|
|N:1 employees|Internal|
|1:N saved\_views|Internal|
|N:1 reports|Internal|
|N:1 reports|Internal|
|N:1 memberships|Per content|
|-|Internal (masked)|
|-|Internal|
|-|Internal|
|-|Internal|
|-|Sensitive|
|-|Restricted|
|1:N notification\_deliveries|Internal|
|-|Internal|
|-|Internal|
|N:1 memberships|Internal|
|N:1 outbox\_events|Internal|
|N:1 memberships|Internal|
|1:N workflow\_versions|Internal|
|1:N approval\_instances|Internal|
|1:N approval\_tasks|Internal|
|N:1 instances|Internal|
|-|Internal|



|1:N webhook\_deliveries|Internal|
| - | - |
|N:1 webhooks|Internal|
|-|Restricted (secret refs)|
|1:N import\_rows|Per content|
|N:1 batches|Per content|
|-|Internal|
|-|Internal|
|1:N accounts, fiscal\_periods|Restricted financial|
|1:N journal\_lines|Internal|
|1:N journals|Internal|
|1:N journal\_lines|Restricted financial|
|N:1 journals|Restricted financial|
|-|Sensitive|



|||
| - | - |
|||
|||
|**Retention (default)**|**Phase**|
|Life of contract + 90 d|1|
|Life of tenant|1|
|Life of platform|1|
|Permanent|1|
|Permanent|1|
|8 y|1|
|Life of tenant|1|
|8 y|8|
|8 y|8|
|8 y|8|
|8 y|8|
|7 d file|8|
|Life of identity|1|
|Life + 2 y|1|
|90 d after use|1|
|90 d after expiry|1|
|Life of factor|1|
|30 d|1|
|30 d|1|
|90 d|1|
|Permanent|1|
|Life of tenant|1|
|Life of role|1|
|Life + 2 y|1|
|Life of grant|1|
|Life + 2 y|1|
|2 y|6|
|Life of tenant|8|
|Life + 1 y|8|
|Life + 8 y|1|
|Life + 8 y|4|
|Life of tenant|2|
|Life of tenant|1|
|Life of tenant|1|
|Life of tenant|1|
|Life of tenant|2|
|Life of tenant|4|
|Life of tenant|1|
|Exit + 8 y|2|



|Exit + 8 y|2|
| - | -: |
|Exit + 8 y|4|
|Exit + 8 y|2|
|Exit + 8 y|2|
|Exit + 8 y|2|
|Exit + 8 y|2|
|Exit + 8 y|2|
|Exit + 8 y|2|
|3 y|2|
|Life + 8 y|2|
|Per owner|2|
|Life of tenant|2|
|Per type|2|
|Per type|2|
|Life + 8 y|2|
|Exit + 8 y|2|
|Life of tenant|5|
|3 y|5|
|3 y|5|
|Life of tenant|5|
|12 m after last activity|5|
|12 m|5|
|12 m|5|
|12 m|5|
|12 m|5|
|8 y if hired else 12 m|5|
|3 y|5|
|Life of tenant|5|
|Exit + 3 y|5|
|Exit + 3 y|5|
|30 d after expiry|5|
|Exit + 8 y|5|
|Exit + 8 y|5|
|3 y|5|
|Life of tenant|3|
|Life of tenant|3|
|8 y|3|
|3 y|3|
|Life of tenant|3|
|8 y|3|
|Life of device|6|
|Life of map|6|
|8 y (selfie 90 d)|3|
|8 y|3|



|8 y|3|
| - | -: |
|8 y|3|
|8 y|3|
|8 y|3|
|8 y|8|
|Life of tenant|3|
|Life of tenant|3|
|8 y|3|
|8 y|3|
|8 y|3|
|8 y|3|
|8 y|3|
|8 y|3|
|3 y|3|
|Life + 8 y|4|
|Life + 8 y|4|
|Life + 8 y|4|
|Exit + 8 y|4|
|Exit + 8 y|4|
|Life + 8 y|4|
|8 y|4|
|8 y|4|
|8 y|4|
|8 y|4|
|8 y|4|
|8 y|4|
|8 y|4|
|Close + 8 y|6|
|Close + 8 y|6|
|8 y|5|
|8 y|5|
|8 y|4|
|8 y|4|
|Permanent|4|
|Permanent|4|
|8 y|4|
|8 y|4|
|8 y|4|
|8 y|4|
|8 y|4|
|8 y|6|
|5 y|6|
|Life of tenant|6|
|5 y|6|
|8 y|6|
|5 y|6|
|8 y|6|



|8 y|6|
| - | -: |
|Life of tenant|8|
|5 y|8|
|5 y|8|
|5 y|8|
|Exit + 3 y|8|
|Life of tenant|6|
|Disposal + 8 y|6|
|8 y|6|
|3 y|6|
|Life of tenant|8|
|3 y (POSH per law)|8|
|3 y|8|
|Life of tenant|8|
|Life + 8 y|6|
|Life of tenant|6|
|8 y|6|
|8 y|6|
|8 y|6|
|8 y|6|
|8 y|8|
|8 y|8|
|8 y|8|
|3 y|6|
|5 y|6|
|5 y|6|
|3 y|6|
|Life of tenant|2|
|Life of user|2|
|Life of schedule|6|
|7 d|2|
|2-8 y by class|1|
|8 y|2|
|Life of tenant|7|
|Until release + 1 y|7|
|5 y|7|
|Per law|8|
|30 d after processed|1|
|Life of tenant|1|
|Life of user|6|
|1 y|1|
|90 d|1|
|Until revoked|7|
|Life of tenant|1|
|8 y|1|
|8 y|1|
|8 y|1|
|3 y|6|



|Life of tenant|6|
| - | -: |
|30 d|6|
|Life of tenant|6|
|90 d|2|
|90 d|2|
|24 h|1|
|90 d|1|
|8 y|8|
|8 y|8|
|8 y|8|
|8 y|8|
|8 y|8|
|1 y|8|


|**Risk Register**||||
| - | - | - | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*||||
|||||
|**Risk ID**|**Category**|**Risk**|**Likelihood**|
|R-01|Security|Cross-tenant data exposure through a missed tenant filter|Medium|
|R-02|Security|Privilege escalation via role grants or custom roles|Low|
|R-03|Business|Native payroll miscalculation causes statutory penalties and customer loss|Medium|
|R-04|Business|Statutory rules change mid-year (rates, ceilings, regimes)|High|
|R-05|Technical|Attendance edge cases (overnight, DST, device clock drift) produce wrong days|High|
|R-06|Technical|Leave balance race conditions cause over-spend|Medium|
|R-07|Technical|Scope creep: 31 modules for a small team|High|
|R-08|Business|Two source packs disagree; team builds to the wrong one|High|
|R-09|Technical|Prisma limits (composite FKs, exclusion constraints, RLS) slow delivery|Medium|
|R-10|Operational|Email/SMS provider outage blocks invites and approvals|Medium|
|R-11|Security|Malicious uploads (malware, polyglot files)|Medium|
|R-12|Privacy|DPDP non-compliance (consent, rights, breach notice)|Medium|
|R-13|Business|Data residency demands from enterprise buyers|Medium|
|R-14|Technical|Biometric device diversity and unreliable networks|High|
|R-15|Operational|Payroll month-end load spikes|Medium|
|R-16|Security|Payroll fraud via bank detail change|Medium|
|R-17|Business|Customer migration from spreadsheets/legacy fails|High|
|R-18|Technical|Report queries slow OLTP database|Medium|
|R-19|Security|Session/token theft on shared devices|Medium|
|R-20|Operational|Backups exist but restore untested|Medium|
|R-21|Business|Competitors (Keka, greytHR, Zoho) undercut price|High|
|R-22|Privacy|Survey anonymity promise broken by small groups|Medium|
|R-23|Technical|Mobile offline punches duplicated or tampered|Medium|
|R-24|Operational|Key person dependency (small team)|High|
|R-25|Security|Third-party integration secrets leaked|Low|
|R-26|Business|AI assistant gives wrong policy advice|Medium|
|R-27|Technical|Workflow engine complexity delays Phase 1|Medium|
|R-28|Compliance|Audit retention purges data under legal hold|Low|



||||
| - | - | - |
||||
||||
|**Impact**|**Mitigation**|**Owner**|
|Critical|Composite FKs + RLS + central scope builder + isolation suite on every PR; S0 gate|Tech lead|
|Critical|Permission ceiling, no self-grant, platform roles unassignable, negative tests|Tech lead|
|Critical|Payroll exchange first; signed rule sets; 2-period parallel run; maker-checker|Payroll SME|
|High|Effective-dated rule sets with source URLs; compliance calendar; monthly rule review|Compliance|
|High|Golden fixtures signed by HR; property-based tests; device drift flags|QA lead|
|High|Ledger + FOR UPDATE projection; concurrency tests (LEV-001)|Tech lead|
|High|Phase gates; P0 before P1; PO change control; feature flags|Product Owner|
|Medium|This blueprint is SSOT; conflicts register CF-01..42 signed|Product Owner|
|Medium|Raw SQL migrations; ADR; repository helpers|Tech lead|
|Medium|Outbox retries; secondary provider; in-app fallback|DevOps|
|High|Scan before availability; type sniffing; no inline render|Security|
|High|Privacy controls in M23; legal review before GA|Privacy/Legal|
|High|AWS Mumbai primary + Hyderabad DR|Product Owner|
|Medium|Pluggable adapters; exceptions queue; start with 2 vendors|Engineering|
|Medium|Chunked jobs, per-tenant concurrency, autoscaling workers|DevOps|
|High|Approval + MFA step-up + notification + 48 h cooling|Payroll SME|
|Medium|Import framework with preview; templates; migration playbook|Customer success|
|Medium|Read replica; background exports; warehouse in Phase 8|Tech lead|
|High|Short access tokens, idle timeout, device session list, MFA|Security|
|Critical|Monthly restore drills (DB-MIG-002)|DevOps|
|Medium|Differentiate on compliance accuracy, UX, multi-entity; PEPM bundles|Founder|
|Medium|Minimum group size; no respondent FK in anonymous mode|HR + Privacy|
|Medium|Idempotency keys, drift detection, root/mock checks|Mobile lead|
|High|ADRs, runbooks, pairing, documented SSOT|Founder|
|High|Secrets Manager, write-only UI, rotation|Security|
|Medium|Citations, retrieval-only, disclaimers, human escalation|Product Owner|
|High|Start with single/two-step templates; visual builder later|Tech lead|
|High|Hold check in purge job; tests|Compliance|


|**Assumption Register**||
| - | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*||
|||
|**Assumption ID**||
|A-01||
|A-02||
|A-03||
|A-04||
|A-05||
|A-06||
|A-07||
|A-08||
|A-09||
|A-10||
|A-11||
|A-12||
|A-13||
|A-14||
|A-15||
|A-16||
|A-17||
|A-18||
|A-19||
|A-20||
|A-21||
|A-22||
|A-23||
|A-24||
|A-25||
|A-26||
|A-27||
|A-28||
|A-29||
|A-30||
|A-31||
|A-32||
|A-33||
|A-34||
|A-35||
|A-36||
|A-37||
|A-38||
|A-N01||
|A-N02||
|A-N03||
|A-N04||
|A-N05||
|A-N06||



|A-N07|
| - |
|A-N08|
|A-N09|
|A-N10|
|A-N11|
|A-N12|
|A-N13|
|A-N14|
|A-N15|
|A-N16|
|A-N17|
|A-N18|
|A-N19|
|A-N20|
|A-N21|
|A-N22|
|A-N23|
|A-N24|
|A-N25|
|A-N26|
|A-N27|
|A-N28|
|A-N29|
|A-N30|
|A-N31|
|A-N32|
|A-N33|
|A-N34|
|A-N35|
|A-N36|
|A-N37|
|A-N38|
|A-N39|
|A-N40|
|A-N41|
|A-N42|
|A-N43|
|A-N44|
|A-N45|
|A-N46|
|A-N47|
|A-N48|
|A-N49|
|A-N50|
|A-N51|
|A-N52|
|A-N53|
|A-N54|
|A-N55|
|A-N56|



|A-N57|
| - |
|A-N58|
|A-N59|
|A-N60|
|A-N61|
|A-N62|
|A-N63|
|A-N64|
|A-N65|
|A-N66|
|A-N67|
|A-N68|
|A-N69|
|A-N70|
|A-N71|
|A-N72|
|A-N73|
|A-N74|
|A-N75|
|A-N76|
|A-N77|
|A-N78|
|A-N79|
|A-N80|
|A-N81|
|A-N82|
|A-N83|
|A-N84|
|A-N85|
|A-N86|
|A-N87|
|A-N88|
|A-N89|
|A-N90|
|A-N91|
|A-N92|
|A-N93|
|A-N94|
|A-N95|
|A-N96|
|A-N97|
|A-N98|
|A-N99|
|A-N100|
|A-N101|
|A-N102|



||
| - |
||
||
|**Assumption**|
|Pack B (v2.0, 27-Oct-2026) supersedes Pack A where they conflict on scope and tenancy; Pack A mechanics hold where Pack B is 'proposed/open'|
|India is the first market; statutory engine abstracts jurisdiction for later US/GCC|
|Primary hosting AWS ap-south-1; DR ap-south-2|
|Team of two squads (~8 engineers + QA + designer), 2-week sprints, ~70 story points per sprint combined|
|Story points: S=3, M=5, L=8, XL=13; FE/BE day estimates derived from points|
|Users have at most one membership until the PO raises the cap|
|Each tenant gets one default legal entity at signup|
|Employee number unique per tenant|
|Attendance and leave rules ship disabled until a signed policy version exists per tenant|
|Native payroll activates per legal entity only after parallel-run sign-off|
|Finance core (GL) is optional and not on the critical path|
|Statutory rates are not hard-coded; published as signed rule sets|
|Aadhaar full number is not stored by default|
|Retention defaults per Section 8.6 apply until legal approves a schedule|
|Resend is primary email; SES fallback|
|Mobile app built with React Native (Expo)|
|Web app stays an SPA (Vite), not Next.js|
|Cursor pagination, default 20, max 100|
|Cross-tenant access returns 404|
|Self-approval is always blocked|
|Manager TEAM scope = direct reports; TEAM\_TREE is a separate grant|
|WCAG 2.2 AA is the accessibility target|
|MFA mandatory for privileged roles at first production release|
|Import framework available in Phase 2|
|Billing automation (invoices, gateway) only in Phase 8; trial lifecycle from Phase 1|
|Selfie punch optional per tenant with 90-day retention|
|Contractors are employees with type 'contractor'|
|Initial PT/LWF states: MH, KA, TN, TS, WB, GJ|
|Initial biometric vendors: eSSL and ZKTeco|
|Bank formats at launch: HDFC, ICICI, SBI, Axis + generic CSV|
|Candidate data retained 12 months after last activity|
|Peer feedback anonymity threshold 3; survey minimum group 5|
|Gated modules (finance, billing tax, native payroll) do not block P0 release|
|No meeting notes, chats or wireframes beyond the two packs exist|
|Performance baselines: CRUD p95 <500 ms, reports <2 s, punch <300 ms|
|SLO 99.5%, RPO 15 min, RTO 4 h are targets until tested|
|Phase order follows the master prompt (Payroll 4, Recruitment 5); recruitment may run in parallel with a second squad|
|Velocity ramps: sprints 1-2 at 50%, sprint 3 at 75%, then 100%|
|Gap-fill requirement TEN-008 (Tenant data export on exit) is in scope as specified|
|Gap-fill requirement IAM-005 (Change password) is in scope as specified|
|Gap-fill requirement IAM-009 (SCIM provisioning) is in scope as specified|
|Gap-fill requirement IAM-010 (Passkeys (WebAuthn)) is in scope as specified|
|Gap-fill requirement IAM-026 (Access review report) is in scope as specified|
|Gap-fill requirement ORG-002 (Statutory registrations) is in scope as specified|



|Gap-fill requirement ORG-004 (Branches) is in scope as specified|
| - |
|Gap-fill requirement ORG-007 (Grades/bands) is in scope as specified|
|Gap-fill requirement ORG-008 (Cost centers) is in scope as specified|
|Gap-fill requirement ORG-010 (Org chart) is in scope as specified|
|Gap-fill requirement EMP-006 (Future-dated changes job) is in scope as specified|
|Gap-fill requirement EMP-007 (Manager cycle prevention) is in scope as specified|
|Gap-fill requirement EMP-011 (Statutory IDs (restricted)) is in scope as specified|
|Gap-fill requirement EMP-012 (Probation tracking) is in scope as specified|
|Gap-fill requirement EMP-016 (Work anniversaries & birthdays feed) is in scope as specified|
|Gap-fill requirement ESS-006 (Privacy notice acknowledgement) is in scope as specified|
|Gap-fill requirement ESS-007 (My data download) is in scope as specified|
|Gap-fill requirement DOC-004 (Document types config) is in scope as specified|
|Gap-fill requirement DOC-009 (E-sign integration) is in scope as specified|
|Gap-fill requirement DOC-010 (Company document library) is in scope as specified|
|Gap-fill requirement REC-003 (Careers page & apply) is in scope as specified|
|Gap-fill requirement REC-004 (Job board distribution) is in scope as specified|
|Gap-fill requirement REC-005 (Employee referrals) is in scope as specified|
|Gap-fill requirement REC-008 (Resume parsing) is in scope as specified|
|Gap-fill requirement REC-013 (Candidate offer portal) is in scope as specified|
|Gap-fill requirement REC-015 (Recruitment analytics) is in scope as specified|
|Gap-fill requirement ONB-003 (Pre-joining portal) is in scope as specified|
|Gap-fill requirement ONB-004 (Document verification) is in scope as specified|
|Gap-fill requirement ONB-005 (Mark joined / no-show) is in scope as specified|
|Gap-fill requirement ONB-006 (Buddy & induction) is in scope as specified|
|Gap-fill requirement OFB-001 (Resignation submission) is in scope as specified|
|Gap-fill requirement OFB-002 (Resignation acceptance & notice) is in scope as specified|
|Gap-fill requirement OFB-003 (Termination & retirement) is in scope as specified|
|Gap-fill requirement OFB-004 (Clearance checklist) is in scope as specified|
|Gap-fill requirement OFB-005 (Exit interview) is in scope as specified|
|Gap-fill requirement OFB-007 (Relieving & experience letters) is in scope as specified|
|Gap-fill requirement OFB-008 (Rehire eligibility) is in scope as specified|
|Gap-fill requirement ATT-002 (Mobile GPS punch) is in scope as specified|
|Gap-fill requirement ATT-003 (Selfie punch) is in scope as specified|
|Gap-fill requirement ATT-004 (IP restriction) is in scope as specified|
|Gap-fill requirement ATT-006 (Kiosk punch) is in scope as specified|
|Gap-fill requirement ATT-007 (Offline mobile punch sync) is in scope as specified|
|Gap-fill requirement ATT-011 (Nightly finaliser) is in scope as specified|
|Gap-fill requirement ATT-014 (On-duty / WFH requests) is in scope as specified|
|Gap-fill requirement ATT-015 (Overtime capture & approval) is in scope as specified|
|Gap-fill requirement ATT-017 (Contractor timesheets) is in scope as specified|
|Gap-fill requirement SFT-002 (Weekly-off patterns) is in scope as specified|
|Gap-fill requirement SFT-004 (Shift swap requests) is in scope as specified|
|Gap-fill requirement SFT-005 (Roster coverage report) is in scope as specified|
|Gap-fill requirement LV-008 (Leave on behalf) is in scope as specified|
|Gap-fill requirement LV-010 (Year-end processing) is in scope as specified|
|Gap-fill requirement LV-011 (Comp-off) is in scope as specified|
|Gap-fill requirement LV-013 (Team leave calendar) is in scope as specified|
|Gap-fill requirement LV-015 (Opening balance import) is in scope as specified|
|Gap-fill requirement PAY-005 (Bulk revision upload) is in scope as specified|
|Gap-fill requirement PAY-009 (Variance review) is in scope as specified|



|Gap-fill requirement PAY-014 (Loans & advances) is in scope as specified|
| - |
|Gap-fill requirement PAY-017 (GL journal export) is in scope as specified|
|Gap-fill requirement STA-011 (Compliance calendar) is in scope as specified|
|Gap-fill requirement PRF-003 (KPI library) is in scope as specified|
|Gap-fill requirement PRF-004 (Continuous check-ins & 1:1s) is in scope as specified|
|Gap-fill requirement PRF-006 (360 / peer feedback) is in scope as specified|
|Gap-fill requirement PRF-008 (Release & acknowledgement) is in scope as specified|
|Gap-fill requirement PRF-010 (PIP) is in scope as specified|
|Gap-fill requirement LMS-004 (Assessments) is in scope as specified|
|Gap-fill requirement LMS-005 (Training calendar & sessions) is in scope as specified|
|Gap-fill requirement LMS-006 (Certifications with expiry) is in scope as specified|
|Gap-fill requirement LMS-007 (Training requests & budget) is in scope as specified|
|Gap-fill requirement AST-003 (Asset requests) is in scope as specified|
|Gap-fill requirement AST-006 (Asset reports) is in scope as specified|
|Gap-fill requirement HLP-003 (Agent workspace) is in scope as specified|
|Gap-fill requirement HLP-004 (SLA timers & escalation) is in scope as specified|
|Gap-fill requirement HLP-005 (Knowledge base) is in scope as specified|
|Gap-fill requirement HLP-006 (CSAT & helpdesk reports) is in scope as specified|
|Gap-fill requirement EXP-001 (Expense policies) is in scope as specified|
|Gap-fill requirement EXP-004 (Advances) is in scope as specified|
|Gap-fill requirement EXP-006 (Expense reports) is in scope as specified|
|Gap-fill requirement TRV-001 (Travel policies) is in scope as specified|
|Gap-fill requirement TRV-002 (Travel request) is in scope as specified|
|Gap-fill requirement TRV-003 (Travel desk bookings) is in scope as specified|
|Gap-fill requirement TRV-004 (Trip settlement) is in scope as specified|
|Gap-fill requirement ENG-001 (Announcements) is in scope as specified|
|Gap-fill requirement ENG-002 (Polls) is in scope as specified|
|Gap-fill requirement ENG-005 (Social feed moderation) is in scope as specified|
|Gap-fill requirement RPT-004 (Scheduled reports) is in scope as specified|
|Gap-fill requirement AUD-004 (Restricted data access log) is in scope as specified|
|Gap-fill requirement AUD-006 (DPDP data-principal requests) is in scope as specified|
|Gap-fill requirement AUD-007 (Login history) is in scope as specified|
|Gap-fill requirement AUD-008 (POSH case log (restricted)) is in scope as specified|
|Gap-fill requirement NTF-008 (Daily digests) is in scope as specified|
|Gap-fill requirement WF-007 (Email/mobile action links) is in scope as specified|
|Gap-fill requirement INT-002 (Public API keys) is in scope as specified|
|Gap-fill requirement INT-004 (Accounting connectors) is in scope as specified|
|Gap-fill requirement INT-005 (Slack / Teams) is in scope as specified|
|Gap-fill requirement INT-006 (Integration health) is in scope as specified|
|Gap-fill requirement MOB-001 (Mobile auth & device binding) is in scope as specified|
|Gap-fill requirement MOB-002 (Mobile ESS) is in scope as specified|
|Gap-fill requirement MOB-003 (Mobile manager approvals) is in scope as specified|
|Gap-fill requirement MOB-004 (Mobile expense capture) is in scope as specified|
|Gap-fill requirement MOB-005 (Mobile security controls) is in scope as specified|
|Gap-fill requirement IMP-003 (Other imports) is in scope as specified|
|Gap-fill requirement AI-003 (Review writing assistance) is in scope as specified|



||
| - |
||
||
|**Basis / link**|
|Both packs|
|B-01|
|CF-11|
|OQ-48|
|Estimation|
|CF-02|
|CF-01|
|CF-19|
|CF-06|
|CF-07|
|CF-08|
|B-15|
|OQ-13|
|CF-33|
|CF-13|
|OQ-42|
|CF-40|
|CF-14|
|CF-16|
|CF-31|
|CF-32|
|CF-35|
|CF-36|
|CF-37|
|CF-38|
|OQ-43|
|OQ-09|
|OQ-07|
|OQ-10|
|OQ-23|
|OQ-26|
|OQ-29/30|
|B-01|
|OQ-01|
|CF-34|
|CF-34|
|CF-09|
|Estimation|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|



|04-Missing|
| - |
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|



|04-Missing|
| - |
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|
|04-Missing|


|**Dependencies**|||
| - | :- | :- |
|*Source: HRMS Product Blueprint v3.0 (27 Oct 2026). Filter with the header row; see README for legend.*|||
||||
|**Dependency ID**|**Type**||
|D-01|Internal||
|D-02|Internal||
|D-03|Internal||
|D-04|Internal||
|D-05|Internal||
|D-06|External||
|D-07|External||
|D-08|External||
|D-09|External||
|D-10|External||
|D-11|External||
|D-12|External||
|D-13|External||
|D-14|External||
|D-15|External||
|D-16|External||



||
| - |
||
||
|**Dependency**|
|Phase 2-8 depend on Phase 1 tenant context, RBAC, workflow, outbox, audit|
|Payroll (Phase 4) depends on attendance lock and leave LOP (Phase 3)|
|Onboarding depends on recruitment offer conversion and asset allocation|
|F&F depends on exit clearance, leave balances, loans, assets|
|Mobile app depends on stable ESS/manager APIs and OAuth endpoints|
|Signed HR attendance/leave policies per tenant (GATE-03)|
|Statutory rule sign-off by qualified payroll/tax specialist|
|Privacy/legal review of retention, DPDP notices, sub-processors|
|AWS account, KMS, domain, SSL, SES/Resend verified domains|
|DLT registration for SMS templates (TRAI)|
|Biometric vendor SDK/API access and test devices|
|Bank file specifications from customers' banks|
|Job board partner API access (LinkedIn, Naukri, Indeed)|
|Apple/Google developer accounts and store approvals|
|Payment gateway merchant account (Razorpay/Stripe)|
|Third-party penetration testing vendor|



||
| - |
||
||
|**Affects**|
|All modules|
|M13|
|M08|
|M13/M09|
|M27|
|M10/M12|
|M14|
|M23/M28|
|Infra|
|M24|
|M10|
|M13|
|M07|
|M27|
|M01|
|M28|

