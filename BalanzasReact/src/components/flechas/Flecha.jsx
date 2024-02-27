import styled from "@emotion/styled";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

// Define un componente de flecha reutilizable
const StyledFlecha = styled.div`
  transform: translate(${props => props.translateX}px, ${props => props.translateY}px) rotate(${props => props.rotation}deg);
  max-width: 30%;
  font-size: ${props => props.fontSize};
`;

export const Flecha = ({ type, fontSize, rotation }) => {
  const FlechaIcon = type === 'forward' ? MdOutlineArrowForwardIos : MdOutlineArrowBackIosNew;

  return (
    <>
      {/* Componente con la flecha */}
      <StyledFlecha fontSize={fontSize} rotation={rotation}>
        <FlechaIcon />
      </StyledFlecha>
    </>
  );
};
