import { useMemo } from 'react';
import boxesData from '../data/boxes.json';
import MenuCard from '../components/MenuCard';

// Page seulement avocat et coriandre
const AvocatCoriandre = () => {
  const filteredMenus = useMemo(() =>  // filtre des menus avec avocat ou coriandre
    boxesData.filter(menu => 
      menu.saveurs.some(saveur => 
        saveur.toLowerCase().includes('avocat') || 
        saveur.toLowerCase().includes('coriandre')
      )
    )
  , []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 text-gray-800">
          Saveurs avocat & coriandre
        </h1>
        <p className="text-gray-600 text-lg mb-2">
          Menus contenant les saveurs avocat ou coriandre
        </p>
        <p className="text-primary font-semibold">
          {filteredMenus.length} menus disponibles
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

export default AvocatCoriandre;
