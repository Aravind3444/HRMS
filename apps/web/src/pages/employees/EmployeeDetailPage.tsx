import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import {
  User, Building2, MapPin, Briefcase, CreditCard, Calendar,
  Plus, Edit, Trash2, Search, AlertCircle, CheckCircle,
  ChevronRight, FileText, Phone, Mail, Banknote, Award,
  Loader2, ArrowLeft, ShieldAlert, X,
} from "lucide-react";
import {
  employeeApi,
  employeeDocumentApi,
  employeeEmergencyContactApi,
  employeeBankDetailApi,
  employeeTaxInfoApi,
} from "@/api/hooks/employee";
import {
  legalEntityApi,
  departmentApi,
  designationApi,
  gradeApi,
  costCenterApi,
  employmentTypeApi,
} from "@/api/hooks/org";
import type { EmployeeDto } from "@hrms/shared-types";

const STATUS_BADGE: Record<string, string> = {
  active: "bg-emerald-100 text-emerald-700 border-emerald-200",
  on_probation: "bg-amber-100 text-amber-700 border-amber-200",
  on_notice: "bg-orange-100 text-orange-700 border-orange-200",
  long_leave: "bg-blue-100 text-blue-700 border-blue-200",
  inactive: "bg-slate-100 text-slate-600 border-slate-200",
  terminated: "bg-rose-100 text-rose-700 border-rose-200",
  prehire: "bg-indigo-100 text-indigo-700 border-indigo-200",
};

