import React from 'react';
import { Company } from '../types/company';
import { formatCurrency, formatDate } from '../utils/format';

interface CompanyWidgetProps {
  company: Company;
}

const CompanyWidget: React.FC<CompanyWidgetProps> = ({ company }) => {
  return (
    <div id="company-widget" className="company-widget">
      <h3>{company.name}</h3>
      <p><strong>Quarterly Financials:</strong></p>
      <ul>
        {company.financials.map((financial, index) => (
          <li key={index}>
            <span>{financial.quarter}:</span>
            <span>{formatCurrency(financial.revenue)}</span>
          </li>
        ))}
      </ul>
      <p><strong>Stock Price:</strong> {formatCurrency(company.stockPrice)}</p>
      <p><strong>Bonds Yield:</strong> {company.bondsYield}%</p>
      <p><strong>Rating:</strong> {company.rating}</p>
      <p><strong>Last Update:</strong> {formatDate(company.lastUpdate)}</p>
    </div>
  );
};

export default CompanyWidget;