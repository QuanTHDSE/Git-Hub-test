const domContainer = document.querySelector('#root');
console.log(domContainer)
const root = ReactDOM.createRoot(domContainer);
console.log(root)
//<h1> this is a title <h1>
//<ul>
//<li>
//</li>
//</ul>
const item = React.createElement('h1', {style: {color: 'red'}},"This is a title")
const listItem = React.createElement('ul', null,
    React.createElement('li', null, '1st row'),
    React.createElement('li', null, '2nd row')
);
const app = React.createElement('div', null, item, listItem);
root.render(app);