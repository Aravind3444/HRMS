import { useAuthStore } from '../../store/authStore';
import {
  Building2,
  Users,
  Shield,
  Layers,
  LogOut,
  Calendar,
  CheckCircle,
  FileCheck,
  Clock,
} from 'lucide-react';

export function TenantDashboard() {
  const { user, logout } = useAuthStore();

  const tenant = user?.activeTenant;

  // If tenant is pending superadmin approval, show waiting page
  if (tenant?.status === 'pending_review') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-amber-500 animate-spin" />
            <span className="text-lg font-bold text-slate-900">Pending Approval</span>
          </div>
          <p className="text-slate-600 text-sm mb-6">
            Your organization <strong>{tenant.name}</strong> has been registered and is awaiting approval from the platform superadmin.
          </p>
          <div className="bg-amber-50 rounded-xl p-4 mb-6 text-left">
            <p className="text-xs font-semibold text-amber-800 mb-2">What happens next:</p>
            <ul className="text-xs text-amber-700 space-y-1 text-left">
              <li className="flex items-center gap-2">
                <span className="text-[10px]">✓</span>
                <span>Your signup has been submitted successfully.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[10px] text-amber-500">⏳</span>
                <span>Platform superadmin will review and approve your organization.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[10px] text-emerald-500">✉️</span>
                <span>You'll receive an email once approved.</span>
              </li>
            </ul>
          </div>
          <button
            onClick={() => {
              document.cookie = 'hrms_access_token=; Max-Age=0; path=/;';
              document.cookie = 'hrms_refresh_token=; Max-Age=0; path=/;';
              logout();
              window.location.reload();
            }}
            className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/v1/auth/logout', { method: 'POST' });
    } catch {
      // ignore
    } finally {
      // Clear cookie explicitly on client side as fallback
      document.cookie = 'hrms_access_token=; Max-Age=0; path=/;';
      document.cookie = 'hrms_refresh_token=; Max-Age=0; path=/;';
      logout();
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-800 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-600/20">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-bold text-slate-900 leading-tight">
                  {tenant?.name || 'Enterprise HRMS'}
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-wider">
                  {tenant?.status || 'Active'}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">hrms.io/{tenant?.slug}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-semibold text-slate-800">{user?.fullName}</p>
              <p className="text-[11px] text-slate-400">{user?.email}</p>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block" />
            <button
              onClick={handleLogout}
              className="p-2 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition flex items-center gap-1.5 text-xs font-medium"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-3">
              <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />
              Phase 1 Core Foundation Live
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Welcome, {user?.fullName}!
            </h2>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              Your organization <span className="font-semibold text-white">{tenant?.name}</span> is securely isolated with multi-tenant database constraints, session protection, and India-first compliance readiness.
            </p>
          </div>
        </div>

        {/* Status Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Assigned Roles</p>
              <p className="text-xl font-bold text-slate-900 mt-1">
                {tenant?.roles.join(', ') || 'No Role'}
              </p>
              <p className="text-xs text-indigo-600 mt-1">Organization Administrator</p>
            </div>
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
              <Shield className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Legal Entities</p>
              <p className="text-xl font-bold text-slate-900 mt-1">1 Default</p>
              <p className="text-xs text-slate-500 mt-1">Code: CORP (India-First)</p>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Building2 className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Effective Permissions</p>
              <p className="text-xl font-bold text-slate-900 mt-1">
                {tenant?.permissions.length || 0} Granted
              </p>
              <p className="text-xs text-slate-500 mt-1">Full Organization Scope</p>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <FileCheck className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Trial Period</p>
              <p className="text-xl font-bold text-slate-900 mt-1">13 Days</p>
              <p className="text-xs text-amber-600 mt-1">Full-Feature Access</p>
            </div>
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <Calendar className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Phase 1 Verification Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Tenant RBAC Details */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Layers className="w-4 h-4 text-indigo-600" />
              Tenant Context & RBAC Summary
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Tenant ID</span>
                <span className="font-mono text-slate-800">{tenant?.id}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Membership ID</span>
                <span className="font-mono text-slate-800">{tenant?.membershipId}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Auth Transport</span>
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">HttpOnly Secure Cookie</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500">Audit & Outbox</span>
                <span className="text-indigo-700 font-semibold bg-indigo-50 px-2 py-0.5 rounded">ACID Transactional Bus</span>
              </div>
            </div>
          </div>

          {/* Module Roadmap & Next Actions */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-emerald-600" />
              Next Milestone: Module M03 Organization Setup
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Now that your Organization Owner account is provisioned, the next milestone builds the master structure for Indian entities:
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <strong>Legal Entities Management:</strong> Configure CIN, PAN, TAN, GSTIN, PF, and ESI numbers.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <strong>Locations & Branches:</strong> Geofencing radius, state PT registration, address.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <strong>Departments & Cost Centers:</strong> Hierarchical department tree with head of department.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
