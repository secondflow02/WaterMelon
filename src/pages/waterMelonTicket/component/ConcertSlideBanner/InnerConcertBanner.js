import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const InnerConcertBanner = data => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const handlePrevSlide = () => {
        setCurrentIndex(
            prev => (prev - 1 + data.data.length) % data.data.length,
        );
    };

    const handleNextSlide = () => {
        setCurrentIndex(prev => (prev + 1) % data.data.length);
    };

    let slideArr = [handlePrevSlide, ...data.data, handleNextSlide];

    // console.log(data.data.length);

    return (
        <>
            {/* 두개를 연결하기 위해 두번 뿌려줌
                더 좋은 방법이 있을듯 하다...
            */}
            {data.data.map((el, index) => (
                <Styled.InnerBannerWrapper>
                    <Styled.OneBannerImgView />
                    <Styled.OneBannerContainer key={index}>
                        <Styled.H3>{el.title}</Styled.H3>
                        <Styled.P> {el.subTitle} </Styled.P>
                    </Styled.OneBannerContainer>
                </Styled.InnerBannerWrapper>
            ))}
            {data.data.map((el, index) => (
                <Styled.InnerBannerWrapper>
                    <Styled.OneBannerImgView />
                    <Styled.OneBannerContainer key={index}>
                        <H3>{el.title}</H3>
                        <P> {el.subTitle} </P>
                    </Styled.OneBannerContainer>
                </Styled.InnerBannerWrapper>
            ))}
        </>
    );
};

export default InnerConcertBanner;

const animation = keyframes`
    0% {
        transform: translateX(480%);
    }
    100% {
        transform: translateX(-720%);
    }
`;

const InnerBannerWrapper = styled.div`
    animation: ${animation} 20s linear infinite;
    width: 200px;
    height: 300px;
    background-color: #893465;
    margin: 0 20px;
    /* position: absolute; */
`;

const OneBannerImgView = styled.div``;

const OneBannerContainer = styled.div``;

const H3 = styled.h3``;

const P = styled.p``;

const Styled = {
    InnerBannerWrapper,
    OneBannerImgView,
    OneBannerContainer,
    H3,
    P,
};
