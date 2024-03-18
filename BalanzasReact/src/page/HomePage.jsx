import styled from "@emotion/styled";
import { GlobalStyle } from '../styles/GlobalStyle.jsx';
import { CardInicio } from "../components/div/CardInicio.jsx";
export function HomePage(){
    const ContentG = styled.div`
    width: 100vw;
    height: 10%;
    `;
 
    const Content1 = styled.div`
    
    padding-top: 75px;
    background-color: rgba(244, 249, 255, 0.76);
    width: 100vw;
    height: 50vh;
    `;
    const ConTitle = styled.div`
        text-align: center;
        color: #000000;
        letter-spacing: 10px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 30px;
        

    `;
    const ContenedorCont = styled.div`
    width: 90vw;
    height: 50vh;
    display: flex;
    gap: 45px;
    margin-left:100px;
    `;
    const ContTextos = styled.div`
    padding-top: 15px;
    width: 20vw;
    height:20vh;    
    font-family: 'Russo One', sans-serif; /* Aplica la fuente deseada */
    font-weight: 400;
    font-style: normal;
    font-size: 23px;
    
    
    
    `;
    const ContentCard = styled.div`
    height: 300px;
    width: 700px;
    `;
    const ContTI = styled.div`
    font-family: 'Segoe UI';
    font-size: 30px;
    height: 20vh;
    width: 25vh;
    `;

const Contenedor2 = styled.div`
background-color: #ffffff;
border: 1px solid black;
height: 40vh;
padding: 0;
text-align:center;
font-size: 30px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
h2{
    display: inline-block;

}
`; 
const Descripcion2 = styled.div`
width: 100%;
font-family: sans-serif;
font-size: 21px;
`;
    return(
        <>
         <GlobalStyle />

        <ContentG>
        
            <Content1>
                <ConTitle>
                <h1>Balanzas</h1>
                </ConTitle>
                <ContenedorCont>
                    <ContTextos>
                        <p>~Balanzas digitales de alta precisión</p>
                        <p>~Balanzas Industriales</p>
                        <p>~Balanzas para negocios</p>
                    </ContTextos>
                    <ContentCard>
                        <CardInicio/>
                    </ContentCard>
                    <ContTI>
                        <span>Más de 10 años en el mercado, todos nuestros clientes nos respaldan</span>
                    </ContTI>
                </ContenedorCont>
                
            </Content1>
            <Contenedor2>
                <h2>¿Por qué comprar con nosotros ?</h2>
                <Descripcion2>
                    <p>¡Descubre la gama más variada de balanzas para satisfacer todas las necesidades de tu negocio! En  <br />
                    Nombre de tu Empresa, nos enorgullece ofrecerte productos de la más alta calidad con una garantía <br /> extendida de  
                    año y medio. ¿Necesitas ayuda?  ¡No dudes en consultarnos en cualquier momento!<br /> Nuestro sistema automatizado está listo para atenderte con gusto.</p>
                </Descripcion2>
            </Contenedor2>
        </ContentG>
        </>
    )
}