/* eslint-disable react/prop-types */
import { Button } from '@chakra-ui/react'
import useAppContext from '../../hooks/useAppContext'
import { actions } from '../../Providers/AppProvider'
export function Stats({ presupuesto, disponible, gastado }) {
  const { dispatch } = useAppContext()

  function handleClick() {
    dispatch({ type: actions.RESTART })
  }

  return (
    <>
      <h2 className='text-xl'>
        <span className='font-bold text-sky-600'>Presupuesto: </span>$
        {presupuesto}
      </h2>
      <h2 className='text-xl'>
        <span className='font-bold text-sky-600'>Disponible: </span>$
        {disponible}
      </h2>
      <h2 className='text-xl'>
        <span className='font-bold text-sky-600'>Gastado: </span>${gastado}
      </h2>

      <Button p={5} mt={5} colorScheme='red' onClick={handleClick}>
        Reiniciar
      </Button>
    </>
  )
}

export default Stats
