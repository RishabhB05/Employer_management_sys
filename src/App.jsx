import React, { useEffect } from 'react';
import Login from './components/Auth/login'; // Path is correct if file exists
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import AdminTaskView from './pages/AdminTaskView';
import { getLocalStorage, setLocalStorage } from './pages/utils/localStorage';

const App = () => {

  useEffect(()=>{
    // setLocalStorage()
    getLocalStorage();

  },)


  return (
    <>
      <Login/>  
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
      {/* <AdminTaskView/> */}
    </>
  );
};

export default App;