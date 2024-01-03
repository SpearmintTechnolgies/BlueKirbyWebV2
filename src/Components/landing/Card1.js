import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import heromaindark from "../../images/hero-main-dark.png";
import heromainlight from "../../images/hero-main-light.png";
import icon from "../../images/iconsmall.svg";
import Slider from "../Slider";
import heroseconddark from "../../images/hero-second-dark.png";
import heromain2 from '../../images/hero-main-2.png'

const Herosection = ({ darkmode, isMobile }) => {
  return (
    <Box my={"2rem"}>
      <Container maxWidth="xl" className="global-flex">
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={"3rem"}
        >
          <Grid container spacing={5}>
            <Grid item xs={12} sm={8} lg={8} xl={8}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={{ lg: "100%", sm: "100%" }}
                position={"relative"}
              >
                <img
                  src={darkmode ? heromaindark : heromainlight}
                  alt="main"
                  className="w-full"
                />
                <Box
                  position={"absolute"}
                  top={{ xs: "20px", sm: "40px" }}
                  left={"40px"}
                >
                  <Typography
                    fontSize={{ xs: "20px", sm: "40px", lg: "70px" }}
                    fontWeight={"900"}
                    color={darkmode ? "white" : "black"}
                  >
                    Blue Kirby
                  </Typography>
                  <Typography
                    fontSize={{ xs: "20px", sm: "40px", lg: "70px" }}
                    fontWeight={"900"}
                    color={"#007DFF"}
                  >
                    Kings remain kings.
                  </Typography>
                </Box>
                <Box
                  position={"absolute"}
                  bottom={{ xs: "10px", sm: "50px" }}
                  left={"40px"}
                >
                  <Typography
                    fontSize={{ xs: "10px", sm: "15px", lg: "20px" }}
                    color={darkmode ? "white" : "black"}
                  >
                    MemeFi ecosystem based on Fantom
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"2rem"}
                  position={"absolute"}
                  bottom={"40px"}
                  right={{ sm: "60px", xs: "150px" }}
                >
                  <a
                    href="https://www.dextools.io/app/en/fantom/pair-explorer/0x3684706b32648757bbf9c234b18689d1a225b857"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className={darkmode ? "white-button" : "black-button"}
                    >
                      Chart
                    </button>
                  </a>
                  <a
                    href="https://spooky.fi/#/swap?inputCurrency=FTM&outputCurrency=0x97bdAfe3830734acF12Da25359674277fcc33729"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="blue-button">Buy KIRBY</button>
                  </a>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} lg={4} xl={4}>
              <Box
                display={{ xs: "hidden", sm: "flex" }}
                justifyContent={"center"}
                alignItems={"center"}
                position={"relative"}
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/39a2/4292/c6eedc8b1346512ddcefe16676e7a5f5?Expires=1704672000&Signature=hEWl2N8-bfYJIHyDGQJxQrCZnHJxvdq3sLIAxdnQIIhPurgYdIJMkY0KeyxGOgY12L5G3gu1AWZ6wQ-1XcXix33ZpBhohXHmxFu-tgD6fWftiw-9-6Z3JH5FHnEZMvTBZPYOFLoQ~PSFDM0pgdM92hOjL~70utcdvBZN~FHyCxc7ea9w9-TTGtSX0sLTLMt52wqrkNzDfMxRtpQEfAxaIVC1OPYOCrawVe4j7-yTwi4osKqk0xOJIUzbCvBiIHAbtE-rOyL47I9azRjU7wWa0aTaACC8i2vO20B7wfhAZA~JEvq~pTrqCEri9HgCXTL-ThO2MSaJQ4cZWlmSmR77jQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                //  src={heromain2}
                  alt="main"
                  className="gif-wrapp"
                />
                <Box position={"absolute"} top={"40px"} left={"30px"}>
                  <button className="blue-button">
                    <img src={icon} alt="bg"></img>
                    Blue Kirby
                  </button>
                  <Typography
                    fontSize={{ xs: "40px", sm: "35px", lg: "50px" }}
                    fontWeight={"600"}
                    color={"white"}
                  >
                    Leading the Fantom<br></br> bullrun.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* auto scroller section */}
          <Slider />

          <Box position={"relative"} width={"100%"}>
            <img
              src={darkmode ? heroseconddark : heromainlight}
              alt="main2"
              width={"100%"}
            />
            <Box
              position={"absolute"}
              top={{ xs: "20px", sm: "60px", lg: "100px" }}
              left={{ xs: "30px", sm: "60px" }}
            >
              <Typography
                fontSize={{ xs: "15px", sm: "35px", lg: "45px" }}
                fontWeight={"800"}
                color={darkmode ? "white" : "black"}
              >
                Community of builders, devs,
                <br /> marketers, and designers.
              </Typography>
            </Box>
            <Box
              position={"absolute"}
              bottom={{ xs: "25px", sm: "50px", lg: "100px" }}
              left={{ xs: "30px", sm: "60px" }}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                fontSize={{ xs: "13px", sm: "35px", lg: "50px" }}
                fontWeight={"800"}
                color={"#007dff"}
                maxWidth={{ xs: "250px", sm: "650px", lg: "750px" }}
              >
                The glory of Fantom
              </Typography>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"2rem"}
              position={"absolute"}
              bottom={{ lg: "120px", sm: "60px", xs: "150px" }}
              right={{ lg: "100px", sm: "60px", xs: "150px" }}
            >
              <a
                href="https://t.me/bluekirbyftm"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  className={`${
                    darkmode ? "white-button" : "black-button"
                  } desktop-view`}
                >
                  Explore
                </button>
              </a>
              <a
                href="https://spooky.fi/#/swap?inputCurrency=FTM&outputCurrency=0x97bdAfe3830734acF12Da25359674277fcc33729"
                target="_blank"
                rel="noreferrer"
              >
                <button className="blue-button desktop-view">Buy KIRBY</button>
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Herosection;
