import React, { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import { Flecha } from '../flechas/Flecha';
import { BsCircle } from "react-icons/bs";

export function CardInicio(){
    const [photos, setPhotos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.pexels.com/v1/search?query=technology&per_page=5&page=1', {
                    headers: {
                        'Authorization': 'cxcmhJwpKfEi3tYzj5Qd0LbSkRMIIdAL2D96XGigjBwQ1d06oqg092LV',
                    },
                });

                if (!response.ok) {
                    throw new Error('Error al obtener datos de la API');
                }

                const data = await response.json();

                setPhotos(data.photos);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (autoPlay) {
            const intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
            }, 3000);

            return () => clearInterval(intervalId);
        }
    }, [autoPlay, photos.length]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setAutoPlay(false); // Detener el cambio automático cuando el usuario interactúa manualmente
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
        setAutoPlay(false); // Detener el cambio automático cuando el usuario interactúa manualmente
    };

    return (
        <>
            <Card>
                <ContTitle>
                    <p>Balanza Tradicional</p>
                </ContTitle>
                <Mid>
                    <Flecha1 onClick={handlePrev}>
                        <Flecha type="back" fontSize="5em" rotation={90} />
                    </Flecha1>
                    <ContIMG>
                        {photos.length > 0 && (
                            <StyledIMG src={photos[currentIndex].src.original} alt={photos[currentIndex].alt} />
                        )}
                    </ContIMG>
                    <ContDescription>
                        <ul>
                            <li>Soporta Hasta 30 kg</li>
                            <li>Hecho de acero inoxidable</li>
                            <li>Batería de hasta 72 horas</li>
                        </ul>
                    </ContDescription>
                    <Flecha2 onClick={handleNext}>
                        <Flecha type="forward" fontSize="5em" rotation={90} />
                    </Flecha2>
                </Mid>
                <ContentCircles>
                    <ul>
                        {photos.map((photo, index) => (
                            <li key={index}><BsCircle /></li>
                        ))}
                    </ul>
                </ContentCircles>
            </Card>
        </>
    );
}

const Mid = styled.div`
    height: 50%;
    display: flex;
    overflow: hidden;
    align-items: center;
`;

const Flecha1 = styled.div`
    margin-top: 3%;
    cursor: pointer;
`;

const Flecha2 = styled.div`
    margin-top: 3%;
    cursor: pointer;
`;

const Card = styled.div`
    overflow: hidden;
    border: 1px solid black;
    width: 94%;
    height: 100%;
    border-radius: 40px;
    background-color: white;
    transform: translate rotate(5);
`;

const ContTitle = styled.div`
    text-align: center;
    padding-bottom: 10px;
    font-size: 25px;
    font-family: 'Segoe UI';
    letter-spacing: 2px;
    font-weight: bold;
`;

const ContIMG = styled.div`
    height: 80%;
    width: 40%;
    overflow: hidden;
`;

const StyledIMG = styled.img`
    height: 160px;
    width: 265px;
    object-fit: contain;
`;

const ContDescription = styled.div`
    width: 35%;
    left: 28%;
    max-width: 100%;
`;

const ContentCircles = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;

    ul {
        list-style-type: none;
        display: flex;
        gap: 20px;
        margin: 0; /* Reiniciamos el margen para que no afecte la alineación */
        padding: 0; /* Reiniciamos el relleno para que no afecte la alineación */
    }
`;
