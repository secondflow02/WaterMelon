import HeaderSearchBar from 'layouts/components/header/HeaderSerchBar';
import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

import TicketTopHeader from './TicketTopHeader';
import TicketTopHeaderSideBanner from './TicketTopHeaderSideBanner';

//전체헤더 (컴포넌트 뿌려주는곳)
const TicketHeader = () => {
    return (
        <>
            <Wrapper>
                <TicketTopHeader />
                <Box>
                    <Container>
                        <Logo>
                            <P>WaterMelon 티켓</P>
                        </Logo>
                        <HeaderSearchBar />
                        {/* <TempBox /> */}
                    </Container>
                    <SlideBannerContainer>
                        <TicketTopHeaderSideBanner />
                    </SlideBannerContainer>
                </Box>
                <MenuContainer>
                    <InnerMenu>
                        <MenuUl>
                            <MenuLi>
                                <MenuA href="#">집</MenuA>
                                <MenuA href="#">콘서트</MenuA>
                                <MenuA href="#">뮤지컬/연극</MenuA>
                                <MenuA href="#">클래식</MenuA>
                                <MenuA href="#">전시/행사</MenuA>
                                <MenuA href="#">테마/지역</MenuA>
                                <MenuA href="#">랭킹</MenuA>
                                <MenuA href="#">티켓오픈소식</MenuA>
                                <MenuA href="#">이벤트</MenuA>
                            </MenuLi>
                        </MenuUl>
                    </InnerMenu>
                    <InnerMenu>
                        <MenuUl>
                            <MenuLi>
                                <MenuA href="#">ForU</MenuA>
                                <MenuA href="#">마이티켓</MenuA>
                            </MenuLi>
                        </MenuUl>
                    </InnerMenu>
                </MenuContainer>
            </Wrapper>
        </>
    );
};
export default TicketHeader;
const Wrapper = styled.div`
    width: 100%;
    ${flexAlignCenter};
    justify-content: space-between;
    flex-direction: column;
    border-bottom: 2px solid #ccc;
    z-index: 1;
`;
const Box = styled.div`
    width: 1008px;
    ${flexAlignCenter};
    justify-content: space-between;
    margin-left: -410px;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Logo = styled.div``;

const P = styled.p`
    color: #8ec260;
    font-size: 35px;
    font-weight: 700;
`;

const MenuContainer = styled.div`
    width: 1008px;
    ${flexAlignCenter}
    justify-content: space-between;
    margin-left: -100px;
`;

const InnerMenu = styled.div``;

const MenuUl = styled.ul`
    list-style: none;
`;

const MenuLi = styled.li``;

const MenuA = styled.a`
    margin: 0 10px;
    font-size: 17px;
    font-weight: 600;
    text-decoration: none;
    color: #000;
    &:hover {
        color: #8ec260;
    }
`;
const SlideBannerContainer = styled.div``;
