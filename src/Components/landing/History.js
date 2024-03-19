import { Box, Container,  Grid, Typography } from "@mui/material";
import React from "react";
import SliderSecond from "../SliderSecond";
import BlockIcon from "@mui/icons-material/Block";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import NewsLetter from "./NewsLetter";

function History({ darkmode, isMobile, setElement2 }) {
  const taxbg =
    "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/tax-section-bg.png";
  const taxbgmobile =
    "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/tax-section-bg-mobile.png";
  const currency =
    "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/currency.png";
  const currencymobile =
    "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/currency-mobile.png";
  const coingap =
    "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/coingape.jpg";
  const coinography =
    "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/coinography.png";
  const cryptonomist =
    "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/cryptonomist.jpg";
  const memecoinist =
    "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/memecoinist.png";
  const yahoo = "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/yahoo.png";
  const benzinga =
    "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/benzinga.jpg";
    
  const items1 = [
    {
      img: "https://paintswap.finance/images/logoRound.png",
      name: "PaintSwap",
      link: "https://paintswap.finance/marketplace/fantom/collections/blue-friends",
    },
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/spookyswap.png",
      name: "SpookySwap",
      link: "https://spooky.fi/#/swap?inputCurrency=FTM&outputCurrency=0x97bdAfe3830734acF12Da25359674277fcc33729",
    },
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/equilizer.png",
      name: "Equalizer",
      link: "https://equalizer.exchange/swap",
    },
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/ftm.png",
      name: "Fantom",
      link: "https://fantom.foundation/",
    },
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/CG.png",
      name: "CoinGecko",
      link: "https://www.coingecko.com/en/coins/blue-kirby",
    },
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/Lbank.png",
      name: "LBank",
      link: "https://www.lbank.com/trade/kirby_usdt",
    },
    {
      img: "https://pbs.twimg.com/profile_images/1723104544635142144/m0IykHiF_400x400.jpg",
      name: "Solidly",
      link: "https://solidly.exchange/",
    },
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/cmc.png",
      name: "Coinmarketcap",
      link: "https://coinmarketcap.com/currencies/blue-kirby/",
    },
  ];
  const items2 = [
    {
      img: "https://paintswap.finance/images/logoRound.png",
      name: "PaintSwap",
      link: "https://paintswap.finance/marketplace/fantom/collections/blue-friends",
    },
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/spookyswap.png",
      name: "SpookySwap",
      link: "https://spooky.fi/#/swap?inputCurrency=FTM&outputCurrency=0x97bdAfe3830734acF12Da25359674277fcc33729",
    },
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/equilizer.png",
      name: "Equalizer",
      link: "https://equalizer.exchange/swap",
    },
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/ftm.png",
      name: "Fantom",
      link: "https://fantom.foundation/",
    },
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/CG.png",
      name: "CoinGecko",
      link: "https://www.coingecko.com/en/coins/blue-kirby",
    },
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/Lbank.png",
      name: "LBank",
      link: "https://www.lbank.com/trade/kirby_usdt",
    },
    {
      img: "https://pbs.twimg.com/profile_images/1723104544635142144/m0IykHiF_400x400.jpg",
      name: "Solidly",
      link: "https://solidly.exchange/",
    },
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/cmc.png",
      name: "Coinmarketcap",
      link: "https://coinmarketcap.com/currencies/blue-kirby/",
    },
  ];


  React.useEffect(() => {
    let element = document.getElementById("roadmap");
    setElement2(element);
  }, []);


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
          <Box mt={"4rem"}>
            <Typography
              fontSize={{ xs: "20px", sm: "35px", lg: "35px" }}
              fontWeight={"800"}
              color={"#007dff"}
              textAlign={{ xs: "center", sm: "center", lg: "start" }}
            >
              News
            </Typography>
            <Typography
              fontSize={{ xs: "20px", sm: "30px", lg: "60px" }}
              fontWeight={"800"}
              color={darkmode ? "white" : "black"}
              textAlign={{ xs: "center", sm: "center", lg: "start" }}
            >
              Kirby in News
            </Typography>

            <Box>
              <Grid container spacing={"1rem"}>
                <Grid item lg={4} sm={6} xs={12}>
                  <Box
                    display={"flex"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    p={"1rem"}
                    gap={"1rem"}
                  >
                    <img
                      src={coingap}
                      alt="coingap"
                      className="mini-news-wrapp"
                    />
                    <Box>
                      <Typography
                        color={darkmode ? "white" : "black"}
                        fontSize={"30px"}
                        fontWeight={700}
                      >
                        Coingape
                      </Typography>
                      <a
                        href="https://coingape.com/press-releases/the-phantoms-redemption-and-blue-kirbys-ascent-in-the-ever-evolving-cryptocosm/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Typography color={"gray"}>Open</Typography>
                      </a>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={4} sm={6} xs={12}>
                  <Box
                    display={"flex"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    p={"1rem"}
                    gap={"1rem"}
                  >
                    <img
                      src={cryptonomist}
                      alt="coingap"
                      className="mini-news-wrapp"
                    />
                    <Box>
                      <Typography
                        color={darkmode ? "white" : "black"}
                        fontSize={"30px"}
                        fontWeight={700}
                      >
                        Cryptonomist
                      </Typography>
                      <a
                        href="https://en.cryptonomist.ch/2023/12/30/blue-kirbys-role-fantoms/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Typography color={"gray"}>Open</Typography>
                      </a>
                    </Box>
                  </Box>
                </Grid>
                {/* <Grid item lg={4} sm={6} xs={12}>
                  <Box
                    display={"flex"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    p={"1rem"}
                    gap={"1rem"}
                  >
                    <img
                      src={coinography}
                      alt="coingap"
                      className="mini-news-wrapp"
                    />
                    <Box>
                      <Typography
                        color={darkmode ? "white" : "black"}
                        fontSize={"30px"}
                        fontWeight={700}
                      >
                        Coinography
                      </Typography>

                      <Typography color={"gray"}>Posting soon</Typography>
                    </Box>
                  </Box>
                </Grid> */}
                {/* <Grid item lg={4} sm={6} xs={12}>
                  <Box
                    display={"flex"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    p={"1rem"}
                    gap={"1rem"}
                  >
                    <img
                      src={memecoinist}
                      alt="coingap"
                      className="mini-news-wrapp"
                    />
                    <Box>
                      <Typography
                        color={darkmode ? "white" : "black"}
                        fontSize={"30px"}
                        fontWeight={700}
                      >
                        Memecoinist
                      </Typography>

                      <Typography color={"gray"}>Posting soon</Typography>
                    </Box>
                  </Box>
                </Grid> */}
                {/* <Grid item lg={4} sm={6} xs={12}>
                  <Box
                    display={"flex"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    p={"1rem"}
                    gap={"1rem"}
                  >
                    <img
                      src={yahoo}
                      alt="coingap"
                      className="mini-news-wrapp"
                    />
                    <Box>
                      <Typography
                        color={darkmode ? "white" : "black"}
                        fontSize={"30px"}
                        fontWeight={700}
                      >
                        Yahoo.com
                      </Typography>

                      <Typography color={"gray"}>Posting soon</Typography>
                    </Box>
                  </Box>
                </Grid> */}
                <Grid item lg={4} sm={6} xs={12}>
                  <Box
                    display={"flex"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    p={"1rem"}
                    gap={"1rem"}
                  >
                    <img
                      src={benzinga}
                      alt="coingap"
                      className="mini-news-wrapp"
                    />
                    <Box>
                      <Typography
                        color={darkmode ? "white" : "black"}
                        fontSize={"30px"}
                        fontWeight={700}
                      >
                        Benzinga
                      </Typography>

                      <Typography color={"gray"}>Posting soon</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
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
        <NewsLetter darkmode={darkmode} />
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
