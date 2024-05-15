import { Company } from '../types/company';
import { News } from '../types/news';
import { Emission } from '../types/emission';
import { Rating } from '../types/rating';

export const sortFinancialData = (financialData: Company[]): Company[] => {
  return financialData.sort((a, b) => {
    const dateA = new Date(a.latestFinancials.date);
    const dateB = new Date(b.latestFinancials.date);
    return dateB.getTime() - dateA.getTime();
  });
};

export const sortNews = (newsList: News[]): News[] => {
  return newsList.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
};

export const sortEmissions = (emissions: Emission[]): Emission[] => {
  return emissions.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
};

export const sortRatings = (ratings: Rating[]): Rating[] => {
  return ratings.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
};