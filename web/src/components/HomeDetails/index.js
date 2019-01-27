import React from 'react'

import api from '../../api'
import parseUrlQuery from '../../utils/parseUrlQuery'

import HouseMainInfo from './HouseMainInfo'
import HouseReview from './HouseReview'
import BookHouseScheduler from './BookHouseScheduler'
import Amenities from './Amenities'
import styled from '@emotion/styled'
import Gallery from './Gallery'
import NeighborhoodMap from './NeighborhoodMap'
import Rating from '../../sharedComponents/Rating'
import Nav from '../Nav'


class HomeDetails extends React.Component {
  state = {
    home: {}
  }

  async componentDidMount() {
    // const query = parseUrlQuery(this.props.location.search)
    const home = await api.querySearch(this.props.location.search)    
    this.setState({home})
  }

  render() {
    const {home} = this.state
    const {amenities, reviews} = home

    return (
      <div>
        <Nav/>
        <Gallery images={home.images}/>
        <Wrapper>
          <MainContent>
            <HouseMainInfo {...home}/>
            <Amenities amenities={amenities || [{}]}/>
            <Rating reviews={reviews}/>
            {reviews && reviews.map((review, i) => <HouseReview key={i} {...review}/>)}
            <NeighborhoodMap />
          </MainContent>
          <BookHouseScheduler {...home}/>
        </Wrapper>
      </div>
    )
  }
  
}

export default HomeDetails

const Wrapper = styled.div`
  display: flex;
  padding: 3% 10%;
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3%;
  width: 70%;
`