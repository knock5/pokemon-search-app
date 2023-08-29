import './error-view.css';

class ErrorView extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const getErrorInput = document.querySelector('#searchPokemon').value;
    this.innerHTML = `
    <div class="search-result">
        "${getErrorInput}" is not a pokemon, continue your adventure!
    </div>
    `;
  }
}

customElements.define('error-view', ErrorView);
