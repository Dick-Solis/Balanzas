import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { NumberController } from '../input/NumberController';
import { Imagen } from '../datos/Imagen';
import { StyledButton } from '../buttons/StyledButton';
export const ComprasDate = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    // Recuperar los datos de compra desde localStorage
    const storedPurchaseHistory = JSON.parse(localStorage.getItem("CompraDatos")) || [];
    setPurchaseHistory(storedPurchaseHistory);
  }, []);

  // Función para actualizar la cantidad en el historial de compras
  const updateQuantity = (itemId, newQuantity) => {
    const updatedPurchaseHistory = purchaseHistory.map(item => {
      if (item.id === itemId) {
        return { ...item, cantidad: newQuantity };
      }
      return item;
    });
    setPurchaseHistory(updatedPurchaseHistory);
    // Actualizar los datos en localStorage
    localStorage.setItem("CompraDatos", JSON.stringify(updatedPurchaseHistory));
  };

  // Función para calcular el total de cada ítem (precio x cantidad)
  const calculateItemTotal = (item) => {
    return item.Extra.oferta * item.cantidad;
  };

  // Función para calcular el total general de todas las compras
  const calculateTotal = () => {
    let total = 0;
    purchaseHistory.forEach(item => {
      total += calculateItemTotal(item);
    });
    return total;
  };

  return (
    <>
    <ContentG>
      <Compras>
      <h2>Historial de Compras</h2>

     <CardU>
      {purchaseHistory.map(item => (
        <PurchaseItem key={item.id}>
            <Imagen ancho="60px" alto="50px" />
            <InfoText>
          <p>Marca: {item.Extra.marca}</p>
          <p>Modelo: {item.Extra.modelo}</p>
          <p>Precio: {item.Extra.oferta}</p>
          </InfoText>
          {/* Permitir modificar la cantidad usando NumberController */}
          <NumberController quantity={item.cantidad} onUpdate={newQuantity => updateQuantity(item.id, newQuantity)} />

            <div>          
            <p>Total: {calculateItemTotal(item)}</p>
            </div>
        </PurchaseItem>

      ))}
      </CardU>
      </Compras>
      {/* Mostrar el total general */}
      <TotalC>
      <h2>total general</h2>
      {purchaseHistory.map(item => (
        <div key={item.id}>

            <div>          
            <p>Producto : {calculateItemTotal(item)}</p>
            </div>
        </div>

      ))}
      
      <p>Total General: {calculateTotal()}</p>
      <StyledButton bgColor="#141414"
                    textColor="#fcf5f5"
                    buttonText="Comprar"/>
      
      </TotalC>
    </ContentG>
    </>
  );
};
const PurchaseItem = styled.div`
padding: 10px;
margin-bottom: 20px;
display: flex;
border: 1px solid black;
gap: 50px;
background-color:whitesmoke;
`;

const ContentG = styled.div`
display: flex;
justify-content: center;
gap:10%

`;
const Compras = styled.div`

`;
const TotalC = styled.div`
font-weight: 500;
display: flex;
    align-content: flex-start;
    justify-content: center;
    flex-wrap: nowrap;
    flex-direction: column;
`;

const InfoText = styled.div``;
const CardU = styled.div`
`;