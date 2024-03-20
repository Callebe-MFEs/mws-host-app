export interface MWSNavbarItem {
  id: string;
  url?: string;
  active?: boolean;
}

export interface MWSNavbarItemHandlers {
  activate: () => void;
}

export enum MWSNavbarItemEvents {
  MWS_NAVBAR_ITEM_ACTIVATED = "mws-navbar-item-activated",
}
