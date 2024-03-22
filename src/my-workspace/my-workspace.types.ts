import { User } from "../services/user.service";

export interface MyWorkspace {
  items: Array<{
    label: string;
    route: string;
    active: boolean;
  }>;
}

export interface MyWorkspaceInternal {
  user: User;
}

export interface MyWorkspaceHandlers {
  navigateTo: (route: string) => void;
}
