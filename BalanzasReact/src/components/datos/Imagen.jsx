import { useEffect, useState } from "react";
import styled from "@emotion/styled";

export function Imagen({ ancho, alto }) {
  const [photo, setPhoto] = useState(null);

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
      <ContentIMG>
        {photo && <StyledIMG src={photo.src.original} alt={photo.alt} ancho={ancho} alto={alto} />}
      </ContentIMG>
    </>
  );
}

const ContentIMG = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const StyledIMG = styled.img`
  max-width: ${({ ancho }) => ancho ? ancho : "400px"};
  max-height: ${({ alto }) => alto ? alto : "1080px"};
  background-repeat: no-repeat;
`;
