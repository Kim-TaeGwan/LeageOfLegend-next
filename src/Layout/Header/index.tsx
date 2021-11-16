import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { HeaderContainer, Menu, MenuContainer } from "./styles";

const Header = () => {
  const router = useRouter();
  return (
    <HeaderContainer>
      <MenuContainer>
        <Menu className={`${router.pathname == "/" ? "activeMenu" : ""}`}>
          <Link href="/">소환사 검색</Link>
        </Menu>
        <Menu
          className={`${router.pathname == "/champion" ? "activeMenu" : ""}`}
        >
          <Link href="/champion">챔피언 분석</Link>
        </Menu>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
