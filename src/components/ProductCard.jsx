import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function ProductCard(props) {

    const navigate = useNavigate();

    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(props.init);
    }, []);

    
    let price = Number((product.price||"").split(',').join(""));
    let totalPrice = (price * (100-product.discount) * 0.01).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
        <Conatiner onClick = {() => navigate(`/product/${product.id}`, {state: product})}>
            <ImgWrapper>
                <div>
                    <img className="img" src={product.url} alt="상품이미지" />
                    <div>
                        <button className='button'>
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" />
                        </button>
                    </div>
                </div>
            </ImgWrapper>
            <Info>
                <span className='delivery'>
                    <span>샛별배송</span>
                </span>
                <span className='name'>{product.name}</span>
                <div className='priceWrapper'>
                    <div className='totlprice'>
                        {product.discount && <StyledSpan primary>{product.discount}%</StyledSpan>}
                        <StyledSpan>
                            {totalPrice}
                            <span className='won'> 원</span>    
                        </StyledSpan>
                    </div>
                    {product.discount && 
                    <div className='price'>
                        <span>
                            {product.price}
                            <span className='won'> 원</span>
                        </span>
                    </div>}
                </div>
                <p className='info'>{product.info}</p>
            </Info>
        </Conatiner>
    )
}

const Conatiner = styled.div`
    display: flex;
    flex-direction: column;
    height: 538px;
    color: rgb(51, 51, 51);
    cursor: pointer;
}
`;
const ImgWrapper = styled.div`
    > div{
        overflow: hidden;
        position: relative;
        background-color: rgb(245, 245, 245);
        width: 249px;
        height: 320px;
    }
    .img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.5s ease-in-out 0s;
    }
    .button{
        position: absolute;
        right: 16px;
        bottom: 16px;
    }
    .button img{
        cursor: pointer;
    }
`;
const Info = styled.div`
    padding: 14px 10px 0px 0px;
    .delivery{
        display: block;
        padding-bottom: 2px;
    }
    .delivery span{
        font-size: 14px;
        color: rgb(153, 153, 153);
        line-height: 19px;
        letter-spacing: -0.5px;
    }
    .name{
        font-size: 16px;
        line-height: 1.45;
        font-weight: 400;
        margin-bottom: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        letter-spacing: normal;
        word-break: break-word;
        overflow-wrap: break-word;
    }
    .priceWrapper{
        display: flex;
        flex-direction: column;
    }
    .price > span{
        padding-top: 2px;
        font-size: 14px;
        color: rgb(181, 181, 181);
        line-height: 20px;
        text-decoration: line-through;
        white-space: nowrap;
    }
    .info{
        padding-top: 12px;
        font-size: 12px;
        color: rgb(153, 153, 153);
        line-height: 18px;
        letter-spacing: normal;
        display: -webkit-box;
        overflow: hidden;
        word-break: break-all;
        white-space: normal;
    }
`;
const StyledSpan = styled.span`
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    white-space: nowrap;
    letter-spacing: -0.5px;
    color: ${props => props.primary ? "rgb(250, 98, 47)" : "rgb(51, 51, 51)"};
    margin-right: ${props => props.primary ? "7px" : "0px"};
`;