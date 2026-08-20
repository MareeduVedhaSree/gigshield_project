// import React, { useState } from 'react';

// const Policy = ({ setCurrentPolicy, currentPolicy, addTransaction, showScreen }) => {
//   const [uploadedFile, setUploadedFile] = useState(null);
//   const [userEarnings, setUserEarnings] = useState(0);
//   const [aiPolicy, setAiPolicy] = useState(null);
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [isAnalyzing, setIsAnalyzing] = useState(false);

//   const riskPremiums = { low: 30, medium: 49, high: 79 };

//   const calculateAIPolicy = (weeklyEarnings) => {
//     const dailyIncome = Math.round(weeklyEarnings / 6);
//     const coverage = Math.round(dailyIncome * 0.6);
//     let riskLevel = 'medium';
//     if (dailyIncome < 800) riskLevel = 'low';
//     else if (dailyIncome > 1200) riskLevel = 'high';
//     const weeklyPremium = riskPremiums[riskLevel];
//     return { dailyIncome, coverage, riskLevel, weeklyPremium };
//   };

//   const simulateAIExtraction = (file) => {
//     return new Promise((resolve) => {
//       const earnings = Math.floor(Math.random() * (15000 - 3000 + 1) + 3000);
//       setTimeout(() => resolve(earnings), 2000);
//     });
//   };

//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUploadedFile(file);
//       setIsAnalyzing(true);
//       const fileInfo = document.getElementById('fileInfo');
//       if (fileInfo) fileInfo.innerHTML = `<i class="fas fa-spinner fa-spin"></i> AI analyzing screenshot...`;
      
//       const earnings = await simulateAIExtraction(file);
//       setUserEarnings(earnings);
//       const policy = calculateAIPolicy(earnings);
//       setAiPolicy(policy);
      
//       if (fileInfo) fileInfo.innerHTML = `<i class="fas fa-check-circle" style="color: #10b981;"></i> ✅ AI analysis complete!`;
//       setIsAnalyzing(false);
//     }
//   };

//   const handleSelectPlan = (plan) => {
//     setSelectedPlan(plan);
//   };

//   const plans = [
//     { name: 'Basic', multiplier: 1, features: ['60% income protection', 'Parametric triggers', 'Auto-payout'] },
//     { name: 'Standard', multiplier: 1.2, features: ['70% income protection', 'Priority support', 'Faster payouts'] },
//     { name: 'Premium', multiplier: 1.5, features: ['80% income protection', 'Family coverage', 'Wellness benefits'] }
//   ];

//   const confirmPolicy = () => {
//     if (!selectedPlan) {
//       alert('Please select a plan first');
//       return;
//     }
//     if (!userEarnings) {
//       alert('Please upload your earnings screenshot first');
//       return;
//     }
    
//     const policy = {
//       ...selectedPlan,
//       ...aiPolicy,
//       balance: 0,
//       nextPaymentDate: new Date()
//     };
//     setCurrentPolicy(policy);
//     localStorage.setItem('insurai_policy', JSON.stringify(policy));
//     alert(`✅ ${selectedPlan.name} plan activated!\n\n📊 Weekly Premium: ₹${selectedPlan.premium}\n💰 Daily Coverage: ₹${selectedPlan.coverage}`);
//     showScreen('dashboard');
//   };

//   return (
//     <div className="section-page">
//       <div className="section-card">
//         <div className="section-title"><i className="fas fa-shield-alt"></i> InsurAI - Smart Income Protection</div>
//         <p>Upload your earnings screenshot - AI will calculate your personalized plan</p>

//         <div className="policy-upload-section">
//           <div className="upload-icon"><i className="fas fa-cloud-upload-alt"></i></div>
//           <h3>Upload Earnings Screenshot</h3>
//           <p>Take a screenshot of your weekly earnings from Swiggy/Zomato app</p>
//           <input type="file" id="screenshotInput" accept="image/*" style={{ display: 'none' }} onChange={handleFileUpload} />
//           <button className="upload-btn" onClick={() => document.getElementById('screenshotInput').click()}>
//             <i className="fas fa-camera"></i> Upload Screenshot
//           </button>
//           <div className="file-info" id="fileInfo"></div>
//         </div>

