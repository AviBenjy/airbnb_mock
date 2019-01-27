import React from 'react';
import styled from '@emotion/styled';

const Modal = (props) => {
    return (
        <Container>
            <InnerContainer>
                {/* <Close>X</Close> */}
                <CloseModal className="fas fa-times"/>
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
    top: 0;
    left:0;
    z-index: 1;
`

const InnerContainer = styled.div`
    background-color: white;
    display: block;
    margin: auto;
    margin-top:10%;
    width: 10px;
    padding: 25px;
    position: relative;
`

const Close = styled.div`
    width:20px;
    height:20px;
    border-radius: 50%;
    border: 2px black solid;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CloseModal = styled.i`
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 25px;
    color: rgb(118, 118, 118);
`