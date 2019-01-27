import React from 'react'
import styled from '@emotion/styled'
import Stars from '../../sharedComponents/Stars'

//Comment will be replaced with props comment with image, name and date, respectively.
const HouseReview = (props) => {   
    const {imageUrl, name, date, content, rating} = props
    return (
        <Review>
            <ReviewInfo>
                <UserImage src={imageUrl}></UserImage>
                <div>
                    <UserName>{name || 'Shauna'}</UserName>
                    <ReviewDate>{date || 'November 2018'}</ReviewDate>
                    <small><Stars rating={rating}/></small>
                </div>
            </ReviewInfo>
            <p>
                {content}
            </p>
        </Review>
    )
}

export default HouseReview;

const Review = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e4e4e4;
    margin:15px 0;
`

const ReviewInfo = styled.div`
    display: flex;
    flex-direction: row;
`

const UserImage = styled.img`
    border-radius: 50%;
    height: 48px;
    width: 48px;
    margin-right:10px;
`

const ReviewDate = styled.p`
    color: gray;
`

const UserName = styled.h5`
    margin: 0 0 5px 0;
`