// // components/Home.js
// import React from 'react';

// const Home = ({ showScreen }) => {
//   return (
//     <div>
//       <div className="hero-section-new">
//         <div className="hero-content-new">
//           <div className="hero-tag">AI-POWERED INSURANCE</div>
//           <h1>Protect Gig<br />Workers Income.</h1>
//           <p>AI-powered safety during disruptions. Automatically replaces lost income during rain, heatwaves, and low demand. No claims, no paperwork.</p>
//         </div>
//         <div className="hero-image-new"><i className="fas fa-shield-alt"></i></div>
//       </div>
      
//       <div className="problems-section">
//         <div className="section-header">
//           <h2>Real Problems Workers Face</h2>
//           <p>Traditional insurance doesn't cover the everyday disruptions that ruin a gig worker's livelihood.</p>
//         </div>
//         <div className="problems-grid">
//           <div className="problem-card">
//             <div className="problem-icon"><i className="fas fa-cloud-rain"></i></div>
//             <h3>Rain → No Orders</h3>
//             <p>Heavy rain forces workers to stop, but bills don't pause.</p>
//           </div>
//           <div className="problem-card">
//             <div className="problem-icon"><i className="fas fa-chart-line"></i></div>
//             <h3>Low Demand → No Income</h3>
//             <p>Waiting for hours in quiet zones yields zero earnings.</p>
//           </div>
//           <div className="problem-card">
//             <div className="problem-icon"><i className="fas fa-temperature-high"></i></div>
//             <h3>Heat → Health Risk</h3>
//             <p>Working through 45°C heatwaves is dangerous.</p>
//           </div>
//           <div className="problem-card">
//             <div className="problem-icon"><i className="fas fa-exclamation-triangle"></i></div>
//             <h3>Unsafe Work → Dangerous</h3>
//             <p>Desperation pushes workers into risky situations.</p>
//           </div>
//         </div>
//       </div>

//       <div className="howitworks-section">
//         <div className="section-header">
//           <h2>How Income Guard Works</h2>
//           <p>Zero friction. Zero claims forms. 100% automated.</p>
//         </div>
//         <div className="steps-container">
//           <div className="step-card">
//             <div className="step-number">1</div>
//             <h3>Detect Risk</h3>
//             <p>AI monitors hyper-local weather and demand via API.</p>
//           </div>
//           <div className="step-card">
//             <div className="step-number">2</div>
//             <h3>Verify Worker</h3>
//             <p>Confirms worker was active and in the affected zone.</p>
//           </div>
//           <div className="step-card">
//             <div className="step-number">3</div>
//             <h3>Protect Income</h3>
//             <p>Instant payout credited or alternative indoor task offered.</p>
//           </div>
//         </div>
//       </div>

//       <div className="features-section">
//         <div className="section-header">
//           <h2>Smart Protection Features</h2>
//           <p>Built specifically for the gig economy</p>
//         </div>
//         <div className="features-grid">
//           <div className="feature-card">
//             <div className="feature-icon"><i className="fas fa-cloud-sun"></i></div>
//             <h3>AI Risk Detection</h3>
//             <p>Continuously monitors hyper-local weather APIs and platform demand patterns.</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icon"><i className="fas fa-coins"></i></div>
//             <h3>Dynamic Premium</h3>
//             <p>Micro-premiums deducted seamlessly per ride or per shift.</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icon"><i className="fas fa-bolt"></i></div>
//             <h3>Instant Payout</h3>
//             <p>Funds credited directly to the worker's wallet. No waiting days.</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icon"><i className="fas fa-shield-virus"></i></div>
//             <h3>Fraud Protection</h3>
//             <p>Cross-references GPS data, platform logs, and weather APIs.</p>
//           </div>
//         </div>
//       </div>

//       <div className="whyworks-section">
//         <h2>Why This Works</h2>
//         <p>Traditional insurance models are broken for the gig economy. We use code instead.</p>
//         <div className="benefits-grid">
//           <div className="benefit-item"><i className="fas fa-check-circle"></i> Automatic claims without forms</div>
//           <div className="benefit-item"><i className="fas fa-check-circle"></i> No paperwork or physical checks</div>
//           <div className="benefit-item"><i className="fas fa-check-circle"></i> 24/7 instant support</div>
//           <div className="benefit-item"><i className="fas fa-check-circle"></i> AI-powered fraud protection</div>
//         </div>
//         <div className="stats-container">
//           <div className="stat-item">
//             <div className="stat-number">50,000+</div>
//             <div className="stat-label">Workers Protected</div>
//           </div>
//           <div className="stat-item">
//             <div className="stat-number">99.2%</div>
//             <div className="stat-label">Claim Success</div>
//           </div>
//           <div className="stat-item">
//             <div className="stat-number">&lt;1s</div>
//             <div className="stat-label">Payout Time</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;













