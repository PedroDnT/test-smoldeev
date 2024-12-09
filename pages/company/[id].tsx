import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Company } from '../../types/company';
import { News } from '../../types/news';
import { Emission } from '../../types/emission';
import { Rating } from '../../types/rating';
import { fetchCompanyData, fetchNews, fetchEmissions, fetchRatings } from '../../lib/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CompanyWidget from '../../components/CompanyWidget';
import NewsList from '../../components/NewsList';
import EmissionList from '../../components/EmissionList';
import RatingUpdateList from '../../components/RatingUpdateList';

interface CompanyPageProps {
  company: Company;
  news: News[];
  emissions: Emission[];
  ratings: Rating[];
}

const CompanyPage: NextPage<CompanyPageProps> = ({ company, news, emissions, ratings }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>{company.name} - Company Details</title>
      </Head>
      <Header />
      <main>
        <CompanyWidget company={company} />
        <NewsList news={news} />
        <EmissionList emissions={emissions} />
        <RatingUpdateList ratings={ratings} />
      </main>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const company = await fetchCompanyData(id as string);
  const news = await fetchNews(id as string);
  const emissions = await fetchEmissions(id as string);
  const ratings = await fetchRatings(id as string);

  return {
    props: {
      company,
      news,
      emissions,
      ratings,
    },
  };
};

export default CompanyPage;