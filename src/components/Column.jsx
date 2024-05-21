/* eslint-disable react/prop-types */
//import { useMemo } from "react"
import { useState } from "react";
import { useStore } from "../store";
import Task from "./Task";
import classNames from "classnames";
import "../Styles/App.css"

function Column({ state }) {
 const [text, setText] = useState("");
 const [open, setOpen] = useState(false);
 const [drop, setDrop] = useState(false);
  
  const tasks = useStore((store) => store.tasks.filter((task) => task.state === state) 
);

const addTask = useStore((store) => store.addTask); 

const setDraggedTask = useStore((store) => store.setDraggedTask);

const draggedTask = useStore((store) => store.draggedTask);

const moveTask = useStore((store) => store.moveTask);

  return (

    <div className={ classNames("column bg-primary shadow-lg min-h-[20rem] w-[100%] max-w-[20rem] my-0 mx-[0.5rem] rounded-md p-3 mt-5", {drop: drop})}
     onDragOver={(e) => {
      setDrop(true);
      e.preventDefault();
    }}

    onDragLeave={(e) => {
      setDrop(false);
      e.preventDefault();
    }}

      onDrop={(e) => { 
        e.preventDefault();
        setDrop(false);
        moveTask(draggedTask, state);
       setDraggedTask(null);
       
      }}
      >

      <div className="flex justify-between items-center">
         <p>{state}</p>  
         <button onClick={() => setOpen(true)} className="bg-white mb-2 py-1 px-2 rounded-md h-fit hover:bg-gray-300 cursor-pointer">Add</button>
      </div>
    {/**for each task return the task component */} 
    {tasks.map((task) => (
       <Task title={task.title} key={task.title}/>
    ))} 
     
     {/*rendered conditionally "if not open don't render*/}
     {open && (
       <div className="absolute bg-black/30 w-full h-full top-0 left-0">
       <div className="absolute bg-primary  z-[1] p-5 top-[70%] translate-x-[-50%] left-[50%] h-12 w-80 flex justify-center items-center rounded-md">
         <input onChange={(e) => setText(e.target.value)} value={text} className="outline-none rounded-sm"/>
         <button onClick={() => {
           addTask(text, state);
           setText("");
           setOpen(false)
         }} className="bg-gray-300 p-1 rounded-md ml-3 text-sm">Submit</button>
       </div>
     </div>
 
     )}
    
    </div>
  )
}

export default Column 
