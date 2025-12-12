// Import de toutes les images depuis assets
import tastyBlend from '../assets/tasty-blend.jpg';
import amateurMix from '../assets/amateur-mix.jpg';
import salmonOriginal from '../assets/salmon-original.jpg';
import salmonLovers from '../assets/salmon-lovers.jpg';
import salmonClassic from '../assets/salmon-classic.jpg';
import masterMix from '../assets/master-mix.jpg';
import sunrise from '../assets/sunrise.jpg';
import sandoBoxChickenKatsu from '../assets/sando-box-chicken-katsu.jpg';
import sandoBoxSalmonAburi from '../assets/sando-box-salmon-aburi.jpg';
import superSalmon from '../assets/super-salmon.jpg';
import californiaDream from '../assets/california-dream.jpg';
import gourmetMix from '../assets/gourmet-mix.jpg';
import freshMix from '../assets/fresh-mix.jpg';

//Mapping des images par nom de fichier
export const images = {
  'tasty-blend.jpg': tastyBlend,
  'amateur-mix.jpg': amateurMix,
  'salmon-original.jpg': salmonOriginal,
  'salmon-lovers.jpg': salmonLovers,
  'salmon-classic.jpg': salmonClassic,
  'master-mix.jpg': masterMix,
  'sunrise.jpg': sunrise,
  'sando-box-chicken-katsu.jpg': sandoBoxChickenKatsu,
  'sando-box-salmon-aburi.jpg': sandoBoxSalmonAburi,
  'super-salmon.jpg': superSalmon,
  'california-dream.jpg': californiaDream,
  'gourmet-mix.jpg': gourmetMix,
  'fresh-mix.jpg': freshMix,
};

/**
 * Récupère l'image à partir du chemin JSON
 * @param {string} imagePath - Chemin de l'image depuis le JSON (ex: "/images/tasty-blend.jpg")
 * @returns {string} URL de l'image importée
 */
export const getImage = (imagePath) => {
  const filename = imagePath.split('/').pop();
  return images[filename] || 'https://via.placeholder.com/400x300?text=Sushi';
};
