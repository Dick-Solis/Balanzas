// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { FaMoneyBillWave } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { StyledButton } from "../buttons/StyledButton";
import { ModalCar } from "../modals/ModalCar";
import { DatosCard } from "../datos/DatosCard";
import {  useDatos } from "../datos/DatosContext";

import { ShoppingCard } from "../datos/ShoppingCard";
export function Cards() {
  const [datos, setDatos] = useState(DatosCard);
  const [photo, setPhoto] = useState(null);
  const { datos: DatosContext, incrementarNumero, decrementarNumero } = useDatos();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleIncrement = (id) => {
    incrementarNumero(id);
    console.log('Incrementar:', id, datos);
  };
  
  const handleDecrement = (id) => {
    decrementarNumero(id);
    console.log('Decrementar:', id, datos);
  };
  
  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.pexels.com/v1/photos/1084584', {
          headers: {
            'Authorization': 'cxcmhJwpKfEi3tYzj5Qd0LbSkRMIIdAL2D96XGigjBwQ1d06oqg092LV',
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener datos de la API');
        }

        const data = await response.json();
        setPhoto(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Balanzas de todos los modelos</h2>
      <CardC>
        {datos.map((item) => (
          <Carta key={item.id}>
            <Conten1>
              <ContentIMG>
                {photo && <StyledIMG src={photo.src.original} alt={photo.alt} />}
              </ContentIMG>
              <Precios>
                <p>
                  <FaMoneyBillWave /> Precio sin oferta: <span>s/{item.Extra.sinOfer}</span>
                </p>
                <p>
                  <BiSolidOffer /> Oferta: {item.Extra.oferta}
                </p>
              </Precios>
            </Conten1>
            <Content2>
              <Textos>
                <p> Marca: {item.Extra.marca}</p>
                <p>Modelo: {item.Extra.modelo}</p>
                <p>Capacidad: {item.Extra.capacidad}</p>
                <p>Descripcion: {item.Extra.descripcion}</p>
              </Textos>
              <Agregar>
              <Iconos>
                  <IoIosRemoveCircle onClick={() => handleDecrement(item.id)} />
                  <div className="Numero">
                  <span>{item.cantidad}</span>
                  </div>
                  <IoMdAddCircle onClick={() => handleIncrement(item.id)} />
                </Iconos>
                <div className="Boton">
                  <StyledButton
                    bgColor="#343E49"
                    textColor="#FFFFFF"
                    buttonText="Agregar a Carrito"
                    onClick={() => openModal(item)}
                  />
                </div>
              </Agregar>

              <ModalCar isOpen={modalOpen} onClose={closeModal}>
              {selectedItem && (
                <ShoppingCard selectedItem={selectedItem} />
              )}
            </ModalCar>


            </Content2>
          </Carta>
        ))}
      </CardC>
    </>
  );
}

const CardC = styled.div`
display: flex;
flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  margin-top: 10px;
  overflow-y:auto; /* Hace que la barra de desplazamiento solo aparezca en eje vertical */
  background-color: #eaeaea;
`;

const Carta = styled.div`
    border: 1px solid black;
border-radius: 9px;
  margin: 50px;
  width: 520px;
  height: 313px;
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  &:focus {
    box-shadow: 0 10px 8px rgba(0, 0, 0, 0.5);
  }
`;

const ContentIMG = styled.div`

  width:180px;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px; 

`;

const StyledIMG = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Conten1 = styled.div`
background-color: white;
`;
const Precios = styled.div`
border: 1px solid black;
margin: 10px;
background-color: white;
border-radius: 8px;

box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

p{
  font-weight: bold;
}
span{
  text-decoration: line-through;
  font-family: 20px;
  color: black;
  box-shadow: black 1px;

}
 &:hover {
    border-color: black;
    transform: scale(1.1.1)

  }
`;


const Content2 = styled.div`
background-color: white;
`;
const Textos = styled.div`
margin: 20px;
font-weight: bold;


`;

const Agregar = styled.div`
gap: 10px;
margin: 15px;
border-radius: 8px;
height:  20%;
font-family: sans-serif;
font-size: 25px;
margin: 31px 13px 1px 3px;

display: flex;
&.Boton{
  margin-top: 5px;
}
`;
const Iconos = styled.div`
display: flex;
justify-content: center;
margin-top: 10px;
width: 50%;
height: 100%;
font-size: 1.5em;
gap: 0.5em;

&.Numero{
  background-color:Red;
  margin: 0px;
}
`;