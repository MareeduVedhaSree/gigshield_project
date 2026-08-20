// // components/Login.js
// import React, { useState } from 'react';

// const Login = ({ setCurrentUser, setCurrentScreen }) => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     const users = JSON.parse(localStorage.getItem('gigshield_users') || '{}');
//     if (users[name] && users[name].password === password) {
//       const currentUser = { name, email: users[name].email };
//       localStorage.setItem('gigshield_user', JSON.stringify(currentUser));
//       setCurrentUser(currentUser);
//     } else {
//       alert('Invalid credentials!');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <div className="auth-logo">Gig<span>Shield AI</span></div>
//         <div className="auth-title">Welcome Back</div>
//         <div className="auth-subtitle">Sign in to protect your income</div>
//         <input 
//           type="text" 
//           className="auth-input" 
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input 
//           type="password" 
//           className="auth-input" 
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="auth-btn" onClick={handleLogin}>Log In</button>
//         <div className="auth-footer">
//           Don't have an account? <a onClick={() => setCurrentScreen('signup')}>Create New Account</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { api } from '../services/api';

const Login = ({ setCurrentUser, setCurrentScreen }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      alert('Please enter username and password');
      return;
    }
    
    try {
      const result = await api.login({ username, password });
      
      if (result.success) {
        alert('Login successful!');
        localStorage.setItem('gigshield_user', JSON.stringify(result.data));
        setCurrentUser(result.data);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Cannot connect to server. Make sure backend is running on port 9999');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">Gig<span>Shield AI</span></div>
        <div className="auth-title">Welcome Back</div>
        <div className="auth-subtitle">Sign in to protect your income</div>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            className="auth-input" 
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            type="password" 
            className="auth-input" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="auth-btn">Log In</button>
        </form>
        <div className="auth-footer">
          Don't have an account? <button className="auth-link-btn" onClick={() => setCurrentScreen('signup')}>Create New Account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;