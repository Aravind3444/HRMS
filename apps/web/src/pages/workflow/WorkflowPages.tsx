import { GenericListPage } from "@/components/shared/GenericListPage";
import { ClipboardList, Mail, AlertTriangle, FileText } from "lucide-react";
import { workflowApi } from "@/api/hooks/reports";
import { integrationsApi } from "@/api/hooks/reports";

// ==========================================
// M25: WORKFLOW ENGINE
// ==========================================

export function WorkflowDefinitionsPage() {
  return (
    <GenericListPage
      title="Workflow Definitions"
      subtitle="Configure workflow definitions"
      icon={ClipboardList}
      api={{
        list: (params) => workflowApi.definitions.list(params.tenantId || ""),
        create: (data) => workflowApi.definitions.create({ ...data, tenantId: "" }),
        update: (id, data) => workflowApi.definitions.update(id, data),
        delete: (id) => workflowApi.definitions.delete(id),
      }}
      fields={[
        { key: "code", label: "Code" },
        { key: "name", label: "Name" },
        { key: "description", label: "Description" },
      ]}
      formFields={[
        { key: "code", label: "Code", type: "text", required: true },
        { key: "name", label: "Name", type: "text", required: true },
        { key: "description", label: "Description", type: "textarea" },
      ]}
      tenantId=""
    />
  );
}

export function WorkflowVersionsPage() {
  return (
    <GenericListPage
      title="Workflow Versions"
      subtitle="Manage workflow versions and steps"
      icon={FileText}
      api={{
        list: (params) => workflowApi.versions.list(params.tenantId || "", params.definitionId || ""),
        create: (data) => workflowApi.versions.create({ ...data, tenantId: "" }),
        update: (id, data) => workflowApi.versions.update(id, data),
        delete: (id) => workflowApi.versions.delete(id),
      }}
      fields={[
        { key: "workflowDefinitionId", label: "Definition ID" },
        { key: "version", label: "Version" },
        { key: "isPublished", label: "Published", type: "boolean" },
      ]}
      formFields={[
        { key: "workflowDefinitionId", label: "Workflow Definition ID", type: "text", required: true },
        { key: "version", label: "Version", type: "number", required: true },
        { key: "isPublished", label: "Is Published", type: "checkbox" },
        { key: "stepsJson", label: "Steps JSON", type: "textarea" },
      ]}
      tenantId=""
    />
  );
}

export function WorkflowInstancesPage() {
  return (
    <GenericListPage
      title="Workflow Instances"
      subtitle="View workflow instances"
      icon={ClipboardList}
      api={{
        list: (params) => workflowApi.instances.list(params.tenantId || ""),
        create: (data) => workflowApi.instances.create({ ...data, tenantId: "" }),
        update: (id, data) => workflowApi.instances.update(id, data),
        delete: (id) => workflowApi.instances.delete(id),
      }}
      fields={[
        { key: "workflowVersionId", label: "Version ID" },
        { key: "subjectType", label: "Subject Type" },
        { key: "subjectId", label: "Subject ID" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "workflowVersionId", label: "Workflow Version ID", type: "text", required: true },
        { key: "subjectType", label: "Subject Type", type: "text", required: true },
        { key: "subjectId", label: "Subject ID", type: "text", required: true },
        { key: "status", label: "Status", type: "text" },
        { key: "currentStep", label: "Current Step", type: "number" },
      ]}
      tenantId=""
    />
  );
}

export function WorkflowTasksPage() {
  return (
    <GenericListPage
      title="Workflow Tasks"
      subtitle="Manage workflow tasks"
      icon={Mail}
      api={{
        list: (params) => workflowApi.tasks.list(params.tenantId || ""),
        create: (data) => workflowApi.tasks.create({ ...data, tenantId: "" }),
        update: (id, data) => workflowApi.tasks.update(id, data),
        delete: (id) => workflowApi.tasks.delete(id),
      }}
      fields={[
        { key: "instanceId", label: "Instance ID" },
        { key: "stepNumber", label: "Step Number" },
        { key: "assigneeUserId", label: "Assignee ID" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "instanceId", label: "Instance ID", type: "text", required: true },
        { key: "stepNumber", label: "Step Number", type: "number", required: true },
        { key: "assigneeUserId", label: "Assignee User ID", type: "text" },
        { key: "assigneeRoleCode", label: "Assignee Role Code", type: "text" },
        { key: "status", label: "Status", type: "text" },
        { key: "decisionReason", label: "Decision Reason", type: "textarea" },
        { key: "dueAt", label: "Due At", type: "date" },
      ]}
      tenantId=""
    />
  );
}

