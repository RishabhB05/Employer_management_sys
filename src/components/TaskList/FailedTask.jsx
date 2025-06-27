import React from 'react'

const FailedTask = ({data}) => {
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
        <span className='text-xl text-[#343A40] font-semibold'>
          {data.date}
        </span>
      </div>
      
      <h2 className='mt-6 text-2xl font-bold text-[#2C3E50]'>
        {data.title}
      </h2>
      
      <p className='mt-4 text-xl text-[#343A40]'>
        {data.description}
      </p>
      
      <div className='flex justify-center mt-8'>
        <button className='bg-green-500 hover:bg-green-600 py-4 px-12 text-xl text-white rounded-lg transition-colors'>
          Failed
        </button>
      </div>
    </div>
  )
}

export default FailedTask