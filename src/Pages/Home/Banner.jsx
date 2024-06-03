/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Glide from "@glidejs/glide";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Banner = () => {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className=" mt-4">
      <div className="">
        <div className="">
          {/*<!-- Component: Slider with indicators & controls inside --> */}
          <div className="relative w-full glide-03">
            {/*    <!-- Slides --> */}
            <div className="overflow-hidden" data-glide-el="track">
              <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 ">
                <li>
                  <img
                    src="https://i.ibb.co/JxBn4JS/maktasteshop1.jpg"
                    className="w-full  max-w-full max-h-full m-auto"
                  />
                </li>
                <li>
                  <img
                    src="https://icms-image.slatic.net/images/ims-web/db63fb5e-a258-49e0-b539-c14144294f46.jpg"
                    className="w-full max-w-full max-h-full m-auto"
                  />
                </li>
                <li>
                  <img
                    src="https://icms-image.slatic.net/images/ims-web/d39739d6-c729-47ff-9de6-d5fa103e6762.png_1200x1200.jpg"
                    className="w-full max-w-full max-h-full m-auto"
                  />
                </li>
                <li>
                  <img
                    src="https://icms-image.slatic.net/images/ims-web/0b82b773-9720-4591-b324-1108648bdd7e.jpg"
                    className="w-full max-w-full  max-h-full m-auto"
                  />
                </li>
                <li>
                  <img
                    src="https://icms-image.slatic.net/images/ims-web/e8cb561c-ebb9-49b8-8792-462b0fdaf13e.jpg"
                    className="w-full max-w-full  max-h-full m-auto"
                  />
                </li>
              </ul>
            </div>
            {/*    <!-- Controls --> */}
            <div
              className="absolute -left-0 flex items-center justify-between w-full h-0 top-1/2 "
              data-glide-el="controls"
            >
              <button
                className="border h-16 bg-[#999999] bg-opacity-45"
                aria-label="prev slide"
                data-glide-dir="<"
              >
                <IoIosArrowBack className="text-white text-2xl" />
              </button>
              <button
                className="border h-16 bg-[#999999] bg-opacity-45"
                data-glide-dir=">"
                aria-label="next slide"
              >
                <MdOutlineArrowForwardIos className="text-white text-2xl" />
              </button>
            </div>
            {/*    <!-- Indicators --> */}
            <div
              className="absolute bottom-0 flex items-center justify-center w-full gap-2"
              data-glide-el="controls[nav]"
            >
              <button
                className="p-4 group font-bold "
                data-glide-dir="=0"
                aria-label="goto slide 1"
              >
                01--
              </button>
              <button
                className="p-4 group font-bold"
                data-glide-dir="=1"
                aria-label="goto slide 2"
              >
                02--
              </button>
              <button
                className="p-4 group font-bold"
                data-glide-dir="=2"
                aria-label="goto slide 3"
              >
                03--
              </button>
              <button
                className="p-4 group font-bold"
                data-glide-dir="=3"
                aria-label="goto slide 4"
              >
                04--
              </button>
            </div>
          </div>
          {/*<!-- End Slider with indicators & controls inside --> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
