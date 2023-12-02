//차트 뿌려주는곳

import styled from 'styled-components';

import chartData from '../../../../mock/chartData.json';

// 2페어 차필우 허진욱
const Charts = () => {
    return (
        <div>
            <Styled.ChartTop>
                <MelonCartBtn onClick={MelonCartClickBtn}>
                    멜론차트
                </MelonCartBtn>
                <p>2030.12.02 18:00 기준</p>
            </Styled.ChartTop>
            <Styled.ChartTopBtn>
                <button>TOP100</button>
                <button>POP</button>
                <button>아티스트</button>
            </Styled.ChartTopBtn>
            {chartData.chartdata.map((el, index) => (
                <Styled.ChartList>
                    <li>{chartData.chartdata[index].ranking}</li>
                    <li>{chartData.chartdata[index].title}</li>
                    <li>{chartData.chartdata[index].singer}</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </Styled.ChartList>
            ))}
            <Styled.ChartLowBtn>
                <button>셔플듣기</button>
                <a>더보기</a>
            </Styled.ChartLowBtn>
        </div>
    );
};
export default Charts;

const TITLE_LINK = styled.a`
    float: left;
    width: 70px;
    height: 15px;
    display: block;
    background: url(//cdnimg.melon.co.kr/resource/image/web/main/bg_main_title_140721.png)
        no-repeat 1px -105px;
    font-size: 0;
    line-height: 0;
`;
const VISITED = styled.div`
    color: #1a1a1a;
    text-decoration: none;
`;
// 제일 상단 멜론타트와 시간기준
const ChartTop = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    bottom: 100px;
`;
//제일 상단 멜론차트버튼
const MelonCartBtn = styled.button`
    border: none;
    background-color: white;
    font-weight: 700;
    font-size: 16px;
`;
//제일 상단 멜론차트 클릭버튼
const MelonCartClickBtn = () => {};
//TOP100,POP,아티스트 3개 버튼
const ChartTopBtn = styled.div`
    display: flex;
`;
//1~10까지 순위리스트
const ChartList = styled.div`
    list-style-type: none;
    display: flex;
    border: 1px solid;
`;
const ChartLowBtn = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Styled = {
    ChartTop,
    ChartTopBtn,
    ChartList,
    MelonCartBtn,
    ChartLowBtn,
};
