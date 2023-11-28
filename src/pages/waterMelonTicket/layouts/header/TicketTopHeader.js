import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexAlignCenter, flexCenter } from 'styles/common';

//로그인 회원가입 고객센터 이용안내
const TicketTopHeader = () => {
    const navigate = useNavigate();
    return (
        <>
            <Wrapper>
                <Box>
                    <Container>
                        <Ul>
                            <Li
                                onClick={() => {
                                    navigate('');
                                }}
                            >
                                <A>워터멜론</A>
                            </Li>
                        </Ul>
                    </Container>
                    <Container>
                        <Ul>
                            <Li>
                                <A href="#">로그인 |</A>
                            </Li>
                            <Li>
                                <A href="#"> 회원가입 |</A>
                            </Li>
                            <Li>
                                <A href="#"> 고객센터 |</A>
                            </Li>
                            <Li>
                                <A href="#"> 이용안내 |</A>
                            </Li>
                            <Li>
                                <A href="#">한국말</A>
                            </Li>
                        </Ul>
                    </Container>
                </Box>
            </Wrapper>
        </>
    );
};
export default TicketTopHeader;
const Wrapper = styled.div`
    width: 100%;
    height: 38px;
    ${flexCenter};
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
    color: #000;
    font-weight: 700;
    &:hover {
        cursor: pointer;
        color: #8ec260;
    }
`;
