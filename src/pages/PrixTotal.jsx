import { useMemo } from 'react';
import boxesData from '../data/boxes.json';
import MenuCard from '../components/MenuCard';

// Page qui calcule le prix total des menus avec moins de 13 pièces
const PrixTotal = () => {
  // Filtre pour garder que les menus < 13 pièces
  const filteredMenus = useMemo(() => 
    boxesData.filter(menu => menu.pieces < 13)
  , []);
  
  // Calcule la somme des prix de tous ces menus
  const totalPrice = useMemo(() => 
    filteredMenus.reduce((sum, menu) => sum + menu.prix, 0)
  , [filteredMenus]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          Prix Total - Menus de moins de 13 pièces
        </h1>
        <p className="text-gray-600">
          Calcul du prix total pour une commande avec les menus sélectionnés
        </p>
      </div>
      
      <div className="max-w-lg mx-auto mb-8 bg-white rounded-lg shadow-md p-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Nombre de menus</span>
            <span className="text-xl font-bold text-gray-800">{filteredMenus.length}</span>
          </div>
          <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-800">Prix Total</span>
            <span className="text-2xl font-bold text-primary">{totalPrice.toFixed(2)}€</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredMenus.map((menu) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </div>
    </div>
  );
};

export default PrixTotal;
