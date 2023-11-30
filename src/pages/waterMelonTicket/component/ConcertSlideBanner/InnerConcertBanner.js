import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { flexCenter } from 'styles/common';

const InnerConcertBanner = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [count, setCount] = useState(0);
    const [visibleData, setVisibleData] = useState(data.ticketdata);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % visibleData.length);

            if (currentIndex === currentIndex) {
                data.ticketdata.push(data.ticketdata[count]);
                setCount(count + 1);
                if (count === 9) {
                    setCount(0);
                }
            }

            console.log(visibleData);
        }, 4000);
        return () => clearInterval(interval);
    }, [visibleData.length]);

    return (
        <>
            <Styled.Wrapper>
                {visibleData.map((el, index) => (
                    <Styled.InnerBannerContainer
                        key={index}
                        style={{
                            transform: `translateX(${
                                index - currentIndex * 50
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
    width: 100vw;
    ${flexCenter};
    overflow: hidden;
`;

const InnerBannerContainer = styled.div`
    display: flex;
    transition: 0.5s ease;
`;

const InnerBannerWrapper = styled.div`
    width: 250px;
    height: 350px;
    background-color: #c9c9c9;
    margin: 0 4px;
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
