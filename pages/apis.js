import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApiCard from "../components/ApiCard";
import { ThreeDots } from "react-loader-spinner";
import Head from "next/head";

const Apis = () => {
  const [loader, setLoader] = useState(true);
  const url = "https://hexullu-rapid-scraper.herokuapp.com/hexullu";
  const [listOfApis, setListOfApis] = useState([]);

  useEffect(() => {
    Axios.get(url).then((response) => {
      setLoader(false);
      setListOfApis(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div>
      <Head>
        <title>Hexullu APIs - Best Free and Premium APIs for your WEB APP</title>
        <meta property="og:title" content="Hexullu APIs - Best Free and Premium APIs for your WEB APP" key="title" />
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
      <div className="Apis bg-[url('https://i.ibb.co/DL4Ft4D/hero-background.png')] bg-center bg-no-repeat bg-cover w-full bg-[#fff] flex justify-center items-center">
        <div className="ApisBox max-w-[1240px] min-h-[100vh] w-full py-[100px] px-4 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-[#333333]">Choose the API you want to use</h1>
          <h2 className="text-sm font-[500] text-[#666666] mt-[10px] mb-[10px]">
            All of APIs have a free plan with a fixed quota to test them at first
          </h2>

          {loader && <ThreeDots color="#009688" height={80} width={80} timeout={30} />}

          <div className="ApisGrid grid grid-cols-1 md:grid-cols-4 gap-[20px]  gap-[50px] w-full  mt-[50px]">
            {listOfApis.map((Api) => {
              return <ApiCard title={Api.title} description={Api.description} img={Api.img} url={Api.url} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Apis;
