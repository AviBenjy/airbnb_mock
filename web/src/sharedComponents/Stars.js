import React from 'react'
import styled from '@emotion/styled'

const Stars = (props) => {

    let {rating} = props

    const n = new Array(5).fill(0).map((n, i) => {
        return <Star key={i} rating={--rating} key={i+'a'} className='fas fa-star'></Star>
    })

    return (
        <Container>
            {n}
        </Container>
    )
}

export default Stars;

const Star = styled.i`
    color: ${p => p.rating >= 0 ? '#008489' : '#cdcdcd'};
`

const Container = styled.div`
    display: flex;
`