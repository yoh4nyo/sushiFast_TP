import boxesData from '../data/boxes.json';
import MenuCard from '../components/MenuCard';

// Affiche tous les menus avec nom, prix, pièces et image
const Menus = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 text-gray-800">
          Notre sélection de menus
        </h1>
        <p className="text-gray-600 text-lg">
          Découvrez tous nos menus sushis préparés avec soin
        </p>
      </div>
      {/* Grille responsive qui affiche toutes les cards de menus */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {boxesData.map((menu) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </div>
    </div>
  );
};

export default Menus;
