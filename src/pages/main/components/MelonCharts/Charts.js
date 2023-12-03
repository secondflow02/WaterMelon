//차트 뿌려주는곳

import styled from 'styled-components';

import chartData from '../../../../mock/chartData.json';

// 2페어 차필우 허진욱..
//제일 상단 멜론차트 클릭버튼

const Charts = () => {
    const onMelonCartClickBtn = () => {};
    return (
        <div>
            <Styled.ChartTop>
                <button onClick={onMelonCartClickBtn}>멜론차트</button>
                <p>2030.12.02 18:00 기준</p>
            </Styled.ChartTop>
            <Styled.ChartTopBtn>
                <Styled.Button>TOP100</Styled.Button>
                <Styled.Button>POP</Styled.Button>
                <Styled.Button>아티스트</Styled.Button>
            </Styled.ChartTopBtn>
            {chartData.chartdata.map((el, index) => (
                <Styled.ChartList>
                    <Styled.ChartListPart>
                        {chartData.chartdata[index].ranking}
                    </Styled.ChartListPart>
                    <Styled.ChartListPart>
                        {chartData.chartdata[index].title}
                    </Styled.ChartListPart>
                    <Styled.ChartListPart>
                        {chartData.chartdata[index].singer}
                    </Styled.ChartListPart>
                    <Styled.ChartListPart></Styled.ChartListPart>
                    <Styled.ChartListPart></Styled.ChartListPart>
                    <Styled.ChartListPart></Styled.ChartListPart>
                    <Styled.ChartListPart></Styled.ChartListPart>
                    <Styled.ChartListPart></Styled.ChartListPart>
                    <Styled.ChartListPart></Styled.ChartListPart>
                    <Styled.ChartListPart></Styled.ChartListPart>
                    <Styled.ChartListPart></Styled.ChartListPart>
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
    bottom: 20px;
`;
//제일 상단 멜론차트버튼
const MelonCartBtn = styled.button`
    border: none;
    background-color: white;
    font-weight: 700;
    font-size: 16px;
`;

//TOP100,POP,아티스트 3개 버튼
const ChartTopBtn = styled.div`
    display: flex;
`;
//상단 3개에 버튼
const Button = styled.div`
    padding: 5px 30px 5px 30px;
    position: relative;
    border: 1px solid;
    bottom: 31px;
`;
//1~10까지 각각 순위리스트..
const ChartListPart = styled.div`
    &:hover {
        cursor: pointer;
    }
`;
//1~10까지 순위리스트..
const ChartList = styled.div`
    list-style-type: none;
    display: flex;
    border: 1px solid;
    height: 30px;
    position: relative;
    bottom: 30px;
    padding: 3px 3px 3px 3px;
`;
//하단 셔플 과 더보기 버튼
const ChartLowBtn = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid;
    position: relative;
    bottom: 30px;
`;

const Styled = {
    ChartTop,
    ChartTopBtn,
    ChartList,
    MelonCartBtn,
    ChartLowBtn,
    Button,
    ChartListPart,
};
