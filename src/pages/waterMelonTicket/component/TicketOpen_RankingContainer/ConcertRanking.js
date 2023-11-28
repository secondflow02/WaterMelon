import styled from 'styled-components';
import { flexCenter } from 'styles/common';

//콘서트/페스티벌 랭킹뿌려주는곳 map
const ConcertRanking = () => {
    return (
        <>
            <Styled.Wrapper>
                <Styled.RankingBox>
                    <Styled.H2>랭킹</Styled.H2>
                    <Styled.Ul>
                        <Styled.Li>
                            <Styled.A>더보기</Styled.A>
                        </Styled.Li>
                    </Styled.Ul>
                </Styled.RankingBox>
            </Styled.Wrapper>
        </>
    );
};
export default ConcertRanking;
const Wrapper = styled.div``;
const RankingBox = styled.div`
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
    RankingBox,
    H2,
    Ul,
    Li,
    A,
};
