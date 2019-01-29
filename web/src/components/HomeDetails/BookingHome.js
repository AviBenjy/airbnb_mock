import React from 'react'
import styled from '@emotion/styled'
import moment from 'moment' 

import Stars from '../../sharedComponents/Stars'
import { calcRating } from '../../utils/calcRating'
import { isValidBook } from '../../utils/bookingUtils'
import DatePicker from "react-datepicker" 
import "react-datepicker/dist/react-datepicker.css"



class BookingHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkIn : new Date(),
      checkOut : new Date(),
      bookIndication: ''
    }
  }


  handleCheckIn = (checkIn) => {
    if(checkIn.getTime() < new Date().getTime()) {
      alert('Insert valid date pleas')
      return
    }

    this.setState({checkIn})

    const {checkOut} = this.state

    if(checkIn.getTime() >= checkOut.getTime()) {
      const checkOut = new Date(checkIn)
      checkOut.setDate(checkIn.getDate() + 3)
      this.setState({checkOut})
    }
  }

  handleCheckOut = (checkOut) => {
    const {checkIn} = this.state

    if(checkIn.getTime() >= checkOut.getTime()) {
      alert('Must choose a valid check out')
      return
    }
    
    this.setState({checkOut})    
  }

  handleBooking = () => {
    let {checkIn, checkOut} = this.state
    checkIn = moment(checkIn).format('DD/MM/YYYY')
    checkOut = moment(checkOut).format('DD/MM/YYYY')

    const {bookings} = this.props
    
    if(isValidBook({checkIn, checkOut}, bookings)) {
      bookings.push({checkIn, checkOut})
      this.setState({bookIndication: 'Booked'})
    }
    else {
      this.setState({bookIndication: 'Date unavailable'})
    }

    console.log('home booking', bookings)
  }

    render() {
      const {price, reviews, spaceInfo} = this.props
      const {bookIndication, checkIn, checkOut} = this.state
      
      return(
          <HouseScheduler>
              <PriceInfo>
                  <PricePerNight>
                      <Price>${price || '3,490'}</Price><span> per night</span>
                  </PricePerNight>
                  <StarRating>
                      <Stars rating={calcRating(reviews)}></Stars>
                      <Voters> Voters {reviews && reviews.length}</Voters>
                  </StarRating>
              </PriceInfo>
              <div>
                  <FieldTitle>Dates</FieldTitle>
                  <DatePickers>
                      <DatePicker dateFormat="dd/MM/yyyy" selected={checkIn} onChange={this.handleCheckIn}></DatePicker>
                      <Arrow className="fas fa-arrow-right"></Arrow>
                      <DatePicker dateFormat="dd/MM/yyyy" selected={checkOut} onChange={this.handleCheckOut}></DatePicker>
                  </DatePickers>
              </div>
              <div>
                  <FieldTitle>Guests</FieldTitle>
                  <GuestsPickerContainer>
                      <GuestsPicker placeholder={`limit to ${spaceInfo && spaceInfo.guests}`}></GuestsPicker>
                  </GuestsPickerContainer>
              </div>
  
              <BookButton onClick={() => this.handleBooking()}>Request to Book</BookButton>
              <BookIndication>{bookIndication}</BookIndication>
              <TinyComment>You won't be charged yet</TinyComment>
              
              
          </HouseScheduler>
      )
    }

}

export default BookingHome

const BookIndication = styled.h5`

`

const HouseScheduler = styled.div`
    padding: 0 24px;
    border: 1px solid #e4e4e4;
    color: #484848;
    height: 400px;
    position: sticky;
    top: 15%;
`

const GuestsPicker = styled.input`
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
`

const GuestsPickerContainer = styled.div`
    display: flex;
    width: 100%;
`

const TinyComment = styled.h6`
    text-align: center;
    display: block;
    margin: 10px 0 20px 0;
    font-size: 10px;
`

const BookButton = styled.button`
    width: 100%;
    color: white;
    background-color: rgb(255, 90, 95);
    padding 10px 22px;
    margin-top: 24px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
`

const FieldTitle = styled.h6`
    margin-bottom: 0;
    padding-bottom: 5px;
    padding-top: 20px;
`

const Star = styled.i`
    color: #008489;
    font-size:9px;
`

const Arrow = styled.i`
    align-self: center;
`

const DatePickers = styled.div`
    display: flex;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
`

const StarRating = styled.div`
    border-bottom: 1px solid #e4e4e4;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 15px 0 20px 0;
`

const Price = styled.h1`
    display: inline-block;
    margin: 0;
    font-size: 22px;
    padding-top:20px;
    font-weight: 600;
`

const Voters = styled.h5`
    margin: 0 0 0 5px;
    font-size: 12px;
`

const PriceInfo = styled.div`
    margin-top: 10px;
`

const PricePerNight = styled.div`
    display: inline-block;
`