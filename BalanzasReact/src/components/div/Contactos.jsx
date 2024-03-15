import styled from "@emotion/styled";
import { BsTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { GlobalStyle } from "../../styles/GlobalStyle";

const DivGeneral = styled.div`
overflow-x: hidden;
  background-color: #2c2929;
   max-width: 100vw;
  height: 8vh;
  display: flex;
  gap: 90px;
`;

const Telephone = styled.div`
overflow: hidden;
background-color: white;
  display: flex;
  align-items: center;  // Alinea verticalmente el contenido
  transform: translate(215px, 26px);
    border: 2px solid white;
    border-radius: 16px;
    width: 10%;
    color: #000000;
    height: 2vh;
    padding-right: 5px;
    font-family: 'Russo One', sans-serif; /* Aplica la fuente deseada */
    font-size: 20px;
    overflow: hidden;

  p {
    margin-left: 10px;  // Agrega un espacio entre el icono y el texto
  }
`;

const IConC = styled.div`
margin-left: 5px;
`;
export function Contactos() {
  const DatosContact = [
    {
      tipo: "telefono",
      numeroT: "+51 95966262",
      icon: <BsTelephoneFill />,
    },
    {
      tipo: "wtsp",
      numeroW: "+51 92965691",
      icon: <FaWhatsapp />,
    },
    {
      tipo: "correo",
      correo: "balanzas@gmail.com",
      icon: <MdOutlineEmail />,
    },
  ];

  return (
    <>
    <GlobalStyle/>
      <DivGeneral>
        {DatosContact.map((contacto, index) => (
          <Telephone key={index}>
            <IConC>{contacto.icon}</IConC>
            <p>{contacto.numeroT || contacto.numeroW || contacto.correo}</p>
          </Telephone>
        
        ))}
        {DatosContact.map((contacto, index) => (
          <Telephone key={index}>
            <IConC>{contacto.icon}</IConC>
            <p>{contacto.numeroT || contacto.numeroW || contacto.correo}</p>
          </Telephone>
        
        ))}
      </DivGeneral>
    </>
  );
}
