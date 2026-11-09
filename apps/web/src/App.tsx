import { useEffect, useState } from "react";
import { useAuthStore } from "./store/authStore";
import { LoginForm } from "./components/auth/LoginForm";
import { SignupForm } from "./components/auth/SignupForm";
import { EmailVerificationPage } from "./components/auth/EmailVerificationPage";
import { TenantDashboard } from "./components/dashboard/TenantDashboard";
import { SuperAdminDashboard } from "./pages/platform/SuperAdminDashboard";
import { Loader2 } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { OrgSetupWizard } from "./pages/org/OrgSetupWizard";

// M03 Org Management
import { LegalEntityPage } from "./pages/org/LegalEntityPage";
import { LocationPage } from "./pages/org/LocationPage";
import { DepartmentPage } from "./pages/org/DepartmentPage";
import { DesignationPage } from "./pages/org/DesignationPage";
import { GradePage } from "./pages/org/GradePage";
import { CostCenterPage } from "./pages/org/CostCenterPage";
import { EmploymentTypePage } from "./pages/org/EmploymentTypePage";

// M04 Employee Management
import { EmployeeListPage } from "./pages/employees/EmployeeListPage";
import { EmployeeDetailPage } from "./pages/employees/EmployeeDetailPage";

// M05 ESS
import {
  ProfilePage,
  FamilyPage,
  EducationPage,
  ExperiencePage,
  AttendanceDaysPage,
  LeaveApplicationsPage,
  LeaveTypesPage,
  ShiftTemplatesPage,
  RostersPage,
  ShiftSwapsPage,
  LeavePoliciesPage,
  CompOffPage,
} from "./pages/ess/ESSPages.tsx";

// M06 Documents
import {
  DocumentTypesPage,
  CompanyDocumentsPage,
  DocumentTemplatesPage,
  PolicyDocumentsPage,
} from "./pages/ess/ESSPages2.tsx";

// M07 Recruitment
import {
  RequisitionsPage,
  JobsPage,
  CandidatesPage,
  InterviewsPage,
  OffersPage,
  ReferralsPage,
} from "./pages/ess/ESSPages2.tsx";

// M08 Onboarding
import {
  OnboardingTemplatesPage,
  OnboardingTasksPage,
  OnboardingCasesPage,
} from "./pages/ess/ESSPages2.tsx";

// M09 Offboarding
import {
  ResignationsPage,
  TerminationsPage,
  ClearanceChecklistPage,
  ExitInterviewsPage,
} from "./pages/ess/ESSPages2.tsx";

// M13 Payroll
import {
  PayrollComponentsPage,
  SalaryStructuresPage,
  EmployeeCompensationPage,
  PayrollPeriodsPage,
  PayrollRunsPage,
  PayslipsPage,
  LoansPage,
  FnFPage,
} from "./pages/payroll/PayrollPages.tsx";

// M14 Statutory
import {
  StatutoryRuleSetsPage,
  PFContributionsPage,
  ESIContributionsPage,
  PTContributionsPage,
  LWFContributionsPage,
  InvestmentDeclarationsPage,
  ProofSubmissionsPage,
  TDSComputationsPage,
  Form16Page,
  Form24QPage,
  ComplianceCalendarPage,
} from "./pages/statutory/StatutoryPages.tsx";

// M15 Performance
import {
  ReviewCyclesPage,
  ReviewsPage,
  GoalsPage,
  CheckInsPage,
  FeedbackPage,
  CalibrationsPage,
  PIPsPage,
} from "./pages/performance/PerformancePages.tsx";

// M16 LMS
import {
  CoursesPage,
  EnrollmentsPage,
  AssessmentsPage,
  CertificationsPage,
  TrainingRequestsPage,
} from "./pages/lms/LMSPages.tsx";

// M17 Assets & M18 Helpdesk & M19 Expense & M20 Travel
import {
  AssetCategoriesPage,
  AssetItemsPage,
  AssetRequestsPage,
  AssetReturnsPage,
  TicketCategoriesPage,
  HelpdeskTicketsPage,
  TicketCommentsPage,
  KnowledgeBasePage,
  ExpensePoliciesPage,
  ExpenseClaimsPage,
  ExpenseClaimLinesPage,
  ExpenseAdvancesPage,
  TravelPoliciesPage,
  TravelRequestsPage,
  TravelBookingsPage,
} from "./pages/helpdesk/HelpdeskPages.tsx";

// M21 Engagement
import {
  AnnouncementsPage,
  AnnouncementReadsPage,
  SurveysPage,
  SurveyQuestionsPage,
  SurveyResponsesPage,
  RecognitionsPage,
} from "./pages/engagement/EngagementPages.tsx";

