import React from 'react';
import { Activity, Heart, Droplets, Moon, Apple, Dumbbell } from 'lucide-react';

function PreventivePage() {
  return (
    <div className="page">
      <div className="page-header">
        <Activity className="page-icon" size={40} />
        <h1>Preventive Health</h1>
        <p>Daily habits and practices for maintaining good health</p>
      </div>

      <div className="content-section">
        <div className="info-card">
          <h2>Prevention is Better Than Cure</h2>
          <p>Taking care of your health daily can prevent many illnesses and help you live a longer, healthier life.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <Dumbbell className="feature-icon" size={40} />
            <h3>Exercise Regularly</h3>
            <p>Aim for at least 30 minutes of moderate exercise daily.</p>
            <ul>
              <li>Walking, jogging, or cycling</li>
              <li>Strength training 2-3 times per week</li>
              <li>Flexibility exercises (yoga, stretching)</li>
              <li>Find activities you enjoy</li>
            </ul>
          </div>

          <div className="feature-card">
            <Apple className="feature-icon" size={40} />
            <h3>Eat a Balanced Diet</h3>
            <p>Focus on whole foods and maintain a healthy weight.</p>
            <ul>
              <li>Fruits and vegetables (5+ servings daily)</li>
              <li>Whole grains</li>
              <li>Lean proteins</li>
              <li>Limit processed foods and added sugars</li>
            </ul>
          </div>

          <div className="feature-card">
            <Moon className="feature-icon" size={40} />
            <h3>Get Quality Sleep</h3>
            <p>Aim for 7-9 hours of sleep per night.</p>
            <ul>
              <li>Establish a regular sleep schedule</li>
              <li>Create a relaxing bedtime routine</li>
              <li>Keep your bedroom cool and dark</li>
              <li>Avoid screens before bedtime</li>
            </ul>
          </div>

          <div className="feature-card">
            <Droplets className="feature-icon" size={40} />
            <h3>Stay Hydrated</h3>
            <p>Drink 8 glasses of water daily (about 2 liters).</p>
            <ul>
              <li>Carry a water bottle</li>
              <li>Drink water with meals</li>
              <li>Monitor urine color (should be light yellow)</li>
              <li>Increase intake during exercise</li>
            </ul>
          </div>
        </div>

        <div className="highlight-card">
          <Heart className="highlight-icon" size={24} />
          <div className="highlight-content">
            <h3>💪 Pro Tip</h3>
            <p>Start with small changes - even a 10-minute walk daily can improve your health significantly!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreventivePage; 