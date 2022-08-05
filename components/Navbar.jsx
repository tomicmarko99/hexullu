import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillHome,
  AiFillApi,
  AiFillFileText,
  AiFillQuestionCircle,
} from "react-icons/ai";
import HexulluLogo from "../public/hexullu-logo.png";
import Image from "next/image";
import styled from "styled-components";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("");
  const [shadow, setShadow] = useState("");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#333333");
        setShadow("rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px");
      } else {
        setColor("transparent");
        setTextColor("#333333");
        setShadow("");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <NavBar
      style={{ backgroundColor: `${color}`, boxShadow: `${shadow}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
        <Link href="/">
          {/* <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            hexullu
          </h1> */}
          <Image width="140" height="30" objectFit="contain" alt="Hexullu APIs" src={HexulluLogo}></Image>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex font-medium">
          <li className="ml-5">
            <Link href="/">Home</Link>
          </li>
          <li className="ml-5">
            <Link href="/apis">APIs</Link>
          </li>
          <li className="ml-5">
            <Link href="/documentation">Documentation</Link>
          </li>
          <li className="ml-5">
            <Link href="/faqs">FAQs</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 right-0 bottom-0 flex  items-center w-[60%] h-screen bg-white shadow-md text-black ease-in duration-300"
              : "sm:hidden absolute top-0 right-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#333333] text-center ease-in duration-300"
          }
        >
          <ul className="mobileMenuBox w-full">
            <li onClick={handleNav} className="p-3 text-xl hover:text-gray-500 hover:bg-[#f5f5f5] w-full">
              <Link onClick={handleNav} href="/">
                <div className="flex gap-3 items-center">
                  <AiFillHome className="mobileMenuIcon" />
                  Home
                </div>
              </Link>
            </li>
            <li onClick={handleNav} className="p-3 text-xl hover:text-gray-500 hover:bg-[#f5f5f5] w-full">
              <Link href="/apis">
                <div className="flex gap-3 items-center">
                  <AiFillApi className="mobileMenuIcon" />
                  APIs
                </div>
              </Link>
            </li>
            <li onClick={handleNav} className="p-3 text-xl hover:text-gray-500 hover:bg-[#f5f5f5] w-full">
              <Link href="/documentation">
                <div className="flex gap-3 items-center">
                  <AiFillFileText className="mobileMenuIcon" />
                  Documentation
                </div>
              </Link>
            </li>
            <li onClick={handleNav} className="p-3 text-xl hover:text-gray-500 hover:bg-[#f5f5f5] w-full">
              <Link href="/faqs">
                <div className="flex gap-3 items-center ">
                  <AiFillQuestionCircle className="mobileMenuIcon" />
                  FAQs
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </NavBar>
  );
};

export default Navbar;

const NavBar = styled.div`
  .mobileMenuBox {
    li:hover {
      cursor: pointer !important;
    }
  }

  .mobileMenuBox {
    li:hover {
      .mobileMenuIcon {
        color: #009688 !important;
      }
    }
  }
`;
