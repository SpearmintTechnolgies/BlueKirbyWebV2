import React from "react";
import logo2 from "../Images/logo_text 2.png";

const Card1 = () => {
  return (
    <div className="flex  gap-6">
      {/* //image1 */}
      <div className="bg-image1 bg-cover bg-center  h-[455px] w-[968px]">
        <h1 className="text-white font-poppins font-semibold leading-[78.4px] text-[70px] pt-[64px] pl-[68px]">
          Crypto for People <br />
          <span className="text-blue">by People</span>
        </h1>
        <div className="flex flex-row justify-between items-center pt-[140px]">
          <h3 className="text-white font-poppins font-semibold pl-[68px]">
            Its a utility token based on Phantom
          </h3>
          <div>
            <button className="text-black text-center font-semibold bg-white  rounded-[10px] px-5 py-2.5 mr-[19px]">
              Explore
            </button>

            <button className="text-white text-center font-semibold bg-blue px-5 py-2.5 rounded-[10px] mr-[66px]">
              Buy Kirby
            </button>
          </div>
        </div>
      </div>
      {/* //image2 */}
      <div className="bg-cover bg-center  w-[449px] h-[455px] rounded-[20px] bg-[url('https://s3-alpha-sig.figma.com/img/39a2/4292/c6eedc8b1346512ddcefe16676e7a5f5?Expires=1704672000&Signature=hEWl2N8-bfYJIHyDGQJxQrCZnHJxvdq3sLIAxdnQIIhPurgYdIJMkY0KeyxGOgY12L5G3gu1AWZ6wQ-1XcXix33ZpBhohXHmxFu-tgD6fWftiw-9-6Z3JH5FHnEZMvTBZPYOFLoQ~PSFDM0pgdM92hOjL~70utcdvBZN~FHyCxc7ea9w9-TTGtSX0sLTLMt52wqrkNzDfMxRtpQEfAxaIVC1OPYOCrawVe4j7-yTwi4osKqk0xOJIUzbCvBiIHAbtE-rOyL47I9azRjU7wWa0aTaACC8i2vO20B7wfhAZA~JEvq~pTrqCEri9HgCXTL-ThO2MSaJQ4cZWlmSmR77jQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">
        <div className="pl-[47px] pt-[54px]">
          <div className="text-white flex justify-center items-center font-semibold bg-blue rounded-[10px] h-[39px] w-[132px]">
            <img src={logo2} className="h-[19px] w-[21px]" alt="logo" />
            <p>Blue Kirby</p>
          </div>
        </div>

        <h1 className="pl-[47px] text-white font-poppins font-semibold leading-[54px] text-[48px] pt-[64px]">
          Let's lead the bullrun.
        </h1>
      </div>
    </div>
  );
};

export default Card1;
// gap-6
