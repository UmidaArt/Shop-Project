import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/slices/cartSlice";

const Container = styled.div`
  padding: 0 15px;
  width: 25%;
  height: 350px;
  background-color: #fff;
  margin-bottom: 20px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(31, 31, 31, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: 0.4s;
`;

const Box = styled.div`
  background-color: #f8d1da;
  height: 100%;
  padding: 15px;
  position: relative;

  :hover ${(Info)} {
    opacity: 1;
    visibility: visible;
  }
`;

const Icon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: 10px;
  color: #fff;
  font-size: 30px;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 105, 180, 0.73);
    transform: scale(1.1);
  }
`;

const CatalogItem = ({product}) => {

    const dispatch = useDispatch()

    return (
        <Container>
            <Box>
                <Image src={product.img}/>
                <Info>
                    <Icon onClick={() => dispatch(addToCart(product))}><i className='bx bx-cart-add'/></Icon>
                    <Icon><i className='bx bx-search-alt'/></Icon>
                    <Icon><i className='bx bx-heart'/></Icon>
                </Info>
            </Box>
        </Container>
    );
};

export default CatalogItem;