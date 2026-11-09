import { GenericListPage } from "@/components/shared/GenericListPage";
import { ShieldAlert, Upload, Calculator, FileText, Brain } from "lucide-react";
import { securityApi } from "@/api/hooks/reports";
import { importExportApi } from "@/api/hooks/reports";
import { financeApi } from "@/api/hooks/reports";
import { aiApi } from "@/api/hooks/reports";

// ==========================================
// M28: SECURITY & DATA PROTECTION
// ==========================================

export function SecurityEventsPage() {
  return (
    <GenericListPage
      title="Security Events"
      subtitle="View security audit events"
      icon={ShieldAlert}
      api={{
        list: (params) => securityApi.events.list(params.tenantId || ""),
        create: (data) => securityApi.events.create({ ...data, tenantId: "" }),
        update: (id, data) => securityApi.events.update(id, data),
        delete: (id) => securityApi.events.delete(id),
      }}
      fields={[
        { key: "eventType", label: "Event Type" },
        { key: "userId", label: "User ID" },
        { key: "ipAddress", label: "IP Address" },
        { key: "severity", label: "Severity" },
        { key: "createdAt", label: "Created At", type: "date" },
      ]}
      formFields={[
        { key: "tenantId", label: "Tenant ID", type: "text" },
        { key: "userId", label: "User ID", type: "text" },
        { key: "eventType", label: "Event Type", type: "text", required: true },
        { key: "ipAddress", label: "IP Address", type: "text" },
        { key: "userAgent", label: "User Agent", type: "text" },
        { key: "detailsJson", label: "Details JSON", type: "textarea" },
        { key: "severity", label: "Severity", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function EncryptionKeysPage() {
  return (
    <GenericListPage
      title="Encryption Keys"
      subtitle="Manage tenant encryption keys"
      icon={ShieldAlert}
      api={{
        list: (params) => securityApi.encryptionKeys.list(params.tenantId || ""),
        create: (data) => securityApi.encryptionKeys.create({ ...data, tenantId: "" }),
        update: (id, data) => securityApi.encryptionKeys.update(id, data),
        delete: (id) => securityApi.encryptionKeys.delete(id),
      }}
      fields={[
        { key: "keyName", label: "Key Name" },
        { key: "keyVersion", label: "Version" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "keyName", label: "Key Name", type: "text", required: true },
        { key: "keyVersion", label: "Key Version", type: "number", required: true },
        { key: "isActive", label: "Is Active", type: "checkbox" },
        { key: "rotatedAt", label: "Rotated At", type: "date" },
      ]}
      tenantId=""
    />
  );
}

// ==========================================
// M29: DATA IMPORT / EXPORT
// ==========================================

export function ImportJobsPage() {
  return (
    <GenericListPage
      title="Import Jobs"
      subtitle="Manage data import jobs"
      icon={Upload}
      api={{
        list: (params) => importExportApi.importJobs.list(params.tenantId || ""),
        create: (data) => importExportApi.importJobs.create({ ...data, tenantId: "" }),
        update: (id, data) => importExportApi.importJobs.update(id, data),
        delete: (id) => importExportApi.importJobs.delete(id),
      }}
      fields={[
        { key: "entityType", label: "Entity Type" },
        { key: "status", label: "Status", type: "status" },
        { key: "totalRows", label: "Total Rows" },
        { key: "successRows", label: "Success Rows" },
        { key: "errorRows", label: "Error Rows" },
      ]}
      formFields={[
        { key: "entityType", label: "Entity Type", type: "text", required: true },
        { key: "fileUrl", label: "File URL", type: "text", required: true },
        { key: "status", label: "Status", type: "text" },
        { key: "totalRows", label: "Total Rows", type: "number" },
        { key: "successRows", label: "Success Rows", type: "number" },
        { key: "errorRows", label: "Error Rows", type: "number" },
        { key: "errorLogUrl", label: "Error Log URL", type: "text" },
        { key: "createdById", label: "Created By ID", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function ExportJobsPage() {
  return (
    <GenericListPage
      title="Export Jobs"
      subtitle="Manage data export jobs"
      icon={Upload}
      api={{
        list: (params) => importExportApi.exportJobs.list(params.tenantId || ""),
        create: (data) => importExportApi.exportJobs.create({ ...data, tenantId: "" }),
        update: (id, data) => importExportApi.exportJobs.update(id, data),
        delete: (id) => importExportApi.exportJobs.delete(id),
      }}
      fields={[
        { key: "entityType", label: "Entity Type" },
        { key: "status", label: "Status", type: "status" },
        { key: "rowCount", label: "Row Count" },
        { key: "createdAt", label: "Created At", type: "date" },
      ]}
      formFields={[
        { key: "entityType", label: "Entity Type", type: "text", required: true },
        { key: "fileUrl", label: "File URL", type: "text" },
        { key: "status", label: "Status", type: "text" },
        { key: "rowCount", label: "Row Count", type: "number" },
        { key: "createdById", label: "Created By ID", type: "text" },
        { key: "completedAt", label: "Completed At", type: "date" },
        { key: "expiresAt", label: "Expires At", type: "date" },
      ]}
      tenantId=""
    />
  );
}

// ==========================================
// M30: FINANCE CORE
// ==========================================

export function ChartOfAccountsPage() {
  return (
    <GenericListPage
      title="Chart of Accounts"
      subtitle="Configure accounting chart of accounts"
      icon={Calculator}
      api={{
        list: (params) => financeApi.chartOfAccounts.list(params.tenantId || ""),
        create: (data) => financeApi.chartOfAccounts.create({ ...data, tenantId: "" }),
        update: (id, data) => financeApi.chartOfAccounts.update(id, data),
        delete: (id) => financeApi.chartOfAccounts.delete(id),
      }}
      fields={[
        { key: "code", label: "Code" },
        { key: "name", label: "Name" },
        { key: "type", label: "Type" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "code", label: "Account Code", type: "text", required: true },
        { key: "name", label: "Account Name", type: "text", required: true },
        { key: "type", label: "Account Type", type: "select", required: true,
          options: [
            { label: "Asset", value: "ASSET" },
            { label: "Liability", value: "LIABILITY" },
            { label: "Equity", value: "EQUITY" },
            { label: "Income", value: "INCOME" },
            { label: "Expense", value: "EXPENSE" },
          ]
        },
        { key: "parentId", label: "Parent Account ID", type: "text" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function FiscalPeriodsPage() {
  return (
    <GenericListPage
      title="Fiscal Periods"
      subtitle="Configure fiscal periods"
      icon={Calculator}
      api={{
        list: (params) => financeApi.fiscalPeriods.list(params.tenantId || ""),
        create: (data) => financeApi.fiscalPeriods.create({ ...data, tenantId: "" }),
        update: (id, data) => financeApi.fiscalPeriods.update(id, data),
        delete: (id) => financeApi.fiscalPeriods.delete(id),
      }}
      fields={[
        { key: "name", label: "Name" },
        { key: "startDate", label: "Start Date", type: "date" },
        { key: "endDate", label: "End Date", type: "date" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "name", label: "Period Name", type: "text", required: true },
        { key: "startDate", label: "Start Date", type: "date", required: true },
        { key: "endDate", label: "End Date", type: "date", required: true },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function JournalEntriesPage() {
  return (
    <GenericListPage
      title="Journal Entries"
      subtitle="Manage accounting journal entries"
      icon={FileText}
      api={{
        list: (params) => financeApi.journalEntries.list(params.tenantId || ""),
        create: (data) => financeApi.journalEntries.create({ ...data, tenantId: "" }),
        update: (id, data) => financeApi.journalEntries.update(id, data),
        delete: (id) => financeApi.journalEntries.delete(id),
      }}
      fields={[
        { key: "entryNumber", label: "Entry Number" },
        { key: "entryDate", label: "Entry Date", type: "date" },
        { key: "status", label: "Status", type: "status" },
        { key: "totalDebit", label: "Total Debit", type: "currency" },
        { key: "totalCredit", label: "Total Credit", type: "currency" },
      ]}
      formFields={[
        { key: "entryNumber", label: "Entry Number", type: "text", required: true },
        { key: "entryDate", label: "Entry Date", type: "date", required: true },
        { key: "reference", label: "Reference", type: "text" },
        { key: "status", label: "Status", type: "text" },
        { key: "totalDebit", label: "Total Debit", type: "number" },
        { key: "totalCredit", label: "Total Credit", type: "number" },
        { key: "approvedById", label: "Approved By ID", type: "text" },
        { key: "postedById", label: "Posted By ID", type: "text" },
        { key: "postedAt", label: "Posted At", type: "date" },
        { key: "createdById", label: "Created By ID", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function JournalLinesPage() {
  return (
    <GenericListPage
      title="Journal Lines"
      subtitle="Manage journal entry line items"
      icon={FileText}
      api={{
        list: (params) => financeApi.journalLines.list(params.tenantId || "", params.entryId || ""),
        create: (data) => financeApi.journalLines.create({ ...data, tenantId: "" }),
        update: (id, data) => financeApi.journalLines.update(id, data),
        delete: (id) => financeApi.journalLines.delete(id),
      }}
      fields={[
        { key: "entryId", label: "Entry ID" },
        { key: "accountId", label: "Account ID" },
        { key: "debitAmount", label: "Debit Amount", type: "currency" },
        { key: "creditAmount", label: "Credit Amount", type: "currency" },
      ]}
      formFields={[
        { key: "entryId", label: "Entry ID", type: "text", required: true },
        { key: "accountId", label: "Account ID", type: "text", required: true },
        { key: "description", label: "Description", type: "text" },
        { key: "debitAmount", label: "Debit Amount", type: "number" },
        { key: "creditAmount", label: "Credit Amount", type: "number" },
      ]}
      tenantId=""
    />
  );
}

// ==========================================
// M31: AI HR ASSISTANT
// ==========================================

export function AIConversationsPage() {
  return (
    <GenericListPage
      title="AI Conversations"
      subtitle="Manage AI assistant conversations"
      icon={Brain}
      api={{
        list: (params) => aiApi.conversations.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => aiApi.conversations.create({ ...data, tenantId: "" }),
        update: (id, data) => aiApi.conversations.update(id, data),
        delete: (id) => aiApi.conversations.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "title", label: "Title" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "title", label: "Conversation Title", type: "text", required: true },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function AIMessagesPage() {
  return (
    <GenericListPage
      title="AI Messages"
      subtitle="View AI conversation messages"
      icon={FileText}
      api={{
        list: (params) => aiApi.messages.list(params.tenantId || "", params.conversationId || ""),
        create: (data) => aiApi.messages.create({ ...data, tenantId: "" }),
        update: (id, data) => aiApi.messages.update(id, data),
        delete: (id) => aiApi.messages.delete(id),
      }}
      fields={[
        { key: "conversationId", label: "Conversation ID" },
        { key: "role", label: "Role" },
        { key: "content", label: "Content" },
        { key: "createdAt", label: "Created At", type: "date" },
      ]}
      formFields={[
        { key: "conversationId", label: "Conversation ID", type: "text", required: true },
        { key: "role", label: "Role", type: "select", required: true,
          options: [
            { label: "User", value: "USER" },
            { label: "Assistant", value: "ASSISTANT" },
          ]
        },
        { key: "content", label: "Content", type: "textarea", required: true },
        { key: "citationsJson", label: "Citations JSON", type: "textarea" },
      ]}
      tenantId=""
    />
  );
}
