import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { CartLists } from '../recoil/CartList';

export default function ProductDetail(props) {  

    const [count, setCount] = useState(1);  // 상품 개수 

    const product = props.state;
    
    let price = Number((product.price||"").split(',').join(""));
    let totalPrice = (price * (100-product.discount) * 0.01).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    const[cart, setCart] = useRecoilState(CartLists);  // recoil state

    const addCartList = () => {
        setCart(cart => [product, ...cart]);   // state 객체 CartList 배열에 추가
        alert('장바구니에 추가');
    };

    
    return (
        <main className="productDetail">
            <div className="productDetailImg" style={{"background": `url(${product.url}) 0% 0% / cover`}}></div>
            <section className="productDetailSection">
                <div className="productDetailShipping">샛별배송</div>
                <div className="productDetailName">
                    <div>
                        <h1>{product.name}</h1>
                        <button></button>
                    </div>
                    <h2>{product.info}</h2>
                </div>
                <h2 className="productDetailPrice">
                    {product.discount && <span className="discount">{product.discount}%</span>}
                    {product.discount ? <span className="price">{totalPrice}</span> : <span className="price">{product.price}</span>}
                    <span>원</span>
                </h2>
                {product.discount && 
                    <span className="productDetailPriceOrigin">
                        {product.price}
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTAuNSIgY3k9IjEwLjUiIHI9IjYuOSIvPgogICAgICAgIDxwYXRoIGQ9Ik03LjggOC43MzJoMS4zOTdjLjA0OC0uNzI2LjU0MS0xLjE5IDEuMzA4LTEuMTkuNzUgMCAxLjI1LjQ0NyAxLjI1IDEuMDY1IDAgLjU0LS4yMS44NS0uODE0IDEuMjRsLS4xNzQuMTFjLS44Mi40ODEtMS4xNjUgMS4wMTctMS4xMTIgMS45MDhsLjAwNi40MDVoMS4zOHYtLjM0YzAtLjU4OC4yMi0uODkxLjk5OC0xLjM0OS44MS0uNDgyIDEuMjYxLTEuMTE4IDEuMjYxLTIuMDI3IDAtMS4zMTUtMS4wODgtMi4yNTQtMi43MTctMi4yNTQtMS43NjYgMC0yLjczNSAxLjAyMy0yLjc4MyAyLjQzMnptMi42MTYgNi4zNzRjLS41OTQgMC0uOTg3LS4zNzUtLjk4Ny0uOTQ1IDAtLjU3Ny4zOTMtLjk1Mi45ODctLjk1Mi42MDcgMCAuOTg3LjM3NS45ODcuOTUyIDAgLjU3LS4zOC45NDUtLjk4Ny45NDV6IiBmaWxsPSIjQ0NDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="컬리판매가 자세히 보기" />
                    </span>
                }
                
                <div className="productDetailText">
                    로그인 후, 적립 혜택이 제공됩니다.
                </div>
                <div className="productDetailInfo">
                    <dl className="productDetailInfoChart">
                        <dt className="dtTitle">배송</dt>
                        <dd className="ddTitle">
                            <p className="productDetailInfo1">{product.delivery}</p>
                            <p className="productDetailInfo2">23시 전 주문 시 내일 아침 7시 전 도착
                                (대구·부산·울산 샛별배송 운영시간 별도 확인)</p>
                        </dd>
                    </dl>
                    <dl className="productDetailInfoChart">
                        <dt className="dtTitle">판매자</dt>
                        <dd className="ddTitle">
                            <p className="productDetailInfo1">{product.seller}</p>
                            <p className="productDetailInfo2"></p>
                        </dd>
                    </dl>
                    <dl className="productDetailInfoChart">
                        <dt className="dtTitle">포장타입</dt>
                        <dd className="ddTitle">
                            <p className="productDetailInfo1">{product.packaging} (종이포장)</p>
                            <p className="productDetailInfo2">택배배송은 에코 포장이 스티로폼으로 대체됩니다.</p>
                        </dd>
                    </dl>
                    <dl className="productDetailInfoChart">
                        <dt className="dtTitle">판매단위</dt>
                        <dd className="ddTitle">
                            <p className="productDetailInfo1">{product.unit}</p>
                            <p className="productDetailInfo2"></p>
                        </dd>
                    </dl>
                    <dl className="productDetailInfoChart">
                        <dt className="dtTitle">중량/용량</dt>
                        <dd className="ddTitle">
                            <p className="productDetailInfo1">{product.weight}</p>
                            <p className="productDetailInfo2"></p>
                        </dd>
                    </dl>
                    <dl className="productDetailInfoChart">
                        <dt className="dtTitle">원산지</dt>
                        <dd className="ddTitle">
                            <p className="productDetailInfo1">{product.origin}</p>
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
                                    <span>{product.name}</span>
                                </div>
                                <div className="selectProductCount">
                                    <div>
                                        <button onClick={() =>( count < 1) ? setCount(count) : setCount(count-1)} className="countMinusButton" type="button" disabled=""></button>
                                        <div className="count countNumber">{count}</div>
                                        <button onClick={() => setCount(count+1)} className="countPlusButton" type="button"></button>
                                    </div>
                                    <div>
                                        <span className="selectPrice">{(count * price).toLocaleString('ko-KR')} 원</span>
                                    </div>
                                </div>
                            </div>
                        </dl>
                    </div>
                    <div className="selectTotalPrice">
                        <div>
                            <div className="totalPrice">
                                <span>총 상품 금액 :</span>
                                <span>{(count * price).toLocaleString('ko-KR')}</span>
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
                            <button onClick={addCartList} type="button">
                                <span>장바구니 담기</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            </main>
    )
}
