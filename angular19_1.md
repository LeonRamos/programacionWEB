# 🚀 Vinculación de Texto Dinámico, Propiedades y Atributos en Angular 19

![Angular](https://img.shields.io/badge/Angular-19-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![HTML](https://img.shields.io/badge/HTML-orange?style=for-the-badge&logo=html5)

En Angular 19, la **vinculación de texto dinámico** se logra mediante:

✅ **Interpolación de texto** (`{{ }}`) para mostrar datos directamente en el HTML.  
✅ **Binding de propiedades** (`[property]`) para asignar propiedades del DOM.  
✅ **Binding de atributos** (`[attr.attribute]`) para manejar atributos personalizados o de accesibilidad.  

---

## 🧑‍💻 Paso 1: Crear el proyecto Angular
Ejecuta estos comandos:

```bash
npm install -g @angular/cli@19
ng new ejemplo-angular19
cd ejemplo-angular19
ng serve
```

---

## 🏗️ Paso 2: Crear un componente
Genera el componente `usuario`:

```bash
ng generate component usuario
```

---

## 📋 Paso 3: Definir el contenido dinámico
En `usuario.component.ts`:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  nombre: string = 'Leon Miguel';
  edad: number = 35;
  activo: boolean = true;

  get mensajeEstado(): string {
    return this.activo ? 'Usuario activo' : 'Usuario inactivo';
  }
}
```

---

## 🎯 Paso 4: Diseño del HTML
En `usuario.component.html`:

```html
<div>
  <h1>Perfil de Usuario</h1>

  <!-- Interpolación de texto -->
  <p>Nombre: {{ nombre }}</p>
  <p>Edad: {{ edad }}</p>
  <p>Estado: {{ mensajeEstado }}</p>

  <!-- Binding de propiedades -->
  <img [src]="'https://via.placeholder.com/150'" [alt]="'Foto de ' + nombre" />

  <!-- Binding de atributos -->
  <button [attr.aria-label]="'Botón para ' + mensajeEstado">
    {{ mensajeEstado }}
  </button>

  <!-- Ejemplo condicional para aplicar clases dinámicas -->
  <p [class.activo]="activo" [class.inactivo]="!activo">
    Estado del perfil
  </p>
</div>
```

---

## 🎨 Paso 5: Estilos dinámicos
En `usuario.component.css`:

```css
.activo {
  color: green;
  font-weight: bold;
}

.inactivo {
  color: red;
  font-weight: bold;
}
```

---

## 🖥️ Paso 6: Integrar el componente en la vista principal
En `app.component.html`:

```html
<app-usuario></app-usuario>
```

---

## 🚨 Paso 7: Ejecutar el proyecto
Ejecuta el siguiente comando para ver el resultado:

```bash
ng serve
```

Luego, accede a [http://localhost:4200](http://localhost:4200) desde tu navegador.

---

## ✅ Resultado esperado
✅ **Interpolación:** El nombre, la edad y el estado se muestran dinámicamente en el HTML.  
✅ **Binding de propiedades:** La imagen se carga dinámicamente.  
✅ **Binding de atributos:** El botón incluye el atributo `aria-label` para accesibilidad.  
✅ **Clases dinámicas:** El texto de estado cambia de color según el estado del usuario.

---

## 🤓 ¿Quieres seguir explorando Angular 19?
¡Anímate a agregar nuevas propiedades, condicionales o estilos dinámicos para personalizar el proyecto! 🚀

