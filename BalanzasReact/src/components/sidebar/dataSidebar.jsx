import { FaHome } from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";
import { GiAutoRepair } from "react-icons/gi";
import { BiSolidCategory } from "react-icons/bi";



export const DataOptions = [
  {
    title: "Inicio",
    icon: <FaHome />,
    path: "/home",
  },
  {
    title: "Catalogo",
    icon: <GrCatalog />,
    path: "/Catalogo",
  },
  {
    title: "Categorias",
    icon: <BiSolidCategory />,
    path: "/Catalogo",
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
    title: "Reparación y Servicio",
    icon: <GiAutoRepair />,
    path: "/RServicio",
  },
  {
    title: "Productos",
    path: "/products",
  },
  {
    id: 5,
    title: "Reportes",
    subNav: [
        {
          title: "Historal medico",
          path: "/report/medicalHistory",
        },
        {
          title: "Ventas",
          path: "/report/ventas",
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