import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout/Layout';
import Routesx from './Routesx';
import { GlobalStyle } from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/theme';

type ThemeContextType = {
    theme: string;
    setTheme: (value: string) => void;
};

export const ThemeContext = React.createContext<
    ThemeContextType | undefined
>(undefined);

const App = () => {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === 'light' ? lightTheme : darkTheme;
    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>

            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Helmet>
                    <title>
                        Snmp
                    </title>

                </Helmet>
                <>
                    <Layout>
                        <Routesx />
                    </Layout>
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default App;