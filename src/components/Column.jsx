/* eslint-disable react/prop-types */
//import { useMemo } from "react"
import { useStore } from "../store"
import Task from "./Task"

function Column({ state }) {

  
  const tasks = useStore((store) => store.tasks.filter((task) => task.state === state)
) 

// const filtered = useMemo(() => tasks.filter((task) => task.state === state), [tasks, state])

  return (

    <div className="bg-primary shadow-lg min-h-[20rem] w-[33%] max-w-[20rem] my-0 mx-[0.5rem] rounded-md p-3 mt-5">
      <div className="flex justify-between items-center">
         <p>{state}</p>  
         <button className="bg-white mb-2 py-1 px-2 rounded-md h-fit hover:bg-gray-300 cursor-pointer">Add</button>
      </div>
    {/**for each task return the task component */} 
    {tasks.map((task) => (
       <Task title={task.title} key={task.title}/>
    ))} 
    </div>

  )
}

export default Column 
