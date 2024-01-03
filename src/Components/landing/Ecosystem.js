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
import news1 from "../../images/news1.jpg";
import news2 from "../../images/news2.webp";
import news3 from "../../images/news3.webp";
import news4 from "../../images/news4.jpg";
import news5 from "../../images/news5.jpg";
import token from "../../images/token-icon.png";
import nft from "../../images/nft-icon.png";
import defi from "../../images/defi-icon.png";

const Ecosystem = ({ darkmode, isMobile, setElement }) => {
  var [item, setItem] = useState([
    slider1,
    slider2,
    slider3,
    slider1,
    slider2,
    slider3,
  ]);
  const [items, setItems] = useState([
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
    {
      image: news3,
      title: "Blue Kirby NFT Mint",
      date: "December 25th 2023",
      link: "https://medium.com/@bluekirbyftm/blue-kirby-nft-mint-9624039b4254",
    },
    {
      image: news4,
      title: "kings remain kings. $KIRBY",
      date: "December 21st 2023",
      link: "https://medium.com/@bluekirbyftm/kings-remain-kings-kirby-058f1e8e39ed",
    },
    {
      image: news5,
      title: "FTM’s mascot nemesis Blue Kirby “Fi”",
      date: "December 15th 2023",
      link: "https://medium.com/@bluekirbyftm/ftms-mascot-nemesis-blue-kirby-fi-5d86b5024153",
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
            <Box position={"relative"} className="ecosystem-card" >
              <Box position={"absolute"} top={"1rem"} left={"5rem"} zIndex={1}>
                <p className="ecosystem-text">Blue Kirby Incubator</p>
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
                <p className="ecosystem-text">Blue Kirby NFTs</p>
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
                <p className="ecosystem-text">Blue Kirby DeFi</p>
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
                    <Box mx={{ xs: "0rem", sm: "2rem" }} key={index} >
                      <div className="news-box-wrapp ">
                        <img src={item.image} alt="slider" className="news-img-wrapp" />
                      </div>
                      <Typography
                        fontSize={"13px"}
                        color={"gray"}
                        mt={"7rem"}
                        ml={"5px"}
                      >
                        {item.date}
                      </Typography>
                      <Typography fontSize={"15px"} color={darkmode?"white":"black"} ml={"5px"}>
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
