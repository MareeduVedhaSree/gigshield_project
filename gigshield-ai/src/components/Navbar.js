// components/Navbar.js
import React from 'react';

const Navbar = ({ userProfileData, showScreen, logout }) => {
  return (
    <div className="top-nav">
      <div className="logo-area" onClick={() => showScreen('home')}>
        <div className="logo-icon"><i className="fas fa-shield-alt"></i></div>
        <div className="logo-text">Gig<span>Shield AI</span></div>
      </div>
      <div className="profile-dropdown">
        <button className="profile-btn">
          <i className="fas fa-user-circle"></i> 
          <span className="user-name">{userProfileData.name}</span> 
          <span className="menu-lines">☰</span>
        </button>
        <div className="dropdown-content">
          <a onClick={() => showScreen('profile')}><i className="fas fa-user"></i> Profile</a>
          <a onClick={() => showScreen('wallet')}><i className="fas fa-wallet"></i> Wallet</a>
          <a onClick={() => showScreen('settings')}><i className="fas fa-cog"></i> Settings</a>
          <a onClick={logout}><i className="fas fa-sign-out-alt"></i> Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;