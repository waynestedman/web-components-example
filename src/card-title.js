import { html, css, LitElement } from 'lit'

export class CardTitle extends LitElement {
  static styles = css`
      h2 {
        display: inline-block;
        margin: 0 -1rem;
        padding: 1rem 1.063rem;
        width: 100%;
        border-radius: 10px 10px 0 0;
        background-color: teal;
        color: #333;
      }
    `;

  render() {
    return html`
      <h2>Card Title</h2>
    `;
  }
}

customElements.define('card-title', CardTitle)
