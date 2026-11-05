# Security Audit

## 1. Row-Level Security (RLS)

RLS is enabled on all five database tables:

- `profiles`
- `service_categories`
- `services`
- `service_category_mappings`
- `bookings`

## 2. Authorization Test Matrix

| User Role | Action | Expected Result |
| :--- | :--- | :--- |
| Anonymous | Read approved services | PASS |
| Anonymous | Read draft services | FAIL / DENIED |
| Provider A | Update Provider A draft service | PASS |
| Provider A | Update Provider B service | FAIL / DENIED |
| Client | Submit booking | PASS |
| Client | Select existing bookings from other users | FAIL / DENIED |
| Admin | Read/Write across all schemas using elevated service execution | PASS |

## 3. Security Policies

- Anonymous visitors can read only approved services.
- Anonymous visitors can read only active service categories.
- Anonymous visitors can read mappings for approved services.
- Providers can SELECT, INSERT, UPDATE, and DELETE their own services.
- Providers can only modify services with `draft` or `suspended` status.
- Anonymous and authenticated users can INSERT bookings.
- Clients cannot read existing bookings.
- Providers can read bookings associated with their own services.
- Administrators use elevated service-role execution for access across the database.

## 4. Verification Notes

RLS policies were created in Supabase SQL Editor.

The authorization matrix documents the expected PASS and FAIL outcomes. Runtime testing is still required to confirm each outcome.