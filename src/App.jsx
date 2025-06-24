

import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import AdminTaskView from './pages/AdminTaskView';
import { AuthContext } from './context/AuthProvider';
//  import { getLocalStorage, setLocalStorage } from './pages/utils/localStorage';

const App = () => {
  // Move useState to the component level
  const [user, setUser] = useState(null);
  const[loggedInUserData , setLoggedInUserData] = useState(null)
  
const [userData , setUserData] = useContext(AuthContext);

  //  useEffect(()=>{
  //      if(authdata){
  //       const loggedInUser = localStorage.getItem("loggedInUser")
  //       console.log(loggedInUser)
  //     if(loggedInUser){
  //         setUser(loggedInUser.role);
  //       }
  //      }
  //  },[])

    useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      try {
        const parsedUser = JSON.parse(loggedInUser);
        setUser(parsedUser.role);
        if (parsedUser.data) {
          setLoggedInUserData(parsedUser.data);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);


//   useEffect(() => {
//   const loggedInUser = localStorage.getItem("loggedInUser");
//   if (loggedInUser) {
//     try {
//       const parsedUser = JSON.parse(loggedInUser);
//       setUser(parsedUser.role);
//       if (parsedUser.data) {
//         setLoggedInUserData(parsedUser.data);
//       }
//     } catch (error) {
//       console.error("Error parsing user data:", error);
//     }
//   }
// }, [authdata]);



const handleLogin = (email, password) => {
  // Trim inputs to avoid whitespace issues
  email = email.trim();
  password = password.trim();

  // Check admin first
  if (email === 'admin@me.com' && password === '123') {
    setUser('admin');
    localStorage.setItem('loggedInUser' , JSON.stringify({role:'admin'}))
    return;
  }

  // Check employees
  if (userData?.employees) {
    const foundEmployee = userData.employees.find(e => 
      e.email.toLowerCase() === email.toLowerCase() && 
      e.password === password
    );

    if (foundEmployee) {
      setUser( 'employee');
      setLoggedInUserData(foundEmployee);

      localStorage.setItem('loggedInUser' , JSON.stringify({role:'employee', data: foundEmployee}))

      return;
    }
  }

  alert('Invalid credentials');
};

  
 

  return (
    <>
    {!user && <Login handleLogin={handleLogin} />}
    {user === 'admin' && <AdminDashboard changeUser={setUser}  />}
    {user === 'employee' && <EmployeeDashboard data={loggedInUserData}  changeUser={setUser}  />}
      
      {/* <AdminTaskView/> */}
    </>
  );
};

export default App;   
