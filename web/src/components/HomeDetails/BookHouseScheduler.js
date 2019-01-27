import React from 'react'
import styled from '@emotion/styled'
import Stars from '../../sharedComponents/Stars'
import { calcRating } from '../../utils/calcRating'
import { isValidBook } from '../../utils/bookingUtils'

//Stars will be replaced with the amount of stars returning from a function calculation
//Voters will be replaced with the amount of voters
class BookHouseScheduler extends React.Component {

  state = {
    book: {checkIn: '', checkOut: ''},
    bookIndication: ''
  }

  handleOnChange = ({name, value}) => {
    const {book} = this.state
    book[name] = value
    this.setState({book})
  }

  handleBooking = () => {
    const {book} = this.state
    const {bookings} = this.props

    if(isValidBook(book, bookings)) {
      bookings.push(book)
      this.setState({bookIndication: 'Booked'})
    }
    else {
      this.setState({bookIndication: 'Date unavailable'})
    }
  }

    render() {
      const {price, reviews, spaceInfo} = this.props
      const {bookIndication} = this.state
      
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
                      <DatePicker placeholder="Check in" type="date" name='checkIn' onChange={e => this.handleOnChange(e.target)}></DatePicker>
                      <Arrow className="fas fa-arrow-right"></Arrow>
                      <DatePicker placeholder="Check out" type="date" name='checkOut' onChange={e => this.handleOnChange(e.target)}></DatePicker>
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

export default BookHouseScheduler

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

const DatePicker = styled.input`
    border: none;
    width:50%;
    padding: 8px 10px;
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