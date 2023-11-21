// 3페어 최하영 김진솔
import { Outlet } from 'react-router-dom';

import Footer from './footer';
import Header from './header';

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
