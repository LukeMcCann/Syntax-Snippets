const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

// Returns all children nodes
// this includes the text nodes
// text nodes are counted in the line breaks
// where </li> tag goes onto a new line
// returns a node list
let childNodes = list.childNodes;
// console.log(childNodes);
// console.log(childNodes[1].nodeName);
console.log(childNodes[1].nodeType);

// Node Types:
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
// similar to childNodes
// but ignores the linebreak text nodes
// returns a HTMLCollection
let children = list.children;
// console.log(children);

