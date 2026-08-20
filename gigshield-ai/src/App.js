

// import React, { useState, useEffect } from 'react';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Home from './components/Home';
// import Dashboard from './components/Dashboard';
// import Profile from './components/Profile';
// import Wallet from './components/Wallet';
// import Settings from './components/Settings';
// import Policy from './components/Policy';
// import AIVerification from './components/AIVerification';
// import WorkersList from './components/WorkersList';
// import WorkDetails from './components/WorkDetails';
// import Tracking from './components/Tracking';
// import Upload from './components/Upload';
// import Payment from './components/Payment';
// import Navbar from './components/Navbar';
// import SecondNav from './components/SecondNav';
// import './App.css';

// const App = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [currentScreen, setCurrentScreen] = useState('home');
//   const [selectedWorker, setSelectedWorker] = useState(null);
//   const [currentWorkAmount, setCurrentWorkAmount] = useState(0);
//   const [userWalletData, setUserWalletData] = useState({ balance: 1200, transactions: [] });
//   const [userProfileData, setUserProfileData] = useState({ name: '', email: '', phone: '+91 98765 43210' });
//   const [userBankDetails, setUserBankDetails] = useState({
//     bankName: "State Bank of India",
//     accountNumber: "123456789012",
//     ifsc: "SBIN0001234",
//     accountType: "Savings"
//   });
//   const [isBankUnlocked, setIsBankUnlocked] = useState(false);
//   const [currentPolicy, setCurrentPolicy] = useState(null);

//   useEffect(() => {
//     const savedUser = localStorage.getItem('gigshield_user');
//     if (savedUser) {
//       const user = JSON.parse(savedUser);
//       setCurrentUser(user);
//       loadUserData(user);
//     }
//   }, []);

//   const loadUserData = (user) => {
//     const savedWallet = localStorage.getItem(`wallet_${user.name}`);
//     if (savedWallet) {
//       setUserWalletData(JSON.parse(savedWallet));
//     } else {
//       const defaultWallet = { balance: 1200, transactions: [
//         { desc: "Premium payment", amount: -50, date: new Date().toLocaleDateString() },
//         { desc: "Earnings", amount: 850, date: new Date().toLocaleDateString() }
//       ]};
//       setUserWalletData(defaultWallet);
//       localStorage.setItem(`wallet_${user.name}`, JSON.stringify(defaultWallet));
//     }

//     const savedBank = localStorage.getItem(`bank_${user.name}`);
//     if (savedBank) {
//       setUserBankDetails(JSON.parse(savedBank));
//     }

//     const savedPolicy = localStorage.getItem('insurai_policy');
//     if (savedPolicy) {
//       setCurrentPolicy(JSON.parse(savedPolicy));
//     }

//     setUserProfileData({
//       name: user.name,
//       email: user.email,
//       phone: '+91 98765 43210'
//     });
//   };

//   const addTransaction = (desc, amount) => {
//     setUserWalletData(prev => {
//       const newBalance = prev.balance + amount;
//       const newTransactions = [{ desc, amount, date: new Date().toLocaleDateString() }, ...prev.transactions];
//       const newData = { balance: newBalance, transactions: newTransactions };
//       localStorage.setItem(`wallet_${currentUser.name}`, JSON.stringify(newData));
//       return newData;
//     });
//   };

//   const showScreen = (screen) => {
//     setCurrentScreen(screen);
//     window.scrollTo(0, 0);
//   };

//   const logout = () => {
//     localStorage.removeItem('gigshield_user');
//     setCurrentUser(null);
//     setCurrentScreen('login');
//   };

//   if (!currentUser) {
//     return (
//       <div className="app">
//         {currentScreen === 'login' ? (
//           <Login setCurrentUser={setCurrentUser} setCurrentScreen={setCurrentScreen} />
//         ) : (
//           <Signup setCurrentUser={setCurrentUser} setCurrentScreen={setCurrentScreen} />
//         )}
//       </div>
//     );
//   }

//   return (
//     <div className="app-container">
//       <Navbar 
//         userProfileData={userProfileData} 
//         showScreen={showScreen} 
//         logout={logout} 
//       />
//       <SecondNav showScreen={showScreen} />
      
