import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import {
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import "./App.css";
import Herosection from "./Components/landing/Card1";

const theme = createTheme({
  typography: {
    fontFamily: "POPPINS, sans-serif",
  },
});

const App = () => {
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

  return (
    <ThemeProvider theme={theme}>
      <Box className="main">
        <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
       <Herosection darkmode={darkmode} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
