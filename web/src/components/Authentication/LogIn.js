import React from 'react';
import styled from '@emotion/styled';

const LogIn = (props) => {
    return (
        <Container>
            <Title>
                Log in to continue
            </Title>
            <Input placeholder="Username"></Input>
            <Input placeholder="Password"></Input>
            <Button>Sign in</Button>
            <small>Not signed up? <a>Sign up</a></small>
        </Container>
    )
}

export default LogIn;

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
    border-radius: 6px;
    padding: 15px;
    border:none;
    margin: 10px 0;
    font-size: 20px;
    background-color: #00484b;
    font-weight: 600;
    color: white;
    cursor: pointer;
`