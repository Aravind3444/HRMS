import { GenericListPage } from "@/components/shared/GenericListPage";
import { FileText, Building2, ShieldAlert, Folder, CreditCard, Banknote, Award, Phone, Mail, Briefcase, User, Calendar } from "lucide-react";
import { documentsApi } from "@/api/hooks/ess";
import { recruitmentApi } from "@/api/hooks/ess";
import { onboardingApi } from "@/api/hooks/ess";
import { offboardingApi } from "@/api/hooks/attendance";

// ==========================================
// M06: DOCUMENTS MANAGEMENT
// ==========================================

export function DocumentTypesPage() {
  return (
    <GenericListPage
      title="Document Types"
      subtitle="Configure document types for employees"
      icon={FileText}
      api={{
        list: (params) => documentsApi.documentTypes.list(params.tenantId || ""),
        create: (data) => documentsApi.documentTypes.create({ ...data, tenantId: "" }),
        update: (id, data) => documentsApi.documentTypes.update(id, data),
        delete: (id) => documentsApi.documentTypes.delete(id),
      }}
      fields={[
        { key: "code", label: "Code" },
        { key: "name", label: "Name" },
        { key: "requiresExpiry", label: "Requires Expiry", type: "boolean" },
        { key: "isMandatory", label: "Mandatory", type: "boolean" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "code", label: "Code", type: "text", required: true },
        { key: "name", label: "Name", type: "text", required: true },
        { key: "requiresExpiry", label: "Requires Expiry Date", type: "checkbox" },
        { key: "maxFileSize", label: "Max File Size (KB)", type: "number" },
        { key: "allowedTypes", label: "Allowed MIME Types", type: "text" },
        { key: "isMandatory", label: "Is Mandatory", type: "checkbox" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function CompanyDocumentsPage() {
  return (
    <GenericListPage
      title="Company Documents"
      subtitle="Manage company policy and reference documents"
      icon={Folder}
      api={{
        list: (params) => documentsApi.companyDocuments.list(params.tenantId || ""),
        create: (data) => documentsApi.companyDocuments.create({ ...data, tenantId: "" }),
        update: (id, data) => documentsApi.companyDocuments.update(id, data),
        delete: (id) => documentsApi.companyDocuments.delete(id),
      }}
      fields={[
        { key: "documentName", label: "Document Name" },
        { key: "documentTypeId", label: "Document Type ID" },
        { key: "version", label: "Version" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "documentTypeId", label: "Document Type ID", type: "text", required: true },
        { key: "documentName", label: "Document Name", type: "text", required: true },
        { key: "fileUrl", label: "File URL", type: "text" },
        { key: "fileSize", label: "File Size", type: "number" },
        { key: "version", label: "Version", type: "number" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function DocumentTemplatesPage() {
  return (
    <GenericListPage
      title="Document Templates"
      subtitle="Manage document generation templates"
      icon={FileText}
      api={{
        list: (params) => documentsApi.documentTemplates.list(params.tenantId || ""),
        create: (data) => documentsApi.documentTemplates.create({ ...data, tenantId: "" }),
        update: (id, data) => documentsApi.documentTemplates.update(id, data),
        delete: (id) => documentsApi.documentTemplates.delete(id),
      }}
      fields={[
        { key: "code", label: "Code" },
        { key: "name", label: "Name" },
        { key: "templateType", label: "Template Type" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "code", label: "Code", type: "text", required: true },
        { key: "name", label: "Name", type: "text", required: true },
        { key: "templateType", label: "Template Type", type: "select", required: true,
          options: [
            { label: "Offer Letter", value: "OFFER" },
            { label: "Appointment Letter", value: "APPOINTMENT" },
            { label: "Confirmation Letter", value: "CONFIRMATION" },
            { label: "Increment Letter", value: "INCREMENT" },
            { label: "Relieving Letter", value: "RELIEVING" },
            { label: "Experience Letter", value: "EXPERIENCE" },
          ]
        },
        { key: "bodyHtml", label: "Body HTML", type: "textarea" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function PolicyDocumentsPage() {
  return (
    <GenericListPage
      title="Policy Documents"
      subtitle="Manage company policies"
      icon={ShieldAlert}
      api={{
        list: (params) => documentsApi.policyDocuments.list(params.tenantId || ""),
        create: (data) => documentsApi.policyDocuments.create({ ...data, tenantId: "" }),
        update: (id, data) => documentsApi.policyDocuments.update(id, data),
        delete: (id) => documentsApi.policyDocuments.delete(id),
      }}
      fields={[
        { key: "title", label: "Title" },
        { key: "version", label: "Version" },
        { key: "isActive", label: "Active", type: "boolean" },
        { key: "effectiveFrom", label: "Effective From", type: "date" },
      ]}
      formFields={[
        { key: "title", label: "Title", type: "text", required: true },
        { key: "content", label: "Content", type: "textarea", required: true },
        { key: "version", label: "Version", type: "number" },
        { key: "effectiveFrom", label: "Effective From", type: "date", required: true },
        { key: "effectiveTo", label: "Effective To", type: "date" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

// ==========================================
// M07: RECRUITMENT (ATS)
// ==========================================

export function RequisitionsPage() {
  return (
    <GenericListPage
      title="Requisitions"
      subtitle="Manage manpower requisitions"
      icon={Building2}
      api={{
        list: (params) => recruitmentApi.requisitions.list(params.tenantId || ""),
        create: (data) => recruitmentApi.requisitions.create({ ...data, tenantId: "" }),
        update: (id, data) => recruitmentApi.requisitions.update(id, data),
        delete: (id) => recruitmentApi.requisitions.delete(id),
      }}
      fields={[
        { key: "departmentId", label: "Department ID" },
        { key: "designationId", label: "Designation ID" },
        { key: "headcount", label: "Headcount" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "departmentId", label: "Department ID", type: "text", required: true },
        { key: "designationId", label: "Designation ID", type: "text", required: true },
        { key: "gradeId", label: "Grade ID", type: "text" },
        { key: "headcount", label: "Headcount", type: "number", required: true },
        { key: "budget", label: "Budget", type: "number" },
        { key: "justification", label: "Justification", type: "textarea" },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function JobsPage() {
  return (
    <GenericListPage
      title="Jobs"
      subtitle="Manage job postings"
      icon={Briefcase}
      api={{
        list: (params) => recruitmentApi.jobs.list(params.tenantId || ""),
        create: (data) => recruitmentApi.jobs.create({ ...data, tenantId: "" }),
        update: (id, data) => recruitmentApi.jobs.update(id, data),
        delete: (id) => recruitmentApi.jobs.delete(id),
      }}
      fields={[
        { key: "title", label: "Title" },
        { key: "status", label: "Status", type: "status" },
        { key: "employmentType", label: "Employment Type" },
        { key: "isInternal", label: "Internal", type: "boolean" },
      ]}
      formFields={[
        { key: "requisitionId", label: "Requisition ID", type: "text" },
        { key: "title", label: "Job Title", type: "text", required: true },
        { key: "description", label: "Description", type: "textarea", required: true },
        { key: "requirements", label: "Requirements", type: "textarea" },
        { key: "locationId", label: "Location ID", type: "text" },
        { key: "employmentType", label: "Employment Type", type: "text", required: true },
        { key: "salaryMin", label: "Salary Min", type: "number" },
        { key: "salaryMax", label: "Salary Max", type: "number" },
        { key: "status", label: "Status", type: "text" },
        { key: "isInternal", label: "Internal", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function CandidatesPage() {
  return (
    <GenericListPage
      title="Candidates"
      subtitle="Manage job candidates"
      icon={User}
      api={{
        list: (params) => recruitmentApi.candidates.list(params.tenantId || ""),
        create: (data) => recruitmentApi.candidates.create({ ...data, tenantId: "" }),
        update: (id, data) => recruitmentApi.candidates.update(id, data),
        delete: (id) => recruitmentApi.candidates.delete(id),
      }}
      fields={[
        { key: "firstName", label: "First Name" },
        { key: "lastName", label: "Last Name" },
        { key: "email", label: "Email" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "firstName", label: "First Name", type: "text", required: true },
        { key: "lastName", label: "Last Name", type: "text", required: true },
        { key: "email", label: "Email", type: "email", required: true },
        { key: "phone", label: "Phone", type: "text" },
        { key: "resumeUrl", label: "Resume URL", type: "text" },
        { key: "source", label: "Source", type: "text" },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function InterviewsPage() {
  return (
    <GenericListPage
      title="Interviews"
      subtitle="Manage interview schedules"
      icon={Calendar}
      api={{
        list: (params) => recruitmentApi.interviews.list(params.tenantId || ""),
        create: (data) => recruitmentApi.interviews.create({ ...data, tenantId: "" }),
        update: (id, data) => recruitmentApi.interviews.update(id, data),
        delete: (id) => recruitmentApi.interviews.delete(id),
      }}
      fields={[
        { key: "candidateId", label: "Candidate ID" },
        { key: "stage", label: "Stage" },
        { key: "scheduledAt", label: "Scheduled At", type: "date" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "candidateId", label: "Candidate ID", type: "text", required: true },
        { key: "jobId", label: "Job ID", type: "text" },
        { key: "stage", label: "Stage", type: "text", required: true },
        { key: "scheduledAt", label: "Scheduled At", type: "date", required: true },
        { key: "durationMins", label: "Duration (Mins)", type: "number" },
        { key: "location", label: "Location", type: "text" },
        { key: "meetingLink", label: "Meeting Link", type: "text" },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function OffersPage() {
  return (
    <GenericListPage
      title="Offers"
      subtitle="Manage job offers"
      icon={CreditCard}
      api={{
        list: (params) => recruitmentApi.offers.list(params.tenantId || ""),
        create: (data) => recruitmentApi.offers.create({ ...data, tenantId: "" }),
        update: (id, data) => recruitmentApi.offers.update(id, data),
        delete: (id) => recruitmentApi.offers.delete(id),
      }}
      fields={[
        { key: "candidateId", label: "Candidate ID" },
        { key: "position", label: "Position" },
        { key: "salary", label: "Salary" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "candidateId", label: "Candidate ID", type: "text", required: true },
        { key: "jobId", label: "Job ID", type: "text" },
        { key: "position", label: "Position", type: "text", required: true },
        { key: "department", label: "Department", type: "text" },
        { key: "grade", label: "Grade", type: "text" },
        { key: "salary", label: "Salary", type: "number", required: true },
        { key: "currency", label: "Currency", type: "text" },
        { key: "joiningDate", label: "Joining Date", type: "date", required: true },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function ReferralsPage() {
  return (
    <GenericListPage
      title="Referrals"
      subtitle="Manage employee referrals"
      icon={User}
      api={{
        list: (params) => recruitmentApi.referrals.list(params.tenantId || ""),
        create: (data) => recruitmentApi.referrals.create({ ...data, tenantId: "" }),
        update: (id, data) => recruitmentApi.referrals.update(id, data),
        delete: (id) => recruitmentApi.referrals.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "candidateId", label: "Candidate ID" },
        { key: "status", label: "Status", type: "status" },
        { key: "bonusAmount", label: "Bonus Amount" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "candidateId", label: "Candidate ID", type: "text", required: true },
        { key: "status", label: "Status", type: "text" },
        { key: "bonusAmount", label: "Bonus Amount", type: "number" },
        { key: "bonusPaid", label: "Bonus Paid", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

// ==========================================
// M08: ONBOARDING & PRE-JOINING
// ==========================================

export function OnboardingTemplatesPage() {
  return (
    <GenericListPage
      title="Onboarding Templates"
      subtitle="Configure onboarding templates"
      icon={Folder}
      api={{
        list: (params) => onboardingApi.templates.list(params.tenantId || ""),
        create: (data) => onboardingApi.templates.create({ ...data, tenantId: "" }),
        update: (id, data) => onboardingApi.templates.update(id, data),
        delete: (id) => onboardingApi.templates.delete(id),
      }}
      fields={[
        { key: "name", label: "Name" },
        { key: "entityType", label: "Entity Type" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "name", label: "Name", type: "text", required: true },
        { key: "description", label: "Description", type: "textarea" },
        { key: "entityType", label: "Entity Type", type: "text", required: true },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function OnboardingTasksPage() {
  return (
    <GenericListPage
      title="Onboarding Tasks"
      subtitle="Configure onboarding task templates"
      icon={CreditCard}
      api={{
        list: (params) => onboardingApi.tasks.list(params.tenantId || ""),
        create: (data) => onboardingApi.tasks.create({ ...data, tenantId: "" }),
        update: (id, data) => onboardingApi.tasks.update(id, data),
        delete: (id) => onboardingApi.tasks.delete(id),
      }}
      fields={[
        { key: "title", label: "Title" },
        { key: "assigneeRole", label: "Assignee Role" },
        { key: "offsetDays", label: "Offset Days" },
        { key: "isMandatory", label: "Mandatory", type: "boolean" },
      ]}
      formFields={[
        { key: "templateId", label: "Template ID", type: "text" },
        { key: "title", label: "Title", type: "text", required: true },
        { key: "description", label: "Description", type: "textarea" },
        { key: "assigneeRole", label: "Assignee Role", type: "text", required: true },
        { key: "offsetDays", label: "Offset Days", type: "number", required: true },
        { key: "isMandatory", label: "Is Mandatory", type: "checkbox" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function OnboardingCasesPage() {
  return (
    <GenericListPage
      title="Onboarding Cases"
      subtitle="Manage employee onboarding cases"
      icon={Folder}
      api={{
        list: (params) => onboardingApi.cases.list(params.tenantId || ""),
        create: (data) => onboardingApi.cases.create({ ...data, tenantId: "" }),
        update: (id, data) => onboardingApi.cases.update(id, data),
        delete: (id) => onboardingApi.cases.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "status", label: "Status", type: "status" },
        { key: "startedAt", label: "Started At", type: "date" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}

// ==========================================
// M09: OFFBOARDING & EXIT
// ==========================================

export function ResignationsPage() {
  return (
    <GenericListPage
      title="Resignations"
      subtitle="Manage employee resignations"
      icon={Mail}
      api={{
        list: (params) => offboardingApi.resignations.list(params.tenantId || ""),
        create: (data) => offboardingApi.resignations.create({ ...data, tenantId: "" }),
        update: (id, data) => offboardingApi.resignations.update(id, data),
        delete: (id) => offboardingApi.resignations.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "status", label: "Status", type: "status" },
        { key: "proposedLastDay", label: "Proposed Last Day", type: "date" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "reason", label: "Reason", type: "textarea", required: true },
        { key: "proposedLastDay", label: "Proposed Last Day", type: "date", required: true },
        { key: "noticePeriod", label: "Notice Period (Days)", type: "number" },
        { key: "waived", label: "Notice Waived", type: "checkbox" },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function TerminationsPage() {
  return (
    <GenericListPage
      title="Terminations"
      subtitle="Manage employee terminations"
      icon={ShieldAlert}
      api={{
        list: (params) => offboardingApi.terminations.list(params.tenantId || ""),
        create: (data) => offboardingApi.terminations.create({ ...data, tenantId: "" }),
        update: (id, data) => offboardingApi.terminations.update(id, data),
        delete: (id) => offboardingApi.terminations.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "category", label: "Category" },
        { key: "effectiveDate", label: "Effective Date", type: "date" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "category", label: "Category", type: "text", required: true },
        { key: "reason", label: "Reason", type: "textarea", required: true },
        { key: "effectiveDate", label: "Effective Date", type: "date", required: true },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function ClearanceChecklistPage() {
  return (
    <GenericListPage
      title="Clearance Checklist"
      subtitle="Manage offboarding clearance items"
      icon={ShieldAlert}
      api={{
        list: (params) => offboardingApi.clearance.list(params.tenantId || "", params.terminationId || ""),
        create: (data) => offboardingApi.clearance.create({ ...data, tenantId: "" }),
        update: (id, data) => offboardingApi.clearance.update(id, data),
        delete: (id) => offboardingApi.clearance.delete(id),
      }}
      fields={[
        { key: "terminationId", label: "Termination ID" },
        { key: "department", label: "Department" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "terminationId", label: "Termination ID", type: "text", required: true },
        { key: "department", label: "Department", type: "text", required: true },
        { key: "status", label: "Status", type: "text" },
        { key: "comments", label: "Comments", type: "textarea" },
      ]}
      tenantId=""
    />
  );
}

export function ExitInterviewsPage() {
  return (
    <GenericListPage
      title="Exit Interviews"
      subtitle="Manage exit interview records"
      icon={Phone}
      api={{
        list: (params) => offboardingApi.exitInterviews.list(params.tenantId || ""),
        create: (data) => offboardingApi.exitInterviews.create({ ...data, tenantId: "" }),
        update: (id, data) => offboardingApi.exitInterviews.update(id, data),
        delete: (id) => offboardingApi.exitInterviews.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "interviewerId", label: "Interviewer ID" },
        { key: "rating", label: "Rating" },
        { key: "isConfidential", label: "Confidential", type: "boolean" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "interviewerId", label: "Interviewer ID", type: "text" },
        { key: "scheduledAt", label: "Scheduled At", type: "date" },
        { key: "conductedAt", label: "Conducted At", type: "date" },
        { key: "feedback", label: "Feedback", type: "textarea" },
        { key: "rating", label: "Rating (1-5)", type: "number" },
        { key: "isConfidential", label: "Is Confidential", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}
