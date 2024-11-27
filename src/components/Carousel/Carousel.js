import Slider from "react-slick";
import "./carousel.css";

function Carousel({ children }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:1,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
      };
      
  return (
    <div>
        <Slider {...settings}>
            { children }
        </Slider>
    </div>
  )
}

export default Carousel;
