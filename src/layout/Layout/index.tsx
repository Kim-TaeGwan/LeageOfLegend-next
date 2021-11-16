import React, { FC } from "react";
import { Wrap } from "./styles";

const Layout: FC = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default Layout;
