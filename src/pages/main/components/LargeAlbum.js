//박제업 앨범
// 1페어 이영록 장지영
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import LargeData from '../../../mock/LargeAlbumData.json';

const LargeAlbum = () => {
    //const [state, setState] = useState(LargeData.LargeData);
    const Datas = LargeData.LargeData;
    const [startBtn, setStartBtn] = useState(false);
    let largeRef = useRef(0);
    let albumRef = useRef([]);
    //clearinterveal 똑바로 이해못함
    // useEffect(() => {
    //     setInterval(() => {
    //         albumRef.current = LargeData.LargeData[largeRef.current];
    //         console.log(largeRef.current);
    //          largeRef.current++;
    //         setState(state => albumRef.current);
    //         if (largeRef.current > 3) {
    //             largeRef.current = 0;
    //         }
    //     }, 4000);
    //     return () => clearInterval(largeRef);
    // }, [startBtn]);
    //IF문으로사용할려고하는데 CONSOLE에서 0~3까지 게속찍힘
    // if (startBtn === false) {
    //     setInterval(() => {
    //         albumRef.current = LargeData.LargeData[largeRef.current];
    //         console.log(largeRef.current);
    //         largeRef.current++;
    //         setState(state => albumRef.current);
    //         if (largeRef.current > 3) {
    //             largeRef.current = 0;
    //         }
    //     }, 4000);
    // }
    // 3페어꺼 보고   clearinterval을빼먹은것을 알게됨
    useEffect(() => {
        if (startBtn === false) {
            const interval = setInterval(() => {
                albumRef.current = LargeData.LargeData[largeRef.current];
                console.log(largeRef.current);
                largeRef.current++;
                console.log(albumRef.current);
                //setState(state => albumRef.current);
                if (largeRef.current > 3) {
                    largeRef.current = 0;
                }
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [startBtn]);

    const onClickBtn = () => {
        setStartBtn(prev => !prev);
    };
    return (
        <Styled.Wrapper>
            <Styled.EventList>
                <Styled.PlayContain>
                    <Styled.MoveContain>
                        <Styled.MoveBtn>o</Styled.MoveBtn>
                        <Styled.MoveBtn>o</Styled.MoveBtn>
                        <Styled.MoveBtn>o</Styled.MoveBtn>
                        <Styled.MoveBtn>o</Styled.MoveBtn>
                    </Styled.MoveContain>
                    <Styled.PlayBtn>
                        <button onClick={onClickBtn}>
                            {startBtn ? '>' : '='}
                        </button>
                    </Styled.PlayBtn>
                </Styled.PlayContain>

                <Styled.EventPart src={albumRef.current}></Styled.EventPart>
            </Styled.EventList>
        </Styled.Wrapper>
    );
};
export default LargeAlbum;
//사진과 버튼 전체
const Wrapper = styled.div`
    width: 236px;
    margin: 0 0 0 8px;
    float: left;
    height: 340px;
`;
//사진 모음들
const EventList = styled.div`
    width: 236px;
    height: 315px;
    padding-top: 24px;
    position: relative;
`;
//사진 한장 처리
const EventPart = styled.img`
    width: 236px;
    height: 315px;
`;
//움직이는 버튼모음
const PlayContain = styled.div`
    position: absolute;
    top: 1px;
    right: 2px;
    display: flex;
    text-align: center;
`;
//시작 정지 버튼
const PlayBtn = styled.a`
    margin-left: 10px;
`;
//움직이는 버튼 모음
const MoveContain = styled.div`
    margin-top: 2px;
`;
//동그라미 버튼
const MoveBtn = styled.a`
    width: 10px;
    height: 10px;
    margin: 0;
`;

const Styled = {
    Wrapper,
    EventList,
    EventPart,
    PlayContain,
    PlayBtn,
    MoveContain,
    MoveBtn,
};
//사진 넘어가는 거 js 사진 연결되서 넘어가는 느낌
