import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../page/HomePage";
import styled from "@emotion/styled";
import { HeaderComponent } from "../components/div/HeaderComponent.jsx";
import { SidebarComponentDesktop } from "../components/sidebar/sidebarDesktop";
import { Quienes } from "../page/Quienes";
import { Catalogo } from "../page/Catalogo.jsx";
import { Footer } from "../components/div/Footer.jsx";
export function MyRouters() {
  return (

    <HashRouter>
      <HeaderComponent/>
      <Ruta>
        <SidebarComponentDesktop />

          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/quienes" element={<Quienes/>} />
          <Route path="/catalogo" element={<Catalogo/>} />
        </Routes>

      </Ruta>
      <Footer/>

    </HashRouter>

   
  );
}
const Ruta = styled.main`
      height: 100vh;
      width: 100vw;
      background-color: ${(props) => props.theme.body};
      transition: all 0.5s ease;
      `;
