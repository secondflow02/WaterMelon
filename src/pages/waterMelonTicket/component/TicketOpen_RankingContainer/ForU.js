//ForU컴포넌트

import styled from 'styled-components';
import { flexCenter } from 'styles/common';

//안에 버튼 박아야함
const ForU = () => {
    return (
        <>
            <Styled.Wrapper>
                <Styled.ForUBox>
                    <Styled.H2>ForU</Styled.H2>
                    <Styled.Ul>
                        <Styled.Li>
                            <Styled.A>더보기</Styled.A>
                        </Styled.Li>
                    </Styled.Ul>
                </Styled.ForUBox>
            </Styled.Wrapper>
        </>
    );
};
export default ForU;
const Wrapper = styled.div``;
const ForUBox = styled.div`
    ${flexCenter}
`;

const H2 = styled.h2``;
const Ul = styled.ul``;
const Li = styled.li`
    text-decoration: none;
    list-style: none;
`;
const A = styled.a``;
const Styled = {
    Wrapper,
    ForUBox,
    H2,
    Ul,
    Li,
    A,
};
