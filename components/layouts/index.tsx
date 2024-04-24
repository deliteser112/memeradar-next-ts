import React, { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Home" }: Props) => (
  <div>
    <Header title={title} />
    <main
      style={{
        backgroundImage: 'url("/images/bg-pattern.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
