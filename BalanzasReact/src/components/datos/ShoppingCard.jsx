import React from 'react';
import styled from '@emotion/styled';
import { Imagen } from './Imagen';
import { NumberController } from '../input/NumberController';
const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ItemName = styled.div`
  font-weight: bold;
  margin-top: 0px;
`;

const ItemPrice = styled.div`
  font-weight: bold;
  color: #000000;
  margin-right:20px;
  p{
    text-decoration: line-through;
    font-size: 1.2em;
  }
`;
const ConTitle = styled.div`
font-size: 1em;
border-bottom: 1px solid black;
`;
export const ShoppingCard = ({ selectedItem }) => {
  return (
    <div>
      <ConTitle> <h2>Lo que llevas en tu Carro</h2></ConTitle>
      {selectedItem && ( // Verificar si el item fue encontrado
      
        <CartItem key={selectedItem.id}>
          <ContentInfo>
        <Imagen ancho="60px" alto="50px" />
            <Infotext>
                <ItemName> <div> <p>marca: {selectedItem.Extra.marca} </p> <p>modelo: {selectedItem.Extra.modelo}</p></div></ItemName>
          </Infotext>
          </ContentInfo>
          <ItemPrice> <div> {selectedItem.Extra.oferta} <p>{selectedItem.Extra.sinOfer} </p> </div></ItemPrice>
          <NumberController/>


        </CartItem>
      )}
      <div>
      </div>
    </div>
  );
};

const ContentInfo = styled.div`
align-items:center;
display: flex;

`;

const Infotext = styled.div`

`;