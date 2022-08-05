import Carousel from "react-bootstrap/Carousel";
import "./promotion-slider.css"


function PromotionSlider() {

    return (
      <Carousel interval={3000}  className="promotion-container">
        <Carousel.Item>
          <img
            className="d-block w-100 promotion-image"
            src="https://wallpaperaccess.com/full/3143584.jpg"
  
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 promotion-image"
            src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-thickened-big-burger-promotion-simple-banner-image_196612.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 promotion-image"
            src="https://cdn.winsightmedia.com/platform/files/public/2022-01/background/Pizza%20Hut%20Spicy%20Lover%27s%20.jpg?VersionId=1VYrobAdXdU9vvQpLkIjohLFByhXYbTj"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );

 
}

export default PromotionSlider;