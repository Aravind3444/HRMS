"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Users,
  UserCheck,
  CreditCard,
  Calendar,
  Shield,
  FileText,
  Mail,
  UserMinus,
  DollarSign,
  Landmark,
  Award,
  GraduationCap,
  Laptop,
  HelpCircle,
  Receipt,
  Plane,
  Heart,
  BarChart3,
  ShieldCheck,
  Bell,
  GitBranch,
  Webhook,
  Lock,
  ArrowUpDown,
  BookOpen,
  Bot,
  ChevronDown,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { useAuthStore } from "../../store/authStore";

interface NavSubItem {
  name: string;
  href: string;
}

interface NavGroup {
  id: string;
  name: string;
  icon: any;
  items: NavSubItem[];
}

const MODULE_GROUPS: NavGroup[] = [
  {
    id: "m01-m03",
    name: "Organization",
    icon: Building2,
    items: [
      { name: "Setup Wizard", href: "/org/setup" },
      { name: "Legal Entities", href: "/org/legal-entities" },
      { name: "Locations & Branches", href: "/org/locations" },
      { name: "Departments", href: "/org/departments" },
      { name: "Designations", href: "/org/designations" },
      { name: "Grades & Bands", href: "/org/grades" },
      { name: "Cost Centers", href: "/org/cost-centers" },
      { name: "Employment Types", href: "/org/employment-types" },
    ],
  },
  {
    id: "m04",
    name: "Workforce",
    icon: Users,
    items: [
      { name: "Employee Directory", href: "/employees" },
    ],
  },
  {
    id: "m10-m12",
    name: "Time & Attendance",
    icon: Calendar,
    items: [
      { name: "Attendance Log", href: "/ess/attendance-days" },
      { name: "Shift Templates", href: "/ess/shift-templates" },
      { name: "Shift Rosters", href: "/ess/rosters" },
      { name: "Shift Swaps", href: "/ess/shift-swaps" },
      { name: "Leave Applications", href: "/ess/leave-applications" },
      { name: "Leave Types", href: "/ess/leave-types" },
      { name: "Leave Policies", href: "/ess/leave-policies" },
      { name: "Comp Off", href: "/ess/comp-off" },
    ],
  },
  {
    id: "m06",
    name: "Documents",
    icon: FileText,
    items: [
      { name: "Document Types", href: "/org/document-types" },
      { name: "Company Documents", href: "/org/company-documents" },
      { name: "Document Templates", href: "/org/document-templates" },
      { name: "Policy Documents", href: "/org/policy-documents" },
    ],
  },
  {
    id: "m07-m09",
    name: "Talent Lifecycle",
    icon: Mail,
    items: [
      { name: "Requisitions", href: "/recruitment/requisitions" },
      { name: "Job Openings", href: "/recruitment/jobs" },
      { name: "Candidates", href: "/recruitment/candidates" },
      { name: "Interviews", href: "/recruitment/interviews" },
      { name: "Offer Letters", href: "/recruitment/offers" },
      { name: "Referrals", href: "/recruitment/referrals" },
      { name: "Onboarding Templates", href: "/onboarding/templates" },
      { name: "Onboarding Tasks", href: "/onboarding/tasks" },
      { name: "Onboarding Cases", href: "/onboarding/cases" },
      { name: "Resignations", href: "/offboarding/resignations" },
      { name: "Terminations", href: "/offboarding/terminations" },
      { name: "Clearance Checklist", href: "/offboarding/clearance" },
      { name: "Exit Interviews", href: "/offboarding/exit-interviews" },
    ],
  },
  {
    id: "m13-m14",
    name: "Payroll & Statutory",
    icon: DollarSign,
    items: [
      { name: "Payroll Components", href: "/payroll/components" },
      { name: "Salary Structures", href: "/payroll/salary-structures" },
      { name: "Compensation", href: "/payroll/compensation" },
      { name: "Payroll Periods", href: "/payroll/periods" },
      { name: "Payroll Runs", href: "/payroll/runs" },
      { name: "Payslips", href: "/payroll/payslips" },
      { name: "Loans & Advances", href: "/payroll/loans" },
      { name: "Full & Final (FnF)", href: "/payroll/fnf" },
      { name: "Statutory Rules", href: "/statutory/rule-sets" },
      { name: "PF Contributions", href: "/statutory/pf-contributions" },
      { name: "ESI Contributions", href: "/statutory/esi-contributions" },
      { name: "Professional Tax", href: "/statutory/pt-contributions" },
      { name: "LWF Contributions", href: "/statutory/lwf-contributions" },
      { name: "Investment Declarations", href: "/statutory/investment-declarations" },
      { name: "Proof Submissions", href: "/statutory/proof-submissions" },
      { name: "TDS Computations", href: "/statutory/tds-computations" },
      { name: "Form 16", href: "/statutory/form-16" },
      { name: "Form 24Q", href: "/statutory/form-24q" },
      { name: "Compliance Calendar", href: "/statutory/compliance-calendar" },
    ],
  },
  {
    id: "m15-m16",
    name: "Growth & Learning",
    icon: Award,
    items: [
      { name: "Review Cycles", href: "/performance/review-cycles" },
      { name: "Performance Reviews", href: "/performance/reviews" },
      { name: "Goals & OKRs", href: "/performance/goals" },
      { name: "Courses", href: "/lms/courses" },
      { name: "Enrollments", href: "/lms/enrollments" },
      { name: "Certifications", href: "/lms/certifications" },
    ],
  },
  {
    id: "m17-m20",
    name: "Assets & Travel",
    icon: Laptop,
    items: [
      { name: "Asset Categories", href: "/assets/categories" },
      { name: "Asset Items", href: "/assets/items" },
      { name: "Asset Assignments", href: "/assets/assignments" },
      { name: "Ticket Categories", href: "/helpdesk/categories" },
      { name: "Helpdesk Tickets", href: "/helpdesk/tickets" },
      { name: "SLA Policies", href: "/helpdesk/sla-policies" },
      { name: "Expense Categories", href: "/expense/categories" },
      { name: "Expense Claims", href: "/expense/claims" },
      { name: "Expense Advances", href: "/expense/advances" },
      { name: "Travel Policies", href: "/travel/policies" },
      { name: "Travel Requests", href: "/travel/requests" },
      { name: "Travel Bookings", href: "/travel/bookings" },
    ],
  },
  {
    id: "m21-m23",
    name: "Engagement & Reports",
    icon: BarChart3,
    items: [
      { name: "Announcements", href: "/engagement/announcements" },
      { name: "Surveys", href: "/engagement/surveys" },
      { name: "Recognitions", href: "/engagement/recognitions" },
      { name: "Standard Reports", href: "/reports/standard" },
      { name: "Custom Reports", href: "/reports/custom" },
      { name: "Report Schedules", href: "/reports/schedules" },
      { name: "Audit Trail", href: "/audit/events" },
      { name: "Audit Exports", href: "/audit/exports" },
    ],
  },
  {
    id: "m24-m31",
    name: "System & Automation",
    icon: GitBranch,
    items: [
      { name: "Notification Templates", href: "/notifications/templates" },
      { name: "Notification Logs", href: "/notifications/logs" },
      { name: "Workflow Definitions", href: "/workflow/definitions" },
      { name: "Workflow Instances", href: "/workflow/instances" },
      { name: "Pending Approval Tasks", href: "/workflow/tasks" },
      { name: "Delegations", href: "/workflow/delegations" },
      { name: "Webhooks", href: "/integrations/webhooks" },
      { name: "Webhook Deliveries", href: "/integrations/webhook-deliveries" },
      { name: "API Keys", href: "/integrations/api-keys" },
      { name: "Security Audit Events", href: "/security/events" },
      { name: "Encryption Keys", href: "/security/encryption-keys" },
      { name: "Import Jobs", href: "/import-export/jobs" },
      { name: "Export Jobs", href: "/import-export/exports" },
      { name: "Chart of Accounts", href: "/finance/chart-of-accounts" },
      { name: "Fiscal Periods", href: "/finance/fiscal-periods" },
      { name: "Journal Entries", href: "/finance/journal-entries" },
      { name: "Journal Lines", href: "/finance/journal-lines" },
      { name: "AI Conversations", href: "/ai/conversations" },
      { name: "AI Messages", href: "/ai/messages" },
    ],
  },
];

