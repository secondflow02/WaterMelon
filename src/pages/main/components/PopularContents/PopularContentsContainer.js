//이슈뉴스 6개 전체감싼거
// 2페어 차필우 허진욱
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../../../styles/common";
import PopularContents from "./PopularContents"

// 인기있어요 컨테이너
const PopularContentsContainer = () => {
    albumData.albumdata.map((el, index) => console.log(el.image));
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
                        <PopularContents />
                    </ISSUE_LIST>
                </SUB_LIST>
                <WRAP_PAGE>
                    <PAGE>
                        <PAGE_NUM>&lt;</PAGE_NUM>
                        <WRAP_BTN>&gt;</WRAP_BTN>
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
    margin-right: 106.14px;
`;

const H2 = styled.h2`
    height: 24px;
    color: #1a1a1a;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -1px;
    font-weight: bold;
    font-family: "맑은 고딕", "Malgun Gothic", "Apple Gothic", sans-serif;
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
    vertical-align: top;
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
const PAGE = styled.div``;
const PAGE_NUM = styled.span`
    color: #888;
    font-size: 12px;
    line-height: 17px;
    vertical-align: top;
    font-family: arial, "돋움", "dotum", sans-serif, "Apple Gothic", sans-serif;
`;


const WRAP_BTN = styled.span`
    vertical-align: top;
    margin-left: 3px;

`;
