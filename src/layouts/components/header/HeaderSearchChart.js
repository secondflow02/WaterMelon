//급상승차트표
// 3페어 최하영 김진솔

// 5초마다 목록이 바뀜
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import risingData from '../../../mock/risingData.json';

const HeaderSearchChart = () => {
    const [state, setState] = useState(risingData.riseingdata);
    let riseRef = useRef(0);
    let arrRef = useRef([]);

    // 초마다 급상승 차트를 변경하는 로직
    useEffect(() => {
        const risingStar = setInterval(() => {
            arrRef.current = risingData.riseingdata[riseRef.current];
            riseRef.current++;
            setState(state => arrRef.current);
            if (riseRef.current > 9) {
                riseRef.current = 0;
            }
        }, 3000);

        return () => clearInterval(risingStar);
    }, [state]);

    return (
        <>
            <Top10ListWrapper>
                <RollingContainer className="roll">
                    <RollingInner>
                        {/* useState의 기본값 mock data를 state.rank와 state.title로 랭크와 타이틀을 가져옴 */}
                        {state.rank}. {state.title}
                        <InnerChart>
                            {/* mock data를 가져와 맵으로 목록 전체를 보여줌 */}
                            {risingData.riseingdata.map((el, index) => (
                                <Ul>
                                    <Li>
                                        {el.rank} {el.title}
                                    </Li>
                                </Ul>
                            ))}
                        </InnerChart>
                    </RollingInner>
                </RollingContainer>
            </Top10ListWrapper>
        </>
    );
};
export default HeaderSearchChart;

const Top10ListWrapper = styled.div`
    line-height: 1;
    margin-left: -50px;
    margin-top: 6px;
    z-index: 100;
`;

const Ul = styled.ul`
    list-style: none;
    font-size: 12px;

    margin-left: -30px;
`;

const Li = styled.li`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const RollingContainer = styled.div`
    font-size: 12px;
    width: 180px;
    height: 20px;
    &:hover div {
        display: block;
    }
    margin-left: 60px;
`;

const RollingInner = styled.div`
    width: 100px;
`;

const InnerChart = styled.div`
    display: none;
    border: 1px solid #ccc;
    background-color: #fff;
`;
