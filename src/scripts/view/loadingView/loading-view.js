import './loading-view.css';

class LoadingView extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="loader">
        <span class="ball"></span>
        <span class="ball2"></span>
        <ul>
            <li></li><li></li><li></li><li></li><li></li>
        </ul>
    </div>
    `;
  }
}

customElements.define('loading-view', LoadingView);