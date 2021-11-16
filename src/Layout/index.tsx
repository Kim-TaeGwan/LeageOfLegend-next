import React, { FC } from "react";
import Header from "./Header";
import { Container, Wrap } from "./styles";
import { useRouter } from "next/router";

const Layout: FC = ({ children }) => {
  const router = useRouter();
  return (
    <Wrap className={`${router.pathname == "/" ? "main" : ""}`}>
      <Header />
      <Container>{children}</Container>
    </Wrap>
  );
};

export default Layout;
