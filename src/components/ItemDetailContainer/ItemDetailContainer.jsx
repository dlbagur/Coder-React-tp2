import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import {ScaleLoader} from 'react-spinners'
import { Flex } from '@chakra-ui/react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [ producto, setProducto ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { productoId } = useParams()

    const Navigate = useNavigate()

    useEffect(() => {
        getProductById(productoId)
            .then((data) => {
                if (!data) {
                    Navigate('/*')
                } else {
                    setProducto(data)
                }
            })
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