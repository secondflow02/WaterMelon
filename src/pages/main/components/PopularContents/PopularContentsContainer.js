//이슈뉴스 6개 전체감싼거
// 2페어 차필우 허진욱
<<<<<<< HEAD
import styled from "styled-components";
import contentsData from "../../../../mock/contentsData.json";
import { flexAlignCenter, flexCenter } from "../../../../styles/common";
=======
import styled from 'styled-components';

import albumData from '../../../../mock/albumData.json';
>>>>>>> a5adb240689454dbbf531e2c2f16500707998d55

const PopularContentsContainer = () => {
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
                        {contentsData.contentsdata
                            .slice(6, 12)
                            .map((el, index) => (
                                <DL>
                                    <MOV_AREA>
                                        <a href=";">
                                            <IMG src={el.image} alt="" />
                                            <BG_ALBUM_FRAME></BG_ALBUM_FRAME>
                                        </a>
                                    </MOV_AREA>
                                    <DT>
                                        <TITLE>{el.title}</TITLE>
                                        <ELIPSIS>{el.singer}</ELIPSIS>
                                    </DT>
                                    <VIEW_NO>
                                        <span>{el.category}</span>
                                    </VIEW_NO>
                                </DL>
                            ))}
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
`;

const H2 = styled.h2`
    height: 24px;
    color: #1a1a1a;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -1px;
    font-weight: bold;
<<<<<<< HEAD
    font-family: "맑은 고딕", "Malgun Gothic", "Apple Gothic", sans-serif;
    border-bottom: 0.8px solid #dfe6e8;
    margin: 0;
=======
    font-family: '맑은 고딕', 'Malgun Gothic', 'Apple Gothic', sans-serif;
>>>>>>> a5adb240689454dbbf531e2c2f16500707998d55
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
<<<<<<< HEAD
=======
const WRAP_PAGE = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;
const PAGE = styled.div``;
const PAGE_NUM = styled.span`
    display: inline-block;
    color: #888;
    font-size: 12px;
    line-height: 17px;
    vertical-align: top;
    font-family: arial, '돋움', 'dotum', sans-serif, 'Apple Gothic', sans-serif;
`;
>>>>>>> a5adb240689454dbbf531e2c2f16500707998d55

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

const DL = styled.dl`
    color: #666;
    padding: 0;
    border: 0;
    position: relative;
    margin: 16px 0px 2px 16px;
    float: left;
    &:nth-of-type(1) {
        margin-left: 0px;
    }
    &:nth-of-type(4) {
        margin-left: 0px;
    }
`;

const MOV_AREA = styled.dd`
    color: #666;
    margin: 0;
    padding: 0;
    border: 0;
    width: 223px;
    height: 148px;
    position: relative;
`;

const IMG = styled.img`
    border: 0;
    height: 100%;
    width: 100%;
    position: relative;
`;

const BG_ALBUM_FRAME = styled.a`
    color: #1a1a1a;
    margin: 0;
    padding: 0;
    border: 0;
    top: 0;
    left: 0;
    width: 223px;
    height: 148px;
`;

const DT = styled.dt`
    color: #666;
    margin: 0;
    padding: 0;
    border: 0;
    width: 223px;
    line-height: 16px;
    font-size: 12px;
`;

const TITLE = styled.span`
    display: block;
    letter-spacing: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
    height: 16px;
    font: inherit;
    font-weight: bold;
    color: #333;
    margin-top: 6px;
    margin-bottom: 2px;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const ELIPSIS = styled.span`
    letter-spacing: 0;
    color: #888;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    display: block;
    width: 200px;
    height: 16px;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const VIEW_NO = styled.dd`
    letter-spacing: 0;
    -webkit-text-size-adjust: none;
    list-style: none;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    overflow: hidden;
    width: 223px;
    margin-top: 2px;
    font-size: 11px;
<<<<<<< HEAD
    font-family: "Dotum", "Apple Gothic", sans-serif;
    color: green;
=======
    font-family: 'Dotum', 'Apple Gothic', sans-serif;
    color: #888;
>>>>>>> a5adb240689454dbbf531e2c2f16500707998d55
    height: 14px;
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
