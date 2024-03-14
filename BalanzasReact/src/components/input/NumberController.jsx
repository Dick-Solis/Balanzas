import React, { useState } from 'react';
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

export const NumberController = () => {
  const [number, setNumber] = useState(0);

  const incrementNumber = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const decrementNumber = () => {
    setNumber(prevNumber => prevNumber - 1);
  };

  return (
    <NumberContainer>
      <Button onClick={decrementNumber}>-</Button>
      <NumberDisplay>{number}</NumberDisplay>
      <Button onClick={incrementNumber}>+</Button>
    </NumberContainer>
  );
};

