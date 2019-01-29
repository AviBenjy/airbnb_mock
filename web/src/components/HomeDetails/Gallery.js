import React from 'react';
import styled from '@emotion/styled';


const Gallery = (props) => {
    const {images=[]} = props
    return(
            <Container>
                <ImageContainer url={images[0]}></ImageContainer>
                <SmallImage url={images[1]}></SmallImage>
                <SmallImage url={images[2]}></SmallImage>
            </Container>
          )
}

export default Gallery;

const Container = styled.div`
    position: relative;
    display: flex;
    margin-top:100px;
`

const ImageContainer = styled.div`
    background-image: url('${p => p.url}');
    background-position: center;
    width: 50%;
    padding-top: 80px;
    border-bottom: 1px black solid;
    border-top: 1px black solid;
    height: 300px;
    transition: 1s;
    &:hover {
        transform: scale(1.1);
    };
`

const SmallImage = styled.div`
    width:25%;
    height:300px;
    background-image: url('${p => p.url}');
    background-size: cover;
    transition: 1s;
    &:hover {
        transform: scale(1.1);
    };
`