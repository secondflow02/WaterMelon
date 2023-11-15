// 공용 2조

import Charts from "./components/MelonCharts/Charts";
import PopularContentsContainer from "./components/PopularContents/PopularContentsContainer";
import MainBanner from "./components/MainBanner";
import Notice from "./components/Notice";
import styled from "styled-components";
import LatestAlbum from "./components/LatestAlbum/LatestAlbum";
import LargeAlbum from "./components/LargeAlbum";
import LoginBox from "./components/LoginContainer/LoginBox";
import { flexCenter } from "../../styles/common";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";

const MainPage = () => {
    return (
        <>
            <Wrapper>
                <Header />
                <Box>
                    <LatestAlbum />
                    <LargeAlbum />
                    <LoginBox />
                </Box>
                <MainBanner />
                <PopularContentsContainer />
                <Charts />
                <Notice />
                <Footer />
            </Wrapper>
        </>
    );
};
export default MainPage;
const Wrapper = styled.div`
    ${flexCenter};
    flex-direction: column;
`;

const Box = styled.div`
    ${flexCenter};
`;
