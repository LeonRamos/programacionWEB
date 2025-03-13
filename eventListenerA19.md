# 🎯 **Event Listeners en Angular 19**

![Angular Badge](https://img.shields.io/badge/Angular-19-red?logo=angular)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)

Aprende a manejar eventos del DOM en Angular 19 de forma sencilla y clara. 🚀

## 🧩 **Paso a Paso para Crear un Event Listener en Angular 19**

### 🛠️ **1. Crear un Nuevo Proyecto en Angular**
Si no tienes un proyecto iniciado, puedes crearlo con el siguiente comando:

```bash
ng new mi-proyecto-angular
cd mi-proyecto-angular
ng serve
```

---

### 📄 **2. Crear un Componente**
Genera un nuevo componente con el siguiente comando:

```bash
ng generate component ejemplo-event-listener
```

---

### 💻 **3. Editar el Componente** (`ejemplo-event-listener.component.ts`)

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-event-listener',
  templateUrl: './ejemplo-event-listener.component.html',
  styleUrls: ['./ejemplo-event-listener.component.css']
})
export class EjemploEventListenerComponent {
  // 🎯 Método que se ejecutará cuando se active el evento
  onButtonClick(): void {
    console.log('¡El botón fue clicado!');
    alert('¡El botón fue clicado!');
  }

  // 🎯 Método para capturar el evento del teclado
  onKeyPress(event: KeyboardEvent): void {
    console.log(`Tecla presionada: ${event.key}`);
  }
}
```

---

### 🌐 **4. Editar el Template** (`ejemplo-event-listener.component.html`)

```html
<h2>🎯 Demostración de Event Listeners en Angular 19</h2>

<!-- Evento de clic -->
<button (click)="onButtonClick()">Haz clic aquí</button>

<!-- Evento de teclado -->
<input type="text" (keyup)="onKeyPress($event)" placeholder="Escribe algo aquí">
```

---

### 📋 **5. Agregar el Componente en el `app.component.html`**

```html
<app-ejemplo-event-listener></app-ejemplo-event-listener>
```

---

### 🚀 **6. Probar el Proyecto**
Ejecuta el proyecto para verificar que funciona correctamente:

```bash
ng serve
```

Abre el navegador en **`http://localhost:4200`** y prueba:

✅ **Al hacer clic en el botón**, verás un mensaje en la consola y en una alerta.  
✅ **Al escribir en el campo de texto**, cada tecla que presiones se mostrará en la consola.

---

### 🔎 **7. Explicación de Conceptos Clave**
- `(click)`: Escucha el evento de clic del elemento del DOM. 🔘
- `(keyup)`: Escucha el evento cuando se suelta una tecla. ⌨️
- `$event`: Es el objeto del evento que proporciona información adicional (por ejemplo, qué tecla se presionó). ℹ️

---

📚 ** explorar eventos avanzados como `@HostListener` o manipulación del DOM con Angular ** 
