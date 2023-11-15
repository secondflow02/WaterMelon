// 3페어 최하영 김진솔
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
export default RootLayout;
