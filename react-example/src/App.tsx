import React from 'react';
import './App.css';
import {Button, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material";
import {green, red} from "@mui/material/colors";
import DefaultReactContent from "./pages/DefaultReactContent";
import CarManager from "./pages/CarManager";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

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
            <BrowserRouter>
                <Button>
                    <Link to={'/'}>Default</Link>
                </Button>
                <Button>
                    <Link to={'/cars'}>Cars</Link>
                </Button>
                <Routes>
                    <Route path={"/"} element={<DefaultReactContent/>}/>
                    <Route path={"/cars"} element={<CarManager/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
