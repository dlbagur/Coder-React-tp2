import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, ButtonGroup, Button, Divider, Heading, Center, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Item = ({id, nombre, marca, img, precio}) => {

  return (

      <Card maxW='sm' border='3px' borderColor='#243F4D' boxShadow='2xl'>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <Heading size='sm' color={'brown'}>Cod. Producto: {id}</Heading>
          </Stack>
          
          <Stack mt='6' spacing='3'>
            <Heading size='l' color={'brown'}>Producto</Heading>
            <Text color='blue.600' fontSize='2xl'>
                {nombre}
            </Text>
          </Stack>

          
          <Stack mt='6' spacing='3'>
            <Heading size='l' color={'brown'}>Bodega</Heading>
            <Text color='blue.600' fontSize='2xl'>
              {marca}
            </Text>
          </Stack>
          
          <Image
            src={img}
            alt={nombre}
            borderRadius='md'
            boxSize='40%'
            objectFit='cover' 
            w={'100px'}
            h='200px' 
          />
                  
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Precio por unidad:</Heading>
            <Text color='blue.600' fontSize='2xl'>
              ${precio}
            </Text>
          </Stack>
        </CardBody>

        <Center height='2px' bg={'#243F4D'}>
        </Center>
        <Divider color={'#243F4D'}  />

        <CardFooter>
          <Flex spacing='2' justifyContent={'center'} align={'center'} w={'100%'}>
            <Button 
              variant='solid' 
              bg={'#243F4D'} 
              color={'#fff'}
              _hover={{ bg: '#3E6478', color: '#fff' }}
              >
                <Link to={`/products/${id}`}>
                  Ver detalle
                </Link>
            </Button>
  
          </Flex>
        </CardFooter>
      </Card>
    )
  }

export default Item