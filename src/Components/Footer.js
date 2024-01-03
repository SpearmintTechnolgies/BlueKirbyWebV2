import { Box, Container, Grid, IconButton } from "@mui/material";
import React from "react";
import BlueKirbyLogo from "../images/kirbyicon.svg";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <Box my={"2rem"}>
      <Container maxWidth="xl" className="global-flex">
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems={"center"}
        >
          <img src={BlueKirbyLogo} alt="img" />
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <a
              className="social-circle "
              href="https://t.me/bluekirbyftm"
              target="_blank"
              rel="noreferrer"
            >
              <TelegramIcon />
            </a>
            <a
              className="social-circle "
              href="https://twitter.com/Bluekirbyftm"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
