import React from 'react';
import styled from '@emotion/styled';
import SimpleMap from '../../sharedComponents/SimpleMap';

const NeighborhoodMap = (props) => {
    return (
        <Container>
            <Title>The neighborhood</Title>
            <SimpleMap {...props}></SimpleMap>
        </Container>
    )
}

export default NeighborhoodMap;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    
`