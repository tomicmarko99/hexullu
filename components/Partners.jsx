import React from "react";
import Image from "next/image";
import RapidApi from "../public/rapid-api.png";
import Github from "../public/github.png";
import Vercel from "../public/vercel.png";
import Binance from "../public/binance.png";

const Partners = () => {
  return (
    <div className="Partners w-full flex justify-center items-center bg-[#e6e6e6]">
      <div className="PartnersBox max-w-[1240px] w-full py-[10px] px-4 flex">
        <div className="PartnersGrid grid grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-[90px] w-full items-center">
          <div className="flex">
            <Image objectFit="contain" alt="Hexullu APIs" src={RapidApi}></Image>
          </div>
          <div className="flex">
            <Image objectFit="contain" alt="Hexullu APIs" src={Github}></Image>
          </div>
          <div className="flex">
            <Image objectFit="contain" alt="Hexullu APIs" src={Vercel}></Image>
          </div>
          <div className="flex">
            <Image objectFit="contain" alt="Hexullu APIs" src={Binance}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
