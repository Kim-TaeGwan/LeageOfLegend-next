import React, { useEffect, useState } from "react";
import MainComponent from "components/MainComponent";
import axios from "axios";

const MainContainer = () => {
  const [data, setData] = useState("");
  const [summonerName, setSummonerName] = useState("hide on bush");
  useEffect(() => {
    axios
      .get(
        `/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => console.log("에러 : ", error));
    console.log(process.env.NEXT_PUBLIC_API_KEY);
  }, [summonerName]);
  return (
    <>
      <MainComponent
      // setSummonerName={setSummonerName}
      />
      <div>{data}</div>
    </>
  );
};

export default MainContainer;
