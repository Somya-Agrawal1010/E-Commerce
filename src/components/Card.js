import React from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import { useStateValue } from '../StateProvider';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const Image = styled.div`
  width: 100%;
  height: 170px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (max-width: 768px) {
    height: 150px;
  }
`;

const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h3 {
    font-size: 14px;
    font-weight: 600;
  }

  button {
    background-color: #fa8900;
    padding: 10px;
    font-weight: 500;
    border-radius: 15px;
    border-color: none;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;

    button {
      width: 90%;
    }
  }
`;

const Card = ({ image, title, price, rating }) => {
  const [{basket}, dispatch] = useStateValue();

  const addToBasket = (e) => {
    e.preventDefault();

    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        title,
        price,
        rating,
        image
      }
    });
  };

  return (
    <Container>
      <Image>
        <img src={image} alt={title} />
      </Image>
      <Description>
        <h3>{title}</h3>
        <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        <h4>₹{price}</h4>
        <button onClick={addToBasket}>Add to Cart</button>
      </Description>
    </Container>
  );
};

export default Card;


