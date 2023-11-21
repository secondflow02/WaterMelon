//박제업 앨범
// 1페어 이영록 장지영
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import LargeData from '../../../components/LargeAlbum';
//image어떻게 찍히는 지 확인
import Image1 from '../../../components/LargeAlbum';
// import img1 from 'https://cdnimg.melon.co.kr/svc/images/main/imgUrl20231114014430.jpg/melon/quality/80';

const LargeAlbum = () => {

    //const [state, setState] = useState(LargeData.LargeData);
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
    // img를 컴포넌트로 안하고 여기에 불러오면 어떨가 해서 실험
    // const LargeImg = [
    //     { image: picture1 },
    //     { image: picture2 },
    //     { image: picture3 },
    //     { image: picture4 },
    // ];
    // 3페어꺼 보고   clearinterval을빼먹은것을 알게됨
    useEffect(() => {
        if (startBtn === false) {
            const interval = setInterval(() => {
                albumRef.current = LargeData[largeRef.current];
                console.log(largeRef.current);
                largeRef.current++;
                console.log(albumRef.current);
                console.log(Image1);
                //setState(state => albumRef.current);
                if (largeRef.current > 3) {
                    largeRef.current = 0;
                }
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [startBtn]);
    //state이용해서 해야되는데 생각만하고 못함 +정리
    const index0Btn = () => {
        albumRef.current = 0;
    };
    const index1Btn = () => {
        albumRef.current = 1;
    };
    const index2Btn = () => {
        albumRef.current = 2;
    };
    const index3Btn = () => {
        albumRef.current = 3;
    };
    const onStartBtn = () => {
        setStartBtn(prev => !prev);
    };


    return (
        <Styled.Wrapper>
            <Styled.EventList>
                <Styled.PlayContain>
                    <Styled.MoveContain>
                        <Styled.MoveBtn>
                            <button onClick={index0Btn}>o</button>
                        </Styled.MoveBtn>
                        <Styled.MoveBtn>
                            <button onClick={index1Btn}>o</button>
                        </Styled.MoveBtn>
                        <Styled.MoveBtn>
                            <button onClick={index2Btn}>o</button>
                        </Styled.MoveBtn>
                        <Styled.MoveBtn>
                            <button onClick={index3Btn}>o</button>
                        </Styled.MoveBtn>
                    </Styled.MoveContain>

                    <Styled.PlayBtn>
                        <button onClick={onStartBtn}>
                            {startBtn ? '>' : '='}
                        </button>
                    </Styled.PlayBtn>
                </Styled.PlayContain>

                <Styled.EventPart></Styled.EventPart>

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
