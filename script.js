const input = document.querySelector('#input');
const addButton = document.querySelector('#add-button');
const taskList = document.querySelector('#task-list');
addButton.addEventListener('click', function () {
  console.log(input.value);


  const li = document.createElement('li');
  li.innerText = input.value;
  taskList.appendChild(li);
});
