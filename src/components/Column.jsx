/* eslint-disable react/prop-types */
import { useMemo } from "react"
import { useStore } from "../store"
import Task from "./Task"

function Column({ state }) {

  
  const tasks = useStore((store) => store.tasks.filter((task) => task.state === state)
) 

// const filtered = useMemo(() => tasks.filter((task) => task.state === state), [tasks, state])

  return (
    <div className="bg-primary shadow-lg min-h-[20rem] w-[33%] max-w-[20rem] my-0 mx-[0.5rem] rounded-md p-3 mt-5">
    <p>{state}</p>  
    {/**for each task return the task component */}
    {tasks.map((task) => (
       <Task title={task.title} key={task.title}/>
    ))}
    </div>

  )
}

export default Column 
