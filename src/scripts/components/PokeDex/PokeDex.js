import pokeDexImg from '../../../resource/pokemon-go.png';
import './poke-dex.css';

class PokeDex extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container-pokedex">
        <div class="pokedex-image">
            <img src="${pokeDexImg}" alt="pokedex-image">
        </div>
        <div class="pokedex-content">
            <span class="pika-text">PIKA... PIKA... PIKACHU...!</span>
            <p class="quote-text">“You know, sometimes friends have to go, but some parts of them will stay with you.” 
            <br> - Ash</p>
        </div>
    </div>
    `;
  }
}

customElements.define('pokedex-bar', PokeDex);