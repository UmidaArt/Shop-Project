import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {decrease, increase} from "../../redux/slices/cartSlice";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid silver;
  margin-bottom: 20px;
  padding: 30px;
  background-color: #f5f4f4;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
    
`;
const ProductDesc = styled.div`
    
`;

const ProductId = styled.span`
    
`;

const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Counter = styled.div`
  cursor: pointer;
  border-radius: 50%;
  background-color: #cbc7c4;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const Remove = styled.div`
    
`;

const ProductPrice = styled.div`
  font-size: 24px;
`;

const CartItem = ({item}) => {

    const dispatch = useDispatch()
    return (
        <Container>
            <Image srs={item.img}/>
            <Details>
                <ProductName><b>Product:</b> {item.title}</ProductName>
                <ProductDesc>{item.desc}</ProductDesc>
                <ProductId><b>Id:</b> {item.id}</ProductId>
            </Details>
            <PriceDetail>
                <ProductAmountContainer>
                    <Counter onClick={() => dispatch(decrease(item.id))}>-</Counter>
                    <ProductAmount>{item.amount}</ProductAmount>
                    <Counter onClick={() => dispatch(increase(item.id))}>+</Counter>
                </ProductAmountContainer>
                <ProductPrice>{(item.price * item.amount).toFixed(2)}</ProductPrice>
            </PriceDetail>
        </Container>
    );
};

export default CartItem;