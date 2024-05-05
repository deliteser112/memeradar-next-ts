import type { NextPage } from "next";

// layouts
import Layout from "../components/layouts";

import { Banner, MemecoinServices, LatestMemeNews, TrendingList, Roadmap, MemeRadarCulture } from "../components/sections/home";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Banner />
      <MemecoinServices />
      <LatestMemeNews />
      <TrendingList />
      <Roadmap />
      <MemeRadarCulture />
    </Layout>
  );
};

export default Home;
