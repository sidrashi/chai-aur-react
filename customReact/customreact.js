function customRender(reactElement, container) {
  // const domElement = document.createElement(reactElement.type);
  // domElement.innerHTML = reactElement.children;
  // domElement.setAttribute("href", reactElement.props.href)
  // container.appendChild(domElement)

  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop])
    
  }
  container.appendChild(domElement)
}

const reactElement = {
  type: "a",
  props: {
    href: "http://www.google.com",
    target: "_blank",
  },
  children: "Click me",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
