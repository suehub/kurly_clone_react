import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import datas from "../db/data.json";
import styles from './MainBanner.module.css';

export default function MainBanner() {
  const [slideCount, setSlideCount] = useState(1);
  
  const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      beforeChange: (slide, newSlide) => setSlideCount(newSlide + 1),
  };

    
  return (
    <div>
      <div className={styles.mainBanner}>
        <div className={styles.bannerDiv}>
          <Slider className={styles.SliderDiv} {...settings}>
            {datas.bannerImgs.map((banner) => (
              <div className={styles.slider}>
              <a key={banner.id}>
                <img src={banner.url} alt={banner.id} className={styles.mainBannerImg}/>
              </a>
              </div>
            ))}
          </Slider>
          
          <div className={styles.bannerCountWrapper}>
              <div className={styles.bannerCount}> {slideCount} / 5</div>
          </div>
        </div>
      </div>
     </div>
  );
}

