import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data, onRejectTask }) => {
  return (
    <>
      <div id='tasklist' className='h-95 px-2 overflow-x-auto items-center justify-start mt-3 w-full flex gap-3 scrollbar-hide'>
        {data.tasks.map((e, index) => {
          if (e.active) {
            return <AcceptTask key={`accept-${index}`} task={e} data={e} />;
          }
          if (e.completed) {
            return <CompleteTask key={`complete-${index}`} task={e} data={e} />;
          }
          if (e.failed) {
            return <FailedTask key={`failed-${index}`} task={e} data={e} />;
          }
          if (e.new) {
            return <NewTask key={`new-${index}`} task={e} data={e} onReject={() => onRejectTask(index)} />;
          }
          return null;
        })}
      </div>
    </>
  );
};

export default TaskList;