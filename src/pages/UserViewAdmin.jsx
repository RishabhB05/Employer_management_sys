import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const UserViewAdmin = ({ onBack }) => {
  // Get real data from context
  const [userData, setUserData] = useContext(AuthContext);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    department: 'Engineering',
    status: 'active'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Split name into firstName and lastName (optional)
    const [firstName, ...rest] = newUser.name.trim().split(' ');
    const lastName = rest.join(' ');

    // Create new employer object
    const employer = {
      id: Date.now(), // unique id
      firstName: firstName || newUser.name,
      lastName: lastName || '',
      email: newUser.email,
      department: newUser.department,
      status: newUser.status,
      tasks: [],
      taskCounts: {
        total: 0,
        active: 0,
        completed: 0,
        failed: 0,
        new: 0
      },
      password: '123' // default password, you can change this logic
    };

    // Add new employer to context and localStorage
    const updatedEmployees = [...(userData?.employees || []), employer];
    setUserData({ employees: updatedEmployees });
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    setIsFormOpen(false);
    setNewUser({
      name: '',
      email: '',
      department: 'Engineering',
      status: 'active'
    });
  };

  // Delete employer handler
  const handleDelete = (email) => {
    const updatedEmployees = (userData?.employees || []).filter(emp => emp.email !== email);
    setUserData({ employees: updatedEmployees });
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  // Use userData.employees as the source of truth
  const employers = userData?.employees || [];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header with Back Button */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <button 
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Dashboard
          </button>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600 mt-2">Manage employer accounts and permissions</p>
        </div>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
          Add New Employer
        </button>
      </div>

      {/* Add User Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Create New Employer</h2>
              <button 
                onClick={() => setIsFormOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleInputChange}
                  className="w-full text-gray-700 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleInputChange}
                  className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <select
                    name="department"
                    value={newUser.department}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:ring-blue-500  focus:border-blue-500"
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                    <option value="HR">Human Resources</option>
                    <option value="Finance">Finance</option>
                    <option value="Operations">Operations</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    name="status"
                    value={newUser.status}
                    onChange={handleInputChange}
                    className="w-full text-gray-700 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Create Employer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Employers Table */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {employers.map((employer) => (
                <tr key={employer.id || employer.email} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">
                          {employer.firstName
                            ? employer.firstName.charAt(0).toUpperCase()
                            : (employer.name ? employer.name.charAt(0).toUpperCase() : '?')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {employer.firstName
                            ? employer.firstName + (employer.lastName ? ' ' + employer.lastName : '')
                            : employer.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {employer.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {employer.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${employer.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {employer.status
                        ? employer.status.charAt(0).toUpperCase() + employer.status.slice(1)
                        : 'Active'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDelete(employer.email)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserViewAdmin;