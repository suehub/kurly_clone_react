import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import styled from 'styled-components';
import ButtonToTop from "../components/ButtonToTop";
import "../components/contents.css";
import "./product.css";
import reviewImgs from "../db/data.json";
import reviewLists from "../db/data.json";

export default function Product() {

    const [scrollY, setScrollY] = useState(0);
    const [scrollActive, setScrollActive] = useState(false);

    const [count, setCount] = useState(1);  // 상품 개수 
    const [price, setPrice] = useState('');  // 총 가격

    // const upProductCount = (productPrice) => {
    //     let totalPrice = 0;

    //     setCount(count + 1);
        
    //     totalPrice =  count * productPrice; 
    //     let value = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')();
        
    //     setPrice(priceToString(value));
    // }

    // const downProductCount = (productPrice) => {
    //     let totalPrice = 0;

    //     if(count < 1) return;
    //     else setCount(count-1);

    //     totalPrice = count * productPrice;

    //     let value = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')();
        
    //     setPrice(priceToString(value));
    // }

    // const priceToString = (price) => {
    //     return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')();
    // }

    const [like, setLike] = useState(0);    // 좋아요 개수 저장 
    const [likeActive, setLikeActive] = useState(false); // 버튼 누른 상태 저장
    
    const scrollFixed = () => {
        if (scrollY > 1000) {    // header height
        setScrollY(window.pageYOffset);
        setScrollActive(true);
        } else {
        setScrollY(window.pageYOffset);
        setScrollActive(false);
        }
    };

    useEffect(() => {
        const scrollListener = () => {
        window.addEventListener('scroll', scrollFixed);
        };
        scrollListener();
        return () => {
        window.removeEventListener('scroll', scrollFixed);
        };
    }, [scrollY, scrollActive]);

    const onLikeButton = () => {
        if(likeActive === false) {
            setLikeActive(true);
            setLike((prev) => prev + 1);
        } else{
            setLikeActive(false);
            if(like < 1) return;
            setLike((prev) => prev - 1);
        }
    }

    return (
        <>
        <Main>
        {/* <!-- 상품 정보 --> */}
            <main className="productDetail">
                {/* <!-- 상품 상세 --> */}
                <div className="productDetailImg"></div>
                <section className="productDetailSection">
                    <div className="productDetailShipping">샛별배송</div>
                    <div className="productDetailName">
                        <div>
                            <h1>[마켓컬리 X 울워스] 오트 브란</h1>
                            <button></button>
                        </div>
                        <h2>귀리의 영양을 그대로 담은 이색 오트밀</h2>
                    </div>
                    <h2 className="productDetailPrice">
                        <span>6,500</span>
                        <span>원</span>
                    </h2>
                    <div className="productDetailText">
                        로그인 후, 적립 혜택이 제공됩니다.
                    </div>
                    <div className="productDetailInfo">
                        <dl className="productDetailInfoChart">
                            <dt className="dtTitle">배송</dt>
                            <dd className="ddTitle">
                                <p className="productDetailInfo1">샛별배송</p>
                                <p className="productDetailInfo2">23시 전 주문 시 내일 아침 7시 전 도착
                                    (대구·부산·울산 샛별배송 운영시간 별도 확인)</p>
                            </dd>
                        </dl>
                        <dl className="productDetailInfoChart">
                            <dt className="dtTitle">판매자</dt>
                            <dd className="ddTitle">
                                <p className="productDetailInfo1">컬리</p>
                                <p className="productDetailInfo2"></p>
                            </dd>
                        </dl>
                        <dl className="productDetailInfoChart">
                            <dt className="dtTitle">포장타입</dt>
                            <dd className="ddTitle">
                                <p className="productDetailInfo1">상온 (종이포장)</p>
                                <p className="productDetailInfo2">택배배송은 에코 포장이 스티로폼으로 대체됩니다.</p>
                            </dd>
                        </dl>
                        <dl className="productDetailInfoChart">
                            <dt className="dtTitle">판매단위</dt>
                            <dd className="ddTitle">
                                <p className="productDetailInfo1">1팩</p>
                                <p className="productDetailInfo2"></p>
                            </dd>
                        </dl>
                        <dl className="productDetailInfoChart">
                            <dt className="dtTitle">중량/용량</dt>
                            <dd className="ddTitle">
                                <p className="productDetailInfo1">500g</p>
                                <p className="productDetailInfo2"></p>
                            </dd>
                        </dl>
                        <dl className="productDetailInfoChart">
                            <dt className="dtTitle">원산지</dt>
                            <dd className="ddTitle">
                                <p className="productDetailInfo1">상세페이지 별도표기</p>
                                <p className="productDetailInfo2"></p>
                            </dd>
                        </dl>
                        <dl className="productDetailInfoChart">
                            <dt className="dtTitle">알레르기정보</dt>
                            <dd className="ddTitle">
                                <p className="productDetailInfo1">*밀(글루텐) 혼입 가능성 있음.</p>
                                <p className="productDetailInfo2"></p>
                            </dd>
                        </dl>
                        <dl className="productDetailInfoChart">
                            <dt className="dtTitle">안내사항</dt>
                            <dd className="ddTitle">
                                <p className="productDetailInfo1">- 2022년 12월 24일 23시 주문건까지, 유통기한 2023년 5월 12일 상품 출고</p>
                                <p className="productDetailInfo2"></p>
                            </dd>
                        </dl>
                    </div>
                    <div className="productDetailSelect">
                        <div>
                            <dl className="productDetailSelectChart">
                                <dt className="dtTitle">상품선택</dt>
                                <div className="productDetailSelectBox">
                                    <div className="selectProductName">
                                        <span>[마켓컬리 X 울어스] 오트 브란</span>
                                    </div>
                                    <div className="selectProductCount">
                                        <div>
                                            <button onClick={() =>( count < 1) ? setCount(count) : setCount(count-1)} className="countMinusButton" type="button" disabled=""></button>
                                            <div className="count countNumber">{count}</div>
                                            <button onClick={() => setCount(count+1)} className="countPlusButton" type="button"></button>
                                        </div>
                                        <div>
                                            <span className="selectPrice">{count * 6500} 원</span>
                                        </div>
                                    </div>
                                </div>
                            </dl>
                        </div>
                        <div className="selectTotalPrice">
                            <div>
                                <div className="totalPrice">
                                    <span>총 상품 금액 :</span>
                                    <span>{count * 6500}</span>
                                    <span>원</span>
                                </div>
                                <div className="accumulateInfo">
                                    <span>적립</span>
                                    <span>로그인 후, 적립 혜택 제공</span>
                                </div>
                            </div>
                        </div>
                        <div className="productDetailAddCart">
                            <button type="button">
                                <span>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K" alt=""/>
                                </span>
                            </button>
                            <button type="button" disabled>
                                <span>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjY2NiAyM2EzLjMzMyAzLjMzMyAwIDEgMCA2LjY2NiAwIi8+CiAgICAgICAgPHBhdGggZD0iTTI1Ljk5OCAyMi43MzhINmwuMDEzLS4wM2MuMDc2LS4xMzUuNDcxLS43MDQgMS4xODYtMS43MDlsLjc1LTEuMDV2LTYuNjM1YzAtNC40ODUgMy40MzgtOC4xNCA3Ljc0MS04LjMwOEwxNiA1YzQuNDQ2IDAgOC4wNSAzLjcyMiA4LjA1IDguMzE0djYuNjM0bDEuNzA3IDIuNDExYy4xNzMuMjUzLjI1NC4zOC4yNDIuMzh6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg==" alt=""/>
                                </span>
                            </button>
                            <div className="ProductAddCart">
                                <button type="button">
                                    <span>장바구니 담기</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main> 
        {/* <!-- 상품 디테일 nav --> */}
            <nav className="productDetailNav">
                <ul>
                    <li>
                        <Link to="description" spy={true} smooth={true}>
                            <span className="productDetailNavName">상품설명</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="detail" spy={true} smooth={true} activeClass="active">
                            <span className="productDetailNavName">상세정보</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="review" spy={true} smooth={true} activeClass="active">
                            <span className="productDetailNavName">후기</span>
                            <span className="count">(133)</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="inquiry" spy={true} smooth={true} activeClass="active">
                            <span className="productDetailNavName">문의</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* <!-- 상품 디테일 --> */}
        <div>
            <div id="description" className="description">
                <div>
                    <div className="goodsWrapper">
                        <div className="goodsNotice">
                            <div>
                                <strong className="tit">구매 전 참고사항</strong>
                                <div className="desc">
                                    <span className="descInner">
                                        제품 뒷면의 유통기한은 일/월/년 순으로 기재돼 있습니다. 아래 읽는 방법을 참고해주세요.
                                        <br/>
                                        (예) 5/12/2022 : 2022년 12월 5일까지
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="goodsIntro">
                            <div className="goodsIntroImg">
                                <img src="https://img-cf.kurly.com/shop/data/goodsview/20220211/gv10000277893_1.jpg"/>
                            </div>
                            <div className="goodsContext">
                                <h3>
                                    <small>귀리의 영양을 그대로 담은 이색 오트밀</small>
                                        [마켓컬리 X 울워스] 
                                        <br/>
                                        호주산 오트 브란
                                </h3>
                                <p className="words">
                                    울워스와 함께 호주의 건강한 식사에 한 걸음 가까워져 보세요. 
                                    드넓은 호주에서 자란 귀리를 사용하면서, 속껍질을 잘게 갈아 먹기 좋게끔 만들었답니다. 
                                    톡톡한 식감이 색다른 매력으로 다가오지요. 오트밀에 한두 스푼 얹거나, 빵가루처럼 활용해보세요. 
                                    든든함과 재밌는 식감을 한 번에 챙길 수 있을 거예요.
                                </p>
                            </div>
                        </div>
                        <div className="goodsPoint">
                            <h3>
                                <span>Kurly's Check Point</span>
                            </h3>
                            <div className="goodsContext">
                                <div className="goodsContextImg">
                                    <img src="https://img-cf.kurly.com/shop/data/goodsview/20220420/gv00000304876_1.jpg"/>
                                </div>
                            </div>
                        </div>
                        <div className="goodsDesc">
                            <div className="goodsContext">
                                <div className="goodsDescImg">
                                    <img src="https://img-cf.kurly.com/shop/data/goodsview/20220421/gv40000305582_1.jpg"/>
                                </div>
                                <p className="word"></p>
                            </div>
                        </div>
                        <div className="goodsPick">
                            <h3>
                                <span>Kurly's Pick</span>
                            </h3>
                            <div className="goodsContext">
                                <p className="words">
                                    <strong className="subTit">
                                        <span className="optionTit">오트 브란</span>
                                    </strong>
                                    <b>・중량</b>
                                    : 1봉(500g)
                                    <br/>
                                    <b>・특징</b>
                                    : 호주산 귀리 속겨를 잘게 썰어 가공한 제품입니다. 
                                    오트밀, 베이킹 등에 두루 활용 가능해요. 
                                </p>
                                <div className="goodsPickImg">
                                    <img src="https://img-cf.kurly.com/shop/data/goodsview/20220420/gv30000278001_3.jpg"/>
                                </div>
                            </div>
                        </div>
                        <div className="goodsTip">
                            
                        </div>
                        <div className="goodsRecipe">
                            <h3>
                                <span className="recipeTit">Kurly’s Recipe</span>
                                <small className="recipeProduct">블루베리 오트 스무디 보울</small>
                            </h3>
                            <div className="goodsContext">
                                <div>
                                    <img src="https://img-cf.kurly.com/shop/data/goodsview/20220211/gv10000277901_1.jpg"/>
                                </div>
                                <p className="words">
                                    <strong className="recipeItemTit">재료</strong>
                                    오트 브란 3큰술, 냉동 블루베리 1컵, 바나나 1.5개, 우유 또는 식물성 음료 1컵, 코코넛칩 약간, 메이플 또는 아가베 시럽 약간 
                                </p>
                                <p className="words">
                                    <strong className="recipeItemTit">RECIPE</strong>
                                    1. 오트 브란 3큰술, 냉동 블루베리 3/4컵, 바나나 1개 분량을 믹서기에 담아주세요.
                                    <br/>
                                    2. 우유 또는 식물성 음료 1컵을 붓고 곱게 갈아주세요
                                    <br/>
                                    <b>Tip.</b>
                                        생과일을 사용할 경우 음료의 양을 줄여주세요.
                                    <br/>
                                    3. ①에서 남겨둔 바나나, 블루베리와 코코넛칩을 토핑으로 올려주세요.
                                    <br/>
                                    4. 메이플 또는 아가베 시럽을 둘러 완성하세요. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="descriptionDiv"></div>
            </div>
            <div id="detail" className="detail">
                <div className="detail1">
                    <img src="https://img-cf.kurly.com/shop/data/goodsview/20220420/gv30000304877_1.jpg"/>
                </div>
                <div className="detail2">
                    <h3>상품고시정보</h3>
                    <ul className="detailUl">
                        <li className="leftLi">식품등의표시·광고에관한법률에 따른 표시사항</li>
                        <li className="rightLi">상품설명 및 상품이미지 참조</li>
                        <li className="leftLi">제품명</li>
                        <li className="rightLi">상품설명 및 상품이미지 참조</li>
                        <li className="leftLi">식품의 유형</li>
                        <li className="rightLi">상품설명 및 상품이미지 참조</li>
                        <li className="leftLi">생산자 및 소재지(수입품의 경우 생산자, 수입자 및 제조국)</li>
                        <li className="rightLi">상품설명 및 상품이미지 참조</li>
                        <li className="leftLi">제조연원일, 유통기한 또는 품질유지기한</li>
                        <li className="rightLi">상품설명 및 상품이미지 참조</li>
                        <li className="leftLi">포장단위별 내용물의 용량(중량), 수량</li>
                        <li className="rightLi">상품설명 및 상품이미지 참조</li>
                        <li className="leftLi">원재료명 및 함량(농수산물의 원산지 표시에 관한 법률에 따른 원산지 표시 포함)</li>
                        <li className="rightLi">상품설명 및 상품이미지 참조</li>
                        <li className="leftLi">영양성분(식품등의표시·광고에관한법률에 따른 영양성분 표시대상 식품에 한함)</li>
                        <li className="rightLi">상품설명 및 상품이미지 참조</li>
                        <li className="leftLi">유전자변형식품에 해당하는 경우의 표시</li>
                        <li className="rightLi">상품설명 및 상품이미지 참조</li>
                        <li className="leftLi">소비자안전을 위한 주의사항</li>
                        <li className="rightLi">상품설명 및 상품이미지 참조</li>
                        <li className="leftLi">수입식품에 해당하는 경우 "수입식품안전관리특별법에 따른 수입신고를 필함"의 문구</li>
                        <li className="rightLi">상품설명 및 상품이미지 참조</li>
                        <li className="leftLi">소비자상담 관련 전화번호</li>
                        <li className="rightLi">상품설명 및 상품이미지 참조</li>
                    </ul>
                </div>
            </div>
            <div id="review "className="review">
                <section style={{"padding":"72px 0px"}}>
                    <header className="reviewHeader">
                        <h2>상품 후기</h2>
                    </header>
                    <ul className="reviewUl">
                        <li className="reviewLi">사진후기 100원, 글후기 50원 적립금 혜택이 있어요.</li>
                        <li className="reviewLi">퍼플, 더퍼플은 2배 적립 (사진 200원, 글 100원) / 주간 베스트 후기로 선정 시 5,000원을 추가 적립</li>
                        <li className="reviewLi">후기 작성은 배송완료일로부터 30일 이내 가능합니다.</li>
                        <li className="reviewLi">작성하신 후기는 확인 후 적립금이 지급됩니다. (영업일 기준 평균 1~2일 소요)</li>
                    </ul>
                    <div className="reviewImgWrapper">
                        {reviewImgs.reviewImgs.map((reviewImg) => (
                            <button style={{"background":`url(${reviewImg.url}) 0% 0% / cover no-repeat`}} />
                        ))}
                        <a className="reviewMore">
                            <span>더보기</span>
                        </a>
                    </div>
                    <div className="reviewLists">
                        <div style={{"position":"absolute","top":"-170px","height":"0px"}}></div>
                        <div style={{"position": "absolute","top": "-36px","width": "100%","font-size": "12px","line-height": "16px"}}>
                            <span style={{"position":"absolute","left":"0px","font-weight":"500"}}>총 144개</span>
                            <div style={{"display":"flex","gap":"17px","align-items":"center","justify-content":"flex-end","font-weight":"400"}}>
                                <button className="recommandSortButton">추천순</button>
                                <button className="recentSortButton">최근등록순</button>
                            </div>
                        </div>
                        <div style={{"padding":"21px 20px 20px","border-bottom":"1px solid rgb(238,238,238"}}>
                            <span className="notice">공지</span>
                            <button className="infoButton">금주의 베스트 후기 안내</button>
                        </div>
                        <div style={{"padding":"21px 20px 20px","border-bottom":"1px solid rgb(238,238,238"}}>
                            <span className="notice">공지</span>
                            <button className="infoButton">상품 후기 적립금 정책 안내</button>
                        </div>
                        {reviewLists.reviewArticles.map((review) => (
                        <div className="reviewList">
                            <div style={{"flex": "0 0 225px"}}>
                                <div>
                                    <span className="reviewListBox">일반</span>
                                    <span style={{"font-weight":"500"}}>{review.name}</span>
                                </div>
                            </div>
                            <article style={{"flex":"1 1 0%","overflow":"hidden"}}>
                                <div>
                                    <div className="reviewProName">
                                        <h3>[마켓컬리 X 울워스] 오트 브란</h3>
                                    </div>
                                    <p className="reviewContent">{review.content}</p>
                                    <div className="reviewListImg">
                                        {review.url != "" && <button style={{"background": `url(${review.img}) 0% 0% / cover no-repeat`}}></button>}
                                    </div>
                                    <footer className="reviewFooter">
                                        <div>
                                            <span style={{"color":"rgb(153,153,153)"}}>{review.date}</span>
                                        </div>
                                        <LikeHover>
                                            <span></span>
                                            <span onClick={onLikeButton}>도움돼요 {(like != 0) && like}</span>
                                        </LikeHover>
                                    </footer>
                                </div>
                            </article>
                        </div>
                        ))}
                        
                       
                    </div>
                </section>
            </div>

            <div id="inquiry" className="inquiry">
                <div style={{"margin-bottom": "60px"}}>
                    <div style={{"position":"absolute","right":"0px"}}>
                        <button className="askButton">
                            <span>문의하기</span>
                        </button>
                    </div>
                    <div style={{"padding-bottom":"40px","letter-spacing":"-0.5px"}}>
                        <strong className="strongText">상품 문의</strong>
                        <ul className="inquiryUl">
                            <li>상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.</li>
                            <li>
                                배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내
                                <a href="">1:1 문의</a>
                                에 남겨주세요.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <table className="inquiryTable">
                            <thead>
                                <tr>
                                    <th style={{"width":"710px"}}>제목</th>
                                    <th style={{"width":"100px"}}>작성자</th>
                                    <th style={{"width":"100px"}}>작성일</th>
                                    <th style={{"width":"100px"}}>답변상태</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                    <span>공지</span>
                                    판매 (일시)중단 제품 안내 (22.11.24 업데이트)
                                    </td>
                                    <td>컬리</td>
                                    <td>2017.02.01</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>판매 (일시)중단 제품 안내 (22.11.24 업데이트)</td>
                                    <td>조*현</td>
                                    <td>2022.07.19</td>
                                    <td>답변완료</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="inquiryButton">
                        <div>
                            <button></button>
                            <button></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Main>

        {/* 하단 상품 선택 */}
        <div className={scrollActive ? "productSelect" : "none"}>
            <div>
                <button>
                    <span>상품 선택</span>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iZHc0M3gxZTN5YSIgZD0iTTguOCA2LjRIMTZ2Ny4yIi8+CiAgICA8L2RlZnM+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDI0KSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPHVzZSBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgdHJhbnNmb3JtPSJzY2FsZSgxIC0xKSByb3RhdGUoLTQ1IC0xMS43NDIgMCkiIHhsaW5rOmhyZWY9IiNkdzQzeDFlM3lhIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="open_arrow"/>
                </button>
            </div>
        </div>

        <ButtonToTop/>

        </>
    );
};


