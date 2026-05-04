function customRender(reactElement, container) {
  // const domElement = document.createElement(reactElement.type);
  // domElement.innerHTML = reactElement.children;
  // domElement.setAttribute("href", reactElement.props.href)
  // domElement.setAttribute("target", reactElement.props.target)
  // container.appendChild(domElement)
  // Problem in above code is that if there are more attribute then we have to set each one separately

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
