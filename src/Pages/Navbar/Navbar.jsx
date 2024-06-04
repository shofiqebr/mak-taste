import { useState } from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineMenu, MdOutlineShoppingBag } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = (
    <>
      <li>HOME</li>
      <li>BAKERY PRODUCTS</li> <li>PARTY CAKE</li>
      <li>JHAL KHABAR</li> <li>DAIRY</li> <li>CHINESE</li>
      <li>MUSTARD OIL</li> <li>LUNCH & DINNER</li> <li>JUICE</li>
      <li>QUICK ORDER</li> <li>MENU</li>
    </>
  );

  return (
    <nav className="flex z-40 fixed w-full bg-white top-0 items-center justify-between  mx-auto px-4 p-2">
      <div onClick={() => setOpen(!open)} className="lg:hidden">
        <div className="flex items-center cursor-pointer">
          <MdOutlineMenu className="text-3xl" />
          MENU
        </div>
      </div>
      <div
        className={`h-[100vh] fixed  bg-white z-50  ${
          open
            ? "left-0 top-0 h-screen w-56 transition duration-700"
            : "-left-80"
        }`}
      >
        <div
          className="absolute right-0 top-0 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <h1 className=" bg-slate-300 p-1 rounded-full">
            <IoMdClose className="text-2xl" />
          </h1>
        </div>
        <ul className="p-2 flex flex-col gap-3 mt-5">
          <div className=" relative ">
            <div className=" py-3 ">
              <input
                className="w-full border-b-2 outline-none font-semibold rounded mx-auto py-1 px-1"
                type="text"
                name=""
                id=""
                placeholder="Search for products"
              />
            </div>
            <div className="absolute top-5 right-5">
              <CiSearch className="text-2xl " />
            </div>
          </div>
          {links}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/">
          <img
            className="w-40 p-3"
            src="https://i.ibb.co/XbWfrZf/Logo.jpg"
            alt=""
          />
        </Link>
        <div className="hidden lg:block">
          <ul className="flex gap-4 relative group cursor-pointer flex-wrap text-[12px] font-semibold">
            {links}
          </ul>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex items-center gap-2">
          <CiUser className="text-2xl " /> |
          <LuShoppingCart className="text-2xl" /> |
          <div className="flex font-bold">
            0 <TbCurrencyTaka className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="relative">
          <MdOutlineShoppingBag className="text-2xl" />
          <div className="absolute bg-[#823400] rounded-full p-1 h-5 flex items-center justify-center -top-2 left-3">
            <p className="text-white">0</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
