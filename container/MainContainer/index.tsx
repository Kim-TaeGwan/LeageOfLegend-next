import React, { useEffect, useState } from "react";
import MainComponent from "../../components/MainComponent";
import axios from "axios";

const MainContainer = () => {
  const [list, setList] = useState({});
  useEffect(() => {
    axios
      .get(
        `/lol/summoner/v4/summoners/by-name/%ED%88%AC%EB%AA%85%EC%99%80%EB%93%9C%EB%A7%8C%EB%B0%95%EB%8A%94%EB%8B%A4?api_key=RGAPI-e8a4c6fb-01b1-451d-8cda-e525be253217`
      )
      .then((response) => console.log(response))
      .catch((error) => console.log("에러 : ", error));
  }, []);
  return <MainComponent />;
};

export default MainContainer;
