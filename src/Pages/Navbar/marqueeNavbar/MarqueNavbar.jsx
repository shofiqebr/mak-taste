
import { IoSearch } from "react-icons/io5";


const MarqueNavar = () => {
    return (
        <div className="bg-[#8d3041] mt-16 text-white lg:flex lg:justify-between hidden ">
       
            <div className="grow relative">
                <marquee>
            Welcome to our MAK family. MAK Taste Shop is a concern of M.M Khan Foods. Please explore our web site & place order to taste the best. Any Quarry # 01962-412149
            </marquee>
            </div>
            <div className="flex justify-center items-center">



                {/* search area start */}


                <div className=" absolute right-[450px] rounded-full px-1   flex justify-center items-center">

                    <input type="text"  placeholder="Search for product " className=" px-2 rounded-l-full border-2 xl:h-[35px]"/>
                    <IoSearch className="pl-2 text-3xl bg-[#8d3041] rounded-r-full border xl:h-[35px]" />
        
                 </div>








                {/* search area end */}

         
            <div className="flex gap-4 px-5">
                <p className="flex justify-center items-center w-28">|
                <button className="pl-2">Track Order</button>
                </p>
                <p className="flex justify-center items-center w-28">|
                <button className="pl-2">Need Help?</button>
                </p>
            </div>

            </div>
         


        </div>
    );
};

export default MarqueNavar;