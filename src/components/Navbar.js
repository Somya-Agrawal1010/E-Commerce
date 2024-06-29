import React from 'react';
import styled from 'styled-components';
import logo from '../Assest/amazon_logo1.png';
import Cart from '../Assest/basket-icon.png';
import Icon from '../Assest/img.icons.png'
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px; 
  background-color: #333;
  position: sticky;
  color: #fff;

  @media (max-width:768px){
    display: block;
    height: 120px;
  }
`;

const Logo = styled.img`
  width: 140px;
  height: 52px;
  margin-top: 10px;

  @media (max-width:768px){
    width: 100px;
    height: 38px;
    padding-right: 10px;
    margin-top: 15px;
    margin-inline: -2px;
  }
`;

const SearchBar = styled.div`
  height: 35px;
  flex: 1;
  margin: 0px 15px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 93%;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding:9px;
  border-radius: 5px 0px 0px 5px;
`;
const SearchIcon = styled.div`
  background-color: #febd69;
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;
  img {
    width: 22px;
  }
`;


const RightContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
    margin-top: -92px;
    margin-inline: 30px;
  }
`;

const NavButton = styled.div`
  margin-right: 20px;
  display: block;
  margin-top: 24px;
  color: #fff;

  p {
    padding-bottom: 1px;
    margin-top: -12px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    margin-right: 10px;
    margin-bottom: 10px;

    p {
      font-size: 13px;
    }
  }
`;

const Button = styled.i`
  height: 45px;
  display: flex;
  padding: 11px;
  margin-left: -10px;

  h3 {
    margin-top: 1px;
    margin-inline: 14px;
    font-size: 22px;
  }
  img {
    height: 80%;
  }

  @media (max-width: 768px) {
    img {
      height: 70%;
    }
  }
`;

const Navbar = () => {
  const [{ basket }] = useStateValue();
  const navigate = useNavigate();


  return (
    <NavbarContainer>
      <Logo src={logo} alt="Logo" />
      <SearchBar>
        <SearchInput type="text" placeholder="Search..." />
        <SearchIcon onClick={() => navigate("/addProduct")} >
          <img src={Icon}alt="" />
        </SearchIcon>
      </SearchBar>

      <RightContainer>
      <NavButton
            onClick={() => navigate("/login")}
          >
            <p>Hello,</p>
            <p>Guest</p>
          </NavButton>
        <NavButton>
          <p>Return</p>
          <p>&Order</p>
        </NavButton>
        <Button onClick={() => navigate("/cheackOut")} className="icon-class2">
          <img src={Cart} alt="" />
          <h3>{basket.length}</h3>
        </Button>
      </RightContainer>
    </NavbarContainer>
  );
};

export default Navbar;













