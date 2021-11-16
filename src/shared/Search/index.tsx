import React from "react";
import Image from "next/image";
// import SummonerSearchIcon from "assets/images/iconImage.png";
import LogoImg from "assets/images/logo.png";
import { SearchContainer, SearchInput, SummonerSearch } from "./styles";

const Search = () => {
  return (
    <SearchContainer>
      <SearchInput placeholder="소환사명, 소환사명, ..." />
      <SummonerSearch>
        <Image
          src={LogoImg}
          className="ggIcon"
          alt="ggIcon"
          width={50}
          height={30}
        />
      </SummonerSearch>
    </SearchContainer>
  );
};

export default Search;
