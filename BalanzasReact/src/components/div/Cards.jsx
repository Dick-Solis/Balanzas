import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { FaMoneyBillWave } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { StyledButton } from "../buttons/StyledButton";
export function Cards() {
  const [photo, setPhoto] = useState(null);
  const [datos, setDatos] = useState([
    {
      id: 1,
      Extra: {
        marca: "karely",
        modelo: "ACS-30",
        capacidad: "30kg",
        descripcion: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor",
        oferta: 80,
        sinOfer: 120,
      },
      numero: 1,
    },
    {
      id: 2,
      Extra: {
        marca: "otraMarca",
        modelo: "XYZ-50",
        capacidad: "50kg",
        descripcion: "Descripción del segundo producto lorem ipsum dolor sit amet",
        oferta: 90,
        sinOfer: 150,
      },
      numero: 1,
    },{
      id: 3,
      Extra: {
        marca: "otraMarca",
        modelo: "XYZ-50",
        capacidad: "50kg",
        descripcion: "Descripción del segundo producto lorem ipsum dolor sit amet",
        oferta: 90,
        sinOfer: 150,
      },
      numero: 1,
    },
    {
      id: 4,
      Extra: {
        marca: "otraMarca",
        modelo: "XYZ-50",
        capacidad: "50kg",
        descripcion: "Descripción del segundo producto lorem ipsum dolor sit amet",
        oferta: 90,
        sinOfer: 150,
      },
      numero: 1,
    },
    {
      id: 5,
      Extra: {
        marca: "otraMarca",
        modelo: "XYZ-50",
        capacidad: "50kg",
        descripcion: "Descripción del segundo producto lorem ipsum dolor sit amet",
        oferta: 90,
        sinOfer: 150,
      },
      numero: 1,
    },
    {
      id: 6,
      Extra: {
        marca: "otraMarca",
        modelo: "XYZ-50",
        capacidad: "50kg",
        descripcion: "Descripción del segundo producto lorem ipsum dolor sit amet",
        oferta: 90,
        sinOfer: 150,
      },
      numero: 1,
    },
    {
      id: 7,
      Extra: {
        marca: "otraMarca",
        modelo: "XYZ-50",
        capacidad: "50kg",
        descripcion: "Descripción del segundo producto lorem ipsum dolor sit amet",
        oferta: 90,
        sinOfer: 150,
      },
      numero: 1,
    },
    
  ]);

  const incrementarNumero = (id) => {
    setDatos((prevDatos) =>
      prevDatos.map((item) =>
        item.id === id
          ? { ...item, numero: (item.numero || 1) + 1 }
          : item
      )
    );
  };

  const decrementarNumero = (id) => {
    setDatos((prevDatos) =>
      prevDatos.map((item) =>
        item.id === id && item.numero > 1
          ? { ...item, numero: item.numero - 1 }
          : item
      )
    );
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
                  <FaMoneyBillWave /> Precio sin oferta:{" "}
                  <span>s/{item.Extra.sinOfer}</span>
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
                  <IoIosRemoveCircle onClick={() => decrementarNumero(item.id)} />
                  <div className="Numero">
                    <span>{item.numero}</span>
                  </div>
                  <IoMdAddCircle onClick={() => incrementarNumero(item.id)} />
                </Iconos>
                <div className="Boton">
                  <StyledButton
                    bgColor="#343E49"
                    textColor="#FFFFFF"
                    buttonText="Agregar a Carrito"
                  />
                </div>
              </Agregar>
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

text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

p{
  font-weight: bold;
}
span{
  text-decoration: line-through;
  font-family: 20px;
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