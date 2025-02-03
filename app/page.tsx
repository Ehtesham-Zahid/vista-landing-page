import React from "react";
import { Header } from "./sections/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Features } from "./sections/Features";
import { Services } from "./sections/Services";
import { Pricing } from "./sections/Pricing";
import { About } from "./sections/About";
import { Footer } from "./components/Footer/Footer";
import { HowItWorks } from "./sections/HowItWorks";

const page = () => {
  return (
    <div className="inter-font">
      <Navbar />
      <Header />
      <Features />
      <About />
      <Services />
      <Pricing />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default page;
