 function customRender(reactElement,container){
 
 // This code is not needed anymore since we are using a loop to set the attributes dynamically

 
 /*   const domElement = document.createElement(reactElement.type) // element created in dom
    domElement.innerHTML = reactElement.children //  added innerHtml to the created element

    domElement.setAttribute('href',reactElement.props.href) // added href attribute to the created element
    domElement.setAttribute('target',reactElement.props.target) // added target attribute to the created element

    container.appendChild(domElement) // the domElement is appended to the continer we passed on making mainContainer as the parent of the created element   */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

 } 
 const reactElement = {
    type : 'a',
    props: {
        href : 'https://www.amazon.com',
        target:'_blank',
    },
    children :'Click me to visit amazon'
}
const mainContainer = document.getElementById('root')
// we need to render an <a> tag  
customRender(reactElement, mainContainer)

// This is a custom implementation of React's render method. It creates a DOM element based on the provided reactElement object, sets its innerHTML and attributes, and appends it to the specified container in the DOM. In this case, it renders an anchor tag that links to Amazon.