# ProfileEditor Hotfix Technical Assessment

## Task Description
A recently merged feature update broke critical type safety and introduced runtime issues in the `ProfileEditor` component of a React/TypeScript SaaS app. The code currently fails both TypeScript (`tsc`) and ESLint checks, and users are unable to reliably edit their profile due to form bugs.

**Your assessment focuses on diagnosing and fixing the following in `src/ProfileEditor.tsx`:**
- TypeScript errors (especially type safety and implicit `any`)
- ESLint errors (including unused imports and explicit types)
- Runtime bugs affecting the profile editing form (e.g., non-editable fields, phone array bugs)

## Setup Instructions
1. Ensure you have Docker installed and running.
2. Clone this repository to your local machine.
3. In your terminal, run:
   ```
   sh run.sh
   ```
4. Visit [http://localhost:3000](http://localhost:3000) in your web browser to access the app.
5. All editing will be done inside `src/ProfileEditor.tsx`.

## What You Need to Do
- Investigate and resolve all the type and lint errors in `ProfileEditor.tsx`.
- Ensure the form works as intended: you can update the firstName, and add/remove/edit phone numbers with no runtime crashes.
- Remove unused or stray imports to satisfy ESLint.
- Make sure all state and context are handled with correct TypeScript types and idiomatic React patterns.
- Do not change files other than `src/ProfileEditor.tsx`.

## Expected Outcomes
- `ProfileEditor.tsx` passes TypeScript (`tsc`) and ESLint checks with no errors.
- The profile editor renders and allows reliable field updates:
    - `firstName` is editable and updates as you type.
    - Phone numbers list always renders, and you can add, remove, and edit numbers safely.
- TypeScript strict rules are observed (`noImplicitAny`, no unnecessary `any` type).
- No unused imports remain in the file.

## How to Verify
1. Inside the running container, check type and lint status:
    - TypeScript: `docker exec -it profile-editor-container npm run build`
    - ESLint: `docker exec -it profile-editor-container npm run lint`
2. Manual: In your browser (`http://localhost:3000`), verify that:
    - Editing the First Name field updates state as you type.
    - Phone numbers can be added/removed/edited without crashes or errors.
    - No console TypeScript/runtime errors appear.
3. Only submit your updated `src/ProfileEditor.tsx` once all checks pass and the profile form is fully functional.
