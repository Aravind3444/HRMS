import { apiClient } from "@/api/client";
import type { ApiResponse } from "@hrms/shared-types";

// ==========================================
// M05: EMPLOYEE SELF-SERVICE
// ==========================================

export const essApi = {
  profile: {
    get: (tenantId: string, employeeId: string) =>
      apiClient.get<ApiResponse<any>>(`/ess/profile?tenantId=${tenantId}&employeeId=${employeeId}`),
    update: (employeeId: string, data: any) =>
      apiClient.patch<ApiResponse<any>>(`/ess/profile/${employeeId}`, data),
  },
  family: {
    list: (tenantId: string, employeeId: string) =>
      apiClient.get<ApiResponse<any[]>>(`/ess/family?tenantId=${tenantId}&employeeId=${employeeId}`),
    create: (tenantId: string, data: any) => apiClient.post<ApiResponse<any>>(`/ess/family`, { ...data, tenantId }),
    update: (id: string, tenantId: string, data: any) =>
      apiClient.patch<ApiResponse<any>>(`/ess/family/${id}?tenantId=${tenantId}`, data),
    delete: (id: string, tenantId: string) =>
      apiClient.delete<ApiResponse<any>>(`/ess/family/${id}?tenantId=${tenantId}`),
  },
  education: {
    list: (tenantId: string, employeeId: string) =>
      apiClient.get<ApiResponse<any[]>>(`/ess/education?tenantId=${tenantId}&employeeId=${employeeId}`),
    create: (tenantId: string, data: any) => apiClient.post<ApiResponse<any>>(`/ess/education`, { ...data, tenantId }),
    update: (id: string, tenantId: string, data: any) =>
      apiClient.patch<ApiResponse<any>>(`/ess/education/${id}?tenantId=${tenantId}`, data),
    delete: (id: string, tenantId: string) =>
      apiClient.delete<ApiResponse<any>>(`/ess/education/${id}?tenantId=${tenantId}`),
  },
  experience: {
    list: (tenantId: string, employeeId: string) =>
      apiClient.get<ApiResponse<any[]>>(`/ess/experience?tenantId=${tenantId}&employeeId=${employeeId}`),
    create: (tenantId: string, data: any) => apiClient.post<ApiResponse<any>>(`/ess/experience`, { ...data, tenantId }),
    update: (id: string, tenantId: string, data: any) =>
      apiClient.patch<ApiResponse<any>>(`/ess/experience/${id}?tenantId=${tenantId}`, data),
    delete: (id: string, tenantId: string) =>
      apiClient.delete<ApiResponse<any>>(`/ess/experience/${id}?tenantId=${tenantId}`),
  },
};

// ==========================================
// M06: DOCUMENTS MANAGEMENT
// ==========================================

export const documentsApi = {
  documentTypes: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/documents/types?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/documents/types`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/documents/types/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/documents/types/${id}`),
  },
  companyDocuments: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/documents/company?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/documents/company`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/documents/company/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/documents/company/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/documents/company/${id}`),
  },
  documentTemplates: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/documents/templates?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/documents/templates`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/documents/templates/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/documents/templates/${id}`),
  },
  policyDocuments: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/documents/policies?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/documents/policies`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/documents/policies/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/documents/policies/${id}`),
  },
};

// ==========================================
// M07: RECRUITMENT (ATS)
// ==========================================

export const recruitmentApi = {
  requisitions: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/recruitment/requisitions?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/recruitment/requisitions`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/recruitment/requisitions/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/recruitment/requisitions/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/recruitment/requisitions/${id}`),
  },
  jobs: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/recruitment/jobs?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/recruitment/jobs`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/recruitment/jobs/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/recruitment/jobs/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/recruitment/jobs/${id}`),
  },
  candidates: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/recruitment/candidates?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/recruitment/candidates`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/recruitment/candidates/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/recruitment/candidates/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/recruitment/candidates/${id}`),
  },
  interviews: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/recruitment/interviews?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/recruitment/interviews`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/recruitment/interviews/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/recruitment/interviews/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/recruitment/interviews/${id}`),
  },
  offers: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/recruitment/offers?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/recruitment/offers`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/recruitment/offers/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/recruitment/offers/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/recruitment/offers/${id}`),
  },
  referrals: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/recruitment/referrals?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/recruitment/referrals`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/recruitment/referrals/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/recruitment/referrals/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/recruitment/referrals/${id}`),
  },
};

// ==========================================
// M08: ONBOARDING & PRE-JOINING
// ==========================================

export const onboardingApi = {
  templates: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/onboarding/templates?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/onboarding/templates`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/onboarding/templates/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/onboarding/templates/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/onboarding/templates/${id}`),
  },
  tasks: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/onboarding/tasks?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/onboarding/tasks`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/onboarding/tasks/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/onboarding/tasks/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/onboarding/tasks/${id}`),
  },
  cases: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/onboarding/cases?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/onboarding/cases`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/onboarding/cases/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/onboarding/cases/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/onboarding/cases/${id}`),
  },
  caseTasks: {
    list: (tenantId: string, caseId: string) =>
      apiClient.get<ApiResponse<any[]>>(`/onboarding/cases/${caseId}/tasks?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/onboarding/case-tasks`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/onboarding/case-tasks/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/onboarding/case-tasks/${id}`),
  },
};
