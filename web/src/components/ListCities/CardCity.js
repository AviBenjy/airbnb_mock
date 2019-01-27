import React from 'react'
import { Link } from "react-router-dom"
import styled from '@emotion/styled'


const CardCity = (props) => {

    const {address={country:''}, price, images=[]} = props
    return (
      <Link to={`/homes?country=${address.country}`}>
        <Card url={images[0]} >
          <Info>
            <City>{address.city}</City>
            <Country>{address.country}</Country>
            <AveragePrice>${price}/Night average</AveragePrice>
          </Info>
          <GradientLowerImage/>
        </Card>
      </Link>
    )
    
}

export default CardCity



const GradientLowerImage = styled.div`
    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
    position: absolute;
    bottom: 0;
    height: 60%;
    width: 100%;
    opacity: 0.6;
    border-radius: 3px;
`

const Info = styled.div`
    padding: 0 24px 36px 24px;
    position:absolute;
    bottom:0;
    right:0;
    left:0;
    z-index:1;
    width: 100%;
`

const Country = styled.h5`
    margin: 0 auto;
    color:white;
    display:block;
    text-align: center;
    padding: 10px 0;
    font-size: 18px;
    font-weight: 800;
`

const AveragePrice = styled.h4`
    margin: 0;
    color: white;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
`

const Card = styled.div`
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
    background-image: url("${p => p.url}");
    background-repeat: no-repeat;
    background-size: cover;
    position:relative;
    border-radius: 3px;
    height: 100%;
    width: 100%;
    transition: 0.5s;
    &:hover {
        text-decoration: none;
        transform: scale(1.03);
    }
`

const City = styled.h2`
    margin: 0 auto;
    color:white;
    font-size: 26px;
    font-weight: 700;
    padding-bottom: 8px;
    text-align: center;
`



