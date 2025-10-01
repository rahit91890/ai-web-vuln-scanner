import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">🛡️ Vuln Scanner</Link>
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/scan" className="nav-link">Scan</Link></li>
          <li><Link to="/results" className="nav-link">Results</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>AI-Powered Web Vulnerability Scanner</h1>
        <p>Scan websites for security vulnerabilities with AI-driven analysis</p>
        <Link to="/scan" className="btn-primary">Start Scanning</Link>
      </header>
      <div className="features">
        <div className="feature-card">
          <h3>🔍 XSS Detection</h3>
          <p>Identify Cross-Site Scripting vulnerabilities</p>
        </div>
        <div className="feature-card">
          <h3>💉 SQL Injection</h3>
          <p>Test for database security issues</p>
        </div>
        <div className="feature-card">
          <h3>🔐 CSRF Protection</h3>
          <p>Check for Cross-Site Request Forgery flaws</p>
        </div>
      </div>
    </div>
  );
}

function ScanPage() {
  const [url, setUrl] = useState('');
  const [scanType, setScanType] = useState('quick');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Scanning ${url} with ${scanType} scan type...`);
  };

  return (
    <div className="scan-page">
      <h2>Scan Website</h2>
      <form onSubmit={handleSubmit} className="scan-form">
        <div className="form-group">
          <label htmlFor="url">Website URL</label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="scanType">Scan Type</label>
          <select
            id="scanType"
            value={scanType}
            onChange={(e) => setScanType(e.target.value)}
          >
            <option value="quick">Quick Scan</option>
            <option value="full">Full Scan</option>
            <option value="custom">Custom Scan</option>
          </select>
        </div>
        <button type="submit" className="btn-primary">Start Scan</button>
      </form>
    </div>
  );
}

function Results() {
  const mockResults = [
    { id: 1, vulnerability: 'XSS', severity: 'High', url: '/login', status: 'Found' },
    { id: 2, vulnerability: 'SQL Injection', severity: 'Critical', url: '/search', status: 'Found' },
    { id: 3, vulnerability: 'CSRF', severity: 'Medium', url: '/profile', status: 'Found' },
    { id: 4, vulnerability: 'Insecure Headers', severity: 'Low', url: '/', status: 'Found' },
  ];

  return (
    <div className="results-page">
      <h2>Scan Results</h2>
      <table className="results-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vulnerability</th>
            <th>Severity</th>
            <th>URL</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mockResults.map((result) => (
            <tr key={result.id} className={`severity-${result.severity.toLowerCase()}`}>
              <td>{result.id}</td>
              <td>{result.vulnerability}</td>
              <td>{result.severity}</td>
              <td>{result.url}</td>
              <td>{result.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
