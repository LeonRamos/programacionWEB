# CSS Coherente y Fácil de Mantener

## 1. Usa una Convención de Nomenclatura Coherente

Adopta un sistema como **BEM (Block-Element-Modifier)** para nombrar clases de manera clara y estructurada:

```css
.menu__item--activo { color: red; }
```

Evita nombres genéricos como `.azul` o `.grande`, ya que no describen la función del elemento.

## 2. Organiza el Código Lógicamente

- Agrupa estilos relacionados (por ejemplo, estilos generales, encabezados, botones).
- Ordena las propiedades alfabéticamente o por categorías (como tipografía, colores, márgenes).
- Usa comentarios para dividir el archivo en secciones:

```css
/* Encabezado */
header { ... }

/* Navegación */
nav { ... }
```

## 3. Divide el Código en Archivos

Separa estilos en archivos específicos según su propósito (ej. `header.css`, `footer.css`) y utiliza importaciones:

```css
@import 'header.css';
@import 'footer.css';
```

Esto mejora la legibilidad y facilita el trabajo en equipo.

## 4. Aplica el Principio DRY (Don’t Repeat Yourself)

Evita duplicar estilos creando clases reutilizables:

```css
.box { background: #ccc; border-radius: 5px; }
```

Combina selectores similares para reducir redundancia:

```css
h1, h2, h3 { font-family: Arial; color: #333; }
```

Esto optimiza el tamaño del archivo y mejora la consistencia.

## 5. Usa Herramientas de Validación y Refactorización

- Valida tu CSS con herramientas como el **Validador de CSS del W3C**.
- Revisa periódicamente tu código para eliminar estilos obsoletos o redundantes.

## 6. Implementa un Restablecimiento o Normalización

Usa librerías como `normalize.css` para garantizar coherencia entre navegadores.

## 7. Mejora la Legibilidad

- Utiliza saltos de línea y sangrías consistentes.
- Escribe cada propiedad en líneas separadas para facilitar su lectura:

```css
.boton {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border-radius: 5px;
}
