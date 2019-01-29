/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx, keyframes } from '@emotion/core'

const CardHolder = (props) => {
  return (
    <Container>
      <Content>
        <Line1/>
        <Line2/>
        <Line3/>
        <Line4/>
        <Line5/>
        <Line6/>
        <Line7/>
        <Line8/>
        <Circle/>
      </Content>
    </Container>
  )
}

export default CardHolder


const placeHolderSwept = keyframes`
0% {
  background-position: -400px 0
}
100% {
  background-position: 400px 0
}
}
@-moz-keyframes placeHolderSwept {
0% {
  background-position: -400px 0
}
100% {
  background-position: 400px 0
}
}
@-o-keyframes placeHolderSwept {
0% {
  background-position: -400px 0
}
100% {
  background-position: 400px 0
}
}
@keyframes placeHolderSwept {
0% {
  background-position: -400px 0
}
100% {
  background-position: 400px 0
}
`

const Container = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-color: #fff;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px; 
`

const Content = styled.div`
  position: relative;
  height: 100%;
  -webkit-animation: ${placeHolderSwept} 1s infinite linear forwards;
  -moz-animation: ${placeHolderSwept} 1s infinite linear forwards;
  -o-animation: ${placeHolderSwept} 1s infinite linear forwards;
  animation: ${placeHolderSwept} 1s infinite linear forwards;
  background: #ebebec;
  background-image: linear-gradient(to right, #ebebec 0%, #e0e0e2 20%, #ebebec 40%, #ebebec 100%);
  background-repeat: no-repeat;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
`


const Line1 = styled.div`
  background: #ffffff;
  position: absolute;
  left: 0;
  right: 0;

  top: 180px;
  width: 12px;
  height: calc(100% - 180px);
  -webkit-border-bottom-left-radius: 3px;
  -moz-border-radius-bottomleft: 3px;
  border-bottom-left-radius: 3px;
` 

const Line2 = styled.div`
  background: #ffffff;
  position: absolute;
  left: 0;
  right: 0;

  top: 180px;
  height: 12px;
` 

const Line3 = styled.div`
  background: #ffffff;
  position: absolute;
  left: 0;
  right: 0;

  top: 180px;
  left: auto;
  width: 12px;
  height: calc(100% - 180px);
  -webkit-border-bottom-right-radius: 3px;
  -moz-border-radius-bottomright: 3px;
  border-bottom-right-radius: 3px;
` 

const Line4 = styled.div`
  background: #ffffff;
  position: absolute;
  left: 0;
  right: 0;

  bottom: 0;
  height: 12px;
  -webkit-border-bottom-right-radius: 3px;
  -webkit-border-bottom-left-radius: 3px;
  -moz-border-radius-bottomright: 3px;
  -moz-border-radius-bottomleft: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
` 

const Line5 = styled.div`
  background: #ffffff;
  position: absolute;
  left: 0;
  right: 0;

  top: 203px;
  left: 12px;
  right: 74px;
  height: 3px;
` 

const Line6 = styled.div`
  background: #ffffff;
  position: absolute;
  left: 0;
  right: 0;

  top: 217px;
  left: 12px;
  right: 74px;
  height: 10px;
` 

const Line7 = styled.div`
  background: #ffffff;
  position: absolute;
  left: 0;
  right: 0;

  top: 206px;
  left: 125px;
  right: 74px;
  height: 11px;
` 

const Line8 = styled.div`
  background: #ffffff;
  position: absolute;
  left: 0;
  right: 0;

  top: 227px;
  left: 69px;
  right: 74px;
  height: 11px;
` 

const Circle = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
  width: 62px;
  height: 46px;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 22px;
    border-radius: 100%;
    width: 24px;
    height: 24px;
    box-shadow: 0px 0px 0px 211px #ffffff;
  }
`


