import { useAppContext } from '../../hooks/useAppContext'
import Chart from './Chart'
import Stats from './Stats'
import { useEffect, useState } from 'react'
import { actions } from '../../Providers/AppProvider'

export function Presupuesto() {
  const { state, dispatch } = useAppContext()

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)

  useEffect(() => {
    const totalGastado = state.gastos.reduce(
      (total, gasto) => total + gasto.monto,
      0
    )
    const totalDisponible = state.presupuesto - totalGastado
    const porcentajeGastado = (
      (totalGastado / state.presupuesto) *
      100
    ).toFixed(2)

    setDisponible(totalDisponible)

    setTimeout(() => {
      setPorcentaje(porcentajeGastado)
      setGastado(totalGastado)
    }, 1000)
  }, [state.gastos, state.presupuesto])

  console.log(state)

  return (
    <div className=' flex flex-col items-center p-14 shadow-2xl '>
      <div className='bg-sky-600 text-white p-10 rounded '>
        <h2 className='font-bold text-5xl'>Presupuesto</h2>
      </div>

      <div className='flex justify-between items-center w-full p-5 gap-16'>
        <div className='w-1/2'>
          <Chart
            presupuesto={state.presupuesto}
            porcentaje={porcentaje}
            gastado={gastado}
          />
        </div>

        <div className='w-1/2'>
          <Stats
            presupuesto={state.presupuesto}
            disponible={disponible}
            gastado={gastado}
          />
        </div>
      </div>
    </div>
  )
}

export default Presupuesto
