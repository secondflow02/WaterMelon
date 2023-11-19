//이슈뉴스 6개 전체감싼거
// 2페어 차필우 허진욱
import styled from 'styled-components';

import albumData from '../../../../mock/albumData.json';

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
                        {albumData.albumdata.map((el, index) => (
                            <DL>
                                <MOV_AREA>
                                    <a href=";">
                                        <IMG src={짱구} alt={el.title} />
                                        <BG_ALBUM_FRAME></BG_ALBUM_FRAME>
                                    </a>
                                </MOV_AREA>
                                <DT>
                                    <TITLE>{el.title}</TITLE>
                                    <ELIPSIS>{el.singer}</ELIPSIS>
                                </DT>
                                <VIEW_NO>{el.category}</VIEW_NO>
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
    letter-spacing: 0;
    color: #666;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    clear: both;
    width: 704px;
    position: relative;
    float: left;
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
    font-family: '맑은 고딕', 'Malgun Gothic', 'Apple Gothic', sans-serif;
`;

const TITLE_LINK = styled.span`
    float: left;
    width: 70px;
    height: 15px;
    display: block;
    background: url(//cdnimg.melon.co.kr/resource/image/web/main/bg_main_title_140716.png)
        no-repeat;
    background-position: 0 -194px;
    text-indent: -9999px;
`;

const TXT_INTRO = styled.span`
    display: inline-block;
    width: 300px;
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

const WRAP_BTN = styled.span`
    vertical-align: top;
    display: inline-block;
    margin-left: 3px;
`;

const SUB_LIST = styled.ul`
    letter-spacing: 0;
    color: #666;
    -webkit-text-size-adjust: none;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    list-style: none;
    font-weight: normal;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ISSUE_LIST = styled.li`
    letter-spacing: 0;
    color: #666;
    -webkit-text-size-adjust: none;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    list-style: none;
    font-weight: normal;
    clear: both;
    width: 704px;
`;

const DL = styled.dl`
    letter-spacing: 0;
    color: #666;
    list-style: none;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    margin-left: 0 !important;
    position: relative;
    margin: 16px 10px 2px 0px;
    float: left;
`;

const MOV_AREA = styled.dd`
    letter-spacing: 0;
    color: #666;
    -webkit-text-size-adjust: none;
    list-style: none;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    overflow: hidden;
    width: 223px;
    height: 148px;
    position: relative;
`;

const IMG = styled.img`
    letter-spacing: 0;
    -webkit-text-size-adjust: none;
    list-style: none;
    color: #1a1a1a;
    margin: 0;
    padding: 0;
    font: inherit;
    vertical-align: baseline;
    line-height: 0;
    font-size: 0;
    border: 0;
    height: 100%;
    width: 100%;
    position: relative;
`;

const BG_ALBUM_FRAME = styled.a`
    letter-spacing: 0;
    list-style: none;
    color: #1a1a1a;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    position: absolute;
    top: 0;
    left: 0;
    width: 223px;
    height: 148px;
`;

const DT = styled.dt`
    letter-spacing: 0;
    color: #666;
    -webkit-text-size-adjust: none;
    list-style: none;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    width: 223px;
    line-height: 16px;
`;

const TITLE = styled.span`
    letter-spacing: 0;
    -webkit-text-size-adjust: none;
    list-style: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    overflow: hidden;
    height: 16px;
    font-weight: bold;
    color: #333;
    margin-top: 6px;
    margin-bottom: 2px;
    word-break: break-all;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const ELIPSIS = styled.span`
    letter-spacing: 0;
    -webkit-text-size-adjust: none;
    list-style: none;
    color: #888;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    display: block;
    width: 223px;
    height: 16px;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    font-family: 'Dotum', 'Apple Gothic', sans-serif;
    color: #888;
    height: 14px;
`;
