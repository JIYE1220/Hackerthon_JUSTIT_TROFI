import React from 'react';
import ReactDOM from 'react-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';
import amber from '@material-ui/core/colors/amber';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Introduction from './Components/Introduction';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    primaryLight: {
      main: purple[500],
    },
    secondary: {
      main: amber[500],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Introduction />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
