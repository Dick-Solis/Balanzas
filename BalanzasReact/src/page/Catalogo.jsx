import styled from "@emotion/styled";
import { Contactos } from "../components/div/Contactos";

export function Catalogo(){
 
    
    return(
        <>
        <ContentG>
        <ContactContent>
                        <Contactos />
        </ContactContent>
        <ContentBarras>
            <h1 style={"{}"}>Catalogo</h1>
        </ContentBarras>

      

        </ContentG>
        </>
    )
}

const ContentG = styled.div`
background-color: black;
`;
const ContactContent = styled.div`
transform: translateY(111%);
  
  `;
  const ContentBarras = styled.div`
  background-color: #FFA50D;
  padding-bottom: 144px;


  `;
