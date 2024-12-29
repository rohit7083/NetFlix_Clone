import React from "react";
import Navbar from "../compo/Navbar";
import HeroSection from "../compo/HeroSection";
import Enjoy from "../compo/Enjoy";
import Download from "../compo/Download";
import CreateProfile from "../compo/CreateProfile";
import Faq from "../compo/Faq";
import { faqData } from "../data/faqData";
import Footer from "../compo/Footer";

function Home() {
  return (
    <>
      <HeroSection />

      <div className="hr_line" />

      <Enjoy />
      <div className="hr_line" />

      <Download />
      <div className="hr_line" />
      <CreateProfile />
      <div className="hr_line" />

      <div className="">
        <h2
          className="text-white text-center
        lg:text-5xl
        text-3xl font-bold py-10
        md:text-4xl"
        >
          Frequently Asked <br className="lg:hidden md:hidden sm:hidden" />{" "}
          Questions
        </h2>

        <div className="">
          {faqData.map((item, index) => {
            const { title, desc } = item;
            return <Faq key={index} title={title} desc={desc} />;
          })}
        </div>



      </div>
      <br />
      <div className="hr_line" />
      <Footer/>

    </>
  );
}

export default Home;
