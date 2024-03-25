import { ReplaySubject } from "rxjs";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  preferences: {
    comunication: {
      receiveEmails: boolean;
      receiveTextMessages: boolean;
      receiveMails: boolean;
    };
    site: {
      theme: "light" | "dark";
      language: "en" | "es" | "fr" | "de" | "it" | "pt";
    };
  };
};

// Memory User.
// It simulates the user data that would come from an authenticated session.
let user: User = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@cnh.com",
  avatar: "/public/img/avatar.svg",
  address: {
    street: "711 Jorie Blvd",
    city: "Oak Brook",
    state: "IL",
    zipCode: "60523",
  },
  preferences: {
    comunication: {
      receiveEmails: true,
      receiveTextMessages: true,
      receiveMails: false,
    },
    site: {
      theme: "light",
      language: "pt",
    },
  },
};

export const userSubject = new ReplaySubject<User>(1);

export class UserService {
  protected static $instance: UserService;

  static get instance(): UserService {
    if (!UserService.$instance) {
      UserService.$instance = new UserService();
    }
    return UserService.$instance;
  }

  protected constructor() {
    userSubject.next(user);
  }

  getUser(): ReplaySubject<User> {
    return userSubject;
  }

  setUser(value: User): void {
    user = { ...user, ...value };
    userSubject.next(user);
  }
}
