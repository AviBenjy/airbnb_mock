import React from 'react'
import styled from '@emotion/styled'
import CardHouse from './CardHome'


function ListHomes(props) {
  
  const {homes, title} = props
    
  const cards = homes.map((home, i) => <CardHouse key={home._id} {...home}/>)
  
  return (
    <div>
      <Title>{title}</Title>
      <Container>
        {cards}
      </Container>
    </div>
  )
}


export default ListHomes

const Container = styled.div`
    margin: 0 -8px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Title = styled.h3`
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: normal;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    color: #484848;
    padding: 2px 0;
`