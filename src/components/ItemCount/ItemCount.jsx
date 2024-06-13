import React, { useState } from 'react'
import { Box, Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'

const ItemCount = ({stock, valorInicial, onAdd}) => {
    const [ count, setCount ] = useState(valorInicial)
    const stockXXX = stock
  
    const incrementar = () => {
        count < stock && setCount(count + 1)
    }

    const decrementar = () => {
        count > valorInicial && setCount(count - 1)
    }

  return (

    <Flex alignItems="center" flexDirection="column">
      <Flex alignItems="center" mt="10">
        <Button colorScheme="blue" fontWeight="bold" onClick={decrementar} size="md">
          -
        </Button>
        <Text fontSize="2xl" fontWeight="bold" color="black" mx="18px">
          {count}
        </Text>
        <Button colorScheme="blue" fontWeight="bold" onClick={incrementar} size="md">
          +
        </Button>
      </Flex>
      <Button colorScheme="green" mt="20" onClick={() => onAdd(count)}>
        Agregar al Carrito
      </Button>
    </Flex>
  )
}

export default ItemCount
