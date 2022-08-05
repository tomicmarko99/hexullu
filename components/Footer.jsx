import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="Footer w-full flex flex-col justify-center items-center bg-[#333333] ">
      <div className="FooterBox max-w-[1240px] w-full py-[30px] px-4">
        <div className="FooterGrid grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-[100px] w-full">
          <div className="BrandAbout flex flex-col">
            <h1 className="text-3xl text-[#009688] font-bold mb-[20px]">Hexullu APIs</h1>
            <p className="text-[#e6e6e6]">
              Hexullu provides real-time APIs that simplify and speed up development. Our special scrapers firmly track
              data changes on targeted feeds and update API data in real-time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[50px]">
            <div className="Links">
              <h3 className="text-3xl text-[#009688] font-bold mb-[20px]">About Us</h3>
              <div className="flex flex-col text-[#e6e6e6] gap-[5px]">
                <div>
                  <Link href="/">Home</Link>
                </div>
                <div>
                  <Link href="/apis">APIs</Link>
                </div>
                <div>
                  <Link href="/documentation">Documentation</Link>
                </div>
                <div>
                  <Link href="/faqs">FAQs</Link>
                </div>
              </div>
            </div>
            <div className="Socials">
              <h3 className="text-3xl text-[#009688] font-bold mb-[20px]">Community</h3>
              <div className="flex gap-[15px] text-[#e6e6e6]">
                <div>
                  <Link href="/apis">
                    <AiFillGithub className="text-3xl cursor-pointer" />
                  </Link>
                </div>
                <div>
                  <Link href="/apis">
                    <AiFillLinkedin className="text-3xl cursor-pointer" />
                  </Link>
                </div>
                <div>
                  <Link href="/apis">
                    <AiFillTwitterCircle className="text-3xl cursor-pointer" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="FooterLine text-[#009688] flex justify-center bg-[#222222] w-full py-[20px]">
        Copyright © 2022 Hexullu. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
