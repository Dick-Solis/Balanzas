// Modal.js
import React from 'react';
import styled from '@emotion/styled';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(4, 4, 4, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1000; /* Asegura que el modal esté sobre otros elementos */

`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 30%;
  height: 25vh;
  width: 100vw;
  position: relative;
  z-index: 1001; /* Asegura que el contenido del modal esté sobre el fondo */
  pointer-events: auto; /* Restablece la interacción para el contenido del modal */
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2em;
  cursor: pointer;
`;

export const ModalCar = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  ); 
};

