import React from "react";
import ReactPlayer from "react-player/youtube";
import Image1 from "../assets/message1.png";

export const FeedbackCard = ({ url }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl my-8 mx-2">
      <div className="flex justify-center text-center max-w-[400px] max-h-[225px] ">
        <ReactPlayer
          className=" bg-[#000] rounded max-w-[400px] max-h-[225px]"
          url={url}
        ></ReactPlayer>
      </div>
    </div>
  );
};

export const FeedbackMessCard = ({ url }) => {
  // console.log(url);
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl my-8 mx-2">
      <div className="flex justify-center text-center h-[520px]  ">
        <img
          className=" bg-[#000] rounded object-cover max-h-[520px]"
          src={url}
        ></img>
      </div>
    </div>
  );
};
