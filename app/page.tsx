import React from "react";
import { Header } from "./sections/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Features } from "./sections/Features";
import { Services } from "./sections/Services";
import { Pricing } from "./sections/Pricing";

const page = () => {
  return (
    <div className="inter-font">
      <Navbar />
      <Header />
      <Features />
      <Services />
      <Pricing />
    </div>
  );
};

export default page;
