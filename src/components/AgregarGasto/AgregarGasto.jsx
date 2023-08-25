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
import useAppContext from '../../hooks/useAppContext'
import { v4 as uuidv4 } from 'uuid'
import { actions } from '../../Providers/AppProvider'

export function AgregarGasto() {
  const [gasto, setGasto] = useState('')
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
      position: 'bottom-right',
    })

    dispatch({
      type: actions.ADD_GASTO,
      payload: {
        id: uuidv4(),
        gasto,
        monto: parseInt(monto),
        fecha,
        categoria,
      },
    })

    setGasto('')
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
    <>
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
                    placeholder='Gasto'
                    value={gasto}
                    onChange={e => setGasto(e.target.value)}
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
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </Stack>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme='blue'
              mr={3}
              onClick={handleClose}
              type='submit'>
              Agregar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AgregarGasto
