
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link, useNavigate, useNavigation } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidation } from '../validation/schema';
import axios from "axios";
import {  useDispatch } from 'react-redux';
function Login() {
  const dispatch = useDispatch();
  const navigate  = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
       // resolver: yupResolver(loginValidation),
      });
      const onSubmit = (data) => {
        axios.post("http://localhost:4000/api/login",data ).then((res)=>{
          dispatch({ type: "setUser", payload: res.data.user });
          navigate('/')

          
        }).catch((err)=>{console.log(err.message);})
      };
  return (
    <Flex minH="100vh" align="center" justify="center">
      <Box
        bg="white"
        p={8}
        rounded="md"
        shadow="md"
        w={{ base: '90%', sm: '400px' }}
      >
        <Box mb={4}>
          <Heading size="lg" textAlign="center">
            Login
          </Heading>
        </Box>
        <Box mt={8}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input value={'ahsan@email.com'} {...register('email')} type="email" placeholder="Enter your email" />
                {errors.email && <Text fontSize={"xs"} color={"red"}>{errors.email.message}</Text>}
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input value={'12345678'} {...register('password')} type="password" placeholder="Enter your password" />
                {errors.password && <Text fontSize={"xs"} color={"red"}>{errors.password.message}</Text>}
              </FormControl>
              <Button colorScheme="blue"  type="submit" >
                Login
              </Button>
            </Stack>
          </form>
          <Link to={"/signup"}><Button colorScheme="blue"  bg={"red.200"} width={"100%"} my={5} >
                Signup
              </Button></Link>
        </Box>
      </Box>
    </Flex>
  );
}

export default Login;
