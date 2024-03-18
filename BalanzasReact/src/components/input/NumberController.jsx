import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: rgb(238, 238, 238);
  color: #000000;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 0.5rem;
`;

const NumberDisplay = styled.span`
  font-size: 1.5rem;
`;

export const NumberController = ({ quantity }) => {
  const [number, setNumber] = useState(quantity);

  const incrementNumber = () => {
    const newNumber = number + 1;
    setNumber(newNumber);
    // Aquí puedes realizar cualquier otra lógica necesaria, como actualizar el estado global o local
  };

  const decrementNumber = () => {
    const newNumber = Math.max(number - 1, 0);
    setNumber(newNumber);
    // Aquí puedes realizar cualquier otra lógica necesaria, como actualizar el estado global o local
  };

  return (
    <NumberContainer>
      <Button onClick={decrementNumber}>-</Button>
      <NumberDisplay>{number}</NumberDisplay>
      <Button onClick={incrementNumber}>+</Button>
    </NumberContainer>
  );
};
