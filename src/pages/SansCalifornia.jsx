import { useMemo } from 'react';
import boxesData from '../data/boxes.json';
import MenuCard from '../components/MenuCard';

// Page affichant les menus sans California Saumon Avocat
const SansCalifornia = () => {
  const filteredMenus = useMemo(() => 
    boxesData.filter(menu => 
      !menu.aliments.some(aliment => 
        aliment.nom.toLowerCase() === 'california saumon avocat'
      )
    )
  , []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 text-gray-800">
          Sans california saumon avocat
        </h1>
        <p className="text-primary font-semibold">
          {filteredMenus.length} menus' disponibles
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredMenus.map((menu) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </div>
    </div>
  );
};

export default SansCalifornia;
