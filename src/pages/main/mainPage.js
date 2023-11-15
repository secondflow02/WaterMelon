// 공용 2조

import Charts from "./components/MelonCharts/Charts";
import PopularContentsContainer from "./components/PopularContents/PopularContentsContainer";
import MainBanner from "./components/MainBanner";
import Notice from "./components/Notice";

const MainPage = () => {
    return (
        <>
            <MainBanner />
            <PopularContentsContainer />
            <Charts />
            <Notice />
        </>
    );
};
export default MainPage;
