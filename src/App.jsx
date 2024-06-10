import React from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path='/' element={<ItemListContainer title={'La Vinoteca'}/>} />
        <Route path='/categorias/:categoryId' element={<ItemListContainer title={'La Vinoteca'}/>} />
        <Route path='/producto/:productoId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App

/* <NavBar />
<ItemListContainer title='Vinoteca' /> */
