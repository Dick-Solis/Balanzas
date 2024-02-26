import styled from "@emotion/styled";
import { Contactos } from "../components/div/Contactos";
export function HomePage(){
    const ContentG = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #888888;
    `;
    const ContactContent = styled.div`
    transform: translateY(111%);
    
    `;
    const Content1 = styled.div`
    
    padding-top: 75px;
    background-color: rgba(33, 140, 255, 0.76);
    width: 100vw;
    height: 50vh;
    `;
    const ConTitle = styled.div`
        text-align: center;
        color: white;

    `;
    const ContenedorCont = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    gap: 45px;
margin-left:100px;
    `;
    const ContTextos = styled.div`
    padding-top: 15px;
    background-color: yellowgreen;
    width: 20vw;
    height:20vh;
    `;
    const ContentCard = styled.div`

    background-color: goldenrod;
    height: 20vh;
    width: 40vw;
    `;
    const ContTI = styled.div`
    background-color: red;
    height: 20vh;
    width: 25vh;
    `;
    return(
        <>
        <ContentG>
            <ContactContent>
                        <Contactos />
            </ContactContent>
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
                        <img src="" alt="aqui va la imagen " />
                    </ContentCard>
                    <ContTI>
                        hola
                    </ContTI>
                </ContenedorCont>
                
            </Content1>
            
        </ContentG>
        </>
    )
}