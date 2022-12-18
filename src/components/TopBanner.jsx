import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function TopBanner() {
  return (
        <Conatiner>
            <div>
                <Link to="/login">
                    <div>지금 가입하고 인기상품 <b>100원</b>에 받아가세요!</div>
                </Link>
                <button type="button"></button>
            </div>
        </Conatiner>  
    )
}

const Conatiner = styled.div`
    position: relative;
    text-align: center;
    transition: margin 0.4s linear 0s;
    min-width: 1050px;
    border-bottom: 0px;
    background: rgb(95, 0, 128);
    > div{
        position: relative;
        width: 1050px;
        margin: 0px auto;
    }
    > div > a{
        display: block;
        font-size: 14px;
        line-height: 42px;
        color: rgb(255, 255, 255);
        height: 42px;
    }
    > div > button {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 42px;
        height: 42px;
        background-position: 0px 0px;
        background-size: 42px 42px;
        background-image: url(https://res.kurly.com/pc/ico/1908/ico_close_fff_84x84.png);
    }
`;