import React from 'react'
import styled from 'styled-components'
import imgs from '../db/data.json';

export default function Benefit() {
  return (
    <div>
        <Ul>
            {imgs.benefitImgs.map((img) => (
                <li key={img.id} style={{"margin-bottom": "10px","background-color": "rgb(244, 244, 244)"}}>
                    <a href={img.url}>
                        <img src={img.src} alt={img.alt} style={{"display": "block","width": "100%","height": "200px","object-fit": "cover"}}/>
                    </a>
                </li>
            ))} 
        </Ul>
    </div>
  )
}

const Ul = styled.ul`
    width: 1050px;
    margin: 0px auto;
    padding-top: 0px;
`;
