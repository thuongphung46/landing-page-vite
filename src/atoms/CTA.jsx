import React from "react";

export const CTA = ({name, image, detail, voice}) => {
  return (
    <div id="cta" className="w-full bg-[#E9F8F3] py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0">
        <img src={image} className="w-[650px] mx-auto" />

        <div>
          <h1 className="py-2  text-3xl font-semibold">
            <span className="text-[#0a67e9]">{name}</span>
          </h1>
          <p className="py-2 text-lg text-gray-600 font-bold">
           {detail}
          </p>
          <p className="py-2 text-lg text-gray-600 text-justify ">
            "{voice}"
          </p>
          <button className="max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-[#0a67e9] text-white font-bold">
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  );
};
