// import React from 'react';
// import {
//   ChakraProvider,
//   theme
// } from '@chakra-ui/react';

// import { extendTheme } from '@chakra-ui/react';

 import Task from './component/Task';
// import AddTask from './component/AddTask';
// // import AddTask from './component/AddTask';


// function App() {
//   return (
//     <ChakraProvider theme={theme}>
//       <AddTask />
//     </ChakraProvider>
//   );
// }

// export default App;

// import TodoList from "./components/TodoList";
import { useState } from "react";
import { v1 as v1id } from "uuid";
// import Footer from "./Footer";
import { Box, useToast } from "@chakra-ui/react";
import AddTask from "./component/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const toast = useToast();

  const handleCreate = (value) => {
    if (value !== "") {
      setTasks([...tasks, { id: v1id(), value }]);
      toast({
        position: "bottom-left",
        title: "Success",
        description: "Task Created!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        position: "bottom",
        title: "Something's Wrong",
        description: "Please enter some value!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box h="100%" className="App">
      <AddTask handleCreate={handleCreate} />
      <Task tasks={tasks} /> 
    </Box>
  );
}

export default App;