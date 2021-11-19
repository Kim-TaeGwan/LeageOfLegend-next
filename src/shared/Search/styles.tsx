import styled from "@emotion/styled";

export const SearchContainer = styled.form`
  text-align: center;
  max-width: 624px;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 19%);
  margin: 0 auto 30px auto;
  padding: 10px 18px;
  box-sizing: border-box;
  border-radius: 2px;
`;

export const SearchInput = styled.input`
  width: calc(100% - 50px);
  background: none;
  border: none;
  line-height: 17px;
  font-size: 14px;
  color: #9b9b9b;
  outline: none;
  display: inline-block;
  vertical-align: middle;
`;

export const SummonerSearch = styled.button`
  width: 50px;
  //background-position: -90 px -797px;
  //width: 50px;
  height: 30px;
  background-color: inherit;
  border: none;
  display: inline-block;
  vertical-align: middle;
  & .ggIcon {
    background-position: -90 px -797 px;
  }
  cursor: pointer;
`;
