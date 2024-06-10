import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import {ScaleLoader} from 'react-spinners'

function ItemDetailContainer() {
    const [ producto, setProducto ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { productoId } = useParams()

    useEffect(()=>{
        getProductById(productoId)
            .then((data) => setProducto(data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    },[])

    console.log(producto)  
  return (
    <div>
      {
        loading ?
        <Flex justify={'center'} align={'center'} h={'50hv'}>
            <ScaleLoader color="#36d7b7" />
        </Flex>
        :
        <ItemDetail {...producto} />
      }

    </div>
  )
}

export default ItemDetailContainer