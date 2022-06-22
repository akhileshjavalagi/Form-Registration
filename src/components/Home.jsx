import React from 'react'
import { Heading, Button, Box, Center } from '@chakra-ui/react'
import { Link } from "react-router-dom"
//import { Box } from '@chakra-ui/react'
export default function Home() {
  return (
    <>
     <Box w="30%" margin="auto" mt="100px"  >
    <Heading color="#4299E1">USERS DATABASE</Heading>
     {/* this is registration link to redirect to the page */}
     <Link to="/registration">
     <Box mt="20px" _hover={{ bg: "#FEB2B2" }}
    _focus={{ boxShadow: "outline" }} boxShadow='dark-lg' p='6' rounded='md' bg='white'  w='100%' p={4} color='green' h="200px">
         <Heading fontFamily="cursive" mt="60px">CREATE</Heading>
     </Box>
     </Link>
     
     {/* This is the link to go to the view page */}
     <Link to="/view">
     <Box _hover={{ bg: "#FEB2B2" }}
    _focus={{ boxShadow: "outline" }} boxShadow='dark-lg' p='6' rounded='md' bg='white'  w='100%' mt="20px" p={4} color='green' h="200px">
     <Heading fontFamily="cursive" mt="60px">VIEW</Heading>
     </Box>
     </Link>
     </Box>
    </>
  )
}
