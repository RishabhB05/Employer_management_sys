import React, { useEffect, useState } from 'react';
import Login from './components/Auth/login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import AdminTaskView from './pages/AdminTaskView';
//  import { getLocalStorage, setLocalStorage } from './pages/utils/localStorage';

const App = () => {
  // Move useState to the component level
  const [user, setUser] = useState(null);

  useEffect(() => {
   
  }, []); 

  return (
    <>
      {!user ? <Login /> : null}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
      {/* <AdminTaskView/> */}
    </>
  );
};

export default App;