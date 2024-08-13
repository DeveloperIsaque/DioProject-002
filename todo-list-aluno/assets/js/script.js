const form = document.getElementById('form');
const list = document.getElementById('list-task');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(description) {
    const item = document.createElement('div');
    const check = document.createElement('input');
    const text = document.createElement('label');
    const icon = document.createElement('div');
    const node = document.createTextNode(description);

    check.setAttribute('id', description);
    check.setAttribute('type', 'checkbox');
    check.setAttribute('name', description);

    text.setAttribute('for', description);
    text.appendChild(icon);
    text.appendChild(node);

    item.appendChild(check);
    item.appendChild(text);
    item.classList.add('itens');

    list.appendChild(item);
};