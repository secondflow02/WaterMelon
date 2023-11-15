//멜론티켓~공지사항
// 3페어 최하영 김진솔

import { styled } from "styled-components";
import { flexAlignCenter, flexCenter } from "../../../styles/common";

const TopHeader = () => {
    return (
        <>
            <Wrapper>
                <Box>
                    <Container>
                        <Ul>
                            <Li>
                                <A href="#">워터멜론티켓</A>
                            </Li>
                        </Ul>
                    </Container>
                    <Container>
                        <Ul>
                            <Li>
                                <A href="#">이용권구매</A>
                            </Li>
                            <Li>
                                <A href="#">워터멜론라운지</A>
                            </Li>
                            <Li>
                                <A href="#">이벤트</A>
                            </Li>
                            <Li>
                                <A href="#">공지사항</A>
                            </Li>
                        </Ul>
                    </Container>
                </Box>
            </Wrapper>
        </>
    );
};
export default TopHeader;

const Wrapper = styled.div`
    width: 100%;
    height: 38px;
    ${flexCenter}
    border-bottom: 1px solid #ccc;
`;

const Box = styled.div`
    width: 1008px;
    ${flexAlignCenter}
    justify-content: space-between;
    padding-right: 100px;
`;

const Container = styled.div``;

const Ul = styled.ul`
    list-style: none;
    ${flexCenter};
`;

const Li = styled.li`
    margin: 0 8px;
    font-size: 12px;
`;

const A = styled.a`
    text-decoration: none;
    color: #999;
    &:hover {
        cursor: pointer;
        color: #8ec260;
    }
`;
