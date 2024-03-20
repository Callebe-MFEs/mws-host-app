export type Application = {
  name: string;
  app: () => Promise<any>;
  activeWhen: (location: Location) => boolean;
  customProps?: { [key: string]: any };
};
