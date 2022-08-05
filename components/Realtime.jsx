import React from "react";
import Link from "next/link";
import Image from "next/image";
import RealtimeData from "../public/real-time-analytics.svg";
import Slide from "react-reveal/Slide";

const Realtime = () => {
  return (
    <div className="Realtime w-full bg-[#fafafa] flex justify-center items-center">
      <div className="RealtimeBox max-w-[1240px] w-full py-[60px] px-4 flex">
        <div className="RealtimeGrid grid grid-cols-1 md:grid-cols-2 gap-[50px] w-full items-center">
          <div className="First flex items-center">
            <Image objectFit="contain" alt="Hexullu APIs" src={RealtimeData}></Image>
          </div>
          <Slide bottom duration={2000}>
            <div className="Second flex flex-col">
              <h1 className="text-4xl font-bold text-[#333333]">
                Real-Time APIs Which Immediately Push Data to Endpoints
              </h1>
              <p className="text-lg mt-[10px]">
                Our special scrapers firmly track data changes on targeted feeds and update API data in real-time.
              </p>
              <div className="btnBox flex justify-start mt-[20px]">
                <Link href="/faqs">
                  <div className="py-[10px] px-[30px] bg-[#009688] text-[#fff] tracking-wide rounded hover:shadow-lg cursor-pointer">
                    Read More
                  </div>
                </Link>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Realtime;
