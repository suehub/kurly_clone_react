import React from 'react'
import styled from 'styled-components'
import filterCategory from '../db/data.json';

export default function NewProduct() {
  return (
    <Container>
        <div style={{"text-align": "center"}}>
            <a href="https://www.kurly.com/shop/event/kurlyEvent.php?htmid=event/2022/0207/new_products">
                <img style={{"width": "100%", "vertical-align": "top", "cursor": "pointer"}} 
                    src="https://collection-image.kurly.com/product-collections/2451/QwAyaGZHzmHErgidNg01maHWb2l07ie67fE0Pa9d.jpg" alt="배너 이미지"/>               
            </a>
        </div>
        <Title>신상품</Title>

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
                <div></div>
                <div></div>
                <div></div>
            </div>

        </ProductDiv>
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
