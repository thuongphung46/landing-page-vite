import React from "react";
import { CTA } from "../atoms/CTA";
import { DataEvaluate } from "../data/EvaluateData";

const Evaluate = () => {
  return (
    <div id="Evaluate" className="w-full bg-[#E9F8F3] py-24">
      <div className="py-4 w-full justify-center text-center">
        <h1 className="py-3 text-3xl w-full font-bold text-[#0a67e9] relative z-[1] drop-shadow-2xl">
          ĐÁNH GIÁ CỦA BÁC SĨ – CHUYÊN GIA
        </h1>
      </div>
      {DataEvaluate.map((item, i) => (
        <CTA
          key={i}
          name={item.name}
          image={item.image}
          detail={item.dettail}
          voice={item.voice}
        />
      ))}
    </div>
  );
};

export default Evaluate;
