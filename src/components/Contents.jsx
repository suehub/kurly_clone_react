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
        slidesToScroll: 5,
        arrows: true,
    };

  return (
   <>
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
   </>
  )
}

const ListMargin = styled.div`
    margin-right: 18px;
`;