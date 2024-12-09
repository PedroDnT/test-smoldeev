import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { NewsList } from '../components/NewsList';
import { EmissionList } from '../components/EmissionList';
import { RatingUpdateList } from '../components/RatingUpdateList';
import { fetchNews, fetchEmissions, fetchRatings } from '../lib/api';
import { News } from '../types/news';
import { Emission } from '../types/emission';
import { Rating } from '../types/rating';

interface HomePageProps {
  news: News[];
  emissions: Emission[];
  ratings: Rating[];
}

const HomePage: NextPage<HomePageProps> = ({ news, emissions, ratings }) => {
  return (
    <div>
      <Head>
        <title>Financial Dashboard</title>
        <meta name="description" content="Latest financial data from Brazilian public companies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Latest Corporate Actions and News</h1>
        <NewsList news={news} />

        <h2>Recent Emissions Announced</h2>
        <EmissionList emissions={emissions} />

        <h2>Latest Rating Updates</h2>
        <RatingUpdateList ratings={ratings} />
      </main>

      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const news = await fetchNews();
  const emissions = await fetchEmissions();
  const ratings = await fetchRatings();

  return {
    props: {
      news,
      emissions,
      ratings,
    },
  };
};

export default HomePage;