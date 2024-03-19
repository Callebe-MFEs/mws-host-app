import { MyWorkspace } from "./my-workspace";
export { MyWorkspace };

describe("MyWorkspace", () => {
  let component: MyWorkspace;

  beforeEach(async () => {
    component = window.document.createElement("my-workspace");
    window.document.body.appendChild(component);
    await component.updateComplete;
  });

  it("should work", () => {
    expect(component).toBeDefined();
  });
});
