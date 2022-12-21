import React from 'react'
import styled from 'styled-components'
import ButtonToTop from '../components/ButtonToTop'
import InstaReview from '../components/InstaReview'
import LineBanner from '../components/LineBanner'
import MainBanner from '../components/MainBanner'
import RandomCollection from '../components/RandomCollection'
import RecommandProduct from '../components/RecommandProduct'

export default function Contents() {

    const bannerData = [
        {
            url: "https://www.kurly.com/shop/event/kurlyEvent.php?htmid=event/2022/1201/kurlystmas_market",
            src: "https://product-image.kurly.com/banner/random-band/pc/img/5e2f24a8-0cfc-416b-9157-553346e38cfa.jpg"
        },
        {
            url: "https://www.kurly.com/shop/board/view.php?id=notice&no=64",
            src: "https://img-cf.kurly.com/banner/random-band/pc/img/8ded70f9-bca2-4a70-b290-beb571ff82ab"
        },
        {
            url: "https://www.kurly.com/shop/event/kurlyEvent.php?htmid=event/2022/1212/tving",
            src: "https://product-image.kurly.com/banner/random-band/pc/img/6d3ce45b-ffc4-436b-8a2e-73ab30fa8d10.jpg"
        }
    ];

    return (
        <Container>
            <MainBanner/>
            <RecommandProduct/>
            <LineBanner banner = {bannerData[0]}/>
            <RandomCollection/>
            <LineBanner banner = {bannerData[2]}/>
            <RecommandProduct/>
            <LineBanner banner = {bannerData[1]}/>
            <InstaReview/>
            <ButtonToTop/>
        </Container>
    )
}

const Container = styled.div`
@media screen and (max-width: 820px){  /* Pad */
    width: 820px;
}
`