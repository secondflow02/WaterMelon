import { useState } from 'react';
import styled from 'styled-components';

const ConcertOneBanner = data => {
    const [state, setState] = useState(data);

    console.log(data);
    console.log(data.data[0].title);
    console.log(state.data[0].title);
    return (
        <>
            <OneBannerWrapper>
                <OneBannerImgView></OneBannerImgView>
                <OnBannerContainer>
                    <H3>{data.data[0].title}</H3>
                    <P> {data.subTitle} </P>
                </OnBannerContainer>
            </OneBannerWrapper>
        </>
    );
};

export default ConcertOneBanner;
const OneBannerWrapper = styled.div`
    width: 200px;
    height: 300px;
    background-color: #893465;
`;

const OneBannerImgView = styled.div``;

const OnBannerContainer = styled.div``;

const H3 = styled.h3``;

const P = styled.p``;
