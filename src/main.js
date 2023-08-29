import 'regenerator-runtime';
import './css/global.css';
import './scripts/components/TitleBar/TitleBar';
import './scripts/components/ContentItem/ContentItem';
import './scripts/components/SearchBar/SearchBar';
import './scripts/components/PokeDex/PokeDex';
import swRegister from './utils/swRegister';

window.addEventListener('load', () => {
  swRegister();
});
