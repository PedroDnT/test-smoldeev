import { Company, News, Emission, Rating } from '../types';
import axios from 'axios';

const API_ENDPOINT = 'https://api.example.com'; // Replace with actual API endpoint

export async function fetchCompanyData(companyId: string): Promise<Company> {
  try {
    const response = await axios.get(`${API_ENDPOINT}/companies/${companyId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch company data');
  }
}

export async function fetchNews(): Promise<News[]> {
  try {
    const response = await axios.get(`${API_ENDPOINT}/news`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch news');
  }
}

export async function fetchEmissions(): Promise<Emission[]> {
  try {
    const response = await axios.get(`${API_ENDPOINT}/emissions`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch emissions');
  }
}

export async function fetchRatings(): Promise<Rating[]> {
  try {
    const response = await axios.get(`${API_ENDPOINT}/ratings`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch ratings');
  }
}