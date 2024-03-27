import "./index.scss";
import { bootstrap, getRemote } from "./mfe";
import { UserService } from "./services/user.service";

export * from "./my-workspace";

(async () => {
  // 1. Discover the MFEs.
  // loading mfes configuration from config.json file.
  // it could come from an API call as well.
  // the config.json file can be build in the server side reading from env variables.
  const applications = await loadApplications();

  // 2. prepare template
  const template = prepareTemplate(applications);
  document.body.appendChild(template);

  // 3. prepare Single SPA configuration
  const config = mfeConfigurations(applications);

  // 4. bootstrap Single SPA
  bootstrap(config);

  goToNext();
})();

const remote = getRemote(window);

async function loadApplications() {
  const response = await fetch("/applications");
  const applications = await response.json();
  return applications;
}

function mfeConfigurations(applications: Array<any>) {
  return applications.map((app) => ({
    name: app.name,

    // load the MFE application. It returns a promise, and is only called the first time the MFE is activated.
    app: () =>
      // importRemote is a helper function to load the remoteEntry.js file
      // it dinamyically discover the MFE remoteEntry.js file and load it.
      remote.import(
        app.remoteEntry.url,
        app.remoteEntry.scope,
        app.remoteEntry.module,
        app.remoteEntry.type
      ),

    // method that returns true when the MFE should be activated.
    // it is called every time the location changes.
    // it maches the location.pathname with the app.activeWhen regex.
    activeWhen: (location) =>
      new RegExp(app.activeWhen).test(location.pathname),

    // customProps is an object that is passed to the MFE application, along with the lifecycle methods.
    // for this example, we are passing the applications array and the basepath of the MFE.
    customProps: {
      basepath: app.route,
      userService: UserService.instance,
    },
  }));
}

function prepareTemplate(applications: Array<any>) {
  const myWorkspace = document.createElement("my-workspace");

  const items = [];

  for (let app of applications) {
    const div = document.createElement("div");
    div.id = `single-spa-application:${app.name}`;
    div.classList.add("mfe");
    myWorkspace.appendChild(div);
    if (app.type === "app")
      items.push({ label: app.label, route: app.route, active: false });
  }

  myWorkspace.items = items;

  UserService.instance.getUser().subscribe((user) => {
    myWorkspace.user = user;
  });

  return myWorkspace;
}

function goToNext() {
  let query: URLSearchParams = new URLSearchParams(window.location.search);

  if (query.has("next")) {
    const next = query.get("next");
    query.delete("next");
    let params = query.size ? `?${query.toString()}` : "";
    window.history.pushState({}, "", `${next}${params}`);
  }
}
