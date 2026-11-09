import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  Circle,
  Building2,
  MapPin,
  Building2 as DepartmentIcon,
  Briefcase,
  BarChart3,
  Plus,
  Info,
  ChevronRight,
} from "lucide-react";

const steps = [
  { id: "legal-entities", name: "Legal Entities", path: "/org/legal-entities", icon: Building2 },
  { id: "locations", name: "Locations", path: "/org/locations", icon: MapPin },
  { id: "departments", name: "Departments", path: "/org/departments", icon: DepartmentIcon },
  { id: "designations", name: "Designations", path: "/org/designations", icon: Briefcase },
  { id: "grades", name: "Grades", path: "/org/grades", icon: BarChart3 },
  { id: "cost-centers", name: "Cost Centers", path: "/org/cost-centers", icon: Briefcase },
  { id: "employment-types", name: "Employment Types", path: "/org/employment-types", icon: Plus },
  { id: "employees", name: "Employee Management", path: "/employees", icon: Building2 },
];

export function OrgSetupWizard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const currentIndex = steps.findIndex((s) => location.pathname === s.path);
  const computedStep = currentIndex >= 0 ? Math.max(currentIndex, activeStep) : activeStep;

  const stepStatus: Record<string, "pending" | "current" | "completed"> = {};
  steps.forEach((_, index) => {
    if (index < computedStep) stepStatus[steps[index].id] = "completed";
    else if (index === computedStep) stepStatus[steps[index].id] = "current";
    else stepStatus[steps[index].id] = "pending";
  });

  const completedCount = Object.values(stepStatus).filter((s) => s === "completed").length;
  const progress = Math.round((completedCount / steps.length) * 100);

  const goToStep = (index: number) => {
    const step = steps[index];
    if (step) navigate(step.path);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Organization Setup</h1>
        <p className="text-slate-600 mt-1">Complete your organization structure step by step before adding employees.</p>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-600">Setup Progress</span>
          <span className="text-sm font-medium text-indigo-600">{completedCount} / {steps.length} completed</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div className="bg-indigo-600 h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, index) => {
          const status = stepStatus[step.id];
          const isCompleted = status === "completed";
          const isCurrent = status === "current";
          const Icon = step.icon;

          return (
            <button key={step.id} onClick={() => goToStep(index)} className={`group relative flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-xl border transition-all duration-200 ${isCompleted ? "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100" : isCurrent ? "bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100 ring-2 ring-indigo-200" : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:border-slate-300"}`}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2">
                {isCompleted ? (
                  <div className="w-full h-full rounded-full bg-emerald-600 flex items-center justify-center"><CheckCircle2 size={14} className="text-white" /></div>
                ) : isCurrent ? (
                  <div className="w-full h-full rounded-full bg-indigo-600 flex items-center justify-center"><Circle size={14} className="text-white" /></div>
                ) : (
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-slate-600" />
                )}
              </div>
              <span className="text-xs font-medium leading-tight text-center">{step.name}</span>
              {isCurrent && <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />}
            </button>
          );
        })}
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Info className="w-5 h-5 text-slate-400" />
          <h2 className="text-lg font-semibold text-slate-900">{steps[computedStep]?.name || "Setup"}</h2>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-slate-600">Configure {steps[computedStep]?.name.toLowerCase()} for your organization.</p>
          <Link to={steps[computedStep]?.path || "/org/legal-entities"} className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Go to {steps[computedStep]?.name}<ChevronRight size={14} />
          </Link>
        </div>

        {computedStep === 0 && (
          <div className="mt-6 flex gap-3">
            <Link to="/org/legal-entities" className="flex-1 px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-200 rounded-md hover:bg-indigo-50">View Legal Entities</Link>
            <button onClick={() => navigate("/org/legal-entities")} className="flex-1 px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Add New Entity</button>
          </div>
        )}

        {computedStep > 0 && computedStep < steps.length - 1 && (
          <div className="mt-6 flex gap-3">
            <Link to={steps[computedStep - 1].path} className="flex-1 px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-md hover:bg-slate-50">Previous Step</Link>
            <Link to={steps[computedStep].path} className="flex-1 px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Continue to {steps[computedStep].name}</Link>
          </div>
        )}

        {computedStep === steps.length - 1 && (
          <div className="mt-6 flex gap-3">
            <Link to={steps[computedStep].path} className="flex-1 px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Go to Employees</Link>
          </div>
        )}
      </div>

      <div className="mt-8 flex items-center gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-600" /><span>Completed</span></div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-indigo-600" /><span>Current</span></div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-slate-300" /><span>Pending</span></div>
      </div>
    </div>
  );
}
