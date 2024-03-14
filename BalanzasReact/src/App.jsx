import { MyRouters } from './routers/router'
import { DatosProvider } from './components/datos/DatosContext'
import styled from '@emotion/styled'
export function App() {

  return (
    <>
    <DatosProvider>
    <MyRouters/>
    </DatosProvider>

    </>
  )
}

