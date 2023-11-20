import { useState } from 'react';
import styled from 'styled-components';

import ticketData from '../../../../mock/ticketData.json';
import ConcertOneBanner from './ConcertOneBanner';

const ConcertSlideBanner = () => {
    console.log(ticketData.ticketdata);

    const [state, setState] = useState(ticketData.ticketdata);

    return (
        <>
            <ConcertSlideWrapper>
                <ConcertOneBanner data={state} />
            </ConcertSlideWrapper>
        </>
    );
};
export default ConcertSlideBanner;

const ConcertSlideWrapper = styled.div``;
