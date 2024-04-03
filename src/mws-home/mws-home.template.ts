import { html } from "lit-html";

export const template = () => {
  return html`
    <div class="mws-home">
      <h1>Welcome to My Workspace</h1>
      <p>
        This is a Prof of Concept application to demonstrate the Micro-Frontend
        architecture.
      </p>
      <p>
        The application is composed by four smaller applications that we call
        Micro-Frontends (MFE).
      </p>

      <h2>Host Application</h2>
      <p>
        Right now, you are seeing the Host Application. If this is your first
        access to the system in this session, then it is the only application
        loaded so far.
      </p>
      <p>
        The host application is the entry point, and it's responsible for
        providing the initial application layout. In our case, the host
        application provides the Header and the Footer of the page, that is
        shared with all the other MFEs.
      </p>
      <p>
        The section that contains this text is where the main content is
        rendered, and is where each MFE will render their content. You are
        seeing the Home Page, that is alse implemented by the Host Application
        in this case.
      </p>

      <h2>Micro-Frontends (MFEs)</h2>
      <p>
        There are other three MFEs in this application: Tasks and Messages MFEs,
        that can be accessed through the Header Menu; and the User Profile MFE
        that can be accessed through the user name and avatar.
      </p>

      <h3>Tasks MFE</h3>
      <p>
        The Tasks MFE implements a small task list where you can Read, Add, Edit
        and Delete tasks.
      </p>
      <p>
        It is implemented using
        <a href="https://lit.dev/" target="_blank">lit</a> library to create Web
        Components.
      </p>

      <h3>Messages</h3>
      <p>
        The Messages MFE simulates a chat application, where the user can see
        their contancts, select one and start chatting with them.
      </p>
      <p>
        It is implemented using
        <a href="https://react.dev/" target="_blank">React</a> library to create
        dinamic and reactive web elements.
      </p>

      <h3>User Profile</h3>
      <p>
        The User Profile MFE simulates the area where the user can update their
        information and set their preferences
      </p>
      <p>
        It is implemented using
        <a href="https://angular.dev/">Angular</a> framework to create powerfull
        and dinamic Single Page Applications
      </p>
    </div>
  `;
};
