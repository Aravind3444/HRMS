import { apiClient } from "@/api/client";
import type { ApiResponse } from "@hrms/shared-types";

// ==========================================
// M09: OFFBOARDING & EXIT
// ==========================================

export const offboardingApi = {
  resignations: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/offboarding/resignations?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/offboarding/resignations`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/offboarding/resignations/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/offboarding/resignations/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/offboarding/resignations/${id}`),
  },
  terminations: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/offboarding/terminations?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/offboarding/terminations`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/offboarding/terminations/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/offboarding/terminations/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/offboarding/terminations/${id}`),
  },
  clearance: {
    list: (tenantId: string, terminationId: string) =>
      apiClient.get<ApiResponse<any[]>>(`/offboarding/clearance?tenantId=${tenantId}&terminationId=${terminationId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/offboarding/clearance`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/offboarding/clearance/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/offboarding/clearance/${id}`),
  },
  exitInterviews: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/offboarding/exit-interviews?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/offboarding/exit-interviews`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/offboarding/exit-interviews/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/offboarding/exit-interviews/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/offboarding/exit-interviews/${id}`),
  },
};

// ==========================================
// M10: ATTENDANCE & TIME
// ==========================================

export const attendanceApi = {
  days: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/attendance/days?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/attendance/days`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/attendance/days/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/attendance/days/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/attendance/days/${id}`),
  },
  punches: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/attendance/punches?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/attendance/punches`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/attendance/punches/${id}`),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/attendance/punches/${id}`),
  },
  overtime: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/attendance/overtime?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/attendance/overtime`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/attendance/overtime/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/attendance/overtime/${id}`),
  },
  regularizations: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/attendance/regularizations?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/attendance/regularizations`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/attendance/regularizations/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/attendance/regularizations/${id}`),
  },
};

// ==========================================
// M11: SHIFT & ROSTER
// ==========================================

export const shiftApi = {
  templates: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/shift/templates?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/shift/templates`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/shift/templates/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/shift/templates/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/shift/templates/${id}`),
  },
  rosters: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/shift/rosters?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/shift/rosters`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/shift/rosters/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/shift/rosters/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/shift/rosters/${id}`),
  },
  swaps: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/shift/swaps?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/shift/swaps`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/shift/swaps/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/shift/swaps/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/shift/swaps/${id}`),
  },
};

// ==========================================
// M12: LEAVE MANAGEMENT
// ==========================================

export const leaveApi = {
  types: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/leave/types?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/leave/types`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/leave/types/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/leave/types/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/leave/types/${id}`),
  },
  policies: {
    list: (tenantId: string) => apiClient.get<ApiResponse<any[]>>(`/leave/policies?tenantId=${tenantId}`),
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/leave/policies`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/leave/policies/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/leave/policies/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/leave/policies/${id}`),
  },
  applications: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/leave/applications?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/leave/applications`, data),
    get: (id: string) => apiClient.get<ApiResponse<any>>(`/leave/applications/${id}`),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/leave/applications/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/leave/applications/${id}`),
  },
  ledger: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/leave/ledger?${params.toString()}`);
    },
  },
  compOff: {
    list: (tenantId: string, employeeId?: string) => {
      const params = new URLSearchParams({ tenantId });
      if (employeeId) params.set("employeeId", employeeId);
      return apiClient.get<ApiResponse<any[]>>(`/leave/comp-off?${params.toString()}`);
    },
    create: (data: any) => apiClient.post<ApiResponse<any>>(`/leave/comp-off`, data),
    update: (id: string, data: any) => apiClient.patch<ApiResponse<any>>(`/leave/comp-off/${id}`, data),
    delete: (id: string) => apiClient.delete<ApiResponse<any>>(`/leave/comp-off/${id}`),
  },
};
