class WebComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }
  
  render(template) {
    this.shadow.innerHTML = template;
  }
}

class FooBaz extends WebComponent {
  constructor (){
    super()
    this.render(`<div>Hola, soy Baz (${this.getAttribute('foo')})</div>`);
  }
  connectedCallback() {

  }
  
  static get observedAttributes() {
    return [
      'foo'
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.shadow.querySelector('div').innerText = this.shadow.querySelector('div').innerText.replace(oldValue, newValue)
  }
}

customElements.define('foo-baz', FooBaz);
