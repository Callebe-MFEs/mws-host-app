import "./index.scss";

export * from "./my-workspace";

const myWorkspace = document.createElement("my-workspace");
const text = document.createTextNode("Hello, World!");
myWorkspace.appendChild(text);
document.body.appendChild(myWorkspace);
