import React from "react";
import Image from "next/image";
import ggIcon from "assets/images/ggButton.png";
import { SearchContainer, SearchInput, SummonerSearch } from "./styles";

const Search = () => {
  return (
    <SearchContainer>
      <SearchInput placeholder="소환사명, 소환사명, ..." />
      <SummonerSearch>
        <Image
          src={ggIcon}
          alt="search icon"
          width={50}
          height={30}
          objectFit="cover"
        />
      </SummonerSearch>
    </SearchContainer>
  );
};

export default Search;
