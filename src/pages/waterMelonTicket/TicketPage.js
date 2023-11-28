import styled from 'styled-components';
import { flexCenter } from 'styles/common';

import SildeConcertBanner from './component/ConcertSlideBanner/SlideConcertBanner';
import SoloConcertBanner from './component/SoloConcertBanner';
import TicketOpen_RankingContainer from './component/TicketOpen_RankingContainer/TicketOpen_RankingContainer';
import WaterMelonTicketPick from './component/WatermelonTicketPick';

const Ticketpage = () => {
    return (
        <>
            <div>waterMelonTicket</div>
            <TicketWrapper>
                <SlideBannerDiv>
                    <TopSildeBanner></TopSildeBanner>
                    <BottomSlideBanner>
                        <SildeConcertBanner />
                    </BottomSlideBanner>
                </SlideBannerDiv>
                <SoloConcertBanner />
                <TicketOpen_RankingContainer />
                <PickContainer>
                    <WaterMelonTicketPick />
                </PickContainer>
            </TicketWrapper>
        </>
    );
};
export default Ticketpage;

const TicketWrapper = styled.div`
    ${flexCenter}
    flex-direction: column;
`;

const SlideBannerDiv = styled.div``;

const TopSildeBanner = styled.div``;

const BottomSlideBanner = styled.div``;

const PickContainer = styled.div`
    width: 1008px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;
