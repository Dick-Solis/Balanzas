import styled from "@emotion/styled";
import { Contactos } from "../components/div/Contactos";
import { BarraUser } from "../components/div/BarraUser";
import { Cards } from "../components/div/Cards";
export function Catalogo(){
 
    
    return(
        <>
        <ContentG>
        <ContactContent>
                        <Contactos />
        </ContactContent>
        <ContentBarras>
            <BarraUser/>
        </ContentBarras>
        <CartasContent>
          <Cards/>

        </CartasContent>

      

        </ContentG>
        </>
    )
}

const ContentG = styled.div`
height: 100vh;
width: 100%;
`;
const ContactContent = styled.div`
transform: translateY(111%);
  
  `;
  const ContentBarras = styled.div`
  overflow: hidden;
  width: 100%;
margin-top: 84px;
background-color: white;
border: 1px solid black;

  `;

const CartasContent = styled.div`
width: 100%;
height: 100vh;
`;