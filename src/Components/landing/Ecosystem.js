import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import ReactSimplyCarousel from "react-simply-carousel";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { News } from "../../utils/getNews";

const Ecosystem = ({ darkmode, isMobile, setElement }) => {
  const token =
    "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/token-icon.png";
  const nft = "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/nft-icon.png";
  const defi =
    "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/defi-icon.png";

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

  React.useEffect(() => {
    let element = document.getElementById("ecosystem");
    setElement(element);
  }, []);
  return (
    <Box my={"2rem"}>
      <Container maxWidth="xl" className="global-flex" id="ecosystem">
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
            <Box position={"relative"} className="ecosystem-card">
              <Box position={"absolute"} top={"1rem"} left={"5rem"} zIndex={1}>
                <p className="ecosystem-text">
                  Blue Kirby <br></br> Incubator
                </p>
              </Box>
              <img
                src={token}
                alt="token"
                width={300}
                className="scale"
                style={{ position: "relative", zIndex: 5 }}
              />
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
                  Launchpad
                </Typography>
                <IconButton href="https://app.bluekirby.io/" target="_blank">
                  <EastIcon
                    sx={{ color: "#007dff" }}
                    fontSize="large"
                    className="scale"
                  />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Box position={"relative"} className="ecosystem-card">
              <Box position={"absolute"} top={"1rem"} left={"5rem"} zIndex={1}>
                <p className="ecosystem-text">
                  Blue Kirby <br></br> NFTs
                </p>
              </Box>
              <img
                src={nft}
                alt="token"
                width={250}
                className="scale"
                style={{ position: "relative", zIndex: 5 }}
              />
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
                <IconButton
                  href="https://paintswap.finance/marketplace/fantom/collections/blue-friends"
                  target="_blank"
                >
                  <EastIcon
                    sx={{ color: "#007dff" }}
                    fontSize="large"
                    className="scale"
                  />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Box position={"relative"} className="ecosystem-card">
              <Box position={"absolute"} top={"1rem"} left={"5rem"} zIndex={1}>
                <p className="ecosystem-text">
                  Blue Kirby <br></br> DeFi
                </p>
              </Box>
              <img
                src={defi}
                alt="token"
                width={200}
                className="scale"
                style={{ position: "relative", zIndex: 5 }}
              />
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
                  Kirbot
                </Typography>
                <EastIcon
                  sx={{ color: "#007dff" }}
                  fontSize="large"
                  className="scale"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box className={darkmode ? "dark-box" : "white-box"} mt={"2rem"}>
          <Typography
            fontSize={{ xs: "20px", sm: "35px", lg: "40px" }}
            fontWeight={"800"}
            color={"#007dff"}
            textAlign={{ xs: "center", sm: "center", lg: "start" }}
            mx={"2rem"}
            mb={"2rem"}
          >
            Updates
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
                {News.map((item, index) => (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <Box mx={{ xs: "0rem", sm: "2rem" }} key={index}>
                      <div className="news-box-wrapp ">
                        <img
                          src={item.image}
                          alt="slider"
                          className="news-img-wrapp"
                        />
                      </div>
                      <Typography
                        fontSize={"13px"}
                        color={"gray"}
                        mt={"7rem"}
                        ml={"5px"}
                      >
                        {item.date}
                      </Typography>
                      <Typography
                        fontSize={"15px"}
                        color={darkmode ? "white" : "black"}
                        ml={"5px"}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </a>
                ))}
              </ReactSimplyCarousel>
            </div>

            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mx={"2rem"}
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
