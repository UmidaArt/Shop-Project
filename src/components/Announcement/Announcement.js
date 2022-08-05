import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  background-color: #dd7df1;
  padding: 10px 0;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;


const Announcement = () => {
    return (
        <Container>
            Получи скидку 20% при заказе более 100$
        </Container>
    );
};

export default Announcement;