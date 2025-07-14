import React from 'react';
import { Pill, AlertTriangle, CheckCircle, Clock, Users } from 'lucide-react';

function MedicationPage() {
  return (
    <div className="page">
      <div className="page-header">
        <Pill className="page-icon" size={40} />
        <h1>Medication Safety</h1>
        <p>Understanding and using medications safely</p>
      </div>

      <div className="content-section">
        <div className="info-card">
          <h2>Safe Medication Practices</h2>
          <p>Medications can be lifesaving, but they must be used correctly to be safe and effective.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <CheckCircle className="feature-icon" size={40} />
            <h3>Always Follow Instructions</h3>
            <ul>
              <li>Take exactly as prescribed</li>
              <li>Don't skip doses</li>
              <li>Don't double up if you miss a dose</li>
              <li>Ask questions if unclear</li>
            </ul>
          </div>

          <div className="feature-card">
            <AlertTriangle className="feature-icon" size={40} />
            <h3>Read Labels Carefully</h3>
            <ul>
              <li>Check warnings and side effects</li>
              <li>Note storage requirements</li>
              <li>Check expiration dates</li>
              <li>Understand dosage instructions</li>
            </ul>
          </div>

          <div className="feature-card">
            <Users className="feature-icon" size={40} />
            <h3>Never Share Medications</h3>
            <ul>
              <li>Medications are prescribed for you specifically</li>
              <li>Sharing can be dangerous</li>
              <li>Keep medications secure</li>
              <li>Dispose of unused medications properly</li>
            </ul>
          </div>

          <div className="feature-card">
            <Clock className="feature-icon" size={40} />
            <h3>Storage Guidelines</h3>
            <ul>
              <li>Store in cool, dry place</li>
              <li>Keep out of reach of children</li>
              <li>Don't store in bathroom</li>
              <li>Check temperature requirements</li>
            </ul>
          </div>
        </div>

        <div className="warning-card">
          <AlertTriangle className="warning-icon" size={24} />
          <div className="warning-content">
            <h3>⚠️ Important Warning</h3>
            <p>Never stop taking prescribed medications without consulting your doctor first. Suddenly stopping some medications can be dangerous.</p>
          </div>
        </div>

        <div className="info-card">
          <h3>Keep a Medication List</h3>
          <p>Maintain a current list of all medications you take, including:</p>
          <ul>
            <li>Prescription medications</li>
            <li>Over-the-counter drugs</li>
            <li>Vitamins and supplements</li>
            <li>Herbal remedies</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MedicationPage; 