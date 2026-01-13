import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SparePartsAnomalyCaseStudy from './components/SparePartsAnomalyCaseStudy';

function App() {
  return (
    <Router basename="/rolando-portfolio-page">
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <About />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />

          {/* Case Study Page */}
          <Route path="/projects/spare-parts-anomaly-detection" element={
            <>
              <Header />
              <SparePartsAnomalyCaseStudy />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;