import React from 'react';
import { Rating } from '../types/rating';

interface RatingUpdateListProps {
  ratings: Rating[];
}

const RatingUpdateList: React.FC<RatingUpdateListProps> = ({ ratings }) => {
  return (
    <div id="rating-update-list" className="rating-update-list">
      <h2>Rating Updates</h2>
      <ul>
        {ratings.map((rating, index) => (
          <li key={index}>
            <div>
              <strong>{rating.agency}</strong>: {rating.grade} (Updated on {rating.date})
            </div>
            <div>
              Outlook: {rating.outlook}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingUpdateList;