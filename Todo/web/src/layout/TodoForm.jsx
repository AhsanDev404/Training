import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function TodoForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {userData}  = useSelector((state)=>state.customReducer)
  const navigate  = useNavigate()
  const onSubmit = (data) => {
    axios.post(`http://localhost:4000/api/todo/${userData._id}`,data).then(()=>{
      navigate('/')
    }).catch((err)=>{console.log(err.message);})
  }

  return (
    <Center minH={"90vh"}>
      <Box
        bg="white"
        p={8}
        rounded="md"
        shadow="md"
        w={{ base: '90%', sm: '400px' }}
      >
        <Heading size="lg" mb={4}>
          Add Todo
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              placeholder="Enter title"
              {...register('title')}
             
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              placeholder="Enter description"
              {...register('description')}
            />
          </FormControl>
          <Button colorScheme="blue" type="submit" mt={4} w="100%">
            Add
          </Button>
        </form>
      </Box>
    </Center>
  );
}

export default TodoForm;
