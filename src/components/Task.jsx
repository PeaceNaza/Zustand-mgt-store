import React from 'react'

function Task({title}) {

  return (
    <div className='bg-white rounded-md min-h-[5rem] p-3'>
      {title}
    </div>
  )
}

export default Task
