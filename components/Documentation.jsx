import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";

const Documentation = () => {
  return (
    <div className="Apis bg-[url('https://i.ibb.co/DL4Ft4D/hero-background.png')] bg-center bg-no-repeat bg-cover w-full bg-[#fff] flex justify-center items-center">
      <div className="DocumentationBox max-w-[1240px] min-h-[100vh] w-full py-[100px] px-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-[#333333]">Documentation - Hexullu APIs</h1>
        <h2 className="text-sm font-[500] text-[#666666] mt-[10px] mb-[10px]">Welcome to Hexullu APIs documentation</h2>

        <Slide bottom duration={1000}>
          <div className="Documentation w-full  mt-[50px] bg-[#fff] shadow p-[30px]">
            <h2 className="text-2xl text-[#333333] font-[500] mb-[10px]">Introduction</h2>
            <p className="text-md text-[#666666]">
              Welcome to the documentation for the Hexullu APIs! Our APIs allow you to access official live and
              structural data from many different brands across many different categories. You may check all available
              APIs at{" "}
              <span className="text-[#009688] font-[500]">
                <Link href="/apis">Hexullu APIs</Link>
              </span>
              .
            </p>
            <p className="mt-[10px] text-md text-[#666666]">
              We currently provide our services via{" "}
              <span className="text-[#009688] font-[500]">
                <Link href="https://rapidapi.com/hub">
                  <a target="_blank" rel="noreferrer">
                    RapidAPI
                  </a>
                </Link>
              </span>{" "}
              only. You need to register an account on the market platform as developer or consumer to start using our
              APIs. Please have a look at{" "}
              <span className="text-[#009688] font-[500]">
                <Link href="https://docs.rapidapi.com/docs/consumer-quick-start-guide">
                  <a target="_blank" rel="noreferrer">
                    Creating a project
                  </a>
                </Link>
              </span>{" "}
              to get started.
            </p>
          </div>
        </Slide>

        <Slide bottom duration={1000}>
          <div className="Documentation w-full  mt-[50px] bg-[#fff] shadow p-[30px]">
            <h2 className="text-2xl text-[#333333] font-[500] mb-[10px]">Authentication</h2>
            <p className="text-md text-[#666666]">
              RapidAPI uses token key to allow access to all APIs on the platform. You need to generate a token key for
              a new app in your developer control panel of RapidAPI at{" "}
              <span className="text-[#009688] font-[500]">
                <Link href="https://rapidapi.com/developer">
                  <a target="_blank" rel="noreferrer">
                    RapidAPI-developer
                  </a>
                </Link>
              </span>
              .
            </p>
            <p className="mt-[10px] text-md text-[#666666]">
              You then need to learn how to pass the token key via request HEADER as following :
            </p>
            <div className="flex">
              <p className="mt-[10px] px-[20px] py-[5px] bg-[#e6e6e6] text-[#333333] font-[500] tracking-wide rounded">
                x-rapidapi-key: YourApiKey
              </p>
            </div>
            <p className="mt-[25px] px-[20px] py-[5px] shadow-md text-[#333333] font-[500] tracking-wide">
              You must replace <span className="text-[#009688]">YourApiKey</span> with your personal API key!
            </p>
          </div>
        </Slide>

        <Slide bottom duration={1000}>
          <div className="Documentation w-full  mt-[50px] bg-[#fff] shadow p-[30px]">
            <h2 className="text-2xl text-[#333333] font-[500] mb-[10px]">Subscription Plans & Pricing</h2>
            <h3 className="text-md text-[#333333] font-[500] mb-[10px]">
              Here is how to subscribe and pay for your API calls on RapidAPI.
            </h3>
            <h4 className="text-xl text-[#333333] font-[500] mb-[10px]">Types of APIs</h4>
            <p className="text-md text-[#666666] mb-[10px]">
              RapidAPI has three types of APIs: free, freemium and paid.
            </p>
            <h4 className="text-xl text-[#333333] font-[500] mb-[10px]">Free APIs</h4>
            <p className="mb-[10px] text-md text-[#666666]">
              APIs that do not require a credit card or subscription plan to consume.
            </p>
            <h4 className="text-xl text-[#333333] font-[500] mb-[10px]">Freemium APIs</h4>
            <p className="mb-[10px] text-md text-[#666666]">
              Paid APIs that include a limited free tier and require a credit card.
            </p>
            <h4 className="text-xl text-[#333333] font-[500] mb-[10px]">Paid APIs</h4>
            <p className="text-md text-[#666666]">
              APIs that require a paid subscription plan and credit card to consume.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Documentation;
