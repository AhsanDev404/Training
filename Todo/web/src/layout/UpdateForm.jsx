import React, { useState, useEffect } from 'react';
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

function UpdateForm({ todo, onUpdate }) {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     setTitle(todo.title);
//     setDescription(todo.description);
//   }, [todo]);

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedTodo = { ...todo, title, description };
//     onUpdate(updatedTodo);
//   };

  return (
    <Center>
      <Box
        bg="white"
        p={8}
        rounded="md"
        shadow="md"
        w={{ base: '90%', sm: '400px' }}
      >
        <Heading size="lg" mb={4}>
          Update Todo
        </Heading>
        {/* <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={handleTitleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </FormControl>
          <Button colorScheme="blue" type="submit" mt={4} w="100%">
            Update
          </Button>
        </form> */}
      </Box>
    </Center>
  );
}

export default UpdateForm;
