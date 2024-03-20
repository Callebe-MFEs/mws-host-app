import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import style from "./mws-home.style.scss";
import { template } from "./mws-home.template";

@customElement("mws-home")
export class MWSHomeComponent extends LitElement {
  static styles = [style];

  protected render() {
    return html`${template()}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mws-home": MWSHomeComponent;
  }
}
