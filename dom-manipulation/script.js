// dom - manipulation

console.log(document.body);

// document.querySelector()
// document.getElementBy...

const myHeading = document.getElementById('my-heading');
// console.log(myHeading);

const todoList = document.getElementById('todo-list');
// console.log(todoList)

// get all the li tags 
// returns an html collection
const allListItems = document.getElementsByTagName('li');
// this works:
console.log(allListItems[3])
// you cannot use forEach and other array methods
// allListItems.forEach(function (item) {
// 	console.log(item)
// })
// you could turn it into an array
// Array.from(allListItems).forEach(function (item) {
// 	console.log(item)
// })



// const allListItems = document.getElementsByTagName('li');
const res = document.getElementsByClassName('a');
const todoContainer = document.getElementsByClassName('todo-container');
console.log(todoContainer)


const tagsInContainer = todoContainer[0].getElementsByTagName('li')
console.log(tagsInContainer)

// querySelector()
// const h1 = document.querySelector('#my-heading')
// const item = document.querySelector('#todo-list > li:nth-child(4)')
// console.log(item)
// console.log(h1)

console.clear()

// querySelectorAll() - returns a 'node list'
const allItems = document.querySelectorAll('#todo-list li');
console.log(allItems)

allItems.forEach(function (item) {
	console.log(item)
})
console.clear()

const h1 = document.querySelector('#my-heading')
const val = h1.innerText;
// here i cannot use html
h1.innerText = 'Hello World'

// to add html we use innerHTML
// document.body.innerHTML = '<h1>🙃</h1>'

// const allItems = document.querySelectorAll('#todo-list li');
// change all the list items to uppercase
console.log(allItems)
for (item of allItems) {
	item.innerText = item.innerText.toUpperCase()
}

const firstItem = document.querySelector('#todo-list li');
console.log(firstItem)
// change css / styling
// const prop = 'backgroundColor';
// firstItem.style.backgroundColor = 'red';
// firstItem.style[prop] = 'green';

// add class checked to the list item
// firstItem.classList.add('checked');
// firstItem.classList.remove('checked');
// toggle the class
firstItem.classList.toggle('checked');
firstItem.classList.toggle('checked');
firstItem.classList.toggle('checked');

document.querySelector('img').setAttribute(
	'src',
	'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
)

console.clear();

// we wanna add a heading to the dom
// first we create it
const heading = document.createElement('h1');
// console.log(heading);
heading.innerText = 'My Todo List';
console.log(heading);
// we wanna call 'insertBefore' on the parent element
const list = document.querySelector('#todo-list');
const parentElement = document.querySelector('.todo-container');
console.log(parentElement);
// thing to insert, before which
parentElement.insertBefore(heading, list)

// remove the p tag from the dom
// <parentElement>.removeChild(<elementToRemove>)
const paragraph = document.querySelector('p');
console.log(paragraph)
// const paragraph = document.getElementsByTagName('p')
// console.log(paragraph[0])
parentElement.removeChild(paragraph);

parentElement.innerHTML = "<h2 class='a'>This is my heading</h2>" + parentElement.innerHTML