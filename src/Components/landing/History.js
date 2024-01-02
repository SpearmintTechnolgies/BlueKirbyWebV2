import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import monkey from "../../images/monkey.png";
import cherry from "../../images/cherry.png";
import shield from "../../images/shield.png";
import SliderSecond from "../SliderSecond";
import taxbg from "../../images/tax-section-bg.png";
import taxbgmobile from "../../images/tax-section-bg-mobile.png";
import currency from "../../images/currency.png";
import currencymobile from "../../images/currency-mobile.png";
import BlockIcon from "@mui/icons-material/Block";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import spookyswap from "../../images/spookyswap.png";
import equalizer from "../../images/equilizer.png";
import fantom from "../../images/ftm.png";
import CoinGecko from "../../images/CG.png";
import LBank from "../../images/Lbank.png";
import solidly from "../../images/solidly.png";
import coinmarketcap from "../../images/cmc.png";

function History({ darkmode, isMobile, setElement2 }) {
  const items1 = [
    {
      img: spookyswap,
      name: "SpookySwap",
      link: "https://spooky.fi/#/swap?inputCurrency=FTM&outputCurrency=0x97bdAfe3830734acF12Da25359674277fcc33729",
    },
    {
      img: equalizer,
      name: "Equalizer",
      link: "https://equalizer.exchange/swap",
    },
    {
      img: fantom,
      name: "Fantom",
      link: "https://fantom.foundation/",
    },
    {
      img: CoinGecko,
      name: "CoinGecko",
      link: "https://www.coingecko.com/en/coins/blue-kirby",
    },
    {
      img: LBank,
      name: "LBank",
      link: "https://www.lbank.com/trade/kirby_usdt",
    },
    {
      img: solidly,
      name: "Solidly",
      link: "https://solidly.exchange/",
    },
    {
      img: coinmarketcap,
      name: "Coinmarketcap",
      link: "https://coinmarketcap.com/currencies/blue-kirby/",
    },
  ];
  const items2 = [
    {
      img: spookyswap,
      name: "SpookySwap",
      link: "https://spooky.fi/#/swap?inputCurrency=FTM&outputCurrency=0x97bdAfe3830734acF12Da25359674277fcc33729",
    },
    {
      img: equalizer,
      name: "Equalizer",
      link: "https://equalizer.exchange/swap",
    },
    {
      img: fantom,
      name: "Fantom",
      link: "https://fantom.foundation/",
    },
    {
      img: CoinGecko,
      name: "CoinGecko",
      link: "https://www.coingecko.com/en/coins/blue-kirby",
    },
    {
      img: LBank,
      name: "LBank",
      link: "https://www.lbank.com/trade/kirby_usdt",
    },
    {
      img: solidly,
      name: "Solidly",
      link: "https://solidly.exchange/",
    },
    {
      img: coinmarketcap,
      name: "Coinmarketcap",
      link: "https://coinmarketcap.com/currencies/blue-kirby/",
    },
  ];
  React.useEffect(() => {
    let element = document.getElementById("roadmap");
    setElement2(element);
  }, []);

  const [roadmap, setRoadmap] = useState([
    {
      date: "December 15, 2023",
      title: "Blue Kirby is born",
      secondtitle: "The Idea",
      description:
        "Blue Kirby Launched on $FTM Network during a long haul of it being an abandoned blockchain, restoring volume and hope.",
    },
    {
      date: "December 28, 2023",
      title: "10M+ market cap breached",
      secondtitle: "The Growth",
      description:
        "Community of Blue Kirby ranks as the top ten communities of all crypto memes, breaching 10m+ mcap on Fantom network which is a first for a FTM memecoin.",
    },
    {
      date: "February 25, 2024",
      title: "Glory Restored",
      secondtitle: "Global Recognition",
      description:
        "Blue Kirby will unleash a large-scale global influencer campaign to bring recognition to the Kirby utilities and community.",
    },
    {
      date: "June 18, 2024",
      title: "The Future Awaits",
      secondtitle: "Blue Chip Token",
      description:
        "Multiple listings on top tier exchanges with multiple completed and incubated projects.250k+ in shared Kirbot revenue",
    },
  ]);
  return (
    <Box my={"2rem"}>
      <Container maxWidth="xl" className="global-flex">
        <Box display={"flex"} flexDirection={"column"} id="roadmap">
          <Typography
            fontSize={{ xs: "20px", sm: "35px", lg: "35px" }}
            fontWeight={"800"}
            color={"#007dff"}
            textAlign={{ xs: "center", sm: "center", lg: "start" }}
          >
            Roadmap
          </Typography>
          <Typography
            fontSize={{ xs: "20px", sm: "30px", lg: "60px" }}
            fontWeight={"800"}
            color={darkmode ? "white" : "black"}
            textAlign={{ xs: "center", sm: "center", lg: "start" }}
          >
            Path of History and to Success
          </Typography>
          <Box mt={"2rem"} width={"100%"} position={"relative"}>
            <Box
              className={isMobile ? "pointer-line-mobile" : "pointer-line"}
            ></Box>
            <Grid container>
              <Grid item lg={6} sm={6} xs={12} mt={"2rem"}>
                <Box>
                  <Typography
                    fontSize={{ xs: "12px", sm: "14px", lg: "15px" }}
                    color={"gray"}
                    textAlign={{ xs: "start", sm: "start", lg: "start" }}
                    ml={"25px"}
                  >
                    December 15, 2023
                  </Typography>
                  <Box
                    display={"flex"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    gap={"1rem"}
                  >
                    <div className="select-circle"></div>
                    <Typography
                      fontSize={{ xs: "20px", sm: "27px", lg: "40px" }}
                      fontWeight={"800"}
                      color={darkmode ? "white" : "black"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                    >
                      Blue Kirby is born
                    </Typography>
                  </Box>
                  <Typography
                    fontSize={{ xs: "12px", sm: "14px", lg: "15px" }}
                    color={"#007dff"}
                    textAlign={{ xs: "start", sm: "start", lg: "start" }}
                    ml={"25px"}
                  >
                    The Idea
                  </Typography>
                  <Typography
                    fontSize={{ xs: "15px", sm: "15px", lg: "16px" }}
                    my={{ xs: "0rem", sm: "2rem" }}
                    color={darkmode ? "white" : "black"}
                    textAlign={{ xs: "start", sm: "start", lg: "start" }}
                    ml={"25px"}
                  >
                    Blue Kirby Launched on $FTM Network during a long haul of it
                    being <br></br> an abandoned blockchain, restoring volume
                    and hope.
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6} sm={6} xs={12} mt={"2rem"}>
                {isMobile ? (
                  <Box>
                    <Typography
                      fontSize={{ xs: "12px", sm: "14px", lg: "15px" }}
                      color={"gray"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      ml={"25px"}
                    >
                      December 28, 2023
                    </Typography>
                    <Box
                      display={"flex"}
                      justifyContent={"start"}
                      alignItems={"center"}
                      gap={"1rem"}
                    >
                      <div className="select-circle"></div>
                      <Typography
                        fontSize={{ xs: "20px", sm: "27px", lg: "40px" }}
                        fontWeight={"800"}
                        color={darkmode ? "white" : "black"}
                        textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      >
                        10M+ market cap breached
                      </Typography>
                    </Box>
                    <Typography
                      fontSize={{ xs: "12px", sm: "14px", lg: "15px" }}
                      color={"#007dff"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      ml={"25px"}
                    >
                      The Growth
                    </Typography>
                    <Typography
                      fontSize={{ xs: "15px", sm: "15px", lg: "16px" }}
                      my={{ xs: "0rem", sm: "2rem" }}
                      color={darkmode ? "white" : "black"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      ml={"25px"}
                    >
                      Community of Blue Kirby ranks as the top ten communities
                      of all crypto memes, breaching 10m+ mcap on Fantom network
                      which is a first for a FTM memecoin.
                    </Typography>
                  </Box>
                ) : (
                  <Box>
                    <Typography
                      fontSize={{ xs: "12px", sm: "14px", lg: "15px" }}
                      color={"gray"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      ml={"25px"}
                    >
                      June 18, 2024
                    </Typography>
                    <Box
                      display={"flex"}
                      justifyContent={"start"}
                      alignItems={"center"}
                      gap={"1rem"}
                    >
                      <div className="select-circle"></div>
                      <Typography
                        fontSize={{ xs: "20px", sm: "27px", lg: "40px" }}
                        fontWeight={"800"}
                        color={darkmode ? "white" : "black"}
                        textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      >
                        The Future Awaits
                      </Typography>
                    </Box>
                    <Typography
                      fontSize={{ xs: "12px", sm: "14px", lg: "15px" }}
                      color={"#007dff"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      ml={"25px"}
                    >
                      Blue Chip Token
                    </Typography>
                    <Typography
                      fontSize={{ xs: "15px", sm: "15px", lg: "16px" }}
                      my={{ xs: "0rem", sm: "2rem" }}
                      color={darkmode ? "white" : "black"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      ml={"25px"}
                    >
                      Multiple listings on top tier exchanges with multiple
                      completed and incubated projects.<br></br>
                      250k+ in shared Kirbot revenue
                    </Typography>
                  </Box>
                )}
              </Grid>
              <Grid item lg={6} sm={6} xs={12} mt={"2rem"}>
                {isMobile ? (
                  <Box>
                    <Typography
                      fontSize={{ xs: "12px", sm: "14px", lg: "15px" }}
                      color={"gray"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      ml={"25px"}
                    >
                      February 25, 2024
                    </Typography>
                    <Box
                      display={"flex"}
                      justifyContent={"start"}
                      alignItems={"center"}
                      gap={"1rem"}
                    >
                      <div className="select-circle-blue "></div>
                      <Typography
                        fontSize={{ xs: "20px", sm: "27px", lg: "40px" }}
                        fontWeight={"800"}
                        color={darkmode ? "white" : "black"}
                        textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      >
                        Glory Restored
                      </Typography>
                    </Box>
                    <Typography
                      fontSize={{ xs: "12px", sm: "14px", lg: "15px" }}
                      color={"#007dff"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      ml={"25px"}
                    >
                      Global Recognition
                    </Typography>
                    <Typography
                      fontSize={{ xs: "15px", sm: "15px", lg: "16px" }}
                      my={{ xs: "0rem", sm: "2rem" }}
                      color={darkmode ? "white" : "black"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      ml={"25px"}
                    >
                      Blue Kirby will unleash a large-scale global influencer
                      campaign to bring recognition to the Kirby utilities and
                      community.
                    </Typography>
                  </Box>
                ) : (
                  <Box>
                    <Typography
                      fontSize={{ xs: "12px", sm: "14px", lg: "15px" }}
                      color={"gray"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      ml={"25px"}
                    >
                      December 28, 2023
                    </Typography>
                    <Box
                      display={"flex"}
                      justifyContent={"start"}
                      alignItems={"center"}
                      gap={"1rem"}
                    >
                      <div className="select-circle"></div>
                      <Typography
                        fontSize={{ xs: "20px", sm: "27px", lg: "40px" }}
                        fontWeight={"800"}
                        color={darkmode ? "white" : "black"}
                        textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      >
                        10M+ market cap breached
                      </Typography>
                    </Box>
                    <Typography
                      fontSize={{ xs: "12px", sm: "14px", lg: "15px" }}
                      color={"#007dff"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      ml={"25px"}
                    >
                      The Growth
                    </Typography>
                    <Typography
                      fontSize={{ xs: "15px", sm: "15px", lg: "16px" }}
                      my={{ xs: "0rem", sm: "2rem" }}
                      color={darkmode ? "white" : "black"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      ml={"25px"}
                    >
                      Community of Blue Kirby ranks as the top ten communities
                      of all crypto memes, breaching 10m+ mcap on Fantom network
                      which is a first for a FTM memecoin.
                    </Typography>
                  </Box>
                )}
              </Grid>
              <Grid item lg={6} sm={6} xs={12} mt={"2rem"}>
                {isMobile ? (
                  <Box>
                    <Typography
                      fontSize={{ xs: "12px", sm: "14px", lg: "15px" }}
                      color={"gray"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      ml={"25px"}
                    >
                      June 18, 2024
                    </Typography>
                    <Box
                      display={"flex"}
                      justifyContent={"start"}
                      alignItems={"center"}
                      gap={"1rem"}
                    >
                      <div className="select-circle"></div>
                      <Typography
                        fontSize={{ xs: "20px", sm: "27px", lg: "40px" }}
                        fontWeight={"800"}
                        color={darkmode ? "white" : "black"}
                        textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      >
                        The Future Awaits
                      </Typography>
                    </Box>
                    <Typography
                      fontSize={{ xs: "12px", sm: "14px", lg: "15px" }}
                      color={"#007dff"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      ml={"25px"}
                    >
                      Blue Chip Token
                    </Typography>
                    <Typography
                      fontSize={{ xs: "15px", sm: "15px", lg: "16px" }}
                      my={{ xs: "0rem", sm: "2rem" }}
                      color={darkmode ? "white" : "black"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      ml={"25px"}
                    >
                      Multiple listings on top tier exchanges with multiple
                      completed and incubated projects.<br></br>
                      250k+ in shared Kirbot revenue
                    </Typography>
                  </Box>
                ) : (
                  <Box>
                    <Typography
                      fontSize={{ xs: "12px", sm: "14px", lg: "15px" }}
                      color={"gray"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      ml={"25px"}
                    >
                      February 25, 2024
                    </Typography>
                    <Box
                      display={"flex"}
                      justifyContent={"start"}
                      alignItems={"center"}
                      gap={"1rem"}
                    >
                      <div className="select-circle-blue "></div>
                      <Typography
                        fontSize={{ xs: "20px", sm: "27px", lg: "40px" }}
                        fontWeight={"800"}
                        color={darkmode ? "white" : "black"}
                        textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      >
                        Glory Restored
                      </Typography>
                    </Box>
                    <Typography
                      fontSize={{ xs: "12px", sm: "14px", lg: "15px" }}
                      color={"#007dff"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      ml={"25px"}
                    >
                      Global Recognition
                    </Typography>
                    <Typography
                      fontSize={{ xs: "15px", sm: "15px", lg: "16px" }}
                      my={{ xs: "0rem", sm: "2rem" }}
                      color={darkmode ? "white" : "black"}
                      textAlign={{ xs: "start", sm: "start", lg: "start" }}
                      ml={"25px"}
                    >
                      Blue Kirby will unleash a large-scale global influencer
                      campaign to bring recognition to the Kirby utilities and
                      community.
                    </Typography>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Box>
          <Box
            mt={"2rem"}
            width={"100%"}
            borderRadius={"20px"}
            sx={{ backgroundColor: `${darkmode ? "black" : "white"}` }}
            py={"2rem"}
          >
            <Box ml={{ xs: "0rem", sm: "2rem" }}>
              <Typography
                fontSize={{ xs: "20px", sm: "35px", lg: "35px" }}
                fontWeight={"800"}
                color={"#007dff"}
                textAlign={{ xs: "center", sm: "center", lg: "start" }}
              >
                Partners
              </Typography>
              <Typography
                fontSize={{ xs: "16px", sm: "30px", lg: "60px" }}
                fontWeight={"800"}
                color={darkmode ? "white" : "black"}
                textAlign={{ xs: "center", sm: "center", lg: "start" }}
              >
                We are stronger together
              </Typography>
            </Box>
            <SliderSecond item={items1} className={"infinit-scroll1"} />
            <SliderSecond
              item={items2.reverse()}
              className={"infinit-scroll2"}
            />
          </Box>
        </Box>
        <Box width={"100%"} mt={"2rem"} position={"relative"}>
          <img src={isMobile ? taxbgmobile : taxbg} alt="bg" />
          <Box position={"absolute"} top={"1rem"} width={"100%"}>
            <Grid container>
              <Grid item lg={6} sm={6} xs={12}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <img
                    src={isMobile ? currencymobile : currency}
                    alt="currrency"
                  />
                </Box>
              </Grid>
              <Grid item lg={6} sm={6} xs={12}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={{ lg: "start", sm: "start", xs: "center" }}
                  flexDirection={"column"}
                  width={"100%"}
                  height={"100%"}
                >
                  <Typography
                    fontSize={{ xs: "20px", sm: "35px", lg: "35px" }}
                    fontWeight={"800"}
                    color={"#007dff"}
                    textAlign={{ xs: "center", sm: "center", lg: "start" }}
                  >
                    Pure Decentralization
                  </Typography>
                  <Typography
                    fontSize={{ xs: "20px", sm: "30px", lg: "60px" }}
                    fontWeight={"800"}
                    color={"white"}
                    textAlign={{ xs: "center", sm: "center", lg: "start" }}
                  >
                    0% Tax, Contract Renounced,
                  </Typography>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"5px"}
                    mt={"2rem"}
                  >
                    <BlockIcon sx={{ color: "#007dff" }} />
                    <Typography
                      fontSize={{ xs: "11px", sm: "18px", lg: "20px" }}
                      fontWeight={"800"}
                      color={"white"}
                      textAlign={{ xs: "center", sm: "center", lg: "start" }}
                      mr={"2rem"}
                    >
                      Locked for 12 years
                    </Typography>
                    <LockOutlinedIcon sx={{ color: "#007dff" }} />
                    <Typography
                      fontSize={{ xs: "11px", sm: "18px", lg: "20px" }}
                      fontWeight={"800"}
                      color={"white"}
                      textAlign={{ xs: "center", sm: "center", lg: "start" }}
                    >
                      No Dev Tokens
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default History;
