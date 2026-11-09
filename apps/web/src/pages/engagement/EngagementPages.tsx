import { GenericListPage } from "@/components/shared/GenericListPage";
import { Megaphone, Users, Award, ChartPie, BarChart2 } from "lucide-react";
import { engagementApi } from "@/api/hooks/engagement";

export function AnnouncementsPage() {
  return (
    <GenericListPage
      title="Announcements"
      subtitle="Manage company-wide announcements"
      icon={Megaphone}
      api={{
        list: (params) => engagementApi.announcements.list(""),
        create: (data) => engagementApi.announcements.create({ ...data, tenantId: "" }),
        update: (id, data) => engagementApi.announcements.update(id, data),
        delete: (id) => engagementApi.announcements.delete(id),
      }}
      fields={[
        { key: "title", label: "Title" },
        { key: "authorId", label: "Author ID" },
        { key: "isPinned", label: "Pinned", type: "boolean" },
        { key: "isMandatory", label: "Mandatory", type: "boolean" },
        { key: "publishFrom", label: "Publish From", type: "date" },
      ]}
      formFields={[
        { key: "title", label: "Announcement Title", type: "text", required: true },
        { key: "content", label: "Content", type: "textarea", required: true },
        { key: "authorId", label: "Author ID", type: "text", required: true },
        { key: "isPinned", label: "Is Pinned", type: "checkbox" },
        { key: "isMandatory", label: "Is Mandatory", type: "checkbox" },
        { key: "publishFrom", label: "Publish From", type: "date", required: true },
        { key: "publishTo", label: "Publish To", type: "date" },
      ]}
      tenantId=""
    />
  );
}

export function AnnouncementReadsPage() {
  return (
    <GenericListPage
      title="Announcement Reads"
      subtitle="Track announcement read status"
      icon={Users}
      api={{
        list: (params) => engagementApi.announcementReads.list("", params.announcementId || ""),
        create: (data) => engagementApi.announcementReads.create({ ...data, tenantId: "" }),
        update: (id, data) => engagementApi.announcementReads.update(id, data),
        delete: (id) => engagementApi.announcementReads.delete(id),
      }}
      fields={[
        { key: "announcementId", label: "Announcement ID" },
        { key: "employeeId", label: "Employee ID" },
        { key: "readAt", label: "Read At", type: "date" },
      ]}
      formFields={[
        { key: "announcementId", label: "Announcement ID", type: "text", required: true },
        { key: "employeeId", label: "Employee ID", type: "text", required: true },
        { key: "readAt", label: "Read At", type: "date" },
      ]}
      tenantId=""
    />
  );
}

export function SurveysPage() {
  return (
    <GenericListPage
      title="Surveys"
      subtitle="Manage employee surveys and polls"
      icon={ChartPie}
      api={{
        list: (params) => engagementApi.surveys.list(""),
        create: (data) => engagementApi.surveys.create({ ...data, tenantId: "" }),
        update: (id, data) => engagementApi.surveys.update(id, data),
        delete: (id) => engagementApi.surveys.delete(id),
      }}
      fields={[
        { key: "title", label: "Title" },
        { key: "status", label: "Status", type: "status" },
        { key: "isAnonymous", label: "Anonymous", type: "boolean" },
        { key: "startDate", label: "Start Date", type: "date" },
        { key: "endDate", label: "End Date", type: "date" },
      ]}
      formFields={[
        { key: "title", label: "Survey Title", type: "text", required: true },
        { key: "description", label: "Description", type: "textarea" },
        { key: "isAnonymous", label: "Is Anonymous", type: "checkbox" },
        { key: "status", label: "Status", type: "text" },
        { key: "startDate", label: "Start Date", type: "date", required: true },
        { key: "endDate", label: "End Date", type: "date", required: true },
        { key: "createdById", label: "Created By ID", type: "text" },
      ]}
      tenantId=""
    />
  );
}

export function SurveyQuestionsPage() {
  return (
    <GenericListPage
      title="Survey Questions"
      subtitle="Manage survey questions"
      icon={BarChart2}
      api={{
        list: (params) => engagementApi.surveyQuestions.list("", params.surveyId || ""),
        create: (data) => engagementApi.surveyQuestions.create({ ...data, tenantId: "" }),
        update: (id, data) => engagementApi.surveyQuestions.update(id, data),
        delete: (id) => engagementApi.surveyQuestions.delete(id),
      }}
      fields={[
        { key: "surveyId", label: "Survey ID" },
        { key: "question", label: "Question" },
        { key: "type", label: "Type" },
        { key: "isRequired", label: "Required", type: "boolean" },
      ]}
      formFields={[
        { key: "surveyId", label: "Survey ID", type: "text", required: true },
        { key: "question", label: "Question", type: "text", required: true },
        { key: "type", label: "Question Type", type: "select", required: true,
          options: [
            { label: "Text", value: "TEXT" },
            { label: "Textarea", value: "TEXTAREA" },
            { label: "Radio", value: "RADIO" },
            { label: "Checkbox", value: "CHECKBOX" },
            { label: "Scale", value: "SCALE" },
            { label: "NPS", value: "NPS" },
          ]
        },
        { key: "optionsJson", label: "Options JSON", type: "textarea" },
        { key: "isRequired", label: "Is Required", type: "checkbox" },
        { key: "sortOrder", label: "Sort Order", type: "number" },
      ]}
      tenantId=""
    />
  );
}

export function SurveyResponsesPage() {
  return (
    <GenericListPage
      title="Survey Responses"
      subtitle="View survey response submissions"
      icon={ChartPie}
      api={{
        list: (params) => engagementApi.surveyResponses.list("", params.surveyId || ""),
        create: (data) => engagementApi.surveyResponses.create({ ...data, tenantId: "" }),
        update: (id, data) => engagementApi.surveyResponses.update(id, data),
        delete: (id) => engagementApi.surveyResponses.delete(id),
      }}
      fields={[
        { key: "surveyId", label: "Survey ID" },
        { key: "employeeId", label: "Employee ID" },
        { key: "submittedAt", label: "Submitted At", type: "date" },
      ]}
      formFields={[
        { key: "surveyId", label: "Survey ID", type: "text", required: true },
        { key: "employeeId", label: "Employee ID", type: "text" },
        { key: "responsesJson", label: "Responses JSON", type: "textarea", required: true },
      ]}
      tenantId=""
    />
  );
}

export function RecognitionsPage() {
  return (
    <GenericListPage
      title="Recognitions"
      subtitle="Manage employee recognition and rewards"
      icon={Award}
      api={{
        list: (params) => engagementApi.recognitions.list(""),
        create: (data) => engagementApi.recognitions.create({ ...data, tenantId: "" }),
        update: (id, data) => engagementApi.recognitions.update(id, data),
        delete: (id) => engagementApi.recognitions.delete(id),
      }}
      fields={[
        { key: "giverId", label: "Giver ID" },
        { key: "receiverId", label: "Receiver ID" },
        { key: "title", label: "Title" },
        { key: "value", label: "Company Value" },
        { key: "points", label: "Points" },
      ]}
      formFields={[
        { key: "giverId", label: "Giver ID", type: "text", required: true },
        { key: "receiverId", label: "Receiver ID", type: "text", required: true },
        { key: "title", label: "Recognition Title", type: "text", required: true },
        { key: "message", label: "Message", type: "textarea", required: true },
        { key: "value", label: "Company Value", type: "text" },
        { key: "points", label: "Points", type: "number" },
        { key: "isPublic", label: "Is Public", type: "checkbox" },
      ]}
      tenantId=""
    />
  );
}
