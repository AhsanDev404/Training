import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function TodoItem({ id = "id", title = "title", description = "description", status ="inprogress", handelDelete , handelUpdate }) {
  const {userData}  = useSelector((state)=>state.customReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  return (
    <Box
      bg="white"
      p={4}
      rounded="md"
      shadow="md"
      mb={4}
      w={{ base: '90%', sm: '400px' }}
    >
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Text mb={2}>{description}</Text>
      <Text color={status === 'completed' ? 'green.500' : 'red.500'}>
        {status}
      </Text>
      <Flex justify="space-between" mt={4}>
        <Button colorScheme="red" onClick={()=>{
         
         handelDelete(id)
        }}>
          Delete
        </Button>
        <Button colorScheme="blue" onClick={()=>{
          handelUpdate(id , title , description)
        }} >
          Update
        </Button>
      </Flex>
    </Box>
  );
}

export default TodoItem;
