import styled from "@emotion/styled"
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoStorefront } from "react-icons/io5";


export function Footer(){
    return(
    <>
    <ContentF>
        <ContactText>
            <TextC1>
                <h3>Contactanos</h3>
                <div>
                    <span className="ContenidoT"> <FaWhatsapp/> Escribenos por: <br /><p>989565621</p></span>
                </div>
                <div>
                <span> <MdOutlineEmail /> Dejanos un correo: <br /><p>balanzas@gmail.com</p></span>
                </div>
                <div>
                <span> <IoStorefront /> Ubicanos en: <br /><p>Jr Pinos 456, al costado del parque Alegria</p></span>
                </div>
            </TextC1>
        </ContactText>
        <AtencionClient>
            <h3>Atención al Cliente</h3>
            <div>
                <ul>
                    <li>Preguntas Frecuentes</li>
                    <li>Cambios y devoluciones </li>
                    <li>Términos y condiciones de compra</li>
                    <li>Politica de privacidad</li>
                    <li>Contáctanos</li>
                </ul>
            </div>
        </AtencionClient>
        <ReclaSocial>
            <h3>social</h3>

        </ReclaSocial>

    </ContentF>
    
    </>)
}
const ContentF = styled.div`
display: flex;
margin-top: 50px;
background-color:#383838;
color: white;
width: 100%;
height: 45vh;
justify-content :center;
gap: 15%;
font-size: 1.3em

`;
const ContactText = styled.div`
width: 374px;

`;
const AtencionClient = styled.div`
width: 374px;

`;

const ReclaSocial = styled.div`
width: 374px;

`;
const TextC1 = styled.div`
`;