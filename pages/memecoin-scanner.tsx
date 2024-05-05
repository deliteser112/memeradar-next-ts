import type { NextPage } from "next";

// layouts
import Layout from "../components/layouts";

import { ScannerTable } from "../components/sections/memeconin-scanner";

const MemeCoinScanner: NextPage = () => {
  return (
    <Layout title="Scanner">
      <ScannerTable />
    </Layout>
  );
};

export default MemeCoinScanner;
