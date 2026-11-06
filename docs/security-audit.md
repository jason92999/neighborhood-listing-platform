# Security Audit

## 1. Row-Level Security (RLS)

RLS is enabled on all five database tables:
- `profiles`
- `service_categories`
- `services`
- `service_category_mappings`
- `bookings`

## 2. Authorization Policy Matrix

| User Role | Action | Expected Result | Test Result |
| :--- | :--- | :--- | :--- |
| Anonymous | Read approved services | PASS | PASS |
| Anonymous | Read draft services | DENIED | PASS |
| Provider A | Update Provider A draft service | PASS | PASS |
| Provider A | Update Provider B service | DENIED | PASS |
| Client | Submit booking for approved service | PASS | PASS |
| Client | Submit booking for unapproved service | DENIED | PASS |
| Client | Read existing bookings | DENIED | PASS |
| Provider | Read bookings for own services | PASS | PASS |
| Provider | Read bookings for another provider's services | DENIED | PASS |
| Admin | Access data using elevated service-role execution | PASS | PASS |

## 3. Security Policies

- Anonymous and authenticated users can read only approved services.
- Anonymous and authenticated users can read only active service categories.
- Anonymous and authenticated users can read mappings for approved services.
- Providers can read their own services.
- Providers can insert services only under their own user ID and with `draft` or `suspended` status.
- Providers can update and delete only their own `draft` or `suspended` services.
- Anonymous and authenticated users can submit bookings only for approved services.
- Providers can read bookings associated with their own services.
- Clients cannot read existing bookings through current RLS policies.
- Administrators use elevated service-role execution for database access. The service-role key must remain server-side.

## 4. Verification Notes

RLS was enabled on all five tables. Policy definitions were inspected using `pg_policies`.

All ten authorization scenarios in the matrix were tested using SQL transactions. Tests involving temporary records were rolled back to avoid saving test data.

All ten scenarios produced the expected results.