export function DelegationsPage() {
  return (
    <GenericListPage
      title="Delegations"
      subtitle="Manage approval delegations"
      icon={AlertTriangle}
      api={{
        list: (params) => workflowApi.delegations.list(params.tenantId || ""),
        create: (data) => workflowApi.delegations.create({ ...data, tenantId: "" }),
        update: (id, data) => workflowApi.delegations.update(id, data),
        delete: (id) => workflowApi.delegations.delete(id),
      }}
      fields={[
        { key: "delegatorUserId", label: "Delegator ID" },
        { key: "delegateUserId", label: "Delegate ID" },
        { key: "scopeType", label: "Scope Type" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "delegatorUserId", label: "Delegator User ID", type: "text", required: true },
        { key: "delegateUserId", label: "Delegate User ID", type: "text", required: true },
        { key: "startDate", label: "Start Date", type: "date", required: true },
        { key: "endDate", label: "End Date", type: "date", required: true },
        { key: "scopeType", label: "Scope Type", type: "text" },
        { key: "scopeValue", label: "Scope Value", type: "text" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

// ==========================================
// M26: INTEGRATIONS & API PLATFORM
// ==========================================

export function WebhookSubscriptionsPage() {
  return (
    <GenericListPage
      title="Webhook Subscriptions"
      subtitle="Configure outbound webhook subscriptions"
      icon={Mail}
      api={{
        list: (params) => integrationsApi.webhooks.list(params.tenantId || ""),
        create: (data) => integrationsApi.webhooks.create({ ...data, tenantId: "" }),
        update: (id, data) => integrationsApi.webhooks.update(id, data),
        delete: (id) => integrationsApi.webhooks.delete(id),
      }}
      fields={[
        { key: "url", label: "URL" },
        { key: "events", label: "Events" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "url", label: "Webhook URL", type: "text", required: true },
        { key: "events", label: "Events (JSON array)", type: "textarea", required: true },
        { key: "secret", label: "Secret", type: "text", required: true },
        { key: "createdById", label: "Created By ID", type: "text" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function WebhookDeliveriesPage() {
  return (
    <GenericListPage
      title="Webhook Deliveries"
      subtitle="View webhook delivery history"
      icon={Mail}
      api={{
        list: (params) => integrationsApi.webhookDeliveries.list(params.tenantId || ""),
        create: (data) => integrationsApi.webhookDeliveries.create({ ...data, tenantId: "" }),
        update: (id, data) => integrationsApi.webhookDeliveries.update(id, data),
        delete: (id) => integrationsApi.webhookDeliveries.delete(id),
      }}
      fields={[
        { key: "subscriptionId", label: "Subscription ID" },
        { key: "eventType", label: "Event Type" },
        { key: "status", label: "Status", type: "status" },
        { key: "responseCode", label: "Response Code" },
      ]}
      formFields={[
        { key: "subscriptionId", label: "Subscription ID", type: "text", required: true },
        { key: "eventType", label: "Event Type", type: "text", required: true },
        { key: "payloadJson", label: "Payload JSON", type: "textarea", required: true },
        { key: "status", label: "Status", type: "text" },
        { key: "responseCode", label: "Response Code", type: "number" },
        { key: "responseBody", label: "Response Body", type: "textarea" },
      ]}
      tenantId=""
    />
  );
}

export function ApiKeysPage() {
  return (
    <GenericListPage
      title="API Keys"
      subtitle="Manage API access keys"
      icon={AlertTriangle}
      api={{
        list: (params) => integrationsApi.apiKeys.list(params.tenantId || ""),
        create: (data) => integrationsApi.apiKeys.create({ ...data, tenantId: "" }),
        update: (id, data) => integrationsApi.apiKeys.update(id, data),
        delete: (id) => integrationsApi.apiKeys.delete(id),
      }}
      fields={[
        { key: "name", label: "Name" },
        { key: "keyPrefix", label: "Key Prefix" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "name", label: "Key Name", type: "text", required: true },
        { key: "keyPrefix", label: "Key Prefix", type: "text", required: true },
        { key: "keyHash", label: "Key Hash", type: "text" },
        { key: "scopes", label: "Scopes (JSON array)", type: "textarea" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
        { key: "lastUsedAt", label: "Last Used At", type: "date" },
        { key: "expiresAt", label: "Expires At", type: "date" },
        { key: "createdById", label: "Created By ID", type: "text" },
      ]}
      tenantId=""
    />
  );
}
