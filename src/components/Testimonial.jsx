import React from "react";
import UserCard from "../components/UserCard";

export default function Testimonial() {
  return (
    <div className="mt-24">
      <div className="flex justify-between items-center mb-16">
        <h1 className="text-[48px] font-semibold w-1/2">
          What people are <br></br>saying about us
        </h1>

        <p className="text-[18px] text-[#e0e0e0b0]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex justify-between">
        <UserCard
          name="Herman Jensen"
          job="Founder & Leader"
          quote="Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver."
          path="/modern-web/assets/people01.png"
        />
        <UserCard
          name="Steve Mark"
          job="Founder & Leader"
          quote="Money makes your life easier. If you're lucky to have it, you're lucky."
          path="/modern-web/assets/people02.png"
        />
        <UserCard
          name="Kenn Gallagher"
          job="Founder & Leader"
          quote="It is usually people in the money business, finance, and international trade that are really rich."
          path="/modern-web/assets/people03.png"
        />
      </div>
      <div className="flex flex-row justify-between items-center mt-6">
        <img
          className="h-[60px]  object-cover"
          src="/modern-web/assets/airbnb.png"
          alt="image"
        />
        <img
          className="h-[60px]  object-cover"
          src="/modern-web/assets/binance.png"
          alt="image"
        />
        <img
          className="h-[60px] relative top-[-10px]"
          src="/modern-web/assets/coinbase.png"
          alt="image"
        />
        <img
          className="h-[60px]  object-cover"
          src="/modern-web/assets/dropbox.png"
          alt="image"
        />
      </div>
    </div>
  );
}
