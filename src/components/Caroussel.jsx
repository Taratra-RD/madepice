import { Carousel } from "react-bootstrap";
import "./css/Caroussel.css";
import { img1 } from "./css/images/Rectangle 34.png";
import { img2 } from "./css/images/Rectangle 37.png";
import { img3 } from "./css/images/Rectangle 39.png";

const Caroussel = () => {
  return (
    <>
      <div className="carousel-home">
      <div className="container mt-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Slide+1"
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Slide+2"
            alt="Slide 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Slide+3"
            alt="Slide 3"
          />
        </Carousel.Item>
      </Carousel>
    </div>

        
      </div>
    </> 
  );
};
export default Caroussel;
