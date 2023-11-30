import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { flexCenter } from 'styles/common';

const InnerConcertBanner = ({ data }) => {
    const copyData = [...data, ...data];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % data.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [currentIndex, data.length]);

    return (
        <>
            <Styled.Wrapper>
                {copyData.map((el, index) => (
                    <Styled.InnerBannerContainer
                        key={index}
                        style={{
                            transform: `translateX(${
                                index - currentIndex * 100
                            }%)`,
                        }}
                    >
                        <Styled.InnerBannerWrapper>
                            <Styled.OneBannerImgView />
                            <Styled.OneBannerContainer>
                                <Styled.H3>{el.title}</Styled.H3>
                                <Styled.P>{el.subTitle}</Styled.P>
                            </Styled.OneBannerContainer>
                        </Styled.InnerBannerWrapper>
                    </Styled.InnerBannerContainer>
                ))}
            </Styled.Wrapper>
        </>
    );
};

export default InnerConcertBanner;

const Wrapper = styled.div`
    ${flexCenter};
    overflow: hidden;
`;

const InnerBannerContainer = styled.div`
    display: flex;
    transition: 0.5s ease;
`;

const InnerBannerWrapper = styled.div`
    width: 200px;
    height: 300px;
    background-color: #c9c9c9;
`;

const OneBannerImgView = styled.div``;

const OneBannerContainer = styled.div``;

const H3 = styled.h3``;

const P = styled.p``;

const Styled = {
    Wrapper,
    InnerBannerContainer,
    InnerBannerWrapper,
    OneBannerImgView,
    OneBannerContainer,
    H3,
    P,
};
