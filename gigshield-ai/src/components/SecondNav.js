// components/SecondNav.js
import React from 'react';

const SecondNav = ({ showScreen }) => {
  return (
    <div className="second-nav">
      <div className="nav-links">
        <a onClick={() => showScreen('home')}><i className="fas fa-home"></i> Home</a>
        <a onClick={() => showScreen('dashboard')}><i className="fas fa-tachometer-alt"></i> Dashboard</a>
        <a onClick={() => showScreen('policy')}><i className="fas fa-file-alt"></i> Policy Details</a>
      </div>
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default SecondNav;