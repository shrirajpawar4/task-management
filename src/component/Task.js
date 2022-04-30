import { } from '@chakra-ui/react'
import React, {useState} from 'react'
import AddTask from './AddTask'
import Card from './Card'
import { useDrag } from 'react-dnd'
import tasks from '../tasks';



export default function Task() {

    const [taskList, setTaskList] = useState([])

    const saveTask = (taskObj) => {
        setTaskList([...taskList, taskObj]);
    }

   return(
       <>
       <AddTask save={saveTask} />
       <Card title='Task 1' description='Task 1' />
       <div>
       {taskList.map(function(title, description, taskObj){
           return (
               <Card title={taskObj.Title} description={taskObj.Description} />
           )
       })}
       </div>
       </>
       
   )
};