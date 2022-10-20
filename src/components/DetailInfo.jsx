import React from "react";

export default function () {
  const transparentText =
    "bg-clip-text text-transparent bg-gradient-to-r from-[#33BBCF] via-[#9DEDF0] to-[#DEF9FA]";

  return (
    <div className="flex items-center gap-6 justify-center">
      <div className="flex items-center gap-6">
        <div className="font-semibold text-[40px]">3800+</div>
        <div className={`uppercase ${transparentText} text-[26px]`}>
          User Active
        </div>
      </div>
      |
      <div className="flex items-center gap-6">
        <div className="font-semibold text-[40px]">230+</div>
        <div className={`uppercase ${transparentText} text-[26px]`}>
          Trusted by company
        </div>
      </div>
      |
      <div className="flex items-center gap-6">
        <div className="font-semibold text-[40px]">$230M+</div>
        <div className={`uppercase ${transparentText} text-[26px]`}>
          transaction
        </div>
      </div>
    </div>
  );
}
