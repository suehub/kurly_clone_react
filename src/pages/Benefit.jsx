import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import ButtonToTop from '../components/ButtonToTop';
import axios from 'axios';

export default function Benefit() {

    const [imgDatas, setImgDatas] = useState([]);

    useEffect(() => {
        getImgData();
      }, []);
    
      const getImgData = async () => {
        const result = await axios({
          method: "GET",
          url: "/"
        })
        
        setImgDatas(result.data.benefitImgs);  
      }
    
    return (
        <div>
            <Ul>
                {imgDatas.map((img) => (
                    <li key={img.id} style={{"margin-bottom": "10px","background-color": "rgb(244, 244, 244)"}}>
                        <a href={img.url}>
                            <img src={img.src} alt={img.alt} style={{"display": "block","width": "100%","height": "200px","object-fit": "cover"}}/>
                        </a>
                    </li>
                ))} 
            </Ul>
            <ButtonToTop/>
        </div>
    )
}

const Ul = styled.ul`
    width: 1050px;
    margin: 0px auto;
    padding-top: 0px;
`;
