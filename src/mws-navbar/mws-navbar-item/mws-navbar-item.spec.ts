import { MWSNavbarItemComponent } from "./mws-navbar-item";
import { MWSNavbarItemEvents } from "./mws-navbar-item.types";
export { MWSNavbarItemComponent };

describe("MWSNavbarItemComponent", () => {
  let component: MWSNavbarItemComponent;

  beforeEach(async () => {
    component = document.createElement("mws-navbar-item");
    document.body.appendChild(component);
    await component.updateComplete;
  });

  it("should create component", () => {
    expect(component).toBeDefined();
  });

  it("should emit event when item is activated", async () => {
    const spy = jasmine.createSpy("activatedListener");
    component.addEventListener(
      MWSNavbarItemEvents.MWS_NAVBAR_ITEM_ACTIVATED,
      spy
    );
    component.activate();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(component.active).toBeTrue();
  });

  it("should activate component on click", async () => {
    const spy = jasmine.createSpy("activatedListener");
    component.addEventListener(
      MWSNavbarItemEvents.MWS_NAVBAR_ITEM_ACTIVATED,
      spy
    );

    component.shadowRoot.querySelector("a").click();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
