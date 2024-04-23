import React, { ReactNode } from "react";

import Header from "./Header";
import Footer from './Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Home" }: Props) => (
  <div>
    <Header title={title} />
    <main className="max-w-[1200px] mx-auto my-10">{children}</main>
    <Footer />
  </div>
);

export default Layout;
