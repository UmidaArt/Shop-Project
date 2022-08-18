import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  background-color: #2b2a2b;
  padding: 10px 0;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;


const Announcement = () => {
    return (
        <Container>
            Get a 20% discount on orders over $100
        </Container>
    );
};

export default Announcement;