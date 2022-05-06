import { Box } from '@chakra-ui/react';
import AddTask from './AddTask';


function Card({ description }) {
  return (
    <Box
      mt="18"
      ml="14"
      p='4'
      display={{ md: 'flex' }}
      maxWidth="14rem"
      borderWidth={1}
      height={28}
    >
    <h2>{description}</h2>
    </Box>
  );
}

export default Card;