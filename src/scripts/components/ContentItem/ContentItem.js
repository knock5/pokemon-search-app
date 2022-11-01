import axios from 'axios';
import './content-item.css';
import BASE_API_ENDPOINT from '../../data/api-endpoint';
import '../../view/loadingView/loading-view';
import '../../view/errorView/error-view';

class ContentItem extends HTMLElement {
  async connectedCallback() {
    this.loading();
    this.contentHide();
    await this.getPokemonData();
  }

  async getPokemonData(pokeName = '') {
    try {
      this.loading();
      this.pokeData = await axios.get(`${BASE_API_ENDPOINT}${pokeName}`);
      if (Array.isArray(this.pokeData.data.results)) {
        this.pokeDataResults = this.pokeData.data.results;
      } else {
        this.pokeDataResults = [this.pokeData.data];
      }
      this.render();
    } catch (error) {
      this.renderError();
    }
  }

  contentHide() {
    this.contentElement = document.querySelector('content-item');
    this.contentElement.classList.add('hide');
  }

  submitData(event) {
    event.preventDefault();
    const getInput = document.querySelector('#searchPokemon').value.toLowerCase();
    this.contentElement = document.querySelector('content-item');
    this.pokedexElement = document.querySelector('pokedex-bar');
    this.getPokemonData(getInput);
    if (getInput === '') {
      this.contentElement.classList.add('hide');
      this.pokedexElement.classList.remove('hide');
    } else {
      this.contentElement.classList.remove('hide');
      this.pokedexElement.classList.add('hide');
    }
    console.log(getInput);
  }

  renderError() {
    this.innerHTML = '';
    this.errorViewElement = document.createElement('error-view');
    this.appendChild(this.errorViewElement);
  }

  loading() {
    this.innerHTML = '';
    this.loadingViewElement = document.createElement('loading-view');
    this.appendChild(this.loadingViewElement);
  }

  render() {
    this.innerHTML = '';

    document.querySelector('form').addEventListener('submit', this.submitData.bind(this));

    this.pokeDataResults.forEach(async (pokemon) => {
      let getPokemonDetail;
      if (pokemon.url) {
        getPokemonDetail = await axios.get(pokemon.url);
      } else {
        getPokemonDetail = {
          data: pokemon,
        };
      }

      this.innerHTML += `
      <div class="wrap-data-pokemon">
        <div class="pokemon-image">
          <img src="${getPokemonDetail.data.sprites.other.dream_world.front_default}" alt="pokemon-image">
        </div>
        <div class="pokemon-details">
          <div class="pokemon-name">
            <h3>${getPokemonDetail.data.name.toUpperCase()}</h3>
          </div>
          <span class="pokemon-id"> <abbr title="ID Pokemon">#${getPokemonDetail.data.id}</abbr></span>
        </div>
      </div>
      `;
    });
  }
}

customElements.define('content-item', ContentItem);