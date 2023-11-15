//차트 뿌려주는곳

import styled from 'styled-components';

// 2페어 차필우 허진욱
const Charts = () => {
    return (
        <>
            {/*  멜론차트 */}
            <div class="chart">
                <h2>
                    <TITLE_LINK
                        href="/chart/index.htm"
                        data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R01&amp;ACTION_AF_CLICK=V2"
                    >
                        멜론차트
                        <div class="wrap_chart_ab">
                            <ul>
                                {/* 실시간 차트 */}
                                <li class="on nth1">
                                    <a
                                        href="avascript:;"
                                        title="TOP100 보기"
                                        class="d_link tab_link realtime"
                                    >
                                        <span></span>
                                        <span class="none">TOP100</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </TITLE_LINK>
                </h2>
                <div />
                <ul>
                    <li class="ntn1 on">
                        {/* <a
                            href="javascript:;"
                            title="TOP100 보기"
                            class="d_link tab_link realtime"
                        >
                            <span></span>
                        </a> */}
                        <span class="none">TOP100</span>
                        <div class="list_wrap typeRealtime">
                            <span class="txt_intro">
                                2023.11.14 <strong>22:00</strong> 기준
                            </span>
                            <ul>
                                <li class="rank_item active">
                                    <div class="rank_number nth1">
                                        <span class="rank">1</span>
                                        <span class="none">위</span>

                                        <span class="ranking_num static">
                                            <span class="num">0</span>
                                            <span class="icon">순위 동일</span>
                                        </span>
                                    </div>
                                    <div class="rank_cntt">
                                        <div class="thumb">
                                            {/* <a
                                                href="javascript:melon.link.goAlbumDetail('11333459');"
                                                title="I'VE MINE"
                                                class="mlog"
                                                data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=11333459"
                                            > */}
                                            {/* <img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/album/images/113/33/459/11333459_20231013103537_500.jpg/melon/quality/80/resize/48/optimize" alt=""> */}
                                            <span class="bg_album_frame"></span>
                                            {/* </a> */}
                                            {/* <div class="rank_info">
                                                <p
                                                    class="song"
                                                    data-song-no="36871671"
                                                >
                                                    <a
                                                        href="javascript:melon.play.playSong('10010101',36871671);"
                                                        class="ellipsis mlog"
                                                        title="Baddie"
                                                        data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=36871671"
                                                    >
                                                        Baddie
                                                    </a>
                                                </p>
                                                <div class="artist">
                                                    <div class="ellipsis">
                                                        <a
                                                            href="javascript:melon.link.goArtistDetail('3055146');"
                                                            title="IVE (아이브) - 페이지 이동"
                                                            class="fc_mgray mlog"
                                                            data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=3055146"
                                                        >
                                                            IVE (아이브)
                                                        </a>
                                                        <span
                                                            class="checkEllipsisRealtimeChart"
                                                            style="display: none;"
                                                        >
                                                            <a
                                                                href="javascript:melon.link.goArtistDetail('3055146');"
                                                                title="IVE (아이브) - 페이지 이동"
                                                                class="fc_mgray mlog"
                                                                data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=3055146"
                                                            >
                                                                IVE (아이브)
                                                            </a>
                                                            <span
                                                                class="checkEllipsisRealtimeChart"
                                                                style="display: none;"
                                                            >
                                                                <a
                                                                    href="javascript:melon.link.goArtistDetail('3055146');"
                                                                    title="IVE (아이브) - 페이지 이동"
                                                                    class="fc_mgray mlog"
                                                                    data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=3055146"
                                                                >
                                                                    IVE (아이브)
                                                                </a>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                ::after
                                            </div> */}
                                        </div>
                                        ::after
                                    </div>
                                    ::after
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="ranl_itwm odd">
                        <div class="rank_number nth2">
                            <span class="rank">2</span>
                            <span class="none">위</span>
                            <span class="ranking_num up">
                                <span class="num">1</span>
                                <span class="icon">단계 상승</span>
                            </span>
                        </div>
                        <div class="rank_cnff"></div>
                    </li>

                    <li> pop </li>
                    <li> 아티스트 </li>
                </ul>
                <div>
                    <ul>charItem.map</ul>
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
