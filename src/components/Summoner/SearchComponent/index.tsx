import React from "react";

import Image from "next/image";

import LogoImg from "assets/images/searchBanner.png";

import { Content, Header, Item, List, Logo, SummonerSearch } from "./styled";
import Search from "shared/Search";

const SummonerSearchComponent = () => {
  return (
    <SummonerSearch>
      <Header>
        <Logo>
          <Image src={LogoImg} alt="LogoImg" width={350} height={143} />
        </Logo>
        <h2>OP.GG 소환사 검색 기능입니다.</h2>
        <Search />
      </Header>
      <Content>
        <List>
          <Item>소환사의 시즌 1 ~ 12 전적기록을 알 수 있습니다.</Item>
          <Item>
            솔로랭크, 팀랭크, 노말게임등의 정리된 전적을 자세하게 볼 수
            있습니다.
          </Item>
          <Item>
            소환사의 플레이한 챔피언 평점과 KDA, 승률등을 알 수 있습니다.
          </Item>
          <Item>
            리플레이를 보거나 녹화를 할 수 있습니다. (&apos;현재 전투 정보
            열기&#39; 버튼 클릭 시)
          </Item>
        </List>
      </Content>
    </SummonerSearch>
  );
};

export default SummonerSearchComponent;
