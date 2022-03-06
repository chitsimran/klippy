import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/system';
import AppRoutes from "./components/AppRoutes";
import { theme } from "./theme";

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <AppRoutes />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
