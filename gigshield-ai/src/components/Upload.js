import React, { useState } from 'react';

const Upload = ({ showScreen, currentWorkAmount, setCurrentWorkAmount }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      document.getElementById('uploadArea').innerHTML = `<i class="fas fa-check-circle" style="font-size:48px; color:#10b981;"></i><p>Uploaded: ${file.name}</p>`;
    }
  };

  const verifyAndComplete = () => {
    if (!uploadedFile) {
      alert('Please upload proof of work');
      return;
    }
    showScreen('payment');
  };

  return (
    <div className="dashboard-card" style={{ margin: '24px 32px' }}>
      <h3>Upload Completion Proof</h3>
      <div 
        className="upload-area" 
        id="uploadArea"
        onClick={() => document.getElementById('fileInput').click()}
      >
        <i className="fas fa-cloud-upload-alt" style={{ fontSize: '48px', color: '#f97316' }}></i>
        <p>Click to upload photo proof</p>
      </div>
      <input 
        type="file" 
        id="fileInput" 
        accept="image/*" 
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
      <button className="btn-primary" onClick={verifyAndComplete} style={{ marginTop: '20px' }}>
        Verify & Complete
      </button>
    </div>
  );
};

export default Upload;