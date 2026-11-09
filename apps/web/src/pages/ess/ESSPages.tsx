import { GenericListPage } from "@/components/shared/GenericListPage";
import { Building2, User, Briefcase, MapPin, CreditCard, Calendar, Award } from "lucide-react";
import { essApi } from "@/api/hooks/ess";
import { attendanceApi } from "@/api/hooks/attendance";
import { leaveApi } from "@/api/hooks/attendance";
import { shiftApi } from "@/api/hooks/attendance";
import { employeeApi } from "@/api/hooks/employee";

const wrapEmployeeApi = (tenantId: string) => ({
  list: (params: Record<string, string>) => employeeApi.list(params.tenantId || tenantId, params),
  create: (data: any) => employeeApi.create({ ...data, tenantId: data.tenantId || tenantId }),
  update: (id: string, data: any) => employeeApi.update(id, data.tenantId || tenantId, data),
  delete: (id: string) => employeeApi.delete(id, tenantId),
});

export function ProfilePage() {
  return (
    <GenericListPage
      title="Employee Profile"
      subtitle="Manage employee personal profile"
      icon={User}
      api={wrapEmployeeApi("")}
      fields={[
        { key: "employeeCode", label: "Employee Code", type: "text", required: true },
        { key: "name", label: "Full Name", type: "text", required: true },
        { key: "email", label: "Email", type: "text" },
        { key: "phoneNumber", label: "Phone Number", type: "text" },
        { key: "employeeType", label: "Employment Type", type: "text", required: true },
      ]}
      formFields={[
        { key: "employeeCode", label: "Employee Code", type: "text", required: true },
        { key: "name", label: "Full Name", type: "text", required: true },
        { key: "email", label: "Email", type: "email" },
        { key: "phoneNumber", label: "Phone Number", type: "text" },
        { key: "employeeType", label: "Employment Type", type: "text", required: true },
      ]}
      tenantId=""
    />
  );
}

