import { MWSHomeComponent } from "./mws-home";
export { MWSHomeComponent };

describe("MWSHomeComponent", () => {
  let component: MWSHomeComponent;

  beforeEach(async () => {
    component = window.document.createElement("mws-home");
    window.document.body.appendChild(component);
    await component.updateComplete;
  });

  it("should work", () => {
    expect(component).toBeDefined();
  });
});
