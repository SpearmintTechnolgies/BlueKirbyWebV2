import React from "react";
import Navbar from "./Components/Navbar";
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2";
import BrandLogoStrip from "./Components/BrandLogoStrip";

const App = () => {
  return (
    <div className="bg-custom-black-1">
      <div className="grid place-items-center mt-8">
        <Navbar />
      </div>
      <div className="pt-[34px] mx-[149px]">
        <Card1 />
        <BrandLogoStrip />
        <Card2 />
      </div>
    </div>
  );
};

export default App;
