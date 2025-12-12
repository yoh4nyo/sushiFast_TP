import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menus from './pages/ToutLesMenus';
import MenuDetail from './pages/MenuDetail';
import Saveurs from './pages/OnlySaveurs';
import AvocatCoriandre from './pages/AvocatCoriandre';
import Aliments from './pages/Aliments';
import SansCalifornia from './pages/SansCalifornia';
import PrixTotal from './pages/PrixTotal';
import Tarifs from './pages/Tarifs';
import './App.css';

// Point d'entrée de l'app avec toutes les routes
function App() {
  return (
    <Router basename="/sushiFast_TP">
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          {/* Définition de toutes les routes de l'application */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/menu/:id" element={<MenuDetail />} />
            <Route path="/saveurs" element={<Saveurs />} />
            <Route path="/avocat-coriandre" element={<AvocatCoriandre />} />
            <Route path="/aliments" element={<Aliments />} />
            <Route path="/sans-california" element={<SansCalifornia />} />
            <Route path="/prix-total" element={<PrixTotal />} />
            <Route path="/tarifs" element={<Tarifs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
