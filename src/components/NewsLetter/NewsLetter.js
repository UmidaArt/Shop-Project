import React from 'react';
import styled from "styled-components";
import {color} from "../../variables/color";

const Container = styled.div`
  background-color: #f8f6f4;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #38393d;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
`;

const Input = styled.input`
  border: 2px solid #342d28;
  padding: 15px;
  flex: 9;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: transparent;
  font-weight: bold;
  font-size: 20px;
`;

const Button = styled.button`
  flex: 2;
  border: 2px solid #342d28;
  background-color: ${color.footerColor};
  cursor: pointer;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  font-weight: bold;
  font-size: 20px;
  background-color: #57595c;
  border-left: none;
  color: white;
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