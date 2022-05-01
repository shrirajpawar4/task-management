import { Badge} from '@chakra-ui/react'
import React, {useState} from 'react'
import AddTask from './AddTask'
import Card from './Card'
// import { useDrag } from 'react-dnd'
// import tasks from '../tasks';



export default function Task() {

    const [taskList, setTaskList] = useState([])

    const saveTask = (taskObj) => {
        setTaskList([...taskList, taskObj]);
    }

   return(
       <>
       <AddTask save={saveTask} />
       <div>
       {taskList.map(function(taskObj){
           return (
               <>
               <Card
               description={taskObj.Description} 
               status={taskObj.Status}
               />
               </>
           )
       })}
       </div>
       </>
       
   )
};