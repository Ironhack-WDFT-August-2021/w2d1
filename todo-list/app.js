// document.querySelector('#my-button').onclick = function () {
// 	console.log('click')
// }

// addEventListener(<nameOfTheEvent>, <function>)
document.querySelector('#my-button').addEventListener('click', addTodo);

document.querySelectorAll('ul > li').forEach(function (todo) {
	todo.addEventListener('click', doubleClick);
})

// when we press a key in the input field: 
// document.querySelector('input').addEventListener('keyup', click);

function click() {
	console.log('click')
}

function toggleTodo(event) {
	console.log('toggle todo');
	// toggle the class checked for the clicked element
	// .classList.toggle('checked')
	// this is the clicked element
	// console.log(event.target);

	// event.target.classList.toggle('checked');

	// delete the todo:
	const ul = document.querySelector('ul');
	const todo = event.target;
	ul.removeChild(todo);
}

function doubleClick(e) {
	const target = e.target;
	if (!target.classList.contains('checked')) {
		target.classList.add('checked');
	} else {
		const ul = document.querySelector('ul');
		ul.removeChild(target);
	}
}

function addTodo() {
	// we need to get the value of the input field
	const input = document.querySelector('input').value;
	console.log(input);
	// we create an li tag
	const todo = document.createElement('li');
	todo.innerHTML = input;
	console.log(todo);
	// we add this to the list of todos
	// access the list
	const list = document.querySelector('ul');
	console.log(list);
	// append the todo to the list
	// <elementThatContainsTheList>.appendChild(<elementToAppend>)
	list.appendChild(todo);
	// reset the input field
	document.querySelector('input').value = ''
}
