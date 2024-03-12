import React from 'react';
import styled from '@emotion/styled';

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ItemName = styled.span`
  font-weight: bold;
`;

const ItemPrice = styled.span`
  font-weight: bold;
  color: #f00;
`;

export const ShoppingCard = ({ items }) => {
  return (
    <div>
      <h2>Lo que llevas en tu Carro</h2>
      {items.map((item, index) => (
        <CartItem key={index}>
          <ItemName>{item.name}</ItemName>
          <ItemPrice>S/{item.price}</ItemPrice>
        </CartItem>
      ))}
      <div>
        <span>Total:</span>
        <span>S/{items.reduce((total, item) => total + item.price, 0)}</span>
      </div>
    </div>
  );
};

