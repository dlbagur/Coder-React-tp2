import React from 'react'
import Item from '../Items/Items'
import { Box, Flex } from '@chakra-ui/react'

const ItemList = ({products}) => {

  console.log(products)
  
  return (

    <Flex wrap={'wrap'} justify={'center'} align={'center'} mt={5} mb={5}>
      {products.map((el) => (
        <Box key={el.id} m={2}>
          <Item {...el} />
        </Box>
      ))}
    </Flex>
  )
}

export default ItemList