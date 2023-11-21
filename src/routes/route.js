import TicketLayout from 'pages/waterMelonTicket/layouts/layout';
import Ticketpage from 'pages/waterMelonTicket/TicketPage';
import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../layouts/layout';
import MainPage from '../pages/main/mainPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '',
                element: <MainPage />,
            },
        ],
    },
    {
        path: '/',
        element: <TicketLayout />,
        children: [
            {
                path: '/ticketpage',
                element: <Ticketpage />,
            },
        ],
    },
]);
export default router;
