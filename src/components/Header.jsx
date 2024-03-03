import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
// import "./button.css"; 
  
const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"}bgColor={"blackAlpha.900"} mx="auto" justifyContent="space-evenly">
        <Button  color={"white"}>
            <Link to="/">Home</Link>
        </Button>
        <Button  color={"white"}>
            <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button color={"white"}>
            <Link to="/coins">Coins</Link>
        </Button>
        <Button  color={"white"}>
            <Link to="/signup">Sign up / Sign in</Link>
        </Button>
    
    </HStack>
    
  )
}

export default Header
