import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import bnbicon from "../../images/bnb-icon.png";
import walleticon from "../../images/wallet-icon.png";
import powerKirby from "../../images/power-kirby.png";
import powerKirbymobile from "../../images/power-kirby-mobile.png";
import okxicon from "../../images/okx-icon.png";
import tokenicon from "../../images/token-icon.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ReactSimplyCarousel from "react-simply-carousel";
import earth from "../../images/earth.png";
import earthbutton from "../../images/earth-mobile.png";
import lbank from "../../images/Lbank.png";
import spookyswap from "../../images/spookyswap.png";
import solidly from "../../images/solidly.png";
import equalizer from "../../images/equilizer.png";
import { Home } from "@mui/icons-material";

function Item({ item, darkmode, active, index }) {
  return (
    <div className={darkmode ? "main-container-black" : "main-container-white"}>
      <div className="frame-1">
        <Typography
          color={darkmode ? "white" : "black"}
          fontSize={{ xs: "20px", sm: "40px" }}
          fontWeight={700}
          marginTop={{ xs: "50px", lg: "0px" }}
        >
          {item.title}
        </Typography>
        <Box
          className={active === 2 ? "vector-active" : "vector-inactive"}
          top={{ xs: "1rem", lg: "30px" }}
          left={{ xs: "1rem", sm: "50rem", lg: "63rem" }}
        ></Box>
        <Box
          className={active === 0 ? "vector-active" : "vector-inactive"}
          top={{ xs: "1rem", lg: "30px" }}
          left={{ xs: "6.5rem", sm: "44rem", lg: "69rem" }}
        ></Box>
        <Box
          className={active === 1 ? "vector-active" : "vector-inactive"}
          top={{ xs: "1rem", lg: "30px" }}
          left={{ xs: "12rem", sm: "38rem", lg: "75rem" }}
        ></Box>
        <div className="frame-2">
          <Typography
            color={darkmode ? "white" : "black"}
            fontSize={{ xs: "10px", sm: "20px" }}
            maxWidth={{ xs: "250px", sm: "1000px" }}
          >
            {item.description}
          </Typography>
          <div className="frame-3">
            {index === 0 && (
              <a
                href="https://t.me/bluekirbyftm"
                target="_blank"
                rel="noreferrer"
              >
                <button className="blue-button">Join the Community</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ThirdSection({ darkmode, isMobile, setElement1 }) {
  const [items, setItems] = useState([
    {
      title: "Community",
      description:
        "Blue Kirby has one of the strongest memecoin communities in all of crypto. Never ending grit and persistence is what keeps us together. Good vibes mixed with a professional family of admins, devs, builders, designers and advisors.",
    },
    {
      title: "Longevity",
      description:
        "Blue Kirby is not just a momentary trend; it's a journey for the long haul. We focus on sustainable growth, building a foundation for longevity in the crypto space. Our vision extends beyond the immediate future, ensuring Blue Kirby's enduring impact.",
    },
    {
      title: "Innovation",
      description:
        "Blue Kirby thrives on innovation, constantly pushing the boundaries of what's possible in the crypto space. From cutting-edge technology to groundbreaking ideas, our commitment to innovation sets us apart and propels us toward new horizons.",
    },
  ]);
  const [cards, setCards] = useState([
    { card: "orange-card", image: lbank },
    { card: "gray-card", image: okxicon },
    { card: "blue-card", image: walleticon },
  ]);
  const [cards1, setCards1] = useState([
    {
      card: "orange-card",
      image: spookyswap,
      name: "SpookySwap",
      link: "https://spooky.fi/#/swap?inputCurrency=FTM&outputCurrency=0x97bdAfe3830734acF12Da25359674277fcc33729",
    },
    {
      card: "gray-card",
      image: solidly,
      name: "Solidly",
      link: "https://solidly.exchange/",
    },
    {
      card: "blue-card",
      image: equalizer,
      name: "Equalizer",
      link: "https://equalizer.exchange/swap",
    },
  ]);
  const [active, setActive] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeSlideIndex1, setActiveSlideIndex1] = useState(0);

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
    let element = document.getElementById("tokenomics");
    setElement1(element);
  }, []);
  return (
    <Box my={"2rem"}>
      <Container maxWidth="xl" className="global-flex">
        <Typography
          fontSize={{ xs: "20px", sm: "35px", lg: "40px" }}
          fontWeight={"800"}
          color={"#007dff"}
          textAlign={{ xs: "center", sm: "center", lg: "start" }}
        >
          Core Values
        </Typography>
        <Typography
          fontSize={{ xs: "25px", sm: "35px", lg: "50px" }}
          fontWeight={"800"}
          color={darkmode ? "white" : "black"}
          letterSpacing={"2px"}
          textAlign={{ xs: "center", sm: "center", lg: "start" }}
          mb={"2rem"}
        >
          Kirby's Three Pillars
        </Typography>

        <Carousel
          next={(next, active) => setActive(active)}
          animation="slide"
          interval={4000}
          duration={500}
        >
          {items.map((item, i) => (
            <Item
              key={i}
              item={item}
              darkmode={darkmode}
              active={active}
              index={i}
            />
          ))}
        </Carousel>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={12}>
            <Box
              className={
                darkmode ? "main-container-black" : "main-container-white"
              }
              mt={"2rem"}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
              >
                <Typography
                  color={darkmode ? "white" : "black"}
                  fontSize={{ xs: "15px", sm: "30px" }}
                >
                  Top Centralized Exchanges
                </Typography>
                {isMobile && (
                  <IconButton onClick={handleDivClick}>
                    <ArrowRightAltIcon
                      fontSize="large"
                      sx={{ color: "#007dff" }}
                    />
                  </IconButton>
                )}
              </Box>

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
                  children: <span>{`<`}</span>,
                }}
                responsiveProps={[
                  {
                    itemsToShow: 5,
                    itemsToScroll: 1,
                    minWidth: 868,
                  },
                ]}
                speed={400}
                easing="linear"
              >
                {cards.map((item, index) => (
                  <Box p={{ xs: "0px", sm: "6px" }}>
                    <Box className={item.card}>
                      {index === 0 || index === 3 ? (
                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                          width={"100%"}
                        >
                          <img src={item.image} alt="bnb" width={60} />
                        </Box>
                      ) : (
                        <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        width={"100%"}
                      >
                       <div className="blank-circle"></div>
                      </Box>
                      )}

                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        width={"100%"}
                      >
                        <Typography
                          fontSize={"20px"}
                          fontWeight={700}
                          color={"white"}
                        >
                          {index === 0 || index === 3 ? "LBank" : "Coming Soon"}
                        </Typography>
                        {index === 0 || index === 3 ? (
                          <a
                            href="https://www.lbank.com/trade/kirby_usdt"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className="bg-white rounded-lg px-4">
                              <ArrowRightAltIcon />
                            </button>
                          </a>
                        ) : (
                          <button className="bg-white rounded-lg px-4">
                            <ArrowRightAltIcon />
                          </button>
                        )}
                      </Box>
                    </Box>
                  </Box>
                ))}
              </ReactSimplyCarousel>

              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
              >
                <Typography
                  color={darkmode ? "white" : "black"}
                  fontSize={{ xs: "15px", sm: "30px" }}
                >
                  Top Decentralized Exchanges
                </Typography>
                {isMobile && (
                  <IconButton onClick={handleDivClick1}>
                    <ArrowRightAltIcon
                      fontSize="large"
                      sx={{ color: "#007dff" }}
                    />
                  </IconButton>
                )}
              </Box>

              <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex1}
                onRequestChange={setActiveSlideIndex1}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                  style: {
                    display: "none",
                  },
                  children: <span ref={buttonRef1}>{`>`}</span>,
                }}
                backwardBtnProps={{
                  style: {
                    display: "none",
                  },
                  children: <span>{`<`}</span>,
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
                {cards1.map((item, index) => (
                  <Box p={{ xs: "0px", sm: "6px" }}>
                    <Box className={item.card}>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        width={"100%"}
                      >
                        <img src={item.image} alt="bnb" width={60} />
                      </Box>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        width={"100%"}
                      >
                        <Typography
                          fontSize={"20px"}
                          fontWeight={700}
                          color={"white"}
                        >
                          {item.name}
                        </Typography>
                        <a href={item.link} target="_blank" rel="noreferrer">
                          <button className="bg-white rounded-lg px-4">
                            <ArrowRightAltIcon />
                          </button>
                        </a>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </ReactSimplyCarousel>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} id="tokenomics">
          <Grid item sm={12} lg={6}>
            <Box
              className={`${
                darkmode ? "main-container-black" : "main-container-white"
              } `}
              mt={"2rem"}
            >
              <div className="w-full">
                <div className="flex  flex-col gap-[12px] items-start shrink-0 flex-nowrap relative">
                  <span className="h-[32px] shrink-0 basis-auto font-['Poppins'] text-[30px] font-semibold leading-[31.8px] text-[#007dff] relative text-left whitespace-nowrap z-[1]">
                    About
                  </span>
                  <Typography
                    color={darkmode ? "white" : "black"}
                    fontSize={{ xs: "30px", sm: "40px", lg: "50px" }}
                    fontWeight={700}
                  >
                    Kirby Token
                  </Typography>
                </div>
                <div className="flex  flex-col gap-[67px] items-start shrink-0 flex-nowrap relative z-[3]">
                  <div className="flex  flex-col gap-[38px] items-start shrink-0 flex-nowrap relative z-[4]">
                    <Typography
                      color={darkmode ? "white" : "black"}
                      fontSize={{ xs: "20px", sm: "25px", lg: "35px" }}
                      fontWeight={700}
                    >
                      Powered by Fantom
                    </Typography>
                    <Typography
                      color={darkmode ? "white" : "black"}
                      fontSize={{ xs: "11px", sm: "20px", lg: "20px" }}
                    >
                      Kirby contract address <br />
                      FTM: 0x97bdAfe3830734acF12Da25359674277fcc33729
                    </Typography>
                  </div>
                  <div className="flex gap-2 flex-col md:flex-row w-full">
                    <a
                      href="https://ftmscan.com/token/0x97bdAfe3830734acF12Da25359674277fcc33729"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        className={`${
                          darkmode ? "white-button-v2" : "black-button-v2"
                        } w-full`}
                      >
                        FantomScan (FTM)
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item sm={12} lg={6}>
            <Box
              className={
                darkmode ? "main-container-black" : "main-container-white"
              }
              mt={"2rem"}
              width={"100%"}
            >
              <div className="w-[300px]">
                <Typography
                  fontSize={{ xs: "20px", sm: "30px", lg: "30px" }}
                  fontWeight={700}
                  color={"#007dff"}
                >
                  Finance
                </Typography>
                <Typography
                  fontSize={{ xs: "30px", sm: "40px", lg: "50px" }}
                  fontWeight={700}
                  color={darkmode ? "white" : "black"}
                >
                  Tokenomics
                </Typography>

                <div className="flex  flex-col gap-[32px] items-start shrink-0 flex-nowrap relative z-[3]">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-[25px] md:gap-[125px] items-start shrink-0 flex-nowrap relative z-[4]">
                    <div className="shrink-0 font-['Poppins'] text-[30px] font-semibold leading-[41.1px] relative text-left z-[5]">
                      <Typography color={"gray"}>
                        Total Supply
                        <br />
                      </Typography>
                      <Typography
                        color={!darkmode ? "black" : "white"}
                        fontSize={"25px"}
                        fontWeight={700}
                      >
                        3,175,000,000
                      </Typography>
                    </div>
                    <div className=" shrink-0 font-['Poppins'] text-[30px] font-semibold leading-[41.1px] relative text-left z-[6]">
                      <Typography color={"gray"}>
                        buy/sell tax
                        <br />
                      </Typography>
                      <Typography
                        color={!darkmode ? "black" : "white"}
                        fontSize={"25px"}
                        fontWeight={700}
                      >
                        0%
                      </Typography>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:flex-row gap-10 md:gap-[67px]  items-start shrink-0 flex-nowrap relative z-[7]">
                    <div className=" shrink-0 font-['Poppins'] text-[30px] font-semibold leading-[41.1px] relative text-left z-[8]">
                      <Typography color={"gray"}>
                        Token % Burnt
                        <br />
                      </Typography>
                      <Typography
                        color={!darkmode ? "black" : "white"}
                        fontSize={"25px"}
                        fontWeight={700}
                      >
                        30%
                      </Typography>
                    </div>
                    <div className=" shrink-0 font-['Poppins'] text-[30px] font-semibold leading-[41.1px] relative text-left z-[9]">
                      <Typography color={"gray"}>
                        LP Lock
                        <br />
                      </Typography>
                      <Typography
                        color={!darkmode ? "black" : "white"}
                        fontSize={"25px"}
                        fontWeight={700}
                      >
                        12 Years
                      </Typography>
                    </div>
                    <div className=" shrink-0 font-['Poppins'] text-[30px] font-semibold leading-[41.1px] relative text-left z-10">
                      <Typography color={"gray"}>
                        Circulating Supply
                        <br />
                      </Typography>
                      <Typography
                        color={!darkmode ? "black" : "white"}
                        fontSize={"25px"}
                        fontWeight={700}
                      >
                        2.75B
                      </Typography>
                    </div>
                  </div>
                </div>
                <Box mt={"4rem"}>
                  <a
                    href="https://ftmscan.com/token/0x97bdAfe3830734acF12Da25359674277fcc33729#tokenAnalytics"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className={`${
                        darkmode
                          ? "white-button-v2 w-full lg:w-[250px]"
                          : "black-button-v2 w-full lg:w-[250px]"
                      } `}
                    >
                      Analytics
                    </button>
                  </a>
                </Box>
              </div>
            </Box>
          </Grid>
        </Grid>
        <Box
          width={"100%"}
          mt={"2rem"}
          position={"relative"}
          sx={{ backgroundColor: "black" }}
          borderRadius={"20px"}
        >
          <img
            src={isMobile ? powerKirbymobile : powerKirby}
            alt="power kirby"
          />
          <Box
            position={"absolute"}
            top={"0px"}
            width={"100%"}
            p={{ xs: "2rem", sm: "4rem" }}
          >
            <Grid container spacing={{ xs: "1rem", sm: "0rem" }}>
              <Grid item lg={4} sm={4}>
                {isMobile && <img src={tokenicon} alt="token" />}
              </Grid>
              <Grid item lg={4} sm={4}>
                <Typography
                  color={"white"}
                  fontSize={{ xs: "24px", sm: "26px", lg: "30px" }}
                  fontWeight={700}
                >
                  Powerful Kirby
                </Typography>
                <Typography
                  color={"white"}
                  fontSize={{ xs: "14px", sm: "16px", lg: "20px" }}
                  fontWeight={600}
                  mt={"2rem"}
                >
                  <span
                    style={{
                      color: "gray",
                      fontSize: "13px",
                      marginRight: "1rem",
                    }}
                  >
                    Total Holders
                  </span>
                  6,700+ on DEX alone
                </Typography>
              </Grid>
              <Grid item lg={4} sm={4}>
                <Typography
                  color={"white"}
                  fontSize={{ xs: "14px", sm: "16px", lg: "20px" }}
                  fontWeight={600}
                >
                  The fastest growing token in the Fantom ecosystem.
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent={"start"}
                  alignItems={"center"}
                  gap={"1rem"}
                  mt={"2rem"}
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
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          width={"100%"}
          height={{ lg: "515px", sm: "405px", xs: "410px" }}
          mt={"2rem"}
          position={"relative"}
          sx={{ backgroundColor: darkmode ? "black" : "white" }}
          borderRadius={"20px"}
        >
          <Box
            position={"absolute"}
            zIndex={1}
            left={{ xs: "10px", sm: "300px" }}
            top={"0px"}
            height={"400px"}
          >
            <img
              src={isMobile ? earthbutton : earth}
              alt="earth"
              height={"100%"}
            />
          </Box>
          <Box
            top={"0px"}
            width={"100%"}
            p={{ xs: "2rem", sm: "4rem" }}
            position={"absolute"}
            zIndex={10}
          >
            <Grid
              container
              spacing={{ xs: "1rem", sm: "0rem" }}
              rowSpacing={"2rem"}
            >
              <Grid item lg={5} sm={6} xs={12}>
                <Typography
                  color={"#007dff"}
                  fontSize={{ xs: "16px", sm: "26px", lg: "30px" }}
                  fontWeight={700}
                  zIndex={10}
                >
                  Safety
                </Typography>
                <Typography
                  color={darkmode || isMobile ? "white" : "black"}
                  fontSize={{ xs: "16px", sm: "26px", lg: "60px" }}
                  fontWeight={700}
                >
                  Kirby Audits
                </Typography>
              </Grid>
              <Grid item lg={7} sm={6} xs={12}>
                <Typography
                  color={darkmode || isMobile ? "white" : "black"}
                  fontSize={{ xs: "13px", sm: "26px", lg: "43px" }}
                  fontWeight={700}
                >
                  “Kirby has the safest and most simple token contract possible
                  to make on a chain.”
                </Typography>
                <Typography
                  color={darkmode || isMobile ? "white" : "black"}
                  fontSize={{ xs: "15px", sm: "18px", lg: "20px" }}
                  mt={{ xs: "1rem", sm: "2rem" }}
                >
                  Solidity{" "}
                  <span
                    style={{
                      fontSize: "13px",
                      marginLeft: "1rem",
                    }}
                    className="transperant-text"
                  >
                    Github Research
                  </span>
                </Typography>
              </Grid>
              <Grid item lg={5} sm={6} xs={12}>
                <Typography
                  color={darkmode || isMobile ? "white" : "black"}
                  fontSize={{ xs: "16px", sm: "26px", lg: "30px" }}
                  fontWeight={700}
                >
                  Coming Soon..
                </Typography>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"start"}
                  gap={"1rem"}
                  mt={"1rem"}
                >
                  <button className="blue-button">Kirby Token</button>
                  <button className="blue-button">KirbyPad</button>
                </Box>
              </Grid>
              <Grid item lg={7} sm={6} xs={12}>
                <Typography
                  color={darkmode || isMobile ? "white" : "black"}
                  fontSize={{ xs: "16px", sm: "26px", lg: "30px" }}
                  fontWeight={700}
                >
                  Techrate
                </Typography>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"start"}
                  gap={"1rem"}
                  mt={"1rem"}
                >
                  <button
                    className={
                      darkmode
                        ? "white-button text-stretch"
                        : "black-button text-stretch"
                    }
                  >
                    Coming Soon
                  </button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ThirdSection;
