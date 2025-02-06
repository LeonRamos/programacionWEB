# Estructurar un Archivo CSS3

## 1. Organización del Archivo

- **Estructura jerárquica**: Organiza los estilos de arriba hacia abajo según la estructura del documento HTML (ej. genéricos, encabezados, navegación, contenido principal, pie de página).
- **Agrupación lógica**: Divide el archivo en secciones mediante comentarios claros para facilitar la navegación:

```css
/* General Styles */
body { margin: 0; font-family: Arial, sans-serif; }

/* Header */
header { background-color: #333; color: white; }

/* Footer */
footer { text-align: center; }
```

## 2. Nombrado Consistente

- Usa nombres descriptivos y coherentes para selectores. Evita caracteres especiales o mayúsculas al inicio (ej. `menu-item`, no `#1Div`).
- Prefiere clases (`.clase`) sobre IDs (`#id`) para estilos reutilizables.

## 3. Uso de Propiedades Abreviadas

- Reduce líneas de código con propiedades abreviadas:

```css
/* En lugar de esto */
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;

/* Usa esto */
margin: 10px 5px;
```

Esto mejora la legibilidad y optimización del archivo.

## 4. Evitar Redundancia

- Combina selectores que compartan estilos similares:

```css
h1, h2, h3 { font-family: Arial; color: #333; }
```

Esto reduce duplicaciones y facilita cambios globales.

## 5. Unidades Relativas

- Usa unidades como `em`, `rem` o `%` en lugar de valores fijos (`px`) para mejorar la accesibilidad y adaptabilidad a diferentes pantallas.

## 6. Comentarios Claros

- Documenta bloques complejos con comentarios útiles:

```css
/* Estilos para el menú principal */
nav { background-color: #444; color: white; }
```

## 7. Separación del CSS

- Evita estilos inline dentro del HTML. Usa hojas externas (`styles.css`) para mantener la separación entre contenido y presentación.
