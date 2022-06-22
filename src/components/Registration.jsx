import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea 
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';

//here I used navigate to redirect to the homepage.
import { useNavigate } from 'react-router'

export default function Registration() {
  const navigate = useNavigate() //here I declared navigate function
  
  //here I took the object as the initial state of hook.
  const initalState = {
    firstname : "",
    lastname : "",
    email : "",
    dateOfBirth : "" ,
    description : ""
  }

  //here I initiated the state to the initialstate
  const [text, setText] = useState(initalState)
  
  //this is handle function to store the input value to the state
  const handleChange = (e) =>{
    const {id, value} = e.target
    setText({...text, [id] : value})
  }
 // console.log(text)

 //this is the function to store the data of user to the database.
 const signup = (e) =>{
    e.preventDefault()
    if( text.firstname.length==0 && text.lastname.length==0 && text.email.length==0 && text.dateOfBirth.length==0 && text.description.length==0){
      alert("please enter the details")
    }else{
      //By using axios, I posted the data into the database.
      axios.post("https://unitag.herokuapp.com/users", text)
      .then(alert("saved successfully"))
       .then(setText({firstname: "" , lastname: "", email: "", dateOfBirth: "", description:""}))
       //here I redirected the page using navigate.
       navigate("/")
    }
  }
  
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading color="#68D391" fontSize={'4xl'}>Register your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input value={text.firstname}  id="firstname" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input value={text.lastname} id="lastname" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Email</FormLabel>
              <Input value={text.email} id="email" onChange={handleChange}/>
            </FormControl>
            <FormControl >
              <FormLabel>Date of birth</FormLabel>
              <Input value={text.dateOfBirth} id="dateOfBirth" type="date" onChange={handleChange}/>
            </FormControl>
            <FormControl>
              <FormLabel>Short Description about your self</FormLabel>
              <Textarea value={text.description} id="description" onChange={handleChange} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
              </Stack>
             
              <Button 
               
              onClick={signup}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                SAVE 
              
              </Button>
        
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}