import { Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import ItemList from "../ItemList/ItemList"
import { useParams, useSearchParams } from 'react-router-dom'
import { ScaleLoader } from 'react-spinners'


const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const eligioProducto = categoryId ? getProductsByCategory(categoryId) : getProducts()
    eligioProducto
      .then ((data) => setProducts(data))
      .catch((error) => console.log(error))
      .finally(()=>setLoading(false))

  },[categoryId])

  return (
    <Flex
      direction={'column'} justify={'center'} align={'center'}> 
      <Heading color={'#FCD7B6'} mt={10}>{title}</Heading>
      {
        loading ?
        <Flex justify={'center'} align={'center'} h={'50hv'}>
          <ScaleLoader color="#36d7b7" />
        </Flex>
        :
        <ItemList products={products} />
      }
    </Flex>
  )
}

export default ItemListContainer
