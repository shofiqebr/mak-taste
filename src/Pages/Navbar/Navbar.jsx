import { CiUser } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { TbCurrencyTaka } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 p-2">
      <div className="flex items-center gap-4">
        <div>
          <img
            className="w-40 p-3"
            src="https://i.ibb.co/XbWfrZf/Logo.jpg"
            alt=""
          />
        </div>
        <div className="hidden lg:block">
          <ul className="flex relative group cursor-pointer flex-wrap gap-2 text-[12px] font-semibold">
            <li>HOME</li> |
            <li>BAKERY PRODUCTS</li> |
            <li>PARTY CAKE</li> |
            <li>JHAL KHABAR</li> |
            <li>DAIRY</li> |
            <li>CHINESE</li> |
            <li>MUSTARD OIL</li> |
            <li>LUNCH & DINNER</li> |
            <li>JUICE</li> |
            <li>QUICK ORDER</li> |
            <li>MENU</li> |
          </ul>
        </div>
      </div>
          <div className="flex items-center gap-2">
              <CiUser className="text-2xl " /> |
              <LuShoppingCart className="text-2xl" /> |
              <div className="flex font-bold">
                  0  <TbCurrencyTaka className="text-2xl" />
             </div>
      </div>
    </div>
  );
};

export default Navbar;
