import React from 'react';
import Login from './components/Auth/login'; // Path is correct if file exists
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';

const App = () => {
  return (
    <>
      {/* <Login/>   */}
      <EmployeeDashboard/>
    </>
  );
};

export default App;