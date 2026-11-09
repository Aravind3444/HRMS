import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import {
  Users,
  Plus,
  Search,
  Eye,
  Edit2,
  Trash2,
  AlertCircle,
  CheckCircle,
  Briefcase,
  Building2,
  Calendar,
  Loader2,
  X,
  CreditCard,
  GraduationCap,
  Heart,
  ChevronRight,
  ChevronLeft,
  FileCheck,
} from "lucide-react";
import {
  employeeApi,
  employeeEmergencyContactApi,
  employeeBankDetailApi,
  employeeTaxInfoApi,
} from "@/api/hooks/employee";
import { essApi } from "@/api/hooks/ess";
import {
  legalEntityApi,
  departmentApi,
  designationApi,
  gradeApi,
  costCenterApi,
  employmentTypeApi,
} from "@/api/hooks/org";
import type { EmployeeDto } from "@hrms/shared-types";

interface LookupOption {
  id: string;
  name: string;
}

export function EmployeeListPage() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [employees, setEmployees] = useState<EmployeeDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // Lookups
  const [legalEntities, setLegalEntities] = useState<LookupOption[]>([]);
  const [departments, setDepartments] = useState<LookupOption[]>([]);
  const [designations, setDesignations] = useState<LookupOption[]>([]);
  const [grades, setGrades] = useState<LookupOption[]>([]);
  const [costCenters, setCostCenters] = useState<LookupOption[]>([]);
  const [employmentTypes, setEmploymentTypes] = useState<LookupOption[]>([]);

  // Step 1: Basic & Organization Info
  const [basicForm, setBasicForm] = useState({
    name: "",
    code: "",
    employeeType: "full_time",
    userId: "",
    legalEntityId: "",
    departmentId: "",
    designationId: "",
    gradeId: "",
    costCenterId: "",
    employmentTypeId: "",
    email: "",
    phoneNumber: "",
    dateOfJoining: new Date().toISOString().split("T")[0],
  });

  // Step 2: Personal & Emergency Contact
  const [personalForm, setPersonalForm] = useState({
    gender: "",
    bloodGroup: "",
    maritalStatus: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    // Emergency Contact
    emergencyName: "",
    emergencyRelationship: "Spouse",
    emergencyPhone: "",
    emergencyEmail: "",
  });

  // Step 3: Education & Work Experience
  const [eduExpForm, setEduExpForm] = useState({
    // Education
    degree: "",
    institution: "",
    fieldOfStudy: "",
    endYear: "",
    grade: "",
    // Experience
    companyName: "",
    designation: "",
    startDate: "",
    endDate: "",
  });

  // Step 4: Bank & Tax Details
  const [bankTaxForm, setBankTaxForm] = useState({
    // Bank
    bankName: "",
    branchName: "",
    accountNumber: "",
    ifscCode: "",
    accountType: "SAVINGS" as "SAVINGS" | "CURRENT" | "SALARY",
    // Tax
    panNumber: "",
    aadhaarNumber: "",
    uanNumber: "",
    taxSlab: "NEW_REGIME",
  });

  const tenantId = user?.activeTenant?.id || "";

  useEffect(() => {
    if (tenantId) {
      fetchEmployees();
      fetchLookups();
    }
  }, [tenantId]);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const res = await employeeApi.list(tenantId);
      if (res.data.success && res.data.data) {
        setEmployees(res.data.data);
      }
    } catch (err: any) {
      setNotification({
        message: err.response?.data?.message || "Failed to load employees",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchLookups = async () => {
    try {
      const [leRes, depRes, desRes, grRes, ccRes, etRes] = await Promise.allSettled([
        legalEntityApi.list(tenantId),
        departmentApi.list(tenantId),
        designationApi.list(tenantId),
        gradeApi.list(tenantId),
        costCenterApi.list(tenantId),
        employmentTypeApi.list(tenantId),
      ]);

      if (leRes.status === "fulfilled" && leRes.value.data?.data) {
        setLegalEntities(leRes.value.data.data);
        if (leRes.value.data.data.length > 0 && !basicForm.legalEntityId) {
          setBasicForm((prev) => ({ ...prev, legalEntityId: leRes.value.data.data[0].id }));
        }
      }
      if (depRes.status === "fulfilled" && depRes.value.data?.data) {
        setDepartments(depRes.value.data.data);
      }
      if (desRes.status === "fulfilled" && desRes.value.data?.data) {
        setDesignations(desRes.value.data.data);
      }
      if (grRes.status === "fulfilled" && grRes.value.data?.data) {
        setGrades(grRes.value.data.data);
      }
      if (ccRes.status === "fulfilled" && ccRes.value.data?.data) {
        setCostCenters(ccRes.value.data.data);
      }
      if (etRes.status === "fulfilled" && etRes.value.data?.data) {
        setEmploymentTypes(etRes.value.data.data);
      }
    } catch {
      // ignore lookup issues gracefully
    }
  };

  const openCreateModal = () => {
    setEditingId(null);
    setCurrentStep(1);
    setBasicForm({
      name: "",
      code: "",
      employeeType: "full_time",
      userId: "",
      legalEntityId: legalEntities[0]?.id || "",
      departmentId: "",
      designationId: "",
      gradeId: "",
      costCenterId: "",
      employmentTypeId: "",
      email: "",
      phoneNumber: "",
      dateOfJoining: new Date().toISOString().split("T")[0],
    });
    setPersonalForm({
      gender: "",
      bloodGroup: "",
      maritalStatus: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      emergencyName: "",
      emergencyRelationship: "Spouse",
      emergencyPhone: "",
      emergencyEmail: "",
    });
    setEduExpForm({
      degree: "",
      institution: "",
      fieldOfStudy: "",
      endYear: "",
      grade: "",
      companyName: "",
      designation: "",
      startDate: "",
      endDate: "",
    });
    setBankTaxForm({
      bankName: "",
      branchName: "",
      accountNumber: "",
      ifscCode: "",
      accountType: "SAVINGS",
      panNumber: "",
      aadhaarNumber: "",
      uanNumber: "",
      taxSlab: "NEW_REGIME",
    });
    setOpenModal(true);
  };

  const openEditModal = (emp: any) => {
    setEditingId(emp.id);
    setCurrentStep(1);
    setBasicForm({
      name: emp.name || emp.user?.fullName || "",
      code: emp.employeeCode || "",
      employeeType: emp.employeeType || "full_time",
      userId: emp.userId || "",
      legalEntityId: emp.legalEntityId || legalEntities[0]?.id || "",
      departmentId: emp.departmentId || "",
      designationId: emp.designationId || "",
      gradeId: emp.gradeId || "",
      costCenterId: emp.costCenterId || "",
      employmentTypeId: emp.employmentTypeId || "",
      email: emp.email || emp.user?.email || "",
      phoneNumber: emp.phoneNumber || emp.user?.phoneNumber || "",
      dateOfJoining: emp.dateOfJoining ? new Date(emp.dateOfJoining).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
    });
    setPersonalForm({
      gender: emp.gender || "",
      bloodGroup: emp.bloodGroup || "",
      maritalStatus: emp.maritalStatus || "",
      address: emp.address || "",
      city: emp.city || "",
      state: emp.state || "",
      pincode: emp.pincode || "",
      emergencyName: emp.emergencyContactName || "",
      emergencyRelationship: emp.emergencyContactRelation || "Spouse",
      emergencyPhone: emp.emergencyContactPhone || "",
      emergencyEmail: "",
    });
    setBankTaxForm({
      bankName: emp.bankName || "",
      branchName: emp.bankBranch || "",
      accountNumber: emp.bankAccountNumber || "",
      ifscCode: emp.bankIFSC || "",
      accountType: "SAVINGS",
      panNumber: emp.panNumber || "",
      aadhaarNumber: emp.aadhaarNumber || "",
      uanNumber: "",
      taxSlab: "NEW_REGIME",
    });
    setOpenModal(true);
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 1) {
      if (!basicForm.name.trim() || !basicForm.code.trim() || !basicForm.legalEntityId) {
        setNotification({ message: "Full Name, Code, and Legal Entity are required", type: "error" });
        return;
      }
    }
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!basicForm.name || !basicForm.code || !basicForm.legalEntityId) {
      setNotification({ message: "Name, Code, and Legal Entity are required", type: "error" });
      return;
    }

    setSubmitting(true);
    try {
      const payload: any = {
        tenantId,
        legalEntityId: basicForm.legalEntityId,
        departmentId: basicForm.departmentId || undefined,
        designationId: basicForm.designationId || undefined,
        gradeId: basicForm.gradeId || undefined,
        costCenterId: basicForm.costCenterId || undefined,
        employmentTypeId: basicForm.employmentTypeId || undefined,
        name: basicForm.name.trim(),
        code: basicForm.code.trim(),
        employeeType: basicForm.employeeType,
        email: basicForm.email ? basicForm.email.trim() : undefined,
        phoneNumber: basicForm.phoneNumber ? basicForm.phoneNumber.trim() : undefined,
        dateOfJoining: basicForm.dateOfJoining || new Date().toISOString().split("T")[0],
        gender: personalForm.gender || undefined,
        bloodGroup: personalForm.bloodGroup || undefined,
        maritalStatus: personalForm.maritalStatus || undefined,
        address: personalForm.address || undefined,
        city: personalForm.city || undefined,
        state: personalForm.state || undefined,
        pincode: personalForm.pincode || undefined,
        emergencyContactName: personalForm.emergencyName || undefined,
        emergencyContactPhone: personalForm.emergencyPhone || undefined,
        emergencyContactRelation: personalForm.emergencyRelationship || undefined,
        bankName: bankTaxForm.bankName || undefined,
        bankBranch: bankTaxForm.branchName || undefined,
        bankAccountNumber: bankTaxForm.accountNumber || undefined,
        bankIFSC: bankTaxForm.ifscCode || undefined,
        panNumber: bankTaxForm.panNumber || undefined,
        aadhaarNumber: bankTaxForm.aadhaarNumber || undefined,
      };

      let employeeId = editingId;
      if (editingId) {
        await employeeApi.update(editingId, tenantId, payload);
        setNotification({ message: "Employee updated successfully", type: "success" });
      } else {
        if (basicForm.userId) payload.userId = basicForm.userId;
        const createRes = await employeeApi.create(payload);
        employeeId = createRes.data?.data?.id;
        setNotification({ message: "Employee registered with full details successfully", type: "success" });
      }

      // If we have an employeeId, also save sub-records if provided
      if (employeeId && !editingId) {
        const subTasks: Promise<any>[] = [];

        // Save emergency contact
        if (personalForm.emergencyName && personalForm.emergencyPhone) {
          subTasks.push(
            employeeEmergencyContactApi.create(tenantId, {
              employeeId,
              name: personalForm.emergencyName,
              relationship: personalForm.emergencyRelationship || "Spouse",
              phone: personalForm.emergencyPhone,
              email: personalForm.emergencyEmail || undefined,
              isPrimary: true,
            }).catch(() => null)
          );
        }

        // Save bank detail
        if (bankTaxForm.accountNumber && bankTaxForm.bankName) {
          subTasks.push(
            employeeBankDetailApi.create(tenantId, {
              employeeId,
              bankName: bankTaxForm.bankName,
              branchName: bankTaxForm.branchName || "Main Branch",
              accountNumber: bankTaxForm.accountNumber,
              ifscCode: bankTaxForm.ifscCode || "IFSC0001",
              accountType: bankTaxForm.accountType,
              isPrimary: true,
            }).catch(() => null)
          );
        }

        // Save tax info
        if (bankTaxForm.panNumber || bankTaxForm.aadhaarNumber || bankTaxForm.uanNumber) {
          subTasks.push(
            employeeTaxInfoApi.create(tenantId, {
              employeeId,
              panNumber: bankTaxForm.panNumber || undefined,
              aadhaarNumber: bankTaxForm.aadhaarNumber || undefined,
              uanNumber: bankTaxForm.uanNumber || undefined,
              taxSlab: bankTaxForm.taxSlab || "NEW_REGIME",
            }).catch(() => null)
          );
        }

        // Save education
        if (eduExpForm.degree && eduExpForm.institution) {
          subTasks.push(
            essApi.education.create(tenantId, {
              employeeId,
              degree: eduExpForm.degree,
              institution: eduExpForm.institution,
              fieldOfStudy: eduExpForm.fieldOfStudy || null,
              endYear: eduExpForm.endYear ? Number(eduExpForm.endYear) : null,
              grade: eduExpForm.grade || null,
            }).catch(() => null)
          );
        }

        // Save experience
        if (eduExpForm.companyName && eduExpForm.designation) {
          subTasks.push(
            essApi.experience.create(tenantId, {
              employeeId,
              companyName: eduExpForm.companyName,
              designation: eduExpForm.designation,
              startDate: eduExpForm.startDate || new Date().toISOString(),
              endDate: eduExpForm.endDate || null,
              isCurrent: !eduExpForm.endDate,
            }).catch(() => null)
          );
        }

        await Promise.all(subTasks);
      }

      setOpenModal(false);
      setEditingId(null);
      fetchEmployees();
    } catch (err: any) {
      const msg =
        err.response?.data?.message ||
        (Array.isArray(err.response?.data?.message) ? err.response?.data?.message.join(", ") : null) ||
        err.response?.data?.error?.message ||
        err.message ||
        "Failed to save employee";
      setNotification({
        message: typeof msg === "object" ? JSON.stringify(msg) : msg,
        type: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete employee ${name}?`)) return;
    try {
      await employeeApi.delete(id, tenantId);
      setNotification({ message: "Employee deleted successfully", type: "success" });
      fetchEmployees();
    } catch (err: any) {
      setNotification({
        message: err.response?.data?.message || "Failed to delete employee",
        type: "error",
      });
    }
  };

  const legalEntityMap = Object.fromEntries(legalEntities.map((l) => [l.id, l.name]));
  const departmentMap = Object.fromEntries(departments.map((d) => [d.id, d.name]));
  const designationMap = Object.fromEntries(designations.map((d) => [d.id, d.name]));

  const filteredEmployees = employees.filter((emp) => {
    const fullName = (emp.name || "").toLowerCase();
    const code = (emp.employeeCode || "").toLowerCase();
    const query = searchQuery.toLowerCase();

    return fullName.includes(query) || code.includes(query);
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-indigo-600" />
                <h1 className="text-2xl font-bold text-slate-900">Employee Directory</h1>
              </div>
              <p className="text-sm text-slate-500 mt-1">
                Manage your organization's workforce, personal profiles, bank accounts, and employment records.
              </p>
            </div>
            <button
              onClick={openCreateModal}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-sm transition"
            >
              <Plus className="w-5 h-5" />
              <span>Add Employee</span>
            </button>
          </div>

          {/* Search bar */}
          <div className="mt-6 flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by employee name or code..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4">
          <div
            className={`p-4 rounded-xl border flex items-center justify-between text-sm ${
              notification.type === "success"
                ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                : "bg-rose-50 border-rose-200 text-rose-800"
            }`}
          >
            <div className="flex items-center gap-2">
              {notification.type === "success" ? (
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600" />
              )}
              <span>{notification.message}</span>
            </div>
            <button
              onClick={() => setNotification(null)}
              className="text-xs font-semibold hover:underline"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Main Table Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 text-slate-400">
            <Loader2 className="w-8 h-8 animate-spin mb-2 text-indigo-600" />
            <span className="text-sm">Loading employees...</span>
          </div>
        ) : filteredEmployees.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
            <Users className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800">No employees found</h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto mt-1 mb-6">
              Get started by registering employees into your organizational directory.
            </p>
            <button
              onClick={openCreateModal}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl text-sm transition"
            >
              <Plus className="w-4 h-4" />
              Add Employee
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/75 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                  <th className="px-6 py-4">Employee</th>
                  <th className="px-6 py-4">Code</th>
                  <th className="px-6 py-4">Legal Entity</th>
                  <th className="px-6 py-4">Department</th>
                  <th className="px-6 py-4">Designation</th>
                  <th className="px-6 py-4">Date of Joining</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredEmployees.map((emp) => (
                  <tr key={emp.id} className="hover:bg-slate-50/50 transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 font-semibold text-xs">
                          {(emp.name || emp.user?.fullName || "E").charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">
                            {emp.name || emp.user?.fullName || "—"}
                          </div>
                          <div className="text-xs text-slate-400 font-mono">
                            ID: {emp.id.substring(0, 8)}...
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-mono text-slate-600 text-xs">
                      {emp.employeeCode}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                        <Building2 className="w-3 h-3 text-slate-400" />
                        {emp.legalEntity?.name || legalEntityMap[emp.legalEntityId] || "—"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {emp.department?.name || (emp.departmentId && departmentMap[emp.departmentId]) || "—"}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {emp.designation?.name || (emp.designationId && designationMap[emp.designationId]) || "—"}
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-xs">
                      {emp.dateOfJoining ? (
                        <div className="flex items-center gap-1 text-slate-500">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(emp.dateOfJoining).toLocaleDateString()}
                        </div>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEditModal(emp)}
                          className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                          title="Edit Employee"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => navigate(`/employees/${emp.id}`)}
                          className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                          title="View 360° Profile"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(emp.id, emp.name || emp.employeeCode)}
                          className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                          title="Delete Employee"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Comprehensive Multi-Step Add / Edit Employee Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="fixed inset-0 z-40" onClick={() => setOpenModal(false)} />
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-100 overflow-hidden z-50 relative">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">
                  {editingId ? "Edit Employee Profile" : "Register Employee (Complete Profile)"}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {editingId
                    ? "Update organizational, personal, and banking records"
                    : "Step-by-step registration with organizational, personal, education, and banking details"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpenModal(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stepper Progress Bar */}
            <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className={`flex items-center gap-1.5 font-semibold transition ${
                  currentStep === 1 ? "text-indigo-600" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  currentStep === 1 ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-700"
                }`}>1</span>
                <span>1. Basic & Org</span>
              </button>

              <ChevronRight className="w-4 h-4 text-slate-300" />

              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className={`flex items-center gap-1.5 font-semibold transition ${
                  currentStep === 2 ? "text-indigo-600" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  currentStep === 2 ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-700"
                }`}>2</span>
                <span>2. Personal & Emergency</span>
              </button>

              <ChevronRight className="w-4 h-4 text-slate-300" />

              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className={`flex items-center gap-1.5 font-semibold transition ${
                  currentStep === 3 ? "text-indigo-600" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  currentStep === 3 ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-700"
                }`}>3</span>
                <span>3. Edu & Exp</span>
              </button>

              <ChevronRight className="w-4 h-4 text-slate-300" />

              <button
                type="button"
                onClick={() => setCurrentStep(4)}
                className={`flex items-center gap-1.5 font-semibold transition ${
                  currentStep === 4 ? "text-indigo-600" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  currentStep === 4 ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-700"
                }`}>4</span>
                <span>4. Bank & Tax</span>
              </button>
            </div>

            {/* Modal Body Forms */}
            <div className="p-6 max-h-[65vh] overflow-y-auto">
              {/* STEP 1: Basic & Organization */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={basicForm.name}
                        onChange={(e) => setBasicForm({ ...basicForm, name: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Employee Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={basicForm.code}
                        onChange={(e) => setBasicForm({ ...basicForm, code: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        placeholder="EMP-1001"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Legal Entity *
                      </label>
                      <select
                        required
                        value={basicForm.legalEntityId}
                        onChange={(e) => setBasicForm({ ...basicForm, legalEntityId: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                      >
                        <option value="">Select Legal Entity</option>
                        {legalEntities.map((le) => (
                          <option key={le.id} value={le.id}>
                            {le.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Department
                      </label>
                      <select
                        value={basicForm.departmentId}
                        onChange={(e) => setBasicForm({ ...basicForm, departmentId: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                      >
                        <option value="">Select Department</option>
                        {departments.map((d) => (
                          <option key={d.id} value={d.id}>
                            {d.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Designation
                      </label>
                      <select
                        value={basicForm.designationId}
                        onChange={(e) => setBasicForm({ ...basicForm, designationId: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                      >
                        <option value="">Select Designation</option>
                        {designations.map((d) => (
                          <option key={d.id} value={d.id}>
                            {d.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Grade / Pay Band
                      </label>
                      <select
                        value={basicForm.gradeId}
                        onChange={(e) => setBasicForm({ ...basicForm, gradeId: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                      >
                        <option value="">Select Grade</option>
                        {grades.map((g) => (
                          <option key={g.id} value={g.id}>
                            {g.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Cost Center
                      </label>
                      <select
                        value={basicForm.costCenterId}
                        onChange={(e) => setBasicForm({ ...basicForm, costCenterId: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                      >
                        <option value="">Select Cost Center</option>
                        {costCenters.map((cc) => (
                          <option key={cc.id} value={cc.id}>
                            {cc.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Employment Type
                      </label>
                      <select
                        value={basicForm.employmentTypeId}
                        onChange={(e) => setBasicForm({ ...basicForm, employmentTypeId: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                      >
                        <option value="">Select Type</option>
                        {employmentTypes.map((et) => (
                          <option key={et.id} value={et.id}>
                            {et.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        value={basicForm.email}
                        onChange={(e) => setBasicForm({ ...basicForm, email: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Joining Date
                      </label>
                      <input
                        type="date"
                        value={basicForm.dateOfJoining}
                        onChange={(e) => setBasicForm({ ...basicForm, dateOfJoining: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Personal & Emergency Contact */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Personal Information (Optional)
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Gender</label>
                      <select
                        value={personalForm.gender}
                        onChange={(e) => setPersonalForm({ ...personalForm, gender: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Blood Group</label>
                      <input
                        type="text"
                        value={personalForm.bloodGroup}
                        onChange={(e) => setPersonalForm({ ...personalForm, bloodGroup: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        placeholder="O+, A+, B+"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Marital Status</label>
                      <select
                        value={personalForm.maritalStatus}
                        onChange={(e) => setPersonalForm({ ...personalForm, maritalStatus: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                      >
                        <option value="">Select Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Address</label>
                      <input
                        type="text"
                        value={personalForm.address}
                        onChange={(e) => setPersonalForm({ ...personalForm, address: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        placeholder="Street Address"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">City</label>
                        <input
                          type="text"
                          value={personalForm.city}
                          onChange={(e) => setPersonalForm({ ...personalForm, city: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Pincode</label>
                        <input
                          type="text"
                          value={personalForm.pincode}
                          onChange={(e) => setPersonalForm({ ...personalForm, pincode: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                          placeholder="500001"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Emergency Contact (Optional)
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Name</label>
                        <input
                          type="text"
                          value={personalForm.emergencyName}
                          onChange={(e) => setPersonalForm({ ...personalForm, emergencyName: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Relationship</label>
                        <select
                          value={personalForm.emergencyRelationship}
                          onChange={(e) => setPersonalForm({ ...personalForm, emergencyRelationship: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        >
                          <option value="Spouse">Spouse</option>
                          <option value="Parent">Parent</option>
                          <option value="Sibling">Sibling</option>
                          <option value="Friend">Friend</option>
                          <option value="Relative">Relative</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Phone</label>
                        <input
                          type="text"
                          value={personalForm.emergencyPhone}
                          onChange={(e) => setPersonalForm({ ...personalForm, emergencyPhone: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                          placeholder="+91 9876543210"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Email</label>
                        <input
                          type="email"
                          value={personalForm.emergencyEmail}
                          onChange={(e) => setPersonalForm({ ...personalForm, emergencyEmail: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                          placeholder="contact@family.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Education & Experience */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Highest Education (Optional)
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Degree / Qualification</label>
                      <input
                        type="text"
                        value={eduExpForm.degree}
                        onChange={(e) => setEduExpForm({ ...eduExpForm, degree: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        placeholder="B.Tech, MBA, B.Sc"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Institution / University</label>
                      <input
                        type="text"
                        value={eduExpForm.institution}
                        onChange={(e) => setEduExpForm({ ...eduExpForm, institution: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        placeholder="IIT, Stanford, Delhi Univ"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Field of Study</label>
                      <input
                        type="text"
                        value={eduExpForm.fieldOfStudy}
                        onChange={(e) => setEduExpForm({ ...eduExpForm, fieldOfStudy: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        placeholder="Computer Science"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Year of Completion</label>
                      <input
                        type="number"
                        value={eduExpForm.endYear}
                        onChange={(e) => setEduExpForm({ ...eduExpForm, endYear: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        placeholder="2022"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Grade / CGPA</label>
                      <input
                        type="text"
                        value={eduExpForm.grade}
                        onChange={(e) => setEduExpForm({ ...eduExpForm, grade: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        placeholder="8.5 / First Class"
                      />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Prior Work Experience (Optional)
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          value={eduExpForm.companyName}
                          onChange={(e) => setEduExpForm({ ...eduExpForm, companyName: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                          placeholder="Previous Corp Ltd"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Designation / Role</label>
                        <input
                          type="text"
                          value={eduExpForm.designation}
                          onChange={(e) => setEduExpForm({ ...eduExpForm, designation: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                          placeholder="Senior Developer"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Start Date</label>
                        <input
                          type="date"
                          value={eduExpForm.startDate}
                          onChange={(e) => setEduExpForm({ ...eduExpForm, startDate: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">End Date</label>
                        <input
                          type="date"
                          value={eduExpForm.endDate}
                          onChange={(e) => setEduExpForm({ ...eduExpForm, endDate: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Bank & Tax Details */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Salary Bank Account (Optional)
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Bank Name</label>
                      <input
                        type="text"
                        value={bankTaxForm.bankName}
                        onChange={(e) => setBankTaxForm({ ...bankTaxForm, bankName: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        placeholder="HDFC Bank, ICICI Bank, SBI"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Branch Name</label>
                      <input
                        type="text"
                        value={bankTaxForm.branchName}
                        onChange={(e) => setBankTaxForm({ ...bankTaxForm, branchName: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        placeholder="Hitech City Branch"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Account Number</label>
                      <input
                        type="text"
                        value={bankTaxForm.accountNumber}
                        onChange={(e) => setBankTaxForm({ ...bankTaxForm, accountNumber: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        placeholder="50100012345678"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">IFSC Code</label>
                      <input
                        type="text"
                        value={bankTaxForm.ifscCode}
                        onChange={(e) => setBankTaxForm({ ...bankTaxForm, ifscCode: e.target.value.toUpperCase() })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        placeholder="HDFC0001234"
                      />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Statutory Tax & Identifiers (Optional)
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">PAN Card Number</label>
                        <input
                          type="text"
                          value={bankTaxForm.panNumber}
                          onChange={(e) => setBankTaxForm({ ...bankTaxForm, panNumber: e.target.value.toUpperCase() })}
                          className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                          placeholder="ABCDE1234F"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Aadhaar Number</label>
                        <input
                          type="text"
                          value={bankTaxForm.aadhaarNumber}
                          onChange={(e) => setBankTaxForm({ ...bankTaxForm, aadhaarNumber: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                          placeholder="1234 5678 9012"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">PF / UAN Number</label>
                        <input
                          type="text"
                          value={bankTaxForm.uanNumber}
                          onChange={(e) => setBankTaxForm({ ...bankTaxForm, uanNumber: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                          placeholder="100123456789"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Controls */}
            <div className="flex justify-between items-center px-6 py-4 bg-slate-50 border-t border-slate-100">
              <div>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 rounded-xl transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-xl transition"
                >
                  Cancel
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSave}
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm transition"
                  >
                    {submitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <FileCheck className="w-4 h-4" />
                    )}
                    <span>{editingId ? "Save Changes" : "Complete Registration"}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
