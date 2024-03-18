import styled from "@emotion/styled";

import { Cards} from "../components/div/Cards";
export function Catalogo(){
 
    
    return(
        <>
          <ContentG>
  
            <CartasContent>
              <Cards/>
            </CartasContent>
          </ContentG>
        </>
    )
}

const ContentG = styled.div`
  width: 100vw;
    height: 100vh;
`;


const CartasContent = styled.div`
width: 100%;
height: 77vh;
overflow: hidden;
`;