import React, { useState } from 'react';
import styled from 'styled-components';

export default function CartProduct(props) {

    const product = props.state;

    console.log(product);

    const [count, setCount] = useState(1);  // 상품 개수 

    return (
        <Conatiner key={product.id}>
            <Label>
                <input type="checkbox" />
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Ni4wMDAwMDAsIC0xMDkwLjAwMDAwMCkgdHJhbnNsYXRlKDEwMC4wMDAwMDAsIDkzNi4wMDAwMDApIHRyYW5zbGF0ZSg2MC4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iIzVGMDA4MCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" />
                <span></span>
            </Label>
            <a>
                <span style={{"background-image": `url(${product.url})`}}></span>
            </a>
            <div className='name'>
                <a>
                    <p>{product.name}</p>
                </a>
                <div></div>
            </div>
            <div className='count'>
                <button onClick={() =>( count < 1) ? setCount(count) : setCount(count-1)} type="button"></button>
                <div className="count countNumber">{count}</div>
                <button onClick={() => setCount(count+1)} type="button"></button>
            </div>
            <div className='price'>
                <span>{product.price}원</span>
                <span>{product.price}원</span>
            </div>
            <button className='button'>
                <span></span>
            </button>
        </Conatiner>
    )
}

const Conatiner = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    padding: 20px 0px;
    > a{
        display: inline-block;
        width: 60px;
        height: 78px;
        margin-right: 20px;
        background: url(https://res.kurly.com/kurly/bg/no_img.svg) center center no-repeat rgb(245, 245, 245);
    }
    > a > span{
        display: block;
        height: 100%;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }
    .name{
        display: flex;
        flex-direction: column;
        width: 345px;
        margin-right: 20px;
        overflow: hidden;
        white-space: nowrap;
        word-break: break-all;
    }
    .name p{
        max-height: 54px;
        padding-top: 8px;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        display: -webkit-box;
        overflow: hidden;
        word-break: break-all;
        white-space: normal;
    }
    .name > div{
        display: flex;
        margin-top: 10px;
    }
    .count{
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid rgb(221, 223, 225);
        width: 88px;
        border-radius: 3px;
    }
    .count button:first-of-type{
        display: inline-flex;
        width: 28px;
        height: 28px;
        border: none;
        font-size: 1px;
        color: transparent;
        background-size: cover;
        background-color: transparent;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iI0RERCIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=);
        vertical-align: top;
    }
    .count > div{
        border: none;
        display: inline-flex;
        overflow: hidden;
        white-space: nowrap;
        justify-content: center;
        font-size: 14px;
        font-weight: 600;
        color: rgb(51, 51, 51);
        text-align: center;
        width: 31px;
        height: 28px;
        line-height: 28px;
    }
    .count button:last-of-type{
        display: inline-flex;
        width: 28px;
        height: 28px;
        border: none;
        font-size: 1px;
        color: transparent;
        background-size: cover;
        background-color: transparent;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K);
        vertical-align: top;
    }
    .price{
        display: flex;
        flex-direction: column;
        width: 127px;
        text-align: right;
        word-break: break-all;
    }
    .price > span:first-of-type{
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: rgb(51, 51, 51);
    }
    .price > span:last-of-type{
        font-size: 14px;
        line-height: 24px;
        color: rgb(181, 181, 181);
        text-decoration: line-through;
        padding-top: 4px;
    }
    .button{
        width: 30px;
        height: 30px;
        margin-left: 9px;
    }
    .button > span{
        width: 30px;
        height: 30px;
        display: inline-block;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMSA5Ljc2MiAyMC4yMzggOSAxNSAxNC4yMzggOS43NjIgOSA5IDkuNzYyIDE0LjIzOCAxNSA5IDIwLjIzOGwuNzYyLjc2MkwxNSAxNS43NjIgMjAuMjM4IDIxbC43NjItLjc2MkwxNS43NjIgMTV6IiBmaWxsPSIjQ0NDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==);
        background-size: cover;
        background-position: center center;
    }
`;

const Label = styled.label`
    display: inline-flex;
    font-size: 14px;
    line-height: 26px;
    padding: 0px;
    color: rgb(51, 51, 51);
    position: relative;
    vertical-align: top;

     input{
        overflow: hidden;
        position: absolute;
        clip: rect(0px, 0px, 0px, 0px);
        clip-path: inset(50%);
        width: 1px;
        height: 1px;
    }
     img{
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-right: 12px;
    }
     span{
        font-size: 14px;
        line-height: 26px;
    }
`;