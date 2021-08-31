

function handleAddNewTask(e) {
  e.preventDefault()
  const card = getNewCard("Titulo de prueba", "Lavar la ropa antes de que se oculte el sol")
  const tasksList = document.getElementById('tasksList')
  tasksList.innerHTML += card
}