export function EmployeeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [employee, setEmployee] = useState<EmployeeDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"overview" | "documents" | "emergency" | "bank" | "tax">("overview");
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // Edit employee modal
  const [openEditEmployeeModal, setOpenEditEmployeeModal] = useState(false);
  const [editEmpSubmitting, setEditEmpSubmitting] = useState(false);
  const [editEmpFormData, setEditEmpFormData] = useState<any>({});

  // Sub-resource modals
  const [modalType, setModalType] = useState<"document" | "emergency" | "bank" | "tax" | null>(null);
  const [submittingModal, setSubmittingModal] = useState(false);

  // Form states
  const [docForm, setDocForm] = useState({
    documentType: "ID_PROOF",
    documentName: "",
    fileUrl: "",
    expiryDate: "",
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    relationship: "Spouse",
    phone: "",
    email: "",
    isPrimary: true,
  });

  const [bankForm, setBankForm] = useState<{
    bankName: string;
    branchName: string;
    accountNumber: string;
    ifscCode: string;
    accountType: "SAVINGS" | "CURRENT" | "SALARY";
    isPrimary: boolean;
  }>({
    bankName: "",
    branchName: "",
    accountNumber: "",
    ifscCode: "",
    accountType: "SAVINGS",
    isPrimary: true,
  });

  const [taxForm, setTaxForm] = useState({
    panNumber: "",
    aadhaarNumber: "",
    uanNumber: "",
    taxSlab: "NEW_REGIME",
  });

  // Org Lookups for Edit Employee
  const [legalEntities, setLegalEntities] = useState<any[]>([]);
  const [departments, setDepartments] = useState<any[]>([]);
  const [designations, setDesignations] = useState<any[]>([]);
  const [grades, setGrades] = useState<any[]>([]);
  const [costCenters, setCostCenters] = useState<any[]>([]);
  const [employmentTypes, setEmploymentTypes] = useState<any[]>([]);

  const tenantId = user?.activeTenant?.id || "";

  useEffect(() => {
    if (id) {
      fetchEmployee();
      fetchLookups();
    }
  }, [id, tenantId]);

  const fetchEmployee = async () => {
    setLoading(true);
    try {
      const res = await employeeApi.get(id as string, tenantId);
      if (res.data.success && res.data.data) {
        setEmployee(res.data.data);
      }
    } catch (err: any) {
      setNotification({ message: err.response?.data?.error?.message || "Failed to load employee", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const fetchLookups = async () => {
    if (!tenantId) return;
    try {
      const [le, dp, ds, gr, cc, et] = await Promise.allSettled([
        legalEntityApi.list(tenantId),
        departmentApi.list(tenantId),
        designationApi.list(tenantId),
        gradeApi.list(tenantId),
        costCenterApi.list(tenantId),
        employmentTypeApi.list(tenantId),
      ]);
      if (le.status === "fulfilled" && le.value.data?.data) setLegalEntities(le.value.data.data);
      if (dp.status === "fulfilled" && dp.value.data?.data) setDepartments(dp.value.data.data);
      if (ds.status === "fulfilled" && ds.value.data?.data) setDesignations(ds.value.data.data);
      if (gr.status === "fulfilled" && gr.value.data?.data) setGrades(gr.value.data.data);
      if (cc.status === "fulfilled" && cc.value.data?.data) setCostCenters(cc.value.data.data);
      if (et.status === "fulfilled" && et.value.data?.data) setEmploymentTypes(et.value.data.data);
    } catch {}
  };

  const openEmployeeEditor = () => {
    if (!employee) return;
    setEditEmpFormData({
      name: employee.name || employee.user?.fullName || "",
      code: employee.employeeCode || "",
      employeeType: employee.employeeType || "full_time",
      legalEntityId: employee.legalEntityId || "",
      departmentId: employee.departmentId || "",
      designationId: employee.designationId || "",
      gradeId: employee.gradeId || "",
      costCenterId: employee.costCenterId || "",
      employmentTypeId: employee.employmentTypeId || "",
      phoneNumber: employee.phoneNumber || employee.user?.phoneNumber || "",
      address: employee.address || "",
      city: employee.city || "",
      state: employee.state || "",
      pincode: employee.pincode || "",
      country: employee.country || "",
      gender: employee.gender || "",
      bloodGroup: employee.bloodGroup || "",
      maritalStatus: employee.maritalStatus || "",
      isActive: employee.isActive !== false,
    });
    setOpenEditEmployeeModal(true);
  };

  const handleUpdateEmployee = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setEditEmpSubmitting(true);
    try {
      await employeeApi.update(id, tenantId, editEmpFormData);
      setNotification({ message: "Employee updated successfully", type: "success" });
      setOpenEditEmployeeModal(false);
      fetchEmployee();
    } catch (err: any) {
      setNotification({
        message: err.response?.data?.message || err.message || "Failed to update employee",
        type: "error",
      });
    } finally {
      setEditEmpSubmitting(false);
    }
  };

  // Add Document
  const handleAddDocument = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setSubmittingModal(true);
    try {
      await employeeDocumentApi.create(tenantId, {
        employeeId: id,
        documentType: docForm.documentType,
        documentName: docForm.documentName,
        fileUrl: docForm.fileUrl || `https://documents.local/${docForm.documentName}`,
        expiryDate: docForm.expiryDate || undefined,
      });
      setNotification({ message: "Document added successfully", type: "success" });
      setModalType(null);
      setDocForm({ documentType: "ID_PROOF", documentName: "", fileUrl: "", expiryDate: "" });
      fetchEmployee();
    } catch (err: any) {
      setNotification({
        message: err.response?.data?.message || "Failed to add document",
        type: "error",
      });
    } finally {
      setSubmittingModal(false);
    }
  };

  // Delete Document
  const handleDeleteDocument = async (docId: string) => {
    if (!confirm("Are you sure you want to delete this document?")) return;
    try {
      await employeeDocumentApi.delete(docId, tenantId);
      setNotification({ message: "Document deleted", type: "success" });
      fetchEmployee();
    } catch (err: any) {
      setNotification({ message: err.response?.data?.message || "Failed to delete document", type: "error" });
    }
  };

  // Add Contact
  const handleAddContact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setSubmittingModal(true);
    try {
      await employeeEmergencyContactApi.create(tenantId, {
        employeeId: id,
        name: contactForm.name,
        relationship: contactForm.relationship,
        phone: contactForm.phone,
        email: contactForm.email || undefined,
        isPrimary: contactForm.isPrimary,
      });
      setNotification({ message: "Emergency contact added successfully", type: "success" });
      setModalType(null);
      setContactForm({ name: "", relationship: "Spouse", phone: "", email: "", isPrimary: true });
      fetchEmployee();
    } catch (err: any) {
      setNotification({ message: err.response?.data?.message || "Failed to add contact", type: "error" });
    } finally {
      setSubmittingModal(false);
    }
  };

  // Delete Contact
  const handleDeleteContact = async (contactId: string) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;
    try {
      await employeeEmergencyContactApi.delete(contactId, tenantId);
      setNotification({ message: "Contact deleted", type: "success" });
      fetchEmployee();
    } catch (err: any) {
      setNotification({ message: err.response?.data?.message || "Failed to delete contact", type: "error" });
    }
  };

  // Add Bank
  const handleAddBank = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setSubmittingModal(true);
    try {
      await employeeBankDetailApi.create(tenantId, {
        employeeId: id,
        bankName: bankForm.bankName,
        branchName: bankForm.branchName,
        accountNumber: bankForm.accountNumber,
        ifscCode: bankForm.ifscCode,
        accountType: bankForm.accountType,
        isPrimary: bankForm.isPrimary,
      });
      setNotification({ message: "Bank detail added successfully", type: "success" });
      setModalType(null);
      setBankForm({ bankName: "", branchName: "", accountNumber: "", ifscCode: "", accountType: "SAVINGS", isPrimary: true });
      fetchEmployee();
    } catch (err: any) {
      setNotification({ message: err.response?.data?.message || "Failed to add bank detail", type: "error" });
    } finally {
      setSubmittingModal(false);
    }
  };

  // Delete Bank
  const handleDeleteBank = async (bankId: string) => {
    if (!confirm("Are you sure you want to delete this bank record?")) return;
    try {
      await employeeBankDetailApi.delete(bankId, tenantId);
      setNotification({ message: "Bank detail deleted", type: "success" });
      fetchEmployee();
    } catch (err: any) {
      setNotification({ message: err.response?.data?.message || "Failed to delete bank record", type: "error" });
    }
  };

  // Add Tax
  const handleAddTax = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setSubmittingModal(true);
    try {
      await employeeTaxInfoApi.create(tenantId, {
        employeeId: id,
        panNumber: taxForm.panNumber,
        aadhaarNumber: taxForm.aadhaarNumber || undefined,
        uanNumber: taxForm.uanNumber || undefined,
        taxSlab: taxForm.taxSlab,
      });
      setNotification({ message: "Tax info added successfully", type: "success" });
      setModalType(null);
      setTaxForm({ panNumber: "", aadhaarNumber: "", uanNumber: "", taxSlab: "NEW_REGIME" });
      fetchEmployee();
    } catch (err: any) {
      setNotification({ message: err.response?.data?.message || "Failed to add tax info", type: "error" });
    } finally {
      setSubmittingModal(false);
    }
  };

  // Delete Tax
  const handleDeleteTax = async (taxId: string) => {
    if (!confirm("Are you sure you want to delete this tax record?")) return;
    try {
      await employeeTaxInfoApi.delete(taxId, tenantId);
      setNotification({ message: "Tax info deleted", type: "success" });
      fetchEmployee();
    } catch (err: any) {
      setNotification({ message: err.response?.data?.message || "Failed to delete tax record", type: "error" });
    }
  };

  const goBack = () => navigate("/employees");

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <ShieldAlert className="w-12 h-12 text-slate-400 mb-3" />
        <h2 className="text-lg font-bold text-slate-900">Employee not found</h2>
        <p className="text-sm text-slate-500 mt-1">The employee record could not be loaded.</p>
        <button
          onClick={goBack}
          className="mt-6 px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
        >
          Back to Employees
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={goBack} className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-indigo-600" />
              <h1 className="text-xl font-bold text-slate-900 leading-tight">Employee Details</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={openEmployeeEditor}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition flex items-center gap-2"
            >
              <Edit className="w-4 h-4" />
              Edit Employee
            </button>
          </div>
        </div>
      </header>

      {/* Notification Banner */}
      {notification && (
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4">
          <div
            className={`p-4 rounded-xl border flex items-start gap-3 text-sm ${
              notification.type === "success"
                ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                : "bg-rose-50 border-rose-200 text-rose-800"
            }`}
          >
            {notification.type === "success" ? (
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
            )}
            <span className="flex-1">{notification.message}</span>
            <button onClick={() => setNotification(null)} className="text-xs font-semibold hover:underline">
              Dismiss
            </button>
          </div>
        </div>
      )}

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                  {(employee.name || employee.user?.fullName || "E").charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">{employee.name || employee.user?.fullName || "Employee"}</h2>
                  <p className="text-sm text-slate-500">{employee.email || employee.user?.email || "No email"}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${STATUS_BADGE[employee.isActive !== false ? "active" : "inactive"] || "bg-slate-100 text-slate-600 border-slate-200"}`}>
                  {employee.isActive !== false ? "Active" : "Inactive"}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                  {employee.employeeType?.replace(/_/g, " ").toUpperCase() || "FULL TIME"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Employee Code</p>
                <p className="text-sm font-mono text-slate-700">{employee.employeeCode}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Department</p>
                <p className="text-sm text-slate-700">{employee.department?.name || "—"}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Designation</p>
                <p className="text-sm text-slate-700">{employee.designation?.name || "—"}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Grade</p>
                <p className="text-sm text-slate-700">{employee.grade?.name || "—"}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Cost Center</p>
                <p className="text-sm text-slate-700">{employee.costCenter?.name || "—"}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Date of Joining</p>
                <p className="text-sm text-slate-700">
                  {employee.dateOfJoining ? new Date(employee.dateOfJoining).toLocaleDateString() : "—"}
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-slate-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-3.5 text-sm font-medium border-b-2 ${
                  activeTab === "overview"
                    ? "border-indigo-600 text-indigo-600 bg-indigo-50"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("documents")}
                className={`px-6 py-3.5 text-sm font-medium border-b-2 ${
                  activeTab === "documents"
                    ? "border-indigo-600 text-indigo-600 bg-indigo-50"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                }`}
              >
                Documents
              </button>
              <button
                onClick={() => setActiveTab("emergency")}
                className={`px-6 py-3.5 text-sm font-medium border-b-2 ${
                  activeTab === "emergency"
                    ? "border-indigo-600 text-indigo-600 bg-indigo-50"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                }`}
              >
                Emergency Contacts
              </button>
              <button
                onClick={() => setActiveTab("bank")}
                className={`px-6 py-3.5 text-sm font-medium border-b-2 ${
                  activeTab === "bank"
                    ? "border-indigo-600 text-indigo-600 bg-indigo-50"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                }`}
              >
                Bank Details
              </button>
              <button
                onClick={() => setActiveTab("tax")}
                className={`px-6 py-3.5 text-sm font-medium border-b-2 ${
                  activeTab === "tax"
                    ? "border-indigo-600 text-indigo-600 bg-indigo-50"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                }`}
              >
                Tax Info
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Personal Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">Gender</span>
                      <span className="text-sm text-slate-900">{employee.gender || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">Blood Group</span>
                      <span className="text-sm text-slate-900">{employee.bloodGroup || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">Marital Status</span>
                      <span className="text-sm text-slate-900">{employee.maritalStatus || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">Phone</span>
                      <span className="text-sm text-slate-900">{employee.phoneNumber || employee.user?.phoneNumber || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">Address</span>
                      <span className="text-sm text-slate-900">
                        {employee.address ? `${employee.address}, ${employee.city || ""}, ${employee.state || ""} ${employee.pincode || ""}` : "—"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Employment Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">Legal Entity</span>
                      <span className="text-sm text-slate-900">{employee.legalEntity?.name || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">Department</span>
                      <span className="text-sm text-slate-900">{employee.department?.name || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">Designation</span>
                      <span className="text-sm text-slate-900">{employee.designation?.name || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">Grade</span>
                      <span className="text-sm text-slate-900">{employee.grade?.name || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">Cost Center</span>
                      <span className="text-sm text-slate-900">{employee.costCenter?.name || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">Employment Type</span>
                      <span className="text-sm text-slate-900">{employee.employmentType?.name || "—"}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "documents" && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-slate-900">Employee Documents</h3>
                  <button
                    onClick={() => setModalType("document")}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition shadow-sm"
                  >
                    <Plus className="w-4 h-4" /> Add Document
                  </button>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-3">Document Type</th>
                        <th className="px-6 py-3">Document Name</th>
                        <th className="px-6 py-3">File / Link</th>
                        <th className="px-6 py-3">Expiry Date</th>
                        <th className="px-6 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {(employee.employeeDocuments || []).length === 0 ? (
                        <tr>
                          <td colSpan={5} className="px-6 py-8 text-center text-slate-400">
                            No documents attached yet. Click "Add Document" to upload or link one.
                          </td>
                        </tr>
                      ) : (
                        (employee.employeeDocuments || []).map((doc) => (
                          <tr key={doc.id} className="hover:bg-slate-50 transition">
                            <td className="px-6 py-4 text-sm font-medium text-slate-800">{doc.documentType}</td>
                            <td className="px-6 py-4 text-sm text-slate-900">{doc.documentName}</td>
                            <td className="px-6 py-4 text-xs font-mono text-indigo-600 truncate max-w-xs">{doc.fileUrl}</td>
                            <td className="px-6 py-4 text-sm text-slate-600">
                              {doc.expiryDate ? new Date(doc.expiryDate).toLocaleDateString() : "—"}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button
                                onClick={() => handleDeleteDocument(doc.id)}
                                className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                                title="Delete Document"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {activeTab === "emergency" && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-slate-900">Emergency Contacts</h3>
                  <button
                    onClick={() => setModalType("emergency")}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition shadow-sm"
                  >
                    <Plus className="w-4 h-4" /> Add Contact
                  </button>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Relationship</th>
                        <th className="px-6 py-3">Phone</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Primary</th>
                        <th className="px-6 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {(employee.employeeEmergencyContacts || []).length === 0 ? (
                        <tr>
                          <td colSpan={6} className="px-6 py-8 text-center text-slate-400">
                            No emergency contacts listed yet.
                          </td>
                        </tr>
                      ) : (
                        (employee.employeeEmergencyContacts || []).map((contact) => (
                          <tr key={contact.id} className="hover:bg-slate-50 transition">
                            <td className="px-6 py-4 text-sm font-medium text-slate-900">{contact.name}</td>
                            <td className="px-6 py-4 text-sm text-slate-600">{contact.relationship}</td>
                            <td className="px-6 py-4 text-sm text-slate-600 font-mono">{contact.phone}</td>
                            <td className="px-6 py-4 text-sm text-slate-600">{contact.email || "—"}</td>
                            <td className="px-6 py-4">
                              {contact.isPrimary ? (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">
                                  Primary
                                </span>
                              ) : (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                                  Secondary
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button
                                onClick={() => handleDeleteContact(contact.id)}
                                className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                                title="Delete Contact"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {activeTab === "bank" && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-slate-900">Bank Details</h3>
                  <button
                    onClick={() => setModalType("bank")}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition shadow-sm"
                  >
                    <Plus className="w-4 h-4" /> Add Bank Detail
                  </button>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-3">Bank Name</th>
                        <th className="px-6 py-3">Branch</th>
                        <th className="px-6 py-3">Account Number</th>
                        <th className="px-6 py-3">IFSC Code</th>
                        <th className="px-6 py-3">Type</th>
                        <th className="px-6 py-3">Primary</th>
                        <th className="px-6 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {(employee.employeeBankDetails || []).length === 0 ? (
                        <tr>
                          <td colSpan={7} className="px-6 py-8 text-center text-slate-400">
                            No bank details provided yet.
                          </td>
                        </tr>
                      ) : (
                        (employee.employeeBankDetails || []).map((bank) => (
                          <tr key={bank.id} className="hover:bg-slate-50 transition">
                            <td className="px-6 py-4 text-sm font-medium text-slate-900">{bank.bankName}</td>
                            <td className="px-6 py-4 text-sm text-slate-600">{bank.branchName}</td>
                            <td className="px-6 py-4 text-sm text-slate-600 font-mono">{bank.accountNumber}</td>
                            <td className="px-6 py-4 text-sm text-slate-600 font-mono">{bank.ifscCode}</td>
                            <td className="px-6 py-4 text-sm text-slate-600">{bank.accountType}</td>
                            <td className="px-6 py-4">
                              {bank.isPrimary ? (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">
                                  Primary
                                </span>
                              ) : (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                                  Secondary
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button
                                onClick={() => handleDeleteBank(bank.id)}
                                className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                                title="Delete Bank"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {activeTab === "tax" && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-slate-900">Tax Information</h3>
                  {(employee.employeeTaxInfos || []).length === 0 && (
                    <button
                      onClick={() => setModalType("tax")}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition shadow-sm"
                    >
                      <Plus className="w-4 h-4" /> Add Tax Info
                    </button>
                  )}
                </div>
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-3">PAN Number</th>
                        <th className="px-6 py-3">Aadhaar Number</th>
                        <th className="px-6 py-3">UAN Number</th>
                        <th className="px-6 py-3">Tax Slab / Regime</th>
                        <th className="px-6 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {(employee.employeeTaxInfos || []).length === 0 ? (
                        <tr>
                          <td colSpan={5} className="px-6 py-8 text-center text-slate-400">
                            No statutory tax info registered for this employee yet.
                          </td>
                        </tr>
                      ) : (
                        (employee.employeeTaxInfos || []).map((tax) => (
                          <tr key={tax.id} className="hover:bg-slate-50 transition">
                            <td className="px-6 py-4 text-sm font-mono text-slate-900 font-semibold">{tax.panNumber || "—"}</td>
                            <td className="px-6 py-4 text-sm text-slate-600 font-mono">{tax.aadhaarNumber || "—"}</td>
                            <td className="px-6 py-4 text-sm text-slate-600 font-mono">{tax.uanNumber || "—"}</td>
                            <td className="px-6 py-4 text-sm text-slate-700">{tax.taxSlab || "—"}</td>
                            <td className="px-6 py-4 text-right">
                              <button
                                onClick={() => handleDeleteTax(tax.id)}
                                className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                                title="Delete Tax Info"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      {/* Edit Employee Modal */}
      {openEditEmployeeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="fixed inset-0 z-40" onClick={() => setOpenEditEmployeeModal(false)} />
          <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-100 overflow-hidden z-50 relative">
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">Edit Employee</h3>
                <p className="text-xs text-slate-400 mt-1">Update profile and organizational attributes</p>
              </div>
              <button onClick={() => setOpenEditEmployeeModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleUpdateEmployee} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={editEmpFormData.name}
                    onChange={(e) => setEditEmpFormData({ ...editEmpFormData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Employee Code</label>
                  <input
                    type="text"
                    value={editEmpFormData.code}
                    onChange={(e) => setEditEmpFormData({ ...editEmpFormData, code: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Department</label>
                  <select
                    value={editEmpFormData.departmentId}
                    onChange={(e) => setEditEmpFormData({ ...editEmpFormData, departmentId: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none"
                  >
                    <option value="">Select Department</option>
                    {departments.map((d) => (
                      <option key={d.id} value={d.id}>{d.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Designation</label>
                  <select
                    value={editEmpFormData.designationId}
                    onChange={(e) => setEditEmpFormData({ ...editEmpFormData, designationId: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none"
                  >
                    <option value="">Select Designation</option>
                    {designations.map((d) => (
                      <option key={d.id} value={d.id}>{d.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Grade / Band</label>
                  <select
                    value={editEmpFormData.gradeId}
                    onChange={(e) => setEditEmpFormData({ ...editEmpFormData, gradeId: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none"
                  >
                    <option value="">Select Grade</option>
                    {grades.map((g) => (
                      <option key={g.id} value={g.id}>{g.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Cost Center</label>
                  <select
                    value={editEmpFormData.costCenterId}
                    onChange={(e) => setEditEmpFormData({ ...editEmpFormData, costCenterId: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none"
                  >
                    <option value="">Select Cost Center</option>
                    {costCenters.map((cc) => (
                      <option key={cc.id} value={cc.id}>{cc.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={editEmpFormData.phoneNumber}
                    onChange={(e) => setEditEmpFormData({ ...editEmpFormData, phoneNumber: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Status</label>
                  <select
                    value={editEmpFormData.isActive ? "true" : "false"}
                    onChange={(e) => setEditEmpFormData({ ...editEmpFormData, isActive: e.target.value === "true" })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none"
                  >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setOpenEditEmployeeModal(false)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={editEmpSubmitting}
                  className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition flex items-center gap-2"
                >
                  {editEmpSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  Save Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Document Modal */}
      {modalType === "document" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="fixed inset-0 z-40" onClick={() => setModalType(null)} />
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 overflow-hidden z-50 relative">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-900">Add Employee Document</h3>
              <button onClick={() => setModalType(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddDocument} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Document Type *</label>
                <select
                  value={docForm.documentType}
                  onChange={(e) => setDocForm({ ...docForm, documentType: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none"
                >
                  <option value="ID_PROOF">ID Proof</option>
                  <option value="ADDRESS_PROOF">Address Proof</option>
                  <option value="PAN">PAN Card</option>
                  <option value="PASSPORT">Passport</option>
                  <option value="OFFER_LETTER">Offer Letter</option>
                  <option value="EXPERIENCE_LETTER">Experience Letter</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Document Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Passport copy"
                  value={docForm.documentName}
                  onChange={(e) => setDocForm({ ...docForm, documentName: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">File URL or Path</label>
                <input
                  type="text"
                  placeholder="https://... or /uploads/doc.pdf"
                  value={docForm.fileUrl}
                  onChange={(e) => setDocForm({ ...docForm, fileUrl: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Expiry Date</label>
                <input
                  type="date"
                  value={docForm.expiryDate}
                  onChange={(e) => setDocForm({ ...docForm, expiryDate: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>
              <div className="flex justify-end gap-3 pt-3">
                <button type="button" onClick={() => setModalType(null)} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-xl">
                  Cancel
                </button>
                <button type="submit" disabled={submittingModal} className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl flex items-center gap-2">
                  {submittingModal && <Loader2 className="w-4 h-4 animate-spin" />}
                  Save Document
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Emergency Contact Modal */}
      {modalType === "emergency" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="fixed inset-0 z-40" onClick={() => setModalType(null)} />
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 overflow-hidden z-50 relative">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-900">Add Emergency Contact</h3>
              <button onClick={() => setModalType(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddContact} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Contact person name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Relationship *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Spouse, Parent, Sibling"
                  value={contactForm.relationship}
                  onChange={(e) => setContactForm({ ...contactForm, relationship: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91-9876543210"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="contact@example.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="primaryContact"
                  checked={contactForm.isPrimary}
                  onChange={(e) => setContactForm({ ...contactForm, isPrimary: e.target.checked })}
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="primaryContact" className="text-xs font-medium text-slate-700">Set as Primary Emergency Contact</label>
              </div>
              <div className="flex justify-end gap-3 pt-3">
                <button type="button" onClick={() => setModalType(null)} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-xl">
                  Cancel
                </button>
                <button type="submit" disabled={submittingModal} className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl flex items-center gap-2">
                  {submittingModal && <Loader2 className="w-4 h-4 animate-spin" />}
                  Save Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Bank Detail Modal */}
      {modalType === "bank" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="fixed inset-0 z-40" onClick={() => setModalType(null)} />
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 overflow-hidden z-50 relative">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-900">Add Bank Account</h3>
              <button onClick={() => setModalType(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddBank} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Bank Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. HDFC Bank, ICICI Bank"
                  value={bankForm.bankName}
                  onChange={(e) => setBankForm({ ...bankForm, bankName: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Branch Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Koramangala Branch"
                  value={bankForm.branchName}
                  onChange={(e) => setBankForm({ ...bankForm, branchName: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Account Number *</label>
                <input
                  type="text"
                  required
                  placeholder="123456789012"
                  value={bankForm.accountNumber}
                  onChange={(e) => setBankForm({ ...bankForm, accountNumber: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none font-mono"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">IFSC Code *</label>
                  <input
                    type="text"
                    required
                    placeholder="HDFC0001234"
                    value={bankForm.ifscCode}
                    onChange={(e) => setBankForm({ ...bankForm, ifscCode: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Account Type</label>
                  <select
                    value={bankForm.accountType}
                    onChange={(e) => setBankForm({ ...bankForm, accountType: e.target.value as "SAVINGS" | "CURRENT" | "SALARY" })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none"
                  >
                    <option value="SAVINGS">Savings</option>
                    <option value="CURRENT">Current</option>
                    <option value="SALARY">Salary</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="primaryBank"
                  checked={bankForm.isPrimary}
                  onChange={(e) => setBankForm({ ...bankForm, isPrimary: e.target.checked })}
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="primaryBank" className="text-xs font-medium text-slate-700">Set as Primary Salary Account</label>
              </div>
              <div className="flex justify-end gap-3 pt-3">
                <button type="button" onClick={() => setModalType(null)} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-xl">
                  Cancel
                </button>
                <button type="submit" disabled={submittingModal} className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl flex items-center gap-2">
                  {submittingModal && <Loader2 className="w-4 h-4 animate-spin" />}
                  Save Bank
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Tax Info Modal */}
      {modalType === "tax" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="fixed inset-0 z-40" onClick={() => setModalType(null)} />
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 overflow-hidden z-50 relative">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-900">Add Tax Information</h3>
              <button onClick={() => setModalType(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddTax} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">PAN Number *</label>
                <input
                  type="text"
                  required
                  placeholder="ABCDE1234F"
                  value={taxForm.panNumber}
                  onChange={(e) => setTaxForm({ ...taxForm, panNumber: e.target.value.toUpperCase() })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Aadhaar Number</label>
                <input
                  type="text"
                  placeholder="12-digit Aadhaar"
                  value={taxForm.aadhaarNumber}
                  onChange={(e) => setTaxForm({ ...taxForm, aadhaarNumber: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">UAN Number</label>
                <input
                  type="text"
                  placeholder="Universal Account Number"
                  value={taxForm.uanNumber}
                  onChange={(e) => setTaxForm({ ...taxForm, uanNumber: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Tax Regime</label>
                <select
                  value={taxForm.taxSlab}
                  onChange={(e) => setTaxForm({ ...taxForm, taxSlab: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none"
                >
                  <option value="NEW_REGIME">New Tax Regime</option>
                  <option value="OLD_REGIME">Old Tax Regime</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 pt-3">
                <button type="button" onClick={() => setModalType(null)} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-xl">
                  Cancel
                </button>
                <button type="submit" disabled={submittingModal} className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl flex items-center gap-2">
                  {submittingModal && <Loader2 className="w-4 h-4 animate-spin" />}
                  Save Tax Info
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
