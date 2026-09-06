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

- **AI Model / Tool:** Gemini 3.8 Flash (Google AI Studio)
- **Prompt Title:** App Shell Architect
- **Prompt:** "Act as a senior teaching assistant. Propose a minimal Next.js App Router + TypeScript + Tailwind starter for a neighborhood property platform. Give a file plan, terminal commands, accessibility requirements (accessible HTML, semantic landmarks, focus states), and a verification checklist. Never invent command results or credentials."
- **Key Takeaways:** 
  - Reviewed standard App Router project architecture (`src/app/`, `src/components/`, `src/types/`).
  - Identified accessibility rules: skip navigation links, semantic landmarks (`<main>`, `<article>`), explicit focus indicators, and WCAG 2.1 AA contrast requirements.
  - Received verification checklist covering `npx tsc --noEmit`, `npm run lint`, and keyboard navigation testing.