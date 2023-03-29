import React from "react";
import styled from "styled-components";
import { faker } from '@faker-js/faker';
function RatioImg({widthRatio, heightRatio}){
    
    const paddingTop = `${(heightRatio / widthRatio) * 100}%`;
    
    return(
        <RatioImaBlock  style={{ paddingTop }}>
          <img src={faker.image.cats()} alt="testImage"/>
        </RatioImaBlock>
    );
};

const RatioImaBlock = styled.div`
    width: 100%;
    position: relative;
    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }
`

export default RatioImg;