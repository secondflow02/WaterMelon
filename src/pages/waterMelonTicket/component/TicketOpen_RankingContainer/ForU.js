//ForU컴포넌트

import photo1 from 'imgs/watermelonTicketImg/foru.png';
import styled from 'styled-components';
import { flexCenter } from 'styles/common';

//안에 버튼 박아야함
const ForU = () => {
    return (
        <>
            <Styled.Wrapper>
                <Styled.Container>
                    <Styled.H2>ForU</Styled.H2>
                    <Styled.Ul>
                        <Styled.Li>
                            <Styled.A>더보기&gt;</Styled.A>
                        </Styled.Li>
                    </Styled.Ul>
                </Styled.Container>
                <Styled.ForUBox>
                    <Styled.TextContainer>
                        <Styled.Span>당신을 위한 맞춤 공연</Styled.Span>
                        <br></br>
                        <Styled.Strong>나에게 딱 맞는</Styled.Strong>
                        <Styled.Span1>공연 추천</Styled.Span1>
                        <Styled.Strong>과</Styled.Strong>
                        <br></br>
                        <Styled.Span1>공연 스케줄 관리</Styled.Span1>
                        <Styled.Strong>를 시작해보세요!</Styled.Strong>
                    </Styled.TextContainer>

                    <Styled.ImgContainer>
                        <Styled.Img src={photo1} />
                    </Styled.ImgContainer>
                    <Styled.Buttoncontainer>
                        <Styled.Abutton href="#">ForU 시작하기</Styled.Abutton>
                    </Styled.Buttoncontainer>
                </Styled.ForUBox>
            </Styled.Wrapper>
        </>
    );
};
export default ForU;
const Wrapper = styled.div`
    width: 300px;
    margin: 0 10px;
`;
const ForUBox = styled.div`
    border: 1px solid #eee;
    height: 390px;
    width: 278px;
    padding: 0 20px;
`;
const Container = styled.div`
    ${flexCenter}
    justify-content: space-between;
`;
const TextContainer = styled.div`
    text-align: center;
    padding-top: 30px;
`;
const Span = styled.span`
    text-align: center;
    color: #333;
    font-weight: 600;
    font-size: 18px;
`;
const Span1 = styled.span``;
const Strong = styled.strong``;
const H2 = styled.h2``;
const Ul = styled.ul``;
const Li = styled.li`
    text-decoration: none;
    list-style: none;
`;
const A = styled.a`
    ${flexCenter}
    text-decoration: none;
    color: #666;
    font-size: 14px;

    cursor: pointer;
`;
const ImgContainer = styled.div`
    ${flexCenter}
`;

const Img = styled.img`
    width: 260px;
`;
const Buttoncontainer = styled.div`
    ${flexCenter}
    height: 45px;
    width: 100px;
    text-align: center;
    border: 2px solid #000;
`;
const Abutton = styled.a`
    color: #333;
    font-size: 15px;
    text-decoration: none;
`;

const Styled = {
    Wrapper,
    Container,
    TextContainer,
    Strong,
    ImgContainer,
    ForUBox,
    Img,
    Buttoncontainer,
    Abutton,
    Span,
    Span1,
    H2,
    Ul,
    Li,
    A,
};
