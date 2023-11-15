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
]);
export default router;
