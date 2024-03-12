import styled from "@emotion/styled"
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoStorefront } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";




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
                <span className="ContenidoT"> <MdOutlineEmail /> Dejanos un correo: <br /><p>balanzas@gmail.com</p></span>
                </div>
                <div>
                <span className="ContenidoT"> <IoStorefront /> Ubicanos en: <br /><p>Jr Pinos 456, al costado del parque Alegria</p></span>
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
            <Reclamacion>
                <StyledLibro /> <br /> <br />
            
                <h3>Libro de Reclamaciones</h3>
            </Reclamacion>
            <div>
            <span>Nuestra Redes Sociales</span>
            <RSociales>
                <ul>
                    <li><FaFacebook /></li>
                    <li><AiFillInstagram /></li>
                    <li><IoLogoWhatsapp /></li>
                    <li><FaYoutube /></li>
     
                </ul>


            </RSociales>
            </div>
            

             

        </ReclaSocial>

    </ContentF>
    
    </>)
}
const ContentF = styled.footer`
display: flex;
margin-top: 50px;
background-color:#383838;
color: white;
width: 100%;
height: 45vh;
justify-content :center;
gap: 15%;
font-size: 1.3em;

`;
const ContactText = styled.div`
width: 374px;

`;
const AtencionClient = styled.div`
width: 374px;

`;


const TextC1 = styled.div`
&.ContenidoT{
 font-size: 0.8rem;
}`;

const ReclaSocial = styled.div`
width: 374px;
overflow: hidden;
justify-content:center;
`;

const  Reclamacion = styled.div`
margin-top: 25%;
text-align:center;`;

const StyledLibro = styled(IoBookSharp)`
transform: scale(8);
`;

const RSociales = styled.div`
margin-top: 5%;
font-size: 2.8rem;
text-align: center;
letter-spacing: 10px;
ul{
    list-style-type: none;
    display: flex;
    gap: 20px;

}
`;
