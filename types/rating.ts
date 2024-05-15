// types/rating.ts

export interface Rating {
  agency: 'Fitch' | 'S&P' | 'Moodys';
  ratingValue: string;
  date: string;
  companyID: string;
}