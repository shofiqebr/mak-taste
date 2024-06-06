// import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Category = () => {
  const data = [
    {
      id: 1,
      image: "https://i.ibb.co/qMfSs5y/Dairy-Foods-70x70.jpg",
      name: "DAIRY",
    },
    {
      id: 2,
      image: "https://i.ibb.co/qMfSs5y/Dairy-Foods-70x70.jpg",
      name: "FAST FOOD",
    },
    {
      id: 3,
      image: "https://i.ibb.co/qMfSs5y/Dairy-Foods-70x70.jpg",
      name: "LUNCH ",
    },
    {
      id: 4,
      image: "https://i.ibb.co/qMfSs5y/Dairy-Foods-70x70.jpg",
      name: "CHINESE",
    },
    {
      id: 5,
      image: "https://i.ibb.co/qMfSs5y/Dairy-Foods-70x70.jpg",
      name: "MUSTARD",
    },
    {
      id: 6,
      image: "https://i.ibb.co/qMfSs5y/Dairy-Foods-70x70.jpg",
      name: "BREAD",
    },
    {
      id: 7,
      image: "https://i.ibb.co/qMfSs5y/Dairy-Foods-70x70.jpg",
      name: "CHANACHUR",
    },
    {
      id: 8,
      image: "https://i.ibb.co/qMfSs5y/Dairy-Foods-70x70.jpg",
      name: "CAKE",
    },
    {
      id: 9,
      image: "https://i.ibb.co/qMfSs5y/Dairy-Foods-70x70.jpg",
      name: "BISCUIT",
    },
    {
      id: 10,
      image: "https://i.ibb.co/qMfSs5y/Dairy-Foods-70x70.jpg",
      name: "TOAST",
    },
    {
      id: 11,
      image: "https://i.ibb.co/qMfSs5y/Dairy-Foods-70x70.jpg",
      name: "JUICE",
    },
  ];

  return (
    <div className="mt-12 max-w-screen-2xl mx-auto px-4 lg:px-8">





      <section className=" flex justify-between items-center">

      <span className="md:block hidden"></span >
      <span className="text-center font-bold text-2xl">OUR CATEGORIES</span>

      <Link to='/allCategory'>
      <span className=" md:text-xl font-semibold flex justify-center items-center">All <FaChevronRight/> </span>
      </Link>
      </section>




      <div className="flex gap-6 items-center justify-between overflow-x-auto mt-8 ">
        {data.map((item) => (
          <Link to='/category' key={item.id}>
          <div className="flex flex-col items-center " >
            <img className="bg-white min-w-20" src={item.image} alt="" />
            <p className="font-bold text-sm">{item.name}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
