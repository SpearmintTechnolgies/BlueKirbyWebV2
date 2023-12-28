import React from "react";
import fox from "../Images/fox.png";
import msbcn from "../Images/msnbc.png";
import mtv from "../Images/MTV.png";
import Coingecko from "../Images/CoinGeko.png";
import Discovery from "../Images/Discovery.png";

const BrandLogoStrip = () => {
  return (
    <div className="flex mt-[55px] ml-[4px]">
      <div className="flex flex-row justify-between items-center space-x-[50px]">
        <img src={fox} className="h-[36px] w-[60px]" />
        <img src={msbcn} className="h-[26px] w-[136px] " />
        <img src={mtv} className="h-[26px] w-[44px] " />
        <img src={Coingecko} className="h-[35px] w-[134px] " />
        <img src={Discovery} className="h-[22px] w-[112px] " />
      </div>
      <div className="flex flex-row justify-between items-center space-x-[50px]">
        <img src={fox} className="h-[36px] w-[60px] ml-[50px]" />
        <img src={msbcn} className="h-[26px] w-[136px] " />
        <img src={mtv} className="h-[26px] w-[44px] " />
        <img src={Coingecko} className="h-[35px] w-[134px]" />
        <img src={Discovery} className="h-[22px] w-[112px] " />
      </div>
    </div>
  );
};
export default BrandLogoStrip;
