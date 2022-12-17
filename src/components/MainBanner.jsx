import React, { useState } from 'react';
import Slider from 'react-slick';
import datas from "../db/data.json";
import styles from './MainBanner.module.css';
import styled from 'styled-components';

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
      prevArrow: (<PrevButton/>),
      nextArrow: (<NextButton/>)
  };

    
  return (
    <div>
      <div className={styles.mainBanner}>
        <div className={styles.bannerDiv}>
          <StyledSlider className={styles.SliderDiv} {...settings}>
            {datas.bannerImgs.map((banner) => (
              <div className={styles.slider}>
              <a key={banner.id}>
                <img src={banner.url} alt={banner.id} className={styles.mainBannerImg}/>
              </a>
              </div>
            ))}
          </StyledSlider>
          
          <div className={styles.bannerCountWrapper}>
              <div className={styles.bannerCount}> {slideCount} / 5</div>
          </div>
        </div>
      </div>
     </div>
  );
}

const StyledSlider = styled(Slider)`
.slick-prev::before,
.slick-next::before {
  opacity: 0;
  display: none;
}
`;

const PrevWrapper = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 50%;
  margin: auto 590px auto 0px;
  z-index: 100;
  width: 52px;
  height: 52px;
`;

const PrevButton = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0;
  margin: auto 590px auto 0px;
  z-index: 100;
  width: 52px;
  height: 52px;
  transition: all 0.5s ease 0s;
  opacity: 1;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIuMiIgZmlsbD0iIzAwMCIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ii8+CiAgICAgICAgPHBhdGggZD0iTTIyLjI4NSAzMy42OTlhMSAxIDAgMCAwIDEuMzE5LjA5OGwuMDk1LS4wODIgOC03LjgxN2ExIDEgMCAwIDAgLjEwOC0xLjMwNmwtLjA4LS4wOTYtNy43MjMtOC4xODJhMSAxIDAgMCAwLTEuNTM1IDEuMjc2bC4wOC4wOTYgNy4wNDkgNy40NjktNy4yOTcgNy4xM2ExIDEgMCAwIDAtLjA5OCAxLjMxOWwuMDgyLjA5NXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K) 50% 50% no-repeat;
  transform: rotate(180deg);
`;

const NextButton = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0;
  margin: auto 0px auto 590px;
  z-index: 100;
  width: 52px;
  height: 52px;
  transition: all 0.5s ease 0s;
  opacity: 1;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIuMiIgZmlsbD0iIzAwMCIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ii8+CiAgICAgICAgPHBhdGggZD0iTTIyLjI4NSAzMy42OTlhMSAxIDAgMCAwIDEuMzE5LjA5OGwuMDk1LS4wODIgOC03LjgxN2ExIDEgMCAwIDAgLjEwOC0xLjMwNmwtLjA4LS4wOTYtNy43MjMtOC4xODJhMSAxIDAgMCAwLTEuNTM1IDEuMjc2bC4wOC4wOTYgNy4wNDkgNy40NjktNy4yOTcgNy4xM2ExIDEgMCAwIDAtLjA5OCAxLjMxOWwuMDgyLjA5NXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K) 50% 50% no-repeat;
  transform: rotate(0deg);
`;