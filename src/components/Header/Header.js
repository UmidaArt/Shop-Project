import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";


const Container = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const SearchContainer = styled.div`
  margin-left: 20px;
`;

const Input = styled.input`
  border: antiquewhite;
  padding: 10px;
  box-shadow: 0 1px 3px 0 #bbbbbb;
  border-radius: 4px;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
`;

const MenuItem = styled.button`
  font-size: 14px;
  border: none;
  margin-left: 20px;
  cursor: pointer;
  background: none;
  font-weight: bold;
  :hover {
    color: #e83ae8;
  }
`;

const CartIcon = styled.div`
  font-size: 38px;
  position: relative;
`;

const Badge = styled.div`
  position: absolute;
  font-size: 12px;
  width: 15px;
  height: 16px;
  border-radius: 50%;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 6px;
  right: -5px;
`;

const Header = () => {

    const {totalAmount} = useSelector(s => s.cart)
    const navigate = useNavigate()

    return (
        <Container>
           <Left>
               <Logo><Link to='/'>Nevis</Link></Logo>
               <SearchContainer>
                   <Input placeholder="Search..."/>
               </SearchContainer>
           </Left>
            <Menu>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign in</MenuItem>
                <MenuItem onClick={() => navigate('cart')}>
                    <CartIcon>
                        <Badge>{totalAmount}</Badge>
                        <i className='bx bx-cart bx-sm'/>
                    </CartIcon>
                </MenuItem>
            </Menu>
        </Container>
    );
};

export default Header;