import React from "react";

const FooterBanner = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row gap-5 items-center text-[#072661] text-sm w-11/12 mx-auto py-8 md:px-24">
      <p className="text-sm">© Copyright 2025, All Rights Reserved</p>
      <div className="flex items-center justify-between">
        <p className="mx-3">Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
};

export default FooterBanner;
