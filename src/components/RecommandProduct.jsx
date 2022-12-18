import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import products from '../db/products.json';
import MainProductCard from './MainProductCard';

export default function RecommandProduct() {


    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: (<PrevButton/>),
        nextArrow: (<NextButton/>)
    };

    return (
        <Container>
            <div>
                <Title>
                    <div>
                        <span>이 상품 어때요?</span>
                    </div>
                </Title>
                <ProductLists>
                    <div className="SliderWrapper">
                        <StyledSlider {...settings}> 
                            {products.map(product => (
                                <MainProductCard init={product} />
                            ))}
                        </StyledSlider>
                    </div>
                </ProductLists>
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
`;
const Title = styled.div`
    margin-bottom: 27px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div{
        position: relative;
        display: flex;
        padding: 8px 0px 8px 8px;
    }
    > div > span{
        color: rgb(51, 51, 51);
        font-size: 28px;
        line-height: 1.15;
        font-weight: 500;
    }
`;

const ProductLists = styled.div`
    position: relative;
    width: 1050px;
    margin: 0px auto;
    .sliderWrapper{
        overflow: hidden;
        width: 1050px
    }
    .slider{
        color: rgb(51, 51, 51);
        cursor: pointer;
        width: 249px;
    }
    .img{
        height: 320px;
        overflow: hidden;
        position: relative;
        background-color: rgb(245, 245, 245);
    }
    .img a > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.5s ease-in-out 0s;
    }
    .img a > img:hover{
        transform: scale(1.02);
    }
    
`;

const StyledSlider = styled(Slider)`
.slick-prev::before,
.slick-next::before {
  opacity: 0;
  display: none;
}
`;

const PrevButton = styled.div`
    position: absolute;
    z-index: 100;
    border: 0px;
    outline: 0px;
    width: 60px;
    height: 60px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGRlZnM+CiAgICAgICAgPGZpbHRlciB4PSItMTQlIiB5PSItMTQlIiB3aWR0aD0iMTI4JSIgaGVpZ2h0PSIxMjglIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOCAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiLz4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIxIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIyIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wMyAwIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIyIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMiIvPgogICAgICAgICAgICA8ZmVNb3JwaG9sb2d5IHJhZGl1cz0iLjUiIG9wZXJhdG9yPSJkaWxhdGUiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dTcHJlYWRPdXRlcjMiLz4KICAgICAgICAgICAgPGZlT2Zmc2V0IGluPSJzaGFkb3dTcHJlYWRPdXRlcjMiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIzIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wMiAwIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIzIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMyIvPgogICAgICAgICAgICA8ZmVNZXJnZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIxIi8+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMiIvPgogICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJzaGFkb3dNYXRyaXhPdXRlcjMiLz4KICAgICAgICAgICAgPC9mZU1lcmdlPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxjaXJjbGUgaWQ9ImIiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA1NSA1KSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGQ9Ik0zMi43MTUgMzguNjk5YTEgMSAwIDAgMS0xLjMxOS4wOThsLS4wOTUtLjA4Mi04LTcuODE3YTEgMSAwIDAgMS0uMTA4LTEuMzA2bC4wOC0uMDk2IDcuNzIzLTguMTgyYTEgMSAwIDAgMSAxLjUzNSAxLjI3NmwtLjA4LjA5Ni03LjA0OSA3LjQ2OSA3LjI5NyA3LjEzYTEgMSAwIDAgMSAuMDk4IDEuMzE5bC0uMDgyLjA5NXoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K) 50% 50% no-repeat;
    transition: background 0.5s ease 0s;
    top: calc(50% - 90px);
    left: 0px;
    transform: translate(-50%, -50%);
    cursor: pointer;
`;
const NextButton = styled.div`
    position: absolute;
    z-index: 100;
    border: 0px;
    outline: 0px;
    width: 60px;
    height: 60px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGRlZnM+CiAgICAgICAgPGZpbHRlciB4PSItMTQlIiB5PSItMTQlIiB3aWR0aD0iMTI4JSIgaGVpZ2h0PSIxMjglIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOCAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiLz4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIxIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIyIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wMyAwIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIyIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMiIvPgogICAgICAgICAgICA8ZmVNb3JwaG9sb2d5IHJhZGl1cz0iLjUiIG9wZXJhdG9yPSJkaWxhdGUiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dTcHJlYWRPdXRlcjMiLz4KICAgICAgICAgICAgPGZlT2Zmc2V0IGluPSJzaGFkb3dTcHJlYWRPdXRlcjMiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIzIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wMiAwIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIzIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMyIvPgogICAgICAgICAgICA8ZmVNZXJnZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIxIi8+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMiIvPgogICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJzaGFkb3dNYXRyaXhPdXRlcjMiLz4KICAgICAgICAgICAgPC9mZU1lcmdlPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxjaXJjbGUgaWQ9ImIiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA1NSA1KSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGQ9Ik0zMi43MTUgMzguNjk5YTEgMSAwIDAgMS0xLjMxOS4wOThsLS4wOTUtLjA4Mi04LTcuODE3YTEgMSAwIDAgMS0uMTA4LTEuMzA2bC4wOC0uMDk2IDcuNzIzLTguMTgyYTEgMSAwIDAgMSAxLjUzNSAxLjI3NmwtLjA4LjA5Ni03LjA0OSA3LjQ2OSA3LjI5NyA3LjEzYTEgMSAwIDAgMSAuMDk4IDEuMzE5bC0uMDgyLjA5NXoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K) 50% 50% no-repeat;
    transition: background 0.5s ease 0s;
    top: calc(50% - 90px);
    right: 13px;
    transform: translate(50%, -50%) rotate(180deg);
    cursor: pointer;
`;