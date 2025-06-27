// TaskListNumbers.jsx
import React from 'react';

const TaskListNumbers = ({ data }) => {
  const stats = [
    { count: data.taskCounts.new, label: 'New Tasks', bg: 'bg-blue-100', text: 'text-blue-800' },
    { count: data.taskCounts.completed, label: 'Completed', bg: 'bg-green-100', text: 'text-green-800' },
    { count: data.taskCounts.active, label: 'In Progress', bg: 'bg-amber-100', text: 'text-amber-800' },
    { count: data.taskCounts.failed, label: 'Overdue', bg: 'bg-red-100', text: 'text-red-800' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-8 mt-6 max-w-7xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className={`${stat.bg} ${stat.text} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`}>
          <div className="text-3xl font-bold">{stat.count}</div>
          <div className="mt-2 text-lg font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumbers;