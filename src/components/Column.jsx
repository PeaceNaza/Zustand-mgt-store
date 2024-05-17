/* eslint-disable react/prop-types */
import Task from "./Task"

function Column({ state }) {
  return (
    <div className="text-tertiary bg-primary min-h-[20rem] w-[33%] max-w-[20rem] my-0 mx-[0.5rem] rounded-md p-3 mt-5">
    <p>{state}</p>  
    <Task title="Todo"/>
    </div>

  )
}

export default Column 
