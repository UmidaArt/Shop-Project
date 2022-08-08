import React from 'react';
import styled from "styled-components";
import {color} from "../../variables/color";

const Container = styled.div`
  background-color: #f5ced5;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 50px;
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
  border: 4px solid ${color.footerColor};
  padding: 15px;
  flex: 6;
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;
  background-color: transparent;
  font-weight: bold;
  font-size: 20px;
`;

const Button = styled.button`
  flex: 3;
  border: 4px solid ${color.footerColor};
  background-color: ${color.footerColor};
  cursor: pointer;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
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