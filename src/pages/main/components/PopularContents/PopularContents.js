// 인기있어요
// 2페어 허진욱
import styled from "styled-components";

import contentsData from "../../../../mock/contentsData.json";


// 인기있어요 내부 컨텐츠
const PopularContents = () => {
    return (
        <>
        {contentsData.contentsdata
                            .slice(0, 6) // 총 12개의 데이터 중 6개의 데이터만 반영 -> 이후 6개씩 나눠 2페이지로 전환하는 버튼 구현 예정
                            .map((el, index) => ( // 내부 컨텐츠를 contentsData.json 에서 가져와 map 으로 뿌려줌
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
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
    height: 16px;
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
    color: #888;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
    display: block;
    width: 200px;
    height: 16px;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const VIEW_NO = styled.dd`
    margin: 0;
    padding: 0;
    border: 0;
    overflow: hidden;
    width: 223px;
    margin-top: 2px;
    font-size: 11px;
    font-family: 'Dotum', 'Apple Gothic', sans-serif;
    color: green;
    height: 14px;
`;