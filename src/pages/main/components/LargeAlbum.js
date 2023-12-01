//박제업 앨범
// 1페어 이영록 장지영

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { LargeData } from '../../../components/LargeAlbum';

const LargeAlbum = () => {
    const [Data, setData] = useState(LargeData);
    const [startBtn, setStartBtn] = useState(false);
    const [count, setCount] = useState([1, 2, 3, 4]); // 여기 의미가 맞게끔 변경
    let countRef = useRef(0); //timer :
    let album = [];
    const [click, setClick] = useState(); // 여기 의미가 맞게끔 변경
    album.current = LargeData[countRef.current];
    const [lend, setLend] = useState(false); // 여기 의미가 맞게끔 변경
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
                countRef.current++;
                setLend(prev => !prev);
                if (countRef.current > 3) {
                    countRef.current = 0;
                }
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [startBtn]);
    // count 1마다 사진이 변경됨
    useEffect(() => {
        setData(Data => album.current);
    }, [album]);

    //로딩이되자마자 이벤트 실행( use effect)=>count 흐름
    // 버튼 클릭시 사진 변경(count마다 사진 변경그래야 movebtn 즉시 변화가능)
    // (new함수 생성=>currnt변수들 집어넣을 (사진들)

    const onIndexBtn = e => {
        const clickIndex = Array.from(
            e.currentTarget.parentNode.children,
        ).indexOf(e.currentTarget);
        setClick(clickIndex);
        countRef.current = clickIndex;
        setLend(prev => !prev);
    };
    const onStartBtn = () => {
        setStartBtn(prev => !prev);
    };
    return (
        <Styled.Wrapper>
            <Styled.EventList>
                <Styled.PlayContain>
                    <Styled.MoveContain>
                        {count.map((_, index) => (
                            <Styled.MoveBtn onClick={onIndexBtn}>
                                {countRef.current === index ? (
                                    <Styled.isSelect>o</Styled.isSelect>
                                ) : (
                                    'o'
                                )}
                            </Styled.MoveBtn>
                        ))}
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
    cursor: pointer;
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
    cursor: pointer;
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
