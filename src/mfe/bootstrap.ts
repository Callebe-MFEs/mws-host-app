import { registerApplication, start } from "single-spa";
import { Application } from "./application";

const bootstrap = (applications: Array<Application>): void => {
  applications.forEach((app) => {
    registerApplication(app);
  });
  start();
};

export { bootstrap };
export default bootstrap;
