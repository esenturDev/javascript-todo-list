const textInput = document.getElementById('text');
const passwordInput = document.getElementById('password');
const addButton = document.getElementById('add');
const deleteButton = document.getElementById('delete');

const renderTodo = () => {
  const todoList = document.getElementById('todoList');
  const data = {
    text: textInput.value,
    password: passwordInput.value,
  };
  const list = document.createElement('li');
  const textValue = document.createElement('p');
  const passwordValue = document.createElement('p');
  const deleteBut = document.createElement('button');
  deleteBut.textContent = 'Delete';
  deleteBut.addEventListener('click', () => {
    todoList.removeChild(list);
  })
  textValue.innerText = data.text;
  passwordValue.innerText = data.password;
  list.append(textValue, passwordValue, deleteBut);
  todoList.appendChild(list);
  deleteButton.addEventListener('click', () => {
    todoList.remove();
  })
  if(textInput.value === '' && passwordInput.value === '') {
    alert('Форманы толтурунуз!');
  }
  textInput.value = "";
  passwordInput.value = "";
};

addButton.addEventListener('click', () => renderTodo());