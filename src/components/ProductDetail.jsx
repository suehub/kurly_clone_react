import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetail(props) {

    const [product, setProduct] = useState(props);     // product 객체 저장 
    // const params = useParams();

    const [count, setCount] = useState(1);  // 상품 개수 
    // const [price, setPrice] = useState('');  // 총 가격

    // useEffect(() => {
    //     // ProductList에서 변경해준 url을 통해 useParams로 해당 product의 id에 접근해 데이터 요청
    //     fetch(`http://localhost:3000/product/${params.productId}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setProduct(data.results);
    //     });
    // }, []);

    // console.log(product);

    return (
        <div>
        {/* <!-- 상품 상세 --> */}
            <div className="productDetailImg"></div>
            <section className="productDetailSection">
                <div className="productDetailShipping">샛별배송</div>
                <div className="productDetailName">
                    <div>
                        <h1>{product.name}</h1>
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
                                        <span className="selectPrice">{(count * 6500).toLocaleString('ko-KR')} 원</span>
                                    </div>
                                </div>
                            </div>
                        </dl>
                    </div>
                    <div className="selectTotalPrice">
                        <div>
                            <div className="totalPrice">
                                <span>총 상품 금액 :</span>
                                <span>{(count * 6500).toLocaleString('ko-KR')}</span>
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
        </div>
    )
}
