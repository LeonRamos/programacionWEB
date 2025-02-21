# demoWeb

🚀 Proyecto Demo Web - Estructura Inicial de Landing Page

## 📌 Descripción
Este repositorio contiene la estructura inicial del proyecto **demoWeb**, una landing page en desarrollo. En esta primera versión, se han creado las carpetas y archivos básicos necesarios para comenzar el proyecto de manera organizada y eficiente.

## 📂 Estructura del Proyecto

```
/demoWeb
│── index.html  # Archivo principal de la landing page
│── /CSS        # Carpeta para los estilos CSS
│    ├── normalize.css  # Normalización de estilos para compatibilidad entre navegadores
│    ├── estilos.css    # Estilos personalizados del proyecto
│── /JS         # Carpeta para los scripts de JavaScript
│── /IMAGES     # Carpeta para almacenar imágenes y recursos gráficos
```

## 🛠️ Herramientas y Configuración Inicial

Para el desarrollo del proyecto, se utilizó el editor **Visual Studio Code (VSCode)** con los siguientes complementos instalados:

- **Beautify**: Para mejorar la legibilidad y formato del código.
- **Live Server**: Para visualizar los cambios en tiempo real sin necesidad de recargar manualmente la página.
- **VSCode Icons**: Para una mejor organización visual de los archivos en el explorador de VSCode.

## 🎨 Recursos Utilizados

- **Imágenes**: Descargadas desde [Unsplash](https://unsplash.com/).
- **Íconos SVG**: Descargados desde [Boxicons](https://boxicons.com/).
- **Optimización de imágenes PNG**: Se utilizó [Tinify](https://tinypng.com/) para reducir el tamaño de las imágenes sin pérdida de calidad.
- **Normalización de estilos CSS**: Se obtuvo el archivo `normalize.css` desde [Normalize.css](https://necolas.github.io/normalize.css/) para garantizar una visualización uniforme en distintos navegadores.

## ✍️ Configuración de Estilos CSS

- Se agregó un **selector universal** en `normalize.css`:
  ```css
  * {
      margin: 0;
      box-sizing: border-box;
  }
  ```
- Se modificó el `h1` para eliminar su margen predeterminado:
  ```css
  h1 {
      margin: 0;
  }
  ```
- Se creó el archivo `estilos.css` y se agregó la fuente **Poppins** utilizando `@import`:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

  body {
      font-family: 'Poppins', sans-serif;
  }
  ```

## 🌐 Configuración del `index.html`

En la raíz del proyecto se creó el archivo `index.html` con la estructura básica de un documento HTML5, incluyendo:

- **Favicon**
- **Enlaces a normalize.css y estilos.css**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Web</title>
    <link rel="icon" href="IMAGES/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="CSS/normalize.css">
    <link rel="stylesheet" href="CSS/estilos.css">
</head>
<body>
    <h1>Bienvenido a Demo Web</h1>
</body>
</html>
```

## 📢 Notas Adicionales
- Recuerda utilizar `Live Server` en VSCode para visualizar los cambios en tiempo real.
- Se recomienda seguir la organización de carpetas establecida para mantener un código limpio y estructurado.
- Se sugiere documentar cualquier modificación importante en el código para facilitar su mantenimiento.

## 🏆 Tecnologías Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Web Development](https://img.shields.io/badge/Web%20Development-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)

---
📌 **Autor:** [Tu Nombre]  
📅 **Fecha de Creación:** [Fecha Actual]  
🔗 **Repositorio:** [URL del Repositorio]
