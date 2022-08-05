import React from "react";
import Image from "next/image";
import Err404 from "../public/404.svg";

const ComingSoon = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="ContentBox max-w-[1240px] w-full py-[100px] px-4]">
        <div className="404Box flex flex-col justify-center items-center py-4 ">
          <h1 className="text-2xl text-[#333333] font-bold mb-[40px]">Coming Soon!</h1>
          <div className="flex w-[260px] md:w-[720px]">
            <Image objectFit="contain" alt="Hexullu APIs" src={Err404}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
