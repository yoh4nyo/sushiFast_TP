import { Link } from 'react-router-dom';

// Page d'accueil
const Home = () => {
  return (
    <div className="relative w-full h-[calc(100vh-5rem)] overflow-hidden">
      <video
        src="/246385_small.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-6xl font-bold mb-6 text-center">
          Bienvenue chez SushiFast
        </h1>
        <p className="text-2xl mb-8 text-center">
          Découvrez nos menus de sushis frais et délicieux
        </p>
        <Link
          to="/menus"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-lg text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Voir tous nos menus
        </Link>
      </div>
    </div>
  );
};

export default Home;
