import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
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

function History({ darkmode, isMobile }) {
  const items1 = [monkey, cherry, shield, monkey, cherry, shield];
  const items2 = [cherry, monkey, cherry, shield, monkey, shield];
  return (
    <Box my={"2rem"}>
      <Container maxWidth="xl" className="global-flex">
        <Box display={"flex"} flexDirection={"column"}>
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
            Path of History to success
          </Typography>
          <Box mt={"2rem"} width={"100%"} position={"relative"}>
            <Box
              className={isMobile ? "pointer-line-mobile" : "pointer-line"}
            ></Box>
            <Grid container>
              <Grid item lg={6} sm={6} xs={12} mt={"2rem"}>
                <Typography
                  fontSize={{ xs: "12px", sm: "14px", lg: "15px" }}
                  color={"gray"}
                  textAlign={{ xs: "start", sm: "start", lg: "start" }}
                  ml={"25px"}
                >
                  June 25, 2021
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
                    Blue Kerby Born
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
                  fontSize={{ xs: "15px", sm: "18px", lg: "20px" }}
                  my={{ xs: "0rem", sm: "2rem" }}
                  color={darkmode ? "white" : "black"}
                  textAlign={{ xs: "start", sm: "start", lg: "start" }}
                  ml={"25px"}
                >
                  Lorem Ipsum is simply dummy text of the <br></br> Lorem Ipsum
                  is
                </Typography>
              </Grid>
              <Grid item lg={6} sm={6} xs={12} mt={"2rem"}>
                <Typography
                  fontSize={{ xs: "12px", sm: "14px", lg: "15px" }}
                  color={"gray"}
                  textAlign={{ xs: "start", sm: "start", lg: "start" }}
                  ml={"25px"}
                >
                  June 25, 2021
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
                    Blue Kerby Born
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
                  fontSize={{ xs: "15px", sm: "18px", lg: "20px" }}
                  my={{ xs: "0rem", sm: "2rem" }}
                  color={darkmode ? "white" : "black"}
                  textAlign={{ xs: "start", sm: "start", lg: "start" }}
                  ml={"25px"}
                >
                  Lorem Ipsum is simply dummy text of the <br></br> Lorem Ipsum
                  is
                </Typography>
              </Grid>
              <Grid item lg={6} sm={6} xs={12} mt={"2rem"}>
                <Typography
                  fontSize={{ xs: "12px", sm: "14px", lg: "15px" }}
                  color={"gray"}
                  textAlign={{ xs: "start", sm: "start", lg: "start" }}
                  ml={"25px"}
                >
                  June 25, 2021
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
                    Blue Kerby Born
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
                  fontSize={{ xs: "15px", sm: "18px", lg: "20px" }}
                  my={{ xs: "0rem", sm: "2rem" }}
                  color={darkmode ? "white" : "black"}
                  textAlign={{ xs: "start", sm: "start", lg: "start" }}
                  ml={"25px"}
                >
                  Lorem Ipsum is simply dummy text of the <br></br> Lorem Ipsum
                  is
                </Typography>
              </Grid>
              <Grid item lg={6} sm={6} xs={12} mt={"2rem"}>
                <Typography
                  fontSize={{ xs: "12px", sm: "14px", lg: "15px" }}
                  color={"gray"}
                  textAlign={{ xs: "start", sm: "start", lg: "start" }}
                  ml={"25px"}
                >
                  June 25, 2021
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
                    Blue Kerby Born
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
                  fontSize={{ xs: "15px", sm: "18px", lg: "20px" }}
                  my={{ xs: "0rem", sm: "2rem" }}
                  color={darkmode ? "white" : "black"}
                  textAlign={{ xs: "start", sm: "start", lg: "start" }}
                  ml={"25px"}
                >
                  Lorem Ipsum is simply dummy text of the <br></br> Lorem Ipsum
                  is
                </Typography>
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
            <Box ml={{xs:"0rem",sm:"2rem"}}>
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
                No Stopping us when we together
              </Typography>
            </Box>
            <SliderSecond item={items1} className={"infinit-scroll1"} />
            <SliderSecond item={items2} className={"infinit-scroll2"} />
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
