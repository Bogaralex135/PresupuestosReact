import { useState } from 'react'
import Form from './components/Form/Form'
import Gastos from './components/Gastos'
import Presupuesto from './components/Presupuesto'
function App() {
  const [mostrarPresupuesto, setMostrarPresupuesto] = useState(true)
  return (
    <main className='flex flex-col h-screen items-center'>
      {mostrarPresupuesto ? (
        <Form setMostrarPresupuesto={setMostrarPresupuesto} />
      ) : (
        <>
          <Presupuesto />
          <Gastos />
        </>
      )}
    </main>
  )
}

export default App
