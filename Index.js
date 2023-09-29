const readline = require('readline');

// Estructura de datos para almacenar las tareas
const Task = {
  id: 0,
  indicator: '',
  description: '',
  completed: false,
};

// Lista de tareas
const tasks = [];

// Función para añadir una tarea
function addTask() {
  // Solicitamos al usuario los datos de la tarea
  const indicator = readline.question('Indicador: ');
  const description = readline.question('Descripción: ');

  // Creamos una nueva tarea
  const task = new Task();
  task.id = tasks.length + 1;
  task.indicator = indicator;
  task.description = description;
  task.completed = false;

  // Añadimos la tarea a la lista
  tasks.push(task);
}

// Función para eliminar una tarea
function deleteTask() {
  // Solicitamos al usuario el ID de la tarea a eliminar
  const id = parseInt(readline.question('ID de la tarea a eliminar: '));

  // Buscamos la tarea en la lista
  const task = tasks.find(t => t.id === id);

  // Eliminamos la tarea
  if (task) {
    tasks.splice(tasks.indexOf(task), 1);
  }
}

// Función para completar una tarea
function completeTask() {
  // Solicitamos al usuario el ID de la tarea a completar
  const id = parseInt(readline.question('ID de la tarea a completar: '));

  // Buscamos la tarea en la lista
  const task = tasks.find(t => t.id === id);

  // Completamos la tarea
  if (task) {
    task.completed = true;
  }
}

// Función principal
function main() {
  // Mostramos el menú de opciones
  console.log('Menú de opciones');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Completar tarea');
  console.log('4. Salir');

  // Solicitamos al usuario la opción a ejecutar
  const option = parseInt(readline.question('Opción: '));

  // Ejecutamos la función correspondiente
  switch (option) {
    case 1:
      addTask();
      break;
    case 2:
      deleteTask();
      break;
    case 3:
      completeTask();
      break;
    case 4:
      return;
    default:
      console.log('Opción no válida');
  }

  // Mostramos la lista de tareas
  console.log('Lista de tareas');
  tasks.forEach(t => console.log(`ID: ${t.id}, Indicador: ${t.indicator}, Descripción: ${t.description}, Completado: ${t.completed}`));
}

// Ejecutamos la función principal
main();
