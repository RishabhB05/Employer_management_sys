// FailedTask.jsx
// filepath: c:\Users\Hp\Videos\Employer_Management_System-master - Copy\src\components\TaskList\FailedTask.jsx
import React from 'react';

const FailedTask = ({ task }) => {
  const getPriorityColor = () => {
    switch ((task.priority || '').toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-amber-100 text-amber-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-red-50 rounded-xl shadow-sm border border-red-200 overflow-hidden hover:shadow-md transition-shadow w-80">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className={`${getPriorityColor()} px-3 py-1 rounded-full text-sm font-medium`}>
            {task.priority}
          </span>
          <span className="text-gray-500 text-sm">{task.date}</span>
        </div>
        <h3 className="text-xl font-semibold text-red-900 mb-2">{task.title}</h3>
        <p className="text-red-700 mb-6">{task.description}</p>
        <div className="flex space-x-3">
          <span className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center">
            Failed
          </span>
        </div>
      </div>
    </div>
  );
};

export default FailedTask;