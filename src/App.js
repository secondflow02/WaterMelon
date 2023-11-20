import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import waterMelon from './routes/route';
import theme from './styles/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={waterMelon} />
        </ThemeProvider>
    );
}

export default App;
