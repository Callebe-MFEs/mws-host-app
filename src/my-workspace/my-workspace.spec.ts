import { MyWorkspaceComponent } from "./my-workspace";
export { MyWorkspaceComponent as MyWorkspace };

describe("MyWorkspace", () => {
  let component: MyWorkspaceComponent;

  beforeEach(async () => {
    component = window.document.createElement("my-workspace");
    window.document.body.appendChild(component);
    await component.updateComplete;
  });

  it("should work", () => {
    expect(component).toBeDefined();
  });
});
