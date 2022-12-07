import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import '../css/contents.css';


export default function Contents() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
    };

    const settings2 = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: true,
    }

  return (
   <>
   <div>
    {/* side nav */}
    <nav class="sideNav">
        <a href="https://www.kurly.com/shop/event/kurlyEvent.php?htmid=event/delivery_search/delivery_search">
            <img class="sideNavMainImg" src="https://res.kurly.com/_next/static/images/deliveryInfo_20221122-9988ad6f6927b33d079e3f89e9d8826f.png" alt=""/>
        </a>
        <ul class="sideNavUl">
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
        <div class="recentView">
            <button disabled class="recentViewButtonTop"></button>
            <strong>최근 본 상품</strong>
            <div class="recentLists">
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
                     {/* <li>
                        <a href="/goods/5151990">
                            <img src="https://img-cf.kurly.com/cdn-cgi/image/width=60,format=auto/shop/data/goods/1656574470722l0.jpg" alt="5151990"/>
                        </a>
                    </li>
                    <li>
                        <a href="/goods/5103330">
                            <img src="https://img-cf.kurly.com/cdn-cgi/image/width=60,format=auto/shop/data/goods/1640069478503l0.jpg" alt="5103330"/>
                        </a>
                    </li>  */}
                </ul>
            </div>
            <button class="recentViewButtonBottom"></button>
        </div>
    </nav>
   
    {/* recommand product */}
    <div className="recommandProduct">
        <div>
            <div className="recommandTitle">
                <div>
                    <span>이 상품 어때요?</span>
                </div>
            </div>
            <div className="recommandLists">
                <div className="SliderWrapper">
                    <Slider {...settings}>
                        <ListMargin>
                            <div className="swiperList">
                                <div className="swiperListImg">
                                    <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1650430833824l0.jpg" alt="상품 이미지" loading="lazy"/>
                                    <div className="cartButton">
                                        <button type="button">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="productInfo">
                                    <h3 className="productName">[마켓컬리 X 울워스] 오트 브란</h3>
                                    <div className="productPriceWrapper">
                                        <div className="productPrice">
                                            <div></div>
                                            <span>
                                                6,500
                                                <span className="won"> 원</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListMargin>
                        <ListMargin>
                            <div className="swiperList">
                                <div className="swiperListImg">
                                    <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/165303830429l0.jpeg" alt="상품 이미지" loading="lazy"/>
                                    <div className="cartButton">
                                        <button type="button">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"/>
                                            <div></div>
                                        </button>
                                    </div>
                                </div>
                                <div className="productInfo">
                                    <h3 className="productName">미니 파프리카 200g</h3>
                                    <div className="productPriceWrapper">
                                        <div className="productPrice">
                                            <div></div>
                                            <span>
                                                3,710
                                                <span className="won"> 원</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListMargin>
                        <ListMargin>
                            <div className="swiperList">
                                <div className="swiperListImg">
                                    <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1578294213553l0.jpg" alt="상품 이미지" loading="lazy"/>
                                    <div className="cartButton">
                                        <button type="button">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"/>
                                            <div></div>
                                        </button>
                                    </div>
                                </div>
                                <div className="productInfo">
                                    <h3 className="productName">[히스파수르] 골드 엑스트라 버진 피쿠알 2종</h3>
                                    <div className="productPriceWrapper">
                                        <div className="productPrice">
                                            <div></div>
                                            <span>
                                                47,200
                                                <span className="won"> 원</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListMargin>
                        <div className="swiperList">
                            <div className="swiperListImg">
                                <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1644554762774l0.jpg" alt="상품 이미지" loading="lazy"/>
                                <div className="cartButton">
                                    <button type="button">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"/>
                                        <div></div>
                                    </button>
                                </div>
                            </div>
                            <div className="productInfo">
                                <h3 className="productName">[풀무원] 피에몬테식 파스타 머쉬룸크림 (2인분)</h3>
                                <div className="productPriceWrapper">
                                    <div className="productPrice">
                                        <div></div>
                                        <span>
                                            8,980
                                            <span className="won"> 원</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ListMargin>
                            <div className="swiperList">
                                <div className="swiperListImg">
                                    <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1657435516272l0.jpg" alt="상품 이미지" loading="lazy"/>                                    <div className="cartButton">
                                        <button type="button">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="productInfo">
                                    <h3 className="productName">[LG전자] 코드제로 A9S 오브제 컬렉션 청소기 AU9882GD</h3>
                                    <div className="productPriceWrapper">
                                        <div className="productPrice">
                                            <div></div>
                                            <span>
                                                1,162,900
                                                <span className="won"> 원</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListMargin>
                        <ListMargin>
                            <div className="swiperList">
                                <div className="swiperListImg">
                                    <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/163367932310l0.jpg" alt="상품 이미지" loading="lazy"/>                                    <div className="cartButton">
                                        <button type="button">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"/>
                                            <div></div>
                                        </button>
                                    </div>
                                </div>
                                <div className="productInfo">
                                    <h3 className="productName">[삼성전자] 그랑데 WF24T8000KV+DV17T8520BV+스태킹키트</h3>
                                    <div className="productPriceWrapper">
                                        <div className="productPrice">
                                            <div></div>
                                            <span>
                                                1,893,400
                                                <span className="won"> 원</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListMargin>
                        <ListMargin>
                            <div className="swiperList">
                                <div className="swiperListImg">
                                    <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1653035080408l0.jpg" alt="상품 이미지" loading="lazy"/>                                    <div className="cartButton">
                                        <button type="button">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"/>
                                            <div></div>
                                        </button>
                                    </div>
                                </div>
                                <div className="productInfo">
                                    <h3 className="productName">[곰표x콜린스그린] 그래놀라 요거트</h3>
                                    <div className="productPriceWrapper">
                                        <div className="productPrice">
                                            <div></div>
                                            <span>
                                                2,900   
                                                <span className="won"> 원</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListMargin>
                        <div className="swiperList">
                            <div className="swiperListImg">
                                <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1577341240262l0.jpg" alt="상품 이미지" loading="lazy"/>                                        <div className="cartButton">
                                    <button type="button">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"/>
                                        <div></div>
                                    </button>
                                </div>
                            </div>
                            <div className="productInfo">
                                <h3 className="productName">[테일러] 유기농 푸룬 건자두 2종</h3>
                                <div className="productPriceWrapper">
                                    <div className="productPrice">
                                        <div></div>
                                        <span>
                                            2,700
                                            <span className="won"> 원</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <button className="prevButton" type="button"></button>
                    <button className="nextButton" type="button"></button>
                </div>
            </div>
        </div>
    </div>

    {/* line banner */}
    <div className="lineBanner">
        <div>
            <a href="https://www.kurly.com/main/beauty">
                <img src="https://product-image.kurly.com/banner/random-band/pc/img/56ae813c-105e-4e07-b213-195079767ba8.jpg" alt=""/>
            </a>
        </div>
    </div>

    {/* random collection */}
    <div className="randomCollection">
        <div>
            <a href="https://www.kurly.com/collections/adventcalendar">
                <div className="randomCollectionLeft">
                    <img src="https://product-image.kurly.com/cdn-cgi/image/width=1230,format=auto/main/random-collection/article/pc/img/18c22ceb-5028-4b36-b9c9-98376104f129.png" alt="상품 이미지" loading="lazy"/>
                </div>
                <div className="randomCollectionRight">
                    <strong>🎄 어드벤트 캘린더 OPEN</strong>
                    <p >크리스마스를 특별하게 맞이하고 싶다면 "어드벤트 캘린더" 에 주목해보세요. 
                        하루에 하나씩 선물을 꺼내보며 다가오는 크리스마스의 설렘을 배로 느낄 수 있답니다. 
                        다양한 테마의 어드벤트 캘린더와 함께 다가올 크리스마스를 맞이해요!
                    </p>
                </div>
            </a>
            <div className="randomCollectionListsWrapper">
                <ul>
                    <li className="randomCollectionList" href="/goods/1000074274">
                        <a className="randomCollectionListImgA" href="/goods/1000074274">
                            <img className="randomCollectionListImg" src="https://product-image.kurly.com/cdn-cgi/image/width=144,format=auto/product/image/d7ffabb9-9a50-4346-a00a-08997fadf1a2.jpg" alt="상품이미지" loading="lazy"/>
                        </a>
                        <a className="randomCollectionProduct" href="/goods/1000074274" >
                            <p className="randomCollectionProductName"> [카카오프렌즈] 2022년 마이 크리스마스 어드벤트 캘린더 (12구)</p>
                            <div className="randomCollectionProductPrice">
                                <div>
                                    <div></div>
                                    <span className="price">
                                        39,000
                                        <span className="won"> 원</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <div>
                            <button className="randomCollectionCartButton" type="button">
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"/>
                            </button>
                        </div>
                    </li>
                    <li className="randomCollectionList" href="/goods/5141850">
                        <a className="randomCollectionListImgA" href="/goods/5141850">
                            <img className="randomCollectionListImg" src="https://product-image.kurly.com/cdn-cgi/image/width=144,format=auto/product/image/e9d97080-1c18-48f2-9ec1-084338c27515.jpg" alt="상품이미지" loading="lazy"/>
                        </a>
                        <a className="randomCollectionProduct" href="/goods/5141850">
                            <p className="randomCollectionProductName">[클뤼젤] 2022년 어드벤트 캘린더 윈터 그레이스 에디션 (한정판)</p>
                            <div className="randomCollectionProductPrice">
                                <div>
                                    <div></div>
                                    <span className="price">
                                        59,900
                                        <span className="won"> 원</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <div>
                            <button className="randomCollectionCartButton" type="button">
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"/>
                            </button>
                        </div>
                    </li>
                    <li className="randomCollectionList" href="/goods/1000079426">
                        <a className="randomCollectionListImgA" href="/goods/1000079426">
                            <img className="randomCollectionListImg" src="https://product-image.kurly.com/cdn-cgi/image/width=144,format=auto/product/image/ea63e63b-5b90-466a-b207-9555d97b6ffd.jpg" alt="상품이미지" loading="lazy"/>
                        </a>
                        <a className="randomCollectionProduct" href="/goods/1000079426">
                            <p className="randomCollectionProductName">[위니비니] 2022년 어드벤트 캘린더 412g</p>
                            <div className="randomCollectionProductPrice">
                                <div>
                                    <div>
                                        <span className="discountPercent">10%</span>
                                        <span className="price">
                                            25,020<span className="won"> 원</span>
                                        </span>
                                    </div>
                                    <span className="listPrice">
                                        27,800<span className="won"> 원</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <div>
                            <button className="randomCollectionCartButton" type="button">
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"/>
                            </button>
                        </div>
                    </li>
                    <li className="randomCollectionList" href="/goods/5060599">
                        <a className="randomCollectionListImgA" href="/goods/5060599">
                            <img className="randomCollectionListImg" src="https://product-image.kurly.com/cdn-cgi/image/width=144,format=auto/product/image/9a5f5ca7-3587-45b3-a65c-58febc125695.jpg" alt="상품이미지" loading="lazy"/>
                        </a>
                        <a className="randomCollectionProduct" href="/goods/5060599">
                            <p className="randomCollectionProductName">[바론] 2022년 크리스마스 어드벤트 캘린더 초콜릿 4종 (택1) </p>
                            <div className="randomCollectionProductPrice">
                                <div>
                                    <div>
                                        <span className="discountPercent">7%</span>
                                        <span className="price">
                                            9,207<span className="won"> 원</span>
                                        </span>
                                    </div>
                                    <span className="listPrice">
                                        9,900<span className="won"> 원</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <div>
                            <button className="randomCollectionCartButton" type="button">
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"/>
                            </button>
                        </div>
                    </li>
                </ul>
                <a className="randomcollectionListAll" href="https://www.kurly.com/collections/adventcalendar">
                    전체보기
                </a>
                <div></div>
            </div>
        </div>
    </div>

    {/* line banner */}
    <div className="lineBanner">
        <div className="">
            <a href="https://www.kurly.com/shop/board/view.php?id=notice&amp;no=64">
                <img src="https://img-cf.kurly.com/banner/random-band/pc/img/8ded70f9-bca2-4a70-b290-beb571ff82ab" alt=""/>
            </a>
        </div>
    </div>

    {/* instagram review */}
    <div className="instagramReview">
        <div>
            <div className="sectionTitle">
                <div>
                    <span>인스타그램 고객 후기</span>
                </div>
                <p>더 많은 고객 후기가 궁금하다면?</p>
            </div>
            <div className="instagramReviewImgs">
                <Slider {...settings2}>
                    <div>
                        <a className="instagramImgWrapper" href="https://www.instagram.com/p/ClfPKjUplXD/">
                            <img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/318021261_659466468997698_781495453913760502_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=rcpKA3w4F_EAX-Q6-ZM&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCnq-XIwjHxGP4iuYclKOKE7JZ6erP_EqoWO82BthE9Jg&oe=6393C9F1" alt="인스타그램 리뷰 사진"/>
                        </a>
                    </div>
                    <div>
                        <a className="instagramImgWrapper" href="https://www.instagram.com/p/ClSR86cJ96T/">
                            <img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/317329526_679959063713221_2122562633440177192_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=9ThvbBLDi1QAX-p8UMm&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfB-CVhwLT8WxA9DhbwAz9VzKgUZcNsBBbAQQQ7BGcEXPA&oe=6393328B" alt="인스타그램 리뷰 사진"/>
                        </a>
                    </div>
                    <div>
                        <a className="instagramImgWrapper" href="https://www.instagram.com/p/ClAx44qpoO2/">
                            <img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/317364407_536345101417796_2725187909758549940_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=39zdUgbFJkgAX-Nlk3o&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfB06hvAP8nO_z5RySAbTXsZho3cjhEpFfQ8PN13L5IW7Q&oe=6392C8B6" alt="인스타그램 리뷰 사진"/>
                        </a>
                    </div>
                    <div>
                        <a className="instagramImgWrapper" href="https://www.instagram.com/p/Ck7QVbXJqTA/">
                            <img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/316478240_1332524144184280_5241513097095068250_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=8G3VWybDJK8AX8YwupO&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAf1IHQoizgcEG-AnEkJqRhMWjMLibZxV5xxBhPVz5qDA&oe=6392F97D" alt="인스타그램 리뷰 사진"/>
                        </a>
                    </div>
                    <div>
                        <a className="instagramImgWrapper" href="https://www.instagram.com/p/CkzhY39pO-B/">
                            <img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/315501076_660065275670781_1329944210714392337_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=yHHyh_y68f8AX-LYEcm&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDo0GtiDAP0NyS4U2aj8wWr7nIN2BCxiZhF42K6yCdizg&oe=63935EDE" alt="인스타그램 리뷰 사진"/>
                        </a>
                    </div>
                    <div>
                        <a className="instagramImgWrapper" href="https://www.instagram.com/p/CkpuVKPuxXw/">
                            <img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/315373790_806876860605472_8957692286872105574_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=hhfBAWjdrtcAX87b_8d&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCov9oVWQt7gnFm-6xechmvmiI7YedS2rhEyNC6a61ytA&oe=63943052" alt="인스타그램 리뷰 사진"/>
                        </a>
                    </div>

                    <div>
                        <a className="instagramImgWrapper" href="https://www.instagram.com/p/ClfPKjUplXD/">
                            <img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/318021261_659466468997698_781495453913760502_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=rcpKA3w4F_EAX-Q6-ZM&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCnq-XIwjHxGP4iuYclKOKE7JZ6erP_EqoWO82BthE9Jg&oe=6393C9F1" alt="인스타그램 리뷰 사진"/>
                        </a>
                    </div>
                    <div>
                        <a className="instagramImgWrapper" href="https://www.instagram.com/p/ClSR86cJ96T/">
                            <img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/317329526_679959063713221_2122562633440177192_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=9ThvbBLDi1QAX-p8UMm&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfB-CVhwLT8WxA9DhbwAz9VzKgUZcNsBBbAQQQ7BGcEXPA&oe=6393328B" alt="인스타그램 리뷰 사진"/>
                        </a>
                    </div>
                    <div>
                        <a className="instagramImgWrapper" href="https://www.instagram.com/p/ClAx44qpoO2/">
                            <img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/317364407_536345101417796_2725187909758549940_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=39zdUgbFJkgAX-Nlk3o&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfB06hvAP8nO_z5RySAbTXsZho3cjhEpFfQ8PN13L5IW7Q&oe=6392C8B6" alt="인스타그램 리뷰 사진"/>
                        </a>
                    </div>
                    <div>
                        <a className="instagramImgWrapper" href="https://www.instagram.com/p/Ck7QVbXJqTA/">
                            <img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/316478240_1332524144184280_5241513097095068250_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=8G3VWybDJK8AX8YwupO&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAf1IHQoizgcEG-AnEkJqRhMWjMLibZxV5xxBhPVz5qDA&oe=6392F97D" alt="인스타그램 리뷰 사진"/>
                        </a>
                    </div>
                    <div>
                        <a className="instagramImgWrapper" href="https://www.instagram.com/p/CkzhY39pO-B/">
                            <img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/315501076_660065275670781_1329944210714392337_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=yHHyh_y68f8AX-LYEcm&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDo0GtiDAP0NyS4U2aj8wWr7nIN2BCxiZhF42K6yCdizg&oe=63935EDE" alt="인스타그램 리뷰 사진"/>
                        </a>
                    </div>
                    <div>
                        <a className="instagramImgWrapper" href="https://www.instagram.com/p/CkpuVKPuxXw/">
                            <img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/315373790_806876860605472_8957692286872105574_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=hhfBAWjdrtcAX87b_8d&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCov9oVWQt7gnFm-6xechmvmiI7YedS2rhEyNC6a61ytA&oe=63943052" alt="인스타그램 리뷰 사진"/>
                        </a>
                    </div>
                    </Slider>
                    <button className="instagramReviewNextButton" type="button"></button>
                
                </div>
            </div>
            <div className="instagramRewviwMore">
                <p>더 많은 고객 후기가 궁금하다면?</p>
                <a href="https://www.instagram.com/marketkurly_regram" target="_blank" rel="noopener noreferrer">
                    @marketkurly_regram
                </a>                            
            </div>
        
    </div>

   </div>
   </>
  )
}

const ListMargin = styled.div`
    margin-right: 18px;
`;
