import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import QuickLinks from "@/components/sections/QuickLinks";
import AreasOfStudy from "@/components/sections/AreasOfStudy";
import Stats from "@/components/sections/Stats";
import VideoSection from "@/components/sections/VideoSection";
import NewsGrid from "@/components/sections/NewsGrid";
import { hero, quickLinks, areasOfStudy, stats, news, video } from "@/content/homepage";

const Home: NextPage = () => (
  <>
    <Head>
      <title>SMU – Southern Methodist University | Dallas, Texas</title>
      <meta
        name="description"
        content="SMU is a nationally ranked private university in Dallas, Texas. Explore top undergraduate, graduate, and professional programs across 8 world-class schools."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main id="main-content">
      <Hero {...hero} />
      <QuickLinks items={quickLinks} />
      <AreasOfStudy areas={areasOfStudy} />
      <VideoSection {...video} />
      <Stats stats={stats} />
      <NewsGrid articles={news} />
    </main>

    <Footer />
  </>
);

export default Home;
