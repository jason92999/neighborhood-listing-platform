# AI Collaboration Log

## Step 4: Stack & Accessibility Comparison (ChatGPT vs. Gemini)

-Difference 1 : ChatGPT provided simpler, high-level explanations, whereas Gemini provided more detailed explanations for each tool.
-Difference 2 : ChatGPT focused primarily on what each tool does (features and functionality), while Gemini focused on why each tool is useful (practical benefits and purpose).

## Prompt & Output Tracker

| Tool | Prompt | Output Used | Output Rejected | Verification | Commit |
| :--- | :--- | :--- | :--- | :--- | :--- |
| ChatGPT | Explain Next.js, TS, Tailwind, Accessible HTML | Conceptual understanding | N/A | Compared with Gemini | Step 4 setup |
| Gemini | Explain Next.js, TS, Tailwind, Accessible HTML | Conceptual understanding | N/A | Compared with ChatGPT | Step 4 setup |

## Step 5: App Shell Architect

- AI Model / Tool: Gemini 3.8 Flash (Google AI Studio)
-
- Prompt: "Act as a senior teaching assistant. Propose a minimal Next.js App Router + TypeScript + Tailwind starter for a neighborhood property platform. Give a file plan, terminal commands, accessibility requirements (accessible HTML, semantic landmarks, focus states), and a verification checklist. Never invent command results or credentials."
- Notes: 
  - Got folder structure (`src/app`, `src/components`, `src/types`).
  - Got basic setup commands and basic accessibility rules.

# LAB 2 STEP 2
AI Tool: Google AI Studio (Gemini)
Prompt: Give me only the TypeScript prop interfaces for PropertyCard, SponsorBanner, and SearchFilters for a neighborhood property listing website. No component code.

Review: Gemini suggested several properties. I removed features that were not needed for Lab 2, such as favorites, sharing, and impressions.

### STEP 9 AND 10
## Lab 2 - Accessibility Audit

- **Lighthouse Accessibility Score:** 98/100
- **Passed Audits:** 23/24 automated checks passed 
- **Manual Keyboard Audit:** Passed. Able to navigate the entire page using only Tab, Shift+Tab, Enter, and Space.

### Identified Issues and fix
- **Issue:** Heading elements are not in a sequentially-descending order.
- **Fix:** Changed heading tag in `SponsorBanner.tsx` to `<h2>` to maintain strict sequential heading hierarchy (`<h1>` $\rightarrow$ `<h2>`).


## LAB 3 STEP 1
### Property Card

* Property ID
* Address/city
* Price
* Bedrooms
* Bathrooms
* Square feet
* Image
* Amenities

### Detail Page

* Property ID
* Full address
* Price
* Bedrooms
* Bathrooms
* Square feet
* Amenities
* Description
* Local sponsors

### Sponsor Selection

* Sponsor ID
* Sponsor name
* Sponsor category
* Associated property ID

### Voice Response

* Property address/city
* Price
* Bedrooms
* Bathrooms
* Square feet
* Key amenities
* Sponsor information

## LAB 3 STEP 2
### Property

Represents a property listing.

**Primary Key:** `property_id`

Fields:

* `property_id`
* `address`
* `city`
* `state`
* `zip_code`
* `price`
* `bedrooms`
* `bathrooms`
* `square_feet`
* `amenities`

### Sponsor

Represents a local business or sponsor.

**Primary Key:** `sponsor_id`

Fields:

* `sponsor_id`
* `name`
* `category`

### PropertySponsor

Connects properties with sponsors.

**Primary Key:** Composite key of `property_id` and `sponsor_id`

Fields:

* `property_id`
* `sponsor_id`

### Relationships

* One Property can be associated with many PropertySponsor records.
* One Sponsor can be associated with many PropertySponsor records.
* PropertySponsor creates a many-to-many relationship between Property and Sponsor.
* `property_id` in PropertySponsor is a foreign key referencing Property.
* `sponsor_id` in PropertySponsor is a foreign key referencing Sponsor.

## LAB 3 STEP 8

* First output had errors.
* I improved the Gemini prompt.
* Gemini generated new data.
* The validator passed the new data.

## LAB 3 STEP 9

* I created TypeScript types based on the JSON Schema.
* Zod is used to validate the data.
* TypeScript types are used for type safety.

## LAB 3 STEP 12

### Prompt Used

Review my property listing data model for normalization.

I have Property, Sponsor, and PropertySponsor. Property also has an amenities array.

Are there any normalization problems? Should amenities stay as free text, use controlled values, or use a separate table? Explain which option is best for this project and why.

### ChatGPT vs Gemini

Both ChatGPT and Gemini said that using an array for amenities can cause normalization problems.

Both suggested using controlled values to keep the data consistent.

### Decision

I decided to keep amenities as an array of controlled strings.

This keeps the project simple and makes the data more consistent.

**### AI Collaboration Checkpoint**

- **Useful output:** Both ChatGPT and Gemini identified the amenities array as a normalization issue and suggested controlled values.

- **Rejected output:** A separate Amenity and PropertyAmenity table was not used because it would add more complexity to this project.

