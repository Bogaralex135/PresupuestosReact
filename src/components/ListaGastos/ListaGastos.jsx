import { Heading, Text, Card, CardBody, CardHeader } from '@chakra-ui/react'

import useAppContext from '../../hooks/useAppContext'

export function ListaGastos() {
  const { state } = useAppContext()

  return (
    <section className='max-w-xl w-[36rem] flex flex-col gap-10'>
      {state.gastos.map(gasto => (
        <Card key={gasto.id} size={'sm'}>
          <CardHeader>
            <Heading size='lg'>{gasto.titulo}</Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize={'xl'}>${gasto.monto}</Text>
            <Text>{gasto.categoria}</Text>
            <Text>{gasto.fecha}</Text>
          </CardBody>
        </Card>
      ))}
    </section>
  )
}

export default ListaGastos
