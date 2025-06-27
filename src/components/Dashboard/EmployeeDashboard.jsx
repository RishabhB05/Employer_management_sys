import React, { useContext } from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';
import { AuthContext } from '../../context/AuthProvider';

const EmployeeDashboard = (props) => {
  const [userData, setUserData] = useContext(AuthContext);

  // Function to remove a task by index
  const handleRejectTask = (taskIndex) => {
    const updatedEmployees = userData.employees.map(emp => {
      if (emp.email === props.data.email) {
        return {
          ...emp,
          tasks: emp.tasks.filter((_, idx) => idx !== taskIndex)
        };
      }
      return emp;
    });
    setUserData({ employees: updatedEmployees });
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <div className='p-10 bg-[#1C1C1C] min-h-screen text-white'>
      <div>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} onRejectTask={handleRejectTask} /> {/* <-- Pass the function here */}
      </div>
    </div>
  );
};

export default EmployeeDashboard;                     


