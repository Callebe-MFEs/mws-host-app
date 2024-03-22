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
const user: User = {
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

export class UserService {
  protected static $instance: UserService;

  static get instance(): UserService {
    if (!UserService.$instance) {
      UserService.$instance = new UserService();
    }
    return UserService.$instance;
  }

  protected constructor() {
    // Do nothing
  }

  getUser(): User {
    return user;
  }
}
