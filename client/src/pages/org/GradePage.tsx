import { useState, useEffect } from "react";
import { useAuthStore } from "../../store/authStore";
import {
  Award,
  Plus,
  Edit,
  Trash2,
  Search,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { gradeApi } from "@/api/hooks/org";

interface GradeItem {
  id: string;
  tenantId: string;
  code: string;
  name: string;
  description?: string | null;
  minSalary?: number | null;
  maxSalary?: number | null;
  currency?: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export function GradePage() {
  const { user } = useAuthStore();
  const [items, setItems] = useState<GradeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    description: "",
    minSalary: "",
    maxSalary: "",
    currency: "INR",
    isActive: true,
  });
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const tenantId = user?.activeTenant?.id || "";

  useEffect(() => {
    fetchGrades();
  }, [tenantId]);

  const fetchGrades = async () => {
    setLoading(true);
    try {
      const res = await gradeApi.list(tenantId);
      setItems(res.data.data || []);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionLoading("submit");
    try {
      const payload: any = {
        name: formData.name.trim(),
        code: formData.code.trim(),
        description: formData.description.trim() || null,
        minSalary: formData.minSalary ? parseFloat(formData.minSalary) : null,
        maxSalary: formData.maxSalary ? parseFloat(formData.maxSalary) : null,
        currency: formData.currency || 'INR',
        isActive: formData.isActive,
      };

      if (editingId) {
        const res = await gradeApi.update(editingId, payload);
        if (res.data.success) {
          setNotification({ message: "Grade updated successfully", type: "success" });
        } else {
          setNotification({ message: res.data.message || "Failed to update grade", type: "error" });
        }
      } else {
        const res = await gradeApi.create({ ...payload, tenantId });
        if (res.data.success) {
          setNotification({ message: "Grade created successfully", type: "success" });
        } else {
          setNotification({ message: res.data.message || "Failed to create grade", type: "error" });
        }
      }
      setOpenModal(false);
      setEditingId(null);
      setFormData({ name: "", code: "", description: "", minSalary: "", maxSalary: "", currency: "INR", isActive: true });
      fetchGrades();
    } catch (err: any) {
      const errMsg = err?.response?.data?.message || (Array.isArray(err?.response?.data?.message) ? err?.response?.data?.message.join(", ") : null) || "Network error or invalid data";
      setNotification({ message: Array.isArray(errMsg) ? errMsg.join(", ") : errMsg, type: "error" });
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this grade?")) return;
    setActionLoading(id);
    try {
      const res = await gradeApi.delete(id);
      if (res.data.success) {
        setNotification({ message: "Grade deleted successfully", type: "success" });
        fetchGrades();
      }
    } catch {
      setNotification({ message: "Failed to delete grade", type: "error" });
    } finally {
      setActionLoading(null);
    }
  };

  const handleEdit = (item: GradeItem) => {
    setEditingId(item.id);
    setFormData({
      name: item.name,
      code: item.code,
      description: item.description || "",
      minSalary: item.minSalary?.toString() || "",
      maxSalary: item.maxSalary?.toString() || "",
      currency: item.currency || "INR",
      isActive: item.isActive,
    });
    setOpenModal(true);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600" />
              <h1 className="text-xl font-bold text-slate-900 leading-tight">Grades / Pay Bands</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search grades..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <button
              onClick={() => {
                setEditingId(null);
                setFormData({ name: "", code: "", description: "", minSalary: "", maxSalary: "", currency: "INR", isActive: true });
                setOpenModal(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg shadow-indigo-600/20 transition"
            >
              <Plus className="w-4 h-4" />
              Add Grade
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {notification && (
          <div className={`mb-6 p-4 rounded-xl text-sm flex items-center justify-between border ${
            notification.type === "success"
              ? "bg-emerald-50 text-emerald-800 border-emerald-200"
              : "bg-rose-50 text-rose-800 border-rose-200"
          }`}>
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
              className="text-xs font-bold underline"
            >
              Dismiss
            </button>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Grades / Pay Bands</h2>
              <p className="text-xs text-slate-500 mt-1">
                Configure pay bands and salary ranges for your organization.
              </p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                {items.length} Grades
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3">Grade Name</th>
                  <th className="px-6 py-3">Code</th>
                  <th className="px-6 py-3">Min Salary</th>
                  <th className="px-6 py-3">Max Salary</th>
                  <th className="px-6 py-3">Currency</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-slate-400 text-xs">
                      Loading grades...
                    </td>
                  </tr>
                ) : filteredItems.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-slate-400 text-xs">
                      No grades found. Create your first grade to get started.
                    </td>
                  </tr>
                ) : (
                  filteredItems.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-medium text-slate-900">{item.name}</td>
                      <td className="px-6 py-4 font-mono text-xs text-slate-500">{item.code}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{item.minSalary ? "₹" + item.minSalary : "-"}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{item.maxSalary ? "₹" + item.maxSalary : "-"}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{item.currency || "INR"}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                          item.isActive ? "bg-emerald-100 text-emerald-700 border border-emerald-200" : "bg-rose-100 text-rose-700 border border-rose-200"
                        }`}>
                          {item.isActive ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleEdit(item)}
                            className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                            title="Edit"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            disabled={actionLoading === item.id}
                            className="p-2 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition disabled:opacity-50"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="bg-indigo-600 p-6 text-white">
              <h2 className="text-lg font-bold">{editingId ? "Edit Grade" : "Create Grade"}</h2>
              <p className="text-xs text-indigo-100 mt-1">
                Configure pay band details for your organization.
              </p>
            </div>
            <div className="p-6 space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Grade Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Code *</label>
                    <input
                      type="text"
                      required
                      value={formData.code}
                      onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                      className="w-full pl-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Description</label>
                    <input
                      type="text"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full pl-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Currency</label>
                    <input
                      type="text"
                      value={formData.currency}
                      onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                      className="w-full pl-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Min Salary</label>
                    <input
                      type="number"
                      step="any"
                      value={formData.minSalary}
                      onChange={(e) => setFormData({ ...formData, minSalary: e.target.value })}
                      className="w-full pl-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Max Salary</label>
                    <input
                      type="number"
                      step="any"
                      value={formData.maxSalary}
                      onChange={(e) => setFormData({ ...formData, maxSalary: e.target.value })}
                      className="w-full pl-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) =>
                      setFormData({ ...formData, isActive: e.target.checked })
                    }
                    className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                  />
                  <label className="text-xs font-semibold text-slate-700">Active</label>
                </div>
                <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => {
                      setOpenModal(false);
                      setEditingId(null);
                      setFormData({ name: "", code: "", description: "", minSalary: "", maxSalary: "", currency: "INR", isActive: true });
                    }}
                    className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={actionLoading === "submit"}
                    className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] rounded-lg shadow-lg shadow-indigo-600/20 transition disabled:opacity-50"
                  >
                    {actionLoading === "submit" ? "Saving..." : editingId ? "Update" : "Create"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
