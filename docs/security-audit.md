# Security Audit

## 1. Row-Level Security (RLS)

RLS is enabled on all five database tables:

- `profiles`
- `service_categories`
- `services`
- `service_category_mappings`
- `bookings`

## 2. Authorization Policy Matrix

| User Role | Action | Expected Result |
| :--- | :--- | :--- |
| Anonymous | Read approved services | PASS |
| Anonymous | Read draft services | DENIED |
| Provider A | Update Provider A draft service | PASS |
| Provider A | Update Provider B service | DENIED |
| Client | Submit booking for approved service | PASS |
| Client | Submit booking for unapproved service | DENIED |
| Client | Read existing bookings | DENIED |
| Provider | Read bookings for own services | PASS |
| Provider | Read bookings for another provider's services | DENIED |
| Admin | Access data using elevated service-role execution | PASS |

Runtime testing is still required to confirm these outcomes.

## 3. Security Policies

- Anonymous and authenticated users can read only approved services.
- Anonymous and authenticated users can read only active service categories.
- Anonymous and authenticated users can read mappings for approved services.
- Providers can read their own services.
- Providers can insert services only under their own user ID and with `draft` or `suspended` status.
- Providers can update and delete only their own `draft` or `suspended` services.
- Anonymous and authenticated users can submit bookings only for approved services.
- Providers can read bookings associated with their own services.
- Clients cannot read existing bookings through the current RLS policies.
- Administrators use elevated service-role execution for database access. The service-role key must remain server-side.

## 4. Verification Notes

RLS is enabled on all five tables.

Policy definitions were inspected in Supabase using the `pg_policies` system view. The approved-service booking restriction and public catalog read permissions were verified.

The authorization matrix documents expected behavior. Runtime testing is still required to confirm each authorization outcome.