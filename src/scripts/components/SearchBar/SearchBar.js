import './search-bar.css';

class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="app-header">
        <h2 class="app-header-title">Catch Them! <span>ID or Name</span></h2>
        <form
            class="app-form"
        >
            <input
            type="search"
            id="searchPokemon"
            class="form-control"
            placeholder="Search your pokemon here ..."
            name="search"
            />
            <button type="submit" id="searchButtonPokemon" class="button-search">
                GO
            </button>
        </form>
    </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);