import { useState, useEffect } from "react";
import { useAuthStore } from "../../store/authStore";
import {
  MapPin,
  Building2,
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  ChevronRight,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { locationApi } from "@/api/hooks/org";

interface LocationItem {
  id: string;
  tenantId: string;
  legalEntityId: string;
  name: string;
  code: string;
  address?: string | null;
  state?: string | null;
  pincode?: string | null;
  timezone?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  geofenceRadius?: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export function LocationPage() {
  const { user } = useAuthStore();
  const [items, setItems] = useState<LocationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    legalEntityId: "",
    name: "",
    code: "",
    address: "",
    state: "",
    pincode: "",
    timezone: "Asia/Kolkata",
    latitude: "",
    longitude: "",
    geofenceRadius: "",
    isActive: true,
  });
  const [legalEntities, setLegalEntities] = useState<{ id: string; name: string; code: string }[]>([]);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const tenantId = user?.activeTenant?.id || "";

  useEffect(() => {
    fetchLocations();
    fetchLegalEntities();
  }, [tenantId]);

  const fetchLegalEntities = async () => {
    try {
      const res = await fetch(`/api/v1/org/legal-entities?tenantId=${tenantId}`);
      if (res.ok) {
        const json = await res.json();
        setLegalEntities(json.data || []);
      }
    } catch {
      // ignore
    }
  };

  const fetchLocations = async () => {
    setLoading(true);
    try {
      const res = await locationApi.list(tenantId);
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
        legalEntityId: formData.legalEntityId,
        name: formData.name.trim(),
        code: formData.code.trim(),
        address: formData.address?.trim() || null,
        state: formData.state?.trim() || null,
        pincode: formData.pincode?.trim() || null,
        timezone: formData.timezone || "Asia/Kolkata",
        latitude: formData.latitude ? parseFloat(formData.latitude) : null,
        longitude: formData.longitude ? parseFloat(formData.longitude) : null,
        geofenceRadius: formData.geofenceRadius ? parseFloat(formData.geofenceRadius) : null,
        isActive: formData.isActive,
      };

      if (editingId) {
        const res = await locationApi.update(editingId, payload);
        if (res.data.success) {
          setNotification({ message: "Location updated successfully", type: "success" });
        } else {
          setNotification({ message: "Failed to update location", type: "error" });
        }
      } else {
        const res = await locationApi.create({ ...payload, tenantId });
        if (res.data.success) {
          setNotification({ message: "Location created successfully", type: "success" });
        } else {
          setNotification({ message: "Failed to create location", type: "error" });
        }
      }
      setOpenModal(false);
      setEditingId(null);
      setFormData({
        legalEntityId: "",
        name: "",
        code: "",
        address: "",
        state: "",
        pincode: "",
        timezone: "Asia/Kolkata",
        latitude: "",
        longitude: "",
        geofenceRadius: "",
        isActive: true,
      });
      fetchLocations();
    } catch {
      setNotification({ message: "Network error", type: "error" });
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this location?")) return;
    setActionLoading(id);
    try {
      const res = await locationApi.delete(id);
      if (res.data.success) {
        setNotification({ message: "Location deleted successfully", type: "success" });
        fetchLocations();
      }
    } catch {
      setNotification({ message: "Failed to delete location", type: "error" });
    } finally {
      setActionLoading(null);
    }
  };

  const handleEdit = (item: LocationItem) => {
    setEditingId(item.id);
    setFormData({
      legalEntityId: item.legalEntityId,
      name: item.name,
      code: item.code,
      address: item.address || "",
      state: item.state || "",
      pincode: item.pincode || "",
      timezone: item.timezone || "Asia/Kolkata",
      latitude: item.latitude?.toString() || "",
      longitude: item.longitude?.toString() || "",
      geofenceRadius: item.geofenceRadius?.toString() || "",
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
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-indigo-600" />
              <h1 className="text-xl font-bold text-slate-900 leading-tight">Locations</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <button
              onClick={() => {
                setEditingId(null);
                setFormData({
                  legalEntityId: "",
                  name: "",
                  code: "",
                  address: "",
                  state: "",
                  pincode: "",
                  timezone: "Asia/Kolkata",
                  latitude: "",
                  longitude: "",
                  geofenceRadius: "",
                  isActive: true,
                });
                setOpenModal(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg shadow-indigo-600/20 transition"
            >
              <Plus className="w-4 h-4" />
              Add Location
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Notification */}
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

        {/* Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Locations</h2>
              <p className="text-xs text-slate-500 mt-1">
                Configure office locations with address, city, state, pincode, timezone, and geofence.
              </p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                {items.length} Locations
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3">Location Name</th>
                  <th className="px-6 py-3">Code</th>
                  <th className="px-6 py-3">Legal Entity</th>
                  <th className="px-6 py-3">City / Pincode</th>
                  <th className="px-6 py-3">Timezone</th>
                  <th className="px-6 py-3">Geofence Radius</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-12 text-center text-slate-400 text-xs">
                      Loading locations...
                    </td>
                  </tr>
                ) : filteredItems.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-12 text-center text-slate-400 text-xs">
                      No locations found. Create your first location to get started.
                    </td>
                  </tr>
                ) : (
                  filteredItems.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-medium text-slate-900">{item.name}</td>
                      <td className="px-6 py-4 font-mono text-xs text-slate-500">{item.code}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{item.legalEntityId}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {item.state || "-"} | {item.pincode || "-"}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">{item.timezone || "Asia/Kolkata"}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{item.geofenceRadius ? item.geofenceRadius + " m" : "-"}</td>
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

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="bg-indigo-600 p-6 text-white">
              <h2 className="text-lg font-bold">{editingId ? "Edit Location" : "Create Location"}</h2>
              <p className="text-xs text-indigo-100 mt-1">
                Add office location details for your organization.
              </p>
            </div>
            <div className="p-6 space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Legal Entity *</label>
                    <select
                      required
                      value={formData.legalEntityId}
                      onChange={(e) => setFormData({ ...formData, legalEntityId: e.target.value })}
                      className="w-full pl-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    >
                      <option value="">Select Legal Entity</option>
                      {legalEntities.map((le) => (
                        <option key={le.id} value={le.id}>
                          {le.name} ({le.code})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Location Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">State</label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full pl-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Address</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full pl-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Pincode</label>
                    <input
                      type="text"
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full pl-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Timezone</label>
                    <input
                      type="text"
                      value={formData.timezone}
                      onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                      className="w-full pl-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Latitude</label>
                    <input
                      type="number"
                      step="any"
                      value={formData.latitude}
                      onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
                      className="w-full pl-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Longitude</label>
                    <input
                      type="number"
                      step="any"
                      value={formData.longitude}
                      onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
                      className="w-full pl-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Geofence Radius (m)</label>
                    <input
                      type="number"
                      value={formData.geofenceRadius}
                      onChange={(e) => setFormData({ ...formData, geofenceRadius: e.target.value })}
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
                      setFormData({
                        legalEntityId: "",
                        name: "",
                        code: "",
                        address: "",
                        state: "",
                        pincode: "",
                        timezone: "Asia/Kolkata",
                        latitude: "",
                        longitude: "",
                        geofenceRadius: "",
                        isActive: true,
                      });
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
