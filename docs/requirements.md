# Local Merchant Services & Appointment Booking — Requirements

## 1. User Stories

### User Story 1: Service Provider / Merchant

**As an** authenticated local service provider,  
**I want** to submit service listing drafts with hourly rates,  
**So that** clients can book my appointments once administrators verify my services.

**Acceptance Criteria**

- **Given** an authenticated merchant, **When** submitting a valid service offering payload, **Then** the service is saved with `status = 'draft'`.
- **Given** an authenticated merchant, **When** submitting a service, **Then** the service is linked to the provider's `auth.uid()`.
- **Given** a merchant submits invalid service information, **When** the system validates the payload, **Then** the submission is rejected with validation errors.
- **Given** a service is still in draft status, **When** an anonymous visitor searches for services, **Then** the service is not publicly displayed.

**Scope Estimate:** Medium

**Technical Mapping:**
- Database migration: `supabase/migrations/20261029140000_exam_services_persistence.sql` — `profiles` and `services` tables.
- Security: Row-Level Security restricts providers to their own service listings.
- Route handler: `app/api/services/route.ts` — POST validates the service and creates it using the authenticated provider session.

---

### User Story 2: Neighborhood Client / Resident

**As a** neighborhood resident,  
**I want** to view approved services categorized by neighborhood district and request appointments,  
**So that** I can find local services without seeing private information or bookings submitted by other clients.

**Acceptance Criteria**

- **Given** an anonymous visitor, **When** querying service offerings, **Then** only records with `status = 'approved'` and active coverage zones are returned.
- **Given** approved services are available, **When** a client browses services, **Then** services can be organized by their neighborhood district or category.
- **Given** a client submits a booking, **When** the booking is saved, **Then** the client's booking information remains private.
- **Given** a client attempts to access another client's booking or contact information, **When** the request is made, **Then** access is denied.

**Scope Estimate:** Large

**Technical Mapping:**
- Database migration: `supabase/migrations/20261029140000_exam_services_persistence.sql` — `services`, `service_categories`, `service_category_mappings`, and `bookings` tables.
- Security: Row-Level Security allows public access to approved services and restricts private booking information.
- Route handler: `app/api/services/route.ts` — GET returns approved public services. Booking creation and privacy are enforced through the booking table's database policies; a separate booking route is not specified in the exam requirements.

---

### User Story 3: Platform Admin

**As a** platform administrator,  
**I want** unrestricted oversight to approve service listings, deactivate bad actors, and audit all client bookings,  
**So that** the platform remains safe, organized, and secure.

**Acceptance Criteria**

- **Given** an authorized administrator, **When** reviewing a draft service, **Then** the administrator can approve or reject the listing.
- **Given** an authorized administrator, **When** a provider violates platform rules, **Then** the administrator can deactivate the provider or restrict their services.
- **Given** an authorized administrator, **When** reviewing bookings, **Then** the administrator can access booking records for auditing.
- **Given** an unauthorized user, **When** attempting to access administrative or restricted booking information, **Then** access is denied.

**Scope Estimate:** Large

**Technical Mapping:**
- Database migration: `supabase/migrations/20261029140000_exam_services_persistence.sql` — `profiles`, `services`, and `bookings` tables.
- Security: Row-Level Security policies distinguish administrators from regular users and allow authorized administrative access.
- Route handler: `app/api/services/route.ts` — GET and POST provide the service listing operations specified in the exam. Administrative approval and booking audits are enforced through database security policies; separate admin routes are not specified in the exam requirements.

---

## 2. Shared Technical Requirements

- Use PostgreSQL tables and relationships defined in the exam migration.
- Use Row-Level Security to protect private data.
- Validate service information using Zod or JSON Schema.
- Reject invalid service submissions with structured validation errors.
- Keep the Supabase service role key on the server only.
- Public users can only view approved services and active coverage zones.
- Booking information must only be readable by authorized administrators and the designated service provider.
- Providers must only manage their own service listings.

## 3. Required Files

| Requirement | File |
| :--- | :--- |
| Database migration | `supabase/migrations/20261029140000_exam_services_persistence.sql` |
| Service validation | `src/schemas/service.ts` |
| Secure Supabase client | `src/lib/supabaseServer.ts` |
| Services API | `app/api/services/route.ts` |
| Security audit | `docs/security-audit.md` |
| Service card component | `src/components/ServiceCard.tsx` |