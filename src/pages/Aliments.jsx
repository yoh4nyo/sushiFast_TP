import { useState } from 'react';
import boxesData from '../data/boxes.json';

// Page pour voir les aliments d'un menu spécifique
const Aliments = () => {
  // Stock le menu sélectionné par l'utilisateur
  const [selectedMenu, setSelectedMenu] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Aliments par Menu
      </h1>
      
      <div className="max-w-2xl mx-auto mb-8">
        <label className="block text-lg font-semibold mb-3 text-gray-700">
          Sélectionnez un menu :
        </label>
        {/* Dropdown pour choisir un menu */}
        <select 
          onChange={(e) => setSelectedMenu(boxesData.find(m => m.id === parseInt(e.target.value)))}
          className="w-full p-3 border-2 border-pink-300 rounded-lg focus:border-pink-500 focus:outline-none"
        >
          <option value="">Choisir un menu</option>
          {boxesData.map((menu) => (
            <option key={menu.id} value={menu.id}>
              {menu.nom} ({menu.pieces} pièces - {menu.prix}€)
            </option>
          ))}
        </select>
      </div>

      {/* Affiche les détails seulement si un menu est sélectionné */}
      {selectedMenu && (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-pink-600">{selectedMenu.nom}</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-gray-600"><span className="font-semibold">Pièces :</span> {selectedMenu.pieces}</p>
              <p className="text-gray-600"><span className="font-semibold">Prix :</span> {selectedMenu.prix}€</p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Liste des aliments :</h3>
          <div className="space-y-3">
            {selectedMenu.aliments.map((aliment, index) => (
              <div key={index} className="flex justify-between items-center bg-pink-50 p-4 rounded-lg">
                <span className="font-medium text-gray-800">{aliment.nom}</span>
                <span className="bg-pink-200 text-pink-800 px-4 py-1 rounded-full font-semibold">
                  x{aliment.quantite}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Aliments;
