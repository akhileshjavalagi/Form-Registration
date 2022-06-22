import React,{useState, useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Button
} from '@chakra-ui/react'

export default function View() {

  //here I took a hook to store the data in the form of array.
  const [data, setData] = useState([])
  
  //I used useEffect to render.
  useEffect(()=>{
      getData()
  },[])
  
  //this is the function to fetch the data from the database.
  const getData = async() =>{
      const res = await axios.get("https://unitag.herokuapp.com/users")
      setData(res.data)
     
  }
  
 // console.log(data)
  return (
    <div>
      <Heading color="#F687B3">REGISTERED RECORDS</Heading>
      <TableContainer mt="30px" >
  <Table variant='simple'>
    <Thead>
      <Tr bgColor="#9AE6B4" >
        <Th>id</Th>
        <Th>First Name</Th>
        <Th>Last Name</Th>
        <Th>Email</Th>
        <Th>Date of Birth</Th>
        <Th>Description</Th>
      </Tr>
    </Thead>
    <Tbody>
     {/* I used map method to loop the data */}
        {
          data.map((e)=>(
            <Tr>
            <>
            <Td>{e.id}</Td>
            <Td>{e.firstname}</Td>
            <Td>{e.lastname}</Td>
            <Td>{e.email}</Td>
            <Td>{e.dateOfBirth}</Td>
            <Td>{e.description}</Td>
            </>
            </Tr>
          ))
        }
    </Tbody>
  </Table>
</TableContainer>
 <Link to="/">
 <Button mt="20px" bgColor="#63B3ED">GoBack to HomePage</Button>
 </Link> 
    </div>
  )
}
