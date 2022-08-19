import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CartItem from "../../components/CartItem";
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";
import {ButtonTemplate} from "../../mixines";
import {calculateTotal} from "../../redux/slices/cartSlice";
import Layout from "../../components/Layout/Layout";

const Container = styled.div`
    
`;

const Wrapper = styled.div`
   padding: 40px;
`;

const Title = styled.div`
  margin: 20px;
  font-weight: bold;
  font-size: 24px;
`;

const TopButton = styled.button`
  ${ButtonTemplate};
  font-weight: bold;
  border: none;
  background-color: grey;
  :hover {
    background-color: #525255;
  }
`;

const Bottom = styled.div`
   display: flex;
`;

const Top = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
`;

const Info = styled.div`
    flex: 3;
`;

const Summery = styled.div`
  flex: 1;
  border: 1px solid silver;
  padding: 20px;
  margin-left: 30px;
  height: 262px;
  background-color: #f5f4f4;
`;

const SummeryTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SummeryItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SummeryItemTitle = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
`;

const SummeryItemPrice = styled.div`
    
`;

const Button = styled.button`
  ${ButtonTemplate};
  margin-top: 10px;
  border: none;
  font-weight: bold;
  background-color: grey;

  :hover {
    background-color: #525255;
  }
`;

const Cart = () => {

    const {cart, totalPrice, totalAmount} = useSelector(s => s.cart)
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        dispatch(calculateTotal())
    }, [dispatch, totalAmount])

    return (
        <Layout>
            <Container>
                <Wrapper>
                    <Top>
                        <Title>Your cart</Title>
                        <TopButton onClick={() => navigation('/')}>Continue</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            {
                                cart.map((item) =>
                                    <CartItem key={item.id} item={item}/>
                                )
                            }
                        </Info>
                        <Summery>
                            <SummeryTitle>Order Summery</SummeryTitle>
                            <SummeryItem>
                                <SummeryItemTitle>Subtotal: </SummeryItemTitle>
                                <SummeryItemPrice>{totalPrice}$</SummeryItemPrice>
                            </SummeryItem>
                            <SummeryItem>
                                <SummeryItemTitle>Estimated shipping: </SummeryItemTitle>
                                <SummeryItemPrice>20$</SummeryItemPrice>
                            </SummeryItem>
                            <SummeryItem>
                                <SummeryItemTitle>Discount: </SummeryItemTitle>
                                <SummeryItemPrice>10$</SummeryItemPrice>
                            </SummeryItem>
                            <SummeryItem>
                                <SummeryItemTitle>Total: </SummeryItemTitle>
                                <SummeryItemPrice>$</SummeryItemPrice>
                            </SummeryItem>
                            <Button>Checkout</Button>
                        </Summery>
                    </Bottom>
                </Wrapper>
            </Container>
        </Layout>
    );
};

export default Cart;