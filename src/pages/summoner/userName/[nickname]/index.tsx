import React from "react";
import Layout from "Layout";
import { useRouter } from "next/router";

const Nickname = () => {
  const router = useRouter();
  const { nickname, encryptedSummonerId } = router.query;
  return (
    <Layout>
      <div>Nickname : {nickname}</div>
      <div>encryptedSummonerId : {encryptedSummonerId}</div>
    </Layout>
  );
};

export default Nickname;
