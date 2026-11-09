import { apiClient } from "@/api/client";

// Legal Entity
export const legalEntityApi = {
  list: (tenantId: string) => apiClient.get(`/org/legal-entities?tenantId=${tenantId}`),
  create: (data: any) => apiClient.post("/org/legal-entities", data),
  get: (id: string) => apiClient.get(`/org/legal-entities/${id}`),
  update: (id: string, data: any) => apiClient.patch(`/org/legal-entities/${id}`, data),
  delete: (id: string) => apiClient.delete(`/org/legal-entities/${id}`),
};

// Location
export const locationApi = {
  list: (tenantId: string) => apiClient.get(`/org/locations?tenantId=${tenantId}`),
  create: (data: any) => apiClient.post("/org/locations", data),
  get: (id: string) => apiClient.get(`/org/locations/${id}`),
  update: (id: string, data: any) => apiClient.patch(`/org/locations/${id}`, data),
  delete: (id: string) => apiClient.delete(`/org/locations/${id}`),
};

// Department
export const departmentApi = {
  list: (tenantId: string) => apiClient.get(`/org/departments?tenantId=${tenantId}`),
  create: (data: any) => apiClient.post("/org/departments", data),
  get: (id: string) => apiClient.get(`/org/departments/${id}`),
  update: (id: string, data: any) => apiClient.patch(`/org/departments/${id}`, data),
  delete: (id: string) => apiClient.delete(`/org/departments/${id}`),
  tree: (tenantId: string) => apiClient.get(`/org/departments/tree?tenantId=${tenantId}`),
};

// Designation
export const designationApi = {
  list: (tenantId: string) => apiClient.get(`/org/designations?tenantId=${tenantId}`),
  create: (data: any) => apiClient.post("/org/designations", data),
  get: (id: string) => apiClient.get(`/org/designations/${id}`),
  update: (id: string, data: any) => apiClient.patch(`/org/designations/${id}`, data),
  delete: (id: string) => apiClient.delete(`/org/designations/${id}`),
};

// Grade
export const gradeApi = {
  list: (tenantId: string) => apiClient.get(`/org/grades?tenantId=${tenantId}`),
  create: (data: any) => apiClient.post("/org/grades", data),
  get: (id: string) => apiClient.get(`/org/grades/${id}`),
  update: (id: string, data: any) => apiClient.patch(`/org/grades/${id}`, data),
  delete: (id: string) => apiClient.delete(`/org/grades/${id}`),
};

// Cost Center
export const costCenterApi = {
  list: (tenantId: string) => apiClient.get(`/org/cost-centers?tenantId=${tenantId}`),
  create: (data: any) => apiClient.post("/org/cost-centers", data),
  get: (id: string) => apiClient.get(`/org/cost-centers/${id}`),
  update: (id: string, data: any) => apiClient.patch(`/org/cost-centers/${id}`, data),
  delete: (id: string) => apiClient.delete(`/org/cost-centers/${id}`),
};

// Employment Type
export const employmentTypeApi = {
  list: (tenantId: string) => apiClient.get(`/org/employment-types?tenantId=${tenantId}`),
  create: (data: any) => apiClient.post("/org/employment-types", data),
  get: (id: string) => apiClient.get(`/org/employment-types/${id}`),
  update: (id: string, data: any) => apiClient.patch(`/org/employment-types/${id}`, data),
  delete: (id: string) => apiClient.delete(`/org/employment-types/${id}`),
};
