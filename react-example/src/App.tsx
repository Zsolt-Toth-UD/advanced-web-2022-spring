import React from 'react';
import './App.css';
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material";
import {green, red} from "@mui/material/colors";
import DefaultReactContent from "./pages/DefaultReactContent";
import CarManager from "./pages/CarManager";

const theme = createTheme({
    palette: {
        primary: {
            main: green[200]
        }
    }
});

function App() {


    return (
        <ThemeProvider theme={theme}>
            <CarManager/>
            <DefaultReactContent/>
        </ThemeProvider>
    );
}

export default App;
