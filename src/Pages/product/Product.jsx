// import ReactImageMagnify from "react-image-magnify";
// import { Helmet } from "react-helmet";
// import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { BsCashCoin } from "react-icons/bs";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { FaBangladeshiTakaSign, FaStar, FaStarHalf } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { TiStarFullOutline } from "react-icons/ti";
import ReactImageMagnify from "react-image-magnify";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const Product = () => {

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);


  const images = [
    {
      id: 1,
      image:
        "https://static-01.daraz.com.bd/p/190e7f0df8e9e2edf300eff263b63d49.jpg_750x750.jpg_.webp",
    },
    {
      id: 2,
      image:
        "https://static-01.daraz.com.bd/p/190e7f0df8e9e2edf300eff263b63d49.jpg_750x750.jpg_.webp",
    },
    {
      id: 3,
      image:
        "https://static-01.daraz.com.bd/p/190e7f0df8e9e2edf300eff263b63d49.jpg_750x750.jpg_.webp",
    },
    {
      id: 4,
      image:
        "https://static-01.daraz.com.bd/p/190e7f0df8e9e2edf300eff263b63d49.jpg_750x750.jpg_.webp",
    },
    {
      id: 5,
      image:
        "https://static-01.daraz.com.bd/p/190e7f0df8e9e2edf300eff263b63d49.jpg_750x750.jpg_.webp",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-5  p-2">
              <Helmet>
                <meta charSet="utf-8" />
                <title>Mak Taste shop | Product</title>
                <link rel="canonical" href="http://static.ajkerdeal.com/images/dealdetails/ad-logo.svg" />
            </Helmet>



      <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5 place-items-center place-content-center	lg:mt-5">
        <Carousel className="z-10">
          {images.map((item) => (
            <div key={item.id}>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Images",
                    isFluidWidth: true,
                    src: item.image,
                    height: 562,
                    width: 140,
                  },
                  largeImage: {
                    src: item.image,
                    width: 1200,
                    height: 1200,
                  },
                  isHintEnabled: false,
                  // enlargedImagePosition: "over",
                  // lensStyle: { backgroundColor: "white" },
                }}
              />
            </div>
          ))}
        </Carousel>
        <div className="p-4">
          <h1 className="text-xl font-semibold">
            Real Madrid Home Jersey - Premium - 23/24 Season - Official Real
            Madrid Home Jersey For Dedicated Fans
          </h1>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center ">
              <TiStarFullOutline className="text-[14px] text-[#faca51]" />
              <TiStarFullOutline className="text-[14px] text-[#faca51]" />
              <TiStarFullOutline className="text-[14px] text-[#faca51]" />
              <TiStarFullOutline className="text-[14px] text-[#faca51]" />
              <div className="ml-4 text-[#1a9cb7] text-[14px]">
                <p>
                  155 Ratings67 <span>|</span> Answered Questions
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CiShare2 className="text-2xl" />
              <CiHeart className="text-2xl" />
            </div>
          </div>
          <p className="text-[#2918ee] text-[12px] mt-3">
            <span className="font-bold text-[12px] text-[#9e9e9e] ">
              Brand:
            </span>
            <span className="ml-2">No BrandMore Fan Shop from No Brand</span>
          </p>
          <hr className="mt-4" />
          <div className="mt-2 ">
            <div className="flex items-center gap-2 text-[#f57224]">
              <FaBangladeshiTakaSign className="text-3xl " />{" "}
              <span className="text-4xl font-semibold">320</span>
            </div>
            <div className=" flex items-center gap-2 text-[#9e9e9e]">
              <FaBangladeshiTakaSign className="text-1xl line-through" />{" "}
              <span className="line-through">1,500</span>
              <p className="text-black">-79%</p>
            </div>
          </div>
          <hr className="mt-4" />
          <div className="flex gap-2 mt-3">
            <h1 className="text-[#757575]">Color Family</h1>
            <div className="">
              <h1 className="">Not Specified</h1>
              <button className="py-1 px-3 text-[14px] border mt-1 border-[#f36f21]">
                Not Specified
              </button>
            </div>
          </div>
          <div className="flex gap-20 mt-5">
            <h1 className="text-[#757575]">Size</h1>
            <div className="">
              <h1 className="">Int </h1>
              <div className="flex gap-2 items-center">
                <button className="py-1 text-[#f36f21] px-1 md:px-4  md:text-[14px] text-xs border mt-1 border-[#f36f21]">
                  M
                </button>
                <button className="py-1 px-1 md:px-4 text-xs md:text-[14px] border mt-1 ">
                  XXL
                </button>
                <button className="py-1 px-1 md:px-4 text-xs md:text-[14px] border mt-1 ">
                  L
                </button>
                <button className="py-1 px-1  md:px-4 text-xs md:text-[14px] border mt-1">
                  XL
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-12 mt-8">
            <h1 className="text-[#757575]">Quantity</h1>
            <div className="flex items-center cursor-pointer">
              <p className="border px-3 font-bold bg-[#fafafa]">-</p>
              <input className="w-6 px-2" type="text" defaultValue={1} />
              <p className="border px-3 font-bold bg-[#fafafa]">+</p>
            </div>
          </div>
          <div className="mt-4 flex gap-3 items-center ">
            <div className="flex-1">
              <Link to='/landing'>
              <button className="bg-[#2abbe8] hover:bg-[#0881a6] w-full py-2 font-semibold text-white rounded">
                Quick Order
              </button>
              </Link>
            </div>
            <div className="flex-1">
              <div className="bg-[#f57224] hover:bg-[#7e3003] w-full py-2 lg:px-10 md:px-5 px-3 font-semibold text-white rounded">
                Add To Cart
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fafafa] rounded p-4">
          <div className="flex justify-end cursor-pointer">
            <IoIosInformationCircleOutline className="text-end" />
          </div>
          <div className="flex justify-between items-center mt-5">
            <div className="flex gap-2 items-center">
              <IoLocationOutline className="text-2xl" />
              <p className="text-[14px]">
                Dhaka, Dhaka North, Banani <br /> Road No. 12 - 19{" "}
              </p>
            </div>
            <p className="text-[#1a9cb7]">CHANGE</p>
          </div>
          <hr className="mt-1" />
          <div className="flex justify-between items-center mt-5">
            <div className="flex gap-2 items-center">
              <MdOutlineDeliveryDining className="text-2xl" />
              <p className="text-[14px]">
                <span className="font-bold">Standard Delivery</span> <br />{" "}
                <span>4 Jun - 11 Jun 6 - 13 day(s)</span>
              </p>
            </div>
            <p className="text-[#1a9cb7] font-bold">৳ 55</p>
          </div>
          <div className="flex justify-between items-center mt-5">
            <div className="flex gap-2 items-center">
              <BsCashCoin className="text-xl" />
              <p className="text-[14px]">Cash on Delivery Available</p>
            </div>
          </div>
          <hr className="mt-2" />
          <div className="flex justify-end cursor-pointer mt-6">
            <IoIosInformationCircleOutline className="text-end" />
          </div>
          <div className="flex justify-between items-center mt-5">
            <div className="flex gap-2 items-center">
              <MdOutlineDeliveryDining className="text-2xl" />
              <p className="text-[14px]">
                <span>7 Days Returns</span> <br />{" "}
                <span>Change of mind is not applicable</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-5">
            <div className="flex gap-2 items-center">
              <MdOutlineDeliveryDining className="text-2xl" />
              <p className="text-[14px]">Warranty not available</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-5">
            <div className="flex gap-2 items-center">
              <p className="text-[14px]">
                <span>Sold by</span> <br /> <span>S M Accessories</span>
              </p>
            </div>
            <p className="text-[#1a9cb7] font-bold">CHAT</p>
          </div>
          <div className="flex mt-4 justify-between">
            <div className="p-4 border">
              <p className="text-[14px]">Warranty not available</p>
              <h1 className="text-xl font-semibold mt-4">70%</h1>
            </div>
            <div className="p-4 border">
              <p className="text-[14px]">Ship on Time</p>
              <h1 className="text-xl font-semibold mt-4">96%</h1>
            </div>
            <div className="p-4 border">
              <p className="text-[14px]">Chat Response Rate</p>
              <h1 className="text-[14px] text-[#ccc] mt-4">Not enough data</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Ratings & Reviews */}
      <h1 className="mt-3 max-w-screen-xl mx-auto  font-bold">
        Ratings & Reviews
      </h1>
      <div className="max-w-screen-xl mx-auto mt-5 ">
        <div className="flex flex-col md:flex-row  gap-4 ">
          <div className="md:w-[80%] bg-white p-4">
            <div className="flex flex-col md:flex-row lg:gap-12 md:gap-4">
              <div>
                <div>
                  <div className="flex items-center gap-7">
                    <h1 className="text-3xl font-semibold">4.1 </h1>
                    <div className="bg-[#ffc700] w-28 p-1 flex gap-3 items-center">
                      <img
                        className="w-3 h-3"
                        src="https://i.ibb.co/vjXrq43/O1-CN01-Av-JLRr1gxlv-S02-Jss-6000000004209-2-tps-24-24.png"
                        alt=""
                      />
                      <p className="text-white">Very Good</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-2 text-[12px]">
                    <div className="flex text-[#faca51]">
                      <TiStarFullOutline className="text-[20px]" />
                      <TiStarFullOutline className="text-[20px]" />
                      <TiStarFullOutline className="text-[20px]" />
                      <TiStarFullOutline className="text-[20px]" />
                      <FaStarHalf className="text-[20px]" />
                    </div>
                    <p className="font-bold">155 ratings</p>
                    {/* ({rating}) */}
                  </div>
                </div>
              </div>
              <div className="h-24 w-[1px] bg-gray-400 hidden md:block"></div>
              <div className="flex flex-col md:flex-row  gap-3">
                <div className="flex flex-col gap-3 -mt-1">
                  <div className="flex text-[#faca51]">
                    <TiStarFullOutline className="text-[20px]" />
                    <TiStarFullOutline className="text-[20px]" />
                    <TiStarFullOutline className="text-[20px]" />
                    <TiStarFullOutline className="text-[20px]" />
                    <TiStarFullOutline className="text-[20px]" />
                  </div>
                  <div className="flex text-[#faca51]">
                    <TiStarFullOutline className="text-[20px]" />
                    <TiStarFullOutline className="text-[20px]" />
                    <TiStarFullOutline className="text-[20px]" />
                    <TiStarFullOutline className="text-[20px]" />
                    <TiStarFullOutline className="text-[20px] text-[#eff0f5]" />
                  </div>
                  <div className="flex text-[#faca51]">
                    <TiStarFullOutline className="text-[20px]" />
                    <TiStarFullOutline className="text-[20px]" />
                    <TiStarFullOutline className="text-[20px]" />
                    <TiStarFullOutline className="text-[20px] text-[#eff0f5]" />
                    <TiStarFullOutline className="text-[20px] text-[#eff0f5]" />
                  </div>
                  <div className="flex text-[#faca51]">
                    <TiStarFullOutline className="text-[20px]" />
                    <TiStarFullOutline className="text-[20px]" />
                    <TiStarFullOutline className="text-[20px] text-[#eff0f5]" />
                    <TiStarFullOutline className="text-[20px] text-[#eff0f5]" />
                    <TiStarFullOutline className="text-[20px] text-[#eff0f5]" />
                  </div>
                  <div className="flex text-[#eff0f5]">
                    <TiStarFullOutline className="text-[20px] text-[#faca51]" />
                    <TiStarFullOutline className="text-[20px]" />
                    <TiStarFullOutline className="text-[20px]" />
                    <TiStarFullOutline className="text-[20px]" />
                    <TiStarFullOutline className="text-[20px] " />
                  </div>
                </div>
                <div className="flex flex-col p-3 gap-6">
                  <progress
                    className="progress progress-warning md:w-52"
                    value={0}
                    max="100"
                  ></progress>
                  <progress
                    className="progress progress-warning md:w-52"
                    value="10"
                    max="100"
                  ></progress>
                  <progress
                    className="progress progress-warning md:w-52"
                    value="40"
                    max="100"
                  ></progress>
                  <progress
                    className="progress progress-warning md:w-52"
                    value="70"
                    max="100"
                  ></progress>
                  <progress
                    className="progress progress-warning md:w-52"
                    value="100"
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
            <hr className="mt-12" />
            {/* Comments Parts  */}
            <div className="mt-3">
              <p className="text-sm">What people like about it</p>
              <hr className="mt-3" />
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <FaStar className="text-[#ffc700] text-[12px] "></FaStar>
                    <FaStar className="text-[#ffc700] text-[12px]"></FaStar>
                    <FaStar className="text-[#ffc700] text-[12px]"></FaStar>
                    <FaStar className="text-[#ffc700] text-[12px]"></FaStar>
                    <FaStarHalf className="text-[#ffc700] text-[12px]"></FaStarHalf>
                  </div>
                  <p className="text-[12px]">FaStarHalf</p>
                </div>
                <div>
                  <p>4 weeks ago</p>
                </div>
              </div>
              <p className="mt-2 text-[12px]">
                যেমন দেখেছি হুবহু সেইম জিনিস পেয়েছি.... কাপড়টা প্রিমিয়াম একটা
                ফিল দেই.... আমার কাছে খুবই ভালো লেগেছে.... ধন্যবাদ সেলার ভাই
                কে....
              </p>
              <div></div>
            </div>
          </div>
          <div className="md:w-[20%] bg-white p-2">
            <h1 className="text-[12px] font-bold">
              People Who Viewed This Item Also Viewed
            </h1>
            <div className="mt-4 hover:border hover:shadow p-2">
              <img
                src="https://static-01.daraz.com.bd/p/190e7f0df8e9e2edf300eff263b63d49.jpg_750x750.jpg_.webp"
                alt=""
              />
              <p>Real Madrid Home Jersey - Premium </p>
              <p className="flex items-center text-[#ff6801] text-[17px]">
                <TbCurrencyTaka />
                <h1>400</h1>
              </p>
              <div className="flex items-center gap-2 text-[12px]">
                <div className="flex text-[#faca51]">
                  <TiStarFullOutline className="text-[12px]" />
                  <TiStarFullOutline className="text-[12px]" />
                  <TiStarFullOutline className="text-[12px]" />
                  <TiStarFullOutline className="text-[12px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
