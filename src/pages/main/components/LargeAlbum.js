//박제업 앨범
// 1페어 이영록 장지영

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { LargeData } from '../../../components/LargeAlbum';

//image어떻게 찍히는 지 확인
//import Image1 from '../../../components/LargeAlbum';
// import img1 from 'https://cdnimg.melon.co.kr/svc/images/main/imgUrl20231114014430.jpg/melon/quality/80';

const LargeAlbum = () => {
    //const [state, setState] = useState(LargeData.LargeData);
    const [Data, setData] = useState(LargeData);
    const [startBtn, setStartBtn] = useState(false);
    let largeRef = useRef(0);
    let album = [];
    useEffect(() => {
        if (startBtn === false) {
            const interval = setInterval(() => {
                album.current = LargeData[largeRef.current];

                console.log(largeRef.current);
                largeRef.current++;
                console.log(LargeData[0].Image);
                console.log(album.current.Image);
                setData(Data => album.current);
                //setState(state => albumRef.current);
                if (largeRef.current > 3) {
                    largeRef.current = 0;
                }
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [startBtn]);
    //로딩이되자마자 이벤트 실행( use effect)=>count 흐름
    // 버튼 클릭시 사진 변경(count마다 사진 변경그래야 movebtn 즉시 변화가능)
    // (new함수 생성=>currnt변수들 집어넣을 (사진들)

    //state이용해서 해야되는데 생각만하고 못함 +정리
    const index0Btn = () => {
        largeRef.current = 0;
        console.log(largeRef.current);
    };
    const index1Btn = () => {
        largeRef.current = 1;
        console.log(largeRef.current);
    };
    const index2Btn = () => {
        largeRef.current = 2;
        console.log(largeRef.current);
    };
    const index3Btn = () => {
        largeRef.current = 3;
        console.log(largeRef.current);
    };
    const onStartBtn = () => {
        setStartBtn(prev => !prev);
    };

    return (
        <Styled.Wrapper>
            <Styled.EventList>
                <Styled.PlayContain>
                    <Styled.MoveContain>
                        <Styled.MoveBtn onClick={index0Btn}>o</Styled.MoveBtn>
                        <Styled.MoveBtn onClick={index1Btn}>o</Styled.MoveBtn>
                        <Styled.MoveBtn onClick={index2Btn}>o</Styled.MoveBtn>
                        <Styled.MoveBtn onClick={index3Btn}>o</Styled.MoveBtn>
                    </Styled.MoveContain>
                    <Styled.PlayBtn>
                        <button onClick={onStartBtn}>
                            {startBtn ? '>' : '='}
                        </button>
                    </Styled.PlayBtn>
                </Styled.PlayContain>

                <Styled.EventPart>
                    <img src={Data.Image}></img>
                </Styled.EventPart>
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
const EventPart = styled.a`
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
    color: #d8d8d8;
    &:hover {
        color: black;
    }
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
//말
