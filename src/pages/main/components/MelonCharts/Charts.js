//차트 뿌려주는곳

import styled from 'styled-components';

import chartData from '../../../../mock/chartData.json';

// 2페어 차필우 허진욱
const Charts = () => {
    return (
        <>
            <div class="chart" style={{ marginLeft: '24px' }}>
                <div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <h2>
                            <a href=""> 멜론 차트 </a>
                        </h2>
                        <div>2023.11.27 23:00 기준</div>
                    </div>

                    {/* 멜론차트 TOP100 POP 아티스트 */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <button
                            style={{ width: '95.856666px', height: '50px' }}
                        >
                            TOP100
                        </button>
                        <button style={{ width: '95.856666px' }}>POP</button>
                        <button style={{ width: '95.856666px' }}>
                            ☆ 아티스트
                        </button>
                    </div>
                    {/* 멜론차트 1~10 */}
                    <div>
                        <ul
                            style={{
                                padding: '0px 0px 0px 0px',
                                margin: '0px 0px 0px 0px',
                            }}
                        >
                            {chartData.chartdata.map((el, index) => (
                                <li
                                    style={{
                                        listStyleType: 'none',
                                        border: '1px solid',
                                    }}
                                >
                                    <span>
                                        {chartData.chartdata[index].ranking}
                                    </span>
                                    <span>
                                        {
                                            chartData.chartdata[index]
                                                .rankingChange
                                        }
                                    </span>
                                    <span>
                                        {chartData.chartdata[index].title}
                                    </span>
                                    <span>
                                        {chartData.chartdata[index].singer}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* 더보기 */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            height: '50px',
                            border: '1px solid',
                        }}
                    >
                        <button style={{ margin: '0px 0px 0px 10px' }}>
                            셔플듣기
                        </button>
                        <div style={{ margin: '0px 10px 0px 0px' }}>더보기</div>
                    </div>
                </div>
            </div>
        </>
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
