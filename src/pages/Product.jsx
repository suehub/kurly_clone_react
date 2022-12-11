import React from 'react';
import styled from 'styled-components';
import "../components/contents.css";
import "../components/product.css";

export default function Product() {
  

  return (
    <>
    <Main>
       {/* <!-- 상품 정보 --> */}
        <main class="productDetail">
            {/* <!-- 상품 상세 --> */}
            <div class="productDetailImg"></div>
            <section class="productDetailSection">
                <div class="productDetailShipping">샛별배송</div>
                <div class="productDetailName">
                    <div>
                        <h1>[마켓컬리 X 울워스] 오트 브란</h1>
                        <button></button>
                    </div>
                    <h2>귀리의 영양을 그대로 담은 이색 오트밀</h2>
                </div>
                <h2 class="productDetailPrice">
                    <span>6,500</span>
                    <span>원</span>
                </h2>
                <div class="productDetailText">
                    로그인 후, 적립 혜택이 제공됩니다.
                </div>
                <div class="productDetailInfo">
                    <dl class="productDetailInfoChart">
                        <dt class="dtTitle">배송</dt>
                        <dd class="ddTitle">
                            <p class="productDetailInfo1">샛별배송</p>
                            <p class="productDetailInfo2">23시 전 주문 시 내일 아침 7시 전 도착
                                (대구·부산·울산 샛별배송 운영시간 별도 확인)</p>
                        </dd>
                    </dl>
                    <dl class="productDetailInfoChart">
                        <dt class="dtTitle">판매자</dt>
                        <dd class="ddTitle">
                            <p class="productDetailInfo1">컬리</p>
                            <p class="productDetailInfo2"></p>
                        </dd>
                    </dl>
                    <dl class="productDetailInfoChart">
                        <dt class="dtTitle">포장타입</dt>
                        <dd class="ddTitle">
                            <p class="productDetailInfo1">상온 (종이포장)</p>
                            <p class="productDetailInfo2">택배배송은 에코 포장이 스티로폼으로 대체됩니다.</p>
                        </dd>
                    </dl>
                    <dl class="productDetailInfoChart">
                        <dt class="dtTitle">판매단위</dt>
                        <dd class="ddTitle">
                            <p class="productDetailInfo1">1팩</p>
                            <p class="productDetailInfo2"></p>
                        </dd>
                    </dl>
                    <dl class="productDetailInfoChart">
                        <dt class="dtTitle">중량/용량</dt>
                        <dd class="ddTitle">
                            <p class="productDetailInfo1">500g</p>
                            <p class="productDetailInfo2"></p>
                        </dd>
                    </dl>
                    <dl class="productDetailInfoChart">
                        <dt class="dtTitle">원산지</dt>
                        <dd class="ddTitle">
                            <p class="productDetailInfo1">상세페이지 별도표기</p>
                            <p class="productDetailInfo2"></p>
                        </dd>
                    </dl>
                    <dl class="productDetailInfoChart">
                        <dt class="dtTitle">알레르기정보</dt>
                        <dd class="ddTitle">
                            <p class="productDetailInfo1">*밀(글루텐) 혼입 가능성 있음.</p>
                            <p class="productDetailInfo2"></p>
                        </dd>
                    </dl>
                    <dl class="productDetailInfoChart">
                        <dt class="dtTitle">안내사항</dt>
                        <dd class="ddTitle">
                            <p class="productDetailInfo1">- 2022년 12월 24일 23시 주문건까지, 유통기한 2023년 5월 12일 상품 출고</p>
                            <p class="productDetailInfo2"></p>
                        </dd>
                    </dl>
                </div>
                <div class="productDetailSelect">
                    <div>
                        <dl class="productDetailSelectChart">
                            <dt class="dtTitle">상품선택</dt>
                            <div class="productDetailSelectBox">
                                <div class="selectProductName">
                                    <span>[마켓컬리 X 울어스] 오트 브란</span>
                                </div>
                                <div class="selectProductCount">
                                    <div>
                                        <button class="countMinusButton" type="button" aria-label="수량내리기" disabled=""></button>
                                        <div class="count countNumber">1</div>
                                        <button class="countPlusButton" type="button" aria-label="수량올리기"></button>
                                    </div>
                                    <div>
                                        <span class="selectPrice">6,500원</span>
                                    </div>
                                </div>
                            </div>
                        </dl>
                    </div>
                    <div class="selectTotalPrice">
                        <div>
                            <div class="totalPrice">
                                <span>총 상품 금액 :</span>
                                <span>6,500</span>
                                <span>원</span>
                            </div>
                            <div class="accumulateInfo">
                                <span>적립</span>
                                <span>로그인 후, 적립 혜택 제공</span>
                            </div>
                        </div>
                    </div>
                    <div class="productDetailAddCart">
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
                        <div class="ProductAddCart">
                            <button type="button">
                                <span>장바구니 담기</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main> 
      {/* <!-- 상품 디테일 nav --> */}
        <nav class="productDetailNav">
            <ul>
                <li>
                    <a href="">
                        <span class="productDetailNavName">상품설명</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span class="productDetailNavName">상세정보</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span class="productDetailNavName">후기</span>
                        <span class="count">(133)</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span class="productDetailNavName">문의</span>
                    </a>
                </li>
            </ul>
        </nav>

        {/* <!-- 상품 디테일 --> */}
      <div>
          <div class="description">
              <div>
                  <div class="goodsWrapper">
                      <div class="goodsNotice">
                          <div>
                              <strong class="tit">구매 전 참고사항</strong>
                              <div class="desc">
                                  <span class="descInner">
                                      제품 뒷면의 유통기한은 일/월/년 순으로 기재돼 있습니다. 아래 읽는 방법을 참고해주세요.
                                      <br/>
                                      (예) 5/12/2022 : 2022년 12월 5일까지
                                  </span>
                              </div>
                          </div>
                      </div>
                      <div class="goodsIntro">
                          <div class="goodsIntroImg">
                              <img src="https://img-cf.kurly.com/shop/data/goodsview/20220211/gv10000277893_1.jpg"/>
                          </div>
                          <div class="goodsContext">
                              <h3>
                                  <small>귀리의 영양을 그대로 담은 이색 오트밀</small>
                                    [마켓컬리 X 울워스] 
                                    <br/>
                                    호주산 오트 브란
                              </h3>
                              <p class="words">
                                  울워스와 함께 호주의 건강한 식사에 한 걸음 가까워져 보세요. 
                                  드넓은 호주에서 자란 귀리를 사용하면서, 속껍질을 잘게 갈아 먹기 좋게끔 만들었답니다. 
                                  톡톡한 식감이 색다른 매력으로 다가오지요. 오트밀에 한두 스푼 얹거나, 빵가루처럼 활용해보세요. 
                                  든든함과 재밌는 식감을 한 번에 챙길 수 있을 거예요.
                              </p>
                          </div>
                      </div>
                      <div class="goodsPoint">
                          <h3>
                              <span>Kurly's Check Point</span>
                          </h3>
                          <div class="goodsContext">
                              <div class="goodsContextImg">
                                  <img src="https://img-cf.kurly.com/shop/data/goodsview/20220420/gv00000304876_1.jpg"/>
                              </div>
                          </div>
                      </div>
                      <div class="goodsDesc">
                          <div class="goodsContext">
                              <div class="goodsDescImg">
                                  <img src="https://img-cf.kurly.com/shop/data/goodsview/20220421/gv40000305582_1.jpg"/>
                              </div>
                              <p class="word"></p>
                          </div>
                      </div>
                      <div class="goodsPick">
                          <h3>
                              <span>Kurly's Pick</span>
                          </h3>
                          <div class="goodsContext">
                              <p class="words">
                                  <strong class="subTit">
                                      <span class="optionTit">오트 브란</span>
                                  </strong>
                                  <b>・중량</b>
                                  : 1봉(500g)
                                  <br/>
                                  <b>・특징</b>
                                  : 호주산 귀리 속겨를 잘게 썰어 가공한 제품입니다. 
                                  오트밀, 베이킹 등에 두루 활용 가능해요. 
                              </p>
                              <div class="goodsPickImg">
                                  <img src="https://img-cf.kurly.com/shop/data/goodsview/20220420/gv30000278001_3.jpg"/>
                              </div>
                          </div>
                      </div>
                      <div class="goodsTip">
                          
                      </div>
                      <div class="goodsRecipe">
                          <h3>
                              <span class="recipeTit">Kurly’s Recipe</span>
                              <small class="recipeProduct">블루베리 오트 스무디 보울</small>
                          </h3>
                          <div class="goodsContext">
                              <div>
                                  <img src="https://img-cf.kurly.com/shop/data/goodsview/20220211/gv10000277901_1.jpg"/>
                              </div>
                              <p class="words">
                                  <strong class="recipeItemTit">재료</strong>
                                  오트 브란 3큰술, 냉동 블루베리 1컵, 바나나 1.5개, 우유 또는 식물성 음료 1컵, 코코넛칩 약간, 메이플 또는 아가베 시럽 약간 
                              </p>
                              <p class="words">
                                  <strong class="recipeItemTit">RECIPE</strong>
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
              <div class="descriptionDiv"></div>
          </div>
          <div class="detail">
              <div class="detail1">
                  <img src="https://img-cf.kurly.com/shop/data/goodsview/20220420/gv30000304877_1.jpg"/>
              </div>
              <div class="detail2">
                  <h3>상품고시정보</h3>
                  <ul></ul>
              </div>
          </div>
          <div class="review"></div>
          <div class="inquiry"></div>
      </div>
    </Main>
    {/* // <!-- 하단 상품 선택 --> */}
    <div class="productSelect">
        <div>
            <button>
                <span>상품 선택</span>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iZHc0M3gxZTN5YSIgZD0iTTguOCA2LjRIMTZ2Ny4yIi8+CiAgICA8L2RlZnM+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDI0KSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPHVzZSBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgdHJhbnNmb3JtPSJzY2FsZSgxIC0xKSByb3RhdGUoLTQ1IC0xMS43NDIgMCkiIHhsaW5rOmhyZWY9IiNkdzQzeDFlM3lhIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="open_arrow"/>
            </button>
        </div>
    </div>
    </>
  );
};


const Main = styled.div`
  position: relative;
  width: 1050px;
  margin: 0px auto;
  padding-top: 30px;
`;