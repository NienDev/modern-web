import React from "react";

export default function Card({ title, description, path }) {
  return (
    <div className="flex gap-6 w-[470px] ml-6 hover:bg-gradient-to-b hover:from-[#34303e] hover:to-[#FFFFFF00] p-4 rounded-md">
      <img
        src={path}
        alt="icon"
        className="bg-[#09977C1A] rounded-[50%] px-6"
      />
      <div>
        <h2 className="font-semibold text-[24px]">{title}</h2>
        <p className="text-[#FFFFFFB2]">{description}</p>
      </div>
    </div>
  );
}
