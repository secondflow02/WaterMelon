import styled from 'styled-components';
import { flexCenter } from 'styles/common';

//inner티켓오픈소식 뉴스 한개
const TicketOpenOneNews = () => {
    return (
        <>
            <Styled.Wrapper>
                <Styled.Container>
                    <Styled.H2>티켓오픈소식</Styled.H2>
                    <Styled.Ul>
                        <Styled.Li>
                            <Styled.A>더보기</Styled.A>
                        </Styled.Li>
                    </Styled.Ul>
                </Styled.Container>
                <Styled.TicketOpenBox>
                    <Ul>
                        <Li>
                            <A href="#">
                                &lt;베르사유의 장미&gt; 뮤지컬콘서트 티켓오픈
                                안내
                            </A>
                        </Li>
                    </Ul>
                </Styled.TicketOpenBox>
            </Styled.Wrapper>
        </>
    );
};
export default TicketOpenOneNews;
const Wrapper = styled.div`
    margin-right: 300px;
`;
const TicketOpenBox = styled.div`
    border: 1px solid #000;
`;
const Container = styled.div`
    ${flexCenter}
`;
const H2 = styled.h2``;
const Ul = styled.ul``;
const Li = styled.li`
    text-decoration: none;
    list-style: none;
`;
const A = styled.a``;
const Styled = {
    Wrapper,
    Container,
    TicketOpenBox,
    H2,
    Ul,
    Li,
    A,
};