//       {currentScreen === 'home' && <Home showScreen={showScreen} />}
//       {currentScreen === 'dashboard' && <Dashboard showScreen={showScreen} />}
//       {currentScreen === 'profile' && (
//         <Profile 
//           userProfileData={userProfileData}
//           setUserProfileData={setUserProfileData}
//           currentUser={currentUser}
//           userBankDetails={userBankDetails}
//           setUserBankDetails={setUserBankDetails}
//           isBankUnlocked={isBankUnlocked}
//           setIsBankUnlocked={setIsBankUnlocked}
//         />
//       )}
//       {currentScreen === 'wallet' && (
//         <Wallet 
//           userWalletData={userWalletData}
//           addTransaction={addTransaction}
//           showScreen={showScreen}
//         />
//       )}
//       {currentScreen === 'settings' && <Settings showScreen={showScreen} />}
//       {currentScreen === 'policy' && (
//         <Policy 
//           setCurrentPolicy={setCurrentPolicy}
//           currentPolicy={currentPolicy}
//           addTransaction={addTransaction}
//           showScreen={showScreen}
//         />
//       )}
//       {currentScreen === 'ai-verification' && <AIVerification showScreen={showScreen} setSelectedWorker={setSelectedWorker} />}
//       {currentScreen === 'workers-list' && (
//         <WorkersList 
//           setSelectedWorker={setSelectedWorker}
//           showScreen={showScreen}
//         />
//       )}
//       {currentScreen === 'work-details' && selectedWorker && (
//         <WorkDetails 
//           selectedWorker={selectedWorker}
//           setCurrentWorkAmount={setCurrentWorkAmount}
//           showScreen={showScreen}
//         />
//       )}
//       {currentScreen === 'tracking' && selectedWorker && (
//         <Tracking 
//           selectedWorker={selectedWorker}
//           showScreen={showScreen}
//         />
//       )}
//       {currentScreen === 'upload' && (
//         <Upload 
//           showScreen={showScreen}
//           setCurrentWorkAmount={setCurrentWorkAmount}
//           currentWorkAmount={currentWorkAmount}
//         />
//       )}
//       {currentScreen === 'payment' && (
//         <Payment 
//           currentWorkAmount={currentWorkAmount}
//           selectedWorker={selectedWorker}
//           addTransaction={addTransaction}
//           showScreen={showScreen}
//         />
//       )}
      
//       <footer className="footer">
//         <div className="footer-content">
//           <div className="footer-logo">
//             <div className="logo-text" style={{color:'white'}}>Gig<span style={{color:'#f97316'}}>Shield AI</span></div>
//             <p>Smart protection for the modern workforce.</p>
//           </div>
//           <div className="footer-links">
//             <h4>Product</h4>
//             <button className="footer-link-btn" onClick={() => showScreen('home')}>Home</button>
//             <button className="footer-link-btn" onClick={() => showScreen('policy')}>Policy Details</button>
//             <button className="footer-link-btn" onClick={() => showScreen('wallet')}>Wallet</button>
//           </div>
//           <div className="footer-links">
//             <h4>Company</h4>
//             <button className="footer-link-btn">About Us</button>
//             <button className="footer-link-btn">Careers</button>
//             <button className="footer-link-btn">Contact</button>
//           </div>
//           <div className="footer-links">
//             <h4>Support</h4>
//             <button className="footer-link-btn">Help Center</button>
//             <button className="footer-link-btn">Terms</button>
//             <button className="footer-link-btn">Privacy</button>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>&copy; 2026 GigShield AI. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;











