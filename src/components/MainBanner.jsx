import React, { useState } from 'react';
import '../css/mainBanner.css';
import Slider from "react-slick";

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
        <>
        <div className="mainBanner">
            <div className='bannerDiv'>
                <Slider className='SliderDiv' {...settings}>
                    <div className="slider">
                        <a href="https://www.kurly.com/shop/event/kurlyEvent.php?htmid=event/card_benefit/card_benefit">
                            <img className="mainBannerImg" src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/f69e8e21-2119-429f-8721-72ecf4003120.jpg" />
                        </a>
                    </div>
                    <div className="slider">
                        <a href="https://www.kurly.com/shop/event/kurlyEvent.php?htmid=event/2022/1117/kurlystmas/kurlystma">
                            <img className="mainBannerImg" src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/dbc42cdb-63ed-4655-899b-c4c5fe5fb5a8.jpg" />
                        </a>
                    </div>
                    <div className="slider">
                        <a href="https://www.kurly.com/main/beauty">
                            <img className="mainBannerImg" src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/50eecac0-cf8a-4018-b97b-f6ef97907181.jpg" />
                        </a>
                    </div>
                    <div className="slider">
                        <a href="https://www.kurly.com/categories/796">
                            <img className="mainBannerImg" src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/80838f4b-0b88-4f08-9f76-64710ff9cfa5.jpg" />
                        </a>
                    </div>
                    <div className="slider">
                        <a href="https://www.kurly.com/categories/303">
                            <img className="mainBannerImg" src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/4f52800e-df9a-4919-ba85-8e9742e1aea1.jpg" />
                        </a>
                    </div>

                </Slider>
                
                <div className="bannerCountWrapper">
                    <div className="bannerCount"> {slideCount} / 5</div>
                </div>
            </div>
        </div>

        </>
    );
}


