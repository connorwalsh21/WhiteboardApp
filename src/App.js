import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.scss';
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';
import Routes from "./Routes";

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                    primary: { light: grey[300], main: grey[900], dark: grey[900] },
                    secondary: { light: teal[300], main: teal[400], dark: teal[400] },
                },
            }),
        [prefersDarkMode],
    );

    // CssBaseline is literally just to get the background color change to apply
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div>
                <Routes />
            </div>
        </ThemeProvider>
    )
}

export default App;

