import { Box } from "@mui/material";
import React, { useState } from "react";
import solidity from "../images/solidity-gray.png";
import CG from "../images/CG-gray.png";
import CMC from "../images/CMC-gray.png";
import spookeyswap from "../images/spookeyswap-gray.png";
import fantom from "../images/Fantom-gray.png";
import equilizer from "../images/equlizer-gray.png";
import LBank from "../images/lbank-gray.png";

function Slider() {
  const [sliders, setSliders] = useState([
    { img: solidity, link: "https://solidly.exchange/" },
    { img: CG, link: "https://www.coingecko.com/en/coins/blue-kirby" },
    { img: CMC, link: "https://coinmarketcap.com/currencies/blue-kirby/" },
    {
      img: spookeyswap,
      link: "https://spooky.fi/#/swap?inputCurrency=FTM&outputCurrency=0x97bdAfe3830734acF12Da25359674277fcc33729",
    },
    { img: fantom, link: "https://fantom.foundation/" },
    { img: equilizer, link: "https://equalizer.exchange/swap" },
    { img: LBank, link: "https://www.lbank.com/trade/kirby_usdt" },
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
          <a href={slide.link} target="_blank" rel="noreferrer">
            <Box key={index} width={{ xs: 50, sm: 100 }}>
              <img src={slide.img} alt="slider" />
            </Box>
          </a>
        ))}
      </Box>
    </div>
  );
}

export default Slider;
