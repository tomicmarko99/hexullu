import React from "react";
import Navbar from "../components/Navbar";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import { faqsList } from "../helpers/faqsList";
import Head from "next/head";

const faqs = () => {
  return (
    <div>
      <Head>
        <title>Hexullu APIs - FAQs</title>
        <meta property="og:title" content="Hexullu APIs - FAQs" key="title" />
        <meta
          name="keywords"
          content="hexullu, hexullu apis, best apis, api hexullu, realtime api, live api, hexullu website, hexullu rapidapi"
        />
        <meta name="author" content="Syamlal CM" />
        <meta
          name="description"
          content="Hexullu provides real-time APIs that simplify and speed up development. Our special scrapers firmly track data changes on targeted feeds and update API data in real-time."
        />
      </Head>
      <Navbar />

      <div className="bg-[url('https://i.ibb.co/DL4Ft4D/hero-background.png')] bg-center bg-no-repeat bg-cover w-full bg-[#fff] flex  justify-center">
        <div className="max-w-[1280px] w-full px-4 py-[100px] flex flex-col items-center min-h-[100vh]">
          <h1 className="text-3xl font-bold text-[#333333]">FAQs - Hexullu APIs</h1>
          <h2 className="text-sm font-[500] text-[#666666] mt-[10px] mb-[10px]">
            Frequently asked questions about Hexullu
          </h2>
          <div className="w-full md:w-[720px] mt-[50px] shadow">
            {faqsList.map((faqs, idx) => {
              return <Accordion question={faqs.question} answer={faqs.answer} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default faqs;
