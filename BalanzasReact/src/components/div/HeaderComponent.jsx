import styled from "@emotion/styled";
import { Link } from 'react-router-dom'; // Importar Link de React Router
import Logo from "../../assets/logo1.png";
import { GlobalStyle } from '../../styles/GlobalStyle';

const ContentP = styled.header`
  overflow: hidden;
  position: absolute;
  width: 100vw;
  height: 10%;
  top: 0;
  background-color:#FFF452;
  display: flex;
`;

const ContentG = styled.div`
  margin-left: 18%;
  width:30%;
`;

const LogoImage = styled.img`
  height: 100%; 
  filter: brightness(80%) contrast(150%); /* Ajustar valores según tus preferencias */
  transform: scale(1);
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

const MenuItem = styled.li`
  color: #000000;
  transition: color 0.3s ease;
  letter-spacing: 5px;
  margin-right: 25px;
  font-size: 20px;
  font-family: "Roboto Slab", serif;
  font-stretch: expanded; 
  font-weight: bold;

  &:hover {
    color: #000;
  }

  &:active {
    color: #000000;
  }
`;

const LinkStyle = styled(Link)`
font-size: 1.2em;
  color: black;
  text-shadow: black 1px;

  &:hover {
    color: #00aaff;
    text-shadow: 0 0 10px pink; /* Agrega un efecto de sombra al texto al pasar el mouse */
  }
`;
export function HeaderComponent() {
  return (
    <>
      <GlobalStyle />
      <ContentP>
        <ContentG>
          <LogoImage src={Logo} alt="Logo description" />
        </ContentG>
        <MenuList>
          <MenuItem>
            <LinkStyle to="/">Inicio</LinkStyle>
          </MenuItem>
          <MenuItem>
            <LinkStyle to="/catalogo">Catalogo</LinkStyle>
          </MenuItem>
          {/* Aquí puedes agregar más elementos de menú con enlaces */}
          <MenuItem>
            <LinkStyle to="/quienes">Quienes somos</LinkStyle>
          </MenuItem>
          <MenuItem>
            <LinkStyle to="/blog">Blog</LinkStyle>
          </MenuItem>
          <MenuItem>
            <LinkStyle to="/contactanos">Contactanos</LinkStyle>
          </MenuItem>
        </MenuList>
      </ContentP>
    </>
  );
}
