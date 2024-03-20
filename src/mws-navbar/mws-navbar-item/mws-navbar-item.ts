import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  MWSNavbarItem,
  MWSNavbarItemEvents,
  MWSNavbarItemHandlers,
} from "./mws-navbar-item.types";
import { template } from "./mws-navbar-item.template";
import style from "./mws-navbar-item.style.scss";

@customElement("mws-navbar-item")
export class MWSNavbarItemComponent
  extends LitElement
  implements MWSNavbarItem, MWSNavbarItemHandlers
{
  static styles = [style];

  @property()
  id: string;

  @property()
  url?: string;

  @property({ type: Boolean })
  active?: boolean;

  activate = () => {
    this.active = true;
    this.dispatchEvent(
      new CustomEvent(MWSNavbarItemEvents.MWS_NAVBAR_ITEM_ACTIVATED, {
        bubbles: true,
        composed: true,
      })
    );
  };

  protected render() {
    return html`${template(this)}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mws-navbar-item": MWSNavbarItemComponent;
  }
}
