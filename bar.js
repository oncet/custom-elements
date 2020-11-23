class FooBar extends HTMLElement {
  constructor () {
    super();
    
    this.template = document.createElement('template')
    this.template.innerHTML = `<style>div { border: 1px solid green; }</style><div>Hola, soy Foo <foo-baz foo='bar' /></div>`;
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(this.template.content.cloneNode(true));
    const fooBaz = shadow.querySelector('foo-baz');
    setTimeout(() => {
      console.log('foo-baz', fooBaz);
      fooBaz.setAttribute('foo', 'fooooooooooooooooo');
    }, 2000);
  }
}

customElements.define('foo-bar', FooBar);
