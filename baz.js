class WebComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }
  
  template(template) {
    this.shadow.innerHTML = template;
  }
}

class FooBaz extends WebComponent {
  constructor (){
    super()
    this.template(`
      <div>
        Hola, soy Baz (<span>${this.getAttribute('foo')}</span>)
      </div>`);
  }
  connectedCallback() {

  }
  
  static get observedAttributes() {
    return [
      'foo'
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.shadow.querySelector('span').innerText = newValue;
  }
}

customElements.define('foo-baz', FooBaz);
