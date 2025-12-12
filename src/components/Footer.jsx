// Composant Footer
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-100 to-rose-200 shadow-lg mt-auto">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <p className="text-black text-sm">&copy; {new Date().getFullYear()} SushiFast</p>
          <div className="hidden lg:flex space-x-6">
            <a href="#" className="nav-link">Accueil</a>
            <a href="#" className="nav-link">Menus</a>
            <a href="#" className="nav-link">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
