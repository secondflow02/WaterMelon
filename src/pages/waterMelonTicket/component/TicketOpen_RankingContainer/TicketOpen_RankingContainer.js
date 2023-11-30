import styled from 'styled-components';
import { flexCenter } from 'styles/common';

import ConcertRanking from './ConcertRanking';
import ForU from './ForU';
import TicketOpenOneNews from './TicketOpenOneNews';

//티켓 오픈소식 ~랭킹 전체 컴포넌트 모아주는 곳
const TicketOpen_RankingContainer = () => {
    return (
        <>
            <Styled.Wrapper>
                <TicketOpenOneNews />
                <Styled.ForUBox>
                    <ForU />
                </Styled.ForUBox>
                <Styled.RankingBox>
                    <ConcertRanking />
                </Styled.RankingBox>
            </Styled.Wrapper>
        </>
    );
};
export default TicketOpen_RankingContainer;
const Wrapper = styled.div`
    width: 1008px;
    ${flexCenter}
`;
const TicketOpenBox = styled.div``;
const ForUBox = styled.div``;
const RankingBox = styled.div``;
const Styled = {
    Wrapper,
    TicketOpenBox,
    ForUBox,
    RankingBox,
};
