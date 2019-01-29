import React from 'react'
import styled from '@emotion/styled'

import api from '../../api'

import ListHomes from "../ListHomes"
import Nav from "../Nav"


class ResultHomes extends React.Component {

  state = {
    homes: []
  }

  async componentDidMount() {
    const homes = await api.queryHomes(this.props.location.search)
    this.setState({homes})
  }

  render() {
    const {homes} = this.state
    return (
      <Container>
      <Nav/>
      <Body>
        <ListHomes homes={homes}/>
      </Body>
    </Container>
    )
  }
}


export default ResultHomes


const Container = styled.div`

`

const Body = styled.div`
  padding: 30px;
`