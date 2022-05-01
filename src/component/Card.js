import { Box, Badge } from '@chakra-ui/react';


function Card({ description, status }) {
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
      <p>{description}</p>

      <p>{status}</p>
      <Badge ml='2' h='6' px='4' variant='subtle' colorScheme='red'>{status}</Badge>
    </Box>
  );
}

export default Card;