//         {userEarnings > 0 && (
//           <>
//             <div className="earnings-card">
//               <i className="fas fa-robot" style={{ fontSize: '32px' }}></i>
//               <h3>🤖 AI Extracted Weekly Earnings</h3>
//               <div className="earnings-amount">₹{userEarnings.toLocaleString()}</div>
//               <p>Based on your screenshot analysis</p>
//             </div>

//             <div className="risk-analysis">
//               <h3><i className="fas fa-chart-line"></i> AI Risk Assessment</h3>
//               <div>
//                 <strong>📊 Calculated Metrics:</strong><br />
//                 • Daily Income: ₹{aiPolicy?.dailyIncome}<br />
//                 • Coverage Amount: ₹{aiPolicy?.coverage}/day
//               </div>
//               <div className="risk-score">
//                 Risk Level: <span className={`risk-${aiPolicy?.riskLevel}`}>{aiPolicy?.riskLevel.toUpperCase()}</span>
//               </div>
//             </div>

//             <div>
//               <h2 style={{ marginBottom: '20px' }}>🎯 AI-Recommended Plans for You</h2>
//               <div className="plans-grid">
//                 {plans.map((plan, idx) => {
//                   const premium = Math.round(aiPolicy.weeklyPremium * plan.multiplier);
//                   const coverage = Math.round(aiPolicy.coverage * (plan.multiplier === 1 ? 1 : plan.multiplier === 1.2 ? 1.17 : 1.33));
//                   return (
//                     <div key={idx} className={`plan-card ${selectedPlan?.name === plan.name ? 'selected' : ''}`} onClick={() => handleSelectPlan({ ...plan, premium, coverage })}>
//                       {plan.name === 'Standard' && <div className="plan-badge">MOST POPULAR</div>}
//                       <div className="plan-name">{plan.name}</div>
//                       <div className="plan-price">₹{premium}<small>/week</small></div>
//                       <div style={{ fontSize: '18px', color: '#10b981', marginBottom: '16px' }}>Covers up to ₹{coverage}/day</div>
//                       <ul className="plan-features">
//                         {plan.features.map((feature, fIdx) => (
//                           <li key={fIdx}><i className="fas fa-check-circle"></i> {feature}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   );
//                 })}
//               </div>
//               <button className="upload-btn" onClick={confirmPolicy} style={{ marginTop: '32px', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>
//                 ✅ Confirm & Activate Policy
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Policy;




import React, { useState } from 'react';
import PaymentGateway from './PaymentGateway';

