import React from 'react'

const CompleteTask = ({data}) => {
  const getPriorityColor = () => {
    switch(data.priority?.toLowerCase()) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-orange-500';
      case 'low':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className='flex-shrink-0 p-8 w-[32rem] bg-[#F8F9FA] rounded-xl border-2 border-[#E9ECEF] shadow-md'>
      <div className='flex justify-between items-center pb-6'>
        <span className={`${getPriorityColor()} text-white text-lg px-4 py-2 rounded-lg`}>
          {data.priority}
        </span>
        <span className='text-xl text-[#343A40]'>
          {data.date}
        </span>
      </div>
      
      <h2 className='mt-6 text-2xl font-semibold text-[#2C3E50]'>
        {data.title}
      </h2>
      
      <p className='mt-4 text-xl text-[#343A40] line-clamp-3'>
        {data.description}
      </p>
      
      <div className='mt-8 flex justify-center'>
        <button className='bg-green-500 hover:bg-green-600 py-4 px-12 text-xl text-white rounded-lg transition-colors'>
          Completed
        </button>
      </div>
    </div>
  )
}

export default CompleteTask