import { Box, Button, Container, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import TodoItem from "../components/TodoItem";
import { IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const {userData}  = useSelector((state)=>state.customReducer)
  const [todo , setTodo] = useState()
  const [tittle , setTitle] = useState()
  const [description , setDescription] = useState()
  const [id , setId] = useState()
  const [model , setModel] = useState(false)
  useEffect(()=>{
    axios.get(`http://localhost:4000/api/todo/${userData._id}`).then((res)=>{
      setTodo(res.data.todo)
    }).catch((e)=>{
      console.log(e.message);
    })

  },[])

  const onDelete = (id)=>{
    axios.delete(`http://localhost:4000/api/todo/${userData._id}/${id}`).then((res)=>{
      setTodo(res.data.todo)
      
    }).catch((e)=>console.log(e.message))
  }

  const onUpdate = (id , title , description)=>{
    setModel(true)
    setId(id)
    setTitle(title)
    setDescription(description)
    

  }

  return (
    <Box padding={[5,20]}>

<Modal isOpen={model} onClose={()=>setModel(false)}  >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Title</FormLabel>
              <Input value={tittle}  onChange={(e) => setTitle(e.target.value)}  />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Description</FormLabel>
              <Input value={description} onChange={(e) => setDescription(e.target.value)}   />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={()=>{
              axios.put(`http://localhost:4000/api/todo/${userData._id}/${id}` , {tittle , description}).then((res)=>{
                setModel(false)
                setTodo(res.data.todo)
              }).catch((e)=>console.log(e.message))
            }} >
              Update
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>


        <Text fontSize={"6xl"} textAlign={"center"} marginY={10}>Your Todo</Text>
  
    
        <Stack flexDirection={["column" , "row"]} justifyContent={"center"} alignItems={"center"} >
          {todo && todo.map((item)=><TodoItem key={item._id} id={item._id} title={item.title} status={item.status} description={item.description} handelDelete={onDelete} handelUpdate = {onUpdate}/>)}
        
        </Stack>

        <HStack justifyContent={"flex-end"}>
        <Link to={"/create/todo"}>
        <IconButton
        alignSelf={"flex-end"}
      icon={<AddIcon />}
      rounded="full"
      size="lg"
      colorScheme="blue"
    />
        </Link>
        </HStack>
    </Box>
  )
}
