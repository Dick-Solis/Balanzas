import React, { useState, useEffect } from 'react';
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
  p {
    text-decoration: line-through;
    font-size: 1.2em;
  }
`;

const ConTitle = styled.div`
  font-size: 1em;
  border-bottom: 1px solid black;
`;

const Notification = styled.div`
  position: fixed;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  animation: fadeOut 2s forwards;
  
  @keyframes fadeOut {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
`;

const ConfirmButton = styled.button`
  background-color: #3cc137; /* Green */
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  transition: opacity 0.5s ease;
`;

export const ShoppingCard = ({ selectedItem }) => {
  const [confirmationClicked, setConfirmationClicked] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState([]);

  useEffect(() => {
    // Al cargar la página, comprobar si hay datos en el localStorage
    const storedItems = JSON.parse(localStorage.getItem("CompraDatos"));
    if (storedItems) {
      setPurchasedItems(storedItems);
    }
  }, []);

  const handleConfirmationClick = () => {
    // Crear una nueva estructura de datos con el elemento comprado
    const updatedItems = [...purchasedItems, selectedItem];
    // Guardar la nueva estructura en el localStorage
    localStorage.setItem("CompraDatos", JSON.stringify(updatedItems));
    // Marcar la confirmación como completada
    setConfirmationClicked(true);
  };

  useEffect(() => {
    let timeout;
    if (confirmationClicked) {
      timeout = setTimeout(() => {
        setConfirmationClicked(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [confirmationClicked]);

  return (
    <div>
      <ConTitle> <h2>Lo que llevas en tu Carro</h2></ConTitle>
      {selectedItem && (
        <CartItem key={selectedItem.id}>
          <ContentInfo>
            <Imagen ancho="60px" alto="50px" />
            <Infotext>
              <ItemName>
                <div>
                  <p>marca: {selectedItem.Extra.marca}</p>
                  <p>modelo: {selectedItem.Extra.modelo}</p>
                </div>
              </ItemName>
            </Infotext>
          </ContentInfo>
          <ItemPrice>
            <div>
              {selectedItem.Extra.oferta}
              <p>{selectedItem.Extra.sinOfer}</p>
            </div>
          </ItemPrice>
          <NumberController quantity={selectedItem.cantidad} />
        </CartItem>
      )}
      <div>
        <ConfirmButton onClick={handleConfirmationClick}>Confirmar</ConfirmButton>
        {confirmationClicked && (
          <Notification>
            Se ha agregado al carrito 
          </Notification>
        )}
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
