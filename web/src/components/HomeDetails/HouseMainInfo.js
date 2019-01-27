import React from 'react';
import styled from '@emotion/styled';

const HouseMainInfo = (props) => {
    const {title, type, city, host, spaceInfo={}} = props
    return (
        <MainInfoContainer>
            <Titles>
                <HomeTitles>
                    <HomeType>
                        {type || 'ENTIRE HOUSE'}
                    </HomeType>
                    <HomeTitle>
                        {title || 'Stunning home in central tokyo'}
                    </HomeTitle>
                    <CityName>{city || 'Minato'}</CityName>
                </HomeTitles>
                <HostInfo>
                    <Avatar src={host && host.imageUrl}></Avatar>
                    <HostName>{(host && host.name) || 'The Dawson Family'}</HostName>
                </HostInfo>
            </Titles>
            <HouseHighlights>
                <Highlight><Icon className="fas fa-users"></Icon>{spaceInfo.guests || '9'} guests</Highlight>
                <Highlight><Icon className="fas fa-person-booth"></Icon>{spaceInfo.bedrooms || '4 bedrooms'}</Highlight>
                <Highlight><Icon className="fas fa-bed"></Icon>{spaceInfo.beds || '9 beds'}</Highlight>
                <Highlight><Icon className="fas fa-bath"></Icon>2.5 baths</Highlight>
            </HouseHighlights>
        </MainInfoContainer>
    )
}

export default HouseMainInfo;

const HomeTitles = styled.div`
    display: flex;
    flex-direction: column;
`

const Icon = styled.div`
    font-size: 14px;
    padding-right: 5px;
`

const Highlight = styled.div`
    font-size: 14px;
    font-weight: 600;
    margin-right: 20px;
`

const HouseHighlights = styled.div`
    display: flex;
    flex-direction: row;
`

const Titles = styled.div`
    display: flex;
    flex-direction: row;
`

const MainInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

const HomeType = styled.h6`
    font-size: 12px;
    font-weight: 800;
    margin: 0;
`

const HomeTitle = styled.h1`
    margin: 0 0 10px 0;
    font-size: 32px;
    font-weight: 800;
`

const CityName = styled.p`

`

const HostInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    width: 80px;
    align-content: center;
`

const Avatar = styled.img`
    border-radius: 50%;
    width: 60px;
    height: 60px;
`

const HostName = styled.p`

`