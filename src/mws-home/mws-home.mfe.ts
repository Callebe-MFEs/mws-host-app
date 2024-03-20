export * from "./mws-home";

const template = (props) => {
  const myComponent = document.createElement("mws-home");
  return myComponent;
};

const containerGetter = (props) => {
  const htmlId = `single-spa-application:${props.name}`;
  return document.getElementById(htmlId);
};

export const mount = async (props) => {
  const container = containerGetter(props);
  container.appendChild(template(props));
};

export const unmount = async (props) => {
  const container = containerGetter(props);
  container.innerHTML = "";
};

export const bootstrap = async (props) => {};
