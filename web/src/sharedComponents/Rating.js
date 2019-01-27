import React from 'react'
import styled from '@emotion/styled'
import Stars from './Stars';
import { calcRating } from '../utils/calcRating';


//Stars should get a 'rating' prop
const Rating = (props) => {
    const {reviews} = props  
    return (
        <Container>
            <Title>{reviews && reviews.length} Reviews</Title>
            <Stars rating={calcRating(reviews)}></Stars>
        </Container>
    )
}

export default Rating;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`

`