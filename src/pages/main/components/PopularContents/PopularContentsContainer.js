//이슈뉴스 6개 전체감싼거
// 2페어 차필우 허진욱
import { useState } from 'react';
import styled from 'styled-components';

import { flexAlignCenter } from '../../../../styles/common';
import PopularContents from './PopularContents';

// 인기있어요 컨테이너
const PopularContentsContainer = () => {
    let [popularContentsPage, setPopularContentsPage] = useState(1);
    const onClickPrevBtn = () => {
        if (popularContentsPage === 2) {
            setPopularContentsPage(popularContentsPage - 1);
        }
    };
    const onClickNextBtn = () => {
        if (popularContentsPage === 1) {
            setPopularContentsPage(popularContentsPage + 1);
        }
    };

    return (
        <>
            <HotIssueConTainer>
                <H2>
                    <TITLE_LINK>인기있어요</TITLE_LINK>
                    <TXT_INTRO>
                        지금 이슈가 되는 아티스트의 인기 컨텐츠입니다.
                    </TXT_INTRO>
                </H2>
                <SUB_LIST>
                    <ISSUE_LIST>
                        <PopularContents
                            popularContentsPage={popularContentsPage}
                        />
                    </ISSUE_LIST>
                </SUB_LIST>
                <WRAP_PAGE>
                    <PAGE>
                        <PAGE_NUM>
                            <span style={{ color: 'black' }}>
                                {popularContentsPage}
                            </span>
                            <span>/</span>
                            <span>2</span>
                        </PAGE_NUM>
                        <WRAP_BTN>
                            <PREV_BTN
                                onClick={onClickPrevBtn}
                                popularContentsPage={popularContentsPage}
                            >
                                <b>&lt;</b>
                            </PREV_BTN>
                            <NEXT_BTN
                                onClick={onClickNextBtn}
                                popularContentsPage={popularContentsPage}
                            >
                                <b>&gt;</b>
                            </NEXT_BTN>
                        </WRAP_BTN>
                    </PAGE>
                </WRAP_PAGE>
            </HotIssueConTainer>
        </>
    );
};
export default PopularContentsContainer;

const HotIssueConTainer = styled.div`
    color: #666;
    width: 704px;
    position: relative;
    height: 472px;
    margin-top: 32px;
    margin-bottom: 49px;
`;

const H2 = styled.h2`
    height: 24px;
    color: #1a1a1a;
    font-size: 15px;
    letter-spacing: -1px;
    font-weight: bold;
    font-family: '맑은 고딕', 'Malgun Gothic', 'Apple Gothic', sans-serif;
    border-bottom: 0.8px solid #dfe6e8;
    margin: 0;
`;

const TITLE_LINK = styled.span`
    width: 70px;
    height: 15px;
`;

const TXT_INTRO = styled.span`
    margin-top: 1px;
    padding-left: 12px;
    letter-spacing: 0;
    font-weight: normal;
    color: #888;
    font-size: 12px;
    font-family: 'Dotum', 'Apple Gothic', sans-serif;
    background: 0;
`;

const SUB_LIST = styled.ul`
    color: #666;
    margin: 0;
    padding: 0;
    border: 0;

    font-weight: normal;
    ${flexAlignCenter}
`;

const ISSUE_LIST = styled.li`
    margin: 0;
    padding: 0;
    border: 0;
    width: 704px;
    display: block;
`;

const WRAP_PAGE = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;
const PAGE = styled.div`
    display: flex;
    align-items: center;
    height: 18px;
`;
const PAGE_NUM = styled.span`
    color: #888;
    font-size: 12px;
    line-height: 17px;
    vertical-align: top;
    font-family: arial, '돋움', 'dotum', sans-serif, 'Apple Gothic', sans-serif;
    cursor: pointer;
`;

const WRAP_BTN = styled.span`
    margin-left: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PREV_BTN = styled.span`
    border: solid 1px #888888;
    border-radius: 15px 0 0 15px;
    padding: 0 7px 3px;
    font-size: 12px;
    ${props =>
        props.popularContentsPage === 1
            ? `
    cursor: default;

`
            : `color: black;     &:hover {
                border: solid 1px black;
            }`}
`;

const NEXT_BTN = styled.span`
    border: solid 1px #888888;
    border-radius: 0 15px 15px 0;
    padding: 0 7px 3px;
    font-size: 12px;
    ${props =>
        props.popularContentsPage === 2
            ? `
    cursor: default;

    `
            : `color: black; &:hover {
                border: solid 1px black;
            }`}
`;
