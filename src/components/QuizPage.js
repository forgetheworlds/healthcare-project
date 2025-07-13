import React from 'react';
import { FileText } from 'lucide-react';

function QuizPage() {
  return (
    <div className="page">
      <div className="page-header">
        <FileText className="page-icon" size={40} />
        <h1>Healthcare Quiz</h1>
        <p>Test your knowledge about healthcare!</p>
      </div>
      <div className="content-section">
        <p>Quiz functionality coming soon.</p>
      </div>
    </div>
  );
}

export default QuizPage; 