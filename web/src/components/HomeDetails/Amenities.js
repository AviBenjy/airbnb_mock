import React from 'react'
import styled from '@emotion/styled'
import { determineIcon } from '../../utils/amenitiesIcon'


//Each amenity will be generated inside 'Amenity' with its own 'Icon' (with respect to its availability)
const Amenities = (props) => {
  const {amenities} = props
    return (
        <AmenitiesContainer>
            <Subject>Amenities</Subject>
            <AmenitiesList>
                {Object.keys(amenities[0]).map(function(amenity, i) {
                    if(amenities[0][amenity]) {
                        return  (
                            <Amenity key={i}>
                                <IconAvailable className={determineIcon(amenity)}></IconAvailable>
                                <AmenityDescAvail>{amenity}</AmenityDescAvail>
                            </Amenity>
                        )
                    }
                    else {
                        return  (
                            <Amenity key={i}>
                                <IconUnavailable className={determineIcon(amenity)}></IconUnavailable>
                                <AmenityDescUnavail>{amenity}</AmenityDescUnavail>
                            </Amenity>
                        )
                    }
                })}
            </AmenitiesList>
        </AmenitiesContainer>
    )
}

export default Amenities;

const AmenitiesContainer = styled.div`
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    margin: 5px;
    padding:15px 0;
`

const AmenitiesList = styled.div`
    display: flex;
`

const IconAvailable = styled.i`
    font-size: 20px;
    padding-right: 10px;
`

const IconUnavailable = styled.i`
    font-size: 20px;
    padding-right: 10px;
    color: #a8a8a8
`

const Amenity = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right:15px;
`

const AmenityDescAvail = styled.p``

const AmenityDescUnavail = styled.p`
    text-decoration-line: line-through;
`

const Subject = styled.div`
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 15px;
`