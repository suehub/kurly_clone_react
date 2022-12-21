import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { CartLists } from '../recoil/CartList';

export default function Cart() {

    const carts = useRecoilValue(CartLists);
    const product = carts.filter((arr, index, callback) => index === callback.findIndex(p => p.id === arr.id));  // 중복 값 제거

    const [count, setCount] = useState(1);  // 상품 개수 

    console.log(product);
    product.map((p) => {
        console.log(p.name);
    })

    // let price = Number((product.price||"").split(',').join(""));
    // let totalPrice = (price * (100-product.discount) * 0.01).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
        <Conatiner>
            <Title>장바구니</Title>
            <div></div>
            <Wrapper>
                <List>
                    <div className='select'>
                        <div>
                            <Label>
                                <input type="checkbox" />
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Ni4wMDAwMDAsIC0xMDkwLjAwMDAwMCkgdHJhbnNsYXRlKDEwMC4wMDAwMDAsIDkzNi4wMDAwMDApIHRyYW5zbGF0ZSg2MC4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iIzVGMDA4MCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" />
                                <span>전체선택 ({product.length}/{product.length})</span>
                            </Label>
                            <span></span>
                            <button>선택삭제</button>
                        </div>
                    </div>
                    <div className='list'>
                        <div>
                            <h4>
                                <span>
                                    <span>
                                        <span></span>
                                    </span>
                                    냉장 상품
                                </span>
                                <button>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iN2EwMnFxZzNqYSIgZD0iTTExIDEyaDl2OSIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMCAwaDMwdjMwSDB6Ii8+CiAgICAgICAgPHVzZSBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDE1LjUgMTYuNSkiIHhsaW5rOmhyZWY9IiM3YTAycXFnM2phIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="접기" />
                                </button>
                            </h4>
                            <ul>
                                {product.map((p) => {
                                    <CartProduct key={p.id}>
                                        <Label>
                                            <input type="checkbox" />
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Ni4wMDAwMDAsIC0xMDkwLjAwMDAwMCkgdHJhbnNsYXRlKDEwMC4wMDAwMDAsIDkzNi4wMDAwMDApIHRyYW5zbGF0ZSg2MC4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iIzVGMDA4MCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" />
                                            <span></span>
                                        </Label>
                                        <a>
                                            <span style={{"background-image": `url(${p.url})`}}></span>
                                        </a>
                                        <div className='name'>
                                            <a>
                                                <p>{p.name}</p>
                                            </a>
                                            <div></div>
                                        </div>
                                        <div className='count'>
                                            <button onClick={() =>( count < 1) ? setCount(count) : setCount(count-1)} type="button"></button>
                                            <div className="count countNumber">{count}</div>
                                            <button onClick={() => setCount(count+1)} type="button"></button>
                                        </div>
                                        <div className='price'>
                                            <span>{p.price}원</span>
                                            <span>{p.price}원</span>
                                        </div>
                                        <button className='button'>
                                            <span></span>
                                        </button>
                                    </CartProduct>
                                })}
                            </ul>
                            <h4>
                                <span>
                                    <span>
                                        <span className='ice'></span>
                                    </span>
                                    냉동 상품
                                </span>
                                <button>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iN2EwMnFxZzNqYSIgZD0iTTExIDEyaDl2OSIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMCAwaDMwdjMwSDB6Ii8+CiAgICAgICAgPHVzZSBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDE1LjUgMTYuNSkiIHhsaW5rOmhyZWY9IiM3YTAycXFnM2phIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="접기" />
                                </button>
                            </h4>
                            <ul></ul>
                            <h4>
                                <span>
                                    <span>
                                        <span className='sun'></span>
                                    </span>
                                    상온 상품
                                </span>
                                <button>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iN2EwMnFxZzNqYSIgZD0iTTExIDEyaDl2OSIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMCAwaDMwdjMwSDB6Ii8+CiAgICAgICAgPHVzZSBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDE1LjUgMTYuNSkiIHhsaW5rOmhyZWY9IiM3YTAycXFnM2phIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="접기" />
                                </button>
                            </h4>
                            <ul></ul>
                        </div>
                    </div>
                    <div className='select'>
                        <div>
                            <Label>
                                <input type="checkbox" />
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Ni4wMDAwMDAsIC0xMDkwLjAwMDAwMCkgdHJhbnNsYXRlKDEwMC4wMDAwMDAsIDkzNi4wMDAwMDApIHRyYW5zbGF0ZSg2MC4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iIzVGMDA4MCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" />
                                <span>전체선택 ({product.length}/{product.length})</span>
                            </Label>
                            <span></span>
                            <button>선택삭제</button>
                        </div>
                    </div>
                </List>
                <Order>
                    <div>
                        <div className='address'>
                            <h3>배송지</h3>
                            <div>
                                <p>경기 고양시 일산동구 00로 000 0000동 000호</p>
                                <div>
                                    <span>샛별배송</span>
                                </div>
                                <button>
                                    <span>배송지 변경</span>
                                </button>
                            </div>
                        </div>
                        <div className='payment'>
                            <div className='productPrice'>
                                <span>상품금액</span>
                                <span>
                                    17,050<span>원</span>
                                </span>
                            </div>
                            <div className='discountPrice'>
                                <span>상품할인금액</span>
                                <span>
                                    -590<span>원</span>
                                </span>
                            </div>
                            <div className='shipping'>
                                <span>배송비</span>
                                <span>
                                    +3,000<span>원</span>
                                </span>
                            </div>
                            <p>
                                23,540
                                <strong>무료배송</strong>
                            </p>
                            <div className='totalPrice'>
                                <span>결제예정금액</span>
                                <span>
                                    <strong>19,460</strong>
                                    <span>원</span>
                                </span>
                            </div>
                            <div className='accumulate'>
                                <span>적립</span>
                                최대
                                <strong>12원 적립</strong>
                                <span>일반 0.1%</span>
                            </div>
                        </div>
                        <div className='orderButton'>
                            <button>
                                <span>주문하기</span>
                            </button>
                            <ul>
                                <li>쿠폰/적립금은 주문서에서 사용 가능합니다</li>
                                <li>[주문완료] 상태일 경우에만 주문 취소 가능합니다.</li>
                                <li>[마이컬리 - 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.</li>
                                <li>쿠폰, 적립금 사용 금액을 제외한 실 결제 금액 기준으로 최종 산정됩니다.</li>
                                <li>상품별로 적립금 지급 기준이 다를 수 있습니다. (상품 상세 페이지에서 확인 가능합니다)</li>
                            </ul>
                        </div>
                    </div>
                </Order>
            </Wrapper>
        </Conatiner>
    )
}

