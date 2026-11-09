import { GenericListPage } from "@/components/shared/GenericListPage";
import { BarChart3, ClipboardList, ShieldAlert, FileText } from "lucide-react";
import { reportsApi } from "@/api/hooks/reports";
import { auditApi } from "@/api/hooks/reports";

// ==========================================
// M22: REPORTS & DASHBOARDS
// ==========================================

export function ReportTemplatesPage() {
  return (
    <GenericListPage
      title="Report Templates"
      subtitle="Configure report templates"
      icon={BarChart3}
      api={{
        list: (params) => reportsApi.templates.list(params.tenantId || ""),
        create: (data) => reportsApi.templates.create({ ...data, tenantId: "" }),
        update: (id, data) => reportsApi.templates.update(id, data),
        delete: (id) => reportsApi.templates.delete(id),
      }}
      fields={[
        { key: "code", label: "Code" },
        { key: "name", label: "Name" },
        { key: "category", label: "Category" },
        { key: "isPublic", label: "Public", type: "boolean" },
      ]}
      formFields={[
        { key: "code", label: "Code", type: "text", required: true },
        { key: "name", label: "Name", type: "text", required: true },
        { key: "category", label: "Category", type: "text", required: true },
        { key: "configJson", label: "Config JSON", type: "textarea" },
        { key: "isPublic", label: "Is Public", type: "checkbox" },
        { key: "createdById", label: "Created By ID", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function ReportExecutionsPage() {
  return (
    <GenericListPage
      title="Report Executions"
      subtitle="View report execution history"
      icon={ClipboardList}
      api={{
        list: (params) => reportsApi.executions.list(params.tenantId || ""),
        create: (data) => reportsApi.executions.create({ ...data, tenantId: "" }),
        update: (id, data) => reportsApi.executions.update(id, data),
        delete: (id) => reportsApi.executions.delete(id),
      }}
      fields={[
        { key: "templateId", label: "Template ID" },
        { key: "userId", label: "User ID" },
        { key: "status", label: "Status", type: "status" },
        { key: "fileFormat", label: "Format" },
        { key: "rowCount", label: "Row Count" },
      ]}
      formFields={[
        { key: "templateId", label: "Template ID", type: "text", required: true },
        { key: "userId", label: "User ID", type: "text", required: true },
        { key: "status", label: "Status", type: "text" },
        { key: "parametersJson", label: "Parameters JSON", type: "textarea" },
        { key: "resultUrl", label: "Result URL", type: "text" },
        { key: "fileFormat", label: "File Format", type: "text" },
        { key: "rowCount", label: "Row Count", type: "number" },
      ]}
      tenantId=""
    />
  );
}

// ==========================================
// M23: AUDIT & COMPLIANCE
// ==========================================

export function AuditEventsPage() {
  return (
    <GenericListPage
      title="Audit Events"
      subtitle="View system audit trail"
      icon={ShieldAlert}
      api={{
        list: (params) => auditApi.events.list(params.tenantId || ""),
        create: (data) => auditApi.events.create({ ...data, tenantId: "" }),
        update: (id, data) => auditApi.events.update(id, data),
        delete: (id) => auditApi.events.delete(id),
      }}
      fields={[
        { key: "action", label: "Action" },
        { key: "resourceType", label: "Resource Type" },
        { key: "resourceId", label: "Resource ID" },
        { key: "actorUserId", label: "Actor User ID" },
        { key: "createdAt", label: "Created At", type: "date" },
      ]}
      formFields={[
        { key: "tenantId", label: "Tenant ID", type: "text" },
        { key: "actorUserId", label: "Actor User ID", type: "text" },
        { key: "action", label: "Action", type: "text", required: true },
        { key: "resourceType", label: "Resource Type", type: "text", required: true },
        { key: "resourceId", label: "Resource ID", type: "text" },
        { key: "diffJson", label: "Diff JSON", type: "textarea" },
        { key: "ipAddress", label: "IP Address", type: "text" },
        { key: "correlationId", label: "Correlation ID", type: "text" },
        { key: "reason", label: "Reason", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function DataPrincipalRequestsPage() {
  return (
    <GenericListPage
      title="Data Principal Requests"
      subtitle="Manage DPDP data access requests"
      icon={FileText}
      api={{
        list: (params) => auditApi.dataPrincipalRequests.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => auditApi.dataPrincipalRequests.create({ ...data, tenantId: "" }),
        update: (id, data) => auditApi.dataPrincipalRequests.update(id, data),
        delete: (id) => auditApi.dataPrincipalRequests.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "requestType", label: "Request Type" },
        { key: "status", label: "Status", type: "status" },
        { key: "dueDate", label: "Due Date", type: "date" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "requestType", label: "Request Type", type: "select", required: true,
          options: [
            { label: "Access", value: "ACCESS" },
            { label: "Correction", value: "CORRECTION" },
            { label: "Erasure", value: "ERASURE" },
            { label: "Grievance", value: "GRIEVANCE" },
          ]
        },
        { key: "description", label: "Description", type: "textarea", required: true },
        { key: "status", label: "Status", type: "text" },
        { key: "dueDate", label: "Due Date", type: "date", required: true },
        { key: "completedAt", label: "Completed At", type: "date" },
        { key: "responseUrl", label: "Response URL", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function LoginHistoryPage() {
  return (
    <GenericListPage
      title="Login History"
      subtitle="View user login audit trail"
      icon={ShieldAlert}
      api={{
        list: (params) => auditApi.loginHistory.list(params.tenantId || "", params.userId || ""),
        create: (data) => auditApi.loginHistory.create({ ...data, tenantId: "" }),
        update: (id, data) => auditApi.loginHistory.update(id, data),
        delete: (id) => auditApi.loginHistory.delete(id),
      }}
      fields={[
        { key: "userId", label: "User ID" },
        { key: "ipAddress", label: "IP Address" },
        { key: "loginAt", label: "Login At", type: "date" },
        { key: "logoutAt", label: "Logout At", type: "date" },
        { key: "isSuccessful", label: "Successful", type: "boolean" },
      ]}
      formFields={[
        { key: "tenantId", label: "Tenant ID", type: "text" },
        { key: "userId", label: "User ID", type: "text", required: true },
        { key: "ipAddress", label: "IP Address", type: "text" },
        { key: "userAgent", label: "User Agent", type: "text" },
        { key: "loginAt", label: "Login At", type: "date" },
        { key: "logoutAt", label: "Logout At", type: "date" },
        { key: "isSuccessful", label: "Is Successful", type: "checkbox" },
        { key: "failureReason", label: "Failure Reason", type: "text" },
      ]}
      tenantId=""
    />
  );
}
