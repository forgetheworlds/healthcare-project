import React from 'react';
import { Brain, Heart, AlertTriangle, Users, CheckCircle } from 'lucide-react';

function MentalHealthPage() {
  return (
    <div className="page">
      <div className="page-header">
        <Brain className="page-icon" size={40} />
        <h1>Mental Health Matters</h1>
        <p>Understanding and maintaining mental wellness</p>
      </div>

      <div className="content-section">
        <div className="info-card">
          <h2>Mental Health is Just as Important as Physical Health</h2>
          <p>Mental health affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <CheckCircle className="feature-icon" size={40} />
            <h3>Signs of Good Mental Health</h3>
            <ul>
              <li>Feeling generally happy and content</li>
              <li>Having healthy relationships</li>
              <li>Being able to handle stress</li>
              <li>Having a sense of purpose</li>
              <li>Being able to adapt to change</li>
            </ul>
          </div>

          <div className="feature-card">
            <AlertTriangle className="feature-icon" size={40} />
            <h3>When to Seek Help</h3>
            <ul>
              <li>Persistent sadness or anxiety</li>
              <li>Changes in sleep or appetite</li>
              <li>Withdrawal from activities</li>
              <li>Thoughts of self-harm</li>
              <li>Difficulty concentrating</li>
            </ul>
          </div>

          <div className="feature-card">
            <Heart className="feature-icon" size={40} />
            <h3>Self-Care Practices</h3>
            <ul>
              <li>Practice mindfulness or meditation</li>
              <li>Stay connected with friends and family</li>
              <li>Get regular exercise</li>
              <li>Maintain a healthy sleep schedule</li>
              <li>Seek professional help when needed</li>
            </ul>
          </div>

          <div className="feature-card">
            <Users className="feature-icon" size={40} />
            <h3>Supporting Others</h3>
            <ul>
              <li>Listen without judgment</li>
              <li>Encourage professional help</li>
              <li>Be patient and understanding</li>
              <li>Take care of yourself too</li>
              <li>Know crisis resources</li>
            </ul>
          </div>
        </div>

        <div className="highlight-card">
          <Heart className="highlight-icon" size={24} />
          <div className="highlight-content">
            <h3>💚 Remember</h3>
            <p>It's okay to ask for help. Mental health professionals are trained to support you. Seeking help is a sign of strength, not weakness.</p>
          </div>
        </div>

        <div className="info-card">
          <h3>Crisis Resources</h3>
          <ul>
            <li><strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988</li>
            <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
            <li><strong>Emergency:</strong> 911 for immediate danger</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MentalHealthPage; 