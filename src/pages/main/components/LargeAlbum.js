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
    let countRef = useRef(0); //timer :
    let album = [];
    album.current = LargeData[countRef.current];
    const [lend, setlend] = useState(false);
    //const [curIdx, setCurIdx] = useState(0)
    // useEffect(()=>{
    //     // curIdx 가 변경되면 4초 뒤에 변경된다.
    //        setTimeout(() => {
    //            setCurIdx((prev)=>(prev+1)%4)
    //         }, 4000);
    // },[curIdx, setCurIdx])
    //4초마다 count 가 1씩 늘어남
    useEffect(() => {
        if (startBtn === false) {
            const interval = setInterval(() => {
                console.log(countRef.current);
                countRef.current++;
                setlend(prev => !prev);
                if (countRef.current > 3) {
                    countRef.current = 0;
                }
            }, 4000);
            return () => clearInterval(interval);
        }
        //const [curIdx, setCurIdx] = useState(0)
    }, [startBtn]);
    // count 1마다 사진이 변경됨?
    useEffect(() => {
        console.log(LargeData[0].Image);
        console.log(album.current.Image);
        setData(Data => album.current);
        //setState(state => albumRef.current);
    }, [album]);

    //로딩이되자마자 이벤트 실행( use effect)=>count 흐름
    // 버튼 클릭시 사진 변경(count마다 사진 변경그래야 movebtn 즉시 변화가능)
    // (new함수 생성=>currnt변수들 집어넣을 (사진들)

    //state이용해서 해야되는데 생각만하고 못함 +정리
    const index0Btn = () => {
        countRef.current = 0;
        console.log(countRef.current);
        setlend(prev => !prev);
    };
    const index1Btn = () => {
        countRef.current = 1;
        console.log(countRef.current);
        setlend(prev => !prev);
    };
    const index2Btn = () => {
        countRef.current = 2;
        console.log(countRef.current);
        setlend(prev => !prev);
    };
    const index3Btn = () => {
        countRef.current = 3;
        console.log(countRef.current);
        setlend(prev => !prev);
    };
    const onStartBtn = () => {
        setStartBtn(prev => !prev);
    };
    //map 활용,뎁스 줄이기,
    return (
        <Styled.Wrapper>
            <Styled.EventList>
                <Styled.PlayContain>
                    <Styled.MoveContain>
                        <Styled.MoveBtn onClick={index0Btn}>
                            {countRef.current === 0 ? (
                                // eslint-disable-next-line react/jsx-pascal-case
                                <Styled.isSelect>o</Styled.isSelect>
                            ) : (
                                'o'
                            )}
                        </Styled.MoveBtn>
                        <Styled.MoveBtn onClick={index1Btn}>
                            {countRef.current === 1 ? (
                                // eslint-disable-next-line react/jsx-pascal-case
                                <Styled.isSelect>o</Styled.isSelect>
                            ) : (
                                'o'
                            )}
                        </Styled.MoveBtn>
                        <Styled.MoveBtn onClick={index2Btn}>
                            {countRef.current === 2 ? (
                                // eslint-disable-next-line react/jsx-pascal-case
                                <Styled.isSelect>o</Styled.isSelect>
                            ) : (
                                'o'
                            )}
                        </Styled.MoveBtn>
                        <Styled.MoveBtn onClick={index3Btn}>
                            {countRef.current === 3 ? (
                                // eslint-disable-next-line react/jsx-pascal-case
                                <Styled.isSelect>o</Styled.isSelect>
                            ) : (
                                'o'
                            )}
                        </Styled.MoveBtn>
                    </Styled.MoveContain>
                    <Styled.PlayBtn>
                        <div onClick={onStartBtn}>{startBtn ? '▷' : 'II'}</div>
                    </Styled.PlayBtn>
                </Styled.PlayContain>

                <Styled.EventPart>
                    <img src={Data.Image} alt="Large"></img>
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
    top: 100px;
`;

//움직이는 버튼모음
const PlayContain = styled.div`
    position: absolute;
    top: 1px;
    right: 2px;
    display: flex;
    text-align: center;
    display: flex;
`;
//시작 정지 버튼
const PlayBtn = styled.a`
    margin-left: 10px;
`;
//움직이는 버튼 모음
const MoveContain = styled.div`
    margin-top: 2px;
    display: flex;
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
const isSelect = styled.p`
    color: black;
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
    isSelect,
};

//사진 넘어가는 거 js 사진 연결되서 넘어가는 느낌
//말
