// 공용 2조
import styled from "styled-components";
import { useState } from "react";
import LatestAlbum from "./components/LatestAlbum/LatestAlbum";
import LargeAlbum from "./components/LargeAlbum";
import LoginBox from "./components/LoginContainer/LoginBox";
// 컴포넌트 함수는 앞글자가 반드시 대문자
const MainPage = () => {
  return (
    <Styled.Wrapper>
      <LatestAlbum />
      <LargeAlbum />
      <LoginBox />
    </Styled.Wrapper>
  );
};
export default MainPage;

const Wrapper = styled.div`
  display: flex;
`;

const Styled = {
  Wrapper,
};
