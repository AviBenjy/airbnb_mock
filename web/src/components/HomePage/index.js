import React from 'react'
import styled from '@emotion/styled'

import api from '../../api' 

import Header from './Header'
import ListCities from '../ListCities'
import ListHomes from '../ListHomes'



class HomePage extends React.Component {

  state = {
    editorChoice: [],
  }

  async componentDidMount() {
    const editorChoice = await api.editorChoice()
    this.setState({editorChoice})
  }
  
  render() {
    const {editorChoice} = this.state 
         
    return (
      <Container>
        <Header/>
        <Wrapper>
          <ListCities homes={editorChoice.slice(0, 5)}/>
          <ListHomes homes={editorChoice} title='Editor Choice' />
        </Wrapper>
      </Container>
    )
  }
}

export default HomePage


const Container = styled.div`

`

const Wrapper = styled.div`
    margin: 0 auto;
    padding: 60px 24px;
    width: 1080px;
    display: flex;
    flex-direction: column;
`

// const Wrapper = styled.div`
//     width: 100%;
//     padding: 3% 10%;
//     display: flex;
//     flex-direction: column;
// `
