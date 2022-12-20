import React from 'react';
import styles from './sideNav.module.css';
import { recentViewProduct } from '../recoil/RecentView';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Slider from "react-slick";
import styled from 'styled-components';

export default function SideNav() {

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        // prevArrow: <PrevButton/>,
        // nextArrow: <NextButton/>
        };

    const RecentProduct = useRecoilState(recentViewProduct);
    const product = RecentProduct[0].filter((arr, index, callback) => index === callback.findIndex(p => p.id === arr.id));  // 중복 값 제거

    const navigate = useNavigate();

    return (
        <>
        <div className={styles.sideNavWrapper}>
            <nav className={styles.sideNav}>
                <a href="https://www.kurly.com/shop/event/kurlyEvent.php?htmid=event/delivery_search/delivery_search">
                    <img className={styles.sideNavMainImg} src="https://res.kurly.com/_next/static/images/deliveryInfo_20221122-9988ad6f6927b33d079e3f89e9d8826f.png" alt=""/>
                </a>
                <div className={styles.sideNavUl}>
                        <a href="/shop/main/html.php?htmid=event/kurly.htm&amp;name=lovers">
                            <div>등급별 혜택</div>
                        </a>
                        <a href="/shop/board/list.php?id=recipe">
                            <div>레시피</div>
                        </a>
                </div>
                <div className={styles.recentView}>
                    <strong>최근 본 상품</strong>
                    <div className={styles.recentViewLists}>
                        <ul>
                            <StyledSlider {...settings}>
                                    {product.map((p)=>(
                                        <li>
                                            <a onClick={() => navigate(`/product/${p.id}`, {state: p})}>
                                                <img src={p.url} alt={p.id}/>
                                            </a>
                                        </li>
                                    ))}
                            </StyledSlider>
                        </ul>
                    </div>
                    <strong></strong>
                </div>
            </nav>
        </div>
        </>
    )
}

const StyledSlider = styled(Slider)`
    max-height: 209px;
    overflow: hidden;
    width: 60px;
    li{
        padding: 1px 0px 2px;
    }
    li > a{
        display: block;
        height: 80px;
    }
    li > a > img{
        min-width: 100%;
        height: 80px;
        object-fit: contain;
        background-color: rgb(245, 245, 245);
    }
    .slick-prev::before,
    .slick-next::before {
    opacity: 0;
    display: none;
    }
    .slick-prev{
        top: 0;
        left: 0;
        width: 100%;
        height: 20px;
        z-index: 100;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAkCAYAAACTz/ouAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAJAAAAACG5CAqAAAA+0lEQVRIDe2T3Q2CMBRGqTCAiQOQ8GqiD26gLuASOhO7qBv4oAOQMIAJCxC4H3JJrZRe45u5TaD89J7TfmmjSJsmoAloAprA7wkYKaIoihWNzfvxpyzLHpJakYDga4JdmqZZAGqMeVK3I8kd71MtKHDhDJNKJgUunKAVBLSSOXqJxCsYg8dxvAe4ruuzVDIq8MHTNL1BUJblRir5EITgEKBJJW8CKfylkEkGAcGxz6/WVqyQOcfCULf3rGTL52RmFeTfwlGLCWAi1g7DWeEDGdmCzoWBkpl3g/ubK7H/DQICH+g6JkmyDMViA/gZNagFAyz+rr0moAn8QwItYEKeRjHvH60AAAAASUVORK5CYII=) 50% 50% / 12px 18px no-repeat;
    }
    .slick-next{
        top: 100%;
        right: 0;
        width: 100%;
        height: 20px;
        z-index: 100;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAkCAYAAACTz/ouAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAJAAAAACG5CAqAAABMElEQVRIDe2SPWrDQBCF9XcAQxqTS4QQ0AWcLrj0GYSEjiP040u4CAEX8RFU2JAbhJAUgdRCP5m37AjLUawxpAnsFhpp9s332LeyLLNMAiaB/5+AzUeIomjetu3S87ynJEneuH9JjeP4uq7rB8dxHtM0fcesw4CmaTZksK6q6iUMwzvuSytmMAsGWDzXG3CD6owEz5eYQIsZzB5x1GtvQMcKbNv+1AKxySkcDLDYqL8DNIIguKGy67ruSgu+XNe9z7Ks1N+DMgYnwaIoij0LBwZoSk0kcPB+GEhMpPBfDc6ZYO/4QvW9DWKBhtfoCXhzLC69p/6WKTi0Zw0gGDFB25LAlU6pJx6nJlI4sO4EW22XZfnh+/6WPm4J/kr/+SrP84Nk1mhMAiYBk4BJ4C8S+AZhpakd4+ESBgAAAABJRU5ErkJggg==) 50% 50% / 12px 18px no-repeat;
    }
`;

// const PrevButton = styled.button`
//     border: none;
//     width: 100%;
//     height: 9px;
//     z-index: 10;
//     background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAkCAYAAACTz/ouAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAJAAAAACG5CAqAAAA+0lEQVRIDe2T3Q2CMBRGqTCAiQOQ8GqiD26gLuASOhO7qBv4oAOQMIAJCxC4H3JJrZRe45u5TaD89J7TfmmjSJsmoAloAprA7wkYKaIoihWNzfvxpyzLHpJakYDga4JdmqZZAGqMeVK3I8kd71MtKHDhDJNKJgUunKAVBLSSOXqJxCsYg8dxvAe4ruuzVDIq8MHTNL1BUJblRir5EITgEKBJJW8CKfylkEkGAcGxz6/WVqyQOcfCULf3rGTL52RmFeTfwlGLCWAi1g7DWeEDGdmCzoWBkpl3g/ubK7H/DQICH+g6JkmyDMViA/gZNagFAyz+rr0moAn8QwItYEKeRjHvH60AAAAASUVORK5CYII=) 50% 50% / 12px 18px no-repeat;
// `;
// const NextButton = styled.button`
//     border: none;
//     width: 100%;
//     height: 9px;
//     z-index: 10;
//     background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAkCAYAAACTz/ouAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAJAAAAACG5CAqAAABMElEQVRIDe2SPWrDQBCF9XcAQxqTS4QQ0AWcLrj0GYSEjiP040u4CAEX8RFU2JAbhJAUgdRCP5m37AjLUawxpAnsFhpp9s332LeyLLNMAiaB/5+AzUeIomjetu3S87ynJEneuH9JjeP4uq7rB8dxHtM0fcesw4CmaTZksK6q6iUMwzvuSytmMAsGWDzXG3CD6owEz5eYQIsZzB5x1GtvQMcKbNv+1AKxySkcDLDYqL8DNIIguKGy67ruSgu+XNe9z7Ks1N+DMgYnwaIoij0LBwZoSk0kcPB+GEhMpPBfDc6ZYO/4QvW9DWKBhtfoCXhzLC69p/6WKTi0Zw0gGDFB25LAlU6pJx6nJlI4sO4EW22XZfnh+/6WPm4J/kr/+SrP84Nk1mhMAiYBk4BJ4C8S+AZhpakd4+ESBgAAAABJRU5ErkJggg==) 50% 50% / 12px 18px no-repeat;
// `;