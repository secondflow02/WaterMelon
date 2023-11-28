//멜론검색창
// 3페어 최하영 김진솔

import styled from 'styled-components';

import serchbarIcon from '../../../imgs/logo/그림1.png';

const HeaderSearchBar = () => {
    return (
        <>
            <Wrapper>
                <Container>
                    <Input placeholder="김나영 '외롭지않아'자켓 촬영장" />
                    <div>
                        <Img src={serchbarIcon} />
                    </div>
                </Container>
            </Wrapper>
        </>
    );
};
export default HeaderSearchBar;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-left: 20px;
`;

const Container = styled.div`
    width: 280px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    border: 2px solid #8ec260;
    border-radius: 35px;
    padding: 4px 8px;
`;

const Input = styled.input`
    height: 18px;
    width: 230px;
    border: none;
    margin-top: 6px;
    margin-left: 8px;
`;

const Img = styled.img`
    &:hover {
        cursor: pointer;
    }
`;
