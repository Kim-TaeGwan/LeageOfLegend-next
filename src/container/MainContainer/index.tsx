import React, { useEffect, useState } from "react";
import MainComponent from "components/MainComponent";
import axios from "axios";

const MainContainer = () => {
  const [data, setData] = useState("");
  const [summonerName, setSummonerName] = useState("");
  useEffect(() => {
    axios
      .get(
        `/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => console.log("에러 : ", error));
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
