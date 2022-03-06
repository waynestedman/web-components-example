import { html, css, LitElement } from 'lit'

export class CardButton extends LitElement {
  static styles = css`
    button {
      display: inline-block;
      margin: 1rem 0;
      padding: 0.5rem;
      /* width: 100%; */
      background-color: blue;
      color: #333;
    }
  `;

  static get properties() {
    return {
      buttonText: { type: String },
    }
  }

  constructor() {
    super();
    this.buttonText = 'Click me';

  }

  render() {
    return html`
      <button @click=${this._onClick} part="button">
        ${this.buttonText}
      </button>
    `;
  }

  _onClick() {
    alert("Well done!");
  }
}

customElements.define('card-button', CardButton)
