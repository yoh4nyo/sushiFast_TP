import { Link } from 'react-router-dom';

// Composant pour les cards des menus
const MenuCard = ({ menu }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 bg-gray-200">
        <img
          src={menu.image}
          alt={menu.nom}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full font-bold">
          {menu.prix.toFixed(2)}€
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{menu.nom}</h3>
        <p className="text-gray-600 mb-3">
          <span className="font-semibold">{menu.pieces}</span> pièces
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {menu.saveurs.slice(0, 3).map((saveur, index) => (
            <span
              key={index}
              className="bg-accent text-gray-800 text-xs px-2 py-1 rounded-full"
            >
              {saveur}
            </span>
          ))}
          {menu.saveurs.length > 3 && (
            <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
              +{menu.saveurs.length - 3}
            </span>
          )}
        </div>
        <Link
          to={`/menu/${menu.id}`}
          className="block w-full text-center bg-primary text-white py-2 rounded-lg hover:bg-pink-600 transition-colors"
        >
          Voir détails
        </Link>
      </div>
    </div>
  );
};

export default MenuCard;
