// import React from 'react';
// import {
//   ChakraProvider,
//   theme
// } from '@chakra-ui/react';

// import { extendTheme } from '@chakra-ui/react';

// import Task from './component/Task';
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
import { Box } from "@chakra-ui/react";
import AddTasks from "./component/AddTasks";
import Task from './component/Task';

function App() {
  const [tasks, setTasks] = useState([
    {
      key: 1,
      description: 'Task 1'
  },
  {
      key: 1,
      description: 'Task 2'
  },
  ]);

  const handleCreate = ({ description }) => {
      setTasks([...tasks, { description: description, }]);
  };


  return (
    <Box h="100%" className="App">
      <AddTasks handleCreate={handleCreate} tasks={tasks} />
      <Task tasks={tasks} /> 
    </Box>
  );
}

export default App;