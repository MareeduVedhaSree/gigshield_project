import React from 'react';

const Settings = ({ showScreen }) => {
  return (
    <div className="section-page">
      <div className="section-card">
        <div className="section-title"><i className="fas fa-sliders-h"></i> Settings</div>
        <div className="info-grid">
          <div className="info-row">
            <span className="info-label">Email Notifications</span>
            <span className="info-value">Enabled <i className="fas fa-toggle-on" style={{ color: '#f97316' }}></i></span>
          </div>
          <div className="info-row">
            <span className="info-label">Push Notifications</span>
            <span className="info-value">Enabled</span>
          </div>
          <div className="info-row">
            <span className="info-label">Language</span>
            <span className="info-value">English</span>
          </div>
        </div>
        <button className="btn-primary" onClick={() => alert('Notification settings coming soon!')}>
          Manage Notifications
        </button>
      </div>
    </div>
  );
};

export default Settings;