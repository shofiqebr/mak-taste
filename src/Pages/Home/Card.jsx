import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Card = () => {
  const data = [
    {
      id: 1,
      image: "https://i.ibb.co/7SSjhzP/Irranibug-430x304.jpg",
      name: "Whole Milk",
      SKU: "MILK1234",
      DAIRY: "Yes",
      price: 3.49,
    },
    {
      id: 2,
      image: "https://i.ibb.co/7SSjhzP/Irranibug-430x304.jpg",
      name: "Cheddar Cheese",
      SKU: "CHEESE5678",
      DAIRY: "Yes",
      price: 4.99,
    },
    {
      id: 3,
      image: "https://i.ibb.co/7SSjhzP/Irranibug-430x304.jpg",
      name: "Greek Yogurt",
      SKU: "YOGURT9101",
      DAIRY: "Yes",
      price: 1.99,
    },
    {
      id: 4,
      image: "https://i.ibb.co/7SSjhzP/Irranibug-430x304.jpg",
      name: "Butter",
      SKU: "BUTTER1121",
      DAIRY: "Yes",
      price: 2.99,
    },
    {
      id: 5,
      image: "https://i.ibb.co/7SSjhzP/Irranibug-430x304.jpg",
      name: "Almond Milk",
      SKU: "ALMOND1324",
      DAIRY: "No",
      price: 3.79,
    },
    {
      id: 6,
      image: "https://i.ibb.co/7SSjhzP/Irranibug-430x304.jpg",
      name: "Oat Milk",
      SKU: "OATMILK5678",
      DAIRY: "No",
      price: 3.99,
    },
    {
      id: 7,
      image: "https://i.ibb.co/7SSjhzP/Irranibug-430x304.jpg",
      name: "Swiss Cheese",
      SKU: "CHEESE9021",
      DAIRY: "Yes",
      price: 5.49,
    },
    {
      id: 8,
      image: "https://i.ibb.co/7SSjhzP/Irranibug-430x304.jpg",
      name: "Cottage Cheese",
      SKU: "CHEESE3456",
      DAIRY: "Yes",
      price: 2.49,
    },
    {
      id: 9,
      image: "https://i.ibb.co/7SSjhzP/Irranibug-430x304.jpg",
      name: "Soy Milk",
      SKU: "SOYMILK7890",
      DAIRY: "No",
      price: 3.29,
    },
    {
      id: 10,
      image: "https://i.ibb.co/7SSjhzP/Irranibug-430x304.jpg",
      name: "Cream Cheese",
      SKU: "CHEESE1112",
      DAIRY: "Yes",
      price: 2.79,
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-4 mt-16">
      <div className="grid lg:grid-cols-4 gap-5 justify-items-center grid-cols-1 md:grid-cols-3">
        {data.map((item) => (

          <Link to='/product' key={item.id}>
          <div >
            <img src={item.image} alt="" />
            <div className="text-center space-y-3">
              <h3 className="font-bold ">{item.name}</h3>
              <p className="text-gray-400">DAIRY</p>
              <p className="font-bold">
                SKU:{" "}
                <span className="font-normal text-gray-400">{item.SKU}</span>
              </p>
              <div className="flex items-center justify-center">
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>
              <h1 className="text-2xl font-semibold text-[#8d3041] ">
                {item.price} ৳{" "}
              </h1>
              
              <button className="bg-[#ff0000] px-6 py-2 rounded-full text-white ">
                ADD TOCART
              </button>
              
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
