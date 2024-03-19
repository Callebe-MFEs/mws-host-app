import { MWSNavbarComponent } from "./mws-navbar";
export { MWSNavbarComponent };

describe("MWSNavbarComponent", () => {
  let component: MWSNavbarComponent;

  beforeEach(async () => {
    component = window.document.createElement("mws-navbar");
    window.document.body.appendChild(component);
    await component.updateComplete;
  });

  it("should create component", () => {
    expect(component).toBeDefined();
  });
});
