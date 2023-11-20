import styled from 'styled-components';

import ConcertSlideBanner from './component/ConcertSlideBanner/ConcertSlideBanner';

const Ticketpage = () => {
    return (
        <>
            <div>waterMelonTicket</div>
            <TicketWrapper>
                <SlideBannerDiv>
                    <TopSildeBanner></TopSildeBanner>
                    <BottomSlideBanner>
                        <ConcertSlideBanner />
                    </BottomSlideBanner>
                </SlideBannerDiv>
            </TicketWrapper>
        </>
    );
};
export default Ticketpage;

const TicketWrapper = styled.div``;

const SlideBannerDiv = styled.div``;

const TopSildeBanner = styled.div``;

const BottomSlideBanner = styled.div``;
