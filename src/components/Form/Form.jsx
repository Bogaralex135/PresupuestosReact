/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useAppContext } from '../../hooks/useAppContext'
import { actions } from '../../Providers/AppProvider'
import {
  Input,
  InputGroup,
  Stack,
  InputLeftElement,
  Button,
  useToast,
} from '@chakra-ui/react'

export function Form() {
  const [presupuesto, setPresupuesto] = useState(0)
  const { dispatch } = useAppContext()

  const handleSubmit = e => {
    e.preventDefault()

    dispatch({
      type: actions.SET_PREPUESTO,
      payload: parseInt(presupuesto),
    })
    dispatch({ type: actions.MOSTRAR_PRESUPUESTO, payload: false })
  }

  const toast = useToast()

  return (
    <form className='max-w-xl w-[36rem] mt-20' onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'>
            $
          </InputLeftElement>
          <Input
            placeholder='Ingrese su presupuesto'
            size={'md'}
            value={presupuesto}
            type='number'
            onChange={e => setPresupuesto(e.target.value)}
            autoFocus
          />
        </InputGroup>
        <Button
          colorScheme='blue'
          size='lg'
          type='submit'
          onClick={() =>
            toast({
              title: 'Presupuesto agregado.',
              description: 'Se ha agregado el presupuesto correctamente.',
              status: 'success',
              duration: 3000,
              isClosable: true,
              position: 'top-right',
            })
          }>
          Agregar Presupuesto
        </Button>
      </Stack>
    </form>
  )
}

export default Form
