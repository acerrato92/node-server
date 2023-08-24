const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function printTasks() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. [${task.completed ? 'X' : ' '}] - ${task.description}`);
  });
}

function addTask(description) {
  tasks.push({ description, completed: false });
  console.log('Tarea añadida.');
  printTasks();
}

function removeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log('Tarea eliminada.');
    printTasks();
  } else {
    console.log('Índice de tarea inválido.');
  }
}

function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log('Tarea completada.');
    printTasks();
  } else {
    console.log('Índice de tarea inválido.');
  }
}

function handleInput(input) {
  const parts = input.split(' ');
  const command = parts[0];

  switch (command) {
    case 'add':
      addTask(parts.slice(1).join(' '));
      break;
    case 'remove':
      removeTask(parseInt(parts[1]) - 1);
      break;
    case 'complete':
      completeTask(parseInt(parts[1]) - 1);
      break;
    case 'exit':
      rl.close();
      break;
    default:
      console.log('Comando no válido.');
  }
}

function start() {
  rl.question('Bienvenido a la gestión de tareas. Ingresa un comando (add / remove / complete / exit): ', (answer) => {
    handleInput(answer);
    if (answer !== 'exit') {
      start();
    }
  });
}

start();
