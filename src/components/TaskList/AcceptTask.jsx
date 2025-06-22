import React from 'react'

const AcceptTask = ({data}) => {

      const getPriorityColor = () => {
    switch(data.priority?.toLowerCase()) {
      case 'high':
        return 'bg-red-500'; // Red for high priority
      case 'medium':
        return 'bg-orange-500'; // Orange for medium priority
      case 'low':
        return 'bg-yellow-500'; // Yellow for low priority
      default:
        return 'bg-gray-500'; // Default color if priority isn't specified
    }
  };


  return (
    <>
      <div className='h-200 flex-shrink-0 p-5 w-200 bg-[#F8F9FA] rounded-xl border border-[#E9ECEF]'>
            <div className='flex justify-between items-center py-10'>
                <h3 className={`${getPriorityColor()} text-white text-4xl px-3 py-1 rounded-lg`}>{data.priority}</h3>
                <h4 className='text-4xl font-semibold text-[#343A40]'>{data.date}</h4>
            </div>
            <h1 className='mt-10 text-5xl font-bold text-[#2C3E50]'>{data.title}</h1>
            <p className='mt-8 text-4xl text-[#343A40]'>{data.description}</p>
          
           <div className='flex  justify-between mt-20  '>
            <button className='bg-green-500 py-5 px-5 text-2xl rounded-lg'> Mark as Completed</button>
            <button className='bg-red-500 py-5 px-5 text-2xl rounded-lg' >Mark as Failed</button>
         </div>
         
         </div>
    </>
  )
}

export default AcceptTask