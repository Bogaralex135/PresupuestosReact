import { useAppContext } from '../hooks/useAppContext'

export function Presupuesto() {
  const { state } = useAppContext()

  return (
    <div className=' flex flex-col items-center p-20 shadow-lg'>
      <div className='bg-sky-600 text-white p-10 rounded '>
        <h2 className='font-bold text-5xl'>Presupuesto</h2>
      </div>

      <div>
        <h2>${state.presupuesto}</h2>
      </div>
    </div>
  )
}

export default Presupuesto
