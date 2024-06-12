import React from 'react'
import { Flex, Spacer, Square, Text, Box, Image } from '@chakra-ui/react'
import logo from "../../assets/imagenes/logo.png"

function PageNotFound404() {
  return (
    <Flex color='white' h={'10vh'} >
      <Square bg='blue.800' size='300px'>
        <Text> ERROR 404   </Text>
        <Image src={logo} /> 
      </Square>
    </Flex>
  )
}

export default PageNotFound404