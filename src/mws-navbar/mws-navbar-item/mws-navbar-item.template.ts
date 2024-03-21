import { html } from "lit";
import { MWSNavbarItem, MWSNavbarItemHandlers } from "./mws-navbar-item.types";

export const template = (data: MWSNavbarItem & MWSNavbarItemHandlers) => {
  return html`
    <a class="mws-navbar__item mws-navbar__link" @click=${data.activate}>
      <slot></slot>
    </a>
  `;
};

export default template;
