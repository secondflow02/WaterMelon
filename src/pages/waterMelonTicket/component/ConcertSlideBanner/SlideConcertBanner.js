import styled from 'styled-components';
import { flexCenter } from 'styles/common';

import ticketData from '../../../../mock/ticketData.json';
import InnerConcertBanner from './InnerConcertBanner';

const SildeConcertBanner = () => {
    console.log(ticketData.ticketdata);

    return (
        <>
            <ConcertSlideWrapper>
                <InnerConcertBanner data={ticketData} />
            </ConcertSlideWrapper>
        </>
    );
};
export default SildeConcertBanner;

const ConcertSlideWrapper = styled.div`
    ${flexCenter};
`;
