import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import style from "./my-workspace.style.scss";
import { template } from "./my-workspace.template";

@customElement("my-workspace")
export class MyWorkspace extends LitElement {
  static styles = [style];

  protected render() {
    return html`${template()}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-workspace": MyWorkspace;
  }
}
