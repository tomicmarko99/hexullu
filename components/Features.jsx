import React from "react";
import Image from "next/image";
import Realtime from "../public/realtime-icon.png";
import Structured from "../public/structured-icon.png";
import Fast from "../public/fast-icon.png";
import Started from "../public/started-icon.png";
import Slide from "react-reveal/Slide";

const Features = () => {
  return (
    <div className="FeaturesSection bg-[#fafafa] w-full flex justify-center items-center">
      <div className="FeaturesBox max-w-[1240px] w-full py-[50px] px-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-[#333333]">Top Features</h1>
        <Slide left>
          <div className="FeaturesGrid text-[#333333] bg-[#fff] p-[30px] rounded shadow-md grid grid-cols-1 md:grid-cols-4 w-full gap-[50px] mt-[40px]">
            <div className="Card flex flex-col">
              <div className="w-[30%] mb-[15px] flex">
                <Image objectFit="contain" alt="Hexullu APIs" src={Realtime}></Image>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-[10px]">Real-time data</h1>
                <p>We guarantee you get all the data in real-time and that data comes from official sources.</p>
              </div>
            </div>
            <div className="Card flex flex-col">
              <div className="w-[30%] mb-[15px] flex">
                <Image objectFit="contain" alt="Hexullu APIs" src={Structured}></Image>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-[10px]">Well structural data</h1>
                <p>The response body is in JSON, which is a machine-readable data exchange format.</p>
              </div>
            </div>
            <div className="Card flex flex-col">
              <div className="w-[30%] mb-[15px] flex">
                <Image objectFit="contain" alt="Hexullu APIs" src={Fast}></Image>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-[10px]">Fast req/res time</h1>
                <p>
                  You will receive a quick response time that is significantly faster than any other crawling methods or
                  services available.
                </p>
              </div>
            </div>
            <div className="Card flex flex-col">
              <div className="w-[30%] mb-[15px] flex">
                <Image objectFit="contain" alt="Hexullu APIs" src={Started}></Image>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-[10px]">Beginners will find it simple to use.</h1>
                <p>Subscribe for a plan, generate a token key, and make your first request. No extra fees.</p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Features;
