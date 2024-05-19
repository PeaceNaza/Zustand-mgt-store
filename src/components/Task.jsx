/* eslint-disable react/prop-types */
import classNames from "classnames"
import "../Styles/App.css"
import { useStore } from "../store"

function Task({title}) {

  const task = useStore((store) => store.tasks.find((task) => task.title === title))

  return (
    <>
      <div className='bg-white rounded-md min-h-[5rem] p-3 flex flex-col justify-between'>
        <div>{task.title}</div>
        <div className="flex justify-between">
          <div></div>
          <div className={classNames("text-xs p-[5px] rounded-md", task.state)}>{task.state}</div>
        </div>
      </div>
    </>
  )
}

export default Task
