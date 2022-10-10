const form = document.querySelector('#form')
const input = document.querySelector('#input')
const todosUl = document.querySelector('#todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
  todos.forEach(todo => {
    addTodo(todo)
  });
}

form.addEventListener('submit', (e)=> {
  e.preventDefault()

  addTodo()
})

function addTodo(todo) {
  let todoText = input.value

  if(todo) {
    todoText = todo.text
  }

  if(todoText) {
    const todoEl = document.createElement('li')
    if(todo && todo.completed) {
      todoEl.classList.add('completed')
    }

    todoEl.innerText = todoText

    todoEl.addEventListener('click', ()=> {
      todoEl.classList.toggle('completed')
      updateLocalStorage()
    })

    todoEl.addEventListener('contextmenu', (e)=> {
      e.preventDefault()
      todoEl.remove()
      updateLocalStorage()
    })

    todosUl.appendChild(todoEl)

    input.value = ''

    updateLocalStorage()
  }
}

function updateLocalStorage() {
  todosEl = document.querySelectorAll('li')
  
  const todos = []

  todosEl.forEach(todoEl => {
    todos.push({
    text: todoEl.innerText,
    completed: todoEl.classList.contains('completed')
  })
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}


//To Use Local Storage:
/*
localStorage.setItem() // add item to the storage
localStorage.getItem() // buscar item from the storage
localStorage.removeItem() // remove item from the storage
*/