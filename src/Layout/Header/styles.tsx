import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  background-color: #5383e8;
  border-bottom: 1px solid #4171d6;
`;

export const MenuContainer = styled.ul`
  max-width: 1300px;
  height: 48px;
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const Menu = styled.li`
  margin-right: 24px;
  line-height: 19px;
  font-size: 15px;
  color: #b3cdff;
  padding: 13px 0;
  border-bottom: 3px solid #5383e8;

  &:last-child {
    margin-right: 0;
  }
  &.activeMenu {
    border-bottom: 3px solid #fff;
    color: #fff;
    font-weight: bold;
  }
  //& a {
  //  padding: 10px 0;
  //}
`;
