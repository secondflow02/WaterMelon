//차트 뿌려주는곳

import styled, { css } from "styled-components";

// 2페어 차필우 허진욱
const Charts = () => {
  return (
    <>
      <div class="chart">
        <h2>
          <a href=""> 멜론 차트</a>
        </h2>
      </div>
      <div class="TOP100 chart"></div>
      <ul>
        <li class="TOP100">
            <a href="" title="TOP100 보기">
                <span></span>
                </a>
                <span class="none">TOP100</span>
        </li>
      </ul>
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
