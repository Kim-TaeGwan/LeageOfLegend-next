import React, { VFC } from "react";

interface Props {
  tier: string;
  wins: number;
  losses: number;
  leaguePoints: number;
  queueType: string;
}
const Profile: VFC<Props> = ({
  tier,
  wins,
  losses,
  leaguePoints,
  queueType,
}) => {
  return (
    <div>
      <div>{tier}</div>
      <div>{wins}</div>
      <div>{losses}</div>
      <div>{leaguePoints}</div>
      <div>{queueType}</div>
    </div>
  );
};

export default Profile;
