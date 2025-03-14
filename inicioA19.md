# ✨ Proyecto Angular 19 - Inicio de Sesión Minimalista con Angular Material ✨

![Angular](https://img.shields.io/badge/Angular-19-red?style=for-the-badge&logo=angular)
![Material](https://img.shields.io/badge/Material%20Design-UI%2FUX-blue?style=for-the-badge&logo=material-design)

## 📚 Descripción
Este proyecto es un sistema de inicio de sesión minimalista utilizando **Angular 19** y **Angular Material**. Además, incluye una opción para recuperar la contraseña sin necesidad de una base de datos.

---

## ✅ Pasos para construir el proyecto

### 1. ⚡ Crear el proyecto Angular
```bash
ng new login-project
cd login-project
```

---

### 2. ➕ Instalar Angular Material
```bash
ng add @angular/material
```
Selecciona el tema **Indigo/Pink** o uno similar minimalista.

---

### 3. ⚒️ Crear los componentes
```bash
ng generate component components/login
ng generate component components/password-recovery
```

---

### 4. 📝 Diseño del componente de inicio de sesión
**`login.component.html`**
```html
<mat-card class="login-card">
  <mat-card-header>
    <mat-card-title>Iniciar Sesión</mat-card-title>
  </mat-card-header>

  <mat-card-content>
    <form [formGroup]="loginForm" (ngSubmit)="onLogin()">
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Correo electrónico</mat-label>
        <input matInput formControlName="email" type="email" required />
      </mat-form-field>

      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Contraseña</mat-label>
        <input matInput formControlName="password" type="password" required />
      </mat-form-field>

      <button mat-raised-button color="primary" class="full-width">Ingresar</button>
    </form>
  </mat-card-content>

  <mat-card-actions>
    <button mat-button color="accent" (click)="onRecoverPassword()">¿Olvidaste tu contraseña?</button>
  </mat-card-actions>
</mat-card>
```

---

### 5. ⚙️ Lógica del componente de inicio de sesión
**`login.component.ts`**
```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin() {
    const { email, password } = this.loginForm.value;

    if (email === 'admin@ejemplo.com' && password === 'admin123') {
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Credenciales incorrectas');
    }
  }

  onRecoverPassword() {
    this.router.navigate(['/password-recovery']);
  }
}
```

---

### 6. ✨ Estilo minimalista
**`login.component.css`** y **`password-recovery.component.css`**
```css
.full-width {
  width: 100%;
  margin-bottom: 15px;
}

.login-card, .recovery-card {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}
```

---

### 7. 🌟 Ejecutar el proyecto
Para probar el proyecto, ejecuta:
```bash
ng serve
```
Abre tu navegador en [http://localhost:4200](http://localhost:4200)

---



## 📚 Recursos adicionales
- [Documentación Oficial de Angular](https://angular.io/)
- [Documentación Oficial de Angular Material](https://material.angular.io/)

---


