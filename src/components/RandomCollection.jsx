import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import datas from '../db/data.json';

export default function RandomCollection() {

    const navigate = useNavigate();

    return (
        <Container>
            <div>
                <a className='main' href="https://www.kurly.com/collections/adventcalendar">
                    <LeftDiv>
                        <img src="https://product-image.kurly.com/cdn-cgi/image/width=1230,format=auto/main/random-collection/article/pc/img/18c22ceb-5028-4b36-b9c9-98376104f129.png" alt="상품 이미지" loading="lazy"/>
                    </LeftDiv>
                    <RightDiv>
                        <strong>🎄 어드벤트 캘린더 OPEN</strong>
                        <p >크리스마스를 특별하게 맞이하고 싶다면 "어드벤트 캘린더" 에 주목해보세요. 
                            하루에 하나씩 선물을 꺼내보며 다가오는 크리스마스의 설렘을 배로 느낄 수 있답니다. 
                            다양한 테마의 어드벤트 캘린더와 함께 다가올 크리스마스를 맞이해요!
                        </p>
                    </RightDiv>
                </a>
                <ListWrapper>
                    <ul>
                        {datas.randomLists.map((list) => (
                            <li onClick={() => navigate(`/product/${list.id}`, {state: list})} key={list.id} className='list' href={`/product/${list.id}`} >
                                <a className='imgWrapper' href={`/product/${list.id}`} >
                                    <img src={list.url} alt="상품이미지" loading="lazy"/>
                                </a>
                                <a className='product' href={`/product/${list.id}`}>
                                    <p>{list.name}</p>
                                    <div>
                                        {list.discount && <div className='discountPercent'>{list.discount}%</div>}
                                        <span className='price'>
                                            {list.price}
                                            <span className='won'> 원</span>
                                        </span>
                                        
                                    </div>
                                </a>
                                <div>
                                    <CartButton type='button'>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"/>
                                    </CartButton>
                                </div>
                            </li>
                        ))}                    
                    </ul>
                    <a className='viewAll' href="https://www.kurly.com/collections/adventcalendar">
                        전체보기
                    </a>
                    <div></div>
                </ListWrapper>
            </div>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    > div{
        width: 1050px;
        margin: 0px auto;
        padding: 40px 0px;
    }
    > div > a{
        display: flex;
        padding-top: 40px;
    }
    @media screen and (max-width: 820px){  /* Pad */
        max-width: 820px;
        > div{
            width: 100%;
            margin: 0;
        }
        .main{
            flex-direction: column;
            width: 820px;
        }
    }
`;
const LeftDiv = styled.div`
    overflow: hidden;
    flex: 0 0 615px;
    height: 308px;
    margin-right: 36px;
    > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-color: rgb(238, 238, 238);
        transition: all 0.5s ease-in-out 0s;
    }
    > img:hover{
        transform: scale(1.02);
    }
    @media screen and (max-width: 820px){  /* Pad */
        width: 820px;
        height: 430px;
        text-align: center;
        img{
            width: 70%;
            height: 70%;
        }
    }
`;
const RightDiv = styled.div`
    letter-spacing: -0.2px;
    > strong{
        display: block;
        font-weight: 500;
        font-size: 28px;
        line-height: 40px;
        color: rgb(51, 51, 51);
    }
    > p{
        padding-top: 23px;
        font-size: 16px;
        color: rgb(76, 76, 76);
        line-height: 26px;
        overflow: hidden;
        word-break: break-all;
        white-space: normal;
    }
    @media screen and (max-width: 820px){  /* Pad */
        width: 820px;
        > strong {
            width: 820px;
            text-align: center;
        }
        > p {
            margin: 0 30px;
        }
    }
        
`;
const ListWrapper = styled.div`
    padding: 12px 0 20px;
    > ul{
        display: flex;
        flex-wrap: wrap;
    }
    .list{
        margin-left: auto;
        display: flex;
        flex: 0 0 507px;
        padding-top: 24px;
    }
    .imgWrapper{
        overflow: hidden;
        flex: 0 0 72px;
        height: 72px;
        margin-right: 20px;
    }
    .imgWrapper img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.5s ease-in-out 0s;
        background-color: rgb(238, 238, 238);
    }
    .imgWrapper img:hover{
        transform: scale(1.02);
    }
    .product{
        flex: 0 0 311px;
    }
    .product p{
        color: rgb(51, 51, 51);
        width: 295px;
        padding-top: 9px;
        font-size: 16px;
        line-height: 23px;
        cursor: pointer;
        overflow: hidden;
        word-break: break-all;
        white-space: normal;
    }
    .discountPercent{
        font-weight: 800;
        font-size: 16px;
        line-height: 24px;
        white-space: nowrap;
        letter-spacing: -0.5px;
        margin-right: 7px;
        color: rgb(250, 98, 47);
    }
    .price{
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: rgb(51, 51, 51);
        white-space: nowrap;
    }
    .won{
        font-size: 16px;
        line-height: 24px;
        margin-left: -4px;
        font-weight: 400;
    }
    .viewAll{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 516px;
        height: 56px;
        margin: 52px auto 0px;
        border: 1px solid rgb(221, 221, 221);
        border-radius: 3px;
        font-size: 16px;
        color: rgb(0, 0, 0);
        line-height: 20px;
        letter-spacing: -0.25px;
        cursor: pointer;
    }
    .viewAll::after{
        content: "";
        width: 20px;
        height: 20px;
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyMHYyMEgweiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJtOCAxNSA1LTQuODg2TDguMTczIDUiLz4KICAgIDwvZz4KPC9zdmc+Cg==) 50% 50% no-repeat;
    }
    @media screen and (max-width: 820px){  /* Pad */
        width: 820px;
        > ul{ 
            width: 90%;
            margin: 0 auto;
        }
        li{
            margin: 0 auto;
        }
    }
`;

const CartButton = styled.button`
    width: 104px;
    height: 36px;
    margin-top: 18px;
    padding: 0px 0px 1px 49px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 4px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iIzMzMyIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxwYXRoIGQ9Ik0xLjUzNiAyLjdoMi4zOThsMS44MzUgNy45MDloNy44OGwxLjY1MS02LjI1SDQuODdNMTIuODU5IDE0LjkzM2ExLjEzNCAxLjEzNCAwIDEgMCAwLTIuMjY3IDEuMTM0IDEuMTM0IDAgMCAwIDAgMi4yNjd6TTYuNDk0IDE0LjkzM2ExLjEzNCAxLjEzNCAwIDEgMCAwLTIuMjY3IDEuMTM0IDEuMTM0IDAgMCAwIDAgMi4yNjd6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=) 29px 50% no-repeat;
    text-align: left;
    position: static;
    img{
        display: none;
    }
    ::after{
        content: "담기";
        font-size: 13px;
        line-height: 20px;
    }
`;