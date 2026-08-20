import React from 'react';

const Payment = ({ currentWorkAmount, selectedWorker, addTransaction, showScreen }) => {
  const addToWallet = () => {
    addTransaction(`Work: ${selectedWorker?.name}`, currentWorkAmount);
    alert(`₮${currentWorkAmount} has been added to your wallet!`);
    showScreen('wallet');
  };

  return (
    <div className="dashboard-card" style={{ margin: '32px', textAlign: 'center' }}>
      <div style={{ fontSize: '80px', color: '#10b981' }}>
        <i className="fas fa-check-circle"></i>
      </div>
      <h2>Payment Ready!</h2>
      <div style={{ fontSize: '48px', fontWeight: '800', color: '#f97316', margin: '20px 0' }}>
        ₮{currentWorkAmount}
      </div>
      <button className="btn-primary" onClick={addToWallet}>Add to Wallet</button>
    </div>
  );
};

export default Payment;