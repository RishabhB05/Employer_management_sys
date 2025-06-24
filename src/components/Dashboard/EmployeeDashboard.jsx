import React from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  return (
    <div className='p-20 bg-[#1C1C1C] min-h-screen text-white'>
      <div>
        
        <Header changeUser = {props.changeUser} data={props.data} />
        <TaskListNumbers data = {props.data} />
        <TaskList data = {props.data} /> 
        
      </div>
    </div>
  )
}

export default EmployeeDashboard;