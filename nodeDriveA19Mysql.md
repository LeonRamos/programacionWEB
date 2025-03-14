# Proyecto Angular + MySQL para Autenticación 🚀

![Angular](https://img.shields.io/badge/Angular-19-red) ![Node.js](https://img.shields.io/badge/Node.js-20-green) ![MySQL](https://img.shields.io/badge/MySQL-8-blue) ![Material](https://img.shields.io/badge/Angular%20Material-UI-orange)

## 📋 Requisitos
- MySQL 8 o superior
- Node.js 20 o superior
- Angular 19

## 📋 Pasos para Crear la Base de Datos en Windows

1. Descarga el instalador de MySQL desde el sitio oficial: [MySQL Installer](https://dev.mysql.com/downloads/installer/).
2. Durante la instalación, selecciona **"Server Only"** si solo deseas instalar el servidor MySQL.
3. Configura una contraseña segura para el usuario **root**.
4. Finaliza la instalación y anota el puerto por defecto (generalmente **3306**).

## 🗄️ Crear la Base de Datos en MySQL

```sql
CREATE DATABASE auth_db;
USE auth_db;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL
);
```

## 🖥️ Creación del Proyecto Angular y Backend
```bash
ng new angular-auth --routing --style=css
cd angular-auth
ng add @angular/material
ng g c components/login
ng g c components/register
ng g s services/auth
```

### Crear el backend con Node.js y Express
```bash
mkdir backend
cd backend
npm init -y
npm install express mysql body-parser cors jsonwebtoken bcryptjs dotenv
```


## 🖥️ Configurar el Backend (Node.js)
En el directorio `backend`, crea el archivo `server.js` con el siguiente contenido:

```javascript
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'auth_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, hashedPassword], (err) => {
    if (err) return res.status(500).send(err);
    res.status(200).send({ message: 'Usuario registrado con éxito' });
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err || results.length === 0) return res.status(401).send('Usuario no encontrado');

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) return res.status(401).send('Contraseña incorrecta');

    const token = jwt.sign({ id: user.id }, 'clave_secreta', { expiresIn: '1h' });
    res.status(200).send({ auth: true, token });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
```


## 🌐 Configurar el Frontend en Angular
En el servicio `AuthService` (`src/app/services/auth.service.ts`)

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }
}
```

## 📲 Interfaz de Usuario con Angular Material
## 📝 Crear Componentes de Login y Registro
En el componente `Login` (`src/app/components/login/login.component.ts`)

```typescript
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login({ username: this.username, password: this.password })
      .subscribe(response => {
        alert('Inicio de sesión exitoso');
        localStorage.setItem('token', response.token);
      }, err => alert('Error en el inicio de sesión'));
  }
}
```

## 🎨 Estilo con Angular Material
En el archivo `login.component.html` agrega el siguiente contenido:

```html
<mat-card>
  <mat-card-title>Inicio de Sesión</mat-card-title>
  <mat-form-field appearance="fill">
    <mat-label>Usuario</mat-label>
    <input matInput [(ngModel)]="username" />
  </mat-form-field>

  <mat-form-field appearance="fill">
    <mat-label>Contraseña</mat-label>
    <input matInput [(ngModel)]="password" type="password" />
  </mat-form-field>

  <button mat-raised-button color="primary" (click)="login()">Iniciar Sesión</button>
</mat-card>
```

## ✅ Ejecución del Proyecto
1. Inicia el backend con el comando: `node server.js`
2. Inicia el frontend con el comando: `ng serve`

