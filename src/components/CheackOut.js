import React from 'react'
import { useStateValue } from '../StateProvider'
import styled from 'styled-components'
import Navbar from './Navbar'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../Reducer'
import { useNavigate } from 'react-router-dom'


const CheackOut = () => {

  const [{basket} , dispatch] = useStateValue()
  const navigate = useNavigate();
  const removeFromBasket = (productToRemove) =>{
    dispatch({
      type:'REMOVE_FROM_BASKET',
      product: productToRemove
    })
  }
  return (
    <Container>
      <Navbar />
      <Main>
        <ShoopingCart>
          <h2>Shopping Cart</h2>

          {basket?.map((product) =>(<Product>
            <Image>
              <img src={product.image} alt="" />
            </Image>
            <Description>
              <h4>{product.title}</h4>
              <p>₹{product.price}</p>
              <button onClick={()=>removeFromBasket(product)}>Remove</button>
            </Description>
          </Product>))}
         
        </ShoopingCart>
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
max-width:1400px;
height:fit-content;
background-color: rgb(234,237,237);
margin:auto;
position:relative;
`;
const Main= styled.div`
display:flex;
padding:15px;

@media only screen and (max-width: 1200px) {
    flex-direction: column
    }
`;
const ShoopingCart = styled.div`
padding:15px;
background-color:#fff;
flex:0.7;
@media only screen and (max-width: 1200px) {
    display:block;

    
  }

h2{
  font-weight:600;
  font-size:25px;
  padding-bottom:10px;
  border-bottom: 1px solid lightgrey;
  
}
`;
const Product = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;
const Image = styled.div`
flex:0.3;

img{
  width:200px;
  height:100%;
  
  @media only screen and (max-width: 768px) {
    width:138px;
    padding:11px;
  }
}

`;
const Description = styled.div`
margin-top:-15px;
flex: 0.7;


h4{
  font-size:14px;

  @media only screen and (max-width:768px){
    font-size:13px;
    font-weight:600;
    width:170px;

  }
}
p{
  font-weight:700;
  margin-top:-15px;
}

button{
  background:none;
  border:none;
  color: #1384b4;
  font-size:17px;
  margin-top:-15px;
  margin-inline:-4px;
  
  @media only screen and (max-width:768px){

    margin-top:-11px;
  }
}
&:hiver{
  text-decoration:underline;
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

export default CheackOut

