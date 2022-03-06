import { html, css, LitElement } from 'lit'

export class CardTitle extends LitElement {
  static styles = css`
      h4 {
        display: block;
        margin: 0 -1rem;
        padding: 1rem;
        width: 100%;
        border-radius: 10px 10px 0 0;
        font-family: var(--raleway);
        font-size: var(--h4);
        background-color: var(--teal-01);
        color: var(--gray-03);
      }
    `;

  render() {
    return html`
      <h4>Card Title</h4>
    `;
  }
}

customElements.define('card-title', CardTitle)