const Policy = ({ setCurrentPolicy, currentPolicy, addTransaction, showScreen }) => {
  const [userEarnings, setUserEarnings] = useState(0);
  const [aiPolicy, setAiPolicy] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  const riskPremiums = { low: 30, medium: 49, high: 79 };

  const calculateAIPolicy = (weeklyEarnings) => {
    const dailyIncome = Math.round(weeklyEarnings / 6);
    const coverage = Math.round(dailyIncome * 0.6);
    let riskLevel = 'medium';
    if (dailyIncome < 800) riskLevel = 'low';
    else if (dailyIncome > 1200) riskLevel = 'high';
    const weeklyPremium = riskPremiums[riskLevel];
    return { dailyIncome, coverage, riskLevel, weeklyPremium };
  };

  const simulateAIExtraction = (file) => {
    return new Promise((resolve) => {
      const earnings = Math.floor(Math.random() * (15000 - 3000 + 1) + 3000);
      setTimeout(() => resolve(earnings), 2000);
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileInfo = document.getElementById('fileInfo');
      if (fileInfo) fileInfo.innerHTML = `<i class="fas fa-spinner fa-spin"></i> AI analyzing screenshot...`;
      
      const earnings = await simulateAIExtraction(file);
      setUserEarnings(earnings);
      const policy = calculateAIPolicy(earnings);
      setAiPolicy(policy);
      
      if (fileInfo) fileInfo.innerHTML = `<i class="fas fa-check-circle" style="color: #10b981;"></i> ✅ AI analysis complete!`;
    }
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setTimeout(() => {
      document.getElementById('confirmPolicyBtn')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handlePaymentSuccess = () => {
    if (selectedPlan) {
      addTransaction(`Policy Payment: ${selectedPlan.name} Plan`, -selectedPlan.premium);
      const policy = {
        ...selectedPlan,
        ...aiPolicy,
        balance: 0,
        purchaseDate: new Date().toISOString(),
        nextPaymentDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      };
      setCurrentPolicy(policy);
      localStorage.setItem('insurai_policy', JSON.stringify(policy));
      setShowPayment(false);
      alert(`✅ Payment Successful!\n\n${selectedPlan.name} plan activated successfully!`);
      // Redirect to Home page instead of Dashboard
      showScreen('home');
    }
  };

  const handleCancelPayment = () => {
    setShowPayment(false);
  };

  const confirmPolicy = () => {
    if (!selectedPlan) {
      alert('Please select a plan first');
      return;
    }
    if (!userEarnings) {
      alert('Please upload your earnings screenshot first');
      return;
    }
    setShowPayment(true);
  };

  const plans = [
    { name: 'Basic', multiplier: 1, features: ['60% income protection', 'Parametric triggers', 'Auto-payout'] },
    { name: 'Standard', multiplier: 1.2, features: ['70% income protection', 'Priority support', 'Faster payouts'] },
    { name: 'Premium', multiplier: 1.5, features: ['80% income protection', 'Family coverage', 'Wellness benefits'] }
  ];

  return (
    <div className="section-page">
      {showPayment && selectedPlan && aiPolicy && (
        <PaymentGateway 
          plan={{
            name: selectedPlan.name,
            premium: selectedPlan.premium,
            coverage: selectedPlan.coverage
          }}
          onPaymentSuccess={handlePaymentSuccess}
          onCancel={handleCancelPayment}
        />
      )}

      <div className="section-card">
        <div className="section-title"><i className="fas fa-shield-alt"></i> InsurAI - Smart Income Protection</div>
        <p>Upload your earnings screenshot - AI will calculate your personalized plan</p>

        <div className="policy-upload-section">
          <div className="upload-icon"><i className="fas fa-cloud-upload-alt"></i></div>
          <h3>Upload Earnings Screenshot</h3>
          <p>Take a screenshot of your weekly earnings from Swiggy/Zomato app</p>
          <input type="file" id="screenshotInput" accept="image/*" style={{ display: 'none' }} onChange={handleFileUpload} />
          <button className="upload-btn" onClick={() => document.getElementById('screenshotInput').click()}>
            <i className="fas fa-camera"></i> Upload Screenshot
          </button>
          <div className="file-info" id="fileInfo"></div>
        </div>

        {userEarnings > 0 && (
          <>
            <div className="earnings-card">
              <i className="fas fa-robot" style={{ fontSize: '32px' }}></i>
              <h3>🤖 AI Extracted Weekly Earnings</h3>
              <div className="earnings-amount">₹{userEarnings.toLocaleString()}</div>
              <p>Based on your screenshot analysis</p>
            </div>

            <div className="risk-analysis">
              <h3><i className="fas fa-chart-line"></i> AI Risk Assessment</h3>
              <div>
                <strong>📊 Calculated Metrics:</strong><br />
                • Daily Income: ₹{aiPolicy?.dailyIncome}<br />
                • Coverage Amount: ₹{aiPolicy?.coverage}/day
              </div>
              <div className="risk-score">
                Risk Level: <span className={`risk-${aiPolicy?.riskLevel}`}>{aiPolicy?.riskLevel.toUpperCase()}</span>
              </div>
            </div>

            <div>
              <h2 style={{ marginBottom: '20px' }}>🎯 AI-Recommended Plans for You</h2>
              <div className="plans-grid">
                {plans.map((plan, idx) => {
                  const premium = Math.round(aiPolicy.weeklyPremium * plan.multiplier);
                  const coverage = Math.round(aiPolicy.coverage * (plan.multiplier === 1 ? 1 : plan.multiplier === 1.2 ? 1.17 : 1.33));
                  return (
                    <div key={idx} className={`plan-card ${selectedPlan?.name === plan.name ? 'selected' : ''}`} onClick={() => handleSelectPlan({ ...plan, premium, coverage })}>
                      {plan.name === 'Standard' && <div className="plan-badge">MOST POPULAR</div>}
                      <div className="plan-name">{plan.name}</div>
                      <div className="plan-price">₹{premium}<small>/week</small></div>
                      <div style={{ fontSize: '18px', color: '#10b981', marginBottom: '16px' }}>Covers up to ₹{coverage}/day</div>
                      <ul className="plan-features">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx}><i className="fas fa-check-circle"></i> {feature}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
              <button 
                id="confirmPolicyBtn"
                className="upload-btn" 
                onClick={confirmPolicy} 
                style={{ marginTop: '32px', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
              >
                💳 Proceed to Payment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Policy;