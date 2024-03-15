import { FaHome } from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";
import { GiAutoRepair } from "react-icons/gi";
import { BiSolidCategory } from "react-icons/bi";



export const DataOptions = [
  {
    title: "Inicio",
    icon: <FaHome />,
    path: "/inicio",
  },
  {
    title: "Catalogo",
    icon: <GrCatalog />,
    path: "/Catalogo",
  },
  {
    title: "Categorias",
    icon: <BiSolidCategory />,
    path: "/",
    subNav: [
      {
        title: "Balanzas de Grasa",
      },
      {
        title: "Balanzas Industriales",
      },
    ],
  },
  
  {
    title: "Quienes Somos",
    path: "/quienes",
  },
  {
    title: "Reparación y Servicio",
    icon: <GiAutoRepair />,
    path: "/RServicio",
  },
 
  {
    id: 5,
    title: "Reportes",
    subNav: [
        {
          title: "Pedidos Realizados",
          path: "/report/Historial Pedidos",
        },
        
      ],
  },
  {
    id: 6,
    title: "Settings",
    subNav: [
        {
          title: "Libro reclamaciones",
          path: "/settings/complaintsbook",
        },
        {
          title: "Marcas",
          path: "/settings/brands",
        },
      ],
  },
];