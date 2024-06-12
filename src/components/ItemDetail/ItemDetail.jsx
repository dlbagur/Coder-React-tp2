import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast} from 'react-toastify'
import { Box } from '@chakra-ui/react'

const ItemDetail = ({nombre, descripcion,precio, stock}) => {
    
    const onAdd = (cantidad) => {
        toast(`Agregaste ${cantidad} unidad/es`)
    }

  return (
    <Box>
        nombre: {nombre}
        descripcion: {descripcion}
        precio: {precio}
        <ItemCount stock={stock} valorInicial={1} onAdd={onAdd}/>
        <ToastContainer />
    </Box>
  )
}

export default ItemDetail
