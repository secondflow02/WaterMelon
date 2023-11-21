//박제업 앨범
// 1페어 이영록 장지영
import styled from 'styled-components';

import MockLargeAlbumData from '../../../mock/LargeAlbumData.json';

const LargeAlbum = () => {
    const Datas = MockLargeAlbumData.LargeAlbumData;


    console.log(Datas[0].image);

    return (
        <Styled.Wrapper>
            <Styled.EventList>
                <Styled.Playcontain>
                    <Styled.MoveContain>
                        <Styled.MoveBtn>o</Styled.MoveBtn>
                        <Styled.MoveBtn>o</Styled.MoveBtn>
                        <Styled.MoveBtn>o</Styled.MoveBtn>
                        <Styled.MoveBtn>o</Styled.MoveBtn>
                    </Styled.MoveContain>
                    <Styled.PlayBtn>=</Styled.PlayBtn>
                </Styled.Playcontain>

                {Datas.map(el => (
                    <Styled.EventPart src={el.image}></Styled.EventPart>
                ))}

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
const Playcontain = styled.div`
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
    Playcontain,
    PlayBtn,
    MoveContain,
    MoveBtn,
};
//사진 넘어가는 거 js 사진 연결되서 넘어가는 느낌
