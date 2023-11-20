// 3페어 최하영 김진솔
import { Outlet } from 'react-router-dom';

import TicketFooter from './footer/TicketFooter';
import TicketHeader from './header/TicketHeader';

const TicketLayout = () => {
    return (
        <>
            <TicketHeader />

            <Outlet />

            <TicketFooter />
        </>
    );
};
export default TicketLayout;
