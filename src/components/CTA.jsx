import React from "react";

export default function CTA() {
  return (
    <div className="h-[400px] flex hover:bg-gradient-to-b hover:from-[#34303e] hover:to-[#FFFFFF00] p-12 rounded-xl mt-24 justify-around ">
      <div className="my-auto">
        <h1 className="font-semibold text-[48px] mb-4">
          Let’s try our service now!
        </h1>
        <p className="text-[18px] text-[#a9a9a9b0] w-[448px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <button className="bg-[#60E1E6] p-4 px-6 rounded-xl text-black font-semibold box-border my-auto">
        Get Started
      </button>
    </div>
  );
}
