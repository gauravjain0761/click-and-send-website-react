import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "./context/ThemeContext";
import Index from "./pages";
import './App.css';

const App = () => {
  const [state, setState] = useState({ theme: "dark" });

  return (
    <>
      <BrowserRouter>
        <Route component={ScrollToTop} />
        <ThemeProvider
          value={{
            data: state,
            update: (themeVal) => {
              setState({
                theme: themeVal,
              });
            },
          }}
        >
          <Index />
          <ToastContainer
            position="top-right"
            autoClose={1000}
            theme="colored" />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};
export default App;

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};
