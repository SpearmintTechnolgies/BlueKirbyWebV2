import { Box, Typography } from "@mui/material";
import React from "react";
import iconbox from "../images/icon-box.svg";

function SliderSecond({ item, className }) {


  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
      className="infinit-scroll-wrapper"
    >
      <Box className={className}>
        {item.map((slide, index) => (
          <Box width={"150px"} position={"relative"}>
            <img src={iconbox} width={"100%"} alt="icon" />
            <Box
              position={"absolute"}
              top={"20px"}
              left={"25px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <img src={slide} width={"100px"} alt="logo" />
              <Typography color={"gray"}>Lorem</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default SliderSecond;
