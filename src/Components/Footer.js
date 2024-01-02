import { Box, Container, Grid } from "@mui/material";
import React from "react";
import BlueKirbyLogo from "../images/kirbyicon.svg";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <Box my={"2rem"}>
      <Container maxWidth="xl" className="global-flex">
        <Box width={'100%'}>

        <Grid container>
          <Grid item lg={6} sm={6} xs={12}>
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={{xs:"center",sm:"start"}}
              alignItems={"center"}
              p={"1rem"}
            >
              <img src={BlueKirbyLogo} alt="img" />
            </Box>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={{xs:"center",sm:"end"}}
              alignItems={"center"}
              p={"1rem"}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"1rem"}
              >
                <Box className="social-circle">
                  <TelegramIcon />
                </Box>
                <Box className="social-circle">
                  <TwitterIcon />
                </Box>
                <Box className="social-circle">
                  <FacebookIcon />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
