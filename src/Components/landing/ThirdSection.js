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
import earthbg from "../../images/eath-bg.png";
import earthbgmobile from "../../images/earth-bg-mobile.png";
import earth from "../../images/earth.png";
import earthbutton from "../../images/earth-mobile.png";

function Item({ item, darkmode, active }) {
  return (
    <div className={darkmode ? "main-container-black" : "main-container-white"}>
      <div className="frame-1">
        <Typography
          color={darkmode ? "white" : "black"}
          fontSize={{ xs: "20px", sm: "40px" }}
          fontWeight={700}
          marginTop={{ xs: "50px", lg: "0px" }}
        >
          {item}
        </Typography>
        <Box
          className={active === 0 ? "vector-active" : "vector-inactive"}
          top={{ xs: "1rem", lg: "30px" }}
          left={{ xs: "1rem", sm: "50rem", lg: "75rem" }}
        ></Box>
        <Box
          className={active === 1 ? "vector-active" : "vector-inactive"}
          top={{ xs: "1rem", lg: "30px" }}
          left={{ xs: "6.5rem", sm: "44rem", lg: "69rem" }}
        ></Box>
        <Box
          className={active === 2 ? "vector-active" : "vector-inactive"}
          top={{ xs: "1rem", lg: "30px" }}
          left={{ xs: "12rem", sm: "38rem", lg: "63rem" }}
        ></Box>
        <div className="frame-2">
          <Typography
            color={darkmode ? "white" : "black"}
            fontSize={{ xs: "10px", sm: "20px" }}
            maxWidth={{ xs: "250px", sm: "1000px" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
            <br />
            <br />
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into
          </Typography>
          <div className="frame-3">
            <button className={darkmode ? "white-button" : "black-button"}>
              Know More
            </button>
            <button className="blue-button">Join the Community</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThirdSection({ darkmode, isMobile }) {
  const [items, setItems] = useState(["Community", "Ecosystem", "For People"]);
  const [cards, setCards] = useState([
    { card: "orange-card", image: bnbicon },
    { card: "gray-card", image: okxicon },
    { card: "blue-card", image: walleticon },
    { card: "orange-card", image: bnbicon },
    { card: "gray-card", image: okxicon },
    { card: "blue-card", image: walleticon },
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
          indicators={false}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} darkmode={darkmode} active={active} />
          ))}
        </Carousel>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={9}>
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
                <IconButton onClick={handleDivClick}>
                  <ArrowRightAltIcon
                    fontSize="large"
                    sx={{ color: "#007dff" }}
                  />
                </IconButton>
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
                    itemsToShow: 3,
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
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        width={"100%"}
                      >
                        <img src={item.image} alt="bnb" width={30} />
                        <Box
                          display={"flex"}
                          gap={"1rem"}
                          alignItems={"center"}
                        >
                          <button className="tranperant-button">
                            Centralized
                          </button>
                          <button className="tranperant-button">Low Fee</button>
                        </Box>
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
                          Binance
                        </Typography>
                        <button className="bg-white rounded-lg px-4">
                          <ArrowRightAltIcon />
                        </button>
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
                  Top Centralized Exchanges
                </Typography>
                <IconButton onClick={handleDivClick1}>
                  <ArrowRightAltIcon
                    fontSize="large"
                    sx={{ color: "#007dff" }}
                  />
                </IconButton>
              </Box>

              <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex1}
                onRequestChange={setActiveSlideIndex1}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                  //here you can also pass className, or any other button element attributes
                  style: {
                    display: "none",
                  },
                  children: <span ref={buttonRef1}>{`>`}</span>,
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
                    itemsToShow: isMobile ? 1 : 3,
                    itemsToScroll: 1,
                    minWidth: 768,
                  },
                ]}
                speed={400}
                easing="linear"
              >
                {cards.map((item, index) => (
                  <Box p={{ xs: "0px", sm: "6px" }}>
                    <Box className={item.card}>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        width={"100%"}
                      >
                        <img src={item.image} alt="bnb" width={30} />
                        <Box
                          display={"flex"}
                          gap={"1rem"}
                          alignItems={"center"}
                        >
                          <button className="tranperant-button">
                            Centralized
                          </button>
                          <button className="tranperant-button">Low Fee</button>
                        </Box>
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
                          Binance
                        </Typography>
                        <button className="bg-white rounded-lg px-4">
                          <ArrowRightAltIcon />
                        </button>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </ReactSimplyCarousel>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} lg={3}>
            <Box
              className={
                darkmode ? "main-container-black" : "main-container-white"
              }
              mt={"2rem"}
            >
              <Typography
                color={darkmode ? "white" : "black"}
                fontSize={"30px"}
                fontWeight={"700"}
              >
                Others
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                flexDirection={{ sm: "row", lg: "column" }}
                width={"100%"}
                gap={"8px"}
              >
                <Box className="small-orange-card">
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                  >
                    <img src={bnbicon} alt="bnb" width={30} />
                    <button className="bg-white rounded-lg px-4">
                      <ArrowRightAltIcon />
                    </button>
                  </Box>
                  <Typography
                    fontSize={"20px"}
                    fontWeight={700}
                    color={"white"}
                  >
                    Binance
                  </Typography>
                </Box>
                <Box className="small-orange-card desktop-view">
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                  >
                    <img src={bnbicon} alt="bnb" width={30} />
                    <button className="bg-white rounded-lg px-4">
                      <ArrowRightAltIcon />
                    </button>
                  </Box>
                  <Typography
                    fontSize={"20px"}
                    fontWeight={700}
                    color={"white"}
                  >
                    Binance
                  </Typography>
                </Box>
                <Box className="small-orange-card desktop-view">
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                  >
                    <img src={bnbicon} alt="bnb" width={30} />
                    <button className="bg-white rounded-lg px-4">
                      <ArrowRightAltIcon />
                    </button>
                  </Box>
                  <Typography
                    fontSize={"20px"}
                    fontWeight={700}
                    color={"white"}
                  >
                    Binance
                  </Typography>
                </Box>
                <Box className="small-orange-card desktop-view">
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"100%"}
                  >
                    <img src={bnbicon} alt="bnb" width={30} />
                    <button className="bg-white rounded-lg px-4">
                      <ArrowRightAltIcon />
                    </button>
                  </Box>
                  <Typography
                    fontSize={"20px"}
                    fontWeight={700}
                    color={"white"}
                  >
                    Binance
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
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
                    Kirby Stats
                  </Typography>
                </div>
                <div className="flex  flex-col gap-[67px] items-start shrink-0 flex-nowrap relative z-[3]">
                  <div className="flex  flex-col gap-[38px] items-start shrink-0 flex-nowrap relative z-[4]">
                    <Typography
                      color={darkmode ? "white" : "black"}
                      fontSize={{ xs: "20px", sm: "25px", lg: "35px" }}
                      fontWeight={700}
                    >
                      Powered by ETH and BSC
                    </Typography>
                    <Typography
                      color={darkmode ? "white" : "black"}
                      fontSize={{ xs: "11px", sm: "20px", lg: "20px" }}
                    >
                      Kirby contract addresses <br />
                      ETH: 0xcf0c122c6b73ff809c693db761e7baebe62b6a2e <br />{" "}
                      BSC: 0xfb5b838b6cfeedc2873ab27866079ac55363d37e
                    </Typography>
                  </div>
                  <div className="flex gap-2 flex-col md:flex-row w-full">
                    <button
                      className={`${
                        darkmode ? "white-button-v2" : "black-button-v2"
                      } `}
                    >
                      Etherscan (ETH)
                    </button>
                    <button
                      className={
                        darkmode ? "white-button-v2" : "black-button-v2"
                      }
                    >
                      BscScan (BSC)
                    </button>
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
              width={'100%'}
            >
              <div className="w-[300px]">
                <Typography
                  fontSize={{ xs: "20px", sm: "40px", lg: "50px" }}
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
                        10,000,000,000,000
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
                        0.3%
                      </Typography>
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:flex-row gap-10 md:gap-[67px]  items-start shrink-0 flex-nowrap relative z-[7]">
                    <div className=" shrink-0 font-['Poppins'] text-[30px] font-semibold leading-[41.1px] relative text-left z-[8]">
                      <Typography color={"gray"}>
                        Locker Fees Burned
                        <br />
                      </Typography>
                      <Typography
                        color={!darkmode ? "black" : "white"}
                        fontSize={"25px"}
                        fontWeight={700}
                      >
                        25%
                      </Typography>
                    </div>
                    <div className=" shrink-0 font-['Poppins'] text-[30px] font-semibold leading-[41.1px] relative text-left z-[9]">
                      <Typography color={"gray"}>
                        Prepaid card fee
                        <br />
                      </Typography>
                      <Typography
                        color={!darkmode ? "black" : "white"}
                        fontSize={"25px"}
                        fontWeight={700}
                      >
                        1%
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
                        9.44T
                      </Typography>
                    </div>
                  </div>
                </div>
                <Box mt={"6rem"}>
                  <button
                    className={`${
                      darkmode
                        ? "white-button-v2 w-full lg:w-[250px]"
                        : "black-button-v2 w-full lg:w-[250px]"
                    } `}
                  >
                    Operation and Funding
                  </button>
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
                  460,000+ on DEX alone
                </Typography>
              </Grid>
              <Grid item lg={4} sm={4}>
                <Typography
                  color={"white"}
                  fontSize={{ xs: "14px", sm: "16px", lg: "20px" }}
                  fontWeight={600}
                >
                  Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                </Typography>
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
                  Audits
                </Typography>
                <Typography
                  color={darkmode ? "white" : "black"}
                  fontSize={{ xs: "16px", sm: "26px", lg: "60px" }}
                  fontWeight={700}
                >
                  Kirby Audits
                </Typography>
              </Grid>
              <Grid item lg={7} sm={6} xs={12}>
                <Typography
                  color={darkmode ? "white" : "black"}
                  fontSize={{ xs: "16px", sm: "26px", lg: "65px" }}
                  fontWeight={700}
                >
                  "Kirby DAO contract is revolutionary."
                </Typography>
                <Typography
                  color={darkmode ? "white" : "black"}
                  fontSize={{ xs: "15px", sm: "18px", lg: "20px" }}
                  mt={{ xs: "1rem", sm: "2rem" }}
                >
                  Larry Lundy{" "}
                  <span
                    style={{
                      fontSize: "13px",
                      marginLeft: "1rem",
                    }}
                    className="transperant-text"
                  >
                    Formerly with CertiK
                  </span>
                </Typography>
              </Grid>
              <Grid item lg={9} sm={6} xs={12}>
                <Typography
                  color={darkmode ? "white" : "black"}
                  fontSize={{ xs: "16px", sm: "26px", lg: "30px" }}
                  fontWeight={700}
                >
                  CertiK
                </Typography>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"start"}
                  gap={"1rem"}
                  mt={"1rem"}
                >
                  <button className="blue-button">Kirby Token</button>
                  <button className="blue-button">Kirby FI</button>
                </Box>
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <Typography
                  color={darkmode ? "white" : "black"}
                  fontSize={{ xs: "16px", sm: "26px", lg: "30px" }}
                  fontWeight={700}
                >
                  Solidity Finance
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
                    Binanace Smartchain
                  </button>
                  <button
                    className={darkmode ? "white-button" : "black-button"}
                  >
                    Ethereum
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
