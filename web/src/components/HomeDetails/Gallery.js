import React from 'react';
import styled from '@emotion/styled';


const Gallery = (props) => {
    const {images=[]} = props
    return(
            <ImageContainer url={images[0]}></ImageContainer>
          )
}

export default Gallery;

const ImageContainer = styled.div`
    background-image: url('${p => p.url}');
    background-position: center;
    width: 100%;
    padding-top: 80px;
    border-bottom: 1px black solid;
    border-top: 1px black solid;
    height: 300px;
    transition: 1s;
    &:hover {
        transform: scale(1.1);
    };
`