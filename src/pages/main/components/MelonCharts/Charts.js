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
                <BtnChartTop onClick={onMelonCartClickBtn}>
                    멜론차트
                </BtnChartTop>
                <p>2030.12.02 18:00 기준</p>
            </Styled.ChartTop>
            <Styled.ChartTopBtn>
                <Styled.Button>TOP100</Styled.Button>
                <Styled.Button>POP</Styled.Button>
                <Styled.Button>아티스트</Styled.Button>
            </Styled.ChartTopBtn>
            {chartData.chartdata.map((el, index) => (
                // el, index, el은 목데이터에 전체 엘리멘트를 가지고 옮,인덱스도 전체 인덱스를 가지고옮
                <Styled.ChartList key={index} isEven={index % 2 == 1}>
                    {/* isEven은 함수가 짝수인지홀수인지를 판별하고 반환해줌 */}
                    <Styled.ChartListPart>
                        {chartData.chartdata[index].ranking}

                        {chartData.chartdata[index].title}

                        {chartData.chartdata[index].singer}

                        {chartData.chartdata[index].rankingChange}

                        {chartData.chartdata[index].image}
                    </Styled.ChartListPart>
                </Styled.ChartList>
                // 호버로 맵을 돌림->이거를 하나로 만듦
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
const BtnChartTop = styled.button`
    background-color: white;

    font-size: large;
    font-weight: 900;
`;

//TOP100,POP,아티스트 3개 버튼
const ChartTopBtn = styled.div`
    display: flex;
`;
//상단 3개에 버튼
const Button = styled.button`
    position: relative;
    padding: 5px 30px 5px 30px;

    bottom: 31px;
    background-color: white;
`;
//1~10까지 각각 순위리스트..
const ChartListPart = styled.div`
    /* padding: 3px;
    font-size: 14px;
    &:hover {
        padding: 10px;
        margin: 10px;
        font-size: medium;
        cursor: pointer; */
    /* } */
`;
//1~10까지 순위리스트..
const ChartList = styled.div`
    background-color: ${({ isEven }) => (isEven ? '#e9ecef' : 'white')};
    /* $위에서 isEven을 가지고 온다,$템플릿리터럴을 뜻하며 변수 나 표현식을 문자열에 삽입할떄 사용한다 */
    list-style-type: none;
    display: flex;
    border: 1px solid;
    height: 30px;
    position: relative;
    bottom: 30px;
    padding: 3px;
    font-size: small;
    /*ChartListPart에 hover을 주지않고 부모에 hover을줌 */
    &:hover {
        /* &특수한 선택자를 나타내며 주로 중첩된 선택자에서 부모선택자를 나타낼떄 사용된다
        일반적으로 상위선택자(부모)를 참조하여 중첩된 규칙을 생성할떄 사용된다*/
        height: 50px;
        padding: 1px;
        font-size: medium;
        cursor: pointer;
    }
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
    ChartLowBtn,
    Button,
    ChartListPart,
    BtnChartTop,
};
