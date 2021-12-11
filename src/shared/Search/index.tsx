import React, { useCallback, useState } from "react";
import Image from "next/image";
import ggIcon from "assets/images/ggButton.png";
import { SearchContainer, SearchInput, SummonerSearch } from "./styles";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { useRouter } from "next/router";

const Search = () => {
  const [summonerName, onChangeSummonerName, setSummonerName] = useInput("");

  const router = useRouter();

  const handleSummoner = useCallback(
    (e) => {
      e.preventDefault();
      summonerName
        ? axios
            .get(
              `/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
            )
            .then((response) => {
              console.log("소환사 검색 성공 : ", response.data);
              router.push({
                pathname: "/summoner/userName/[nickname]",
                query: {
                  nickname: summonerName,
                  encryptedSummonerId: response.data.id,
                },
              });
              setSummonerName("");
            })
            .catch((error) => {
              // if (error.response.status === 404) {
              router.push({
                pathname: "/summoner/userName/[nickname]",
                query: {
                  nickname: summonerName,
                },
              });
              // }
              console.log("에러 : ", error);
            })
        : router.push(`/summoner/userName`);
    },
    [summonerName, setSummonerName, router]
  );

  return (
    <SearchContainer onSubmit={handleSummoner}>
      <SearchInput
        placeholder="소환사명, 소환사명, ..."
        value={summonerName}
        onChange={onChangeSummonerName}
      />
      <SummonerSearch type="submit">
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
