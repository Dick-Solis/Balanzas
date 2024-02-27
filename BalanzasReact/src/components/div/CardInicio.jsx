import React, { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import { Flecha } from '../flechas/Flecha';
import { BsCircle } from "react-icons/bs";

export function CardInicio(){
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Hacemos una llamada a la API para obtener la información de la foto con id "2014422"
          const response = await fetch('https://api.pexels.com/v1/photos/1084584', {
            headers: {
              'Authorization': 'cxcmhJwpKfEi3tYzj5Qd0LbSkRMIIdAL2D96XGigjBwQ1d06oqg092LV', // Asegúrate de reemplazar 'Tu-API-Key' con tu clave de API real
            },
          });
  
          if (!response.ok) {
            throw new Error('Error al obtener datos de la API');
          }
  
          const data = await response.json();
  
          // Actualizamos el estado con la información de la foto
          setPhoto(data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      // Llamamos a la función para obtener datos cuando el componente se monta
      fetchData();
    }, []); // El segundo parámetro del useEffect es una matriz de dependencias, en est
    return(<>
    <Card>
        <Flecha1>
        <Flecha type="back" fontSize="5em" rotation={90} />
        </Flecha1>
        <ContTitle>
        <p>Balanza Tradicional</p>
        </ContTitle>
        <ContIMG>  
            {photo && (
                  
                    <StyledIMG   src={photo.src.original} alt={photo.alt} />
                
             )}
        </ContIMG>
        <ContDescription>
            <ul>
                <li>Soporta Hasta 30 kg</li><br />
                <li>Hecho de acero inoxidable</li><br />
                <li>Batería de  hasta 72 horas</li>
            </ul>
        </ContDescription>
        <Flecha2>
        <Flecha type="forward" fontSize="5em" rotation={90} />

        </Flecha2>

        <ContentCircles>
        <BsCircle /> 
        <BsCircle />
        <BsCircle />
        <BsCircle />

        </ContentCircles>
    </Card>
    </>)
}
const Flecha1 = styled.div`
    position: absolute;
    width: 38%;
    bottom: 49%;
    left: 28%;
    max-width: 5%;
`;

const Flecha2 = styled.div`
position: absolute;
    width: 35%;
    bottom: 49%;
    left: 53.5%;
    max-width: 5%;
`;

const Card = styled.div`
border: 1px solid black;
    max-width: 94%;
    max-height:100%;
    border-radius:40px;
    background-color: white;
    text-align: center;
    transform: translate rotate(5);

`;
const ContTitle = styled.div`
text-align: center;
padding-bottom: 10px;
font-size: 25px;
font-family: 'Segoe UI';
letter-spacing: 2px;
font-weight:  bold;
`;
const ContIMG = styled.div`
    transform: translate(82px, -28px);
    height: 200px;
    width: 285px;
    overflow: hidden;
`;
const StyledIMG = styled.img`
    height: 160px;
    width: 265px;
  object-fit: contain; /* Utilizamos contain en lugar de cover para asegurarnos de que la imagen se ajuste completamente sin recortes */
`;

const ContDescription = styled.div`
    transform: translate(334px, -233px);
    width: 35%;
    left: 28%;
    max-width: 100%;
`;
 
const ContentCircles = styled.div`
    position: absolute;
    width: 35%;
    bottom: 445px;
    left: 43%;
    max-width: 6%;
`;
