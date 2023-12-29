import { Box } from "@mui/material";
import React, { useState } from "react";
import slider1 from "../images/slide-icon1.png";
import slider2 from "../images/slide-icon2.png";
import slider3 from "../images/slide-icon3.png";
import slider4 from "../images/slide-icon4.png";

function Slider() {
  const [sliders, setSliders] = useState([
    slider1,
    slider2,
    slider3,
    slider4,
    slider1,
    slider2,
    slider3,
  ]);

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
      <Box className="infinit-scroll">
        {sliders.map((slide, index) => (
          <Box key={index} width={{xs:50,sm:100}}>
            <img src={slide} alt="slider" />
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default Slider;
