import React from 'react';
import { Shield, AlertTriangle, Phone, Heart, Brain, Thermometer } from 'lucide-react';

function EmergencyPage() {
  return (
    <div className="page">
      <div className="page-header">
        <Shield className="page-icon" size={40} />
        <h1>Emergency Situations</h1>
        <p>Know when to seek immediate medical attention</p>
      </div>

      <div className="content-section">
        <div className="emergency-alert">
          <AlertTriangle className="alert-icon" size={40} />
          <h2>🚑 Call 911 or Emergency Services for:</h2>
          <ul>
            <li>Chest pain or pressure</li>
            <li>Difficulty breathing</li>
            <li>Severe bleeding</li>
            <li>Loss of consciousness</li>
            <li>Sudden severe headache</li>
            <li>Paralysis or numbness</li>
            <li>Severe burns</li>
            <li>Poisoning</li>
          </ul>
        </div>

        <div className="features-grid">
          <div className="feature-card emergency">
            <Heart className="feature-icon" size={40} />
            <h3>Heart Attack Signs</h3>
            <ul>
              <li>Chest pain or pressure</li>
              <li>Pain spreading to arms, neck, jaw</li>
              <li>Shortness of breath</li>
              <li>Nausea or lightheadedness</li>
            </ul>
          </div>

          <div className="feature-card emergency">
            <Brain className="feature-icon" size={40} />
            <h3>Stroke Signs (FAST)</h3>
            <ul>
              <li><strong>F</strong>ace drooping</li>
              <li><strong>A</strong>rm weakness</li>
              <li><strong>S</strong>peech difficulty</li>
              <li><strong>T</strong>ime to call 911</li>
            </ul>
          </div>

          <div className="feature-card emergency">
            <Thermometer className="feature-icon" size={40} />
            <h3>When to See a Doctor</h3>
            <ul>
              <li>Fever over 103°F (39.4°C)</li>
              <li>Pain that doesn't improve with rest</li>
              <li>Unexplained weight loss</li>
              <li>Persistent symptoms lasting more than a week</li>
            </ul>
          </div>
        </div>

        <div className="info-card">
          <Phone className="info-icon" size={24} />
          <h3>Emergency Contacts</h3>
          <ul>
            <li><strong>Emergency:</strong> 911 (US)</li>
            <li><strong>Poison Control:</strong> 1-800-222-1222 (US)</li>
            <li><strong>Mental Health Crisis:</strong> 988 (US)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EmergencyPage;
