import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import style from "./my-workspace.style.scss";
import { template } from "./my-workspace.template";
import {
  MyWorkspace,
  MyWorkspaceHandlers,
  MyWorkspaceInternal,
} from "./my-workspace.types";

@customElement("my-workspace")
export class MyWorkspaceComponent
  extends LitElement
  implements MyWorkspace, MyWorkspaceInternal, MyWorkspaceHandlers
{
  static styles = [style];

  @property({ type: Array })
  items: MyWorkspace["items"] = [];

  navigateTo: (route: string) => void = (route: string) => {
    for (const item of this.items) {
      item.active = item.route === route;
    }

    this.items = [...this.items];

    window.history.pushState({}, "", route);
  };

  protected render() {
    return html`${template(this)}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-workspace": MyWorkspaceComponent;
  }
}
