import './title-bar.css';
import imgPokeball from '../../../public/pokeball.png';

class TitleBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="wrap-title">
      <span>POKE</span>
      <img src="${imgPokeball}" alt="pokeball-image">
      <span>MON</span>
    </div>
    `;
  }
}

customElements.define('title-bar', TitleBar);
