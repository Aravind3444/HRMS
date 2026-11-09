"use client";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { ChevronLeft, ChevronRight, Home, LogOut, User as UserIcon } from "lucide-react";
import { useAuthStore } from "../../store/authStore";
import { useState } from "react";

const breadcrumbRoutes: Record<string, string> = {
  "/org/setup": "Setup Dashboard",
  "/org/legal-entities": "Legal Entities",
  "/org/locations": "Locations",
  "/org/departments": "Departments",
  "/org/designations": "Designations",
  "/org/grades": "Grades",
  "/org/cost-centers": "Cost Centers",
  "/org/employment-types": "Employment Types",
  "/employees": "Employee Directory",
  "/ess/profile": "Employee Profile",
  "/ess/family": "Family Details",
  "/ess/education": "Education Details",
  "/ess/experience": "Experience Details",
  "/ess/attendance-days": "Attendance Days",
  "/ess/leave-applications": "Leave Applications",
  "/ess/leave-types": "Leave Types",
  "/ess/shift-templates": "Shift Templates",
  "/ess/rosters": "Rosters",
  "/ess/shift-swaps": "Shift Swaps",
  "/ess/leave-policies": "Leave Policies",
  "/ess/comp-off": "Comp Off",
  "/org/document-types": "Document Types",
  "/org/company-documents": "Company Documents",
  "/org/document-templates": "Document Templates",
  "/org/policy-documents": "Policy Documents",
  "/recruitment/requisitions": "Requisitions",
  "/recruitment/jobs": "Job Openings",
  "/recruitment/candidates": "Candidates",
  "/recruitment/interviews": "Interviews",
  "/recruitment/offers": "Offer Letters",
  "/recruitment/referrals": "Referrals",
  "/onboarding/templates": "Onboarding Templates",
  "/onboarding/tasks": "Onboarding Tasks",
  "/onboarding/cases": "Onboarding Cases",
  "/offboarding/resignations": "Resignations",
  "/offboarding/terminations": "Terminations",
  "/offboarding/clearance": "Clearance Checklist",
  "/offboarding/exit-interviews": "Exit Interviews",
  "/payroll/components": "Payroll Components",
  "/payroll/salary-structures": "Salary Structures",
  "/payroll/compensation": "Compensation",
  "/payroll/periods": "Payroll Periods",
  "/payroll/runs": "Payroll Runs",
  "/payroll/payslips": "Payslips",
  "/payroll/loans": "Loans",
  "/payroll/fnf": "Full & Final Settlement",
  "/statutory/rule-sets": "Statutory Rules",
  "/statutory/pf-contributions": "PF Contributions",
  "/statutory/esi-contributions": "ESI Contributions",
  "/statutory/pt-contributions": "Professional Tax",
  "/statutory/lwf-contributions": "Labour Welfare Fund",
  "/statutory/investment-declarations": "Investment Declarations",
  "/statutory/proof-submissions": "Proof Submissions",
  "/statutory/tds-computations": "TDS Computations",
  "/statutory/form-16": "Form 16",
  "/statutory/form-24q": "Form 24Q",
  "/statutory/compliance-calendar": "Compliance Calendar",
  "/performance/review-cycles": "Review Cycles",
  "/performance/reviews": "Reviews",
  "/performance/goals": "Goals",
  "/lms/courses": "Courses",
  "/lms/enrollments": "Enrollments",
  "/lms/certifications": "Certifications",
  "/assets/categories": "Asset Categories",
  "/assets/items": "Asset Items",
  "/assets/assignments": "Asset Assignments",
  "/helpdesk/categories": "Ticket Categories",
  "/helpdesk/tickets": "Tickets",
  "/helpdesk/sla-policies": "SLA Policies",
  "/expense/categories": "Expense Categories",
  "/expense/claims": "Expense Claims",
  "/expense/advances": "Expense Advances",
  "/travel/policies": "Travel Policies",
  "/travel/requests": "Travel Requests",
  "/travel/bookings": "Travel Bookings",
  "/engagement/announcements": "Announcements",
  "/engagement/surveys": "Surveys",
  "/engagement/recognitions": "Recognitions",
  "/reports/standard": "Standard Reports",
  "/reports/custom": "Custom Reports",
  "/reports/schedules": "Report Schedules",
  "/audit/events": "Audit Events",
  "/audit/exports": "Audit Exports",
  "/notifications/templates": "Notification Templates",
  "/notifications/logs": "Notification Logs",
  "/workflow/definitions": "Workflow Definitions",
  "/workflow/instances": "Workflow Instances",
  "/workflow/tasks": "Approval Tasks",
  "/workflow/delegations": "Delegations",
  "/integrations/webhooks": "Webhook Subscriptions",
  "/integrations/webhook-deliveries": "Webhook Deliveries",
  "/integrations/api-keys": "API Keys",
  "/security/events": "Security Events",
  "/security/encryption-keys": "Encryption Keys",
  "/import-export/jobs": "Import Jobs",
  "/import-export/exports": "Export Jobs",
  "/finance/chart-of-accounts": "Chart of Accounts",
  "/finance/fiscal-periods": "Fiscal Periods",
  "/finance/journal-entries": "Journal Entries",
  "/finance/journal-lines": "Journal Lines",
  "/ai/conversations": "AI Conversations",
  "/ai/messages": "AI Messages",
};

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [profileOpen, setProfileOpen] = useState(false);
  const breadcrumb = breadcrumbRoutes[location.pathname] || "Dashboard";

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
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen min-w-0">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
          <div className="px-6 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition"
                title="Go Back"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2 text-xs">
                <Home size={15} className="text-slate-400" />
                <span className="text-slate-400 font-medium">HRMS</span>
                <ChevronRight size={13} className="text-slate-300" />
                <span className="font-semibold text-slate-800 text-sm">{breadcrumb}</span>
              </div>
            </div>

            {/* Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-200"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-700 text-white font-semibold flex items-center justify-center text-xs shadow-sm">
                  {user?.fullName?.[0] || "U"}
                </div>
                <div className="text-left hidden sm:block">
                  <p className="text-xs font-semibold text-slate-800 leading-tight">{user?.fullName || "User"}</p>
                  <p className="text-[11px] text-slate-400">{user?.activeTenant?.name || user?.email}</p>
                </div>
              </button>

              {profileOpen && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setProfileOpen(false)} />
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-40">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-xs font-semibold text-slate-800">{user?.fullName}</p>
                      <p className="text-[11px] text-slate-400 truncate">{user?.email}</p>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-50 text-indigo-700">
                        {user?.isPlatformAdmin ? "Super Admin" : "Tenant Member"}
                      </span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 flex items-center gap-2 transition"
                    >
                      <LogOut size={14} />
                      Sign Out
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Content Outlet */}
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
