"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuthStore } from "../../store/authStore";
import {
  Plus, Edit, Trash2, Search, AlertCircle, CheckCircle,
  Loader2, Eye, FileText, MoreHorizontal,
  ArrowLeft, RefreshCw, Download, Folder, User, Building2,
  Briefcase, Calendar, CreditCard, Banknote, Award, Phone, Mail,
  ShieldAlert, Settings, Layout, BarChart3, PieChart, ClipboardList,
  X,
} from "lucide-react";

interface GenericListPageProps {
  title: string;
  subtitle: string;
  icon: React.ComponentType<any>;
  api: any;
  fields: Array<{
    key: string;
    label: string;
    type?: "text" | "number" | "date" | "status" | "boolean" | "currency";
    required?: boolean;
  }>;
  formFields: Array<{
    key: string;
    label: string;
    type: "text" | "email" | "number" | "date" | "select" | "textarea" | "checkbox";
    required?: boolean;
    options?: { label: string; value: string }[];
    placeholder?: string;
  }>;
  initialFormData?: Record<string, any>;
  onNotification?: (message: string, type: "success" | "error") => void;
  tenantId?: string;
}

export function GenericListPage(props: GenericListPageProps) {
  const { user } = useAuthStore();
  const effectiveTenantId = props.tenantId || user?.activeTenant?.id || "";

  const {
    title, subtitle, icon: Icon, api, fields, formFields,
    initialFormData = {}, onNotification,
  } = props;
  const tenantId = effectiveTenantId;

  const canCreate = !!api.create;
  const canUpdate = !!api.update;
  const canDelete = !!api.delete;

  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({ ...initialFormData });
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, string> = {};
      if (tenantId) params.tenantId = tenantId;
      if (searchQuery) params.search = searchQuery;
      const res = await api.list(params);
      const data = res.data?.data || res.data || [];
      setItems(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setNotification({
        message: err.response?.data?.error?.message || "Failed to load data",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  }, [api, tenantId, searchQuery, setNotification]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const validateForm = (): string | null => {
    for (const field of formFields) {
      if (field.required && (!formData[field.key] || formData[field.key] === "")) {
        return `${field.label} is required`;
      }
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setNotification({ message: error, type: "error" });
      return;
    }
    if (!api.create && !api.update) return;
    setActionLoading("submit");
    try {
      const payload: any = { ...formData, tenantId };
      if (editingId && api.update) {
        await api.update(editingId, payload);
        setNotification({ message: "Updated successfully", type: "success" });
      } else if (api.create) {
        await api.create(payload);
        setNotification({ message: "Created successfully", type: "success" });
      }
      setOpenModal(false);
      setEditingId(null);
      setFormData({ ...initialFormData });
      fetchData();
    } catch (err: any) {
      const msg =
        err.response?.data?.message ||
        (Array.isArray(err.response?.data?.message) ? err.response?.data?.message.join(", ") : null) ||
        err.response?.data?.error?.message ||
        err.message ||
        "Operation failed";
      setNotification({
        message: typeof msg === "object" ? JSON.stringify(msg) : msg,
        type: "error",
      });
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!api.delete) return;
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    setActionLoading(id);
    try {
      await api.delete(id);
      setNotification({ message: "Deleted successfully", type: "success" });
      fetchData();
    } catch (err: any) {
      setNotification({
        message: err.response?.data?.error?.message || "Delete failed",
        type: "error",
      });
    } finally {
      setActionLoading(null);
    }
  };

  const handleEdit = (item: any) => {
    if (!api.update) return;
    setEditingId(item.id);
    setFormData({ ...item });
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setEditingId(null);
    setFormData({ ...initialFormData });
  };

  const filteredItems = items.filter((item: any) =>
    Object.values(item).some(val =>
      val != null && String(val).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const formatValue = (val: any, type?: string) => {
    if (val == null) return "-";
    if (type === "date") return new Date(val).toLocaleDateString();
    if (type === "currency") return `₹${Number(val).toLocaleString()}`;
    if (type === "boolean") return val ? "Yes" : "No";
    if (type === "status") {
      const statusColors: Record<string, string> = {
        active: "bg-emerald-100 text-emerald-700 border-emerald-200",
        pending: "bg-amber-100 text-amber-700 border-amber-200",
        approved: "bg-emerald-100 text-emerald-700 border-emerald-200",
        rejected: "bg-rose-100 text-rose-700 border-rose-200",
        draft: "bg-slate-100 text-slate-600 border-slate-200",
        completed: "bg-emerald-100 text-emerald-700 border-emerald-200",
        cancelled: "bg-rose-100 text-rose-700 border-rose-200",
        submitted: "bg-amber-100 text-amber-700 border-amber-200",
        in_progress: "bg-blue-100 text-blue-700 border-blue-200",
      };
      return statusColors[String(val)] || "bg-slate-100 text-slate-600 border-slate-200";
    }
    return val;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Icon className="w-5 h-5 text-indigo-600" />
              <h1 className="text-xl font-bold text-slate-900 leading-tight">{title}</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder={`Search ${title.toLowerCase()}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            {canCreate && (
              <button
                onClick={() => {
                  setEditingId(null);
                  setFormData({ ...initialFormData });
                  setOpenModal(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg shadow-indigo-600/20 transition"
              >
                <Plus className="w-4 h-4" />
                Add {title}
              </button>
            )}
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
            <button onClick={() => setNotification(null)} className="text-xs font-bold underline">
              Dismiss
            </button>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">{title}</h2>
              <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                {items.length} {title}
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                <tr>
                  {fields.map((f) => (
                    <th key={f.key} className="px-6 py-3">
                      {f.label}
                    </th>
                  ))}
                  {canUpdate || canDelete && (
                    <th className="px-6 py-3 text-right">Actions</th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan={fields.length + (canUpdate || canDelete ? 1 : 0)} className="px-6 py-12 text-center text-slate-400 text-xs">
                      <Loader2 className="w-5 h-5 animate-spin text-slate-400 mb-2" />
                      <div>Loading {title.toLowerCase()}...</div>
                    </td>
                  </tr>
                ) : filteredItems.length === 0 ? (
                  <tr>
                    <td colSpan={fields.length + (canUpdate || canDelete ? 1 : 0)} className="px-6 py-12 text-center text-slate-400 text-xs">
                      No {title.toLowerCase()} found. {canCreate ? "Add your first" : "No"} {title.toLowerCase()} to get started.
                    </td>
                  </tr>
                ) : (
                  filteredItems.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition">
                      {fields.map((f) => (
                        <td key={f.key} className="px-6 py-4 text-sm text-slate-600">
                          {formatValue(item[f.key], f.type)}
                        </td>
                      ))}
                      {canUpdate || canDelete && (
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center gap-1">
                            {canUpdate && (
                              <button
                                onClick={() => handleEdit(item)}
                                className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                                title="Edit"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                            )}
                            {canDelete && (
                              <button
                                onClick={() => handleDelete(item.id)}
                                disabled={actionLoading === item.id}
                                className="p-2 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition disabled:opacity-50"
                                title="Delete"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </td>
                      )}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {openModal && (canCreate || canUpdate) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-0 z-40" onClick={closeModal} />
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 relative" onClick={(e) => e.stopPropagation()}>
            <div className="bg-indigo-600 p-6 text-white flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">
                  {editingId && canUpdate ? `Edit ${title}` : `Create ${title}`}
                </h2>
                <p className="text-xs text-indigo-100 mt-1">
                  {editingId && canUpdate ? "Modify the details below." : "Fill in the required information."}
                </p>
              </div>
              <button onClick={closeModal} className="text-white hover:text-indigo-100">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[80vh]">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {formFields.map((field) => (
                    <div key={field.key} className="col-span-1 sm:col-span-1">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {field.label}{field.required ? " *" : ""}
                      </label>
                      {field.type === "select" ? (
                        <select
                          required={field.required}
                          value={formData[field.key] || ""}
                          onChange={(e) =>
                            setFormData({ ...formData, [field.key]: e.target.value })
                          }
                          className="w-full pl-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        >
                          <option value="">Select {field.label.toLowerCase()}</option>
                          {field.options?.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      ) : field.type === "textarea" ? (
                        <textarea
                          required={field.required}
                          value={formData[field.key] || ""}
                          onChange={(e) =>
                            setFormData({ ...formData, [field.key]: e.target.value })
                          }
                          rows={3}
                          className="w-full pl-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                          placeholder={field.placeholder}
                        />
                      ) : field.type === "checkbox" ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={formData[field.key] === true}
                            onChange={(e) =>
                              setFormData({ ...formData, [field.key]: e.target.checked })
                            }
                            className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                          />
                          <label className="text-xs font-semibold text-slate-700">
                            {field.label}
                          </label>
                        </div>
                      ) : (
                        <input
                          type={field.type}
                          required={field.required}
                          value={formData[field.key] || ""}
                          onChange={(e) =>
                            setFormData({ ...formData, [field.key]: e.target.value })
                          }
                          className="w-full pl-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={actionLoading === "submit"}
                    className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] rounded-lg shadow-lg shadow-indigo-600/20 transition disabled:opacity-50"
                  >
                    {actionLoading === "submit" ? "Saving..." : editingId && canUpdate ? "Update" : "Create"}
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