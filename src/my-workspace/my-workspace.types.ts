export interface MyWorkspace {
  items: Array<{
    label: string;
    route: string;
    active: boolean;
  }>;
}

export interface MyWorkspaceInternal {}

export interface MyWorkspaceHandlers {
  navigateTo: (route: string) => void;
}
