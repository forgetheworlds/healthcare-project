import React from 'react';
import { Users } from 'lucide-react';

function NavigationPage() {
  return (
    <div className="page">
      <div className="page-header">
        <Users className="page-icon" size={40} />
        <h1>Navigating the Healthcare System</h1>
        <p>Learn how to access and use healthcare services.</p>
      </div>
      <div className="content-section">
        <p>This page will teach you how to find providers, prepare for appointments, and understand the healthcare system.</p>
      </div>
    </div>
  );
}

export default NavigationPage; 