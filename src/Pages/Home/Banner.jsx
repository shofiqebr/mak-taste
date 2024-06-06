import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {


  return (
    <div className=" lg:mt-3 mt-14">
     <Carousel showThumbs={false}	>
        <div>
          <img src="https://i.ibb.co/5FBHfgq/Web-Header-Image-21.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/5FBHfgq/Web-Header-Image-21.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/5FBHfgq/Web-Header-Image-21.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
