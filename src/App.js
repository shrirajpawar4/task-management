import React from 'react';
import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';

import { extendTheme } from '@chakra-ui/react';

import Task from './component/Task';
// import AddTask from './component/AddTask';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Task />
    </ChakraProvider>
  );
}

export default App;
