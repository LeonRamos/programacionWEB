# Proyecto Demo Web - Componente hero

En esta versión 1.1, se han agregado mejoras significativas a la estructura HTML y los estilos CSS para mejorar la presentación y la experiencia del usuario.

## 📌 Mejoras en la Versión 1.1

### 🔹 HTML
Se han agregado los siguientes elementos clave:
- **Encabezado (`<header class="hero">`)**: Ahora la página cuenta con un encabezado que incluye un título y un menú de navegación.
- **Menú de Navegación (`<nav class="nav container">`)**:
  - Se ha agregado un título principal: `Curso Programación Web`.
  - Se ha creado un menú de navegación con enlaces e iconos.
  - Los iconos estarán ocultos en pantallas grandes y se mostrarán en pantallas pequeñas.
- **Imagen de Fondo y Clip Path**:
  - Se ha agregado una imagen de fondo al contenedor principal (`.hero`).
  - Se ha utilizado **CLIPPY CSS** para definir una forma personalizada en el fondo del contenedor.
- **Sección de Llamada a la Acción (`<section class="hero__container container">`)**:
  - Se ha agregado un título principal llamativo.
  - Se incluye un párrafo explicando el propósito del curso.
  - Se ha añadido un botón con un enlace de llamado a la acción.

### 🎨 CSS
Se han aplicado varios estilos personalizados para mejorar la apariencia:
- **Variables CSS (`:root`)**:
  - Definición de variables globales para colores y espaciados.
- **Diseño del Contenedor (`.container`)**:
  - Se ha establecido un ancho máximo y márgenes automáticos.
- **Estilización del Header (`.hero`)**:
  - Se ha utilizado un `display: grid` para una distribución estructurada.
  - Se ha definido una altura adaptable con `min-height` y `max-height`.
- **Menú de Navegación (`.nav`)**:
  - Se ha alineado el contenido con `display: flex` y `grid`.
  - Se han agregado estilos a los elementos del menú (`.nav__items`, `.nav__links`).
  - Se ha creado un botón de menú para pantallas pequeñas (`.nav__menu`).
- **Fondo con Efecto (`.hero::before`)**:
  - Imagen de fondo con `background-image` y efecto `clip-path`.
- **Sección de Llamada a la Acción (`.hero__container`)**:
  - Se ha centrado el contenido y aumentado la tipografía para mayor impacto.
  - Se ha definido un `padding-bottom` para mejorar el espaciado.
  - Se ha agregado un botón (`.cta`) con colores atractivos y bordes redondeados.

## 📂 Estructura del Proyecto
```
📁 Curso-Programacion-Web
│── 📂 images                # Contiene imágenes utilizadas en la web
│── 📂 css                   # Archivos de estilos CSS
│── 📂 js                    # Archivos de scripts JavaScript (futuros)
│── 📄 index.html            # Archivo principal de la landing page
│── 📄 styles.css            # Archivo principal de estilos
│── 📄 README.md             # Documentación del proyecto
```

## 🚀 ¿Cómo Ejecutarlo?
1. Clona este repositorio en tu máquina local:
   ```sh
   git clone https://github.com/tu-usuario/Curso-Programacion-Web.git
   ```
2. Abre el archivo `index.html` en tu navegador.
3. Explora el código fuente para comprender la estructura y los estilos.

## 🎯 Objetivo del Proyecto
Este proyecto tiene como propósito proporcionar una base sólida para aprender **HTML, CSS y JavaScript**, permitiendo a los estudiantes desarrollar sus propios proyectos web de manera efectiva y profesional.

## 📌 Próximas Mejoras (Versión 1.2)
- Implementación de interactividad con **JavaScript**.
- Optimización del diseño responsivo para una mejor experiencia en móviles.
- Mejora en la accesibilidad y usabilidad del sitio.

---
**Desarrollado con ❤️ por el equipo de Programación Web.**
