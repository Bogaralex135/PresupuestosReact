/* eslint-disable react/prop-types */
import Form from './components/Form/Form'
import Gastos from './components/Gastos'
import Presupuesto from './components/Presupuesto/Presupuesto'
import useAppContext from './hooks/useAppContext'
function App() {
  const { state } = useAppContext()

  return (
    <main className='flex flex-col h-screen items-center'>
      {state.mostrarPresupuesto ? (
        <Form />
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
