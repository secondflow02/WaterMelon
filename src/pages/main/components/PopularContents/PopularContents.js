// 인기있어요
// 2페어 허진욱
import contentsData from "../../../../mock/contentsData.json";
import styled from "styled-components";


// 인기 있어요 내부 컨텐츠
const PopularContents = () => {
    return (
        <>
        {contentsData.contentsdata
                            .slice(0, 6)
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
        </>
    )
}
export default PopularContents

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
    font-family: 'Dotum', 'Apple Gothic', sans-serif;
    color: #888;
    height: 14px;
`;