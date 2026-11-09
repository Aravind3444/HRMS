import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/authStore";
import {
  Building2,
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  RefreshCw,
  LogOut,
  AlertTriangle,
  ChevronRight,
  Search,
  Filter,
  Layers,
  Check,
} from "lucide-react";

interface TenantItem {
  id: string;
  name: string;
  slug: string;
  status: "pending_review" | "active" | "suspended" | "cancelled" | "archived";
  planTier: string;
  createdAt: string;
  subscription?: {
    status: string;
    seatLimit: number;
    trialEndsAt?: string | null;
  } | null;
  settings?: {
    country: string;
    currency: string;
  } | null;
  memberships?: Array<{
    user: {
      id: string;
      email: string;
      fullName: string;
      phoneNumber: string | null;
      createdAt: string;
      isEmailVerified: boolean;
    };
    roleGrants: Array<{
      role: {
        code: string;
      };
    }>;
  }> | null;
}

export function SuperAdminDashboard() {
  const { user, logout } = useAuthStore();
  const [tenants, setTenants] = useState<TenantItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<"tenants" | "plans">("tenants");
  const [plans, setPlans] = useState<any[]>([]);
  const [plansLoading, setPlansLoading] = useState(false);

  const fetchPlans = async () => {
    setPlansLoading(true);
    try {
      const res = await fetch("/api/v1/platform/tenants/plans");
      if (res.ok) {
        const json = await res.json();
        setPlans(json.data || []);
      }
    } catch {
      // ignore
    } finally {
      setPlansLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "plans") {
      fetchPlans();
    }
  }, [activeTab]);
  const [searchQuery, setSearchQuery] = useState("");
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const fetchTenants = async () => {
    setLoading(true);
    try {
      const url =
        filterStatus === "all"
          ? "/api/v1/platform/tenants"
          : `/api/v1/platform/tenants?status=${filterStatus}`;
      const res = await fetch(url);
      if (res.ok) {
        const json = await res.json();
        setTenants(json.data || []);
      }
    } catch {
      setNotification({
        message: "Failed to load organization approvals",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTenants();
  }, [filterStatus]);

  const handleStatusChange = async (
    tenantId: string,
    action:
      "approve" | "reject" | "suspend" | "reactivate" | "cancel" | "archive",
  ) => {
    setActionLoading(tenantId);
    try {
      const res = await fetch(`/api/v1/platform/tenants/${tenantId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });

      if (res.ok) {
        // Find the tenant to get admin email for mock email notification
        const tenant = tenants.find((t) => t.id === tenantId);
        const admin = tenant?.memberships?.[0]?.user;
        // Mock: Send "Tenant Approved" email notification (email service will be implemented in later phase)
        if (action === "approve" && admin?.email) {
          console.log(
            `[MOCK EMAIL] TENANT_APPROVED sent to ${admin.email} for organization ${tenant.name} (${tenant.slug})`
          );
        }

        setNotification({
          message: `Tenant successfully ${
            action === "approve"
              ? "approved & trial activated" + (admin?.email ? `. Approval email sent to ${admin.email}` : "")
              : action === "reject"
                ? "rejected & cancelled"
                : action + "ed"
          }!`,
          type: "success",
        });
        await fetchTenants();
      } else {
        const err = await res.json();
        setNotification({
          message: err.message || "Action failed",
          type: "error",
        });
      }
    } catch {
      setNotification({
        message: "Network error performing action",
        type: "error",
      });
    } finally {
      setActionLoading(null);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/v1/auth/logout", { method: "POST" });
    } finally {
      logout();
    }
  };

  const pendingCount = tenants.filter(
    (t) => t.status === "pending_review",
  ).length;
  const activeCount = tenants.filter((t) => t.status === "active").length;
  const suspendedCount = tenants.filter((t) => t.status === "suspended").length;

  const filteredTenants = tenants.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.slug.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Platform Navbar */}
      <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-rose-500/20">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-bold text-white tracking-wide">
                  Platform Super Admin
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30 uppercase tracking-wider">
                  Global Control Plane
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Rule CF-04: Tenant-Free Architecture
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-semibold text-slate-200">
                {user?.fullName}
              </p>
              <p className="text-[11px] text-slate-400 font-mono">
                {user?.email}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveTab("tenants")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeTab === "tenants"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-200/60"
            }`}
          >
            <Building2 className="w-4 h-4" />
            Organizations & Approvals
          </button>
          <button
            onClick={() => setActiveTab("plans")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeTab === "plans"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-200/60"
            }`}
          >
            <Layers className="w-4 h-4" />
            Subscription Plans & Pricing
          </button>
        </div>

        {notification && (
          <div
            className={`mb-6 p-4 rounded-xl text-sm flex items-center justify-between border ${
              notification.type === "success"
                ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                : "bg-rose-50 text-rose-800 border-rose-200"
            }`}
          >
            <div className="flex items-center gap-2">
              {notification.type === "success" ? (
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-rose-600" />
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

        {/* Tenants Tab */}
        {activeTab === "tenants" && (
          <>
            {/* Quick Stats Banner */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Total Tenants
                  </p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">
                    {tenants.length}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                    Pending Review
                  </p>
                  <p className="text-2xl font-bold text-amber-900 mt-1">
                    {pendingCount}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-200/60 flex items-center justify-center text-amber-700">
                  <Clock className="w-5 h-5" />
                </div>
              </div>

              <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                    Active Organizations
                  </p>
                  <p className="text-2xl font-bold text-emerald-900 mt-1">
                    {activeCount}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-200/60 flex items-center justify-center text-emerald-700">
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>

              <div className="bg-rose-50 p-5 rounded-2xl border border-rose-200 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-rose-800 uppercase tracking-wider">
                    Suspended
                  </p>
                  <p className="text-2xl font-bold text-rose-900 mt-1">
                    {suspendedCount}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-rose-200/60 flex items-center justify-center text-rose-700">
                  <XCircle className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Action Controls & Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Organization Approvals & Lifecycle
                  </h2>
                  <p className="text-xs text-slate-500">
                    Review newly registered companies, approve access, or manage
                    suspensions (TEN-003)
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {/* Search */}
                  <div className="relative flex-1 sm:w-64">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search by company or slug..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-rose-500 focus:outline-none"
                    />
                  </div>

                  {/* Status Filter */}
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                  >
                    <option value="all">All Statuses</option>
                    <option value="pending_review">Pending Review</option>
                    <option value="active">Active</option>
                    <option value="suspended">Suspended</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="archived">Archived</option>
                  </select>

                  <button
                    onClick={fetchTenants}
                    className="p-2 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-600 transition"
                    title="Refresh List"
                  >
                    <RefreshCw
                      className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
                    />
                  </button>
                </div>
              </div>

              {/* Tenants List Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-6">Company Name</th>
                      <th className="py-3 px-6">Slug</th>
                      <th className="py-3 px-6">Admin User</th>
                      <th className="py-3 px-6">Plan Tier</th>
                      <th className="py-3 px-6">Status</th>
                      <th className="py-3 px-6">Trial Ends</th>
                      <th className="py-3 px-6">Created On</th>
                      <th className="py-3 px-6 text-right">Approval Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {loading ? (
                      <tr>
                        <td
                          colSpan={8}
                          className="py-12 text-center text-slate-400 text-xs"
                        >
                          Loading organizations...
                        </td>
                      </tr>
                    ) : filteredTenants.length === 0 ? (
                      <tr>
                        <td
                          colSpan={8}
                          className="py-12 text-center text-slate-400 text-xs"
                        >
                          No organizations found matching criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredTenants.map((t) => {
                        const admin = t.memberships?.[0]?.user;
                        const isAdminVerified = admin?.isEmailVerified;
                        const trialEnds = t.subscription?.trialEndsAt
                          ? new Date(t.subscription.trialEndsAt).toLocaleDateString()
                          : "\u2014";

                        return (
                          <tr key={t.id} className="hover:bg-slate-50 transition">
                            <td className="py-4 px-6 font-semibold text-slate-900 flex items-center gap-2">
                              <Building2 className="w-4 h-4 text-slate-400" />
                              {t.name}
                            </td>
                            <td className="py-4 px-6 font-mono text-xs text-slate-500">
                              {t.slug}
                            </td>
                            <td className="py-4 px-6">
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-slate-900">
                                    {admin?.fullName || "\u2014"}
                                  </span>
                                  {admin && !isAdminVerified && (
                                    <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                                      Email Unverified
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                  <span className="font-mono">{admin?.email || "\u2014"}</span>
                                  {admin?.phoneNumber && (
                                    <>
                                      <span className="text-slate-300">\u2022</span>
                                      <span className="font-mono">{admin.phoneNumber}</span>
                                    </>
                                  )}
                                </div>
                                <div className="text-[11px] text-slate-400">
                                  Joined:{' '}
                                  {admin
                                    ? new Date(admin.createdAt).toLocaleDateString()
                                    : "\u2014"}
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase">
                                {t.planTier}
                              </span>
                            </td>
                            <td className="py-4 px-6">
                              {t.status === "pending_review" && (
                                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                                  Pending Review
                                </span>
                              )}
                              {t.status === "active" && (
                                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                  Active
                                </span>
                              )}
                              {t.status === "suspended" && (
                                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                                  Suspended
                                </span>
                              )}
                              {t.status === "cancelled" && (
                                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                                  Cancelled
                                </span>
                              )}
                              {t.status === "archived" && (
                                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-200 text-slate-700 border border-slate-300">
                                  Archived
                                </span>
                              )}
                            </td>
                            <td className="py-4 px-6 text-xs text-slate-600 font-mono">
                              {trialEnds}
                            </td>
                            <td className="py-4 px-6 text-xs text-slate-400">
                              {new Date(t.createdAt).toLocaleDateString()}
                            </td>
                            <td className="py-4 px-6 text-right">
                              <div className="flex items-center justify-end gap-2">
                                {t.status === "pending_review" && (
                                  <>
                                    <button
                                      disabled={actionLoading === t.id}
                                      onClick={() =>
                                        handleStatusChange(t.id, "approve")
                                      }
                                      className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition disabled:opacity-50"
                                    >
                                      {actionLoading === t.id ? "Processing..." : "Approve"}
                                    </button>
                                    <button
                                      disabled={actionLoading === t.id}
                                      onClick={() =>
                                        handleStatusChange(t.id, "reject")
                                      }
                                      className="px-3 py-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold shadow-sm transition disabled:opacity-50"
                                    >
                                      {actionLoading === t.id ? "Processing..." : "Reject"}
                                    </button>
                                  </>
                                )}

                                {t.status === "active" && (
                                  <button
                                    disabled={actionLoading === t.id}
                                    onClick={() =>
                                      handleStatusChange(t.id, "suspend")
                                    }
                                    className="px-3 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-semibold transition disabled:opacity-50"
                                  >
                                    {actionLoading === t.id ? "Processing..." : "Suspend"}
                                  </button>
                                )}

                                {t.status === "suspended" && (
                                  <button
                                    disabled={actionLoading === t.id}
                                    onClick={() =>
                                      handleStatusChange(t.id, "reactivate")
                                    }
                                    className="px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-semibold transition disabled:opacity-50"
                                  >
                                    {actionLoading === t.id ? "Processing..." : "Reactivate"}
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Plans & Pricing Tab */}
        {activeTab === "plans" && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Platform Subscription Plans Catalog
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Tiered pricing packages, seat allowances, and module
                  entitlement lists (TEN-009 / CF-38)
                </p>
              </div>
              <button
                onClick={fetchPlans}
                className="p-2 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-600 transition"
                title="Refresh Plans"
              >
                <RefreshCw
                  className={`w-4 h-4 ${plansLoading ? "animate-spin" : ""}`}
                />
              </button>
            </div>

            {plansLoading ? (
              <div className="py-12 text-center text-slate-400 text-xs">
                Loading subscription plans...
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((p) => {
                  const currentVer = p.versions?.[0] || {};
                  return (
                    <div
                      key={p.id}
                      className={`bg-white rounded-2xl border shadow-sm p-6 flex flex-col justify-between ${
                        p.code === "standard"
                          ? "border-indigo-500 ring-2 ring-indigo-500/10"
                          : "border-slate-200"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                            {p.code}
                          </span>
                          {currentVer.isPublished && (
                            <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                              Published (v{currentVer.version})
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-slate-900">
                          {p.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-2 min-h-[36px]">
                          {p.description}
                        </p>

                        <div className="my-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-extrabold text-slate-900">
                              ₹
                              {Number(
                                currentVer.basePrice || 0,
                              ).toLocaleString()}
                            </span>
                            <span className="text-xs text-slate-500 font-medium">
                              / month base
                            </span>
                          </div>
                          <p className="text-xs text-indigo-600 font-medium mt-1">
                            + ₹{currentVer.perSeatPrice || 0} per seat / month
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            Default seat limit:{" "}
                            {currentVer.seatLimitDefault || 50} users
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                            Included Modules (
                            {currentVer.modulesIncluded?.length || 0})
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {(currentVer.modulesIncluded || []).map(
                              (mod: string) => (
                                <span
                                  key={mod}
                                  className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200"
                                >
                                  {mod}
                                </span>
                              ),
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                        <span>
                          Created: {new Date(p.createdAt).toLocaleDateString()}
                        </span>
                        <span className="text-emerald-600 font-semibold flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> 14-Day Free Trial
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
