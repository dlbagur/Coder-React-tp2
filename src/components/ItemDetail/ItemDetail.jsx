import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast} from 'reeact-toastify'
import { Box } from '@chakra-ui/react'

function ItemDetail({nombre, descripcion, precio, stock}) {
    console.log('ItemDetail', producto)  
    
    const onAdd = (cantidad) => {
        toast(`Agregaste ${quantity} unidad/es`)
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
