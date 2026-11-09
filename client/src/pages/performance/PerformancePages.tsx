import { GenericListPage } from "@/components/shared/GenericListPage";
import { BarChart3, ClipboardList, Award, PieChart, Folder, CheckCircle } from "lucide-react";
import { performanceApi } from "@/api/hooks/payroll";

export function ReviewCyclesPage() {
  return (
    <GenericListPage
      title="Review Cycles"
      subtitle="Configure performance review cycles"
      icon={ClipboardList}
      api={{
        list: (params) => performanceApi.reviewCycles.list(params.tenantId || ""),
        create: (data) => performanceApi.reviewCycles.create({ ...data, tenantId: "" }),
        update: (id, data) => performanceApi.reviewCycles.update(id, data),
        delete: (id) => performanceApi.reviewCycles.delete(id),
      }}
      fields={[
        { key: "name", label: "Name" },
        { key: "cycleType", label: "Cycle Type" },
        { key: "startDate", label: "Start Date", type: "date" },
        { key: "endDate", label: "End Date", type: "date" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "name", label: "Cycle Name", type: "text", required: true },
        { key: "cycleType", label: "Cycle Type", type: "select", required: true,
          options: [
            { label: "Quarterly", value: "QUARTERLY" },
            { label: "Half-Yearly", value: "HALF_YEARLY" },
            { label: "Annual", value: "ANNUAL" },
          ]
        },
        { key: "startDate", label: "Start Date", type: "date", required: true },
        { key: "endDate", label: "End Date", type: "date", required: true },
        { key: "status", label: "Status", type: "text" },
        { key: "createdById", label: "Created By ID", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function ReviewsPage() {
  return (
    <GenericListPage
      title="Performance Reviews"
      subtitle="Manage employee performance reviews"
      icon={Award}
      api={{
        list: (params) => performanceApi.reviews.list(params.tenantId || "", params.cycleId || "", params.employeeId || ""),
        create: (data) => performanceApi.reviews.create({ ...data, tenantId: "" }),
        update: (id, data) => performanceApi.reviews.update(id, data),
        delete: (id) => performanceApi.reviews.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "reviewerId", label: "Reviewer ID" },
        { key: "reviewType", label: "Review Type" },
        { key: "overallRating", label: "Rating" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "cycleId", label: "Cycle ID", type: "text", required: true },
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "reviewerId", label: "Reviewer ID", type: "text", required: true },
        { key: "reviewType", label: "Review Type", type: "select", required: true,
          options: [
            { label: "Self", value: "SELF" },
            { label: "Manager", value: "MANAGER" },
            { label: "Peer", value: "PEER" },
            { label: "360", value: "360" },
          ]
        },
        { key: "overallRating", label: "Overall Rating", type: "number" },
        { key: "comments", label: "Comments", type: "textarea" },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function GoalsPage() {
  return (
    <GenericListPage
      title="Goals & OKRs"
      subtitle="Manage employee goals and objectives"
      icon={BarChart3}
      api={{
        list: (params) => performanceApi.goals.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => performanceApi.goals.create({ ...data, tenantId: "" }),
        update: (id, data) => performanceApi.goals.update(id, data),
        delete: (id) => performanceApi.goals.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "title", label: "Title" },
        { key: "type", label: "Type" },
        { key: "progressPct", label: "Progress %" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "cycleId", label: "Cycle ID", type: "text" },
        { key: "title", label: "Goal Title", type: "text", required: true },
        { key: "description", label: "Description", type: "textarea" },
        { key: "type", label: "Type", type: "select", required: true,
          options: [
            { label: "SMART", value: "SMART" },
            { label: "OKR", value: "OKR" },
            { label: "KPI", value: "KPI" },
          ]
        },
        { key: "weightage", label: "Weightage", type: "number" },
        { key: "targetValue", label: "Target Value", type: "number" },
        { key: "currentValue", label: "Current Value", type: "number" },
        { key: "unit", label: "Unit", type: "text" },
        { key: "dueDate", label: "Due Date", type: "date" },
        { key: "status", label: "Status", type: "text" },
        { key: "progressPct", label: "Progress %", type: "number" },
      ]}
      tenantId=""
    />
  );
}

export function CheckInsPage() {
  return (
    <GenericListPage
      title="Check-ins & 1:1s"
      subtitle="Manage employee check-in meetings"
      icon={CheckCircle}
      api={{
        list: (params) => performanceApi.checkIns.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => performanceApi.checkIns.create({ ...data, tenantId: "" }),
        update: (id, data) => performanceApi.checkIns.update(id, data),
        delete: (id) => performanceApi.checkIns.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "managerId", label: "Manager ID" },
        { key: "checkInDate", label: "Date", type: "date" },
        { key: "rating", label: "Rating" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "managerId", label: "Manager ID", type: "text" },
        { key: "checkInDate", label: "Check-in Date", type: "date", required: true },
        { key: "notes", label: "Notes", type: "textarea" },
        { key: "agreedActions", label: "Agreed Actions", type: "textarea" },
        { key: "rating", label: "Rating (1-5)", type: "number" },
      ]}
      tenantId=""
    />
  );
}

export function FeedbackPage() {
  return (
    <GenericListPage
      title="Feedback"
      subtitle="Manage 360 and peer feedback"
      icon={PieChart}
      api={{
        list: (params) => performanceApi.feedback.list(params.tenantId || "", params.revieweeId || ""),
        create: (data) => performanceApi.feedback.create({ ...data, tenantId: "" }),
        update: (id, data) => performanceApi.feedback.update(id, data),
        delete: (id) => performanceApi.feedback.delete(id),
      }}
      fields={[
        { key: "reviewerId", label: "Reviewer ID" },
        { key: "revieweeId", label: "Reviewee ID" },
        { key: "type", label: "Type" },
        { key: "rating", label: "Rating" },
        { key: "isReleased", label: "Released", type: "boolean" },
      ]}
      formFields={[
        { key: "reviewerId", label: "Reviewer ID", type: "text", required: true },
        { key: "revieweeId", label: "Reviewee ID", type: "text", required: true },
        { key: "cycleId", label: "Cycle ID", type: "text" },
        { key: "type", label: "Feedback Type", type: "select", required: true,
          options: [
            { label: "Peer", value: "PEER" },
            { label: "Manager", value: "MANAGER" },
            { label: "360", value: "360" },
          ]
        },
        { key: "isAnonymous", label: "Anonymous", type: "checkbox" },
        { key: "comments", label: "Comments", type: "textarea", required: true },
        { key: "rating", label: "Rating (1-5)", type: "number" },
        { key: "isReleased", label: "Is Released", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function CalibrationsPage() {
  return (
    <GenericListPage
      title="Calibrations"
      subtitle="Manage performance calibration sessions"
      icon={PieChart}
      api={{
        list: (params) => performanceApi.calibrations.list(params.tenantId || ""),
        create: (data) => performanceApi.calibrations.create({ ...data, tenantId: "" }),
        update: (id, data) => performanceApi.calibrations.update(id, data),
        delete: (id) => performanceApi.calibrations.delete(id),
      }}
      fields={[
        { key: "cycleId", label: "Cycle ID" },
        { key: "departmentId", label: "Department ID" },
        { key: "name", label: "Name" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "cycleId", label: "Cycle ID", type: "text", required: true },
        { key: "departmentId", label: "Department ID", type: "text" },
        { key: "name", label: "Calibration Name", type: "text", required: true },
        { key: "status", label: "Status", type: "text" },
        { key: "createdById", label: "Created By ID", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function PIPsPage() {
  return (
    <GenericListPage
      title="Performance Improvement Plans"
      subtitle="Manage PIPs for underperforming employees"
      icon={Folder}
      api={{
        list: (params) => performanceApi.pips.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => performanceApi.pips.create({ ...data, tenantId: "" }),
        update: (id, data) => performanceApi.pips.update(id, data),
        delete: (id) => performanceApi.pips.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "managerId", label: "Manager ID" },
        { key: "status", label: "Status", type: "status" },
        { key: "outcome", label: "Outcome" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "managerId", label: "Manager ID", type: "text", required: true },
        { key: "startDate", label: "Start Date", type: "date", required: true },
        { key: "endDate", label: "End Date", type: "date", required: true },
        { key: "objectives", label: "Objectives", type: "textarea", required: true },
        { key: "improvementPlan", label: "Improvement Plan", type: "textarea", required: true },
        { key: "status", label: "Status", type: "text" },
        { key: "outcome", label: "Outcome", type: "text" },
      ]}
      tenantId=""
    />
  );
}
