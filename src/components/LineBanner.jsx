import React from 'react';
import styled from 'styled-components';

export default function LineBanner({ banner }) {
    return (
        <Container>
            <div>
                <a href={banner.url}>
                    <img src={banner.src} alt=""/>
                </a>
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
        position: relative;
        display: block;
        overflow: hidden;
        height: 140px;
    }
    > div > a > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media screen and (max-width: 820px){  /* Pad */
        width: 100%;
        div{
            width: 820px;
        }
        > div > a > img{
            width: 100%;
            height: 80%;
            object-fit: cover;
        }
    }
`;
