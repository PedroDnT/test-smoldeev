# Financial Dashboard

This is a modern web application built using the Next.js framework, designed to provide financial data and insights about Brazilian public companies.

## Tech Stack

- **Next.js**: A React framework for server-side rendering and routing.
- **TypeScript**: A superset of JavaScript that adds static type checking.

## Features

- Server-side rendering for faster page loads and SEO benefits.
- Real-time financial data ingestion and display.
- Interactive company pages with detailed financial information.

## Backend Data

The application ingests the following data:

- Quarterly financial data from Brazilian public companies.
- Stock prices.
- Bonds issued by the company and their yields.
- Company ratings.
- Relevant news from specialized media.
- Credit ratings from the three major agencies: Fitch, S&P, and Moody's.

## Pages

- **Front Page (`pages/index.tsx`)**: Displays the latest corporate actions, relevant news, announced emissions, and rating updates.
- **Company Page (`pages/company/[id].tsx`)**: Shows a widget with the latest financials and results compared to expectations when a company is selected.

## Components

- `Header` (`components/Header.tsx`): The site header.
- `Footer` (`components/Footer.tsx`): The site footer.
- `CompanyWidget` (`components/CompanyWidget.tsx`): Displays company-specific financial data.
- `NewsList` (`components/NewsList.tsx`): Lists the latest news articles.
- `EmissionList` (`components/EmissionList.tsx`): Lists the latest bond emissions.
- `RatingUpdateList` (`components/RatingUpdateList.tsx`): Lists the latest rating updates.

## Utilities

- `formatCurrency` and `formatDate` (`utils/format.ts`): For formatting currency values and dates.
- Sorting functions (`utils/sort.ts`): To sort financial data, news, emissions, and ratings.

## Running the Application

To run the application locally, follow these steps:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the development server with `npm run dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Contributions are welcome! Please read the contributing guidelines before making any changes.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.