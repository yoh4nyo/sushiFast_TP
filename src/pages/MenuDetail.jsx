import { useParams, Link } from 'react-router-dom';
import boxesData from '../data/boxes.json';

// Page détail d'un menu
const MenuDetail = () => {
  const { id } = useParams();
  const menu = boxesData.find((m) => m.id === parseInt(id, 10));

  if (!menu) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-700">Menu introuvable.</p>
        <div className="text-center mt-4">
          <Link to="/menus" className="text-pink-600 hover:underline">Retour aux menus</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img src={import.meta.env.BASE_URL + menu.image.slice(1)} alt={menu.nom} className="w-full h-64 object-cover rounded-lg" />
          </div>
          <div className="md:w-1/2 space-y-2">
            <h1 className="text-3xl font-bold text-gray-800">{menu.nom}</h1>
            <p className="text-gray-700"><span className="font-semibold">Pièces:</span> {menu.pieces}</p>
            <p className="text-gray-700"><span className="font-semibold">Prix:</span> {menu.prix}€</p>
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Saveurs</h2>
              <div className="flex flex-wrap gap-2">
                {menu.saveurs.map((s, i) => (
                  <span key={i} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">{s}</span> // Badge pour chaque saveur
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Aliments</h2>
          <div className="space-y-2">
            {menu.aliments.map((a, i) => (
              <div key={i} className="flex justify-between items-center bg-pink-50 p-3 rounded-md">
                <span className="text-gray-800">{a.nom}</span>
                <span className="font-semibold text-pink-800">x{a.quantite}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-right">
          <Link to="/menus" className="inline-block bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">Retour</Link>
        </div>
      </div>
    </div>
  );
};

export default MenuDetail;
