import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useStateValue } from '../StateProvider'
const Address = () => {
  
  const [{ address }, dispatch] = useStateValue()


const [name,setName] = useState('')
const [number,setNumber] = useState('')
const [flat,setFlat] = useState('')
const [area,setArea] = useState('')
const [landmark,setLandmark] = useState('')
const [city,setCity] = useState('')
const [statec,setStatec] = useState('')

const navigate = useNavigate()

const deliver = (e) => {
    e.preventDefault();

    dispatch({
      type: "SET_ADDRESS",
      item: {
        name,
        number,
        flat,
        area,
        city,
        statec,
      },
    });

    navigate("/payment");
  };
    return (
        <Container>
            <Navbar />
            <Main>
                <FormContainer>
                    <InputContainer>
                        <p>Full Name</p>
                        <input
                            type="text" onChange={(e) => setName(e.target.value)} value={name}/>    
                    </InputContainer><InputContainer>
                        <p>Phone Number</p>
                        <input
                            type="text" onChange={(e) =>setNumber(e.target.value)} value={number}/>    
                    </InputContainer>
                    <InputContainer>
                        <p>Flat,House no , Building,Company,Apartmnet</p>
                        <input
                            type="text" onChange={(e) => setFlat(e.target.value)} value={flat}/>    
                    </InputContainer>
                    <InputContainer>
                        <p>Area,Colony,Street,sector,Village</p>
                        <input
                            type="text" onChange={(e) => setArea(e.target.value)} value={area}/>    
                    </InputContainer>
                    <InputContainer>
                        <p>LandMark</p>
                        <input
                            type="text" onChange={(e) => setLandmark(e.target.value)} value={landmark}/>    
                    </InputContainer><InputContainer>
                        <p>Town/City</p>
                        <input
                            type="text" onChange={(e) => setCity(e.target.value)} value={city}/>    
                    </InputContainer><InputContainer>
                        <p>State</p>
                        <input
                            type="text" onChange={(e) => setStatec(e.target.value)} value={statec}/>    
                    </InputContainer>
                    <Button onClick = {deliver}>Deliver To this Address</Button>
                    



                </FormContainer>
            </Main>
        </Container>
    )
}
const Container = styled.div`
height:fit-content;
max-width: 1400px;
width:100%;
margin:auto;
background-color:rgb(234,237,237);


`
const Main = styled.div``
const FormContainer = styled.div`
border: 1px solid lightgrey;
width:55%;
max-width:600px;
height:fit-content;

padding:15px;
background-color:#fff;
margin:auto;
margin-top:15px;

@media only screen and (max-width: 767px) {
  width:80%;
}
`

const InputContainer = styled.div`
  width: 100%;
  padding: 6px;
  

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top:-5px;

    &:hover {
      border: 1px solid orange;
    }
  }

`
const Button = styled.button`
width: 50%;
padding:10px;
background-color:orange;
border: none;
outline: none;
border-radius: 10px;
cursor: pointer;
margin-top: 17px;

@media only screen and (max-width:768px){
  width:60%;
  display:flex;
  justify-content:center;
  align-items:center;
}
`;


export default Address
