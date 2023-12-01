import styled from 'styled-components';
import { flexAlignCenter, flexCenter } from 'styles/common';

import ticketRanking from '../../Mocks/watermelonTicketRanking.json';

//콘서트/페스티벌 랭킹뿌려주는곳 map
const ConcertRanking = () => {
    return (
        <>
            <Styled.Wrapper>
                <Styled.Container>
                    <Styled.H2>랭킹</Styled.H2>
                    <Styled.Ul>
                        <Styled.Li>
                            <Styled.A>더보기&gt;</Styled.A>
                        </Styled.Li>
                    </Styled.Ul>
                </Styled.Container>

                <Styled.RankingBox>
                    <Styled.ButtonContainer>
                        <Styled.Div>
                            <div>콘서트/페스티벌</div>
                            <div>뮤지컬/연극</div>
                            <div>전시/클래식/기타</div>
                        </Styled.Div>
                    </Styled.ButtonContainer>
                    <div>
                        {ticketRanking.watermelonrankingdata.map(
                            (el, index) => (
                                <Styled.Div>
                                    <div>{el.ranking}</div>
                                    <div>
                                        {' '}
                                        <Styled.Img src={el.image}></Styled.Img>
                                    </div>
                                </Styled.Div>
                            ),
                        )}{' '}
                    </div>
                </Styled.RankingBox>
            </Styled.Wrapper>
        </>
    );
};
export default ConcertRanking;
const Wrapper = styled.div`
    width: 310px;
    margin: 0 10px;
`;
const Container = styled.div`
    ${flexCenter}
    justify-content: space-between;
`;
const ButtonContainer = styled.div``;
const RankingBox = styled.div`
    ${flexCenter}
    border: 1px solid #eee;
    height: 390px;
    width: 278px;
    padding: 0 20px;
`;
const Div = styled.div`
    ${flexCenter}
`;
const Img = styled.img`
    width: 100px;
`;

const H2 = styled.h2``;
const Ul = styled.ul``;
const Li = styled.li`
    text-decoration: none;
    list-style: none;
`;
const A = styled.a`
    ${flexAlignCenter}
    text-decoration: none;
    color: #666;
    font-size: 14px;

    cursor: pointer;
`;
const Styled = {
    Wrapper,
    Container,
    ButtonContainer,
    RankingBox,
    Div,
    Img,
    H2,
    Ul,
    Li,
    A,
};
