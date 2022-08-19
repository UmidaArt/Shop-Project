import React from 'react';
import styled from "styled-components";
import 'boxicons'

const Container = styled.div`
  background-color: #2a2b2b;
  color: #fff;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  padding: 30px;
`;
const Logo = styled.h1`
  margin-bottom: 20px;
`;
const Description= styled.p`
  margin-bottom: 20px;
  line-height: 20px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  background-color: #f4fafa;

  :hover {
    background-color: #494b4b;
    border: 2px solid #d9d4cc;
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 30px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;

  :hover {
    color: #898887;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 30px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Nevis</Logo>
                <Description>Let's say you want to create a simple and reusable
                    component that you can use throughout your application. There should be a normal version and a big
                    and primary version for the important buttons. This is what it should look like when rendered:
                    (this is a live example, click on them!)
                </Description>
                <SocialContainer>
                    <SocialIcon><box-icon name='facebook' type='logo' color='#1950EEFF'/></SocialIcon>
                    <SocialIcon><box-icon name='instagram' type='logo' color='#C94322FF'/></SocialIcon>
                    <SocialIcon><box-icon name='twitter' type='logo' color='#0576ACFF'/></SocialIcon>
                    <SocialIcon><box-icon name='pinterest-alt' type='logo' color='#D5062FFF'/></SocialIcon>
                    <SocialIcon><box-icon name='rss' color='#F3540BFF'/></SocialIcon>
                    <SocialIcon><box-icon name='tumblr' type='logo' color='#056AB8FF'/></SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Support</Title>
                <List>
                    <ListItem>Статус заказа по номеру</ListItem>
                    <ListItem>Центр поддержки</ListItem>
                    <ListItem>Как оформить заказ</ListItem>
                    <ListItem>Как выбрать размер</ListItem>
                    <ListItem>Условия доставки</ListItem>
                    <ListItem>Мои заказы</ListItem>
                    <ListItem>Возврат</ListItem>
                    <ListItem>Часто задаваемые вопросы</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contacts</Title>
                <ContactItem>New York, 13th Street </ContactItem>
                <ContactItem>1-888-452-1505</ContactItem>
            </Right>
        </Container>
    );
};

export default Footer;