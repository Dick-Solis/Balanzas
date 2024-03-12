import { MyRouters } from './routers/router'
import { DatosProvider } from './components/datos/DatosContext'
export function App() {

  return (
    <>
    <DatosProvider>
    <MyRouters/>
    </DatosProvider>

    </>
  )
}

