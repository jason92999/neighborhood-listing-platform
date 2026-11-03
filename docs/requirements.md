# Local Merchant Services & Appointment Booking — Requirements

## 1. User Stories

### User Story 1: Merchant

**As a** merchant,  
**I want** to create and manage my service listings,  
**So that** customers can find the services I offer.

**Acceptance Criteria**

- **Given** I am an authenticated merchant, **When** I submit a service with valid information, **Then** the service is saved in the database.
- **Given** I submit a service with missing or invalid information, **When** I submit the form, **Then** the system rejects it and returns validation errors.
- **Given** my service is not approved, **When** a public user views available services, **Then** my service is not displayed.

**Scope Estimate:** Medium

**Technical Mapping:**
- Database migration: `20261029140000_exam_services_persistence.sql` — `profiles`, `services`, and related tables.
- Security: Row-Level Security restricts merchants to their own service records.
- Route handler: `app/api/services/route.ts` — POST validates and creates a service using the authenticated merchant session.

---

### User Story 2: Client

**As a** client,  
**I want** to browse approved services and book appointments,  
**So that** I can find local services and schedule them.

**Acceptance Criteria**

- **Given** approved services exist, **When** I request the services list, **Then** only approved public services are returned.
- **Given** active service categories exist, **When** I browse categories, **Then** I can see the active categories.
- **Given** I am an authenticated client, **When** I submit a booking, **Then** the booking can be saved in the database.
- **Given** a service is not approved, **When** I browse available services, **Then** that service is not displayed.

**Scope Estimate:** Large

**Technical Mapping:**
- Database migration: `20261029140000_exam_services_persistence.sql` — `service_categories`, `services`, `service_category_mappings`, and `bookings`.
- Security: Row-Level Security controls public service access and booking creation.
- Route handler: `app/api/services/route.ts` — GET returns approved public services. The exam does not specify a separate booking API route.

---

### User Story 3: Admin

**As an** admin,  
**I want** to manage service access and review booking information,  
**So that** the platform stays organized and secure.

**Acceptance Criteria**

- **Given** I am an authorized admin, **When** I access protected service and booking data, **Then** the system allows access according to the security policies.
- **Given** I am not an authorized admin, **When** I try to access restricted booking information, **Then** the system denies access.
- **Given** a service is pending approval, **When** its approval status has not been changed, **Then** it remains unavailable to public users.

**Scope Estimate:** Medium

**Technical Mapping:**
- Database migration: `20261029140000_exam_services_persistence.sql` — service and booking tables.
- Security: Row-Level Security policies restrict admin access and protect booking information.
- Route handler: No separate admin route handler is specified in the exam requirements. Admin access is enforced through database security policies.

---

## 2. Shared Technical Requirements

- Use PostgreSQL tables and relationships defined in the exam migration.
- Use Row-Level Security to protect private data.
- Validate service information using Zod or JSON Schema.
- Reject invalid service submissions with structured validation errors.
- Keep the Supabase service role key on the server only.
- Public users can only view approved services and active categories.
- Booking information must only be readable by authorized admins and the designated service provider.

## 3. Required Files

| Requirement | File |
| :--- | :--- |
| Database migration | `supabase/migrations/20261029140000_exam_services_persistence.sql` |
| Service validation | `src/schemas/service.ts` |
| Secure Supabase client | `src/lib/supabaseServer.ts` |
| Services API | `app/api/services/route.ts` |
| Security audit | `docs/security-audit.md` |
| Service card component | `src/components/ServiceCard.tsx` |