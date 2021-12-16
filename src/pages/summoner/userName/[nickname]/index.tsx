import React from "react";
import Layout from "Layout";
import { useRouter } from "next/router";
import SummonerSearchComponent from "components/Summoner/SearchComponent";
import History from "components/History";

const Nickname = () => {
  const router = useRouter();
  const { nickname, encryptedSummonerId } = router.query;
  return (
    <Layout>
      {encryptedSummonerId ? (
        <History
          nickname={nickname}
          encryptedSummonerId={encryptedSummonerId}
        />
      ) : (
        <SummonerSearchComponent errorNickname />
      )}
    </Layout>
  );
};

export default Nickname;
