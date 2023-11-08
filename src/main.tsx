import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';

import routes from 'routes/Routes';
import { theme } from 'theme';

import { configStore } from '@/redux-modules/store';
const { store } = configStore();

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes()} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
