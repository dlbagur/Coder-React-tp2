import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast} from 'react-toastify'
import { Box, Flex } from '@chakra-ui/react'

const ItemDetail = ({marca, nombre, descripcion, img, precio, stock}) => {
    console.log("imagen: ", img)
    const onAdd = (cantidad) => {
        toast(`Agregaste ${cantidad} unidad/es`)
    }

  return (
    <Flex>
      <Box
          width = '20%'
          alignItems="center"
          height="50vh"
          display="flex"
          flexDirection='column'
          bg='gray.300' 
          color='brown' 
          fontSize='2xl' 
          >
        <Box p='50px' >Producto:</Box>
        <Box p='5px' fontWeight='bold'>{nombre}</Box>
        <Box p='50px' >Bodega:</Box>
        <Box p='5px' fontWeight='bold'>{marca}</Box>
      </Box>
      <Box 
          bg='#B4B6BE'
          width = '80%'
          display="flex"
          p='20'
          justifyContent="center"
          alignItems="center"
          height="50vh"
          flexDirection='column'
          color='black' 
          fontSize='2xl'>
          <Box mb='20px'>{descripcion}</Box>
          <Box mb='20px' fontWeight='bold' >Precio por unidad: ${precio}</Box>
      </Box>
      <Box
          width = '20%'
          p='50' bg='red.800' size='2xl' color={'brown'}>
              <ItemCount stock={stock} valorInicial={1} onAdd={onAdd}/>
              <ToastContainer />
      </Box>
    </Flex>
  )
}

export default ItemDetail


// npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion


// const CenteredBox = ({ children }) => {
//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       height="100vh"
//     >
//       {children}
//     </Box>
//   );
// };

// export default CenteredBox;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { ChakraProvider } from '@chakra-ui/react';
// import CenteredBox from './CenteredBox';

// const App = () => {
//   return (
//     <ChakraProvider>
//       <CenteredBox>
//         <h1>Mi Contenido Centrado</h1>
//       </CenteredBox>
//     </ChakraProvider>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));
