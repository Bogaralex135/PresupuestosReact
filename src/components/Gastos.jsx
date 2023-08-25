import { AgregarGasto } from './AgregarGasto/AgregarGasto'
import { ListaGastos } from './ListaGastos/ListaGastos'
export function Gastos() {
  return (
    <div className='mt-14'>
      <h2 className='text-5xl font-bold text-center mb-10'>Gastos</h2>
      <AgregarGasto />
      <ListaGastos />
    </div>
  )
}

export default Gastos
