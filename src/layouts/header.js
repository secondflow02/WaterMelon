//네비게이션바 ul로 집어넣을거임
// 3페어 최하영, 김진솔
import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

import HeaderSearchChart from './components/header/HeaderSearchChart';
import HeaderSearchBar from './components/header/HeaderSerchBar';
import TopHeader from './components/header/TopHeader';

const Header = () => {
    return (
        <>
            <Wrapper>
                <TopHeader />
                <Box>
                    <Container>
                        <Logo>
                            <P>WaterMelon</P>
                        </Logo>
                        <HeaderSearchBar />
                        <HeaderSearchChart />
                        {/* <TempBox /> */}
                    </Container>
                </Box>
                <MenuContainer>
                    <InnerMenu>
                        <MenuUl>
                            <MenuLi>
                                <MenuA href="#">수박차트</MenuA>
                                <MenuA href="#">최신수박</MenuA>
                                <MenuA href="#">수박장르</MenuA>
                                <MenuA href="#">수박DJ</MenuA>
                                <MenuA href="#">수박TV</MenuA>
                                <MenuA href="#">수박포스트</MenuA>
                                <MenuA href="#">매거진</MenuA>
                                <MenuA href="#">수박어워드</MenuA>
                                <MenuA href="#">수학</MenuA>
                                <MenuA href="#">
                                    수박웨이브 <Span>beta</Span>
                                </MenuA>
                            </MenuLi>
                        </MenuUl>
                    </InnerMenu>
                    <InnerMenu>
                        <MenuUl>
                            <MenuLi>
                                <MenuA href="#">마이수박</MenuA>
                            </MenuLi>
                        </MenuUl>
                    </InnerMenu>
                </MenuContainer>
            </Wrapper>
        </>
    );
};
export default Header;

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
    margin-left: -260px;
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
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    color: #000;
    &:hover {
        color: #8ec260;
    }
`;

const Span = styled.span`
    color: #8ec260;
`;
