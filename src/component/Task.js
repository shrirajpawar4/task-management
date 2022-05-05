// import { Badge} from '@chakra-ui/react'
//import React, {useState} from 'react'
// import AddTask from './AddTask'
// import Card from './Card'
// // import { useDrag } from 'react-dnd'
// // import tasks from '../tasks';



// export default function Task() {

//     const [taskList, setTaskList] = useState([])

//     const saveTask = (taskObj) => {
//         setTaskList([...taskList, taskObj]);
//     }

//     function TodoList({ todos, deleteTodo }) {
//         if (!todos.length) {
//           return (
//             <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
//               No Todos, yay!!!
//             </Badge>
//           );
//         }

//    return(
//        <>
//        <AddTask save={saveTask} />
//        <div>
//        {taskList.map(function(taskObj){
//            return (
//                <>
//                <Card
//                description={taskObj.Description} 
//                status={taskObj.Status}
//                />
//                </>
//            )
//        })}
//        </div>
//        </>
       
//    )
// };


import { useState, useEffect } from 'react';


const Task = ({tasks}) => {
  const [taskList, setTaskList] = useState([])

    const saveTask = (taskObj) => {
        setTaskList([...taskList, taskObj]);
    }


  return(
    <>
      {taskList.map((taskObj) => {
        return (
          console.log(taskObj.description)
        )
      })}
    </>
  )
}

export default Task