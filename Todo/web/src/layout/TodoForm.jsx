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

function TodoForm() {
 

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
        <form >
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              placeholder="Enter title"
            
             
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              placeholder="Enter description"
             
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
