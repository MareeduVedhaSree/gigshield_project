import React, { useState, useRef } from 'react';

const Profile = ({ userProfileData, setUserProfileData, currentUser, userBankDetails, setUserBankDetails, isBankUnlocked, setIsBankUnlocked }) => {
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const fileInputRef = useRef(null);
  const CORRECT_PIN = "1234";

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = document.getElementById('profilePicImg');
        const icon = document.getElementById('profilePicIcon');
        if (img) {
          img.src = ev.target.result;
          img.style.display = 'block';
          if (icon) icon.style.display = 'none';
          localStorage.setItem(`profilepic_${currentUser.name}`, ev.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const unlockBank = () => {
    if (pinInput === CORRECT_PIN) {
      setIsBankUnlocked(true);
      setShowBankDetails(true);
      alert('Bank details unlocked successfully!');
    } else {
      alert('Invalid PIN! Default PIN: 1234');
      setPinInput('');
    }
  };

  const lockBank = () => {
    setIsBankUnlocked(false);
    setShowBankDetails(false);
    setPinInput('');
  };

  return (
    <div className="section-page">
      <div className="section-card">
        <div className="section-title"><i className="fas fa-user-circle"></i> User Profile</div>
        <div style={{ textAlign: 'center' }}>
          <div className="profile-pic" id="profilePic">
            <i className="fas fa-user" id="profilePicIcon"></i>
            <img id="profilePicImg" style={{ display: 'none' }} alt="profile" />
          </div>
          <span 
            style={{ color: '#f97316', cursor: 'pointer' }} 
            onClick={() => fileInputRef.current.click()}
          >
            Change Profile Picture
          </span>
          <input 
            type="file" 
            ref={fileInputRef}
            accept="image/*" 
            style={{ display: 'none' }}
            onChange={handleProfilePicChange}
          />
        </div>
        <div className="info-grid">
          <div className="info-row">
            <span className="info-label">Full Name</span>
            <span className="info-value">{userProfileData.name}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Email</span>
            <span className="info-value">{userProfileData.email}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Phone</span>
            <span className="info-value">{userProfileData.phone}</span>
          </div>
        </div>

        <div className="bank-section">
          <div className="bank-header">
            <h4><i className="fas fa-university"></i> Bank Details</h4>
            <span className={isBankUnlocked ? "pin-unlocked" : "pin-locked"}>
              {isBankUnlocked ? "🔓 Unlocked" : "🔒 Locked"}
            </span>
          </div>
          
          {!isBankUnlocked ? (
            <div className="bank-details-hidden" onClick={() => document.getElementById('pinInput').focus()}>
              <i className="fas fa-lock"></i> Click to unlock with 4-digit PIN
            </div>
          ) : (
            <div className="bank-details-visible">
              <div className="info-row">
                <span className="info-label">Bank Name</span>
                <span className="info-value">{userBankDetails.bankName}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Account Number</span>
                <span className="info-value">XXXX-XXXX-{userBankDetails.accountNumber.slice(-4)}</span>
              </div>
              <div className="info-row">
                <span className="info-label">IFSC Code</span>
                <span className="info-value">{userBankDetails.ifsc}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Account Type</span>
                <span className="info-value">{userBankDetails.accountType}</span>
              </div>
            </div>
          )}
          
          <div className="pin-input-group">
            <input 
              type="password" 
              className="pin-input" 
              placeholder="****" 
              maxLength="4"
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              id="pinInput"
            />
            {!isBankUnlocked ? (
              <button className="btn-primary" onClick={unlockBank} style={{ width: 'auto', padding: '10px 20px' }}>
                Unlock
              </button>
            ) : (
              <button className="btn-primary" onClick={lockBank} style={{ width: 'auto', padding: '10px 20px', background: '#475569' }}>
                Lock
              </button>
            )}
          </div>
          <p style={{ fontSize: '12px', color: '#64748b', marginTop: '12px' }}>* Default PIN: 1234</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;