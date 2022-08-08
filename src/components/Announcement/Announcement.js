import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  background-color: #792a5e;
  padding: 10px 0;
  color: #fff;
  text-align: center;
  font-size: 16px;
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