import type { NextPage } from "next";

// layouts
import Layout from "../components/layouts";

import { Banner, MemecoinServices, LatestMemeNews, TrendingList, MemeRadarCulture } from "../components/sections/home";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Banner />
      <MemecoinServices />
      <LatestMemeNews />
      <TrendingList />
      <MemeRadarCulture />
    </Layout>
  );
};

export default Home;
