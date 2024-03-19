import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import style from "./mws-navbar.style.scss";
import { template } from "./mws-navbar.template";
import {
  MWSNavbar,
  MWSNavbarEvents,
  MWSNavbarHandlers,
  MWSNavbarInternal,
} from "./mws-navbar.types";

@customElement("mws-navbar")
export class MWSNavbarComponent
  extends LitElement
  implements MWSNavbar, MWSNavbarInternal, MWSNavbarHandlers
{
  static styles = [style];

  @property()
  brand: string;

  @property()
  username: string;

  @property()
  userAvatar: string;

  @property()
  showSignInButton: boolean;

  @state()
  centerContentPresent: boolean = false;

  brandClick = () =>
    this.dispatchEventType(MWSNavbarEvents.MWS_NAVBAR_BRAND_CLICK);

  userInfoClick = () =>
    this.dispatchEventType(MWSNavbarEvents.MWS_NAVBAR_USER_INFO_CLICK);

  centerSlotChanged: () => void = () => {
    const slot = this.shadowRoot.querySelector(
      "slot[name=mws-navbar-center]"
    ) as HTMLSlotElement;
    this.centerContentPresent = slot.assignedNodes().length > 0;
  };

  private dispatchEventType(eventType: string) {
    this.dispatchEvent(
      new CustomEvent(eventType, {
        bubbles: true,
        composed: true,
      })
    );
  }

  protected render() {
    return html`${template(this)}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mws-navbar": MWSNavbarComponent;
  }
}
