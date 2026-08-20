import React, { useState } from 'react';

const WorkersList = ({ setSelectedWorker, showScreen }) => {
  const [selected, setSelected] = useState(null);
  
  const workers = [
    { name: 'Metro Warehouse', pay: 500, location: 'Electronic City', duration: '4 hours', durSec: 14400, lat: 12.8400, lng: 77.6600 },
    { name: 'DMart Store', pay: 400, location: 'Koramangala', duration: '3 hours', durSec: 10800, lat: 12.9352, lng: 77.6245 },
    { name: 'Amazon Hub', pay: 450, location: 'Whitefield', duration: '3.5 hours', durSec: 12600, lat: 12.9698, lng: 77.7499 }
  ];

  const handleSelect = (worker, index) => {
    setSelected(index);
    setSelectedWorker(worker);
  };

  const confirmSelection = () => {
    if (selected !== null) {
      showScreen('work-details');
    } else {
      alert('Please select a work option');
    }
  };

  return (
    <div className="dashboard-card" style={{ margin: '24px 32px' }}>
      <h2><i className="fas fa-users"></i> Available Work Options</h2>
      <div className="workers-list">
        {workers.map((worker, idx) => (
          <div 
            key={idx}
            className={`worker-card ${selected === idx ? 'selected' : ''}`}
            onClick={() => handleSelect(worker, idx)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <strong>{worker.name}</strong><br />
                <small>{worker.location}</small>
              </div>
              <div>
                <span style={{ fontSize: '24px', fontWeight: '800', color: '#f97316' }}>₮{worker.pay}</span><br />
                <small>{worker.duration}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn-primary" onClick={confirmSelection} style={{ marginTop: '20px' }}>
        Confirm Selection →
      </button>
    </div>
  );
};

export default WorkersList;