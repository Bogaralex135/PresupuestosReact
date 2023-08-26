import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
  InputGroup,
  Stack,
  Input,
  Select,
  InputLeftElement,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { AddIcon, AtSignIcon, CalendarIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { useAppContext } from '../../hooks/useAppContext'
import { v4 as uuidv4 } from 'uuid'
import { actions } from '../../Providers/AppProvider'
import { categorias } from '../../constantes'

export function AgregarGasto() {
  const [titulo, setTitulo] = useState('')
  const [monto, setMonto] = useState(0)
  const [fecha, setFecha] = useState('')
  const [categoria, setCategoria] = useState('')

  const { dispatch } = useAppContext()

  function handleClose() {
    onClose()
    toast({
      title: 'Gasto agregado.',
      description: 'Se ha agregado el gasto correctamente.',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    })

    dispatch({
      type: actions.ADD_GASTO,
      payload: {
        id: uuidv4(),
        titulo,
        monto: parseInt(monto),
        fecha,
        categoria,
      },
    })

    setTitulo('')
    setMonto(0)
    setFecha('')
    setCategoria('')
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  const toast = useToast()
  return (
    <div className='fixed bottom-10 right-10'>
      <Button
        leftIcon={<Icon as={AddIcon} />}
        onClick={onOpen}
        colorScheme='blue'>
        Agregar
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agregar Gasto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <AtSignIcon color='gray.300' />
                  </InputLeftElement>
                  <Input
                    type='text'
                    placeholder='Nombre del gasto'
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                  />
                </InputGroup>

                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'>
                    $
                  </InputLeftElement>
                  <Input
                    type='number'
                    placeholder='Monto'
                    value={monto}
                    onChange={e => setMonto(e.target.value)}
                  />
                </InputGroup>

                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <CalendarIcon color='gray.300' />
                  </InputLeftElement>
                  <Input
                    type='date'
                    value={fecha}
                    onChange={e => setFecha(e.target.value)}
                  />
                </InputGroup>

                <Select
                  placeholder='Seleccionar Categoría'
                  value={categoria}
                  onChange={e => setCategoria(e.target.value)}>
                  {categorias.map(categoria => (
                    <option key={categoria} value={categoria}>
                      {categoria}
                    </option>
                  ))}
                </Select>
              </Stack>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme='blue'
              mr={3}
              p={3}
              onClick={handleClose}
              type='submit'>
              Agregar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default AgregarGasto
