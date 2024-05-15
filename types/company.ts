// types/company.ts

export interface FinancialData {
  quarter: string;
  revenue: number;
  profit: number;
  assets: number;
  liabilities: number;
}

export interface StockPrice {
  date: string;
  price: number;
}

export interface Bond {
  id: string;
  amount: number;
  yield: number;
  maturityDate: string;
}

export interface CompanyRating {
  agency: 'Fitch' | 'S&P' | 'Moodys';
  rating: string;
  date: string;
}

export interface Company {
  id: string;
  name: string;
  financials: FinancialData[];
  stockPrices: StockPrice[];
  bonds: Bond[];
  ratings: CompanyRating[];
  news: string[];
}