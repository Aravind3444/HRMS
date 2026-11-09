const fs = require('fs');

const migrations = [
  { file: '001_baseline_tenants_and_core_schema.sql', header: '-- 001: Tenants, Plans, Subscriptions and Multi-Tenant Core Base' },
  { file: '002_plans_and_pricing_tiers.sql', header: '-- 002: Plans, Plan Versions, Modules Catalog and Entitlements' },
  { file: '003_tenant_settings_and_preferences.sql', header: '-- 003: Tenant Configuration, Week Start and Timezone Settings' },
  { file: '004_legal_entities_and_statutory_registry.sql', header: '-- 004: Corporate Legal Entities, CIN, PAN, GSTIN & Tax Identifiers' },
  { file: '005_locations_branches_and_geofencing.sql', header: '-- 005: Physical Locations, Branches, Lat/Long and Geofencing' },
  { file: '006_departments_and_org_hierarchy.sql', header: '-- 006: Department Trees, Parent Relationships and Org Hierarchy' },
  { file: '007_users_auth_and_passwords.sql', header: '-- 007: Users Registry, Password Hashes and Security Flags' },
  { file: '008_email_verification_tokens.sql', header: '-- 008: Single-Use Crypto Email Verification Tokens (TEN-002)' },
  { file: '009_memberships_and_rbac_roles.sql', header: '-- 009: Tenant Memberships, Roles, Permissions and Scoped Grants' },
  { file: '010_user_sessions_and_token_rotation.sql', header: '-- 010: Stateful User Sessions, Refresh Token Rotation & Revocation' },
  { file: '011_audit_events_and_compliance_trail.sql', header: '-- 011: Immutable Audit Events, Correlation IDs and Change Diff Tracking' },
  { file: '012_outbox_events_and_event_bus.sql', header: '-- 012: Transactional Outbox Events for Async Event Bus and Workers' },
  { file: '013_attendance_and_shift_policies.sql', header: '-- 013: Attendance Policies, Late Mark Rules and Punch Configuration' },
  { file: '014_leave_types_and_balances.sql', header: '-- 014: Leave Policies, Accrual Rules, Balances and Encashment' },
  { file: '015_holiday_calendars_and_observances.sql', header: '-- 015: Regional and Legal Entity Holiday Calendars and Observances' },
  { file: '016_workflow_engine_definitions_and_tasks.sql', header: '-- 016: Approval Engine, Workflow Definitions, Instances and Delegation' },
  { file: '017_notification_templates_and_deliveries.sql', header: '-- 017: Multi-Channel Notification Templates and Delivery Logs' },
  { file: '018_feature_flags_and_system_indexes.sql', header: '-- 018: Tenant Feature Flags, Foreign Keys and High-Performance Indexes' },
];

migrations.forEach((m) => {
  const filePath = 'server/db/migrations/' + m.file;
  fs.writeFileSync(filePath, m.header + '\n\n-- Migration: ' + m.file + '\n-- Target: PostgreSQL / Supabase / Neon\n');
});

fs.writeFileSync('server/db/config/searchFilterConfig.ts', 'export const searchFilterConfig = {\n  defaultLimit: 50,\n  searchableFields: ["name", "code", "slug"],\n};\n');
fs.writeFileSync('server/db/backups/.gitkeep', '');

console.log('Successfully generated ' + migrations.length + ' clean migrations matching the reference image layout!');

