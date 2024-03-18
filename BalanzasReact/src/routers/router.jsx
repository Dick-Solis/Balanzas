import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../page/HomePage";
import styled from "@emotion/styled";
import { HeaderComponent } from "../components/div/HeaderComponent.jsx";
import { SidebarComponentDesktop } from "../components/sidebar/sidebarDesktop";
import { Quienes } from "../page/Quienes.jsx";
import { Catalogo } from "../page/Catalogo.jsx";
import { Footer } from "../components/div/Footer.jsx";
import { ComprasDate } from "../components/compras/ComprasDate.jsx";
import { Contactos } from "../components/div/Contactos.jsx";
import { BarraUser } from "../components/div/BarraUser.jsx";
export function MyRouters() {
  return (

    <HashRouter>
      <HeaderComponent/>
      <SidebarComponentDesktop />

      <ContactContent>      
          <Contactos />
    </ContactContent>
    <ContentBarras>
    <BarraUser/>

    </ContentBarras>


      <Ruta>

          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inicio" element={<HomePage />} />
          <Route path="/quienes" element={<Quienes/>} />
          <Route path="/catalogo" element={<Catalogo/>} />
          <Route path="/compras" element={<ComprasDate/>} />

        </Routes>

      </Ruta>
      <Footer/>

    </HashRouter>

   
  );
}
const Ruta = styled.main`
      height: 100%;
      width: 100vw;
      background-color: ${(props) => props.theme.body};
      transition: all 0.5s ease;
      `;
const ContactContent = styled.div`
transform: translateY(111%);
width: 100vw;
  
  `;

const ContentBarras = styled.div`
overflow: hidden;
width: 100vw;
margin: 40px 13px 1px -29px;
background-color: white;
border: 1px solid black;

`;