// 공용 2조
import styled from 'styled-components';
import { flexCenter } from 'styles/common';

import LargeAlbum from './components/LargeAlbum';
import LatestAlbum from './components/LatestAlbum/LatestAlbum';
import LoginBox from './components/LoginContainer/LoginBox';
import MainBanner from './components/MainBanner';
import Charts from './components/MelonCharts/Charts';
import Notice from './components/Notice';
import PopularContentsContainer from './components/PopularContents/PopularContentsContainer';

const MainPage = () => {
    return (
        <>
            <Wrapper>
                <Box>
                    <LatestAlbum />
                    <LargeAlbum />
                    <LoginBox />
                </Box>
                <MainBanner />
                <Box>
                    <PopularContentsContainer />
                    <Charts />
                </Box>
                <Notice />
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