// M22 Reports & M23 Audit
import {
  ReportTemplatesPage,
  ReportExecutionsPage,
  AuditEventsPage,
  DataPrincipalRequestsPage,
  LoginHistoryPage,
} from "./pages/reports/ReportPages.tsx";

// M25 Workflow & M26 Integrations
import {
  WorkflowDefinitionsPage,
  WorkflowVersionsPage,
  WorkflowInstancesPage,
  WorkflowTasksPage,
  DelegationsPage,
  WebhookSubscriptionsPage,
  WebhookDeliveriesPage,
  ApiKeysPage,
} from "./pages/workflow/WorkflowPages.tsx";

// M28 Security & M29 Import/Export & M30 Finance & M31 AI
import {
  SecurityEventsPage,
  EncryptionKeysPage,
  ImportJobsPage,
  ExportJobsPage,
  ChartOfAccountsPage,
  FiscalPeriodsPage,
  JournalEntriesPage,
  JournalLinesPage,
  AIConversationsPage,
  AIMessagesPage,
} from "./pages/finance/FinancePages.tsx";

export function App() {
  const { user, isAuthenticated, isLoading, setUser } = useAuthStore();
  const [authMode, setAuthMode] = useState<'login' | 'signup' | 'verify-email'>('login');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const path = window.location.pathname;
    if (path === '/auth/verify-email' && token) {
      setAuthMode('verify-email');
    }
  }, []);

  useEffect(() => {
    if (authMode !== 'verify-email') {
      const checkSession = async () => {
        try {
          const res = await fetch('/api/v1/auth/me');
          if (res.ok) {
            const text = await res.text();
            if (text) {
              const data = JSON.parse(text);
              setUser(data?.data || data);
            } else {
              setUser(null);
            }
          } else {
            setUser(null);
          }
        } catch {
          setUser(null);
        }
      };
      checkSession();
    }
  }, [setUser, authMode]);

  if (isLoading && authMode !== 'verify-email') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
          <p className="text-xs text-slate-500 font-medium">Checking authentication session...</p>
        </div>
      </div>
    );
  }

  const isAdminPort = typeof window !== 'undefined' && window.location.port === '5174';

  if (isAuthenticated && user) {
    // Platform Super Admin
    if (user.isPlatformAdmin) {
      return <SuperAdminDashboard />;
    }

    // Org user on super admin port (5174) - offer switch to tenant portal or logout
    if (isAdminPort) {
      return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-white text-center">
          <div className="bg-slate-800 border border-slate-700 p-8 rounded-xl max-w-md shadow-xl">
            <h2 className="text-xl font-bold text-amber-400 mb-2">Platform Admin Portal Access Only</h2>
            <p className="text-sm text-slate-300 mb-3">
              You are currently logged in as an organization user (<strong>{user.email}</strong>).
            </p>
            <p className="text-xs text-slate-400 mb-6">Port 5174 is reserved for Platform Super Administrators.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => { window.location.href = 'http://localhost:5173'; }}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg text-sm transition-colors"
              >
                Open Tenant Portal (5173) &rarr;
              </button>
              <button
                onClick={async () => {
                  try {
                    await fetch('/api/v1/auth/logout', { method: 'POST' });
                  } finally {
                    document.cookie = 'hrms_access_token=; Max-Age=0; path=/;';
                    document.cookie = 'hrms_refresh_token=; Max-Age=0; path=/;';
                    setUser(null);
                  }
                }}
                className="px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium rounded-lg text-sm transition-colors"
              >
                Sign In as Super Admin
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Org user on tenant portal (5173) - show full app with Layout
    return (
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/org/setup" replace />} />
            <Route path="/org/setup" element={<OrgSetupWizard />} />
            <Route path="/org/legal-entities" element={<LegalEntityPage />} />
            <Route path="/org/locations" element={<LocationPage />} />
            <Route path="/org/departments" element={<DepartmentPage />} />
            <Route path="/org/designations" element={<DesignationPage />} />
            <Route path="/org/grades" element={<GradePage />} />
            <Route path="/org/cost-centers" element={<CostCenterPage />} />
            <Route path="/org/employment-types" element={<EmploymentTypePage />} />
            <Route path="/employees" element={<EmployeeListPage />} />
            <Route path="/employees/:id" element={<EmployeeDetailPage />} />
            <Route path="/ess/profile" element={<ProfilePage />} />
            <Route path="/ess/family" element={<FamilyPage />} />
            <Route path="/ess/education" element={<EducationPage />} />
            <Route path="/ess/experience" element={<ExperiencePage />} />
            <Route path="/ess/attendance-days" element={<AttendanceDaysPage />} />
            <Route path="/ess/leave-applications" element={<LeaveApplicationsPage />} />
            <Route path="/ess/leave-types" element={<LeaveTypesPage />} />
            <Route path="/ess/shift-templates" element={<ShiftTemplatesPage />} />
            <Route path="/ess/rosters" element={<RostersPage />} />
            <Route path="/ess/shift-swaps" element={<ShiftSwapsPage />} />
            <Route path="/ess/leave-policies" element={<LeavePoliciesPage />} />
            <Route path="/ess/comp-off" element={<CompOffPage />} />
            <Route path="/org/document-types" element={<DocumentTypesPage />} />
            <Route path="/org/company-documents" element={<CompanyDocumentsPage />} />
            <Route path="/org/document-templates" element={<DocumentTemplatesPage />} />
            <Route path="/org/policy-documents" element={<PolicyDocumentsPage />} />
            <Route path="/recruitment/requisitions" element={<RequisitionsPage />} />
            <Route path="/recruitment/jobs" element={<JobsPage />} />
            <Route path="/recruitment/candidates" element={<CandidatesPage />} />
            <Route path="/recruitment/interviews" element={<InterviewsPage />} />
            <Route path="/recruitment/offers" element={<OffersPage />} />
            <Route path="/recruitment/referrals" element={<ReferralsPage />} />
            <Route path="/onboarding/templates" element={<OnboardingTemplatesPage />} />
            <Route path="/onboarding/tasks" element={<OnboardingTasksPage />} />
            <Route path="/onboarding/cases" element={<OnboardingCasesPage />} />
            <Route path="/offboarding/resignations" element={<ResignationsPage />} />
            <Route path="/offboarding/terminations" element={<TerminationsPage />} />
            <Route path="/offboarding/clearance" element={<ClearanceChecklistPage />} />
            <Route path="/offboarding/exit-interviews" element={<ExitInterviewsPage />} />
            <Route path="/attendance/days" element={<AttendanceDaysPage />} />
            <Route path="/attendance/punches" element={<AttendanceDaysPage />} />
            <Route path="/shift/templates" element={<ShiftTemplatesPage />} />
            <Route path="/shift/rosters" element={<RostersPage />} />
            <Route path="/shift/swaps" element={<ShiftSwapsPage />} />
            <Route path="/leave/types" element={<LeaveTypesPage />} />
            <Route path="/leave/applications" element={<LeaveApplicationsPage />} />
            <Route path="/leave/policies" element={<LeavePoliciesPage />} />
            <Route path="/leave/comp-off" element={<CompOffPage />} />
            <Route path="/payroll/components" element={<PayrollComponentsPage />} />
            <Route path="/payroll/salary-structures" element={<SalaryStructuresPage />} />
            <Route path="/payroll/compensation" element={<EmployeeCompensationPage />} />
            <Route path="/payroll/periods" element={<PayrollPeriodsPage />} />
            <Route path="/payroll/runs" element={<PayrollRunsPage />} />
            <Route path="/payroll/payslips" element={<PayslipsPage />} />
            <Route path="/payroll/loans" element={<LoansPage />} />
            <Route path="/payroll/fnf" element={<FnFPage />} />
            <Route path="/statutory/rule-sets" element={<StatutoryRuleSetsPage />} />
            <Route path="/statutory/pf-contributions" element={<PFContributionsPage />} />
            <Route path="/statutory/esi-contributions" element={<ESIContributionsPage />} />
            <Route path="/statutory/pt-contributions" element={<PTContributionsPage />} />
            <Route path="/statutory/lwf-contributions" element={<LWFContributionsPage />} />
            <Route path="/statutory/investment-declarations" element={<InvestmentDeclarationsPage />} />
            <Route path="/statutory/proof-submissions" element={<ProofSubmissionsPage />} />
            <Route path="/statutory/tds-computations" element={<TDSComputationsPage />} />
            <Route path="/statutory/form-16" element={<Form16Page />} />
            <Route path="/statutory/form-24q" element={<Form24QPage />} />
            <Route path="/statutory/compliance-calendar" element={<ComplianceCalendarPage />} />
            <Route path="/performance/review-cycles" element={<ReviewCyclesPage />} />
            <Route path="/performance/reviews" element={<ReviewsPage />} />
            <Route path="/performance/goals" element={<GoalsPage />} />
            <Route path="/performance/check-ins" element={<CheckInsPage />} />
            <Route path="/performance/feedback" element={<FeedbackPage />} />
            <Route path="/performance/calibrations" element={<CalibrationsPage />} />
            <Route path="/performance/pips" element={<PIPsPage />} />
            <Route path="/lms/courses" element={<CoursesPage />} />
            <Route path="/lms/enrollments" element={<EnrollmentsPage />} />
            <Route path="/lms/assessments" element={<AssessmentsPage />} />
            <Route path="/lms/certifications" element={<CertificationsPage />} />
            <Route path="/lms/training-requests" element={<TrainingRequestsPage />} />
            <Route path="/assets/categories" element={<AssetCategoriesPage />} />
            <Route path="/assets/items" element={<AssetItemsPage />} />
            <Route path="/assets/requests" element={<AssetRequestsPage />} />
            <Route path="/assets/returns" element={<AssetReturnsPage />} />
            <Route path="/helpdesk/categories" element={<TicketCategoriesPage />} />
            <Route path="/helpdesk/tickets" element={<HelpdeskTicketsPage />} />
            <Route path="/helpdesk/comments" element={<TicketCommentsPage />} />
            <Route path="/helpdesk/kb" element={<KnowledgeBasePage />} />
            <Route path="/expense/policies" element={<ExpensePoliciesPage />} />
            <Route path="/expense/claims" element={<ExpenseClaimsPage />} />
            <Route path="/expense/claim-lines" element={<ExpenseClaimLinesPage />} />
            <Route path="/expense/advances" element={<ExpenseAdvancesPage />} />
            <Route path="/travel/policies" element={<TravelPoliciesPage />} />
            <Route path="/travel/requests" element={<TravelRequestsPage />} />
            <Route path="/travel/bookings" element={<TravelBookingsPage />} />
            <Route path="/engagement/announcements" element={<AnnouncementsPage />} />
            <Route path="/engagement/announcement-reads" element={<AnnouncementReadsPage />} />
            <Route path="/engagement/surveys" element={<SurveysPage />} />
            <Route path="/engagement/survey-questions" element={<SurveyQuestionsPage />} />
            <Route path="/engagement/survey-responses" element={<SurveyResponsesPage />} />
            <Route path="/engagement/recognitions" element={<RecognitionsPage />} />
            <Route path="/reports/templates" element={<ReportTemplatesPage />} />
            <Route path="/reports/executions" element={<ReportExecutionsPage />} />
            <Route path="/audit/events" element={<AuditEventsPage />} />
            <Route path="/audit/data-principal-requests" element={<DataPrincipalRequestsPage />} />
            <Route path="/audit/login-history" element={<LoginHistoryPage />} />
            <Route path="/workflow/definitions" element={<WorkflowDefinitionsPage />} />
            <Route path="/workflow/versions" element={<WorkflowVersionsPage />} />
            <Route path="/workflow/instances" element={<WorkflowInstancesPage />} />
            <Route path="/workflow/tasks" element={<WorkflowTasksPage />} />
            <Route path="/workflow/delegations" element={<DelegationsPage />} />
            <Route path="/integrations/webhooks" element={<WebhookSubscriptionsPage />} />
            <Route path="/integrations/webhook-deliveries" element={<WebhookDeliveriesPage />} />
            <Route path="/integrations/api-keys" element={<ApiKeysPage />} />
            <Route path="/security/events" element={<SecurityEventsPage />} />
            <Route path="/security/encryption-keys" element={<EncryptionKeysPage />} />
            <Route path="/import-export/jobs" element={<ImportJobsPage />} />
            <Route path="/import-export/exports" element={<ExportJobsPage />} />
            <Route path="/finance/chart-of-accounts" element={<ChartOfAccountsPage />} />
            <Route path="/finance/fiscal-periods" element={<FiscalPeriodsPage />} />
            <Route path="/finance/journal-entries" element={<JournalEntriesPage />} />
            <Route path="/finance/journal-lines" element={<JournalLinesPage />} />
            <Route path="/ai/conversations" element={<AIConversationsPage />} />
            <Route path="/ai/messages" element={<AIMessagesPage />} />
          </Route>
        </Routes>
      </Router>
    );
  }

  if (authMode === 'verify-email') {
    return (
      <EmailVerificationPage onBackToLogin={() => setAuthMode('login')} />
    );
  }

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 ${isAdminPort ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {isAdminPort && (
        <div className="mb-6 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            🛡️ Platform Super Admin Portal (Port 5174)
          </span>
          <p className="text-xs text-slate-400 mt-2">Sign in using platform admin credentials (e.g. superadmin@hrms.internal)</p>
        </div>
      )}
      {!isAdminPort && (
        <div className="mb-4 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
            🏢 Tenant & Organization Portal (Port 5173)
          </span>
        </div>
      )}
      {authMode === 'login' ? (
        <LoginForm onSuccess={() => {}} onSwitchToSignup={() => setAuthMode('signup')} />
      ) : (
        <SignupForm onSuccess={() => { setAuthMode('login'); }} onSwitchToLogin={() => setAuthMode('login')} />
      )}
    </div>
  );
}

export default App;