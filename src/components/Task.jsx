/* eslint-disable react/prop-types */
import classNames from "classnames"
import "../Styles/App.css"
import { useStore } from "../store"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"


function Task({title}) {

  const task = useStore((store) => store.tasks.find((task) => task.title === title)); //get the task with the specific title from the store

  const setDraggedTask = useStore((store) => store.setDraggedTask); //get the setDraggedTask function from the store
  
  const deleteTask = useStore((store) => store.deleteTask); //get the deleteTask function from the store
  

  return (
    <>
      <div className='bg-gray-300 rounded-md min-h-[5rem] p-3 flex flex-col justify-between mb-2 cursor-move' draggable onDragStart={() => {
        setDraggedTask(task.title)
        }}
        >
        <div>{task.title}</div>
        <div className="flex justify-between mt-5">
          <div>
            <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteTask(task.title)} className="cursor-pointer h-5" />
          </div>
          <div className={classNames("text-xs p-[5px] rounded-md", task.state)}>{task.state}</div>
        </div>
      </div>
    </>
  )
}

export default Task
