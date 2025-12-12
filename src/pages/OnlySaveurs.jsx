import boxesData from '../data/boxes.json';

// Page pour seulement afficher les saveurs
const Saveurs = () => {
  const menus = boxesData;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 text-gray-800">
          Palette de saveurs
        </h1>
        <p className="text-gray-600 text-lg">
          Explorez les combinaisons de goûts de chaque menu
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {menus.map((menu) => (
          <div key={menu.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-3 text-pink-600">{menu.nom}</h2>
            <p className="text-gray-600 mb-2">{menu.pieces} pièces - {menu.prix}€</p>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800 mb-2">Saveurs :</h3>
              <div className="flex flex-wrap gap-2">
                {menu.saveurs.map((saveur, index) => (
                  <span 
                    key={index}
                    className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {saveur}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saveurs;
