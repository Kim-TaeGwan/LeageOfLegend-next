import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./Profile";

const History = ({ nickname, encryptedSummonerId }: any) => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    axios
      .get(
        `/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((response) => {
        console.log("소환사 정보 : ", response.data);
        setData(response.data[0]);
      })
      .catch((error) => {
        console.error("에러   : ", error);
      });
  }, [encryptedSummonerId]);

  console.log(data);
  return (
    <div>
      <div>Nickname : {nickname}</div>
      <div>encryptedSummonerId : {encryptedSummonerId}</div>
      <Profile
        tier={data.tier}
        wins={data.wins}
        losses={data.losses}
        leaguePoints={data.leaguePoints}
        queueType={data.queueType}
      />
    </div>
  );
};

export default History;
