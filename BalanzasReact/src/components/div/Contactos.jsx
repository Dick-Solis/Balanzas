import styled from "@emotion/styled";
import { BsTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const DivGeneral = styled.div`
  background-color: #2c2929;
  width: 100vw;
  height: 8vh;
  display: flex;
  gap: 50px;
`;

const Telephone = styled.div`
  display: flex;
  align-items: center;  // Alinea verticalmente el contenido
  transform: translate(215px, 10px);
    border: 2px solid white;
    width: 15%;
    color: white;
    height: 5vh;
    padding-right: 5px;

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
      <DivGeneral>
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