const Main = styled.div`
  position: relative;
  width: 1050px;
  margin: 0px auto;
  padding-top: 30px;
`;

const LikeHover = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 88px;
    height: 32px;
    padding: 0px 13px 0px 11px;
    border: 1px solid rgb(226, 226, 226);
    border-radius: 20px;
    font-size: 12px;
    line-height: 20px;
    color: rgb(153, 153, 153);
    span:first-of-type{
        width: 15px;
        height: 15px;
        margin-right: 4px;
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIKICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoCiAgICBkPSJNNC4wNDgzNyAxMi45OTk4SDIuMjE5MzVDMS41NDU5MiAxMi45OTk4IDEgMTIuNDYyNiAxIDExLjc5OTlWNy41OTk5MkMxIDYuOTM3MTggMS41NDU5MiA2LjM5OTkzIDIuMjE5MzUgNi4zOTk5M0g0LjA0ODM3TTguMzE2MDggNS4xOTk5NVYyLjc5OTk4QzguMzE2MDggMS44MDU4OCA3LjQ5NzIgMSA2LjQ4NzA2IDFMNC4wNDgzNyA2LjM5OTkzVjEyLjk5OTlIMTAuOTI1NUMxMS41MzM1IDEzLjAwNjYgMTIuMDUzNyAxMi41NzE1IDEyLjE0NDggMTEuOTc5OUwxMi45ODYyIDYuNTc5OTNDMTMuMDM5OSA2LjIzMTg1IDEyLjkzNTUgNS44NzgxMiAxMi43MDA4IDUuNjEyNDVDMTIuNDY2IDUuMzQ2NzggMTIuMTI0NiA1LjE5NTk2IDExLjc2NjggNS4xOTk5NUg4LjMxNjA4WiIKICAgIHN0cm9rZT0iIzk5OTk5OSIgc3Ryb2tlLXdpZHRoPSIxLjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==) center center no-repeat;
    }
    :hover{
        color: rgb(95, 0, 128); 
    }
    :hover span:first-of-type{
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIKICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoCiAgICBkPSJNNC4wNDgzNyAxMi45OTk4SDIuMjE5MzVDMS41NDU5MiAxMi45OTk4IDEgMTIuNDYyNiAxIDExLjc5OTlWNy41OTk5MkMxIDYuOTM3MTggMS41NDU5MiA2LjM5OTkzIDIuMjE5MzUgNi4zOTk5M0g0LjA0ODM3TTguMzE2MDggNS4xOTk5NVYyLjc5OTk4QzguMzE2MDggMS44MDU4OCA3LjQ5NzIgMSA2LjQ4NzA2IDFMNC4wNDgzNyA2LjM5OTkzVjEyLjk5OTlIMTAuOTI1NUMxMS41MzM1IDEzLjAwNjYgMTIuMDUzNyAxMi41NzE1IDEyLjE0NDggMTEuOTc5OUwxMi45ODYyIDYuNTc5OTNDMTMuMDM5OSA2LjIzMTg1IDEyLjkzNTUgNS44NzgxMiAxMi43MDA4IDUuNjEyNDVDMTIuNDY2IDUuMzQ2NzggMTIuMTI0NiA1LjE5NTk2IDExLjc2NjggNS4xOTk5NUg4LjMxNjA4WiIKICAgIHN0cm9rZT0iIzVmMDA4MCIgc3Ryb2tlLXdpZHRoPSIxLjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==) center center no-repeat;
    }
`;
