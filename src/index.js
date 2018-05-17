import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components'

const theme = {
  color: {
    state: {
      success: 'hsl(90, 100%, 70%)',
      notice: 'hsl(200, 100%, 70%)',
      warning: 'hsl(50, 100%, 70%)',
      error: 'hsl(0, 100%, 70%)'
    }
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
