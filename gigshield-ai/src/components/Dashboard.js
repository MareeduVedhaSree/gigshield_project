import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const Dashboard = ({ showScreen }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView([12.9716, 77.5946], 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
      L.marker([12.9716, 77.5946]).addTo(map).bindPopup('📍 Your Location').openPopup();
      L.circle([12.9716, 77.5946], { radius: 3000, color: '#dc2626', fillColor: '#dc2626', fillOpacity: 0.2 }).addTo(map);
      
      return () => map.remove();
    }
  }, []);

  return (
    <div>
      <div className="dashboard-card">
        <h3><i className="fas fa-map"></i> Live Risk Map</h3>
        <div className="map-container">
          <div ref={mapRef} style={{ height: '100%', width: '100%' }}></div>
        </div>
        <div style={{ marginTop: '16px', padding: '12px', background: '#fffbeb', borderRadius: '12px', borderLeft: '4px solid #f97316' }}>
          <strong>⚠️ High Risk Alert</strong><br />
          <span>Heavy Rain detected. Order volumes dropped by 45%.</span>
        </div>
        <button className="btn-primary" onClick={() => showScreen('ai-verification')}>
          View Protection Options →
        </button>
      </div>
    </div>
  );
};

export default Dashboard;