const Conatiner = styled.div`
    width: 1050px;
    margin: 0 auto;
    padding-bottom: 80px;
    color: #333;
`;
const Title = styled.h2`
    padding: 50px 0px 48px;
    font-weight: 500;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    letter-spacing: -0.5px;
`;
const List = styled.div`
    width: 742px;
    .select{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 18px 10px 16px 2px;
        font-size: 14px;
        line-height: 26px;
        font-weight: 500;
    }
    .select div > span{
        display: inline-block;
        width: 1px;
        height: 14px;
        background: rgb(221, 221, 221);
        margin: 6px 21px 0px 22px;
        vertical-align: top;
    }
    .select div > button{
        font-size: 14px;
    }
    .list{
        border-bottom: 1px solid rgb(244, 244, 244);
    }
    h4{
        display: flex;
        justify-content: space-between;
        height: 60px;
        padding: 15px 5px 15px 0px;
        border-top: 1px solid rgb(51, 51, 51);
        font-weight: 700;
        font-size: 18px;
        line-height: 26px;
    }
    h4 > span{
        display: flex;
        align-items: center;
        font-weight: 500;
    }
    h4 > span > span{
        margin-right: 8px;
        vertical-align: top;
    }
    h4 > span > span > span{
        vertical-align: top;
        width: 30px;
        height: 30px;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgzMHYzMEgweiIvPgogICAgICAgIDxnIHN0cm9rZT0iIzVFQzQ5RSIgc3Ryb2tlLXdpZHRoPSIxLjUiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTQuNjI3IDI1LjI1NWE3LjYyNyA3LjYyNyAwIDAgMCA3LjYyNi03LjYyN2MwLTIuODA4LTIuNTQyLTcuMTg0LTcuNjI2LTEzLjEyOEM5LjU0MiAxMC40NDQgNyAxNC44MiA3IDE3LjYyOGE3LjYyNyA3LjYyNyAwIDAgMCA3LjYyNyA3LjYyN3oiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTE0LjYyNyAyMC42NmEzLjgxMyAzLjgxMyAwIDAgMCAzLjgxMy0zLjgxMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K);
        display: inline-block;
        background-size: cover;
        background-position: center center;
    }
    h4 > button{
        border: 0px;
        background: none;
        outline: none;
    }
    h4 > button > img{
        width: 30px;
        height: 30px;
    }
    .ice{
            background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgzMHYzMEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xNS4wNDQgNGEuNzUuNzUgMCAwIDEgLjc0NC42NDhsLjAwNi4xMDJ2Mi42ODlsMS43Mi0xLjcyYS43NS43NSAwIDAgMSAuOTc3LS4wNzJsLjA4NC4wNzNhLjc1Ljc1IDAgMCAxIC4wNzIuOTc2bC0uMDcyLjA4NC0yLjc4IDIuNzgtLjAwMSA0LjM5IDMuODAyLTIuMTk0IDEuMDE4LTMuNzk4YS43NS43NSAwIDAgMSAxLjQ3LjI3OWwtLjAyLjEwOS0uNjMgMi4zNSAyLjMyOS0xLjM0NmEuNzUuNzUgMCAwIDEgLjgzNCAxLjI0M2wtLjA4NC4wNTctMi4zMjggMS4zNDQgMi4zNDguNjNhLjc1Ljc1IDAgMCAxIC41NS44MDlsLS4wMi4xMWEuNzUuNzUgMCAwIDEtLjgxLjU1bC0uMTA4LS4wMi0zLjc5OC0xLjAxOC0zLjgwMyAyLjE5NCAzLjgwMiAyLjE5NiAzLjc5OS0xLjAxOGEuNzUuNzUgMCAwIDEgLjQ5MyAxLjQxM2wtLjEwNS4wMzYtMi4zNS42MyAyLjMzIDEuMzQ0YS43NS43NSAwIDAgMS0uNjU5IDEuMzQ0bC0uMDkxLS4wNDQtMi4zMjgtMS4zNDQuNjI4IDIuMzQ4YS43NS43NSAwIDAgMS0uNDI1Ljg4MmwtLjEwNS4wMzdhLjc1Ljc1IDAgMCAxLS44ODItLjQyNmwtLjAzNy0uMTA1LTEuMDE3LTMuNzk3LTMuODAzLTIuMTk3djQuMzkxbDIuNzggMi43OGEuNzUuNzUgMCAwIDEtLjk3NiAxLjEzNGwtLjA4NC0uMDczLTEuNzItMS43MnYyLjY5YS43NS43NSAwIDAgMS0xLjQ5My4xMDJsLS4wMDctLjEwMnYtMi42ODhsLTEuNzIgMS43MThhLjc1Ljc1IDAgMCAxLS45NzYuMDczbC0uMDg0LS4wNzNhLjc1Ljc1IDAgMCAxLS4wNzMtLjk3NmwuMDczLS4wODQgMi43OC0yLjc4di00LjM5MWwtMy44MDEgMi4xOTUtMS4wMTggMy43OThhLjc1Ljc1IDAgMCAxLTEuNDctLjI3OWwuMDItLjEwOS42My0yLjM1LTIuMzI5IDEuMzQ2YS43NS43NSAwIDAgMS0uODM1LTEuMjQzbC4wODUtLjA1NyAyLjMyOC0xLjM0NC0yLjM0OC0uNjNhLjc1Ljc1IDAgMCAxLS41NTEtLjgwOWwuMDItLjExYS43NS43NSAwIDAgMSAuODEtLjU1bC4xMS4wMiAzLjc5NyAxLjAxOCAzLjgwMi0yLjE5NS0zLjgwMS0yLjE5NS0zLjc5OSAxLjAxOGEuNzUuNzUgMCAwIDEtLjQ5My0xLjQxM2wuMTA1LS4wMzYgMi4zNS0uNjMtMi4zMy0xLjM0NGEuNzUuNzUgMCAwIDEgLjY1OS0xLjM0NGwuMDkxLjA0NCAyLjMyOCAxLjM0NC0uNjI4LTIuMzQ4YS43NS43NSAwIDAgMSAuNDI1LS44ODJsLjEwNS0uMDM3YS43NS43NSAwIDAgMSAuODgyLjQyNmwuMDM3LjEwNSAxLjAxNyAzLjc5NyAzLjgwMiAyLjE5NnYtNC4zOWwtMi43OC0yLjc4YS43NS43NSAwIDAgMSAuOTc3LTEuMTM0bC4wODQuMDczIDEuNzIgMS43MTlWNC43NWEuNzUuNzUgMCAwIDEgLjc1LS43NXoiIGZpbGw9IiM2RkFGRjMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K);
    }
    .sun{
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgzMHYzMEgweiIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNSA0KSIgc3Ryb2tlPSIjRkY5QjVDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjExLjUiIGN5PSIxMSIgcj0iNiIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xMS41IDB2Mk0xOS4yNzggMy4yMjJsLTEuNDE0IDEuNDE0TTIyLjUgMTFoLTJNMTkuMjc4IDE4Ljc3OGwtMS40MTQtMS40MTRNMTEuNSAyMnYtMk0zLjcyMiAxOC43NzhsMS40MTQtMS40MTRNLjUgMTFoMk0zLjcyMiAzLjIyMmwxLjQxNCAxLjQxNCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==);
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

const CartProduct = styled.li`
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

