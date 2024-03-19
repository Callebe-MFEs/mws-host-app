import { html } from "lit-html";

export const template = () => {
  return html`
    <div class="container">
      <header>
        <mws-navbar
          brand="My Workspace"
          username="Callebe Gomes"
          userAvatar="/public/img/avatar.svg"
        ></mws-navbar>
      </header>
      <main><slot></slot></main>
      <footer>Footer</footer>
    </div>
  `;
};
