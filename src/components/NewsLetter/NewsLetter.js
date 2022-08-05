import React from 'react';
import styled from "styled-components";
import {color} from "../../variables/color";

const Container = styled.div`
  background-color: ${color.pink};
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
`;

const Input = styled.input`
  border: none;
  padding: 20px;
  flex: 8;
`;

const Button = styled.button`
  flex: 2;
  border: none;
  background-color: ${color.sendPink};
  cursor: pointer;
`;


const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Sale 10%</Description>
            <InputContainer>
                <Input placeholder="Your email"></Input>
                <Button>Send</Button>
            </InputContainer>

        </Container>
    );
};

export default NewsLetter;