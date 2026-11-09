import { GenericListPage } from "@/components/shared/GenericListPage";
import { BookOpen, FileText, Award, Play, Clock, GraduationCap } from "lucide-react";
import { lmsApi } from "@/api/hooks/payroll";

export function CoursesPage() {
  return (
    <GenericListPage
      title="Courses"
      subtitle="Manage learning management system courses"
      icon={BookOpen}
      api={{
        list: (params) => lmsApi.courses.list(params.tenantId || ""),
        create: (data) => lmsApi.courses.create({ ...data, tenantId: "" }),
        update: (id, data) => lmsApi.courses.update(id, data),
        delete: (id) => lmsApi.courses.delete(id),
      }}
      fields={[
        { key: "code", label: "Code" },
        { key: "title", label: "Title" },
        { key: "type", label: "Type" },
        { key: "category", label: "Category" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "code", label: "Course Code", type: "text", required: true },
        { key: "title", label: "Title", type: "text", required: true },
        { key: "description", label: "Description", type: "textarea" },
        { key: "type", label: "Course Type", type: "select", required: true,
          options: [
            { label: "Video", value: "VIDEO" },
            { label: "Document", value: "DOCUMENT" },
            { label: "SCORM", value: "SCORM" },
            { label: "Classroom", value: "CLASSROOM" },
            { label: "External", value: "EXTERNAL" },
          ]
        },
        { key: "contentUrl", label: "Content URL", type: "text" },
        { key: "durationMins", label: "Duration (Minutes)", type: "number" },
        { key: "category", label: "Category", type: "text" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function EnrollmentsPage() {
  return (
    <GenericListPage
      title="Enrollments"
      subtitle="Manage course enrollments"
      icon={GraduationCap}
      api={{
        list: (params) => lmsApi.enrollments.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => lmsApi.enrollments.create({ ...data, tenantId: "" }),
        update: (id, data) => lmsApi.enrollments.update(id, data),
        delete: (id) => lmsApi.enrollments.delete(id),
      }}
      fields={[
        { key: "courseId", label: "Course ID" },
        { key: "employeeId", label: "Employee ID" },
        { key: "status", label: "Status", type: "status" },
        { key: "progressPct", label: "Progress %" },
        { key: "score", label: "Score" },
      ]}
      formFields={[
        { key: "courseId", label: "Course ID", type: "text", required: true },
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "status", label: "Status", type: "select", required: true,
          options: [
            { label: "Enrolled", value: "ENROLLED" },
            { label: "In Progress", value: "IN_PROGRESS" },
            { label: "Completed", value: "COMPLETED" },
            { label: "Failed", value: "FAILED" },
          ]
        },
        { key: "progressPct", label: "Progress %", type: "number" },
        { key: "startedAt", label: "Started At", type: "date" },
        { key: "completedAt", label: "Completed At", type: "date" },
        { key: "score", label: "Score", type: "number" },
        { key: "certificateUrl", label: "Certificate URL", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function AssessmentsPage() {
  return (
    <GenericListPage
      title="Assessments"
      subtitle="Manage course assessments and quizzes"
      icon={FileText}
      api={{
        list: (params) => lmsApi.assessments.list(params.tenantId || ""),
        create: (data) => lmsApi.assessments.create({ ...data, tenantId: "" }),
        update: (id, data) => lmsApi.assessments.update(id, data),
        delete: (id) => lmsApi.assessments.delete(id),
      }}
      fields={[
        { key: "title", label: "Title" },
        { key: "courseId", label: "Course ID" },
        { key: "passMark", label: "Pass Mark" },
        { key: "maxAttempts", label: "Max Attempts" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "courseId", label: "Course ID", type: "text" },
        { key: "title", label: "Assessment Title", type: "text", required: true },
        { key: "passMark", label: "Pass Mark", type: "number", required: true },
        { key: "maxAttempts", label: "Max Attempts", type: "number" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function CertificationsPage() {
  return (
    <GenericListPage
      title="Certifications"
      subtitle="Manage employee certifications"
      icon={Award}
      api={{
        list: (params) => lmsApi.certifications.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => lmsApi.certifications.create({ ...data, tenantId: "" }),
        update: (id, data) => lmsApi.certifications.update(id, data),
        delete: (id) => lmsApi.certifications.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "courseId", label: "Course ID" },
        { key: "certificateNo", label: "Certificate No" },
        { key: "expiryDate", label: "Expiry Date", type: "date" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "courseId", label: "Course ID", type: "text", required: true },
        { key: "certificateNo", label: "Certificate Number", type: "text", required: true },
        { key: "issuedAt", label: "Issued At", type: "date" },
        { key: "expiryDate", label: "Expiry Date", type: "date" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function TrainingRequestsPage() {
  return (
    <GenericListPage
      title="Training Requests"
      subtitle="Manage external training requests"
      icon={Clock}
      api={{
        list: (params) => lmsApi.trainingRequests.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => lmsApi.trainingRequests.create({ ...data, tenantId: "" }),
        update: (id, data) => lmsApi.trainingRequests.update(id, data),
        delete: (id) => lmsApi.trainingRequests.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "trainingName", label: "Training Name" },
        { key: "provider", label: "Provider" },
        { key: "status", label: "Status", type: "status" },
        { key: "budget", label: "Budget", type: "currency" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "trainingName", label: "Training Name", type: "text", required: true },
        { key: "provider", label: "Provider", type: "text" },
        { key: "startDate", label: "Start Date", type: "date" },
        { key: "endDate", label: "End Date", type: "date" },
        { key: "budget", label: "Budget", type: "number" },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}
