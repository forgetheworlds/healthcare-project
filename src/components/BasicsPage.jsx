import React from 'react';
import { BookOpen, Stethoscope, Shield, Users, CheckCircle } from 'lucide-react';

function BasicsPage() {
  return (
    <div className="page">
      <div className="page-header">
        <BookOpen className="page-icon" size={40} />
        <h1>Healthcare Basics</h1>
        <p>Understanding the healthcare system and its components</p>
      </div>

      <div className="content-section">
        <div className="info-card">
          <h2>What is Healthcare?</h2>
          <p>Healthcare is the maintenance and improvement of physical and mental health through the prevention, diagnosis, and treatment of illness, injury, and other physical and mental impairments.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <Stethoscope className="feature-icon" size={40} />
            <h3>Primary Care</h3>
            <p>Your first point of contact for health concerns. Primary care physicians provide routine check-ups, preventive care, and treat common illnesses.</p>
            <ul>
              <li>Annual physical exams</li>
              <li>Vaccinations</li>
              <li>Treatment for common illnesses</li>
              <li>Health screenings</li>
            </ul>
          </div>

          <div className="feature-card">
            <Shield className="feature-icon" size={40} />
            <h3>Preventive Care</h3>
            <p>Services that help prevent illness, detect health problems early, and maintain good health.</p>
            <ul>
              <li>Regular check-ups</li>
              <li>Cancer screenings</li>
              <li>Blood pressure monitoring</li>
              <li>Cholesterol tests</li>
            </ul>
          </div>

          <div className="feature-card">
            <Users className="feature-icon" size={40} />
            <h3>Specialized Care</h3>
            <p>Care provided by doctors who focus on specific areas of medicine.</p>
            <ul>
              <li>Cardiologists (heart)</li>
              <li>Dermatologists (skin)</li>
              <li>Orthopedists (bones/joints)</li>
              <li>Neurologists (brain/nervous system)</li>
            </ul>
          </div>
        </div>

        <div className="highlight-card">
          <CheckCircle className="highlight-icon" size={24} />
          <div className="highlight-content">
            <h3>💡 Key Takeaway</h3>
            <p>Regular check-ups can catch health issues early, when they're easier to treat and less expensive to manage. Prevention is always better than cure!</p>
          </div>
        </div>

        <div className="info-section">
          <h2>Types of Healthcare Providers</h2>
          <div className="provider-grid">
            <div className="provider-card">
              <h3>Primary Care Physician (PCP)</h3>
              <p>Your main doctor who coordinates your overall healthcare</p>
            </div>
            <div className="provider-card">
              <h3>Nurse Practitioners (NP)</h3>
              <p>Advanced practice nurses who can diagnose and treat many conditions</p>
            </div>
            <div className="provider-card">
              <h3>Physician Assistants (PA)</h3>
              <p>Licensed medical professionals who work under doctor supervision</p>
            </div>
            <div className="provider-card">
              <h3>Specialists</h3>
              <p>Doctors who focus on specific areas of medicine</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicsPage; 