import React from 'react';
import styled from '@emotion/styled';
import LogIn from '../components/Authentication/LogIn';
import SignUp from '../components/Authentication/SignUp';

const Modal = (props) => {
    return (
        <Container>
            <InnerContainer>
                {/* <Close>X</Close> */}
                <CloseModal className="fas fa-times"/>
                <LogIn></LogIn>
            </InnerContainer>
        </Container>
    )
}

export default Modal;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    position: fixed;
    display: flex;
    top: 0;
    left:0;
    z-index: 1;
`

const InnerContainer = styled.div`
    background-color: white;
    display: inline-block;
    margin: auto;
    padding: 25px 40px;
    position: relative;
    width:35%;
`

const CloseModal = styled.i`
    position: absolute;
    cursor: pointer;
    top: 10px;
    left: 10px;
    font-size: 25px;
    color: rgb(118, 118, 118);
`
