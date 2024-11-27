import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Lazy load components
const Home = React.lazy(() => import("./components/Home/Home"));
const About = React.lazy(() => import("./components/About/About"));
const Projects = React.lazy(() => import("./components/Projects/Projects"));
const ACDemo = React.lazy(() => import("./components/AuthorCopilotExample/ACDemo"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

function App() {
  useEffect(() => {
    // Load non-critical CSS after component mounts
    const timer = setTimeout(() => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = './critical.css';
      link.type = 'text/css';
      document.head.appendChild(link);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/acdemo" element={<ACDemo />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
