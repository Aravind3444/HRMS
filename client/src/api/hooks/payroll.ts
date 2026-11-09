import { apiClient } from "@/api/client";
import type { ApiResponse } from "@hrms/shared-types";

// ==========================================
// M13: PAYROLL
// ==========================================

export const payrollApi = {
  components: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/payroll/components?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/payroll/components`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/payroll/components/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/payroll/components/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/payroll/components/${id}`),
  },
  salaryStructures: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/payroll/salary-structures?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/payroll/salary-structures`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/payroll/salary-structures/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/payroll/salary-structures/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/payroll/salary-structures/${id}`),
  },
  employeeCompensation: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/payroll/compensation?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/payroll/compensation`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/payroll/compensation/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/payroll/compensation/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/payroll/compensation/${id}`),
  },
  periods: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/payroll/periods?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/payroll/periods`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/payroll/periods/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/payroll/periods/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/payroll/periods/${id}`),
  },
  runs: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/payroll/runs?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/payroll/runs`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/payroll/runs/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/payroll/runs/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/payroll/runs/${id}`),
  },
  payslips: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/payroll/payslips?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/payroll/payslips`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/payroll/payslips/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/payroll/payslips/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/payroll/payslips/${id}`),
  },
  loans: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/payroll/loans?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/payroll/loans`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/payroll/loans/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/payroll/loans/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/payroll/loans/${id}`),
  },
  fnf: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/payroll/fnf?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/payroll/fnf`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/payroll/fnf/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/payroll/fnf/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/payroll/fnf/${id}`),
  },
};

// ==========================================
// M14: STATUTORY COMPLIANCE & TAX (INDIA)
// ==========================================

export const statutoryApi = {
  ruleSets: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/statutory/rules?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/statutory/rules`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/statutory/rules/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/statutory/rules/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/statutory/rules/${id}`),
  },
  pfContributions: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/statutory/pf?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/statutory/pf`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/statutory/pf/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/statutory/pf/${id}`),
  },
  esiContributions: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/statutory/esi?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/statutory/esi`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/statutory/esi/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/statutory/esi/${id}`),
  },
  ptContributions: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/statutory/pt?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/statutory/pt`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/statutory/pt/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/statutory/pt/${id}`),
  },
  lwfContributions: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/statutory/lwf?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/statutory/lwf`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/statutory/lwf/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/statutory/lwf/${id}`),
  },
  investmentDeclarations: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/statutory/investment-declarations?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/statutory/investment-declarations`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/statutory/investment-declarations/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/statutory/investment-declarations/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/statutory/investment-declarations/${id}`),
  },
  proofSubmissions: {
    list: (tenantId: string, declarationId: string) =>
      apiClient.get<ApiResponse<any[]>>(`/statutory/proof-submissions?tenantId=${tenantId}&declarationId=${declarationId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/statutory/proof-submissions`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/statutory/proof-submissions/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/statutory/proof-submissions/${id}`),
  },
  tdsComputations: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/statutory/tds?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/statutory/tds`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/statutory/tds/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/statutory/tds/${id}`),
  },
  form16: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/statutory/form16?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/statutory/form16`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/statutory/form16/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/statutory/form16/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/statutory/form16/${id}`),
  },
  form24q: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/statutory/form24q?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/statutory/form24q`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/statutory/form24q/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/statutory/form24q/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/statutory/form24q/${id}`),
  },
  complianceCalendar: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/statutory/compliance-calendar?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/statutory/compliance-calendar`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/statutory/compliance-calendar/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/statutory/compliance-calendar/${id}`),
  },
};

// ==========================================
// M15: PERFORMANCE MANAGEMENT
// ==========================================

export const performanceApi = {
  reviewCycles: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/performance/review-cycles?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/performance/review-cycles`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/performance/review-cycles/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/performance/review-cycles/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/performance/review-cycles/${id}`),
  },
  reviews: {
    list: (tenantId: string, cycleId?: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (cycleId) params.set("cycleId", cycleId);
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/performance/reviews?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/performance/reviews`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/performance/reviews/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/performance/reviews/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/performance/reviews/${id}`),
  },
  goals: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/performance/goals?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/performance/goals`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/performance/goals/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/performance/goals/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/performance/goals/${id}`),
  },
  checkIns: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/performance/check-ins?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/performance/check-ins`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/performance/check-ins/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/performance/check-ins/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/performance/check-ins/${id}`),
  },
  feedback: {
    list: (tenantId: string, revieweeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (revieweeId) params.set("revieweeId", revieweeId);
      return apiClient.get<ApiResponse<any[]>>(`/performance/feedback?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/performance/feedback`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/performance/feedback/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/performance/feedback/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/performance/feedback/${id}`),
  },
  calibrations: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/performance/calibrations?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/performance/calibrations`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/performance/calibrations/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/performance/calibrations/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/performance/calibrations/${id}`),
  },
  pips: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/performance/pips?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/performance/pips`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/performance/pips/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/performance/pips/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/performance/pips/${id}`),
  },
};

// ==========================================
// M16: LEARNING MANAGEMENT
// ==========================================

export const lmsApi = {
  courses: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/lms/courses?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/lms/courses`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/lms/courses/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/lms/courses/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/lms/courses/${id}`),
  },
  enrollments: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/lms/enrollments?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/lms/enrollments`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/lms/enrollments/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/lms/enrollments/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/lms/enrollments/${id}`),
  },
  assessments: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/lms/assessments?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/lms/assessments`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/lms/assessments/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/lms/assessments/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/lms/assessments/${id}`),
  },
  certifications: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/lms/certifications?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/lms/certifications`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/lms/certifications/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/lms/certifications/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/lms/certifications/${id}`),
  },
  trainingRequests: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/lms/training-requests?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/lms/training-requests`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/lms/training-requests/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/lms/training-requests/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/lms/training-requests/${id}`),
  },
};
