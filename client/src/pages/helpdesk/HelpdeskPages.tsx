import { GenericListPage } from "@/components/shared/GenericListPage";
import { Package, ShieldAlert, Phone, FileText } from "lucide-react";
import { assetsApi } from "@/api/hooks/engagement";
import { helpdeskApi } from "@/api/hooks/engagement";
import { expenseApi } from "@/api/hooks/engagement";
import { travelApi } from "@/api/hooks/engagement";

// Re-export expense and travel pages
export * from "../expense/ExpensePages";

// ==========================================
// M17: ASSET MANAGEMENT
// ==========================================

export function AssetCategoriesPage() {
  return (
    <GenericListPage
      title="Asset Categories"
      subtitle="Configure asset categories"
      icon={Package}
      api={{
        list: (params) => assetsApi.categories.list(params.tenantId || ""),
        create: (data) => assetsApi.categories.create({ ...data, tenantId: "" }),
        update: (id, data) => assetsApi.categories.update(id, data),
        delete: (id) => assetsApi.categories.delete(id),
      }}
      fields={[
        { key: "name", label: "Name" },
        { key: "description", label: "Description" },
        { key: "depreciationYears", label: "Depreciation Years" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "name", label: "Category Name", type: "text", required: true },
        { key: "description", label: "Description", type: "textarea" },
        { key: "depreciationYears", label: "Depreciation Years", type: "number" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function AssetItemsPage() {
  return (
    <GenericListPage
      title="Asset Items"
      subtitle="Manage inventory assets"
      icon={Package}
      api={{
        list: (params) => assetsApi.items.list(params.tenantId || ""),
        create: (data) => assetsApi.items.create({ ...data, tenantId: "" }),
        update: (id, data) => assetsApi.items.update(id, data),
        delete: (id) => assetsApi.items.delete(id),
      }}
      fields={[
        { key: "name", label: "Name" },
        { key: "assetTag", label: "Asset Tag" },
        { key: "serialNo", label: "Serial No" },
        { key: "status", label: "Status", type: "status" },
        { key: "assignedToId", label: "Assigned To" },
      ]}
      formFields={[
        { key: "categoryId", label: "Category ID", type: "text", required: true },
        { key: "name", label: "Asset Name", type: "text", required: true },
        { key: "serialNo", label: "Serial Number", type: "text" },
        { key: "assetTag", label: "Asset Tag", type: "text", required: true },
        { key: "purchaseDate", label: "Purchase Date", type: "date" },
        { key: "purchasePrice", label: "Purchase Price", type: "number" },
        { key: "warrantyExpiry", label: "Warranty Expiry", type: "date" },
        { key: "status", label: "Status", type: "text" },
        { key: "condition", label: "Condition", type: "text" },
        { key: "assignedToId", label: "Assigned To ID", type: "text" },
        { key: "allocatedAt", label: "Allocated At", type: "date" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function AssetRequestsPage() {
  return (
    <GenericListPage
      title="Asset Requests"
      subtitle="Manage asset allocation requests"
      icon={Package}
      api={{
        list: (params) => assetsApi.requests.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => assetsApi.requests.create({ ...data, tenantId: "" }),
        update: (id, data) => assetsApi.requests.update(id, data),
        delete: (id) => assetsApi.requests.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "assetId", label: "Asset ID" },
        { key: "status", label: "Status", type: "status" },
        { key: "requestedAt", label: "Requested At", type: "date" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "assetId", label: "Asset ID", type: "text", required: true },
        { key: "reason", label: "Reason", type: "textarea", required: true },
        { key: "status", label: "Status", type: "text" },
        { key: "approvedById", label: "Approved By ID", type: "text" },
        { key: "approvedAt", label: "Approved At", type: "date" },
        { key: "returnedAt", label: "Returned At", type: "date" },
      ]}
      tenantId=""
    />
  );
}

export function AssetReturnsPage() {
  return (
    <GenericListPage
      title="Asset Returns"
      subtitle="Manage returned assets"
      icon={Package}
      api={{
        list: (params) => assetsApi.returns.list(params.tenantId || ""),
        create: (data) => assetsApi.returns.create({ ...data, tenantId: "" }),
        update: (id, data) => assetsApi.returns.update(id, data),
        delete: (id) => assetsApi.returns.delete(id),
      }}
      fields={[
        { key: "assetId", label: "Asset ID" },
        { key: "employeeId", label: "Employee ID" },
        { key: "condition", label: "Condition" },
        { key: "damageCharge", label: "Damage Charge", type: "currency" },
        { key: "returnedAt", label: "Returned At", type: "date" },
      ]}
      formFields={[
        { key: "assetId", label: "Asset ID", type: "text", required: true },
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "condition", label: "Condition", type: "text", required: true },
        { key: "damageNotes", label: "Damage Notes", type: "textarea" },
        { key: "damageCharge", label: "Damage Charge", type: "number" },
        { key: "returnedAt", label: "Returned At", type: "date" },
      ]}
      tenantId=""
    />
  );
}

// ==========================================
// M18: HELPDESK
// ==========================================

export function TicketCategoriesPage() {
  return (
    <GenericListPage
      title="Ticket Categories"
      subtitle="Configure helpdesk ticket categories and SLAs"
      icon={ShieldAlert}
      api={{
        list: (params) => helpdeskApi.categories.list(params.tenantId || ""),
        create: (data) => helpdeskApi.categories.create({ ...data, tenantId: "" }),
        update: (id, data) => helpdeskApi.categories.update(id, data),
        delete: (id) => helpdeskApi.categories.delete(id),
      }}
      fields={[
        { key: "name", label: "Name" },
        { key: "slaHours", label: "SLA Hours" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "name", label: "Category Name", type: "text", required: true },
        { key: "slaHours", label: "SLA Hours", type: "number", required: true },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function HelpdeskTicketsPage() {
  return (
    <GenericListPage
      title="Helpdesk Tickets"
      subtitle="Manage support tickets"
      icon={Phone}
      api={{
        list: (params) => helpdeskApi.tickets.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => helpdeskApi.tickets.create({ ...data, tenantId: "" }),
        update: (id, data) => helpdeskApi.tickets.update(id, data),
        delete: (id) => helpdeskApi.tickets.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "categoryId", label: "Category ID" },
        { key: "title", label: "Title" },
        { key: "priority", label: "Priority" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "categoryId", label: "Category ID", type: "text" },
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "title", label: "Ticket Title", type: "text", required: true },
        { key: "description", label: "Description", type: "textarea", required: true },
        { key: "priority", label: "Priority", type: "select", required: true,
          options: [
            { label: "Low", value: "LOW" },
            { label: "Medium", value: "MEDIUM" },
            { label: "High", value: "HIGH" },
            { label: "Urgent", value: "URGENT" },
          ]
        },
        { key: "status", label: "Status", type: "text" },
        { key: "assigneeId", label: "Assignee ID", type: "text" },
        { key: "dueAt", label: "Due At", type: "date" },
        { key: "resolvedAt", label: "Resolved At", type: "date" },
        { key: "closedAt", label: "Closed At", type: "date" },
        { key: "csatRating", label: "CSAT Rating", type: "number" },
        { key: "csatComment", label: "CSAT Comment", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function TicketCommentsPage() {
  return (
    <GenericListPage
      title="Ticket Comments"
      subtitle="Manage ticket comments and internal notes"
      icon={FileText}
      api={{
        list: (params) => helpdeskApi.comments.list(params.tenantId || "", params.ticketId || ""),
        create: (data) => helpdeskApi.comments.create({ ...data, tenantId: "" }),
        update: (id, data) => helpdeskApi.comments.update(id, data),
        delete: (id) => helpdeskApi.comments.delete(id),
      }}
      fields={[
        { key: "ticketId", label: "Ticket ID" },
        { key: "userId", label: "User ID" },
        { key: "comment", label: "Comment" },
        { key: "isInternal", label: "Internal", type: "boolean" },
      ]}
      formFields={[
        { key: "ticketId", label: "Ticket ID", type: "text", required: true },
        { key: "userId", label: "User ID", type: "text", required: true },
        { key: "comment", label: "Comment", type: "textarea", required: true },
        { key: "isInternal", label: "Internal Note", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function KnowledgeBasePage() {
  return (
    <GenericListPage
      title="Knowledge Base"
      subtitle="Manage helpdesk knowledge base articles"
      icon={FileText}
      api={{
        list: (params) => helpdeskApi.knowledgeBase.list(params.tenantId || ""),
        create: (data) => helpdeskApi.knowledgeBase.create({ ...data, tenantId: "" }),
        update: (id, data) => helpdeskApi.knowledgeBase.update(id, data),
        delete: (id) => helpdeskApi.knowledgeBase.delete(id),
      }}
      fields={[
        { key: "title", label: "Title" },
        { key: "category", label: "Category" },
        { key: "isPublished", label: "Published", type: "boolean" },
        { key: "viewCount", label: "Views" },
      ]}
      formFields={[
        { key: "title", label: "Article Title", type: "text", required: true },
        { key: "content", label: "Content", type: "textarea", required: true },
        { key: "category", label: "Category", type: "text" },
        { key: "tags", label: "Tags (comma separated)", type: "text" },
        { key: "isPublished", label: "Is Published", type: "checkbox" },
        { key: "createdById", label: "Created By ID", type: "text" },
      ]}
      tenantId=""
    />
  );
}
