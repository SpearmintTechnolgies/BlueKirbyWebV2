import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import bnbicon from "../../images/bnb-icon.png";
import walleticon from "../../images/wallet-icon.png";
import okxicon from "../../images/okx-icon.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ReactSimplyCarousel from "react-simply-carousel";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
                      Kirby contract addresses <br /> <br />
                      ETH: 0xcf0c122c6b73ff809c693db761e7baebe62b6a2e <br />{" "}
                      <br />
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
            >
              <div className="">
                <div className="flex w-[302px] flex-col gap-[12px] items-start shrink-0 flex-nowrap relative">
                  <span className="h-[32px] shrink-0 basis-auto font-['Poppins'] text-[30px] font-semibold leading-[31.8px] text-[#007dff] relative text-left whitespace-nowrap z-[1]">
                    Finance
                  </span>
                  <Typography
                    fontSize={{ xs: "30px", sm: "40px", lg: "50px" }}
                    fontWeight={700}
                    color={darkmode ? "white" : "black"}
                  >
                    Tokenomics
                  </Typography>
                </div>
                <div className="flex  flex-col gap-[32px] items-start shrink-0 flex-nowrap relative z-[3]">
                  <div className="flex flex-col md:flex-row gap-[25px] md:gap-[125px] items-start shrink-0 flex-nowrap relative z-[4]">
                    <div className="shrink-0 font-['Poppins'] text-[30px] font-semibold leading-[41.1px] relative text-left z-[5]">
                      <span className="font-['Poppins'] text-[16px] font-semibold leading-[41.1px] text-[rgba(255,255,255,0.5)] relative text-left">
                        Total Supply
                        <br />
                      </span>
                      <span className="font-['Poppins'] text-[25px] font-semibold leading-[41.1px] text-[#fff] relative text-left">
                        10,000,000,000,000
                      </span>
                    </div>
                    <div className=" shrink-0 font-['Poppins'] text-[30px] font-semibold leading-[41.1px] relative text-left z-[6]">
                      <span className="font-['Poppins'] text-[16px] font-semibold leading-[41.1px] text-[rgba(255,255,255,0.5)] relative text-left">
                        buy/sell tax <br />
                      </span>
                      <span className="font-['Poppins'] text-[30px] font-semibold leading-[41.1px] text-[#fff] relative text-left">
                        0.3%
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-10 md:gap-[67px]  items-start shrink-0 flex-nowrap relative z-[7]">
                    <div className=" shrink-0 font-['Poppins'] text-[30px] font-semibold leading-[41.1px] relative text-left z-[8]">
                      <span className="font-['Poppins'] text-[16px] font-semibold leading-[41.1px] text-[rgba(255,255,255,0.5)] relative text-left">
                        Locker Fees Burned
                        <br />
                      </span>
                      <span className="font-['Poppins'] text-[30px] font-semibold leading-[41.1px] text-[#fff] relative text-left">
                        25%
                      </span>
                    </div>
                    <div className=" shrink-0 font-['Poppins'] text-[30px] font-semibold leading-[41.1px] relative text-left z-[9]">
                      <span className="font-['Poppins'] text-[16px] font-semibold leading-[41.1px] text-[rgba(255,255,255,0.5)] relative text-left">
                        Prepaid card fee
                        <br />
                      </span>
                      <span className="font-['Poppins'] text-[30px] font-semibold leading-[41.1px] text-[#fff] relative text-left">
                        1%
                      </span>
                    </div>
                    <div className=" shrink-0 font-['Poppins'] text-[30px] font-semibold leading-[41.1px] relative text-left z-10">
                      <span className="font-['Poppins'] text-[16px] font-semibold leading-[41.1px] text-[rgba(255,255,255,0.5)] relative text-left">
                        Circulating Supply <br />
                      </span>
                      <span className="font-['Poppins'] text-[30px] font-semibold leading-[41.1px] text-[#fff] relative text-left">
                        9.44T
                      </span>
                    </div>
                  </div>
                </div>
                <Box mt={"6rem"}>
                  <button
                    className={`${
                      darkmode ? "white-button-v2 w-full lg:w-[250px]" : "black-button-v2 w-full lg:w-[250px]"
                    } `}
                  >
                    Operation and Funding
                  </button>
                </Box>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ThirdSection;
