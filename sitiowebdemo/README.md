# Landing Page para un Curso de Programación Web 🚀

Este proyecto es una landing page diseñada para promocionar un curso de programación web. Muestra las habilidades y tecnologías que se enseñan en el curso, con el objetivo de atraer a posibles estudiantes. La landing page está construida utilizando HTML, CSS y JavaScript, demostrando la aplicación práctica de estas tecnologías.

## Tecnologías Utilizadas 💻

*   **HTML:** Proporciona la estructura y el contenido de la landing page. Se utilizan etiquetas HTML5 semánticas para organizar el contenido de manera efectiva.
    [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://www.w3.org/html/)
*   **CSS:** Da estilo a los elementos HTML para crear un diseño atractivo y responsivo. El proyecto utiliza técnicas CSS como Flexbox y Grid para la gestión del diseño.
    [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
*   **JavaScript:** Añade interactividad y comportamiento dinámico a la landing page. Esto incluye características como el slider de testimonios, preguntas interactivas y, potencialmente, el manejo de formularios.
    [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://www.javascript.com/)
*   **SASS:** Se utiliza SASS para el preprocesamiento y la gestión de CSS.
    [![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com/)

## Estructura del Proyecto 📂

La estructura de archivos del proyecto incluye:

*   `index.html`: El archivo HTML principal que contiene la estructura de la landing page.
*   `css/`: Directorio que contiene los archivos CSS (`normalize.css`, `estilos.css`). `normalize.css` ayuda a garantizar un estilo consistente en diferentes navegadores. `estilos.css` probablemente contiene los estilos principales para la landing page.
*   `images/`: Directorio que contiene las imágenes utilizadas en la landing page (logo, iconos, etc.). 🖼️
*   `js/`: Directorio que contiene los archivos JavaScript (`slider.js`, `questions.js`, `menu.js`). Estos archivos manejan el slider de testimonios, las preguntas frecuentes y la funcionalidad del menú.

## Elementos y Secciones Clave de HTML 🧱

El código HTML está estructurado en varias secciones clave:

*   **Cabecera (`<header class="hero">`):**
    *   Contiene el menú de navegación (`<nav class="nav">`) con enlaces a diferentes secciones de la página (Inicio, Acerca de, Contacto, Blog). 🧭
    *   Incluye una sección hero (`<section class="hero__container">`) con un título prominente, una breve descripción del curso y un botón de llamada a la acción.
*   **Principal (`<main>`):**
    *   **Sección Acerca de (`<section class="container about">`):** Describe lo que los estudiantes aprenderán en el curso, destacando temas clave como CSS Layouts, Animaciones y Sass. ℹ️
    *   **Sección Conocimiento (`<section class="knowledge">`):** Presenta una visión general más detallada del curso e incluye una llamada a la acción.
    *   **Sección Precio (`<section class="price container">`):** Muestra diferentes planes de precios o módulos del curso (Flexbox, Grid, Animaciones) con sus respectivas características y precios. 💰
    *   **Sección Testimonios (`<section class="testimony">`):** Muestra testimonios de estudiantes utilizando un slider para generar confianza y credibilidad. JavaScript (`slider.js`) se utiliza para controlar la funcionalidad del slider. 💬
    *   **Sección Preguntas (`<section class="questions container">`):** Proporciona respuestas a las preguntas frecuentes para abordar posibles inquietudes y proporcionar más información. JavaScript (`questions.js`) se utiliza para manejar la expansión/contracción de las respuestas. ❓
*   **Pie de Página (`<footer>`):**
    *   Contiene un menú de navegación, un formulario de suscripción al boletín, enlaces a redes sociales e información de derechos de autor.

## Etiquetas Meta de HTML ⚙️

La sección `<head>` incluye importantes etiquetas meta para SEO y el uso compartido en redes sociales:

*   `<meta name="description" ...>`: Proporciona una breve descripción de la landing page para los motores de búsqueda.
*   `<meta property="og:title" ...>` y `<meta property="og:description" ...>`: Definen el título y la descripción que se mostrarán cuando la página se comparta en plataformas de redes sociales como Facebook.
*   `<meta property="twitter:title" ...>` y `<meta property="twitter:description" ...>`: Definen el título y la descripción que se mostrarán cuando la página se comparta en Twitter.

## Funcionalidad de JavaScript ⚡

Los archivos JavaScript mejoran la experiencia del usuario:

*   `slider.js`: Implementa el slider de testimonios, permitiendo a los usuarios explorar diferentes reseñas de estudiantes.
*   `questions.js`: Maneja la sección interactiva de preguntas frecuentes, permitiendo a los usuarios expandir y contraer las respuestas a las preguntas.
*   `menu.js`: Gestiona el comportamiento del menú de navegación, especialmente en pantallas más pequeñas (por ejemplo, un menú de hamburguesa).

## Áreas de Mejora 💡

*   **Accesibilidad:** Considera agregar atributos ARIA para mejorar la accesibilidad para usuarios con discapacidades. ♿
*   **Optimización de Imágenes:** Optimiza las imágenes para reducir el tamaño de los archivos y mejorar la velocidad de carga de la página. 🖼️
*   **Comentarios de Código:** Agrega más comentarios al código HTML, CSS y JavaScript para mejorar la legibilidad y el mantenimiento. 📝
*   **Responsividad:** Asegúrate de que la landing page sea totalmente responsiva y se vea bien en todos los dispositivos (ordenadores de escritorio, tablets y teléfonos móviles). Pruébala a fondo en diferentes tamaños de pantalla. 📱
*   **SEO:** Optimiza aún más la landing page para los motores de búsqueda utilizando palabras clave relevantes en el contenido y las etiquetas meta. 🔍

Este proyecto de landing page proporciona una base sólida para promocionar un curso de programación web. Al centrarse en una comunicación clara, un diseño atractivo y elementos interactivos, puede atraer eficazmente a posibles estudiantes y animarlos a inscribirse. ✨