export function FamilyPage() {
  return (
    <GenericListPage
      title="Family Details"
      subtitle="Manage employee family members"
      icon={User}
      api={{
        list: (params: any) => essApi.family.list(params.tenantId || "", params.employeeId || ""),
        create: (data: any) => essApi.family.create(data.tenantId || "", data),
        update: (id: string, data: any) => essApi.family.update(id, data.tenantId || "", data),
        delete: (id: string) => essApi.family.delete(id, ""),
      }}
      fields={[
        { key: "name", label: "Name", type: "text", required: true },
        { key: "relation", label: "Relationship", type: "text", required: true },
        { key: "dob", label: "Date of Birth", type: "date" },
        { key: "occupation", label: "Occupation", type: "text" },
        { key: "isDependent", label: "Is Dependent", type: "boolean" },
      ]}
      formFields={[
        { key: "name", label: "Name", type: "text", required: true },
        { key: "relation", label: "Relationship", type: "text", required: true },
        { key: "dob", label: "Date of Birth", type: "date" },
        { key: "occupation", label: "Occupation", type: "text" },
        { key: "isDependent", label: "Is Dependent", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function EducationPage() {
  return (
    <GenericListPage
      title="Education Details"
      subtitle="Manage employee education"
      icon={Award}
      api={{
        list: (params: any) => essApi.education.list(params.tenantId || "", params.employeeId || ""),
        create: (data: any) => essApi.education.create(data.tenantId || "", data),
        update: (id: string, data: any) => essApi.education.update(id, data.tenantId || "", data),
        delete: (id: string) => essApi.education.delete(id, ""),
      }}
      fields={[
        { key: "degree", label: "Degree", type: "text", required: true },
        { key: "institution", label: "Institution", type: "text", required: true },
        { key: "fieldOfStudy", label: "Field of Study", type: "text" },
        { key: "startYear", label: "Start Year", type: "number" },
        { key: "endYear", label: "End Year", type: "number" },
        { key: "grade", label: "Grade", type: "text" },
      ]}
      formFields={[
        { key: "degree", label: "Degree", type: "text", required: true },
        { key: "institution", label: "Institution", type: "text", required: true },
        { key: "fieldOfStudy", label: "Field of Study", type: "text" },
        { key: "startYear", label: "Start Year", type: "number" },
        { key: "endYear", label: "End Year", type: "number" },
        { key: "grade", label: "Grade", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function ExperiencePage() {
  return (
    <GenericListPage
      title="Experience Details"
      subtitle="Manage employee work experience"
      icon={Briefcase}
      api={{
        list: (params: any) => essApi.experience.list(params.tenantId || "", params.employeeId || ""),
        create: (data: any) => essApi.experience.create(data.tenantId || "", data),
        update: (id: string, data: any) => essApi.experience.update(id, data.tenantId || "", data),
        delete: (id: string) => essApi.experience.delete(id, ""),
      }}
      fields={[
        { key: "companyName", label: "Company Name", type: "text", required: true },
        { key: "designation", label: "Designation", type: "text", required: true },
        { key: "startDate", label: "Start Date", type: "date", required: true },
        { key: "endDate", label: "End Date", type: "date" },
        { key: "isCurrent", label: "Current Position", type: "boolean" },
      ]}
      formFields={[
        { key: "companyName", label: "Company Name", type: "text", required: true },
        { key: "designation", label: "Designation", type: "text", required: true },
        { key: "startDate", label: "Start Date", type: "date", required: true },
        { key: "endDate", label: "End Date", type: "date" },
        { key: "isCurrent", label: "Current Position", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function AttendanceDaysPage() {
  return (
    <GenericListPage
      title="Attendance Days"
      subtitle="Track daily attendance"
      icon={Calendar}
      api={{
        list: (params) => attendanceApi.days.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => attendanceApi.days.create({ ...data, tenantId: "" }),
        update: (id, data) => attendanceApi.days.update(id, data),
        delete: (id) => attendanceApi.days.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "workDate", label: "Work Date", type: "date", required: true },
        { key: "status", label: "Status", type: "text", required: true },
        { key: "checkIn", label: "Check In", type: "date" },
        { key: "checkOut", label: "Check Out", type: "date" },
        { key: "totalMins", label: "Total Minutes", type: "number" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "workDate", label: "Work Date", type: "date", required: true },
        { key: "status", label: "Status", type: "text", required: true },
        { key: "checkIn", label: "Check In", type: "date" },
        { key: "checkOut", label: "Check Out", type: "date" },
        { key: "totalMins", label: "Total Minutes", type: "number" },
      ]}
      tenantId=""
    />
  );
}

export function LeaveApplicationsPage() {
  return (
    <GenericListPage
      title="Leave Applications"
      subtitle="Manage leave requests"
      icon={Calendar}
      api={{
        list: (params) => leaveApi.applications.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => leaveApi.applications.create({ ...data, tenantId: "" }),
        update: (id, data) => leaveApi.applications.update(id, data),
        delete: (id) => leaveApi.applications.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "leaveTypeId", label: "Leave Type ID", type: "text", required: true },
        { key: "startDate", label: "Start Date", type: "date", required: true },
        { key: "endDate", label: "End Date", type: "date", required: true },
        { key: "halfDay", label: "Half Day", type: "boolean" },
        { key: "reason", label: "Reason", type: "text" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "leaveTypeId", label: "Leave Type ID", type: "text", required: true },
        { key: "startDate", label: "Start Date", type: "date", required: true },
        { key: "endDate", label: "End Date", type: "date", required: true },
        { key: "halfDay", label: "Half Day", type: "checkbox" },
        { key: "reason", label: "Reason", type: "textarea" },
      ]}
      tenantId=""
    />
  );
}

export function LeaveTypesPage() {
  return (
    <GenericListPage
      title="Leave Types"
      subtitle="Manage leave types"
      icon={Calendar}
      api={{
        list: (params) => leaveApi.types.list(params.tenantId || ""),
        create: (data) => leaveApi.types.create({ ...data, tenantId: "" }),
        update: (id, data) => leaveApi.types.update(id, data),
        delete: (id) => leaveApi.types.delete(id),
      }}
      fields={[
        { key: "code", label: "Code", type: "text", required: true },
        { key: "name", label: "Name", type: "text", required: true },
        { key: "isPaid", label: "Is Paid", type: "boolean" },
        { key: "halfDayAllowed", label: "Half Day Allowed", type: "boolean" },
        { key: "isActive", label: "Is Active", type: "boolean" },
      ]}
      formFields={[
        { key: "code", label: "Code", type: "text", required: true },
        { key: "name", label: "Name", type: "text", required: true },
        { key: "isPaid", label: "Is Paid", type: "checkbox" },
        { key: "halfDayAllowed", label: "Half Day Allowed", type: "checkbox" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function ShiftTemplatesPage() {
  return (
    <GenericListPage
      title="Shift Templates"
      subtitle="Manage shift templates"
      icon={Briefcase}
      api={{
        list: (params) => shiftApi.templates.list(params.tenantId || ""),
        create: (data) => shiftApi.templates.create({ ...data, tenantId: "" }),
        update: (id, data) => shiftApi.templates.update(id, data),
        delete: (id) => shiftApi.templates.delete(id),
      }}
      fields={[
        { key: "code", label: "Code", type: "text", required: true },
        { key: "name", label: "Name", type: "text", required: true },
        { key: "startTime", label: "Start Time", type: "text", required: true },
        { key: "endTime", label: "End Time", type: "text", required: true },
        { key: "breakMins", label: "Break Minutes", type: "number" },
        { key: "isActive", label: "Is Active", type: "boolean" },
      ]}
      formFields={[
        { key: "code", label: "Code", type: "text", required: true },
        { key: "name", label: "Name", type: "text", required: true },
        { key: "startTime", label: "Start Time", type: "text", placeholder: "HH:mm" },
        { key: "endTime", label: "End Time", type: "text", placeholder: "HH:mm" },
        { key: "breakMins", label: "Break Minutes", type: "number" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function RostersPage() {
  return (
    <GenericListPage
      title="Rosters"
      subtitle="Manage shift rosters"
      icon={Calendar}
      api={{
        list: (params) => shiftApi.rosters.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => shiftApi.rosters.create({ ...data, tenantId: "" }),
        update: (id, data) => shiftApi.rosters.update(id, data),
        delete: (id) => shiftApi.rosters.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "shiftId", label: "Shift ID", type: "text" },
        { key: "workDate", label: "Work Date", type: "date", required: true },
        { key: "status", label: "Status", type: "text" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "shiftId", label: "Shift ID", type: "text" },
        { key: "workDate", label: "Work Date", type: "date", required: true },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function ShiftSwapsPage() {
  return (
    <GenericListPage
      title="Shift Swaps"
      subtitle="Manage shift swaps"
      icon={Calendar}
      api={{
        list: (params) => shiftApi.swaps.list(params.tenantId || ""),
        create: (data) => shiftApi.swaps.create({ ...data, tenantId: "" }),
        update: (id, data) => shiftApi.swaps.update(id, data),
        delete: (id) => shiftApi.swaps.delete(id),
      }}
      fields={[
        { key: "fromEmployeeId", label: "From Employee ID", type: "text", required: true },
        { key: "toEmployeeId", label: "To Employee ID", type: "text", required: true },
        { key: "workDate", label: "Work Date", type: "date", required: true },
        { key: "status", label: "Status", type: "text" },
      ]}
      formFields={[
        { key: "fromEmployeeId", label: "From Employee ID", type: "text", required: true },
        { key: "toEmployeeId", label: "To Employee ID", type: "text", required: true },
        { key: "workDate", label: "Work Date", type: "date", required: true },
        { key: "reason", label: "Reason", type: "textarea" },
      ]}
      tenantId=""
    />
  );
}

export function LeavePoliciesPage() {
  return (
    <GenericListPage
      title="Leave Policies"
      subtitle="Configure leave policies"
      icon={Calendar}
      api={{
        list: (params) => leaveApi.types.list(params.tenantId || ""),
        create: (data) => leaveApi.types.create({ ...data, tenantId: "" }),
        update: (id, data) => leaveApi.types.update(id, data),
        delete: (id) => leaveApi.types.delete(id),
      }}
      fields={[
        { key: "code", label: "Code", type: "text", required: true },
        { key: "name", label: "Name", type: "text", required: true },
        { key: "isPaid", label: "Is Paid", type: "boolean" },
        { key: "halfDayAllowed", label: "Half Day Allowed", type: "boolean" },
        { key: "isActive", label: "Is Active", type: "boolean" },
      ]}
      formFields={[
        { key: "code", label: "Code", type: "text", required: true },
        { key: "name", label: "Name", type: "text", required: true },
        { key: "isPaid", label: "Is Paid", type: "checkbox" },
        { key: "halfDayAllowed", label: "Half Day Allowed", type: "checkbox" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function CompOffPage() {
  return (
    <GenericListPage
      title="Comp Off"
      subtitle="Manage compensatory off requests"
      icon={Calendar}
      api={{
        list: (params) => leaveApi.compOff.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => leaveApi.compOff.create({ ...data, tenantId: "" }),
        update: (id, data) => leaveApi.compOff.update(id, data),
        delete: (id) => leaveApi.compOff.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "workDate", label: "Work Date", type: "date", required: true },
        { key: "hours", label: "Hours", type: "number", required: true },
        { key: "status", label: "Status", type: "text" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "workDate", label: "Work Date", type: "date", required: true },
        { key: "hours", label: "Hours", type: "number", required: true },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}