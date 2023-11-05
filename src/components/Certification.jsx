import VideoPlayIntroduce from "../assets/videoplayback.mp4";

const Certification = () => {
  return (
    <div id="certification" className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-1 max-w-[600px]  px-4 md:px-0">
        <div className="py-4 w-full justify-center text-center ">
          <h1 className="py-3 text-3xl w-full font-bold text-[#0a67e9] relative z-[1] drop-shadow-2xl">
            <span className="text-[#20B486]">CHỨNG NHẬN VÀ GIẢI THƯỞNG</span>
          </h1>
          <p className="py-3 text-xl w-full font-bold text-[#0a67e9] relative z-[1] ">
            Chứng nhận và giải thưởng hàng đầu khu vực trong lĩnh vực phát triển
            chiều cao
          </p>
        </div>
        <div className="flex grid-cols-2 justify-center">
          <div className="sm flex flex-col justify-center bg-cover max-w-[400px] rounded" >
            <img
              style={{
                animationName: "bounceInUp",
                animationDelay: "0.5s",
                animationDuration: "1.2s",
                height: "100%",
              }}
              src={
                "https://w.ladicdn.com/s700x800/5e476fd054f5fa0a4cfbc867/giaithuong2-20230821154004-1oaek.jpg"
              }
            ></img>
          </div>
          <div className="sm flex flex-col justify-center bg-cover max-w-[400px] rounded">
            <img
             className="bg-cover"
              style={{
                animationName: "bounceInUp",
                animationDelay: "0.7s",
                animationDuration: "1.2s",
                
              }}
              src={
                "https://w.ladicdn.com/s650x800/5e476fd054f5fa0a4cfbc867/gcb-a-20230821154103-arta_.png"
              }
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
