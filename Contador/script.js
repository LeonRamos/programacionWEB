// Seleccionar elementos del DOM
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Inicializar el contador
let counter = 0;

// Función para actualizar el contador en pantalla
function updateCounter() {
    counterElement.textContent = counter;
}

// Incrementar el contador
incrementButton.addEventListener('click', () => {
    counter++;
    updateCounter();
});

// Decrementar el contador
decrementButton.addEventListener('click', () => {
    counter--;
    updateCounter();
});

// Reiniciar el contador
resetButton.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});
