import React from 'react';
import styled from '@emotion/styled';
import { darken, lighten } from 'polished';

const Boton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  font-family: "Roboto Slab", serif;
  cursor: pointer;
  background-color: ${(props) => props.bgColor || '#3498db'};
  color: ${(props) => props.textColor || '#ffffff'};
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Agrega transiciones suaves */

  &:focus {
    background-color: ${(props) => darken(0.2, props.bgColor || '#636364')}; /* Oscurece un poco más en el hover */
    text-shadow: inset 0 0 10px 5px ${(props) => lighten(0.3, props.textColor || '#ffffff')}; /* Añade resplandor dorado en clic */
    transform: scale(1.1)

  }

  &:active {
    background-color: ${(props) => darken(0.3, props.bgColor || '#3498db')}; /* Oscurece más durante el clic */
  }
`;

export const StyledButton = ({ bgColor, textColor, buttonText }) => {
  return (
    <div>
      <Boton bgColor={bgColor} textColor={textColor}>
        {buttonText}
      </Boton>
    </div>
  );
};
