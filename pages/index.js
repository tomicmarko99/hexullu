import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Realtime from "../components/Realtime";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hexullu APIs - Real-Time APIs Which Immediately Push Data to Endpoints</title>
        <meta property="og:title" content="Hexullu APIs - Best Free and Premium APIs for your WEB APP" key="title" />
        <meta
          name="keywords"
          content="hexullu, hexullu apis, best apis, api hexullu, real-time apis, live apis, hexullu website, hexullu rapidapi"
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
      <Hero />
      <Partners />
      <Realtime />
      <Features />
      <Footer />
    </>
  );
}
