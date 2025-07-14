import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Heart, Home, BookOpen, Activity, Shield, Phone, Brain, Pill, Users, FileText } from 'lucide-react';
import './App.css';
import HomePage from './components/HomePage.jsx';
import BasicsPage from './components/BasicsPage.jsx';
import PreventivePage from './components/PreventivePage.jsx';
import EmergencyPage from './components/EmergencyPage.jsx';
import MedicationPage from './components/MedicationPage.jsx';
import MentalHealthPage from './components/MentalHealthPage.jsx';
import NavigationPage from './components/NavigationPage.jsx';
import QuizPage from './components/QuizPage.jsx';
import ResourcesPage from './components/ResourcesPage.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <Heart className="nav-icon" />
              <span>Healthcare Education</span>
            </div>
            <div className="nav-links">
              <a href="/" className="nav-link">
                <Home size={20} />
                <span>Home</span>
              </a>
              <a href="/basics" className="nav-link">
                <BookOpen size={20} />
                <span>Basics</span>
              </a>
              <a href="/preventive" className="nav-link">
                <Activity size={20} />
                <span>Preventive</span>
              </a>
              <a href="/emergency" className="nav-link">
                <Shield size={20} />
                <span>Emergency</span>
              </a>
              <a href="/medication" className="nav-link">
                <Pill size={20} />
                <span>Medication</span>
              </a>
              <a href="/mental-health" className="nav-link">
                <Brain size={20} />
                <span>Mental Health</span>
              </a>
              <a href="/navigation" className="nav-link">
                <Users size={20} />
                <span>Navigation</span>
              </a>
              <a href="/quiz" className="nav-link">
                <FileText size={20} />
                <span>Quiz</span>
              </a>
              <a href="/resources" className="nav-link">
                <Phone size={20} />
                <span>Resources</span>
              </a>
            </div>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/basics" element={<BasicsPage />} />
            <Route path="/preventive" element={<PreventivePage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/medication" element={<MedicationPage />} />
            <Route path="/mental-health" element={<MentalHealthPage />} />
            <Route path="/navigation" element={<NavigationPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2024 Healthcare Education | This information is for educational purposes only and should not replace professional medical advice.</p>
          <p>Always consult with healthcare professionals for medical decisions.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
