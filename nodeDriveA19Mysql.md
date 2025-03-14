# Proyecto Angular + MySQL para Autenticación 🚀

![Angular](https://img.shields.io/badge/Angular-19-red) ![Node.js](https://img.shields.io/badge/Node.js-20-green) ![MySQL](https://img.shields.io/badge/MySQL-8-blue) ![Material](https://img.shields.io/badge/Angular%20Material-UI-orange)

## 📋 Requisitos
- MySQL 8 o superior
- Node.js 20 o superior
- Angular 19

## ⚙️ Instalación de MySQL en Windows
1. Descarga el instalador de [MySQL](https://dev.mysql.com/downloads/installer/)
2. Durante la instalación, selecciona **"Server Only"**
3. Configura una contraseña segura para el usuario root
4. Finaliza la instalación y anota el puerto por defecto (generalmente 3306)

## 📂 Creación de la Base de Datos
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

mkdir backend
cd backend
npm init -y
npm install express mysql body-parser cors jsonwebtoken bcryptjs dotenv
```

## 🚀 Configuración del Backend (Node.js)
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
  db.query(query, [username, hashedPassword], (err, result) => {
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

## 🎯 Configuración del Frontend (Angular)
```typescript
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
```html
<mat-card>
  <h1>Inicio de Sesión</h1>
  <mat-form-field>
    <input matInput placeholder="Usuario" [(ngModel)]="username">
  </mat-form-field>
  <mat-form-field>
    <input matInput placeholder="Contraseña" type="password" [(ngModel)]="password">
  </mat-form-field>
  <button mat-raised-button color="primary" (click)="login()">Iniciar Sesión</button>
</mat-card>
```

## ✅ Ejecución del Proyecto
1. Inicia el backend con el comando: `node server.js`
2. Inicia el frontend con el comando: `ng serve`

Con esto, tendrás un sistema de autenticación funcional utilizando Angular, Node.js, MySQL y Angular Material. 🚀
