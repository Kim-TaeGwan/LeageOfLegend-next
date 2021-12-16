import styled from "@emotion/styled";

export const SummonerSearch = styled.div`
  padding-top: 104px;
  text-align: center;
`;
export const Header = styled.div`
  & h2 {
    color: #242929;
    font-size: 26px;
    margin-bottom: 10px;
  }
  & h3 {
    color: #555e5e;
    font-size: 18px;
  }
  &::after {
    display: block;
    margin: 30px auto;
    content: "\\00a0";
    border-bottom: 1px solid #dbdede;
    width: 200px;
    height: 0;
  }
  &.left {
    text-align: left;
  }
`;

export const Logo = styled.div`
  margin-bottom: 42px;
`;

export const Content = styled.div`
  width: 500px;
  margin: 0 auto;
  text-align: left;
`;

export const List = styled.ul`
  margin: 30px 0;
`;

export const Item = styled.li`
  margin: 20px 0;
  color: #555e5e;
  font-size: 15px;
`;
