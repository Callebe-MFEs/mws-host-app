import { html } from "lit-html";
import { MyWorkspace } from "./my-workspace.spec";
import { MyWorkspaceHandlers, MyWorkspaceInternal } from "./my-workspace.types";

export const template = (
  data: MyWorkspace & MyWorkspaceInternal & MyWorkspaceHandlers
) => {
  return html`
    <div class="container">
      <header>
        <mws-navbar
          brand="My Workspace"
          username=${`${data.user?.firstName} ${data.user?.lastName}`}
          userAvatar=${data.user?.avatar}
          @mws-navbar-brand-click=${() => data.navigateTo("/")}
          @mws-navbar-user-info-click=${() => data.navigateTo("/user-profile")}
        >
          ${data.items.map(
            (item) => html`
              <mws-navbar-item
                slot="mws-navbar-center"
                .url="${item.route}"
                .id="${item.label}"
                ?active="${item.active}"
                @mws-navbar-item-activated="${() =>
                  data.navigateTo(item.route)}"
                >${item.label}</mws-navbar-item
              >
            `
          )}
        </mws-navbar>
      </header>
      <main><slot></slot></main>
      <footer>Footer</footer>
    </div>
  `;
};
