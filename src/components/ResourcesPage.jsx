import React from 'react';
import { Phone } from 'lucide-react';

function ResourcesPage() {
  return (
    <div className="page">
      <div className="page-header">
        <Phone className="page-icon" size={40} />
        <h1>Additional Resources</h1>
        <p>Find more information and support here.</p>
      </div>
      <div className="content-section">
        <ul>
          <li><a href="https://www.cdc.gov" target="_blank" rel="noopener noreferrer">CDC - Centers for Disease Control and Prevention</a></li>
          <li><a href="https://www.nih.gov" target="_blank" rel="noopener noreferrer">NIH - National Institutes of Health</a></li>
          <li><a href="https://www.medlineplus.gov" target="_blank" rel="noopener noreferrer">MedlinePlus - Health Information</a></li>
          <li><a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer">988 Suicide & Crisis Lifeline</a></li>
          <li><a href="https://www.nami.org" target="_blank" rel="noopener noreferrer">National Alliance on Mental Illness</a></li>
        </ul>
      </div>
    </div>
  );
}

export default ResourcesPage; 