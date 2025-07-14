import React from 'react';
import { Heart, BookOpen, Activity, Shield, Brain, Pill, Users, FileText, ArrowRight, Lightbulb } from 'lucide-react';

function HomePage() {
  return (
    <div className="page">
      <div className="hero-section">
        <div className="hero-content">
          <Heart className="hero-icon" size={80} />
          <h1>🏥 Healthcare Education</h1>
          <p className="hero-subtitle">Your Guide to Understanding Health and Wellness</p>
          <p className="hero-description">
            Learn essential healthcare knowledge to make informed decisions about your health and well-being.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>What You'll Learn</h2>
        <div className="features-grid">
          <div className="feature-card">
            <BookOpen className="feature-icon" size={40} />
            <h3>Healthcare Basics</h3>
            <p>Understand the healthcare system, types of providers, and how to access care effectively.</p>
            <a href="/basics" className="learn-more">
              Learn More <ArrowRight size={16} />
            </a>
          </div>

          <div className="feature-card">
            <Activity className="feature-icon" size={40} />
            <h3>Preventive Health</h3>
            <p>Discover daily habits and practices that help maintain good health and prevent illness.</p>
            <a href="/preventive" className="learn-more">
              Learn More <ArrowRight size={16} />
            </a>
          </div>

          <div className="feature-card">
            <Shield className="feature-icon" size={40} />
            <h3>Emergency Situations</h3>
            <p>Know when to seek immediate medical attention and how to respond in emergencies.</p>
            <a href="/emergency" className="learn-more">
              Learn More <ArrowRight size={16} />
            </a>
          </div>

          <div className="feature-card">
            <Pill className="feature-icon" size={40} />
            <h3>Medication Safety</h3>
            <p>Learn about safe medication practices, understanding prescriptions, and avoiding interactions.</p>
            <a href="/medication" className="learn-more">
              Learn More <ArrowRight size={16} />
            </a>
          </div>

          <div className="feature-card">
            <Brain className="feature-icon" size={40} />
            <h3>Mental Health</h3>
            <p>Understand mental wellness, recognize warning signs, and know when to seek help.</p>
            <a href="/mental-health" className="learn-more">
              Learn More <ArrowRight size={16} />
            </a>
          </div>

          <div className="feature-card">
            <Users className="feature-icon" size={40} />
            <h3>Healthcare Navigation</h3>
            <p>Learn how to navigate the healthcare system, find providers, and prepare for appointments.</p>
            <a href="/navigation" className="learn-more">
              Learn More <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-card">
            <FileText className="cta-icon" size={40} />
            <h3>Test Your Knowledge</h3>
            <p>Take our interactive quiz to see how much you've learned about healthcare!</p>
            <a href="/quiz" className="cta-button">
              Take the Quiz <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="tip-section">
          <div className="tip-card">
            <Lightbulb className="tip-icon" size={24} />
            <div className="tip-content">
              <h4>💡 Did You Know?</h4>
              <p>Regular check-ups can catch health issues early, when they're easier to treat and less expensive to manage. Prevention is always better than cure!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage; 