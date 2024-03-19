/**
 * MWSNavbar interface contains the
 * component's exposed properties.
 * All attributes of this interfaces are mapped
 * to a `@property()` attribute in the component class
 */
export interface MWSNavbar {
  brand?: string;
  username?: string;
  userAvatar?: string;
  showSignInButton?: boolean;
}

/**
 * MWSNavbarInternal interface contains the
 * component's internal properties or state.
 * All attributes of this interface are mapped
 * to a `@state()` attribute in component class
 */
export interface MWSNavbarInternal {
  centerContentPresent: boolean;
}

/**
 * MWSNavbarHandlers interface contains the
 * component's internal method used to handle events from the demplate
 */
export interface MWSNavbarHandlers {
  brandClick: () => void;
  userInfoClick: () => void;
  centerSlotChanged: () => void;
}

export enum MWSNavbarEvents {
  MWS_NAVBAR_BRAND_CLICK = "mws-navbar-brand-click",
  MWS_NAVBAR_USER_INFO_CLICK = "mws-navbar-user-info-click",
}
