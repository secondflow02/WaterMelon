//김진솔 입대전 마지막 단독 콘서트배너임

//김진솔 입대전 마지막 단독 콘서트배너임

import styled from 'styled-components';
import { flexCenter } from 'styles/common';

import photo10 from '../../../imgs/album/10.PNG';

const SoloConcertBanner = () => {
    return (
        <>
            <Container>
                <Img src={photo10} />
            </Container>
        </>
    );
};

export default SoloConcertBanner;

const Container = styled.div`
    width: 100%;
    ${flexCenter}
`;
const Img = styled.img`
    width: 1008px;
    height: 80px;
    &:hover {
        cursor: pointer;
    }
`;
