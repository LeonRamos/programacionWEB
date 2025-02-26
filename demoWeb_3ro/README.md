# Curso de Programación Web

## Versión 1.2

### Mejoras en esta versión:

Se han agregado nuevas secciones al HTML y CSS para mejorar la presentación y funcionalidad del curso.

### Cambios en el HTML:

Se ha añadido un `<main>` con las siguientes secciones:

#### Sección "¿Qué aprenderás en este curso?"
- Sección con título `¿Qué aprenderás en este curso?`.
- Párrafo con descripción sobre los temas cubiertos: Flexbox, Grid, Custom Properties, Position, Animaciones, Box Model, etc.
- Tres artículos con iconos e información sobre los temas principales:
  - **CSS Layouts**
  - **Animaciones**
  - **Sass**

#### Sección "Curso completo de WEB"
- Título `Curso completo de WEB. ¡Domina PROGRAMACION WEB de una vez por todas!`.
- Párrafo descriptivo.
- Botón de llamada a la acción `Entra al curso`.
- Imagen ilustrativa (`macbook.png`).

### Cambios en el CSS:

#### Estilos para la sección "about"
```css
.about{
   text-align: center;
}

.subtitle{
    color: var(--color-title);
    font-size: 2rem;
    margin-bottom: 25px;
}

.about__paragraph{
    line-height: 1.7;
}

.about__main{
    padding-top: 80px;
    display: grid;
    width: 90%;
    margin: 0 auto;
    gap: 1em;
    overflow: hidden;
    grid-template-columns: repeat(auto-fit, minmax(260px, auto));
}

.about__icons{
    display: grid;
    gap: 1em;
    justify-items: center;
    width: 260px;
    overflow: hidden;
    margin: 0 auto;
}

.about__icon{
    width: 40px;
}
```

#### Estilos para la sección "knowledge"
```css
.knowledge{
    background-color: #e5e5f7;
    background-image:  radial-gradient(#444cf7 0.5px, transparent 0.5px), radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
    overflow: hidden;
}

.knowledge__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    align-items: center;
}

.knowledge_picture{
    max-width: 500px;
}

.knowledge__paragraph{
    line-height: 1.7;
    margin-bottom: 15px;
}

.knowledge__img{
    width: 100%;
    display: block;
}
```

### Reutilización de variables CSS:

Se sigue utilizando la variable global ya definida:
```css
:root{
    --paddig-container: 100px 0;
    --color-title: #001A49;
}
```

### Descripción del proyecto:
Este curso de Programación Web está diseñado para enseñar desde los fundamentos hasta el dominio de tecnologías clave como HTML, CSS y JavaScript. Cada versión incluye mejoras en diseño y funcionalidades para una mejor experiencia de aprendizaje.

### Instalación y ejecución:
1. Clonar el repositorio.
2. Abrir el archivo `index.html` en un navegador.
3. Explorar los estilos en `styles.css` para personalizar la apariencia.

### Próximas mejoras:
- Agregar más interactividad con JavaScript.
- Incorporar una sección de testimonios.
- Mejorar la adaptabilidad en dispositivos móviles.

¡Sigue atento a las próximas actualizaciones! 🚀

