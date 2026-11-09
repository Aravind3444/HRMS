import { GenericListPage } from "@/components/shared/GenericListPage";
import { Banknote, Calendar, CreditCard, Plane, Package } from "lucide-react";
import { expenseApi } from "@/api/hooks/engagement";
import { travelApi } from "@/api/hooks/engagement";

// ==========================================
// M19: EXPENSE MANAGEMENT
// ==========================================

export function ExpensePoliciesPage() {
  return (
    <GenericListPage
      title="Expense Policies"
      subtitle="Configure expense claim policies by category and grade"
      icon={CreditCard}
      api={{
        list: (params) => expenseApi.policies.list(params.tenantId || ""),
        create: (data) => expenseApi.policies.create({ ...data, tenantId: "" }),
        update: (id, data) => expenseApi.policies.update(id, data),
        delete: (id) => expenseApi.policies.delete(id),
      }}
      fields={[
        { key: "category", label: "Category" },
        { key: "gradeId", label: "Grade ID" },
        { key: "limitAmount", label: "Limit Amount", type: "currency" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "category", label: "Expense Category", type: "text", required: true },
        { key: "gradeId", label: "Grade ID", type: "text" },
        { key: "locationId", label: "Location ID", type: "text" },
        { key: "limitAmount", label: "Limit Amount", type: "number", required: true },
        { key: "currency", label: "Currency", type: "text" },
        { key: "perDayLimit", label: "Per Day Limit", type: "number" },
        { key: "receiptRequired", label: "Receipt Required", type: "checkbox" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function ExpenseClaimsPage() {
  return (
    <GenericListPage
      title="Expense Claims"
      subtitle="Manage employee expense claims"
      icon={Banknote}
      api={{
        list: (params) => expenseApi.claims.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => expenseApi.claims.create({ ...data, tenantId: "" }),
        update: (id, data) => expenseApi.claims.update(id, data),
        delete: (id) => expenseApi.claims.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "claimNumber", label: "Claim Number" },
        { key: "totalAmount", label: "Total Amount", type: "currency" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "claimNumber", label: "Claim Number", type: "text", required: true },
        { key: "totalAmount", label: "Total Amount", type: "number", required: true },
        { key: "currency", label: "Currency", type: "text" },
        { key: "status", label: "Status", type: "text" },
        { key: "submittedAt", label: "Submitted At", type: "date" },
        { key: "approvedById", label: "Approved By ID", type: "text" },
        { key: "approvedAt", label: "Approved At", type: "date" },
        { key: "paidAt", label: "Paid At", type: "date" },
      ]}
      tenantId=""
    />
  );
}

export function ExpenseClaimLinesPage() {
  return (
    <GenericListPage
      title="Expense Claim Lines"
      subtitle="Manage individual expense line items"
      icon={Banknote}
      api={{
        list: (params) => expenseApi.claimLines.list(params.tenantId || "", params.claimId || ""),
        create: (data) => expenseApi.claimLines.create({ ...data, tenantId: "" }),
        update: (id, data) => expenseApi.claimLines.update(id, data),
        delete: (id) => expenseApi.claimLines.delete(id),
      }}
      fields={[
        { key: "claimId", label: "Claim ID" },
        { key: "category", label: "Category" },
        { key: "amount", label: "Amount", type: "currency" },
        { key: "expenseDate", label: "Expense Date", type: "date" },
        { key: "isDuplicate", label: "Duplicate", type: "boolean" },
      ]}
      formFields={[
        { key: "claimId", label: "Claim ID", type: "text", required: true },
        { key: "category", label: "Category", type: "text", required: true },
        { key: "description", label: "Description", type: "textarea", required: true },
        { key: "amount", label: "Amount", type: "number", required: true },
        { key: "currency", label: "Currency", type: "text" },
        { key: "expenseDate", label: "Expense Date", type: "date", required: true },
        { key: "receiptUrl", label: "Receipt URL", type: "text" },
        { key: "isDuplicate", label: "Is Duplicate", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function ExpenseAdvancesPage() {
  return (
    <GenericListPage
      title="Expense Advances"
      subtitle="Manage employee expense advances"
      icon={Banknote}
      api={{
        list: (params) => expenseApi.advances.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => expenseApi.advances.create({ ...data, tenantId: "" }),
        update: (id, data) => expenseApi.advances.update(id, data),
        delete: (id) => expenseApi.advances.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "amount", label: "Amount", type: "currency" },
        { key: "purpose", label: "Purpose" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "amount", label: "Amount", type: "number", required: true },
        { key: "currency", label: "Currency", type: "text" },
        { key: "purpose", label: "Purpose", type: "textarea", required: true },
        { key: "status", label: "Status", type: "text" },
        { key: "requestedAt", label: "Requested At", type: "date" },
        { key: "approvedById", label: "Approved By ID", type: "text" },
        { key: "settledAt", label: "Settled At", type: "date" },
      ]}
      tenantId=""
    />
  );
}

// ==========================================
// M20: TRAVEL MANAGEMENT
// ==========================================

export function TravelPoliciesPage() {
  return (
    <GenericListPage
      title="Travel Policies"
      subtitle="Configure travel policies by grade"
      icon={Plane}
      api={{
        list: (params) => travelApi.policies.list(params.tenantId || ""),
        create: (data) => travelApi.policies.create({ ...data, tenantId: "" }),
        update: (id, data) => travelApi.policies.update(id, data),
        delete: (id) => travelApi.policies.delete(id),
      }}
      fields={[
        { key: "gradeId", label: "Grade ID" },
        { key: "class", label: "Travel Class" },
        { key: "maxPerDay", label: "Max Per Day", type: "currency" },
        { key: "isActive", label: "Active", type: "boolean" },
      ]}
      formFields={[
        { key: "gradeId", label: "Grade ID", type: "text", required: true },
        { key: "class", label: "Travel Class", type: "select", required: true,
          options: [
            { label: "Economy", value: "ECONOMY" },
            { label: "Business", value: "BUSINESS" },
            { label: "First", value: "FIRST" },
          ]
        },
        { key: "maxPerDay", label: "Max Per Day", type: "number" },
        { key: "currency", label: "Currency", type: "text" },
        { key: "hotelCap", label: "Hotel Cap", type: "number" },
        { key: "perDiem", label: "Per Diem", type: "number" },
        { key: "mileageRate", label: "Mileage Rate", type: "number" },
        { key: "isActive", label: "Is Active", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}

export function TravelRequestsPage() {
  return (
    <GenericListPage
      title="Travel Requests"
      subtitle="Manage employee travel requests"
      icon={Package}
      api={{
        list: (params) => travelApi.requests.list(params.tenantId || "", params.employeeId || ""),
        create: (data) => travelApi.requests.create({ ...data, tenantId: "" }),
        update: (id, data) => travelApi.requests.update(id, data),
        delete: (id) => travelApi.requests.delete(id),
      }}
      fields={[
        { key: "employeeId", label: "Employee ID" },
        { key: "destination", label: "Destination" },
        { key: "startDate", label: "Start Date", type: "date" },
        { key: "endDate", label: "End Date", type: "date" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "purpose", label: "Purpose", type: "textarea", required: true },
        { key: "startDate", label: "Start Date", type: "date", required: true },
        { key: "endDate", label: "End Date", type: "date", required: true },
        { key: "destination", label: "Destination", type: "text", required: true },
        { key: "estimatedCost", label: "Estimated Cost", type: "number" },
        { key: "currency", label: "Currency", type: "text" },
        { key: "status", label: "Status", type: "text" },
        { key: "submittedAt", label: "Submitted At", type: "date" },
        { key: "approvedById", label: "Approved By ID", type: "text" },
        { key: "approvedAt", label: "Approved At", type: "date" },
      ]}
      tenantId=""
    />
  );
}

export function TravelBookingsPage() {
  return (
    <GenericListPage
      title="Travel Bookings"
      subtitle="Manage travel bookings (flights, hotels, cabs)"
      icon={Plane}
      api={{
        list: (params) => travelApi.bookings.list(params.tenantId || "", params.requestId || ""),
        create: (data) => travelApi.bookings.create({ ...data, tenantId: "" }),
        update: (id, data) => travelApi.bookings.update(id, data),
        delete: (id) => travelApi.bookings.delete(id),
      }}
      fields={[
        { key: "requestId", label: "Request ID" },
        { key: "type", label: "Booking Type" },
        { key: "provider", label: "Provider" },
        { key: "amount", label: "Amount", type: "currency" },
        { key: "status", label: "Status", type: "status" },
      ]}
      formFields={[
        { key: "requestId", label: "Request ID", type: "text", required: true },
        { key: "type", label: "Booking Type", type: "select", required: true,
          options: [
            { label: "Flight", value: "FLIGHT" },
            { label: "Hotel", value: "HOTEL" },
            { label: "Train", value: "TRAIN" },
            { label: "Cab", value: "CAB" },
          ]
        },
        { key: "provider", label: "Provider", type: "text" },
        { key: "bookingRef", label: "Booking Reference", type: "text" },
        { key: "amount", label: "Amount", type: "number" },
        { key: "currency", label: "Currency", type: "text" },
        { key: "travelDate", label: "Travel Date", type: "date" },
        { key: "status", label: "Status", type: "text" },
      ]}
      tenantId=""
    />
  );
}
