import { Box } from '@chakra-ui/react';

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
      <p>{description}</p>
    </Box>
  );
}

export default Card;