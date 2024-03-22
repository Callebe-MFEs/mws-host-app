import { html } from "lit";
import {
  MWSNavbar,
  MWSNavbarHandlers,
  MWSNavbarInternal,
} from "./mws-navbar.types";

export const template = (
  data: MWSNavbar & MWSNavbarInternal & MWSNavbarHandlers
) => {
  return html`
    <nav class="mws-navbar">
      <!-- Left Section -->
      <div class="mws-navbar__items">
        <a class="mws-navbar__brand" @click=${data.brandClick}>${data.brand}</a>
        <slot name="mws-navbar-left"></slot>
      </div>

      <!-- Center Section -->
      <div
        class="mws-navbar__items mws-navbar__items--center"
        ?hidden=${!data.centerContentPresent}
      >
        <slot
          name="mws-navbar-center"
          @slotchange=${data.centerSlotChanged}
        ></slot>
      </div>

      <!-- Right Section -->
      <div class="mws-navbar__items mws-navbar__items--right">
        <slot name="mws-navbar-right"></slot>
        <a
          class="mws-navbar__item mws-navbar__user-info"
          @click=${data.userInfoClick}
        >
          <span>${data.username}</span>
          <img .src=${data.userAvatar} />
        </a>
      </div>
    </nav>
  `;
};

export default template;
