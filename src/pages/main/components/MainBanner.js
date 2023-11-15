//MMA20203 top100메인 배너임^^^^^^^^^^^^^^^^^^^^^^^^^^

// 3페어 최하영 김진솔

import styled from "styled-components";
import bannerLogo from "../../../imgs/logo/59.jpg";
import { flexCenter } from "../../../styles/common";

const MainBanner = () => {
    return (
        <>
            <ImgContainer>
                <BannerWrapper>
                    <Img src={bannerLogo} />
                </BannerWrapper>
            </ImgContainer>
        </>
    );
};
export default MainBanner;

const ImgContainer = styled.div`
    /* width: 100%;
    ${flexCenter} */
    margin-top: 40px;
`;

const BannerWrapper = styled.div`
    width: 1008px;
    height: 70px;
    &:hover {
        cursor: pointer;
    }
`;

const Img = styled.img`
    width: 1008px;
    height: 70px;
`;
