import React from "react";
import BlueKirbyLogo from "../Images/BlueKirbyLogo.png";
import Darkmode from "../Images/Darkmode.png";
import Lightmode from "../Images/Lightmode.png";

const Navbar = () => {
  return (
    <div className="bg-custom-black-2 mt-[33px] w-[698.5px] h-[58px] bg-[#0C0F13] rounded-[20px] justify-center items-center">
      <nav className="flex flex-row items-center mx-[20px] my-[10px]">
        <img
          className="w-[145.5px] h-[31.2px] mr-[19px]"
          src={BlueKirbyLogo}
          alt="logo"
        />
        <li className="list-none mx-[20px] my-[10px]">
          <a
            href="#"
            className="leading-[17.92px] font-poppins font-semibold text-white text-base"
          >
            What is Kirby
          </a>
        </li>
        <li className="list-none mx-[20px] my-[10px]">
          <a
            href="#"
            className="leading-[17.92px] font-poppins font-semibold text-white text-base"
          >
            Claim Kirby
          </a>
        </li>
        <li className="list-none mx-[20px] my-[10px]">
          <a
            href="#"
            className="leading-[17.92px] font-poppins font-semibold text-white text-base"
          >
            Buy Kirby
          </a>
        </li>
        <div className="flex flex-row ml-[19px]">
          <div className="p-1.5">
            <img className="h-[14px] w-[14px] " src={Darkmode} />
          </div>
          <div className="p-1.5">
            <img className="h-[14px] w-[14px] " src={Lightmode} />
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
