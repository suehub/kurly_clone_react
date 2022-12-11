import React from 'react'
import styled from 'styled-components'
import filterCategory from '../db/data.json';
import products from '../db/data.json'
import './newProduct.css';
import '../components/contents.css';
import ButtonToTop from '../components/ButtonToTop';

export default function bestProduct() {
  return (
    <Container>
        
        <Title>베스트</Title>

        <ProductDiv>
            <FliterNav>
                <div>
                    <span style={{"font-weight": "500", "font-size": "15px", "color": "rgb(51, 51, 51)"}}>필터</span>
                    <button style={{"display": "flex", "align-items": "center", "pointer-events": "none"}}>
                        <svg width={12} height={12} viewBox={"0 0 16 16"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"} >
                            <path d="M13.78 3.96303C12.504 2.16973 10.4086 1 8.04 1C4.15192 1 1 4.15192 1 8.04C1 11.9281 4.15192 15.08 8.04 15.08C11.9281 15.08 15.08 11.9281 15.08 8.04" stroke="#ddd" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="round"></path>
                            <path d="M14.4933 1L14.4933 4.52H10.9733" stroke="#ddd" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="round"></path>
                        </svg>
                        <span style={{"margin-left": "5px", "font-weight": "500", "color": "rgb(221, 221, 221)"}}>초기화</span>
                    </button>
                </div>

                <div>
                    <div>
                        <FilterName>
                            <div>카테고리</div>
                            <svg width={18} height={18} viewBox={"0 0 18 18"} fill={"none"} stroke={"#999"} xmlns={"http://www.w3.org/2000/svg"} style={{"transform": "rotate(0deg)"}}>
                                <path d={"M5 11L9 7L13 11"} stroke={"#999"} stroke-width={"1.2"}></path>
                            </svg>
                        </FilterName>
                        <FilterUl>
                            {filterCategory.filterCategories.map((product) => (
                                <FilterLi key={product.id}>
                                    <a href={product.url} style={{ "display": "flex", "align-items": "center"}}>
                                        <button style={{"border-radius" : 0, "cursor": "pointer", "align-items": "center", "margin-right": "8px"}}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path>
                                                <path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                        <FilterDetailName>{product.name}</FilterDetailName>
                                        <FilerDetailMount>{product.mount}</FilerDetailMount>
                                    </a>
                                </FilterLi>
                            ))} 
                            <MoreCategory>
                                카테고리 더보기
                                <svg style={{"transform": "rotate(90deg)"}} width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path>
                                </svg>
                            </MoreCategory>
                        </FilterUl>
                    </div>
                    <div>
                    <FilterName>
                            <div>브랜드</div>
                            <svg width={18} height={18} viewBox={"0 0 18 18"} fill={"none"} stroke={"#999"} xmlns={"http://www.w3.org/2000/svg"} style={{"transform": "rotate(0deg)"}}>
                                <path d={"M5 11L9 7L13 11"} stroke={"#999"} stroke-width={"1.2"}></path>
                            </svg>
                        </FilterName>
                        <FilterUl>
                            {filterCategory.filterCategories.map((product) => (
                                <FilterLi key={product.id}>
                                    <a href={product.url} style={{ "display": "flex", "align-items": "center"}}>
                                        <button style={{"border-radius" : 0, "cursor": "pointer", "align-items": "center", "margin-right": "8px"}}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path>
                                                <path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                        <FilterDetailName>{product.name}</FilterDetailName>
                                        <FilerDetailMount>{product.mount}</FilerDetailMount>
                                    </a>
                                </FilterLi>
                            ))} 
                            <MoreCategory>
                                브랜드 더보기
                                <svg style={{"transform": "rotate(90deg)"}} width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path>
                                </svg>
                            </MoreCategory>
                        </FilterUl>
                    </div>
                    <div>
                    <FilterName>
                            <div>가격</div>
                            <svg width={18} height={18} viewBox={"0 0 18 18"} fill={"none"} stroke={"#999"} xmlns={"http://www.w3.org/2000/svg"} style={{"transform": "rotate(0deg)"}}>
                                <path d={"M5 11L9 7L13 11"} stroke={"#999"} stroke-width={"1.2"}></path>
                            </svg>
                        </FilterName>
                        <FilterUl>
                            {filterCategory.filterCategories.map((product) => (
                                <FilterLi key={product.id}>
                                    <a href={product.url} style={{ "display": "flex", "align-items": "center"}}>
                                        <button style={{"border-radius" : 0, "cursor": "pointer", "align-items": "center", "margin-right": "8px"}}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path>
                                                <path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                        <FilterDetailName>{product.name}</FilterDetailName>
                                        <FilerDetailMount>{product.mount}</FilerDetailMount>
                                    </a>
                                </FilterLi>
                            ))}
                        </FilterUl>
                    </div>
                    <div>
                        <FilterName>
                            <div>혜택</div>
                            <svg width={18} height={18} viewBox={"0 0 18 18"} fill={"none"} stroke={"#999"} xmlns={"http://www.w3.org/2000/svg"} style={{"transform": "rotate(0deg)"}}>
                                <path d={"M5 11L9 7L13 11"} stroke={"#999"} stroke-width={"1.2"}></path>
                            </svg>
                        </FilterName>
                        <FilterUl>
                            {filterCategory.filterCategories.map((product) => (
                                <FilterLi key={product.id}>
                                    <a href={product.url} style={{ "display": "flex", "align-items": "center"}}>
                                        <button style={{"border-radius" : 0, "cursor": "pointer", "align-items": "center", "margin-right": "8px"}}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path>
                                                <path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                        <FilterDetailName>{product.name}</FilterDetailName>
                                        <FilerDetailMount>{product.mount}</FilerDetailMount>
                                    </a>
                                </FilterLi>
                            ))} 
                        </FilterUl>
                    </div>
                    <div>
                    <FilterName>
                            <div>유형</div>
                            <svg width={18} height={18} viewBox={"0 0 18 18"} fill={"none"} stroke={"#999"} xmlns={"http://www.w3.org/2000/svg"} style={{"transform": "rotate(0deg)"}}>
                                <path d={"M5 11L9 7L13 11"} stroke={"#999"} stroke-width={"1.2"}></path>
                            </svg>
                        </FilterName>
                        <FilterUl>
                            {filterCategory.filterCategories.map((product) => (
                                <FilterLi key={product.id}>
                                    <a href={product.url} style={{ "display": "flex", "align-items": "center"}}>
                                        <button style={{"border-radius" : 0, "cursor": "pointer", "align-items": "center", "margin-right": "8px"}}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path>
                                                <path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                        <FilterDetailName>{product.name}</FilterDetailName>
                                        <FilerDetailMount>{product.mount}</FilerDetailMount>
                                    </a>
                                </FilterLi>
                            ))} 
                        </FilterUl>
                    </div>
                </div>
            </FliterNav>

            <div style={{"width": "100%"}}>
                <div className='productSort'>
                    <div style={{"font-size": "14px", "font-weight": "500", "color": "rgb(51, 51, 51)"}}>총 380건</div>
                    <ul style={{"position": "relative", "display": "flex", "align-items": "center"}}>
                        <li className='sortTypeInfo'>
                            <a href="/collections/market-newproduct?page=1&amp;per_page=96&amp;sorted_type=4">추천순</a>
                            <div style={{"height": "20px", "margin-left": "5px"}}>
                                <svg style={{"overflow": "hidden"}} width="14" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.9932 0.700195C8.73506 0.700195 10.3116 1.40557 11.4528 2.54565C12.5943 3.68594 13.3002 5.26111 13.3002 7.0002C13.3002 8.73928 12.5943 10.3145 11.4528 11.4547C10.3116 12.5948 8.73506 13.3002 6.9932 13.3002C5.25512 13.3002 3.68233 12.595 2.54387 11.4554C1.40457 10.315 0.700195 8.73952 0.700195 7.0002C0.700195 5.26087 1.40457 3.68541 2.54387 2.54497C3.68233 1.40537 5.25512 0.700195 6.9932 0.700195Z" stroke="#ccc" stroke-width="1.4"></path>
                                    <path d="M4.5 5.21081H5.77027C5.81351 4.55135 6.26216 4.12973 6.95946 4.12973C7.64054 4.12973 8.09459 4.53514 8.09459 5.0973C8.09459 5.58784 7.90383 5.86944 7.35576 6.22524L7.1973 6.32432C6.45135 6.76216 6.13784 7.24865 6.18649 8.05946L6.19189 8.42703H7.44595V8.11892C7.44595 7.58378 7.64595 7.30811 8.35405 6.89189C9.08919 6.45405 9.5 5.87568 9.5 5.04865C9.5 3.85405 8.51081 3 7.02973 3C5.42432 3 4.54324 3.92973 4.5 5.21081ZM6.87838 11.0054C6.33784 11.0054 5.98108 10.6649 5.98108 10.1459C5.98108 9.62162 6.33784 9.28108 6.87838 9.28108C7.42973 9.28108 7.77568 9.62162 7.77568 10.1459C7.77568 10.6649 7.42973 11.0054 6.87838 11.0054Z" fill="#ccc"></path>
                                </svg>
                            </div>
                        </li>
                        <li className='sortType'>
                            <a style={{"color": "rgb(51,51,51)", "font-weight" : "500", "cursor": "default"}} href="/collections/market-newproduct?page=1&amp;per_page=96&amp;sorted_type=0">신상품순</a>
                        </li>
                        <li className='sortType'>
                            <a href="/collections/market-newproduct?page=1&amp;per_page=96&amp;sorted_type=1">판매량순</a>
                        </li>
                        <li className='sortType'>
                            <a href="/collections/market-newproduct?page=1&amp;per_page=96&amp;sorted_type=5">혜택순</a>
                        </li>
                        <li className='sortType'>
                            <a href="/collections/market-newproduct?page=1&amp;per_page=96&amp;sorted_type=2">낮은 가격순</a>
                        </li>
                        <li className='sortType'>
                            <a href="/collections/market-newproduct?page=1&amp;per_page=96&amp;sorted_type=3">높은 가격순</a>
                        </li>
                    </ul>
                </div>

                <div className='productGrid'>
                    {products.newProducts.map((product) => (
                        <a key={product.id} href="">
                            <div>
                                <div className='productImgWrapper'>
                                    <img src={product.url} alt="상품 이미지" loading="lazy"/>
                                    <div className="cartButton">
                                    <button type="button">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"/>
                                    </button>
                                </div>
                                </div>
                                
                            </div>
                            <div style={{"padding": "14px 10px 0px 0px"}}>
                                <span style={{"display": "block", "padding-bottom": "2px"}}>
                                    <span style={{"font-size":"14px", "color":"rgb(153,153,153", "line-height":"19px","letter-spacing":"-0.5px"}}>샛별배송</span>
                                </span>
                                <span className='productName'>{product.name}</span>
                                <div style={{"display":"flex","flex-direction":"row"}}>
                                    { product.discount != "" &&<div className='discountPercent'>{product.discount}%</div>}
                                    <span style={{"font-weight": "800","font-size":"16px","line-height":"24px","white-space":"nowrap"}}>
                                        {product.price} <span className='won'> &nbsp;원</span>
                                    </span>
                                </div>
                                <p className='productP'>{product.info}</p>
                                <div className='info'>
                                    <span>Kurly Only</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>


                <div></div>
            </div>

        </ProductDiv>
        <ButtonToTop/>
    </Container>
  )
}

const Container = styled.div`
    width: 1050px;
    margin: 0 auto;
`;

const Title = styled.h3`
    margin-top: 50px;
    font-weight: 500;
    font-size: 28px;
    color: rgb(51, 51, 51);
    line-height: 35px;
    text-align: center;
`;

const ProductDiv = styled.div`
    position: relative;
    display: flex;
    width: 1050px;
    margin-top: 50px;
    margin-bottom: 75px;
`;

const FliterNav = styled.div`
    position: sticky;
    width: 220px;
    flex-shrink: 0;
    height: 100%;
    max-height: calc(100vh - 120px);
    top: 80px;
    margin-right: 47px;
    border-bottom: 1px solid rgb(238, 238, 238);
    overflow: hidden scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    > div:first-child {
        position: sticky;
        top: 0px;
        display: flex;
        z-index: 20;
        background-color: rgb(255, 255, 255);
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 1px solid rgb(238, 238, 238);
        line-height: 20px;
    };
    > div:last-child > div {
        border-bottom: 1px solid rgb(238, 238, 238);
    };
`;

const FilterName = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 52px;
    overflow: hidden;
    
    > div{
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        white-space: nowrap;
        color: rgb(51, 51, 51);
    }
`
const FilterUl = styled.ul`
    transition: all 250ms cubic-bezier(0.83, 0, 0.17, 1) 0s;
    height: auto;
    max-height: 100vh;
    opacity: 1;
    overflow: hidden;
`;

const FilterLi = styled.li`
    margin-top: 9px;
    display: flex;
    align-items: center;
    margin-bottom: 18px;
`;

const FilterDetailName = styled.span`
    margin-right: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: rgb(51, 51, 51);
    overflow: hidden;
    margin-bottom: 3px;
`;

const FilerDetailMount = styled.span`
    flex-shrink: 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgb(204, 204, 204);
    margin-right: 3px;
`;

const MoreCategory = styled.button`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(153, 153, 153);
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 11px;
`;