- **Verification:** Zod validation and the Step 11 tests were used to check valid and invalid property data.

- **Commit:** `dc8b06b docs: add Lab 3 Step 12 AI notes`


## midterm
| Step / Tool | Prompt Summary | Model Output Used | Model Output Rejected & Rationale | Verification Method | Associated Git Commit |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Part 1 / ChatGPT | Set up the exam branch and update `.gitignore`. | Created the `exam/services-booking-eval` branch and added `/dist/` to `.gitignore`. | No rejected output. | Checked the branch name, Git status, and commit history. | `3d73b06` |
| Part 2 / ChatGPT | Create the exam requirements document with three user stories, Given/When/Then acceptance criteria, scope estimates, and technical mappings. | Created `docs/requirements.md` with Merchant, Client, and Admin user stories and mapped them to the required technical parts. | No major output rejected. | Reviewed the requirements document and checked that all three user stories and required sections were included. | `396278b`, `a7cbe79` |
| Part 3 / ChatGPT | Create the Supabase SQL migration with the five required tables, fields, relationships, defaults, and constraints. | Created `supabase/migrations/20261029140000_exam_services_persistence.sql` with the required database schema. | Avoided adding extra tables or columns outside the exam requirements. | Reviewed the SQL migration, ran it in Supabase SQL Editor, and confirmed that all five tables appeared in Table Editor. | `a7cbe79` |

## Part 4: Security and Authorization

| Step / Tool | Prompt Summary | Model Output Used | Model Output Rejected & Rationale | Verification Method | Associated Git Commit |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Part 4 / ChatGPT | Review the Supabase RLS policies and identify security issues. | Updated public SELECT policies to include anonymous and authenticated users. Restricted booking INSERT policies to approved services. | Unrestricted booking submissions were rejected because they allowed bookings for unapproved services. | Queried `pg_policies` in Supabase and inspected the policy definitions. | `4df57d4` |
| Part 4 / ChatGPT | Review and update the security audit documentation. | Updated `docs/security-audit.md` to document the RLS policies and authorization test results. | Avoided claiming that untested authorization scenarios had passed. | Compared the documentation with Supabase policy definitions and SQL transaction test results. | `4df57d4`, `15add6a` |

### AI Collaboration Checkpoint

- **Useful output:** ChatGPT helped identify an unrestricted booking policy and recommended restricting booking submissions to approved services.
- **Rejected output:** Unrestricted booking submissions were rejected because they could allow bookings for unapproved services.
- **Verification:** Tested public service access, booking restrictions, provider access, client booking visibility, and elevated service-role access using SQL transactions. Temporary test records were rolled back.
- **Commit:** `15add6a`

## Part 5: Services API and Data Validation

| Step / Tool | Prompt Summary | Model Output Used | Model Output Rejected & Rationale | Verification Method | Associated Git Commit |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Part 5 / ChatGPT | Implement the services API using Supabase and validate service data with Zod. | Created the service validation schema and server-side API routes. GET retrieves approved services, while POST validates input, authenticates the provider, and creates a draft service. | Client-side use of the service-role key was rejected because it would expose privileged database access. | Inspected the schema and API routes, tested the services listing, and ran `npm.cmd run build` successfully. | `07c0937` |

### AI Collaboration Checkpoint

- **Useful output:** ChatGPT helped implement server-side Supabase access, Zod validation, and the services GET/POST endpoints.
- **Rejected output:** Exposing the service-role key in client-side code was rejected because it would compromise database security.
- **Verification:** Confirmed that approved services could be retrieved and that the production build completed successfully.
- **Commit:** `07c0937`

## Part 6: Services UI and Accessibility

| Step / Tool | Prompt Summary | Model Output Used | Model Output Rejected & Rationale | Verification Method | Associated Git Commit |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Part 6 / ChatGPT | Create an accessible ServiceCard component for displaying service information. | Created `src/components/ServiceCard.tsx` with semantic HTML, service details, and an accessible Book Now button. | A complete booking submission workflow was not added because the booking interface is not connected to a booking API. | Reviewed the component and ran the production build successfully. | `4df57d4` |
| Part 6 / ChatGPT | Create and integrate a responsive services catalog using the existing services API. | Created `ServicesCatalog.tsx`, connected it to the home page, and displayed approved services in a responsive one-, two-, and three-column grid. | Did not implement actual booking submission because a booking workflow is not connected. | Verified approved services appeared in the browser and tested the Book Now button. | `958879b` |
| Part 6 / ChatGPT | Verify keyboard accessibility of the services interface. | Used the existing semantic controls and visible focus styling for keyboard navigation. | No additional keyboard interaction code was needed after testing the existing implementation. | Manually tested Tab, Shift+Tab, Enter, and Space. Confirmed the visible focus indicator. | `958879b` |

### AI Collaboration Checkpoint

- **Useful output:** ChatGPT helped build the responsive services catalog and accessible service cards.
- **Rejected output:** A separate booking workflow was not added because the API does not implement booking submission.
- **Verification:** Tested the live interface and keyboard navigation using Tab, Shift+Tab, Enter, and Space. The production build passed.
- **Commit:** `958879b`