import React, { useContext } from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';
import { AuthContext } from '../../context/AuthProvider';
import { RetroGrid } from "@/components/magicui/retro-grid";

const EmployeeDashboard = ({ changeUser, data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  // Reject task handler
  const handleRejectTask = (taskIndex) => {
    const updatedEmployees = userData.employees.map(emp => {
      if (emp.email === data.email) {
        const newTasks = emp.tasks.filter((_, idx) => idx !== taskIndex);
        const taskCounts = {
          total: newTasks.length,
          active: newTasks.filter(t => t.active).length,
          new: newTasks.filter(t => t.new).length,
          completed: newTasks.filter(t => t.completed).length,
          failed: newTasks.filter(t => t.failed).length,
        };
        return {
          ...emp,
          tasks: newTasks,
          taskCounts
        };
      }
      return emp;
    });
    setUserData({ employees: updatedEmployees });
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  // Accept task handler
  const handleAcceptTask = (taskIndex) => {
    const updatedEmployees = userData.employees.map(emp => {
      if (emp.email === data.email) {
        const newTasks = emp.tasks.map((task, idx) => {
          if (idx === taskIndex) {
            return { ...task, active: true, new: false };
          }
          return task;
        });
        const taskCounts = {
          total: newTasks.length,
          active: newTasks.filter(t => t.active).length,
          new: newTasks.filter(t => t.new).length,
          completed: newTasks.filter(t => t.completed).length,
          failed: newTasks.filter(t => t.failed).length,
        };
        return {
          ...emp,
          tasks: newTasks,
          taskCounts
        };
      }
      return emp;
    });
    setUserData({ employees: updatedEmployees });
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  // Mark as completed handler
  const handleCompleteTask = (taskIndex) => {
    const updatedEmployees = userData.employees.map(emp => {
      if (emp.email === data.email) {
        const newTasks = emp.tasks.map((task, idx) => {
          if (idx === taskIndex) {
            return { ...task, completed: true, active: false };
          }
          return task;
        });
        const taskCounts = {
          total: newTasks.length,
          active: newTasks.filter(t => t.active).length,
          new: newTasks.filter(t => t.new).length,
          completed: newTasks.filter(t => t.completed).length,
          failed: newTasks.filter(t => t.failed).length,
        };
        return {
          ...emp,
          tasks: newTasks,
          taskCounts
        };
      }
      return emp;
    });
    setUserData({ employees: updatedEmployees });
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <div className="min-h-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] relative overflow-hidden">
      {/* RetroGrid as full background */}
      <RetroGrid className="absolute inset-0 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <Header changeUser={changeUser} data={data} />
          
          <div className=" rounded-xl  p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Task Overview</h2>
            <TaskListNumbers data={data} />
          </div>
          
          <div className=" rounded-xl  p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Your Tasks</h2>
              <div className="text-sm text-gray-500">
                {data.tasks.length} {data.tasks.length === 1 ? 'task' : 'tasks'} assigned
              </div>
            </div>
            <TaskList 
              data={data} 
              onRejectTask={handleRejectTask} 
              onAcceptTask={handleAcceptTask}
              onCompleteTask={handleCompleteTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;