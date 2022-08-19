import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import img from '../../assets/images/242-2426078_book-tree-ver-grammaire-clipart.png'
import {logout} from "../../redux/slices/userSlice";


const Container = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #faf9f8;
`;

const Left = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 70px;
`;

const LogoTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #1c1101;
  padding-top: 14px;
  font-family: 'Lora', serif;

  :hover {
    color: #6c544a;
  }
`;

const SearchContainer = styled.div`
  margin-left: 20px;
`;

const Input = styled.input`
  border: antiquewhite;
  width: 300px;
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
    color: #744c36;
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
  background-color: #444343;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 6px;
  right: -5px;
  color: white;
`;

const Header = () => {

    const {totalAmount} = useSelector(s => s.cart)
    const {isSuccess, user} = useSelector(s => s.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <Container>
            <Link to='/'>
                <Left>
                    <Logo src={img}/>
                    <LogoTitle>Word Forest</LogoTitle>
                </Left>
            </Link>
            <Menu>
                {
                    isSuccess ?
                        <>
                            <MenuItem>Welcome {user.email} ! </MenuItem>
                            <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
                            <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
                        </>
                        :
                        (<>
                            <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
                            <MenuItem onClick={() => navigate('/register')}>Register</MenuItem>
                            <MenuItem onClick={() => navigate('/login')}>Sign in</MenuItem>
                        </>)
                }
                <MenuItem onClick={() => navigate('/cart')}>
                    <CartIcon>
                        <Badge>{totalAmount}</Badge>
                        <i className='bx bx-cart bx-sm'/>
                    </CartIcon>
                </MenuItem>
                <SearchContainer>
                    <Input placeholder="Search..."/>
                </SearchContainer>
            </Menu>
        </Container>
    );
};

export default Header;