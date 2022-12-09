import React from 'react';
import './sideNav.css';

export default function SideNav() {
  return (
    <>
    <div className='sideNavWrapper'>
        <nav className="sideNav">
            <a href="https://www.kurly.com/shop/event/kurlyEvent.php?htmid=event/delivery_search/delivery_search">
                <img className="sideNavMainImg" src="https://res.kurly.com/_next/static/images/deliveryInfo_20221122-9988ad6f6927b33d079e3f89e9d8826f.png" alt=""/>
            </a>
            <ul className="sideNavUl">
                <li>
                    <a href="/shop/main/html.php?htmid=event/kurly.htm&amp;name=lovers">
                        등급별 혜택
                    </a>
                </li>
                <li>
                    <a href="/shop/board/list.php?id=recipe">
                        레시피
                    </a>
                </li>
            </ul>
            <div className="recentView">
                <button disabled className="recentViewButtonTop"></button>
                <strong>최근 본 상품</strong>
                <div className="recentLists">
                    <ul>
                        <li>
                            <a href="/goods/5115219">
                                <img src="https://img-cf.kurly.com/cdn-cgi/image/width=60,format=auto/shop/data/goods/1650430833824l0.jpg" alt="5115219"/>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/5069882">
                                <img src="https://img-cf.kurly.com/cdn-cgi/image/width=60,format=auto/shop/data/goods/1653036301411l0.jpeg" alt="5069882"/>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/1000078041">
                                <img src="https://product-image.kurly.com/cdn-cgi/image/width=60,format=auto/product/image/bd77f676-4172-4863-828e-2946cbfd017a.jpg" alt="1000078041"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <button className="recentViewButtonBottom"></button>
            </div>
        </nav>
    </div>
    </>
  )
}
