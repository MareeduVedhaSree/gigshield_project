import React, { useEffect, useState, useCallback } from 'react';

const AIVerification = ({ showScreen, setSelectedWorker }) => {
  const [step1, setStep1] = useState({ text: 'Checking weather conditions', status: 'loading' });
  const [step2, setStep2] = useState({ text: 'Analyzing order demand', status: 'pending' });
  const [step3, setStep3] = useState({ text: 'Finding available work', status: 'pending' });

  const completeVerification = useCallback(() => {
    showScreen('workers-list');
  }, [showScreen]);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStep1({ text: 'Weather conditions verified', status: 'done' });
      setStep2(prev => ({ ...prev, status: 'loading' }));
    }, 2000);

    const timer2 = setTimeout(() => {
      setStep2({ text: 'Order demand analyzed', status: 'done' });
      setStep3(prev => ({ ...prev, status: 'loading' }));
    }, 4000);

    const timer3 = setTimeout(() => {
      setStep3({ text: 'Available work found', status: 'done' });
      completeVerification();
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [completeVerification]);

  return (
    <div className="dashboard-card" style={{ margin: '32px', textAlign: 'center' }}>
      <div className="loader-container">
        <div className="loader"></div>
        <h2>AI Verification Running</h2>
        <p style={{ color: '#64748b' }}>Please wait while we analyze weather conditions...</p>
        <div style={{ marginTop: '30px', textAlign: 'left' }}>
          <div style={{ padding: '12px', color: step1.status === 'done' ? '#10b981' : '#f97316' }}>
            <i className={`fas ${step1.status === 'done' ? 'fa-check-circle' : step1.status === 'loading' ? 'fa-spinner fa-spin' : 'fa-circle-notch'}`}></i> {step1.text}
          </div>
          <div style={{ padding: '12px', color: step2.status === 'done' ? '#10b981' : step2.status === 'loading' ? '#f97316' : '#94a3b8' }}>
            <i className={`fas ${step2.status === 'done' ? 'fa-check-circle' : step2.status === 'loading' ? 'fa-spinner fa-spin' : 'fa-circle-notch'}`}></i> {step2.text}
          </div>
          <div style={{ padding: '12px', color: step3.status === 'done' ? '#10b981' : step3.status === 'loading' ? '#f97316' : '#94a3b8' }}>
            <i className={`fas ${step3.status === 'done' ? 'fa-check-circle' : step3.status === 'loading' ? 'fa-spinner fa-spin' : 'fa-circle-notch'}`}></i> {step3.text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIVerification;