import React from 'react';
import styled from '@emotion/styled';
import LogIn from '../components/Authentication/LogIn';
import SignUp from '../components/Authentication/SignUp';

const Modal = (props) => {
    const {content, onClose} = props
    return (
        <Container>
            <InnerContainer>
                <CloseModal onClick={onClose} className="fas fa-times"/>
                {content}
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
    z-index: 2;
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
    font-size: 18px;
    color: rgb(118, 118, 118);
`
