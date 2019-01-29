import React from 'react'
import styled from '@emotion/styled'
import CardCity from './CardCity'
import CardHolder from '../../sharedComponents/CardHolder'


const ListCities = (props) => {
    const {homes} = props
    let key = 0
    const cards = homes.map( (home) => (
        <CardWrapper key={key++}>
            <CardCity {...home} />
        </CardWrapper>
    ))
      
    const holder = new Array(5).fill(0).map(() => (
        <CardWrapper key={key++}>
            <CardHolder />
        </CardWrapper>
    ))
    
      return (
        <div>
            <Title>Recommended for you</Title>
            <Container>
                <List>
                    {(homes.length &&  cards) || holder}
                </List>
            </Container>
        </div>
      )
}   


export default ListCities;


const Container = styled.div`
    width: 100%;
    margin-bottom: 60px;
`
    
const List = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-between;
    padding-top: 8px;
`

const Title = styled.h1`
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: normal;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    color: #484848;
    padding: 2px 0;
`

const CardWrapper = styled.div`
    width: 19%;
    position: relative;
`

    
// const Wrapper = styled.div`
//     width:100%;
//     height:100%;
//     display:flex;
// `

// const Title = styled.h1`
//     color: rgb(72, 72, 72);
//     padding-left:8px;
// `

// const CardWrapper = styled.div`
//     padding: 0 10px;
//     width:20%;
//     height:100%;
// `