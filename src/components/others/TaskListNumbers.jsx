import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-20 justify-between gap-8'>
      {/* New Task - Soft Blue */}
      <div className='px-10 py-15 w-[42%] bg-[#4D96FF] rounded-xl'>
        <h2 className='text-5xl font-semibold text-white'>{data.taskCounts.new}</h2>
        <h3 className='text-3xl font-medium text-white'>New Task</h3>
      </div>

      {/* Completed Task - Emerald Green */}
      <div className='px-10 py-15 w-[42%] bg-[#2ECC71] rounded-xl'>
        <h2 className='text-5xl font-semibold text-white'>{data.taskCounts.completed}</h2>
        <h3 className='text-3xl font-medium text-white'>Completed Task</h3>
      </div>

      {/* Accepted Task - Teal */}
      <div className='px-10 py-15 w-[42%] bg-[#1ABC9C] rounded-xl'>
        <h2 className='text-5xl font-semibold text-white'>{data.taskCounts.active}</h2>
        <h3 className='text-3xl font-medium text-white'>Active Task</h3>
      </div>

      {/* Failed Task - Coral Red */}
      <div className='px-10 py-15 w-[42%] bg-[#FF6B6B] rounded-xl'>
        <h2 className='text-5xl font-semibold text-white'>{data.taskCounts.failed}</h2>
        <h3 className='text-3xl font-medium text-white'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers