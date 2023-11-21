import { useEffect, useState } from 'react';
import styled from 'styled-components';

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

    // console.log(data.data.length);

    return (
        <>
            {data.data.map((el, index) => (
                <InnerBannerWrapper>
                    <OneBannerImgView></OneBannerImgView>
                    <OnBannerContainer key={index}>
                        <H3>{el.title}</H3>
                        <P> {el.subTitle} </P>
                    </OnBannerContainer>
                </InnerBannerWrapper>
            ))}
        </>
    );
};

export default InnerConcertBanner;
const InnerBannerWrapper = styled.div`
    width: 200px;
    height: 300px;
    background-color: #893465;
    margin: 0 20px;
    position: absolute;
    opacity: 0;
`;

const OneBannerImgView = styled.div``;

const OnBannerContainer = styled.div``;

const H3 = styled.h3``;

const P = styled.p``;
