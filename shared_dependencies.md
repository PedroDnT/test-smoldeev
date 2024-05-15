Shared Dependencies:

1. **Next.js Modules:**
   - `Link` and `useRouter` from `next/router` for navigation
   - `Head` from `next/head` for HTML head management
   - `GetServerSideProps` and `NextPage` for typing and data fetching

2. **TypeScript Interfaces:**
   - `Company` interface in `types/company.ts`
   - `News` interface in `types/news.ts`
   - `Emission` interface in `types/emission.ts`
   - `Rating` interface in `types/rating.ts`

3. **API Functions:**
   - `fetchCompanyData` in `lib/api.ts`
   - `fetchNews` in `lib/api.ts`
   - `fetchEmissions` in `lib/api.ts`
   - `fetchRatings` in `lib/api.ts`

4. **Utility Functions:**
   - `formatCurrency` in `utils/format.ts`
   - `formatDate` in `utils/format.ts`
   - `sortFinancialData` in `utils/sort.ts`
   - `sortNews` in `utils/sort.ts`
   - `sortEmissions` in `utils/sort.ts`
   - `sortRatings` in `utils/sort.ts`

5. **Component Exports:**
   - `Header` from `components/Header.tsx`
   - `Footer` from `components/Footer.tsx`
   - `CompanyWidget` from `components/CompanyWidget.tsx`
   - `NewsList` from `components/NewsList.tsx`
   - `EmissionList` from `components/EmissionList.tsx`
   - `RatingUpdateList` from `components/RatingUpdateList.tsx`

6. **CSS Classes:**
   - `.header` in `styles/globals.css`
   - `.footer` in `styles/globals.css`
   - `.company-widget` in `styles/globals.css`
   - `.news-list` in `styles/globals.css`
   - `.emission-list` in `styles/globals.css`
   - `.rating-update-list` in `styles/globals.css`

7. **DOM Element IDs:**
   - `#company-widget` for the CompanyWidget component
   - `#news-list` for the NewsList component
   - `#emission-list` for the EmissionList component
   - `#rating-update-list` for the RatingUpdateList component

8. **Message Names:**
   - `COMPANY_DATA_FETCH_SUCCESS` for successful company data fetch
   - `NEWS_FETCH_SUCCESS` for successful news fetch
   - `EMISSIONS_FETCH_SUCCESS` for successful emissions fetch
   - `RATINGS_FETCH_SUCCESS` for successful ratings fetch

9. **Configurations:**
   - `next.config.js` for Next.js configurations
   - `tsconfig.json` for TypeScript configurations

10. **Package Dependencies:**
    - `react` and `react-dom` for React
    - `next` for Next.js
    - `typescript` for TypeScript support

11. **Static Assets:**
    - `favicon.ico` in the `public` directory

12. **Global State Management (if used):**
    - Contexts or Redux store names (e.g., `CompanyContext`, `NewsContext`)

Please note that the actual names of functions, interfaces, classes, and IDs will depend on the specific implementation details and coding conventions used in the project. The above list is a general guide based on the provided information.