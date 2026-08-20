// // components/Signup.js
// import React, { useState } from 'react';

// const Signup = ({ setCurrentUser, setCurrentScreen }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = () => {
//     if (!name || !email || !password) {
//       alert('Fill all fields');
//       return;
//     }
//     const users = JSON.parse(localStorage.getItem('gigshield_users') || '{}');
//     if (users[name]) {
//       alert('Username exists!');
//       setCurrentScreen('login');
//       return;
//     }
//     users[name] = { email, password };
//     localStorage.setItem('gigshield_users', JSON.stringify(users));
//     const currentUser = { name, email };
//     localStorage.setItem('gigshield_user', JSON.stringify(currentUser));
//     setCurrentUser(currentUser);
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <div className="auth-logo">Gig<span>Shield AI</span></div>
//         <div className="auth-title">Join GigShield AI</div>
//         <div className="auth-subtitle">Start protecting your income today</div>
//         <input 
//           type="text" 
//           className="auth-input" 
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input 
//           type="email" 
//           className="auth-input" 
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input 
//           type="password" 
//           className="auth-input" 
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="auth-btn" onClick={handleSignup}>Sign Up</button>
//         <div className="auth-footer">
//           Already have an account? <a onClick={() => setCurrentScreen('login')}>Login</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;







import React, { useState } from 'react';
import { api } from '../services/api';

const Signup = ({ setCurrentUser, setCurrentScreen }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (!username || !email || !password) {
      alert('Fill all fields');
      return;
    }
    
    try {
      const result = await api.signup({
        username: username,
        email: email,
        password: password,
        phone: phone || "9876543210"
      });
      
      if (result.success) {
        alert('Signup successful!');
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
        <div className="auth-title">Join GigShield AI</div>
        <div className="auth-subtitle">Start protecting your income today</div>
        <form onSubmit={handleSignup}>
          <input 
            type="text" 
            className="auth-input" 
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            type="email" 
            className="auth-input" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            className="auth-input" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input 
            type="text" 
            className="auth-input" 
            placeholder="Phone (Optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="submit" className="auth-btn">Sign Up</button>
        </form>
        <div className="auth-footer">
          Already have an account? <button className="auth-link-btn" onClick={() => setCurrentScreen('login')}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;