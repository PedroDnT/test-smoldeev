import React from 'react';
import { News } from '../types/news';
import Link from 'next/link';
import { formatDate } from '../utils/format';

interface NewsListProps {
  newsItems: News[];
}

const NewsList: React.FC<NewsListProps> = ({ newsItems }) => {
  return (
    <div className="news-list" id="news-list">
      <h2>Latest News</h2>
      <ul>
        {newsItems.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.id}`}>
              <a>
                <article>
                  <h3>{newsItem.title}</h3>
                  <p>{newsItem.summary}</p>
                  <time dateTime={newsItem.date}>{formatDate(newsItem.date)}</time>
                </article>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;