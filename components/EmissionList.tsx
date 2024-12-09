import React from 'react';
import { Emission } from '../types/emission';
import { formatCurrency, formatDate } from '../utils/format';
import Link from 'next/link';

interface EmissionListProps {
  emissions: Emission[];
}

const EmissionList: React.FC<EmissionListProps> = ({ emissions }) => {
  return (
    <div className="emission-list" id="emission-list">
      <h2>Emissions Announced</h2>
      <ul>
        {emissions.map((emission) => (
          <li key={emission.id}>
            <div>
              <strong>{emission.name}</strong>
              <p>Yield: {emission.yield}%</p>
              <p>Amount: {formatCurrency(emission.amount)}</p>
              <p>Date Announced: {formatDate(emission.dateAnnounced)}</p>
              <Link href={`/company/${emission.companyId}`}>
                <a>View Company</a>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmissionList;