import styled from 'styled-components';
import { flexAlignCenter, flexCenter } from 'styles/common';

//inner티켓오픈소식 뉴스 한개
const TicketOpenOneNews = () => {
    return (
        <>
            <Styled.Wrapper>
                <Styled.Container>
                    <Styled.H2>티켓오픈소식</Styled.H2>
                    <Styled.Ul>
                        <Styled.Li>
                            <Styled.A>더보기&gt;</Styled.A>
                        </Styled.Li>
                    </Styled.Ul>
                </Styled.Container>
                <Styled.TicketOpenBox>
                    <Styled.Ul>
                        <Styled.Li>
                            <Styled.A href="#">
                                &lt;베르사유의 장미&gt; 뮤지컬콘서트 티켓오픈
                                안내
                            </Styled.A>
                            <Styled.P>[오픈] 30.11.14(화)14:00</Styled.P>
                        </Styled.Li>
                        <Styled.Li>
                            <Span>단독판매</Span>
                            <Styled.A href="#">
                                배기성30주년기념콘서트 내생에 봄날은 티켓오픈
                                안내
                            </Styled.A>
                            <Styled.P>[오픈] 28.11.16(목)14:00</Styled.P>
                        </Styled.Li>
                        <Styled.Li>
                            <Span>단독판매</Span>
                            <Styled.A href="#">
                                2023 루나콘서트 &lt;THE LOVE AFFAIR...&gt;
                            </Styled.A>
                            <Styled.P>[오픈] 29.11.22(월)14:00</Styled.P>
                        </Styled.Li>
                        <Styled.Li>
                            <Span>단독판매</Span>
                            <Styled.A href="#">
                                &lt;고요한 밤&gt; with HEYMEN & OAH !
                            </Styled.A>
                            <Styled.P>[오픈] 299.11.22(수)14:00</Styled.P>
                        </Styled.Li>
                    </Styled.Ul>
                </Styled.TicketOpenBox>
            </Styled.Wrapper>
        </>
    );
};
export default TicketOpenOneNews;
const Wrapper = styled.div`
    display: inline;
    margin: 0px;
`;
const TicketOpenBox = styled.div`
    border: 1px solid #eee;
    height: 390px;
    width: 278px;
    padding: 0 20px;
`;
const Container = styled.div`
    ${flexCenter}
    justify-content: space-between;
`;
const H2 = styled.h2``;
const Ul = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0;
    margin: 0;
`;
const Li = styled.li`
    list-style: none;
    padding: 5px 0px;
`;
const Span = styled.span`
    display: inline-block;
    margin-right: 6px;
    font-size: 12px;
    padding: 0 5px;
    height: 20px;
    ${flexAlignCenter}
    color: #fff;
    background-color: green;
    width: 50px;
`;
const A = styled.a`
    ${flexAlignCenter}
    text-decoration: none;
    color: #666;
    font-size: 14px;

    cursor: pointer;
`;
const P = styled.p`
    font-size: 12px;
`;
const Styled = {
    Wrapper,
    Container,
    TicketOpenBox,
    H2,
    Ul,
    Li,
    A,
    P,
};
