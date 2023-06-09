import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';



export default function MyContainer() {
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });
  const animationVariants = {
    hidden: { x: -500 },
    visible: { x: 0 },
  };
  
  return (
    
    <motion.div
    ref={ref}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    variants={animationVariants}
    transition={{ duration: 0.5 }}
  >
  
    <Box border={"1px"} w={400} h={200} bg={"red.500"} margin={20}></Box>
  </motion.div>
     
   
  );
}
