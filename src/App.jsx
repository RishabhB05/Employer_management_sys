import React, { useEffect, useState } from 'react';
import Login from './components/Auth/login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import AdminTaskView from './pages/AdminTaskView';
//  import { getLocalStorage, setLocalStorage } from './pages/utils/localStorage';

const App = () => {
  // Move useState to the component level
  const [user, setUser] = useState(null);

   const handleLogin = (email,password)=>{
       if(email == 'admin@me.com' && password == '123'){
            setUser('admin')
            console.log(user);
       }else if(email == 'user@me.com' && password == '123'){
            setUser('employee')
            console.log(user);
       }
       else{
        alert('invalid credentials')
       }
   }

  
 

  return (
    <>
      {!user ? <Login handleLogin= {handleLogin} /> : null}
      {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
       
      {/* <AdminTaskView/> */}
    </>
  );
};

export default App;