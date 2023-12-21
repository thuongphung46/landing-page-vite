import { ImageCard } from "../../assets";

export const FooterCecond = () => {
  return (
    <footer className="bg-black text-center text-white dark:bg-black dark:text-white lg:text-left">
      <div className="mx-6 py-10 text-left md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-4 w-4"
              >
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              TW elements
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div> */}
          <div className="flex justify-between">
            {" "}
            <div className="">
              {/* <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6> */}
              <p className="mb-4">
                <a href="#!" className="text-white dark:text-white">
                  Giới thiệu
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-white dark:text-white">
                  Điều khoản dịch vụ
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-white dark:text-white">
                  Chính sách thanh toán
                </a>
              </p>
            </div>
            <div className="">
              {/* <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6> */}
              <p className="mb-4">
                <a href="#!" className="text-white dark:text-white">
                  Chính sách đổi trả
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-white dark:text-white">
                  Chính sách bảo mật
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-white dark:text-white">
                  Chính sách giao hàng
                </a>
              </p>
            </div>
          </div>
          {/* <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6> */}
          <div className="flex justify-between items-center ">
            <div>
              <p className="mb-4 flex items-center justify-center md:justify-start ">
                <img src={ImageCard}></img>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black p-6 text-center dark:bg-black">
        <span>© 2023 Copyright:</span>
        <a
          className="font-semibold text-white dark:text-white"
          href="https://tw-elements.com/"
        >
          APT tech
        </a>
      </div>
    </footer>
  );
};
