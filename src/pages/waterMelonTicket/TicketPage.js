import styled from 'styled-components';

import SildeConcertBanner from './component/ConcertSlideBanner/SlideConcertBanner';

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
            </TicketWrapper>
        </>
    );
};
export default Ticketpage;

const TicketWrapper = styled.div``;

const SlideBannerDiv = styled.div``;

const TopSildeBanner = styled.div``;

const BottomSlideBanner = styled.div``;
