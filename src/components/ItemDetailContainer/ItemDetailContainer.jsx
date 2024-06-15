import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import {ScaleLoader} from 'react-spinners'
import { Flex, Heading } from '@chakra-ui/react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({title}) => {
    const [ producto, setProducto ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { productId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        getProductById(productId)
            .then((data) => {
                if (!data) {
                    navigate('/*')
                } else {
                    setProducto(data)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    },[])

    return (
        <Flex
        direction={'column'} justify={'center'} align={'center'}>
        <Heading color={'#800080'} mt={10}>
          {title}
        </Heading>
            {
                loading ?
                <Flex justify={'center'} align={'center'} h={'50hv'}>
                    <ScaleLoader color="#36d7b7" />
                </Flex>
                :
                <ItemDetail {...producto} />
            }
        </Flex>
  )
}

export default ItemDetailContainer