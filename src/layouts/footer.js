import styled from "styled-components";
import TopFooter from "./components/footer/TopFooter";
import { flexCenter, flexAlignCenter } from "../styles/common";

// 3페어 최하영, 김진솔
const Footer = () => {
    return (
        <>
            <Wrapper>
                <TopFooter />
                <Container>
                    <InnerContainer>
                        <Ul>
                            <Li>
                                <A>이용약관 |</A>
                            </Li>
                            <Li>
                                <A>위치기반서비스 이용약관 |</A>
                            </Li>
                            <Li>
                                <A>개인정보처리방침 |</A>
                            </Li>
                            <Li>
                                <A>청소년보호정책 | </A>
                            </Li>
                            <Li>
                                <A>제휴/프로모션문의 |</A>
                            </Li>
                            <Li>
                                <A>이메일주소무단수집거부 |</A>
                            </Li>
                            <Li>
                                <A>파트너센터 </A>
                            </Li>
                        </Ul>
                    </InnerContainer>

                    <Div>
                        <P>(주)최하영엔터테인먼트</P>
                        <p>
                            경기도 성남시 분당구 판교역로 221 | 대표이사:
                            최하영,김진솔 | 사업자등록번호: 1110-4427-449476 |
                            통신판매업신고번호 : 010-26232-926766-93414
                            사업자정보확인
                        </p>
                        <p>
                            문의전화 1588-7000(평일 09:00-18:00 유료100,000원 |
                            이메일 test@test.com | 호스팅서비스사업자:
                            (주)최하영엔터테인먼트
                        </p>
                    </Div>
                </Container>
            </Wrapper>
        </>
    );
};
export default Footer;
const Wrapper = styled.div`
    width: 100%;
`;
const Container = styled.div`
    position: absolute;
    bottom: 0;
    ${flexCenter}
    width: 1008px;
    flex-direction: column;
`;
const Ul = styled.ul`
    list-style: none;
    ${flexAlignCenter}
`;
const Li = styled.li``;
const A = styled.a`
    font-size: 14px;
`;
const P = styled.p`
    font-weight: 800;
`;
const Div = styled.div`
    font-size: 12px;
    width: 100%;

    margin-left: 920px;
`;
const InnerContainer = styled.div`
    width: 100%;
    ${flexCenter}
    margin-left: 680px;
`;
