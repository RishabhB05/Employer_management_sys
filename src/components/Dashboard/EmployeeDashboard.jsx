import React from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = () => {
  return (
    <div className='p-20 bg-[#1C1C1C] min-h-screen text-white'>
      <div>
        <Header />
        <TaskListNumbers/>
        <TaskList/>
        {/* Add your dashboard content here */}
      </div>
    </div>
  )
}

export default EmployeeDashboard;