import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import AdminTaskView from './pages/AdminTaskView';
import { AuthContext } from './context/AuthProvider';
import UserViewAdmin from './pages/UserViewAdmin';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  const [adminView, setAdminView] = useState('dashboard');

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

  const handleLogin = (email, password) => {
    email = email.trim();
    password = password.trim();

    // Admin login
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      return;
    }

    // Employee login
    if (userData?.employees) {
      const foundEmployee = userData.employees.find(e =>
        e.email.toLowerCase() === email.toLowerCase() &&
        e.password === password
      );

      if (foundEmployee) {
        setUser('employee');
        setLoggedInUserData(foundEmployee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: foundEmployee }));
        return;
      }
    }

    alert('Invalid credentials');
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && adminView === 'dashboard' && (
        <AdminDashboard
          changeUser={setUser}
          openTaskView={() => setAdminView('tasks')}
          openUserView={() => setAdminView('users')}

        />
      )}
      {user === 'admin' && adminView === 'tasks' && (
        <AdminTaskView onBack={() => setAdminView('dashboard')} />
      )}

      {user === 'admin' && adminView === 'users' && (
        <UserViewAdmin onBack={() => setAdminView('dashboard')} />
      )}

    
      

      {user === 'employee' && (
        <EmployeeDashboard
          data={userData?.employees?.find(e => e.email === loggedInUserData?.email)}
          changeUser={setUser}
        />
      )}
    </>
  );
};

export default App;