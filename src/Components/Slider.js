import { Box } from "@mui/material";
import React, { useState } from "react";

function Slider() {
  const [sliders, setSliders] = useState([
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/solidity-gray.png",
      link: "https://solidly.exchange/",
    },
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/CG-gray.png",
      link: "https://www.coingecko.com/en/coins/blue-kirby",
    },
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/CMC-gray.png",
      link: "https://coinmarketcap.com/currencies/blue-kirby/",
    },
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/spookeyswap-gray.png",
      link: "https://spooky.fi/#/swap?inputCurrency=FTM&outputCurrency=0x97bdAfe3830734acF12Da25359674277fcc33729",
    },
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/Fantom-gray.png",
      link: "https://fantom.foundation/",
    },
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/equlizer-gray.png",
      link: "https://equalizer.exchange/swap",
    },
    {
      img: "https://kirbyv2.s3.eu-north-1.amazonaws.com/Images/lbank-gray.png",
      link: "https://www.lbank.com/trade/kirby_usdt",
    },
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
