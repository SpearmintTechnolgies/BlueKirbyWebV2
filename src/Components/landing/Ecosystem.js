import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import tokencard from "../../images/tokencard.png";
import nftcard from "../../images/nftcard.png";
import deficard from "../../images/deficard.png";
import EastIcon from "@mui/icons-material/East";
import ReactSimplyCarousel from "react-simply-carousel";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import slider1 from "../../images/slider1.png";
import slider2 from "../../images/slider2.png";
import slider3 from "../../images/slider3.png";

const Ecosystem = ({ darkmode, isMobile }) => {
  var [item, setItem] = useState([
    slider1,
    slider2,
    slider3,
    slider1,
    slider2,
    slider3,
  ]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);


  const buttonRef = React.useRef(null);
  const handleDivClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };
  const buttonRef1 = React.useRef(null);
  const handleDivClick1 = () => {
    if (buttonRef1.current) {
      buttonRef1.current.click();
    }
  };
  return (
    <Box my={"2rem"}>
      <Container maxWidth="xl" className="global-flex">
        <Typography
          fontSize={{ xs: "20px", sm: "35px", lg: "40px" }}
          fontWeight={"800"}
          color={"#007dff"}
          textAlign={{ xs: "center", sm: "center", lg: "start" }}
        >
          Ecosystem
        </Typography>
        <Typography
          fontSize={{ xs: "25px", sm: "35px", lg: "50px" }}
          fontWeight={"800"}
          color={darkmode ? "white" : "black"}
          letterSpacing={"2px"}
          textAlign={{ xs: "center", sm: "center", lg: "start" }}
        >
          The Kirby Ecosystem
        </Typography>

        <Grid
          container
          mt={"2rem"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item xs={12} sm={6} lg={4}>
            <Box position={"relative"}>
              <img src={tokencard} alt="token" width={600} />
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                position={"absolute"}
                width={"100%"}
                px={"3rem"}
                bottom={"30px"}
              >
                <Typography fontSize={"30px"} color={"white"}>
                  Token
                </Typography>
                <EastIcon sx={{ color: "#007dff" }} fontSize="large" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Box position={"relative"}>
              <img src={nftcard} alt="token" width={600} />
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                position={"absolute"}
                width={"100%"}
                px={"3rem"}
                bottom={"30px"}
              >
                <Typography fontSize={"30px"} color={"white"}>
                  NFTs
                </Typography>
                <EastIcon sx={{ color: "#007dff" }} fontSize="large" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Box position={"relative"}>
              <img src={deficard} alt="token" width={600} />
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                position={"absolute"}
                width={"100%"}
                px={"3rem"}
                bottom={"30px"}
              >
                <Typography fontSize={"30px"} color={"white"}>
                  DeFi
                </Typography>
                <EastIcon sx={{ color: "#007dff" }} fontSize="large" />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box className={darkmode ? "dark-box" : "white-box"} mt={"2rem"}>
          <Typography
            fontSize={{ xs: "20px", sm: "35px", lg: "40px" }}
            fontWeight={"800"}
            color={"#007dff"}
            textAlign={{ xs: "center", sm: "center", lg: "start" }} mx={'2rem'}
          >
            Updates
          </Typography>
          <Typography
            fontSize={{ xs: "25px", sm: "35px", lg: "50px" }}
            fontWeight={"800"}
            color={darkmode ? "white" : "black"}
            letterSpacing={"2px"}
            textAlign={{ xs: "center", sm: "center", lg: "start" }} mx={'2rem'}
          >
            Kirby News
          </Typography>
          <Typography
            fontSize={"20px"}
            fontWeight={"800"}
            color={"#007dff"}
            textAlign={"end"} mx={'2rem'}
          >
            More
          </Typography>
          <Box width={"100%"} height={"100%"}>
            <div>
              <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                  //here you can also pass className, or any other button element attributes
                  style: {
                    display: "none",
                  },
                  children: <span ref={buttonRef}>{`>`}</span>,
                }}
                backwardBtnProps={{
                  //here you can also pass className, or any other button element attributes
                  style: {
                    display: "none",
                  },
                  children: <span ref={buttonRef1}>{`<`}</span>,
                }}
                responsiveProps={[
                  {
                    itemsToShow: 5,
                    itemsToScroll: 1,
                    minWidth: 768,
                  },
                ]}
                speed={400}
                easing="linear"
              >
                {item.map((image, index) => (
                  <Box
                    width={400}
                    mx={{ xs: "0rem", sm: "2rem" }}
                    p={"2rem"}
                    key={index}
                  >
                    <img src={image} alt="slider" />
                    <Typography
                      fontSize={"13px"}
                      color={"gray"}
                      mt={"1rem"}
                      ml={"5px"}
                    >
                      December 26th 2023
                    </Typography>
                    <Typography fontSize={"15px"} color={"white"} ml={"5px"}>
                      Lorem Ipsum is simply dummy text
                    </Typography>
                  </Box>
                ))}
              </ReactSimplyCarousel>
            </div>

            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mx={'2rem'}
            >
              <IconButton onClick={handleDivClick1}>
                <ArrowBackIcon sx={{ color: "#007dff" }} fontSize="large" />
              </IconButton>
              <IconButton onClick={handleDivClick}>
                <EastIcon sx={{ color: "#007dff" }} fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Ecosystem;