const Order = styled.div`
    position: relative;
    width: 284px;
    min-height: 942px;
    > div{
        width: 284px;
        padding-top: 60px;
        position: sticky;
        top: 60px;
        right: 0px;
    }
    .address{
        padding: 23px 19px 20px;
        border-width: 1px 1px 0px;
        border-top-style: solid;
        border-right-style: solid;
        border-left-style: solid;
        border-top-color: rgb(242, 242, 242);
        border-right-color: rgb(242, 242, 242);
        border-left-color: rgb(242, 242, 242);
        border-image: initial;
        border-bottom-style: initial;
        border-bottom-color: initial;
    }
    .address > h3{
        color: #333;
        padding-left: 24px;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        background: url(https://res.kurly.com/pc/service/cart/2007/ico_location.svg) 0px 50% / 20px 20px no-repeat;
    }
    .address > div{
        padding-top: 12px;
        font-size: 16px;
        line-height: 24px;
        color: rgb(51, 51, 51);
    }
    .address > div > p{
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        word-break: break-word;
        white-space: pre-wrap;
    }
    .address > div > div{
        padding: 7px 0px 12px;
        font-size: 14px;
    }
    .address > div > div > span{
        color: rgb(95, 0, 128);
        font-size: 14px;
    }
    .address > div > button{
        display: block;
        padding: 0px 10px;
        text-align: center;
        overflow: hidden;
        width: 100%;
        height: 36px;
        border-radius: 3px;
        color: rgb(95, 0, 128);
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(95, 0, 128);
    }
    .address > div > button > span{
        font-size: 12px;
        font-weight: 500;
    }
    .payment{
        padding: 19px 18px 18px 20px;
        border: 1px solid rgb(242, 242, 242);
        background-color: rgb(250, 250, 250);
    }
    .productPrice{
        display: flex;
        justify-content: space-between;
        padding-top: 0px;
    }
    .productPrice > span:first-of-type, .discountPrice > span:first-of-type, .shipping > span:first-of-type, .totalPrice > span:first-of-type{
        width: 100px;
        font-size: 16px;
        line-height: 24px;
        white-space: nowrap;
    }
    .productPrice > span:last-of-type, .discountPrice > span:last-of-type, .shipping > span:last-of-type, .totalPrice > span:last-of-type{
        font-size: 18px;
        line-height: 24px;
        text-align: right;
    }
    .productPrice > span:last-of-type > span, .discountPrice > span:last-of-type > span, .shipping > span:last-of-type > span, .totalPrice > span:last-of-type > span{
        padding-left: 2px;
        font-size: 16px;
        font-weight: normal;
        vertical-align: bottom;
    }
    .discountPrice, .shipping{
        display: flex;
        justify-content: space-between;
        padding-top: 12px;
    }
    .payment > p{
        display: block;
        padding-top: 2px;
        color: rgb(95, 0, 128);
        font-size: 12px;
        line-height: 18px;
        text-align: right;
    }
    .payment > p > strong{
        font-weight: 700;
    }

    .totalPrice{
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
        padding-top: 18px;
        border-top: 1px solid rgb(244, 244, 244);
    }
    .accumulate{
        padding-top: 15px;
        font-size: 12px;
        line-height: 18px;
        text-align: right;
    }
    .accumulate > span:first-of-type{
        display: inline-block;
        height: 18px;
        margin-right: 4px;
        padding: 0px 6px;
        border: 1px solid rgb(255, 191, 1);
        border-radius: 9px;
        background-color: rgb(255, 191, 0);
        font-weight: 500;
        font-size: 10px;
        line-height: 16px;
        color: rgb(255, 255, 255);
    }
    .accumulate > strong{
        font-weight: 500;
    }
    .accumulate > span:last-of-type{
        display: inline-block;
        margin-left: 4px;
        font-size: 11px;
        color: rgb(102, 102, 102);
    }
    .orderButton{
        padding-top: 20px;
    }
    .orderButton > button{
        display: block;
        padding: 0px 10px;
        text-align: center;
        overflow: hidden;
        width: 100%;
        height: 56px;
        border-radius: 3px;
        color: rgb(255, 255, 255);
        background-color: rgb(95, 0, 128);
        border: 0px none;
        font-weight: 500;
    }
    .orderButton > button > span{
        display: inline-block;
        font-size: 16px;
        font-weight: 500;
    }
    .orderButton > ul{
        padding: 16px 0px;
    }
    .orderButton > ul > li{
        padding-top: 4px;
        color: rgb(102, 102, 102);
        font-size: 12px;
        line-height: 16px;
        padding-left: 7px;
    }
    .orderButton > ul > li:before{
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: 6px 0px 0px -6px;
        background: rgb(153, 153, 153);
        vertical-align: top;
        border-radius: 50%;
        content: "";
    }
`;