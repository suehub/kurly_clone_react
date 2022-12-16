import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import ButtonToTop from '../components/ButtonToTop';
import datas from '../db/data.json';
import './contents.css';


export default function Contents() {

    const[product, setProduct] = useState([]);
    const[randomList, setRandomList] = useState([]);
    const[intaReview, setInstaReview] = useState([]);

    const navigate = useNavigate();

    // useEffect(() => {
    //     fetch('http://localhost:3001/Products') // 비동기 호출 위함. promise 반환됨
    //     .then(res => {
    //         return res.json()   // res는 http 응답
    //     })
    //     .then(data => {
    //         setProduct(data);
    //     });
    // },[]);

    // useEffect(() => {
    //     fetch('http://localhost:3001/randomLists') // 비동기 호출 위함. promise 반환됨
    //     .then(res => {
    //         return res.json()   // res는 http 응답
    //     })
    //     .then(data => {
    //         setRandomList(data);
    //     });
    // },[]);
    
    // useEffect(() => {
    //     fetch('http://localhost:3001/instaReviews') // 비동기 호출 위함. promise 반환됨
    //     .then(res => {
    //         return res.json()   // res는 http 응답
    //     })
    //     .then(data => {
    //         setInstaReview(data);
    //     });
    // },[]);



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
                        {datas.Products.map(product => (
                            <div className="swiperList">
                                <ListMargin>
                                    <div key={product.id} className="swiperListImg">
                                        <a><img onClick={() => navigate(`/product/${product.id}`)} src={product.url} alt="상품 이미지" loading="lazy"/></a>
                                    <div className="cartButton">
                                        <button type="button">
                                           <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="productInfo">
                                    <h3 className="productName">{product.name}</h3>
                                    <div className="productPriceWrapper">
                                        <div className="productPrice">
                                            <div></div>
                                            <span>
                                                {product.price}
                                                <span className="won"> 원</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                </ListMargin>
                            </div>
                        ))}
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
                    {datas.randomLists.map((list) => (
                        <li key={list.id} className='randomCollectionList' href={`/product/${list.id}`} >
                            <a className='randomCollectionListImgA' href={`/product/${list.id}`} >
                                <img className='randomCollectionListImg' src={list.url} alt="상품이미지" loading="lazy"/>
                            </a>
                            <a className='randomCollectionProduct' href={`/product/${list.id}`}>
                                <p className='randomCollectionProductName'>{list.name}</p>
                                <div>
                                    <div className='discountPercent'>{list.discount}</div>
                                    <span className='price'>
                                        {list.price}
                                        <span className='won'> 원</span>
                                    </span>
                                    
                                </div>
                            </a>
                            <div>
                                <button className='randomCollectionCartButton' type='button'>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"/>
                                </button>
                            </div>
                        </li>
                    ))}                    
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
                <div>
                    <Slider {...settings2}>
                        {datas.instaReviews.map((review) => (
                            <a key={review.id} className='instagramImgWrapper' href=''>
                                <img src={review.url} alt='인스타그램 리뷰 사진' />
                            </a>
                        ))}
                    </Slider>
                </div>
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
    <ButtonToTop/>
   </>
  )
}

const ListMargin = styled.div`
    margin-right: 18px;
`;
