import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styling/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    {/* Strict mode doesn't impact build, it's just to check for unsafe lifecycles and unexpected side effects */}

    {/* <ThemeProvider theme={theme} > */}
    {/* Use ThemeProvider for Reset CSS or Global Styles */}
    {/* A Dark Mode Toggle with React and ThemeProvider */}
    {/* https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/ */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
