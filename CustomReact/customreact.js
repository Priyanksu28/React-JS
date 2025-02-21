function customRender(element, container) {
    const domElement = document.createElement(element.type); // Creates an <a> tag

    // Set attributes from props
    for (let prop in element.props) {
        domElement.setAttribute(prop, element.props[prop]);
    }

    // Set text content
    domElement.textContent = element.children;

    // Append to container
    maincontainer.appendChild(domElement);
}


const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click here'
}

const maincontainer = document.querySelector('#root')

customRender(ReactElement, maincontainer)