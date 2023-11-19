//공지사항
// 3페어 최하영 김진솔

import styled from 'styled-components';

import { flexAlignCenter, flexCenter } from '../../../styles/common';

const Notice = () => {
    return (
        <>
            <NotiWrapper>
                <NotiContainer>
                    <Ul>
                        <Li>
                            <A href="#">
                                <Span>공지사항</Span>
                            </A>
                        </Li>
                        <Li>
                            <A href="#">친밀도 개편 안내</A>
                        </Li>
                        <Li>
                            <A href="#">2023.11.13</A>
                        </Li>
                    </Ul>
                </NotiContainer>
            </NotiWrapper>
        </>
    );
};
export default Notice;

const NotiWrapper = styled.div`
    ${flexCenter}
    width: 100%;

    margin-top: 50px;
    height: 50px;
`;

const NotiContainer = styled.div`
    width: 1008px;
    ${flexAlignCenter}
    justify-content: left;
    border-top: 1px solid #ccc;
`;

const Ul = styled.ul`
    list-style: none;
    ${flexCenter}
    flex-direction: row;
`;

const Li = styled.li`
    margin: 0 20px;
`;

const A = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 12px;
`;

const Span = styled.span`
    font-weight: 600;
`;
