import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './HomeCarousel.css'
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import img8 from '../../assets/8.jpg';
import img9 from '../../assets/9.jpg';
import img10 from '../../assets/10.jpg';
import img11 from '../../assets/11.jpg';
import img12 from '../../assets/12.jpg';
import img13 from '../../assets/13.jpg';
import img14 from '../../assets/14.jpg';


export default function SimpleSlider() {
    const IMG_CSS ='h-[300px] w-full object-fit rounded-lg'
 
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];
    

    var carouselSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,  // Default: Shows 3 slides on large screens
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200, // Large tablets & small desktops
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768, // Tablets
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 480, // Mobile screens
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };
    
  return (
    <div className="w-[90%] md:w-[1000px] md:px-auto h-fit">
        <Slider {...carouselSettings} >
          {images.map((img, index) => (
            <div key={index} className="md:p-2 w-2xl">
              <img src={img} alt={`Image ${index + 1}`} className={IMG_CSS} />
            </div>
            ))
          }  
        </Slider>
    </div>
    
  );
}