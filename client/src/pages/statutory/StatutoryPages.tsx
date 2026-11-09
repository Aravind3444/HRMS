import { GenericListPage } from "@/components/shared/GenericListPage";
import { ShieldAlert, FileText, Calendar, CreditCard, Banknote, Calculator } from "lucide-react";
import { statutoryApi } from "@/api/hooks/payroll";

export function StatutoryRuleSetsPage() {
  return (
    <GenericListPage
      title="Statutory Rule Sets"
      subtitle="Configure statutory compliance rules (PF, ESI, PT, LWF, TDS)"
      icon={ShieldAlert}
      api={{
        list: (params) => statutoryApi.ruleSets.list(params.tenantId || ""),
        create: (data) => statutoryApi.ruleSets.create({ ...data, tenantId: "" }),
        update: (id, data) => statutoryApi.ruleSets.update(id, data),
        delete: (id) => statutoryApi.ruleSets.delete(id),
      }}
      fields={[
        { key: "code", label: "Code" },
        { key: "name", label: "Name" },
        { key: "wageCeiling", label: "Wage Ceiling", type: "currency" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "code", label: "Code", type: "text", required: true },
        { key: "name", label: "Name", type: "text", required: true },
        { key: "wageCeiling", label: "Wage Ceiling", type: "number" },
        { key: "employeeRate", label: "Employee Rate", type: "number" },
        { key: "employerRate", label: "Employer Rate", type: "number" },
        { key: "effectiveFrom", label: "Effective From", type: "date", required: true },
        { key: "effectiveTo", label: "Effective To", type: "date" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function PFContributionsPage() {
  return (
    <GenericListPage
      title="PF Contributions"
      subtitle="Manage Provident Fund contributions"
      icon={CreditCard}
      api={{
        list: (params) => statutoryApi.pfContributions.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => statutoryApi.pfContributions.create({ ...data, tenantId: "" }),
        update: (id, data) => statutoryApi.pfContributions.update(id, data),
        delete: (id) => statutoryApi.pfContributions.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "period", label: "Period" },
        { key: "wage", label: "Wage", type: "currency" },
        { key: "employeeShare", label: "Employee Share", type: "currency" },
        { key: "employerShare", label: "Employer Share", type: "currency" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "period", label: "Period (YYYY-MM)", type: "text", required: true },
        { key: "wage", label: "Wage", type: "number", required: true },
        { key: "employeeShare", label: "Employee Share", type: "number" },
        { key: "employerShare", label: "Employer Share", type: "number" },
        { key: "epfShare", label: "EPF Share", type: "number" },
        { key: "epsShare", label: "EPS Share", type: "number" },
        { key: "edliShare", label: "EDLI Share", type: "number" },
      ]}
      tenantId=""
    />
  );
}

export function ESIContributionsPage() {
  return (
    <GenericListPage
      title="ESI Contributions"
      subtitle="Manage Employee State Insurance contributions"
      icon={ShieldAlert}
      api={{
        list: (params) => statutoryApi.esiContributions.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => statutoryApi.esiContributions.create({ ...data, tenantId: "" }),
        update: (id, data) => statutoryApi.esiContributions.update(id, data),
        delete: (id) => statutoryApi.esiContributions.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "period", label: "Period" },
        { key: "wage", label: "Wage", type: "currency" },
        { key: "employeeShare", label: "Employee Share", type: "currency" },
        { key: "employerShare", label: "Employer Share", type: "currency" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "period", label: "Period (YYYY-MM)", type: "text", required: true },
        { key: "wage", label: "Wage", type: "number", required: true },
        { key: "employeeShare", label: "Employee Share", type: "number" },
        { key: "employerShare", label: "Employer Share", type: "number" },
      ]}
      tenantId=""
    />
  );
}

export function PTContributionsPage() {
  return (
    <GenericListPage
      title="Professional Tax"
      subtitle="Manage Professional Tax contributions"
      icon={CreditCard}
      api={{
        list: (params) => statutoryApi.ptContributions.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => statutoryApi.ptContributions.create({ ...data, tenantId: "" }),
        update: (id, data) => statutoryApi.ptContributions.update(id, data),
        delete: (id) => statutoryApi.ptContributions.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "period", label: "Period" },
        { key: "amount", label: "Amount", type: "currency" },
        { key: "state", label: "State" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "period", label: "Period (YYYY-MM)", type: "text", required: true },
        { key: "amount", label: "Amount", type: "number", required: true },
        { key: "state", label: "State", type: "text", required: true },
      ]}
      tenantId=""
    />
  );
}

export function LWFContributionsPage() {
  return (
    <GenericListPage
      title="Labour Welfare Fund"
      subtitle="Manage Labour Welfare Fund contributions"
      icon={ShieldAlert}
      api={{
        list: (params) => statutoryApi.lwfContributions.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => statutoryApi.lwfContributions.create({ ...data, tenantId: "" }),
        update: (id, data) => statutoryApi.lwfContributions.update(id, data),
        delete: (id) => statutoryApi.lwfContributions.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "period", label: "Period" },
        { key: "amount", label: "Amount", type: "currency" },
        { key: "state", label: "State" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "period", label: "Period (YYYY-MM)", type: "text", required: true },
        { key: "amount", label: "Amount", type: "number", required: true },
        { key: "state", label: "State", type: "text", required: true },
      ]}
      tenantId=""
    />
  );
}

export function InvestmentDeclarationsPage() {
  return (
    <GenericListPage
      title="Investment Declarations"
      subtitle="Manage employee tax investment declarations"
      icon={FileText}
      api={{
        list: (params) => statutoryApi.investmentDeclarations.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => statutoryApi.investmentDeclarations.create({ ...data, tenantId: "" }),
        update: (id, data) => statutoryApi.investmentDeclarations.update(id, data),
        delete: (id) => statutoryApi.investmentDeclarations.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "financialYear", label: "Financial Year" },
        { key: "regime", label: "Tax Regime" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "financialYear", label: "Financial Year", type: "text", required: true },
        { key: "regime", label: "Tax Regime", type: "select", required: true,
          options: [
            { label: "Old Regime", value: "OLD" },
            { label: "New Regime", value: "NEW" },
          ]
        },
        { key: "section80c", label: "Section 80C", type: "number" },
        { key: "section80d", label: "Section 80D", type: "number" },
        { key: "section80ccd1b", label: "Section 80CCD(1B)", type: "number" },
        { key: "hraClaimed", label: "HRA Claimed", type: "number" },
        { key: "homeLoanInterest", label: "Home Loan Interest", type: "number" },
        { key: "otherDeductions", label: "Other Deductions", type: "number" },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function ProofSubmissionsPage() {
  return (
    <GenericListPage
      title="Proof Submissions"
      subtitle="Manage tax proof document submissions"
      icon={FileText}
      api={{
        list: (params) => statutoryApi.proofSubmissions.list(params.tenantId || "", params.declarationId || ""),
        create: (data) => statutoryApi.proofSubmissions.create({ ...data, tenantId: "" }),
        update: (id, data) => statutoryApi.proofSubmissions.update(id, data),
        delete: (id) => statutoryApi.proofSubmissions.delete(id),
      }}
      fields={[
        { key: "declarationId", label: "Declaration ID" },
        { key: "sectionCode", label: "Section Code" },
        { key: "amount", label: "Amount", type: "currency" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "declarationId", label: "Declaration ID", type: "text", required: true },
        { key: "sectionCode", label: "Section Code", type: "text", required: true },
        { key: "fileUrl", label: "File URL", type: "text" },
        { key: "amount", label: "Amount", type: "number" },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function TDSComputationsPage() {
  return (
    <GenericListPage
      title="TDS Computations"
      subtitle="Manage TDS (Tax Deducted at Source) computations"
      icon={Calculator}
      api={{
        list: (params) => statutoryApi.tdsComputations.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => statutoryApi.tdsComputations.create({ ...data, tenantId: "" }),
        update: (id, data) => statutoryApi.tdsComputations.update(id, data),
        delete: (id) => statutoryApi.tdsComputations.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "financialYear", label: "Financial Year" },
        { key: "month", label: "Month" },
        { key: "taxableIncome", label: "Taxable Income", type: "currency" },
        { key: "tdsAmount", label: "TDS Amount", type: "currency" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "financialYear", label: "Financial Year", type: "text", required: true },
        { key: "month", label: "Month (YYYY-MM)", type: "text", required: true },
        { key: "grossSalary", label: "Gross Salary", type: "number", required: true },
        { key: "deductions", label: "Deductions", type: "number" },
        { key: "taxableIncome", label: "Taxable Income", type: "number" },
        { key: "tdsAmount", label: "TDS Amount", type: "number" },
        { key: "cessAmount", label: "Cess Amount", type: "number" },
      ]}
      tenantId=""
    />
  );
}

export function Form16Page() {
  return (
    <GenericListPage
      title="Form 16"
      subtitle="Generate and manage Form 16 tax certificates"
      icon={FileText}
      api={{
        list: (params) => statutoryApi.form16.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => statutoryApi.form16.create({ ...data, tenantId: "" }),
        update: (id, data) => statutoryApi.form16.update(id, data),
        delete: (id) => statutoryApi.form16.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "financialYear", label: "Financial Year" },
        { key: "generatedAt", label: "Generated At", type: "date" },
        { key: "publishedAt", label: "Published At", type: "date" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "financialYear", label: "Financial Year", type: "text", required: true },
        { key: "pdfUrl", label: "PDF URL", type: "text" },
        { key: "partABData", label: "Part AB Data JSON", type: "textarea" },
        { key: "partBData", label: "Part B Data JSON", type: "textarea" },
        { key: "generatedAt", label: "Generated At", type: "date" },
        { key: "publishedAt", label: "Published At", type: "date" },
      ]}
      tenantId=""
    />
  );
}

export function Form24QPage() {
  return (
    <GenericListPage
      title="Form 24Q"
      subtitle="Manage quarterly TDS returns (Form 24Q)"
      icon={FileText}
      api={{
        list: (params) => statutoryApi.form24q.list(params.tenantId || ""),
        create: (data) => statutoryApi.form24q.create({ ...data, tenantId: "" }),
        update: (id, data) => statutoryApi.form24q.update(id, data),
        delete: (id) => statutoryApi.form24q.delete(id),
      }}
      fields={[
        { key: "quarter", label: "Quarter" },
        { key: "financialYear", label: "Financial Year" },
        { key: "filedAt", label: "Filed At", type: "date" },
        { key: "acknowledgmentNo", label: "Acknowledgment No" },
      ]}
      formFields={[
        { key: "quarter", label: "Quarter", type: "text", required: true },
        { key: "financialYear", label: "Financial Year", type: "text", required: true },
        { key: "pdfUrl", label: "PDF URL", type: "text" },
        { key: "dataJson", label: "Data JSON", type: "textarea" },
        { key: "filedAt", label: "Filed At", type: "date" },
        { key: "acknowledgmentNo", label: "Acknowledgment Number", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function ComplianceCalendarPage() {
  return (
    <GenericListPage
      title="Compliance Calendar"
      subtitle="Track statutory compliance due dates"
      icon={Calendar}
      api={{
        list: (params) => statutoryApi.complianceCalendar.list(params.tenantId || ""),
        create: (data) => statutoryApi.complianceCalendar.create({ ...data, tenantId: "" }),
        update: (id, data) => statutoryApi.complianceCalendar.update(id, data),
        delete: (id) => statutoryApi.complianceCalendar.delete(id),
      }}
      fields={[
        { key: "statuteCode", label: "Statute Code" },
        { key: "name", label: "Name" },
        { key: "dueDate", label: "Due Date", type: "date" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "statuteCode", label: "Statute Code", type: "text", required: true },
        { key: "name", label: "Name", type: "text", required: true },
        { key: "dueDate", label: "Due Date", type: "date", required: true },
        { key: "period", label: "Period", type: "text" },
        { key: "status", label: "Status", type: "text" },
        { key: "remittedAmount", label: "Remitted Amount", type: "number" },
        { key: "challanNo", label: "Challan Number", type: "text" },
      ]}
      tenantId=""
    />
  );
}
