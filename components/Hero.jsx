import React from "react";
import Link from "next/link";
import Image from "next/image";
import Rocket from "../public/Rocket-research.svg";
import Slide from "react-reveal/Slide";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div className="HeroSection bg-[url('https://i.ibb.co/DL4Ft4D/hero-background.png')] bg-center bg-no-repeat bg-cover w-full flex justify-center items-center ">
      <div className="HeroBox max-w-[1240px] w-full py-[100px]">
        <div className="HeroGrid grid grid-cols-1 md:grid-cols-2 gap-[30px] p-4 w-full">
          <Slide left>
            <div className="first flex items-center">
              <div className="heroTextBox">
                <h1 className="text-6xl font-bold text-[#333333]">Rocket Fuel For Your Web App</h1>
                <h2 className="text-2xl text-[#009688] mt-[20px]">
                  Accelerate development using powerful and reliable APIs.
                </h2>
                <div className="btnBox flex mt-[20px] gap-5 items-center">
                  <Link href="/apis">
                    <div className="py-[10px] px-[30px] bg-[#009688] text-[#fff] tracking-wide rounded hover:shadow-lg cursor-pointer">
                      Get Started
                    </div>
                  </Link>
                  <Link href="/documentation">
                    <div className="underline tracking-wide text-lg cursor-pointer">Documentation</div>
                  </Link>
                </div>
              </div>
            </div>
          </Slide>
          <div className="second flex items-center">
            <Image objectFit="contain" alt="Hexullu APIs" src={Rocket}></Image>
          </div>
        </div>
        <div className="StatsGrid grid grid-cols-2 md:grid-cols-4 gap-[20px] p-4 mt-[90px] items-between text-[#333333]">
          <Slide bottom duration={1000}>
            <div className="flex flex-col shadow-md p-3 rounded">
              <h3 className="text-4xl font-bold">
                <span className="text-[#009688]">
                  <CountUp start={0} end={40} duration={1} delay={1} />
                </span>
                +
              </h3>
              <p className="font-medium">
                APIs for cryptocurrency, finance, marketing, trading, and other related topics
              </p>
            </div>
          </Slide>
          <Slide bottom duration={1200}>
            <div className="flex flex-col shadow-md p-3 rounded">
              <h3 className="text-4xl font-bold">
                <span className="text-[#009688]">
                  <CountUp start={0} end={300} duration={1} delay={1} />
                </span>
                M+
              </h3>
              <p className="font-medium">API requests performed per day, peaking 200K per minute</p>
            </div>
          </Slide>
          <Slide bottom duration={1400}>
            <div className="flex flex-col shadow-md p-3 rounded">
              <h3 className="text-4xl font-bold">
                <span className="text-[#009688]">
                  <CountUp start={0} end={95} duration={1} delay={1} />
                </span>
                +
              </h3>
              <p className="font-medium">Countries from which the data comes</p>
            </div>
          </Slide>
          <Slide bottom duration={1600}>
            <div className="flex flex-col shadow-md p-3 rounded">
              <h3 className="text-4xl font-bold">
                <span className="text-[#009688]">
                  <CountUp start={0} end={2} duration={1} delay={1} />
                </span>
                K
              </h3>
              <p className="font-medium">
                Already scraped Websites including criptocurrency trading websites and many more
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Hero;
