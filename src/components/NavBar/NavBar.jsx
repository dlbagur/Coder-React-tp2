import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Menu, MenuButton,
    MenuList, MenuItem,
    MenuItemOption, MenuGroup,
    MenuOptionGroup, MenuDivider,
    Box, Button, Flex, Heading, 
    Image, Link as ChakraLink
  } from '@chakra-ui/react'
import { TiArrowDownOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex 
        h={'10vh'} 
        w={'100%'} 
        justify={'space-between'} 
        align={'center'} 
        backgroundColor={'#c8b6ff'}
        >
        {/* <Heading fontSize={'xl'} m={2}> */}
        {/* <Link to='/0'>La Vinoteca */}
          <ChakraLink as={Link} to='/'>
            <Image w={'60%'} src={'../../imagenes/logo.png'} />
            // La Vinoteca
          </ChakraLink>
        {/* </Heading> */}
        <Menu>
            <MenuButton as={Button} rightIcon={<TiArrowDownOutline />}>
                Sus Vinos
            </MenuButton>
            <MenuList>
                <MenuItem>
                  <Link to='/categorias/Tintos'>Tintos</Link>
                </MenuItem>
                <MenuItem>
                  <Link to='/categorias/Blancos'>Blancos</Link>
                </MenuItem>
                <MenuItem>
                  <Link to='/categorias/Rosados'>Rosados</Link>
                </MenuItem>
                <MenuItem>
                  <Link to='/categorias/Espumantes'>Espumantes</Link>
                </MenuItem>
            </MenuList>
        </Menu>
        <CartWidget />
    </Flex>
  )
}

export default NavBar
