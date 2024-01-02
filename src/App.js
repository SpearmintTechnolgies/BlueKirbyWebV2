import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Herosection from "./Components/landing/Card1";
import "./App.css";
import "./Generate.css";
import ThirdSection from "./Components/landing/ThirdSection";
import Ecosystem from "./Components/landing/Ecosystem";
import History from "./Components/landing/History";
import Footer from "./Components/Footer";

const theme = createTheme({
  typography: {
    fontFamily: "POPPINS, sans-serif",
  },
});

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [darkmode, setDarkmode] = useState(
    // Check if dark mode is stored in localStorage, use it; otherwise, default to true (dark mode)
    JSON.parse(localStorage.getItem("darkmode")) !== null
      ? JSON.parse(localStorage.getItem("darkmode"))
      : true
  );

  useEffect(() => {
    document.body.style.backgroundColor = darkmode ? "#13171E" : "#D3DEEE";
  }, [darkmode]);

  useEffect(() => {
    const handleResize = () => {
      const mobileThreshold = 600;
      const isMobileView = window.innerWidth < mobileThreshold;

      if (isMobile !== isMobileView) {
        setIsMobile(isMobileView);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <ThemeProvider theme={theme}>
      <Box className="main">
        <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
        <Herosection darkmode={darkmode} isMobile={isMobile} />
        <Ecosystem darkmode={darkmode} isMobile={isMobile} />
        <ThirdSection darkmode={darkmode} isMobile={isMobile} />
        <History darkmode={darkmode} isMobile={isMobile} />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
