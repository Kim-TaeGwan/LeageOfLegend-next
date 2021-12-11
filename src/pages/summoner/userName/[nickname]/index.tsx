import React from "react";
import Layout from "Layout";
import { useRouter } from "next/router";
import SummonerSearchComponent from "components/Summoner/SearchComponent";

const Nickname = () => {
  const router = useRouter();
  const { nickname, encryptedSummonerId } = router.query;
  return (
    <Layout>
      {encryptedSummonerId ? (
        <>
          <div>Nickname : {nickname}</div>
          <div>encryptedSummonerId : {encryptedSummonerId}</div>
        </>
      ) : (
        <SummonerSearchComponent errorNickname />
      )}
    </Layout>
  );
};

export default Nickname;
