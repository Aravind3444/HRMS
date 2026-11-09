import { apiClient } from "@/api/client";
import type {
  EmployeeDto,
  EmployeeCreateRequest,
  EmployeeUpdateRequest,
  EmployeeDocumentDto,
  EmployeeDocumentCreateRequest,
  EmployeeEmergencyContactDto,
  EmployeeEmergencyContactCreateRequest,
  EmployeeBankDetailDto,
  EmployeeBankDetailCreateRequest,
  EmployeeTaxInfoDto,
  EmployeeTaxInfoCreateRequest,
  EmployeeListFilters,
  ApiResponse,
} from "@hrms/shared-types";

const BASE = "/employee";

// ============ EMPLOYEE ============

export const employeeApi = {
  list: (tenantId: string, filters?: EmployeeListFilters) => {
    const params = new URLSearchParams({ tenantId });
    if (filters?.departmentId) params.set("departmentId", filters.departmentId);
    if (filters?.designationId) params.set("designationId", filters.designationId);
    if (filters?.gradeId) params.set("gradeId", filters.gradeId);
    if (filters?.employmentTypeId) params.set("employmentTypeId", filters.employmentTypeId);
    if (filters?.isActive !== undefined) params.set("isActive", String(filters.isActive));
    if (filters?.search) params.set("search", filters.search);
    return apiClient.get<ApiResponse<EmployeeDto[]>>(`${BASE}?${params.toString()}`);
  },
  create: (data: EmployeeCreateRequest & { tenantId: string }) =>
    apiClient.post<ApiResponse<EmployeeDto>>(BASE, data),
  get: (id: string, tenantId: string) =>
    apiClient.get<ApiResponse<EmployeeDto>>(`${BASE}/${id}?tenantId=${tenantId}`),
  update: (id: string, tenantId: string, data: EmployeeUpdateRequest) =>
    apiClient.patch<ApiResponse<EmployeeDto>>(`${BASE}/${id}?tenantId=${tenantId}`, data),
  delete: (id: string, tenantId: string) =>
    apiClient.delete<ApiResponse<{ message: string }>>(`${BASE}/${id}?tenantId=${tenantId}`),
};

// ============ EMPLOYEE DOCUMENTS ============

export const employeeDocumentApi = {
  list: (tenantId: string, employeeId?: string) => {
    const params = new URLSearchParams({ tenantId });
    if (employeeId) {
      return apiClient.get<ApiResponse<EmployeeDocumentDto[]>>(`${BASE}/${employeeId}/documents?${params.toString()}`);
    }
    return apiClient.get<ApiResponse<EmployeeDocumentDto[]>>(`${BASE}/documents?${params.toString()}`);
  },
  create: (tenantId: string, data: EmployeeDocumentCreateRequest & { employeeId: string }) =>
    apiClient.post<ApiResponse<EmployeeDocumentDto>>(`${BASE}/${data.employeeId}/documents?tenantId=${tenantId}`, { ...data, tenantId }),
  get: (id: string, tenantId: string) =>
    apiClient.get<ApiResponse<EmployeeDocumentDto>>(`${BASE}/documents/${id}?tenantId=${tenantId}`),
  update: (id: string, tenantId: string, data: any) =>
    apiClient.patch<ApiResponse<EmployeeDocumentDto>>(`${BASE}/documents/${id}?tenantId=${tenantId}`, data),
  delete: (id: string, tenantId: string) =>
    apiClient.delete<ApiResponse<{ message: string }>>(`${BASE}/documents/${id}?tenantId=${tenantId}`),
};

// ============ EMERGENCY CONTACTS ============

