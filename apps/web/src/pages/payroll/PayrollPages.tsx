import { GenericListPage } from "@/components/shared/GenericListPage";
import { CreditCard, Banknote, Award, Folder, FileText, Calculator } from "lucide-react";
import { payrollApi } from "@/api/hooks/payroll";

export function PayrollComponentsPage() {
  return (
    <GenericListPage
      title="Payroll Components"
      subtitle="Configure salary components (earnings, deductions, contributions)"
      icon={CreditCard}
      api={{
        list: (params) => payrollApi.components.list(params.tenantId || ""),
        create: (data) => payrollApi.components.create({ ...data, tenantId: "" }),
        update: (id, data) => payrollApi.components.update(id, data),
        delete: (id) => payrollApi.components.delete(id),
      }}
      fields={[
        { key: "code", label: "Code" },
        { key: "name", label: "Name" },
        { key: "category", label: "Category" },
        { key: "isTaxable", label: "Taxable", type: "boolean" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "code", label: "Code", type: "text", required: true },
        { key: "name", label: "Name", type: "text", required: true },
        { key: "category", label: "Category", type: "select", required: true,
          options: [
            { label: "Earning", value: "earning" },
            { label: "Employee Deduction", value: "employee_deduction" },
            { label: "Employer Contribution", value: "employer_contribution" },
            { label: "Reimbursement", value: "reimbursement" },
            { label: "Informational", value: "informational" },
          ]
        },
        { key: "isTaxable", label: "Is Taxable", type: "checkbox" },
        { key: "isPfApplicable", label: "PF Applicable", type: "checkbox" },
        { key: "isEsiApplicable", label: "ESI Applicable", type: "checkbox" },
        { key: "roundingRule", label: "Rounding Rule", type: "text", placeholder: "NEAREST" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function SalaryStructuresPage() {
  return (
    <GenericListPage
      title="Salary Structures"
      subtitle="Configure salary structures by grade"
      icon={Banknote}
      api={{
        list: (params) => payrollApi.salaryStructures.list(params.tenantId || ""),
        create: (data) => payrollApi.salaryStructures.create({ ...data, tenantId: "" }),
        update: (id, data) => payrollApi.salaryStructures.update(id, data),
        delete: (id) => payrollApi.salaryStructures.delete(id),
      }}
      fields={[
        { key: "code", label: "Code" },
        { key: "name", label: "Name" },
        { key: "gradeId", label: "Grade ID" },
        { key: "currency", label: "Currency" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "code", label: "Code", type: "text", required: true },
        { key: "name", label: "Name", type: "text", required: true },
        { key: "gradeId", label: "Grade ID", type: "text" },
        { key: "currency", label: "Currency", type: "text" },
        { key: "componentsJson", label: "Components JSON", type: "textarea" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function EmployeeCompensationPage() {
  return (
    <GenericListPage
      title="Employee Compensation"
      subtitle="Manage employee compensation packages"
      icon={Award}
      api={{
        list: (params) => payrollApi.employeeCompensation.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => payrollApi.employeeCompensation.create({ ...data, tenantId: "" }),
        update: (id, data) => payrollApi.employeeCompensation.update(id, data),
        delete: (id) => payrollApi.employeeCompensation.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "ctc", label: "CTC" },
        { key: "currency", label: "Currency" },
        { key: "effectiveFrom", label: "Effective From", type: "date" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "structureId", label: "Structure ID", type: "text" },
        { key: "ctc", label: "CTC", type: "number", required: true },
        { key: "currency", label: "Currency", type: "text" },
        { key: "effectiveFrom", label: "Effective From", type: "date", required: true },
        { key: "effectiveTo", label: "Effective To", type: "date" },
        { key: "componentsJson", label: "Components JSON", type: "textarea" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function PayrollPeriodsPage() {
  return (
    <GenericListPage
      title="Payroll Periods"
      subtitle="Configure payroll periods and pay dates"
      icon={Folder}
      api={{
        list: (params) => payrollApi.periods.list(params.tenantId || ""),
        create: (data) => payrollApi.periods.create({ ...data, tenantId: "" }),
        update: (id, data) => payrollApi.periods.update(id, data),
        delete: (id) => payrollApi.periods.delete(id),
      }}
      fields={[
        { key: "name", label: "Name" },
        { key: "startDate", label: "Start Date", type: "date" },
        { key: "endDate", label: "End Date", type: "date" },
        { key: "payDate", label: "Pay Date", type: "date" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "name", label: "Period Name", type: "text", required: true },
        { key: "startDate", label: "Start Date", type: "date", required: true },
        { key: "endDate", label: "End Date", type: "date", required: true },
        { key: "payDate", label: "Pay Date", type: "date", required: true },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function PayrollRunsPage() {
  return (
    <GenericListPage
      title="Payroll Runs"
      subtitle="Manage payroll calculation runs"
      icon={Calculator}
      api={{
        list: (params) => payrollApi.runs.list(params.tenantId || ""),
        create: (data) => payrollApi.runs.create({ ...data, tenantId: "" }),
        update: (id, data) => payrollApi.runs.update(id, data),
        delete: (id) => payrollApi.runs.delete(id),
      }}
      fields={[
        { key: "periodId", label: "Period ID" },
        { key: "status", label: "Status", type: "status" },
        { key: "employeeCount", label: "Employees" },
        { key: "totalNet", label: "Total Net", type: "currency" },
      ]}
      formFields={[
        { key: "periodId", label: "Period ID", type: "text", required: true },
        { key: "status", label: "Status", type: "text" },
        { key: "employeeCount", label: "Employee Count", type: "number" },
      ]}
      tenantId=""
    />
  );
}

export function PayslipsPage() {
  return (
    <GenericListPage
      title="Payslips"
      subtitle="View and manage employee payslips"
      icon={FileText}
      api={{
        list: (params) => payrollApi.payslips.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => payrollApi.payslips.create({ ...data, tenantId: "" }),
        update: (id, data) => payrollApi.payslips.update(id, data),
        delete: (id) => payrollApi.payslips.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "runId", label: "Run ID" },
        { key: "grossPay", label: "Gross Pay", type: "currency" },
        { key: "netPay", label: "Net Pay", type: "currency" },
        { key: "isPublished", label: "Published", type: "boolean" },
      ]}
      formFields={[
        { key: "runId", label: "Run ID", type: "text", required: true },
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "grossPay", label: "Gross Pay", type: "number", required: true },
        { key: "totalDeduction", label: "Total Deduction", type: "number" },
        { key: "netPay", label: "Net Pay", type: "number", required: true },
        { key: "componentsJson", label: "Components JSON", type: "textarea" },
        { key: "pdfUrl", label: "PDF URL", type: "text" },
        { key: "isPublished", label: "Is Published", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function LoansPage() {
  return (
    <GenericListPage
      title="Loans & Advances"
      subtitle="Manage employee loans and advances"
      icon={Banknote}
      api={{
        list: (params) => payrollApi.loans.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => payrollApi.loans.create({ ...data, tenantId: "" }),
        update: (id, data) => payrollApi.loans.update(id, data),
        delete: (id) => payrollApi.loans.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "type", label: "Type" },
        { key: "principal", label: "Principal", type: "currency" },
        { key: "outstanding", label: "Outstanding", type: "currency" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "type", label: "Loan Type", type: "text", required: true },
        { key: "principal", label: "Principal Amount", type: "number", required: true },
        { key: "interestRate", label: "Interest Rate", type: "number" },
        { key: "emiAmount", label: "EMI Amount", type: "number" },
        { key: "totalEmis", label: "Total EMIs", type: "number" },
        { key: "outstanding", label: "Outstanding", type: "number" },
        { key: "startDate", label: "Start Date", type: "date", required: true },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function FnFPage() {
  return (
    <GenericListPage
      title="Full & Final Settlement"
      subtitle="Manage employee full and final settlements"
      icon={Banknote}
      api={{
        list: (params) => payrollApi.fnf.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => payrollApi.fnf.create({ ...data, tenantId: "" }),
        update: (id, data) => payrollApi.fnf.update(id, data),
        delete: (id) => payrollApi.fnf.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "terminationId", label: "Termination ID" },
        { key: "lastWorkingDay", label: "Last Working Day", type: "date" },
        { key: "netPayable", label: "Net Payable", type: "currency" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "terminationId", label: "Termination ID", type: "text" },
        { key: "lastWorkingDay", label: "Last Working Day", type: "date", required: true },
        { key: "fullAndFinalAmount", label: "Full & Final Amount", type: "number", required: true },
        { key: "deductions", label: "Deductions", type: "number" },
        { key: "netPayable", label: "Net Payable", type: "number", required: true },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}
