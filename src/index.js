import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from './store';
import theme from './assets/theme';
import App from './App';

import 'normalize.css'
import "@/assets/css/index.less"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense>
        <HashRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </Provider>
        </HashRouter>
    </Suspense>
);
