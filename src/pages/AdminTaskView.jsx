import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const AdminTaskView = ({ onBack }) => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Back to Dashboard
      </button>
   


      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Task Management Dashboard</h1>
          <p className="text-lg text-gray-600 mt-2">Overview of all employee tasks</p>
        </div>
        <div className="text-lg text-gray-500 mt-4 md:mt-0">
          {userData.employees.length} employees monitored
        </div>
      </div>
      
      {/* Table Header */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 mb-6 overflow-hidden">
        <div className="grid grid-cols-5 gap-4 p-6 bg-gray-50">
          <div className="text-lg font-semibold text-gray-700">Employee</div>
          <div className="text-lg font-semibold text-gray-700 text-center">Total</div>
          <div className="text-lg font-semibold text-blue-600 text-center">Active</div>
          <div className="text-lg font-semibold text-green-600 text-center">Completed</div>
          <div className="text-lg font-semibold text-red-600 text-center">Overdue</div>
        </div>
      </div>

      {/* Employee Task List */}
      <div className="space-y-4">
        {userData.employees.map((employee, idx) => (
          <div 
            key={idx} 
            className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-all duration-200"
          >
            <div className="grid grid-cols-5 gap-4 items-center">
              <div>
                <p className="text-lg font-medium text-gray-900">{employee.firstName}</p>
                <p className="text-sm text-gray-500">{employee.email}</p>
              </div>
              <div className="text-xl font-medium text-gray-700 text-center">
                {employee.taskCounts.total}
              </div>
              <div className="text-xl font-medium text-blue-600 text-center">
                {employee.taskCounts.active}
              </div>
              <div className="text-xl font-medium text-green-600 text-center">
                {employee.taskCounts.completed}
              </div>
              <div className="text-xl font-medium text-red-600 text-center">
                {employee.taskCounts.failed}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTaskView;