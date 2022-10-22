import React from "react";
import Card from "./Card";
export default function () {
  return (
    <div className="mt-24">
      <div className="flex  justify-between">
        <div className="w-1/2">
          <h1 className="font-semibold text-[48px] mb-6">
            You do the business, <br></br>we’ll handle the money.
          </h1>
          <p className="text-[#FFFFFFB2] text-[18px]">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <button className="bg-[#60E1E6] p-4 px-6 rounded-xl text-black font-semibold mt-12">
            Get Started
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <Card
            title="Rewards"
            description="The best credit cards offer some tantalizing combinations of promotions and prizes"
            path="/modern-web/assets/Star.svg"
          />
          <Card
            title="100% Secured"
            description="We take proactive steps make sure your information and transactions are secure."
            path="/modern-web/assets/Shield.svg"
          />
          <Card
            title="Balance Transfer"
            description="A balance transfer credit card can save you a lot of money in interest charges."
            path="/modern-web/assets/Send.svg"
          />
        </div>
      </div>
      <div className="flex mt-24">
        <img src="/modern-web/assets/bill.png" alt="image" className="w-1/2" />
        <div className="w-[470px] mx-auto flex flex-col justify-center">
          <h1 className="font-semibold text-[48px] mb-6">
            Easily control your billing & invoicing.
          </h1>
          <p className="text-[#FFFFFFB2] text-[18px] mb-12">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="flex gap-4">
            <button className="flex hover:border-2 rounded-md">
              <img src="/modern-web/assets/apple.svg" alt="icon" />
            </button>
            <button className="flex hover:border-2 rounded-md">
              <img src="/modern-web/assets/google.svg" alt="icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-24 justify-between">
        <div className="">
          <h1 className="font-semibold text-[48px] mb-6">
            Find a better card deal<br></br> in few easy steps.
          </h1>
          <p className="text-[#FFFFFFB2] text-[18px] w-[500px]">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <button className="bg-[#60E1E6] p-4 px-6 rounded-xl text-black font-semibold mt-12">
            Get Started
          </button>
        </div>
        <div className="w-1/2">
          <img src="/modern-web/assets/card.png" alt="image" className="" />
        </div>
      </div>
    </div>
  );
}
