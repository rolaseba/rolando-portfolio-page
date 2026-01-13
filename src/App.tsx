import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import SparePartsAnomalyPage from './pages/case-studies/SparePartsAnomalyPage';

function App() {
  return (
    <Router basename="/rolando-portfolio-page">
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />

        {/* Case Study Page */}
        <Route path="/projects/spare-parts-anomaly-detection" element={<Layout><SparePartsAnomalyPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;