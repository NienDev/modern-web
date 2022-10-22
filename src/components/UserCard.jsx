import React from "react";

export default function UserCard({ name, job, quote, path }) {
  return (
    <div className="w-[370px] h-[395px] hover:bg-gradient-to-b hover:from-[#34303e] hover:to-[#FFFFFF00] p-8 rounded-xl flex flex-col  items-start justify-around">
      <img
        className="my-4 mb-6 h-12 "
        src="/modern-web/assets/quotes.svg"
        alt="icon"
      />
      <p className=" text-[18px] mb-12">{quote}</p>
      <div className="flex items-center gap-4">
        <img className="w-[48px]" src={path} alt="people" />
        <div>
          <h2 className="font-semibold">{name}</h2>
          <p className="text-[#ffffff7e] ">{job}</p>
        </div>
      </div>
    </div>
  );
}
