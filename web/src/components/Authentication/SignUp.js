import React from 'react'
import styled from '@emotion/styled'

import api from '../../api'



class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.inputEmail = React.createRef()
    this.inputName = React.createRef()
    this.inputPassword = React.createRef()
  }
  handleSubmit = () => {
    const email = this.inputEmail.current.value
    const name = this.inputName.current.value
    const password = this.inputPassword.current.value
    api.signUp(name, email, password)
  }

  render() {
    return (
      <Container>
        <Title>Please enter your details</Title>
        <Input ref={this.inputEmail} placeholder="Email address"></Input>
        <Input ref={this.inputName} placeholder="Full name"></Input>
        <Input ref={this.inputPassword} placeholder="Password"></Input>
        <Button onClick={this.handleSubmit}>Sign up</Button>
      </Container>
    )
  }
}

export default SignUp;

const Container = styled.div`
    width:100%;
`

const Title = styled.h1`
    font-size: 24px;
`
const Input = styled.input`
    width:100%;
    height: 35px;
    padding:20px;
    margin: 10px 0;
    border: 1px solid gray;
    border-radius: 6px;
`

const Button = styled.button`
    width: 100%;
    padding: 15px;
    border:none;
    margin: 10px 0;
    font-size: 20px;
    background-color: #00484b;
    font-weight: 600;
    color: white;
    border-radius: 6px;
    cursor: pointer;
`