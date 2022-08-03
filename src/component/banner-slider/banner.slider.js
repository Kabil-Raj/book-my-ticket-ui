import Carousel from "react-bootstrap/Carousel";


function BannerSlider() {

  // const bannerImages =
  //   ["https://wallpaperaccess.com/full/3143584.jpg",
  //     "https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-thickened-big-burger-promotion-simple-banner-image_196612.jpg",
  //     "https://thumbs.dreamstime.com/b/design-horizontal-ad-banner-pizzeria-pizzas-ingredients-colored-background-promo-template-italian-food-215909875.jpg"]

    return (
      <Carousel interval={3000} className="bannerContainer">
        <Carousel.Item>
          <img
            className="d-block w-100 bannerImage"
            src="https://wallpaperaccess.com/full/3143584.jpg"
  
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bannerImage"
            src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-thickened-big-burger-promotion-simple-banner-image_196612.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bannerImage"
            src="https://thumbs.dreamstime.com/b/design-horizontal-ad-banner-pizzeria-pizzas-ingredients-colored-background-promo-template-italian-food-215909875.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );

 
}

export default BannerSlider;