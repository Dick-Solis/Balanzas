import { GlobalStyle } from "../../styles/GlobalStyle"
import styled from "@emotion/styled";
import { SearchBar } from "../input/SearchBar";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export function BarraUser() {
  // Definir la variable de contenido
  const contenido = {
    titulo: "Catalogo",
    searchBar: <SearchBar />,
    Ubicacion: {
      icono: <StyledMap />,
      texto: "Lima, Surco",
      flecha: <MdKeyboardArrowDown />,
    },
    User: {
      icono: <FaUser/>,
      texto: "Hola, Usuario ",
      flecha: <MdKeyboardArrowDown />,
    },
    Compras: {
      icono: <FaShoppingCart/>,
      texto: "Compras",
      flecha: <MdKeyboardArrowDown />,
    },

    
  };

  return (
    <>
      <GlobalStyle />
      <DivGeneral>
        <Ctitle>
          <h1>{contenido.titulo}</h1>
        </Ctitle>
        <CSearch>{contenido.searchBar}</CSearch>
        <UbicacionMenu>
          <ContTL>
            <Cmap >
              <CLog >{contenido.Ubicacion.icono}</CLog>
              <p>{contenido.Ubicacion.texto} </p>
              <Flecha >{contenido.Ubicacion.flecha}</Flecha>
            </Cmap>
          </ContTL>
          <ContTL>
            <Cmap className="ubicacion">
              <CLog className="iconUbi">{contenido.User.icono}</CLog>
              <p>{contenido.User.texto} <br /> Cuenta y Pedidos</p>
              <Flecha className="flechaUbi">{contenido.User.flecha}</Flecha>
            </Cmap>
          </ContTL><ContTL>
            <Cmap>
              <CLog>{contenido.Compras.icono}</CLog>
              <p>{contenido.Compras.texto}</p>
              <Flecha>{contenido.Compras.flecha}</Flecha>
            </Cmap>
          </ContTL>
        </UbicacionMenu>
      </DivGeneral>
    </>
  );
}

const Flecha = styled.div `
margin-top:36px;
transform: scale(1.5);
&.flechaUbi{
  margin-top: 70px;
}
`;
const ContTL = styled.div`
margin-bottom: 20px;
`;
const CLog = styled.div`
margin-top: 27px;
margin-right: 0px;
&.iconUbi{
margin-right: 10px;
  margin-top: 60px;
}
`;
const UbicacionMenu = styled.div`
color:  black;
height: 100%;
margin-top: 15px;
display: flex;

`;

const Cmap =  styled.div`
display: flex;
font-size: 25px;
font-family: "Roboto Slab", serif;
letter-spacing: 5px;
margin-top: 60px;
margin-right: 70px;

p{
  margin-left: 5px;
  margin-left: 15px
}
&.ubicacion{
  margin-top: 25px;
}
`;

const CSearch = styled.div`
height: 100%;
width: 20%;
margin-top: 75px;

`;
const StyledMap = styled(FaMapLocationDot)`
transform: scale(1.5);
`;
const Ctitle = styled.div`
overflow: hidden;
background-color: #fffefe;
h1{
  padding-top: 8%;
  font-size: 60px;
  font-family: "Roboto Slab", serif;
}
`;
const DivGeneral = styled.div`
margin-left: 60px;
  display: flexbox;
  background-color: #ffffff;
  width: 98%;
  height: 15vh;
  display: flex;
  gap: 90px;
  overflow: hidden;

`;