class FooterElem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="flex wrap-foot">
        <div class="foot-item">All this data obtained from : <a class="foot-link" href="https://pokeapi.co/api/v2/pokemon/">Poke API</a></div>
        <div class="foot-item">
          <p>Copyright &copy; 2023 Miftachul Huda</p>
        </div>
        <div class="foot-item">
          Wanna say Hi? <a class="foot-link" href="https://www.instagram.com/miftachulhd/">Click here</a> 
        </div>
      </div>
    `;
  }
}

customElements.define('footer-elem', FooterElem);
