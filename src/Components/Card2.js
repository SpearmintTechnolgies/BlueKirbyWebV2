import React from "react";
import kirby from "../Images/card2kirby.png";

const Card2 = () => {
  return (
    <div>
      <div className="bg-cover bg-center mt-[55px] w-[1433px] h-[590px] rounded-[20px] bg-[url('https://s3-alpha-sig.figma.com/img/bd88/7784/cc3cf7312a9e47b2c227c9150b0ebbb4?Expires=1704672000&Signature=FZKxCHUXnB4sA9GrSEetZ4zmbCvEQr6-knm41P-QNrPyGtcyU54~rljo9q-La2sZFtqRYXMZdhdZ6Cf73YzIm2D5-Zj0bjlF8pRvnLVN661VfK2UhiNn4RhhcekAqKFakjFVA2~5xfOdkxYGtDJpJQgXpiPLna4YEl6Mdhp67N5UOUSmK066cwwpkKpR6jUc3O89EqiHFUBI5UfVa4sRQXYxzqZWclMSgUtxV7k4jDKhEdkP1spIbux9MjtGz2fbktF~bllnvsR4qkUgGBeYZHj~INAjL8n0UwWU8V8Fue-DO9T1UsMUsmDV64ofTNWz~BVapO2b6-Tooq5MwcjGCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">
        <h1 className="pl-[106px] text-white font-poppins font-semibold leading-[47px] text-[40px] pt-[64px]">
          Community is what <br />
          makes or Breaks
        </h1>
        <div className="flex pl-[99px]  ">
          <h1 className="text-blue font-poppins font-semibold leading-[67px] text-[60px] pt-[71px] h-[256px] w-[736px] ">
            Let's change <br />
            community tokens <br />
            forever on FLOKI and <br /> lead the bull run.
          </h1>
          <div className="pb-[103px]">
            <img src={kirby} className="h-[355px] w-[561px] " alt="logo" />
            <div className="pl-[217px]">
              <button className="text-black text-center font-semibold bg-white  rounded-[10px] px-5 py-2.5 mr-[19px]">
                Explore
              </button>

              <button className="text-white text-center font-semibold bg-blue px-5 py-2.5 rounded-[10px] mr-[66px]">
                Buy Kirby
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card2;
