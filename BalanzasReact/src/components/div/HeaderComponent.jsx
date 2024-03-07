import styled from "@emotion/styled";
import Logo from "../../assets/logo.png"
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
  
`;

const MenuItem = styled.li`
  color: #000000;
  cursor: pointer;
  transition: color 0.3s ease;
  letter-spacing: 5px;
  margin-right: 25px;
  font-size: 20px;
  font-family: "Roboto Slab", serif;
  font-stretch: expanded; 

  &:hover {
    color: #000;
  }

  &:active {
    color: #000;
  }
`;
export function HeaderComponent(){

    return(
    <>
    <GlobalStyle/>
    <ContentP>
        <ContentG>
        <LogoImage src={Logo} alt="Logo description" />
        </ContentG>

            <MenuList>
                <MenuItem to = "/">Inicio</MenuItem>
                <MenuItem to = "/catalogo">Catalogo</MenuItem>
                <MenuItem>Quienes somos</MenuItem>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Contactanos</MenuItem>
            </MenuList>
    
   
    </ContentP>
    </>
        )
}