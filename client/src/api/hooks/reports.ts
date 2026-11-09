import { apiClient } from "@/api/client";
import type { ApiResponse } from "@hrms/shared-types";

// ==========================================
// M22: REPORTS & DASHBOARDS
// ==========================================

export const reportsApi = {
  templates: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/reports/templates?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/reports/templates`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/reports/templates/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/reports/templates/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/reports/templates/${id}`),
  },
  executions: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/reports/executions?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/reports/executions`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/reports/executions/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/reports/executions/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/reports/executions/${id}`),
  },
};

// ==========================================
// M25: WORKFLOW ENGINE
// ==========================================

export const workflowApi = {
  definitions: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/workflow/definitions?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/workflow/definitions`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/workflow/definitions/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/workflow/definitions/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/workflow/definitions/${id}`),
  },
  versions: {
    list: (tenantId: string, definitionId: string) =>
      apiClient.get<ApiResponse<any[]>>(`/workflow/definitions/${definitionId}/versions?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/workflow/versions`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/workflow/versions/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/workflow/versions/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/workflow/versions/${id}`),
  },
  instances: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/workflow/instances?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/workflow/instances`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/workflow/instances/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/workflow/instances/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/workflow/instances/${id}`),
  },
  tasks: {
    list: (tenantId: string, assigneeUserId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (assigneeUserId) params.set("assigneeUserId", assigneeUserId);
      return apiClient.get<ApiResponse<any[]>>(`/workflow/tasks?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/workflow/tasks`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/workflow/tasks/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/workflow/tasks/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/workflow/tasks/${id}`),
  },
  delegations: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/workflow/delegations?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/workflow/delegations`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/workflow/delegations/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/workflow/delegations/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/workflow/delegations/${id}`),
  },
};

// ==========================================
// M26: INTEGRATIONS & API PLATFORM
// ==========================================

export const integrationsApi = {
  webhooks: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/integrations/webhooks?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/integrations/webhooks`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/integrations/webhooks/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/integrations/webhooks/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/integrations/webhooks/${id}`),
  },
  webhookDeliveries: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/integrations/webhook-deliveries?tenantId=${tenantId}`),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/integrations/webhook-deliveries/${id}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/integrations/webhook-deliveries`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/integrations/webhook-deliveries/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/integrations/webhook-deliveries/${id}`),
  },
  apiKeys: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/integrations/api-keys?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/integrations/api-keys`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/integrations/api-keys/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/integrations/api-keys/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/integrations/api-keys/${id}`),
  },
};

// ==========================================
// M28: SECURITY & DATA PROTECTION
// ==========================================

export const securityApi = {
  events: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/security/events?tenantId=${tenantId}`),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/security/events/${id}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/security/events`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/security/events/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/security/events/${id}`),
  },
  encryptionKeys: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/security/encryption-keys?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/security/encryption-keys`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/security/encryption-keys/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/security/encryption-keys/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/security/encryption-keys/${id}`),
  },
};

export const auditApi = {
  events: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/audit/events?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/audit/events`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/audit/events/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/audit/events/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/audit/events/${id}`),
  },
  dataPrincipalRequests: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/audit/data-principal-requests?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/audit/data-principal-requests`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/audit/data-principal-requests/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/audit/data-principal-requests/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/audit/data-principal-requests/${id}`),
  },
  loginHistory: {
    list: (tenantId: string, userId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (userId) params.set("userId", userId);
      return apiClient.get<ApiResponse<any[]>>(`/audit/login-history?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/audit/login-history`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/audit/login-history/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/audit/login-history/${id}`),
  },
};

// ==========================================
// M29: DATA IMPORT / EXPORT
// ==========================================

export const importExportApi = {
  importJobs: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/import-export/jobs?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/import-export/jobs`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/import-export/jobs/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/import-export/jobs/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/import-export/jobs/${id}`),
  },
  exportJobs: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/import-export/exports?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/import-export/exports`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/import-export/exports/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/import-export/exports/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/import-export/exports/${id}`),
  },
};

// ==========================================
// M30: FINANCE CORE
// ==========================================

export const financeApi = {
  chartOfAccounts: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/finance/chart-of-accounts?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/finance/chart-of-accounts`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/finance/chart-of-accounts/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/finance/chart-of-accounts/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/finance/chart-of-accounts/${id}`),
  },
  fiscalPeriods: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/finance/fiscal-periods?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/finance/fiscal-periods`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/finance/fiscal-periods/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/finance/fiscal-periods/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/finance/fiscal-periods/${id}`),
  },
  journalEntries: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/finance/journal-entries?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/finance/journal-entries`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/finance/journal-entries/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/finance/journal-entries/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/finance/journal-entries/${id}`),
  },
  journalLines: {
    list: (tenantId: string, entryId: string) =>
      apiClient.get<ApiResponse<any[]>>(`/finance/journal-entries/${entryId}/lines?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/finance/journal-lines`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/finance/journal-lines/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/finance/journal-lines/${id}`),
  },
};

// ==========================================
// M31: AI HR ASSISTANT
// ==========================================

export const aiApi = {
  conversations: {
    list: (tenantId: string, employeeId: string) =>
      apiClient.get<ApiResponse<any[]>>(`/ai/conversations?tenantId=${tenantId}&employeeId=${employeeId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/ai/conversations`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/ai/conversations/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/ai/conversations/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/ai/conversations/${id}`),
  },
  messages: {
    list: (tenantId: string, conversationId: string) =>
      apiClient.get<ApiResponse<any[]>>(`/ai/conversations/${conversationId}/messages?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/ai/messages`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/ai/messages/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/ai/messages/${id}`),
  },
};
