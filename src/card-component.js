import { html, css, LitElement } from 'lit'

import './card-title';
import './card-content';
import './card-button';

export class CardComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        position: relative;
        display: inline-block;
        /* border: solid 1px var(--color-base-gray-dark); */
        border-radius: 10px;
        text-align: left;
        padding: 0 1rem 2rem 1rem;
        margin: 1rem 2rem;
        box-shadow: 5px 7px 10px 0px rgba(0,0,0,0.3);
        max-width: 424px;
      }
    `
  }

  render() {
    return html`
      <card-title></card-title>
      <card-content></card-content>
      <card-button></card-button>
    `
  }
}

window.customElements.define('card-component', CardComponent)