import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Wallet from './components/Wallet';
import Settings from './components/Settings';
import Policy from './components/Policy';
import AIVerification from './components/AIVerification';
import WorkersList from './components/WorkersList';
import WorkDetails from './components/WorkDetails';
import Tracking from './components/Tracking';
import Upload from './components/Upload';
import Payment from './components/Payment';
import Navbar from './components/Navbar';
import SecondNav from './components/SecondNav';
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [currentWorkAmount, setCurrentWorkAmount] = useState(0);
  const [userWalletData, setUserWalletData] = useState({ balance: 1200, transactions: [] });
  const [userProfileData, setUserProfileData] = useState({ name: '', email: '', phone: '+91 98765 43210' });
  const [userBankDetails, setUserBankDetails] = useState({
    bankName: "State Bank of India",
    accountNumber: "123456789012",
    ifsc: "SBIN0001234",
    accountType: "Savings"
  });
  const [isBankUnlocked, setIsBankUnlocked] = useState(false);
  const [currentPolicy, setCurrentPolicy] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('gigshield_user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setCurrentUser(user);
      loadUserData(user);
    }
  }, []);

  const loadUserData = (user) => {
    const savedWallet = localStorage.getItem(`wallet_${user.name}`);
    if (savedWallet) {
      setUserWalletData(JSON.parse(savedWallet));
    } else {
      const defaultWallet = { balance: 1200, transactions: [
        { desc: "Premium payment", amount: -50, date: new Date().toLocaleDateString() },
        { desc: "Earnings", amount: 850, date: new Date().toLocaleDateString() }
      ]};
      setUserWalletData(defaultWallet);
      localStorage.setItem(`wallet_${user.name}`, JSON.stringify(defaultWallet));
    }

    const savedBank = localStorage.getItem(`bank_${user.name}`);
    if (savedBank) {
      setUserBankDetails(JSON.parse(savedBank));
    }

    const savedPolicy = localStorage.getItem('insurai_policy');
    if (savedPolicy) {
      setCurrentPolicy(JSON.parse(savedPolicy));
    }

    setUserProfileData({
      name: user.name,
      email: user.email,
      phone: '+91 98765 43210'
    });
  };

  const addTransaction = (desc, amount) => {
    setUserWalletData(prev => {
      const newBalance = prev.balance + amount;
      const newTransactions = [{ desc, amount, date: new Date().toLocaleDateString() }, ...prev.transactions];
      const newData = { balance: newBalance, transactions: newTransactions };
      localStorage.setItem(`wallet_${currentUser.name}`, JSON.stringify(newData));
      return newData;
    });
  };

  const showScreen = (screen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const logout = () => {
    localStorage.removeItem('gigshield_user');
    setCurrentUser(null);
    setCurrentScreen('login');
  };

  if (!currentUser) {
    return (
      <div className="app">
        {currentScreen === 'login' ? (
          <Login setCurrentUser={setCurrentUser} setCurrentScreen={setCurrentScreen} />
        ) : (
          <Signup setCurrentUser={setCurrentUser} setCurrentScreen={setCurrentScreen} />
        )}
      </div>
    );
  }

  return (
    <div className="app-container">
      <Navbar 
        userProfileData={userProfileData} 
        showScreen={showScreen} 
        logout={logout} 
      />
      <SecondNav showScreen={showScreen} />
      
      {currentScreen === 'home' && <Home showScreen={showScreen} />}
      {currentScreen === 'dashboard' && <Dashboard showScreen={showScreen} />}
      {currentScreen === 'profile' && (
        <Profile 
          userProfileData={userProfileData}
          setUserProfileData={setUserProfileData}
          currentUser={currentUser}
          userBankDetails={userBankDetails}
          setUserBankDetails={setUserBankDetails}
          isBankUnlocked={isBankUnlocked}
          setIsBankUnlocked={setIsBankUnlocked}
        />
      )}
      {currentScreen === 'wallet' && (
        <Wallet 
          userWalletData={userWalletData}
          addTransaction={addTransaction}
          showScreen={showScreen}
        />
      )}
      {currentScreen === 'settings' && <Settings showScreen={showScreen} />}
      {currentScreen === 'policy' && (
        <Policy 
          setCurrentPolicy={setCurrentPolicy}
          currentPolicy={currentPolicy}
          addTransaction={addTransaction}
          showScreen={showScreen}
        />
      )}
      {currentScreen === 'ai-verification' && <AIVerification showScreen={showScreen} setSelectedWorker={setSelectedWorker} />}
      {currentScreen === 'workers-list' && (
        <WorkersList 
          setSelectedWorker={setSelectedWorker}
          showScreen={showScreen}
        />
      )}
      {currentScreen === 'work-details' && selectedWorker && (
        <WorkDetails 
          selectedWorker={selectedWorker}
          setCurrentWorkAmount={setCurrentWorkAmount}
          showScreen={showScreen}
        />
      )}
      {currentScreen === 'tracking' && selectedWorker && (
        <Tracking 
          selectedWorker={selectedWorker}
          showScreen={showScreen}
        />
      )}
      {currentScreen === 'upload' && (
        <Upload 
          showScreen={showScreen}
          setCurrentWorkAmount={setCurrentWorkAmount}
          currentWorkAmount={currentWorkAmount}
        />
      )}
      {currentScreen === 'payment' && (
        <Payment 
          currentWorkAmount={currentWorkAmount}
          selectedWorker={selectedWorker}
          addTransaction={addTransaction}
          showScreen={showScreen}
        />
      )}
    </div>
  );
};

export default App;