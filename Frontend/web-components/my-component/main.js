const template = document.createElement('div');
template.innerHTML = `
    <style>
    .taxt {
        color: blue;
    }
    </style>
    <p class="taxt">My Web Component</p>
`;

class myElement extends HTMLElement {
    constructor() {
        super();
        this.p = document.createElement('p');
    }
    connectedCallback() {
        this.p.textContent = 'Hello World';
        this.appendChild(this.p);
        this.appendChild(template);
    }
}

customElements.define('my-element', myElement);