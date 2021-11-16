import React, { FC } from "react";
import Header from "./Header";
import { Wrap } from "./styles";

const Layout: FC = ({ children }) => {
  return (
    <Wrap>
      <Header />
      {children}
    </Wrap>
  );
};

export default Layout;
