import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // strict mode doesn't impact build, it's just to check for unsafe lifecycles and unexpected side effects
  <React.StrictMode>
    // theme provider is good place to add some global styles or reset css
    {/* <ThemeProvider theme={theme} > */}
    {/* {theme} aint working cause you haven't sudo npm i styled-components , do u even want styled-components anyway? */}
    <App />
        // tbh should use Link in navbar so that pages don't reload like an anchor in html
  // when route path and url location match, a match object is created
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();