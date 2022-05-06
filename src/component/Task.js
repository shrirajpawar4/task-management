// import { useState, useEffect } from 'react';


// const Task = ({tasks}) => {
//   // const [taskList, setTaskList] = useState([])

//   //   const saveTask = (taskObj) => {
//   //       setTaskList([...taskList, taskObj]);
//   //   }


//   return(
//     <>
//       {/* {tasks.map((taskObj) => {
//         return (
//           console.log(taskObj.description)
//         )
//       })} */}

//       {
//         tasks.map((taskObj, description) => (
//           <>
//           {/* { JSON.stringify(taskObj)} */}
//           <Card
//           description={description}
//            />
//           </>
//         ))
//       }
//     </>
//   )
// }

// export default Task

import AddTasks from "./AddTasks";

const Task = (tasks) => {
  return (
    <>
      {
      tasks.map((task) => {
        <AddTasks task={task} />
      })
    }
    </>
  )
}

export default Task 