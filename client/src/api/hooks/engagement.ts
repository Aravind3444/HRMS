import { apiClient } from "@/api/client";
import type { ApiResponse } from "@hrms/shared-types";

// ==========================================
// M17: ASSET MANAGEMENT
// ==========================================

export const assetsApi = {
  categories: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/assets/categories?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/assets/categories`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/assets/categories/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/assets/categories/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/assets/categories/${id}`),
  },
  items: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/assets/items?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/assets/items`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/assets/items/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/assets/items/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/assets/items/${id}`),
  },
  requests: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/assets/requests?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/assets/requests`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/assets/requests/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/assets/requests/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/assets/requests/${id}`),
  },
  returns: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/assets/returns?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/assets/returns`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/assets/returns/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/assets/returns/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/assets/returns/${id}`),
  },
};

// ==========================================
// M18: HELPDESK
// ==========================================

export const helpdeskApi = {
  categories: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/helpdesk/categories?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/helpdesk/categories`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/helpdesk/categories/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/helpdesk/categories/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/helpdesk/categories/${id}`),
  },
  tickets: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/helpdesk/tickets?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/helpdesk/tickets`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/helpdesk/tickets/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/helpdesk/tickets/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/helpdesk/tickets/${id}`),
  },
  comments: {
    list: (tenantId: string, ticketId: string) =>
      apiClient.get<ApiResponse<any[]>>(`/helpdesk/tickets/${ticketId}/comments?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/helpdesk/comments`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/helpdesk/comments/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/helpdesk/comments/${id}`),
  },
  knowledgeBase: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/helpdesk/kb?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/helpdesk/kb`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/helpdesk/kb/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/helpdesk/kb/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/helpdesk/kb/${id}`),
  },
};

// ==========================================
// M19: EXPENSE MANAGEMENT
// ==========================================

export const expenseApi = {
  policies: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/expense/policies?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/expense/policies`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/expense/policies/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/expense/policies/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/expense/policies/${id}`),
  },
  claims: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/expense/claims?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/expense/claims`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/expense/claims/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/expense/claims/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/expense/claims/${id}`),
  },
  claimLines: {
    list: (tenantId: string, claimId: string) =>
      apiClient.get<ApiResponse<any[]>>(`/expense/claims/${claimId}/lines?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/expense/claim-lines`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/expense/claim-lines/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/expense/claim-lines/${id}`),
  },
  advances: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/expense/advances?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/expense/advances`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/expense/advances/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/expense/advances/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/expense/advances/${id}`),
  },
};

// ==========================================
// M20: TRAVEL MANAGEMENT
// ==========================================

export const travelApi = {
  policies: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/travel/policies?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/travel/policies`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/travel/policies/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/travel/policies/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/travel/policies/${id}`),
  },
  requests: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/travel/requests?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/travel/requests`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/travel/requests/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/travel/requests/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/travel/requests/${id}`),
  },
  bookings: {
    list: (tenantId: string, requestId: string) =>
      apiClient.get<ApiResponse<any[]>>(`/travel/requests/${requestId}/bookings?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/travel/bookings`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/travel/bookings/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/travel/bookings/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/travel/bookings/${id}`),
  },
};

// ==========================================
// M21: ENGAGEMENT (ANNOUNCEMENTS, SURVEYS, RECOGNITION)
// ==========================================

export const engagementApi = {
  announcements: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/engagement/announcements?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/engagement/announcements`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/engagement/announcements/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/engagement/announcements/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/engagement/announcements/${id}`),
  },
  announcementReads: {
    list: (tenantId: string, announcementId: string) =>
      apiClient.get<ApiResponse<any[]>>(`/engagement/announcements/${announcementId}/reads?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/engagement/announcement-reads`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/engagement/announcement-reads/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/engagement/announcement-reads/${id}`),
  },
  surveys: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/engagement/surveys?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/engagement/surveys`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/engagement/surveys/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/engagement/surveys/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/engagement/surveys/${id}`),
  },
  surveyQuestions: {
    list: (tenantId: string, surveyId: string) =>
      apiClient.get<ApiResponse<any[]>>(`/engagement/surveys/${surveyId}/questions?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/engagement/survey-questions`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/engagement/survey-questions/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/engagement/survey-questions/${id}`),
  },
  surveyResponses: {
    list: (tenantId: string, surveyId: string) =>
      apiClient.get<ApiResponse<any[]>>(`/engagement/surveys/${surveyId}/responses?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/engagement/survey-responses`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/engagement/survey-responses/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/engagement/survey-responses/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/engagement/survey-responses/${id}`),
  },
  recognitions: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/engagement/recognitions?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/engagement/recognitions`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/engagement/recognitions/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/engagement/recognitions/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/engagement/recognitions/${id}`),
  },
};