export function Sidebar() {
  const location = useLocation();
  const { user, logout } = useAuthStore();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    "m01-m03": true,
    "m04": true,
    "m05": true,
  });

  const toggleGroup = (id: string) => {
    setOpenGroups((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isActive = (href: string) => location.pathname === href;

  const handleLogout = async () => {
    try {
      await fetch('/api/v1/auth/logout', { method: 'POST' });
    } catch {
      // ignore
    } finally {
      logout();
      window.location.href = '/';
    }
  };

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen fixed left-0 top-0 border-r border-slate-800 z-30 select-none">
      {/* Brand Header */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between flex-shrink-0 bg-slate-950">
        <Link to="/org/setup" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-600/30">
            H
          </div>
          <div>
            <h1 className="text-sm font-bold text-white tracking-tight">Enterprise HRMS</h1>
            <p className="text-[10px] text-slate-400 truncate max-w-[140px]">
              {user?.activeTenant?.name || "Global Cloud"}
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation Links - Scrollable */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1 scrollbar-thin scrollbar-thumb-slate-700">
        {/* Core Setup Dashboard */}
        <Link
          to="/org/setup"
          className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
            isActive("/org/setup")
              ? "bg-indigo-600 text-white shadow-sm"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          <LayoutDashboard className="w-4 h-4" />
          <span>Dashboard & Overview</span>
        </Link>

        <div className="pt-2">
          <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            All 31 HR Modules
          </p>

          {MODULE_GROUPS.map((group) => {
            const isOpen = openGroups[group.id] ?? false;
            const hasActiveChild = group.items.some((item) => isActive(item.href));

            return (
              <div key={group.id} className="mb-1">
                <button
                  type="button"
                  onClick={() => toggleGroup(group.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition ${
                    hasActiveChild
                      ? "text-indigo-400 bg-slate-800/60"
                      : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <group.icon className="w-4 h-4 text-slate-400" />
                    <span>{group.name}</span>
                  </div>
                  {isOpen ? (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </button>

                {isOpen && (
                  <div className="mt-1 ml-4 pl-2 border-l border-slate-800 space-y-0.5">
                    {group.items.map((sub) => {
                      const active = isActive(sub.href);
                      return (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className={`block px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition truncate ${
                            active
                              ? "bg-indigo-600 text-white font-semibold"
                              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Footer Profile & Logout */}
      <div className="p-3 border-t border-slate-800 bg-slate-950 flex-shrink-0 flex items-center justify-between">
        <div className="truncate pr-2">
          <p className="text-xs font-medium text-white truncate">{user?.fullName || "User"}</p>
          <p className="text-[10px] text-slate-400 truncate">{user?.email}</p>
        </div>
        <button
          onClick={handleLogout}
          title="Sign Out"
          className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
