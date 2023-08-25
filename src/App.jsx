import { useState } from 'react'
import Form from './components/Form/Form'
import AgregarGasto from './components/AgregarGasto/AgregarGasto'
function App() {
  const [mostrarPresupuesto, setMostrarPresupuesto] = useState(true)
  return (
    <main className='flex justify-center items-center mt-20'>
      {mostrarPresupuesto ? (
        <Form setMostrarPresupuesto={setMostrarPresupuesto} />
      ) : (
        <AgregarGasto />
      )}
    </main>
  )
}

export default App
