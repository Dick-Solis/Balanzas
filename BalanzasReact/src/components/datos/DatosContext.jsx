// DatosContext.js
import React, { createContext, useContext, useState } from 'react';

const DatosContext = createContext();

export const DatosProvider = ({ children }) => {
  const [datos, setDatos] = useState([]);

  const incrementarNumero = (id) => {
    setDatos((prevDatos) =>
      prevDatos.map((item) =>
        item.id === id ? { ...item, cantidad: (item.cantidad || 1) + 1 } : item
      )
    );
  };

  const decrementarNumero = (id) => {
    setDatos((prevDatos) =>
      prevDatos.map((item) =>
        item.id === id && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item
      )
    );
  };

  return (
    <DatosContext.Provider value={{ datos, incrementarNumero, decrementarNumero }}>
      {children}
    </DatosContext.Provider>
  );
};

export const useDatos = () => {
  const context = useContext(DatosContext);
  if (!context) {
    throw new Error('useDatos debe usarse dentro de un DatosProvider');
  }
  return context;
};