import React from 'react';

const Home = ({ showScreen }) => {
  return (
    <div>
      <div className="hero-section-new">
        <div className="hero-content-new">
          <div className="hero-tag">AI-POWERED INSURANCE</div>
          <h1>Protect Gig<br />Workers Income.</h1>
          <p>AI-powered safety during disruptions. Automatically replaces lost income during rain, heatwaves, and low demand. No claims, no paperwork.</p>
        </div>
        <div className="hero-image-new"><i className="fas fa-shield-alt"></i></div>
      </div>
      
      <div className="problems-section">
        <div className="section-header">
          <h2>Real Problems Workers Face</h2>
          <p>Traditional insurance doesn't cover the everyday disruptions that ruin a gig worker's livelihood.</p>
        </div>
        <div className="problems-grid">
          <div className="problem-card">
            <div className="problem-icon"><i className="fas fa-cloud-rain"></i></div>
            <h3>Rain → No Orders</h3>
            <p>Heavy rain forces workers to stop, but bills don't pause.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon"><i className="fas fa-chart-line"></i></div>
            <h3>Low Demand → No Income</h3>
            <p>Waiting for hours in quiet zones yields zero earnings.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon"><i className="fas fa-temperature-high"></i></div>
            <h3>Heat → Health Risk</h3>
            <p>Working through 45°C heatwaves is dangerous.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon"><i className="fas fa-exclamation-triangle"></i></div>
            <h3>Unsafe Work → Dangerous</h3>
            <p>Desperation pushes workers into risky situations.</p>
          </div>
        </div>
      </div>

      <div className="howitworks-section">
        <div className="section-header">
          <h2>How Income Guard Works</h2>
          <p>Zero friction. Zero claims forms. 100% automated.</p>
        </div>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Detect Risk</h3>
            <p>AI monitors hyper-local weather and demand via API.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Verify Worker</h3>
            <p>Confirms worker was active and in the affected zone.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Protect Income</h3>
            <p>Instant payout credited or alternative indoor task offered.</p>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="section-header">
          <h2>Smart Protection Features</h2>
          <p>Built specifically for the gig economy</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-cloud-sun"></i></div>
            <h3>AI Risk Detection</h3>
            <p>Continuously monitors hyper-local weather APIs and platform demand patterns.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-coins"></i></div>
            <h3>Dynamic Premium</h3>
            <p>Micro-premiums deducted seamlessly per ride or per shift.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-bolt"></i></div>
            <h3>Instant Payout</h3>
            <p>Funds credited directly to the worker's wallet. No waiting days.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-shield-virus"></i></div>
            <h3>Fraud Protection</h3>
            <p>Cross-references GPS data, platform logs, and weather APIs.</p>
          </div>
        </div>
      </div>

      <div className="whyworks-section">
        <h2>Why This Works</h2>
        <p>Traditional insurance models are broken for the gig economy. We use code instead.</p>
        <div className="benefits-grid">
          <div className="benefit-item"><i className="fas fa-check-circle"></i> Automatic claims without forms</div>
          <div className="benefit-item"><i className="fas fa-check-circle"></i> No paperwork or physical checks</div>
          <div className="benefit-item"><i className="fas fa-check-circle"></i> 24/7 instant support</div>
          <div className="benefit-item"><i className="fas fa-check-circle"></i> AI-powered fraud protection</div>
        </div>
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">50,000+</div>
            <div className="stat-label">Workers Protected</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99.2%</div>
            <div className="stat-label">Claim Success</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">&lt;1s</div>
            <div className="stat-label">Payout Time</div>
          </div>
        </div>
      </div>

      {/* Footer - Only visible on Home page */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-text" style={{color:'white'}}>Gig<span style={{color:'#f97316'}}>Shield AI</span></div>
            <p>Smart protection for the modern workforce.</p>
          </div>
          <div className="footer-links">
            <h4>Product</h4>
            <button className="footer-link-btn" onClick={() => showScreen('home')}>Home</button>
            <button className="footer-link-btn" onClick={() => showScreen('policy')}>Policy Details</button>
            <button className="footer-link-btn" onClick={() => showScreen('wallet')}>Wallet</button>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <button className="footer-link-btn">About Us</button>
            <button className="footer-link-btn">Careers</button>
            <button className="footer-link-btn">Contact</button>
          </div>
          <div className="footer-links">
            <h4>Support</h4>
            <button className="footer-link-btn">Help Center</button>
            <button className="footer-link-btn">Terms</button>
            <button className="footer-link-btn">Privacy</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 GigShield AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;