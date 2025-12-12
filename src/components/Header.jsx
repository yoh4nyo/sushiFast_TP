import { Link } from 'react-router-dom';
import logo from '../assets/SushiFast.png';

// Composant Header
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-100 to-rose-200 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
            <img src={logo} alt="SushiFast Logo" className="h-12 w-auto" />
            <h1 className="text-4xl text-black" style={{ fontFamily: "'Chewy', cursive" }}>
              Sushi<span className="text-pink-400">Fast</span>
            </h1>
          </Link>

          <nav className="hidden lg:flex space-x-6">
            <Link to="/" className="nav-link">
              Accueil
            </Link>
            <Link to="/menus" className="nav-link">
              Menus
            </Link>
            <Link to="/saveurs" className="nav-link">
              Saveurs
            </Link>
            <Link to="/avocat-coriandre" className="nav-link">
              Avocat & Coriandre
            </Link>
            <Link to="/aliments" className="nav-link">
              Aliments
            </Link>
            <Link to="/sans-california" className="nav-link">
              Sans California
            </Link>
            <Link to="/prix-total" className="nav-link">
              Prix Total
            </Link>
            <Link to="/tarifs" className="nav-link">
              Tarifs
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