export const employeeEmergencyContactApi = {
  list: (tenantId: string, employeeId: string) =>
    apiClient.get<ApiResponse<EmployeeEmergencyContactDto[]>>(`${BASE}/${employeeId}/emergency-contacts?tenantId=${tenantId}`),
  create: (tenantId: string, data: EmployeeEmergencyContactCreateRequest & { employeeId: string }) =>
    apiClient.post<ApiResponse<EmployeeEmergencyContactDto>>(`${BASE}/${data.employeeId}/emergency-contacts?tenantId=${tenantId}`, { ...data, tenantId }),
  get: (id: string, tenantId: string) =>
    apiClient.get<ApiResponse<EmployeeEmergencyContactDto>>(`${BASE}/emergency-contacts/${id}?tenantId=${tenantId}`),
  update: (id: string, tenantId: string, data: Partial<EmployeeEmergencyContactCreateRequest>) =>
    apiClient.patch<ApiResponse<EmployeeEmergencyContactDto>>(`${BASE}/emergency-contacts/${id}?tenantId=${tenantId}`, data),
  delete: (id: string, tenantId: string) =>
    apiClient.delete<ApiResponse<{ message: string }>>(`${BASE}/emergency-contacts/${id}?tenantId=${tenantId}`),
};

// ============ BANK DETAILS ============

export const employeeBankDetailApi = {
  list: (tenantId: string, employeeId?: string) => {
    const params = new URLSearchParams({ tenantId });
    if (employeeId) {
      return apiClient.get<ApiResponse<EmployeeBankDetailDto[]>>(`${BASE}/${employeeId}/bank-details?${params.toString()}`);
    }
    return apiClient.get<ApiResponse<EmployeeBankDetailDto[]>>(`${BASE}/bank-details?${params.toString()}`);
  },
  create: (tenantId: string, data: EmployeeBankDetailCreateRequest & { employeeId: string }) =>
    apiClient.post<ApiResponse<EmployeeBankDetailDto>>(`${BASE}/${data.employeeId}/bank-details?tenantId=${tenantId}`, { ...data, tenantId }),
  get: (id: string, tenantId: string) =>
    apiClient.get<ApiResponse<EmployeeBankDetailDto>>(`${BASE}/bank-details/${id}?tenantId=${tenantId}`),
  update: (id: string, tenantId: string, data: Partial<EmployeeBankDetailCreateRequest>) =>
    apiClient.patch<ApiResponse<EmployeeBankDetailDto>>(`${BASE}/bank-details/${id}?tenantId=${tenantId}`, data),
  delete: (id: string, tenantId: string) =>
    apiClient.delete<ApiResponse<{ message: string }>>(`${BASE}/bank-details/${id}?tenantId=${tenantId}`),
};

// ============ TAX INFO ============

export const employeeTaxInfoApi = {
  list: (tenantId: string, employeeId?: string) => {
    const params = new URLSearchParams({ tenantId });
    if (employeeId) {
      return apiClient.get<ApiResponse<EmployeeTaxInfoDto[]>>(`${BASE}/${employeeId}/tax-info?${params.toString()}`);
    }
    return apiClient.get<ApiResponse<EmployeeTaxInfoDto[]>>(`${BASE}/tax-info?${params.toString()}`);
  },
  create: (tenantId: string, data: EmployeeTaxInfoCreateRequest & { employeeId: string }) =>
    apiClient.post<ApiResponse<EmployeeTaxInfoDto>>(`${BASE}/${data.employeeId}/tax-info?tenantId=${tenantId}`, { ...data, tenantId }),
  get: (id: string, tenantId: string) =>
    apiClient.get<ApiResponse<EmployeeTaxInfoDto>>(`${BASE}/tax-info/${id}?tenantId=${tenantId}`),
  update: (id: string, tenantId: string, data: Partial<EmployeeTaxInfoCreateRequest>) =>
    apiClient.patch<ApiResponse<EmployeeTaxInfoDto>>(`${BASE}/tax-info/${id}?tenantId=${tenantId}`, data),
  delete: (id: string, tenantId: string) =>
    apiClient.delete<ApiResponse<{ message: string }>>(`${BASE}/tax-info/${id}?tenantId=${tenantId}`),
};
