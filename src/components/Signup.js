import React from "react";
import styled from "styled-components";
import logo from '../Assest/amazon_logo.png'
import { useNavigate } from "react-router-dom";

function SignUp() {

  const navigate = useNavigate();
  
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Amazon Logo" />
      </Logo>
      <FormContainer>
        <h3>Sign-Up</h3>
        <InputContainer>
          <p>FullName</p>
          <input
            type="text"
            placeholder="John Smith"
          />
        </InputContainer>
        <InputContainer>
          <p>Email</p>
          <input
            type="email"
            placeholder="example@example.com"
          />
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input
            type="password"
            placeholder="********"
          />
        </InputContainer>
        <SignUpButton>Create Account in Amazon</SignUpButton>
      </FormContainer>
      <LoginButton onClick={() => navigate("/login")}> 
        Back to Login
      </LoginButton>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 120px;
  margin-top:20px;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 100%;
  max-width: 400px; /* Limit width on larger screens */
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 80%; 
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 100%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;

const SignUpButton = styled.button`
  width: 100%;
  height: 35px;
  font-size: 12px;
  margin-top: 20px;

  &:hover {
    background-color: #dfdfdf;
    border: 1px solid gray;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  max-width: 450px; 
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;

  @media screen and (max-width: 768px){
    max-width: 350px;
  }
`;

export default SignUp;






