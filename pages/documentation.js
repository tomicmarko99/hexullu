import React from "react";
import Navbar from "../components/Navbar";
import Documentation from "../components/Documentation";
import Footer from "../components/Footer";
import Head from "next/head";

const documentation = () => {
  return (
    <div>
      <Head>
        <title>Hexullu APIs - Documentation</title>
        <meta property="og:title" content="Hexullu APIs - Documentation" key="title" />
        <meta
          name="keywords"
          content="hexullu, hexullu apis, best apis, api hexullu, realtime api, live api, hexullu website, hexullu rapidapi"
        />
        <meta name="author" content="Syamlal CM" />
        <meta
          name="description"
          content="Hexullu provides real-time APIs that simplify and speed up development. Our special scrapers firmly track data changes on targeted feeds and update API data in real-time."
        />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
      </Head>
      <Navbar />
      <Documentation />
      <Footer />
    </div>
  );
};

export default documentation;
