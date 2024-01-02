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
    JSON.parse(localStorage.getItem("darkmode")) || false
  );

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem("darkmode")) || false;
    console.log(savedDarkMode, "mode");
    setDarkmode(savedDarkMode);
    document.body.style.backgroundColor = savedDarkMode ? "#13171E" : "#D3DEEE";
  }, []);

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkmode));
    document.body.style.backgroundColor = darkmode ? "#13171E" : "#D3DEEE";
  }, [darkmode]);

  useEffect(() => {
    const handleResize = () => {
      // Check if the window width is below a certain threshold (e.g., 600 pixels)
      const mobileThreshold = 600;
      const isMobileView = window.innerWidth < mobileThreshold;

      // Update the state if the mobile view status changes
      if (isMobile !== isMobileView) {
        setIsMobile(isMobileView);
      }
    };

    // Initial check on component mount
    handleResize();

    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <ThemeProvider theme={theme}>
      <Box className="main">
        <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
        <Herosection darkmode={darkmode} isMobile={isMobile} />
        <Ecosystem darkmode={darkmode} isMobile={isMobile}/>
        <ThirdSection darkmode={darkmode} isMobile={isMobile}/>
        <History darkmode={darkmode} isMobile={isMobile} />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
