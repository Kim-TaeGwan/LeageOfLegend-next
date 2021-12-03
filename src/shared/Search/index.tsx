import React, { useCallback, useState } from "react";
import Image from "next/image";
import ggIcon from "assets/images/ggButton.png";
import { SearchContainer, SearchInput, SummonerSearch } from "./styles";
import useInput from "../../hooks/useInput";
import axios from "axios";

const Search = () => {
  const [data, setData] = useState(null);
  const [summonerName, onChangeSummonerName, setSummonerName] = useInput("");

  const handleSummoner = useCallback(
    (e) => {
      e.preventDefault();
      axios
        .get(
          `/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        )
        .then((response) => {
          console.log("성공 : ", response.data);
          setSummonerName("");
          // setData(response.data);
        })
        .catch((error) => console.log("에러 : ", error));
    },
    [summonerName, setSummonerName]
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
