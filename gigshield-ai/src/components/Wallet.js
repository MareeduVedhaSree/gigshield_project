import React from 'react';

const Wallet = ({ userWalletData, addTransaction, showScreen }) => {
  const addFunds = () => {
    addTransaction("Demo Funds", 500);
    alert("₮500 added to wallet!");
  };

  const withdrawToBank = () => {
    if (userWalletData.balance <= 0) {
      alert('No balance to withdraw');
      return;
    }
    alert(`₮${userWalletData.balance} transferred to bank!`);
    addTransaction('Withdrawal', -userWalletData.balance);
  };

  return (
    <div className="section-page">
      <div className="section-card">
        <div className="wallet-balance">
          <i className="fas fa-wallet"></i>
          <div className="wallet-amount">₮{userWalletData.balance}</div>
          <div>Available Balance</div>
        </div>
        <div className="section-title">Transaction History</div>
        <div className="transaction-list">
          {userWalletData.transactions.map((transaction, idx) => (
            <div key={idx} className="activity-item">
              <span>{transaction.desc} ({transaction.date})</span>
              <span className={transaction.amount >= 0 ? 'positive' : 'negative'}>
                {transaction.amount >= 0 ? '+' : ''}₮{Math.abs(transaction.amount)}
              </span>
            </div>
          ))}
        </div>
        <button className="btn-primary" onClick={addFunds}>Add Demo Funds (₮500)</button>
        <button className="btn-primary" onClick={withdrawToBank} style={{ marginTop: '12px', background: '#10b981' }}>
          Withdraw to Bank
        </button>
      </div>
    </div>
  );
};

export default Wallet;