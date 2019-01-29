/** @jsx jsx */
import { Link } from "react-router-dom"
import styled from '@emotion/styled'
import {css, jsx} from '@emotion/core'


const CardHome = (props) => {

  const {type, title, price, images=[], _id} = props
  /* _id['$oid'] send mongoDB id */
  const id = _id['$oid']
  return (
    <Link css={st} to={`/home?id=${id}`}> 
      <Avatar imageUrl={images[0]||''}/>
      <Text bold color={'#008489'}>{type}</Text>
      <Text bold big color={'rgb(72, 72, 72)'}>{title}</Text>
      <Text small color={'rgb(72, 72, 72)'}>${price} per night</Text>
    </Link>
  )
  
}

export default CardHome


const st = css`
  color: #484848;
  display: flex;
  flex-direction: column;
  padding: 8px 8px 12px;
  width: 25%;
  line-height: 1.4;
  transition: 0.5s;
  &:hover {
    text-decoration: none;
    transform: scale(1.03);
  }
`

const Avatar = styled.div`
  flex: 0 0 250px;
  border-radius: 4px;
  background-image: url("${p => p.imageUrl}");
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 10px;
`

const Text = styled.span`
  margin-top: 2px;
  flex: 0 0 auto;
  color: ${p => p.color};
  font-weight: ${p => p.bold ? '800' : 'inherit'};
  font-size: ${p => p.big ? '17px' : p.small ? '12px' : 'inherit'};
`

