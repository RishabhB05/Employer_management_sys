
import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <>
    <div id='tasklist'  className='h-240 px-4  overflow-x-auto items-center justify-start mt-10 w-full flex gap-5 scrollbar-hide'>

   {data.tasks.map((e, index) => {
        if(e.active){
          return <AcceptTask key={`accept-${index}`} task={e} data = {e} />
        }
        if(e.completed){
          return <CompleteTask key={`complete-${index}`} task={e} data = {e}/>
        }
        if(e.failed){
          return <FailedTask key={`failed-${index}`} task={e} data = {e} />
        }
        if(e.new){
          return <NewTask key={`new-${index}`} task={e} data = {e} />
        }
        return null;
      })}
   
       
       
       

{/*  
         <div className='h-200 flex-shrink-0 p-5 w-200 bg-[#F8F9FA] rounded-xl border border-[#E9ECEF]'>
            <div className='flex justify-between items-center py-10'>
                <h3 className='bg-[#F39C12] text-white text-4xl px-3 py-1 rounded-lg'>Medium</h3>
                <h4 className='text-4xl font-semibold text-[#343A40]'>20 Feb 2024</h4>
            </div>
            <h1 className='mt-10 text-5xl font-bold text-[#2C3E50]'>Complete the DSA topic- Graph and Dynamic programming</h1>
            <p className='mt-8 text-4xl text-[#343A40]'>First study the basic and solve questions, solve questions from striver A-Z sheet. If you lack in theory then go for love babbar course it will help you understand the basic theory and will make your concept clear</p>
         </div> */}

    </div>
    </>
  )
}
 
export default TaskList