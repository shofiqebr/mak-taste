import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Card from "./Card";
import Category from "./Category";
import DeliveryTime from "./DeliveryTime";
import Gallery from "./Gallery";
import OpenClose from "./OpenClose";

const Home = () => {
  return (
    <div>

           <Helmet>
                <meta charSet="utf-8" />
                <title>Mak Taste shop | Home</title>
                <link rel="canonical" href="http://static.ajkerdeal.com/images/dealdetails/ad-logo.svg" />
            </Helmet>






      <Banner />
      <Category />
      <Card />
      <OpenClose />
      <DeliveryTime />
      <Gallery />
    </div>
  );
};

export default Home;
