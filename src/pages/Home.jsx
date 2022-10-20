import React from "react";
import { Hero } from "../components/Hero";
import DetailInfo from "../components/DetailInfo";
import Main from "../components/Main";
import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <DetailInfo />
      <Main />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}
