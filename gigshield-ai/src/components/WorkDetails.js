import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const WorkDetails = ({ selectedWorker, setCurrentWorkAmount, showScreen }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && selectedWorker) {
      const map = L.map(mapRef.current).setView([selectedWorker.lat, selectedWorker.lng], 15);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
      L.marker([selectedWorker.lat, selectedWorker.lng]).addTo(map).bindPopup(selectedWorker.name).openPopup();
      
      return () => map.remove();
    }
  }, [selectedWorker]);

  const startWork = () => {
    setCurrentWorkAmount(selectedWorker.pay);
    showScreen('tracking');
  };

  return (
    <div className="dashboard-card" style={{ margin: '24px 32px' }}>
      <h2>{selectedWorker.name}</h2>
      <p style={{ fontSize: '32px', fontWeight: '800', color: '#f97316', margin: '16px 0' }}>₮{selectedWorker.pay}</p>
      <div><i className="fas fa-map-marker-alt"></i> {selectedWorker.location}</div>
      <div><i className="fas fa-clock"></i> {selectedWorker.duration}</div>
      <div className="map-container" style={{ height: '300px' }}>
        <div ref={mapRef} style={{ height: '100%', width: '100%' }}></div>
      </div>
      <button className="btn-primary" onClick={startWork}>Start Work</button>
    </div>
  );
};

export default WorkDetails;