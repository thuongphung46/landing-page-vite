export const FooterCecond = () => {
  return (
    <>
      <footer class="bg-black font-sans text-[white] bg-[#000]">
        <div class="container px-6 py-12 mx-auto">
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="flex justify-between">
              {/* <p class="font-semibold text-gray-800 dark:text-white">
                
              </p> */}

              <div class="flex flex-col items-start mt-5 space-y-2">
                <p class=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  Giới thiệu
                </p>
                <p class=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  Điều khoản dịch vụ
                </p>
                <p class=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  Chính sách thanh toán
                </p>
              </div>

              {/* <p class="font-semibold text-gray-800 dark:text-white">
                Industries
              </p> */}

              <div class="flex flex-col items-start mt-5 space-y-2">
                <p class=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  Chính sách đổi trả
                </p>
                <p class=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  Chính sách bảo mật
                </p>
                <p class=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  Chính sách giao hàng
                </p>
              </div>
            </div>
            <div class="sm:col-span-1"></div>
            <div class=" gap-4 hover:cursor-pointer h-[84px] flex justify-center">
              <img
                src="https://w.ladicdn.com/s500x400/5e476fd054f5fa0a4cfbc867/kisspng-mastercard-money-foothills-florist-business-visa-visa-mastercard-5b4d917e5dd4a12548981115318101743843-20201017081329.png"
                width="172px"
                height="68px"
                alt=""
              />
            </div>
            <div class="font-sans p-8  md:text-center md:text-lg md:p-4 text-center">
              <p> Copyright © OTD Co., Ltd</p>
              <p>MTA Group - All Rights Reserved</p>
            </div>
            {/* <p class="font-sans p-8 text-start md:text-center md:text-lg md:p-4">
              
            </p> */}
          </div>
        </div>
      </footer>
    </>
  );
};
