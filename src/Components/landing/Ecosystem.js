import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import ReactSimplyCarousel from "react-simply-carousel";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import latestimage1 from "../images/latest-news1.webp";
import latestimage2 from "../images/latest-news2.webp";
import latestimage3 from "../images/latest-news3.webp";

const Ecosystem = ({ darkmode, isMobile, setElement }) => {
  const news1 = "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/news1.jpg";
  const news2 = "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/news2.webp";
  const news3 = "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/news3.webp";
  const news4 = "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/news4.jpg";
  const news5 = "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/news5.jpg";
  const token =
    "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/token-icon.png";
  const nft = "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/nft-icon.png";
  const defi =
    "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/defi-icon.png";

  const [items, setItems] = useState([
    {
      image: latestimage1,
      title: "slime hosting presale on kirbpad!",
      date: "January 13th 2024",
      link: "https://medium.com/@bluekirbyftm/slime-hosting-presale-on-kirbpad-c1916fca28b5",
    },
    {
      image: latestimage2,
      title: "Kirbypad first launch incoming.",
      date: "January 9th 2024",
      link: "https://medium.com/@bluekirbyftm/kirbypad-first-launch-incoming-531e42bbe0d7",
    },
    {
      image: latestimage3,
      title: "Few Understand. $kirby",
      date: "January 5th 2024",
      link: "https://medium.com/@bluekirbyftm/few-understand-kirby-44cf1ab806df",
    },
    {
      image: news1,
      title: "Kirbypad and the future of FTM",
      date: "January 1st 2024",
      link: "https://medium.com/@bluekirbyftm/kirbypad-and-the-future-of-ftm-d922e9a9174a",
    },
    {
      image: news2,
      title: "Glory follows virtue as if it were it’s shadow. $kirby",
      date: "December 28th 2023",
      link: "https://medium.com/@bluekirbyftm/glory-follows-virtue-as-if-it-were-its-shadow-kirby-c2e13151d842",
    },
   
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
                <EastIcon
                  sx={{ color: "#007dff" }}
                  fontSize="large"
                  className="scale"
                />
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
                <IconButton href="https://paintswap.finance/" target="_blank">
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
                {items.map((item, index) => (
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
