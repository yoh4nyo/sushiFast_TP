import { useMemo } from 'react';
import boxesData from '../data/boxes.json';
import { getImage } from '../utils/images';

// Card pour afficher un menu avec son image et ses infos
const MenuDisplay = ({ menu, title }) => {
  if (!menu) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">{title}</h2>
      
      <div className="flex items-center gap-6">
        <img 
          src={getImage(menu.image)} 
          alt={menu.nom} 
          className="w-24 h-24 object-cover rounded-lg"
        />
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{menu.nom}</h3>
          <div className="flex items-center gap-6">
            <div>
              <p className="text-sm text-gray-600">Prix</p>
              <p className="text-xl font-bold text-primary">{menu.prix}€</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Pièces</p>
              <p className="text-xl font-bold text-gray-800">{menu.pieces}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Page qui compare le menu le moins cher et le plus cher
const MoinsCherePlusCher = () => {
  // On trie les menus par prix pour récupérer le premier et le dernier
  const { cheapest, expensive } = useMemo(() => {
    if (boxesData.length === 0) return { cheapest: null, expensive: null };
    const sorted = [...boxesData].sort((a, b) => a.prix - b.prix);
    return {
      cheapest: sorted[0],
      expensive: sorted[sorted.length - 1]
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          Notre menu le moins cher et le plus cher
        </h1>
        <p className="text-gray-600">
          Comparaison des menus les moins chers et les plus chers
        </p>
      </div>
      
      <div className="space-y-6 max-w-3xl mx-auto">
        <MenuDisplay 
          menu={cheapest} 
          title="Menu le moins cher"
        />
        <MenuDisplay 
          menu={expensive} 
          title="Menu le plus cher"
        />
      </div>
    </div>
  );
};

export default MoinsCherePlusCher;
