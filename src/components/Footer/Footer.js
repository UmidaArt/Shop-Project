import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    
`;

const Left = styled.div`
    
`;
const Logo = styled.div`
    
`;
const Description= styled.div`
    
`;
const SocialContainer = styled.div`
    
`;
const SocialIcon = styled.div`
    
`;

const Center = styled.div`
    
`;

const Title = styled.div`
    
`;

const List = styled.div`
    
`;

const ListItem = styled.div`
    
`;

const Right = styled.div`
    
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo></Logo>
                <Description>Let's say you want to create a simple and reusable
                    component that you can use throughout your application. There should be a normal version and a big
                    and primary version for the important buttons. This is what it should look like when rendered:
                    (this is a live example, click on them!)
                </Description>
                <SocialContainer>
                    <SocialIcon>Fb</SocialIcon>
                    <SocialIcon>Insta</SocialIcon>
                    <SocialIcon>Tw</SocialIcon>
                    <SocialIcon>ICQ</SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Help</Title>
                <List>
                    <ListItem>Статус заказа по номеру</ListItem>
                    <ListItem>Центр поддержки Lamoda</ListItem>
                    <ListItem>Как оформить заказ</ListItem>
                    <ListItem>Как выбрать размер</ListItem>
                    <ListItem>Условия доставки</ListItem>
                    <ListItem>Мои заказы</ListItem>
                    <ListItem>Возврат</ListItem>
                    <ListItem>Часто задаваемые вопросы</ListItem>
                </List>
            </Center>
            <Right></Right>
        </Container>
    );
};

export default Footer;