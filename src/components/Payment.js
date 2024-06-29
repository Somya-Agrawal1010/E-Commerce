import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../Reducer'
import { useNavigate } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'

const Payment = () => {

  const [{ address ,basket  }] = useStateValue()
  const navigate = useNavigate()
  return (
    <Container>
      <Navbar />
      <Main>
        <ReviwContainer>
          <h1>Reviw Your Order</h1>
      
      <AddressConatiner>
         
            <h4>Shipping Address</h4>

            <div>
              <p>{address.name}</p>
              <p>Phone:{address.number}</p>
              <p>{address.flat}</p>
              <p>{address.area}</p>
              <p>
                {address.landmark} {address.city}
              </p>

              <p> {address.statec}</p>
            </div>
            </AddressConatiner>
            <PaymentContainer>
              <h4>Payment Method</h4>
              <div>
                  <p>card details</p>
              </div>
            </PaymentContainer>
            <Ordercontainer>
              <h4>Your Order</h4>
              {basket?.map((product) =>(<Product>
            <Image>
              <img src={product.image} alt="" />
            </Image>
            <Description>
              <h4>{product.title}</h4>
              <p>₹{product.price}</p>
              
            </Description>
          </Product>))}
            </Ordercontainer>
         
        </ReviwContainer>
        <SubTotal>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  SubTotal({basket.length} items):
                  <strong>{value}</strong>
                </p>
                <small>
                  <input type="checkbox" /> {/* Fixed 'cheackbox' to 'checkbox' */}
                  <span>This Order Contains a gift</span>
                </small>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType='text'
            thousandSeparator={true}
            prefix='₹'
          />
          <button onClick={() => navigate("/address")}>Proceed to Checkout</button> 
        </SubTotal>
        
      </Main>
    </Container>
  )
}
const Container = styled.div`

width:100%;
height:fit-content;
max-width:1400px;
background-color: rgb(234,237,237);
`
const Main = styled.div`
padding:15px;
display:flex;


@media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`
const ReviwContainer = styled.div`
background-color:#fff;
flex:0.7;
padding:15px;

h1{
  font-weight:500;
  border-bottom: 1px solid lightgrey;
  padding-bottom:15px;
}
`
const AddressConatiner = styled.div`
margin-top:10px;

div{
  padding:15px;
}
p{
  margin-top:-11px;
}
`



const PaymentContainer = styled.div`
margin-top:15px;

div{
  padding:15px;
}

`
const Ordercontainer= styled.div``

const Product = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;
const Image = styled.div`

flex: 0.4;

img{
  width:200px;
  height:100%;
}
`;
const Description = styled.div`
margin-top:-15px;
flex: 0.7;


h4{
  font-size:14px;
}
p{
  font-weight:700;
  margin-top:-15px;
}
`;

const SubTotal  = styled.div`
flex:0.3;
background-color:#fff;
margin-left:15px;
height:200px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
 
@media only screen and (max-width: 1200px) {
    flex: none;
    margin-top: 20px;
  }
p{
  font-size:20px;
}
small{
  display:flex;
  align-items:center;
  margin-top:-12px;
  margin-bottom:22px;
}
span{
  margin-left:10px;
  
}
button{
  width:66%;
  height:33px;
  background-color: #ffd814;
  border:none;
  border-radius:8px;
}
`;

export default Payment




