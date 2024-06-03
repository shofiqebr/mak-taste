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
      name: "LUNCH & DINNER",
    },
    {
      id: 4,
      image: "https://i.ibb.co/qMfSs5y/Dairy-Foods-70x70.jpg",
      name: "CHINESE",
    },
    {
      id: 5,
      image: "https://i.ibb.co/qMfSs5y/Dairy-Foods-70x70.jpg",
      name: "MUSTARD OIL",
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
      <h1 className="text-center font-bold text-2xl">OUR CATEGORIES</h1>
      <div className="flex gap-6 items-center justify-between  overflow-x-auto mt-8 ">
        {data.map((item) => (
          <div className="flex flex-col items-center " key={item.id}>
            <img className="bg-white" src={item.image} alt="" />
            <p className="font-bold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
