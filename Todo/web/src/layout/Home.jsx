import { Box, Button, Container, HStack, Text } from "@chakra-ui/react";
import TodoItem from "../components/TodoItem";
import { IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <Box padding={20}>
        <Text fontSize={"6xl"} textAlign={"center"} marginY={10}>Your Todo</Text>
      
     
    
        <HStack >
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        </HStack>

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
