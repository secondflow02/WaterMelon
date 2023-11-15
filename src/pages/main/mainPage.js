// 공용 2조

import Charts from "./components/MelonCharts/Charts";
import PopularContentsContainer from "./components/PopularContents/PopularContentsContainer";
import MainBanner from "./components/MainBanner";
import Notice from "./components/Notice";
import styled from "styled-components";
import LatestAlbum from "./components/LatestAlbum/LatestAlbum";
import LargeAlbum from "./components/LargeAlbum";
import LoginBox from "./components/LoginContainer/LoginBox";

const MainPage = () => {
    return (
        <>
       <Styled.Wrapper>
      <LatestAlbum />
      <LargeAlbum />
      <LoginBox />
    </Styled.Wrapper>
            <MainBanner />
            <PopularContentsContainer />
            <Charts />
            <Notice />
        </>
    );
};
export default MainPage;
const Wrapper = styled.div`
  display: flex;
`;

const Styled = {
  Wrapper,
};
