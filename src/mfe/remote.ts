interface ModuleFederationContainer {
  init: (args: any) => void;
  get: (module: string) => any;
}

export interface Remote {
  import: (url, scope, module, type) => Promise<any>;
}

let defaultScopePromise = undefined;

class RemoteImp implements Remote {
  private window: Window;

  constructor(window: Window) {
    this.window = window;
  }

  async import(url, scope, module, type) {
    let container = this.getContainer(scope);
    if (!container) {
      container = await this.fetchRemoteEntry(url, scope, type);
      await this.initSharingScope();
      await container.init(
        (this.window as any).__webpack_share_scopes__.default
      );
    }
    let factory = await container.get(module);
    return factory();
  }

  private getContainer(scope: string): ModuleFederationContainer {
    return this.window[scope] as ModuleFederationContainer;
  }

  private initSharingScope() {
    if (!defaultScopePromise) {
      defaultScopePromise = (this.window as any).__webpack_init_sharing__(
        "default"
      );
    }

    return defaultScopePromise;
  }

  private fetchRemoteEntry(
    url,
    scope,
    type
  ): Promise<ModuleFederationContainer> {
    if (type === "module") {
      return this.fetchModuleRemoteEntry(url, scope);
    }
    return this.fetchWebPackRemoteEntry(url, scope);
  }

  private fetchWebPackRemoteEntry(
    url,
    scope
  ): Promise<ModuleFederationContainer> {
    const script = this.window.document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.async = true;

    const promise = new Promise<ModuleFederationContainer>((resolve) => {
      script.onload = () => {
        resolve(this.getContainer(scope));
      };
    });

    this.window.document.head.appendChild(script);

    return promise;
  }

  private fetchModuleRemoteEntry(
    url,
    scope
  ): Promise<ModuleFederationContainer> {
    const script = this.window.document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      (async () => {
        const module = await import("${url}");
        window['${scope}'] = module;
        if (window['scopeLoading']['${scope}']) {
          window['scopeLoading']['${scope}'](module);
          delete window['scopeLoading']['${scope}'];
        }
      })();
    `;
    const promise = new Promise<ModuleFederationContainer>((resolve) => {
      this.window["scopeLoading"] = this.window["scopeLoading"] || {};
      this.window["scopeLoading"][scope] = resolve;
    });

    this.window.document.head.appendChild(script);

    return promise;
  }
}

let remote: Remote | undefined = undefined;

export const getRemote = (global?: Window): Remote => {
  if (!remote) {
    remote = new RemoteImp(global || window);
  }
  return remote;
};

export const destroyRemote = (): void => {
  remote = undefined;
};
