import { useState, useEffect } from "react";
import { useAuthStore } from "../../store/authStore";
import {
  Layers,
  Plus,
  Edit,
  Trash2,
  Search,
  AlertCircle,
  CheckCircle,
  X,
  Loader2,
} from "lucide-react";
import { departmentApi } from "@/api/hooks/org";
import { employeeApi } from "@/api/hooks/employee";

interface DepartmentItem {
  id: string;
  tenantId: string;
  parentDepartmentId?: string | null;
  name: string;
  code: string;
  description?: string | null;
  headEmployeeId?: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface EmployeeOption {
  id: string;
  name: string;
  employeeCode?: string;
}

export function DepartmentPage() {
  const { user } = useAuthStore();
  const [items, setItems] = useState<DepartmentItem[]>([]);
  const [employees, setEmployees] = useState<EmployeeOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    description: "",
    parentDepartmentId: "",
    headEmployeeId: "",
    isActive: true,
  });

  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const tenantId = user?.activeTenant?.id || "";

  useEffect(() => {
    if (tenantId) {
      fetchDepartments();
      fetchEmployees();
    }
  }, [tenantId]);

  const fetchDepartments = async () => {
    setLoading(true);
    try {
      const res = await departmentApi.list(tenantId);
      setItems(res.data.data || []);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  const fetchEmployees = async () => {
    try {
      const res = await employeeApi.list(tenantId);
      if (res.data.success && res.data.data) {
        setEmployees(
          res.data.data.map((e) => ({
            id: e.id,
            name: e.name,
            employeeCode: e.employeeCode,
          }))
        );
      }
    } catch {
      // ignore
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionLoading("submit");

    // Clean payload: send null for empty optional UUIDs when updating so relations can be cleared
    const payload: any = {
      name: formData.name.trim(),
      code: formData.code.trim().toUpperCase(),
      description: formData.description.trim() || undefined,
      parentDepartmentId: formData.parentDepartmentId || (editingId ? null : undefined),
      headEmployeeId: formData.headEmployeeId || (editingId ? null : undefined),
      isActive: formData.isActive,
    };

    try {
      if (editingId) {
        const res = await departmentApi.update(editingId, payload);
        if (res.data.success) {
          setNotification({ message: "Department updated successfully", type: "success" });
        } else {
          setNotification({ message: "Failed to update department", type: "error" });
        }
      } else {
        const res = await departmentApi.create({ ...payload, tenantId });
        if (res.data.success) {
          setNotification({ message: "Department created successfully", type: "success" });
        } else {
          setNotification({ message: "Failed to create department", type: "error" });
        }
      }
      setOpenModal(false);
      setEditingId(null);
      setFormData({
        name: "",
        code: "",
        description: "",
        parentDepartmentId: "",
        headEmployeeId: "",
        isActive: true,
      });
      fetchDepartments();
    } catch (err: any) {
      const msg = err.response?.data?.message || err.response?.data?.error?.message || "Failed to save department";
      setNotification({
        message: Array.isArray(msg) ? msg.join(", ") : msg,
        type: "error",
      });
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this department?")) return;
    setActionLoading(id);
    try {
      const res = await departmentApi.delete(id);
      if (res.data.success) {
        setNotification({ message: "Department deleted successfully", type: "success" });
        fetchDepartments();
      }
    } catch (err: any) {
      setNotification({
        message: err.response?.data?.message || "Failed to delete department",
        type: "error",
      });
    } finally {
      setActionLoading(null);
    }
  };

  const handleEdit = (item: DepartmentItem) => {
    setEditingId(item.id);
    setFormData({
      name: item.name,
      code: item.code,
      description: item.description || "",
      parentDepartmentId: item.parentDepartmentId || "",
      headEmployeeId: item.headEmployeeId || "",
      isActive: item.isActive,
    });
    setOpenModal(true);
  };

  const departmentMap = Object.fromEntries(items.map((d) => [d.id, d.name]));
  const employeeMap = Object.fromEntries(employees.map((e) => [e.id, `${e.name} (${e.employeeCode || "No Code"})`]));

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-7 h-7 text-indigo-600" />
            Departments
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Configure department hierarchy, leadership, and operational units.
          </p>
        </div>
        <button
          onClick={() => {
            setEditingId(null);
            setFormData({
              name: "",
              code: "",
              description: "",
              parentDepartmentId: "",
              headEmployeeId: "",
              isActive: true,
            });
            setOpenModal(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-xl shadow-sm transition"
        >
          <Plus className="w-4 h-4" />
          Add Department
        </button>
      </div>

      {/* Notification */}
      {notification && (
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
          <button
            onClick={() => setNotification(null)}
            className="text-xs font-semibold hover:underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by department name or code..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Departments Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center">
            <Loader2 className="w-8 h-8 text-indigo-600 animate-spin mx-auto mb-3" />
            <p className="text-sm text-slate-500">Loading departments...</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="p-12 text-center">
            <Layers className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-800">No departments found</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
              {searchQuery
                ? "No departments match your search."
                : "Create your first department (e.g. Engineering, HR, Sales)."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50/80 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3.5">Name</th>
                  <th className="px-6 py-3.5">Code</th>
                  <th className="px-6 py-3.5">Parent Department</th>
                  <th className="px-6 py-3.5">Department Head</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/60 transition">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-slate-900">{item.name}</p>
                        {item.description && (
                          <p className="text-xs text-slate-400 mt-0.5">{item.description}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-mono text-xs text-slate-700 font-medium">
                      {item.code}
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-600">
                      {item.parentDepartmentId ? departmentMap[item.parentDepartmentId] || "—" : "Root (None)"}
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-600">
                      {item.headEmployeeId ? employeeMap[item.headEmployeeId] || "—" : "—"}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                          item.isActive
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-slate-100 text-slate-600 border-slate-200"
                        }`}
                      >
                        {item.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                          title="Edit Department"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                          title="Delete Department"
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

      {/* Add / Edit Department Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="fixed inset-0 z-40" onClick={() => setOpenModal(false)} />
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-100 overflow-hidden z-50 relative">
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">
                  {editingId ? "Edit Department" : "Add Department"}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Only Name and Code are required. Parent & Head are optional dropdowns.
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

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Department Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    placeholder="Engineering"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Department Code *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    placeholder="ENG"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Description
                </label>
                <input
                  type="text"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  placeholder="Core software engineering and devops team"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Parent Department (Optional)
                  </label>
                  <select
                    value={formData.parentDepartmentId}
                    onChange={(e) => setFormData({ ...formData, parentDepartmentId: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  >
                    <option value="">None (Top-Level Root)</option>
                    {items
                      .filter((d) => d.id !== editingId)
                      .map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.name} ({d.code})
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Department Head (Optional)
                  </label>
                  <select
                    value={formData.headEmployeeId}
                    onChange={(e) => setFormData({ ...formData, headEmployeeId: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  >
                    <option value="">None / Not Assigned</option>
                    {employees.map((emp) => (
                      <option key={emp.id} value={emp.id}>
                        {emp.name} ({emp.employeeCode || "No Code"})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="deptIsActive"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="deptIsActive" className="text-xs font-medium text-slate-700 cursor-pointer">
                  Department is Active
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={actionLoading === "submit"}
                  className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition flex items-center gap-2"
                >
                  {actionLoading === "submit" && <Loader2 className="w-4 h-4 animate-spin" />}
                  {editingId ? "Update Department" : "Create Department"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
