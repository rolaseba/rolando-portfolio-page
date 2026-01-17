import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import SparePartsAnomalyPage from './pages/case-studies/SparePartsAnomalyPage';
import MaterialCostPerformancePage from './pages/case-studies/MaterialCostPerformancePage';
import WarehouseObsolescencePage from './pages/case-studies/WarehouseObsolescencePage';
import MaltOptimizationPage from './pages/case-studies/MaltOptimizationPage';
import LSTMEnergyPage from './pages/case-studies/LSTMEnergyPage';
import HotelCancellationPage from './pages/case-studies/HotelCancellationPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />

        {/* Case Study Page */}
        <Route path="/projects/spare-parts-anomaly-detection" element={<Layout><SparePartsAnomalyPage /></Layout>} />
        <Route path="/projects/material-cost-performance" element={<Layout><MaterialCostPerformancePage /></Layout>} />
        <Route path="/projects/warehouse-strategy-obsolescence" element={<Layout><WarehouseObsolescencePage /></Layout>} />
        <Route path="/projects/malt-production-optimization" element={<Layout><MaltOptimizationPage /></Layout>} />
        <Route path="/projects/lstm-energy-demand" element={<Layout><LSTMEnergyPage /></Layout>} />
        <Route path="/projects/hotel-cancellation-prediction" element={<Layout><HotelCancellationPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;