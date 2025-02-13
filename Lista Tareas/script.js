// Seleccionar elementos del DOM
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Cargar tareas guardadas al iniciar la página
document.addEventListener('DOMContentLoaded', loadTasks);

// Agregar evento de envío al formulario
taskForm.addEventListener('submit', addTask);

// Función para agregar una nueva tarea
function addTask(e) {
    e.preventDefault();
    
    if (taskInput.value.trim() === '') return;
    
    const taskText = taskInput.value;
    createTaskElement(taskText);
    
    // Guardar tarea en el almacenamiento local
    saveTask(taskText);
    
    taskInput.value = '';
}

// Función para crear un elemento de tarea
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.className = 'task-item';
    
    const span = document.createElement('span');
    span.textContent = taskText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.className = 'delete-btn';
    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    
    // Agregar eventos a los elementos de la tarea
    li.addEventListener('click', toggleTask);
    deleteBtn.addEventListener('click', deleteTask);
}

// Función para alternar el estado de una tarea
function toggleTask(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
        updateTask(e.target.querySelector('span').textContent);
    }
}

// Función para eliminar una tarea
function deleteTask(e) {
    const li = e.target.parentElement;
    taskList.removeChild(li);
    removeTask(li.querySelector('span').textContent);
}

// Funciones para manejar el almacenamiento local
function saveTask(task) {
    let tasks = getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function loadTasks() {
    let tasks = getTasks();
    tasks.forEach(task => createTaskElement(task));
}

function updateTask(taskText) {
    let tasks = getTasks();
    const index = tasks.indexOf(taskText);
    if (index > -1) {
        tasks[index] = taskText;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

function removeTask(taskText) {
    let tasks = getTasks();
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
