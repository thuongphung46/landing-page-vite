import VideoPlayIntroduce from "../assets/videoplayback.mp4";
import ReactPlayer from "react-player/youtube";
import UseGetWith from "../hook/useGetWith";

const Achievement = () => {
  const { height, width } = UseGetWith();
  return (
    <div id="achievement" className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
        <div className="flex flex-col justify-center ">
          <h1 className="py-4 md:leading-[72px] text-3xl font-bold">
            <span className="text-[#20B486]">GIỚI THIỆU VỀ HITO CANXI</span>
          </h1>
          <p className="text-lg text-gray-600 text-justify">
            Hito Việt Nam mang nguồn cảm hứng từ Nhật Bản - đất nước mặt trời
            mọc để tạo nên hệ thống các sản phẩm bổ sung canxi từ nguyên liệu
            bột xương cá tuyết và tảo biển đỏ nhập khẩu 100% từ Nhật Bản. Sở hữu
            hàm lượng cao canxi hữu cơ cùng 72 vitamin, khoáng chất quý giúp hỗ
            trợ tăng trưởng chiều cao ở mọi lứa tuổi, phát triển thể chất toàn
            diện giúp kiến tạo thế hệ vàng cho tương lai đất nước.
          </p>
          <p className="h-[30px]"></p>
          <p className="text-lg text-gray-600 text-justify">
            Với chất lượng và hiệu quả vượt trội, Canxi Hito tự hào giành được
            hàng loạt giải thưởng uy tín khu vực Đông Nam Á, Châu Á với hơn 5
            triệu khách hàng tin tưởng sử dụng từ khắp nơi trên thế giới.
          </p>
        </div>

        <div
        className="m-auto md:order-last  order-first rounded drop-shadow-xl"
          style={{
            overflow: "auto",
          }}
        >
          <ReactPlayer
            width={width < 1024 ? `100%` : "580px"}
            loop
            muted
            playing
            url={
              "https://www.youtube.com/embed/MgCBn_hdjGg?rel=0&modestbranding=0&playsinline=1&controls=1&enablejsapi=1&origin=http%3A%2F%2Fwww.hitocenter.com&widgetid=2"
            }
          ></ReactPlayer>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
