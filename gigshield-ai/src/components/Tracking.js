import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';

const Tracking = ({ selectedWorker, showScreen }) => {
  const [remainingSeconds, setRemainingSeconds] = useState(selectedWorker.durSec);
  const [timerInterval, setTimerInterval] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView([selectedWorker.lat, selectedWorker.lng], 15);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
      L.marker([selectedWorker.lat, selectedWorker.lng]).addTo(map).bindPopup('Work Location').openPopup();
      
      return () => map.remove();
    }
  }, [selectedWorker]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setTimerInterval(interval);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const markComplete = () => {
    if (timerInterval) clearInterval(timerInterval);
    showScreen('upload');
  };

  return (
    <div className="dashboard-card" style={{ margin: '24px 32px' }}>
      <h3><i className="fas fa-map-marked-alt"></i> Live Tracking</h3>
      <div className="map-container">
        <div ref={mapRef} style={{ height: '100%', width: '100%' }}></div>
      </div>
      <div className="timer-display">{formatTime(remainingSeconds)}</div>
      <button className="btn-primary" onClick={markComplete} style={{ background: '#10b981' }}>
        Mark as Completed ✓
      </button>
    </div>
  );
};

export default Tracking;